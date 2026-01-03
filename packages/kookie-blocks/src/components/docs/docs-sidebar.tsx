'use client';

import React, { isValidElement } from 'react';
import { Sidebar, Flex, Avatar } from '@kushagradhawan/kookie-ui';
import { HugeiconsIcon } from '@hugeicons/react';
import type { DocsNavigationConfig, DocsLogoConfig } from './types.js';

// HugeIcons IconSvgObject type - readonly array of tuples with tag name and attributes
type IconSvgObject = readonly (readonly [string, { readonly [key: string]: string | number }])[];

type AccentColor =
  | 'gray'
  | 'gold'
  | 'bronze'
  | 'brown'
  | 'yellow'
  | 'amber'
  | 'orange'
  | 'tomato'
  | 'red'
  | 'ruby'
  | 'crimson'
  | 'pink'
  | 'plum'
  | 'purple'
  | 'violet'
  | 'iris'
  | 'indigo'
  | 'blue'
  | 'cyan'
  | 'teal'
  | 'jade'
  | 'green'
  | 'grass'
  | 'lime'
  | 'mint'
  | 'sky';

export interface DocsSidebarProps {
  /** Navigation configuration */
  navigation: DocsNavigationConfig;
  /** Logo configuration */
  logo?: DocsLogoConfig;
  /** Presentation mode from parent Shell */
  presentation?: 'thin' | 'expanded';
  /** Header actions (dark mode toggle, github link, etc.) - displayed next to logo */
  headerActions?: React.ReactNode;
  /** Footer content */
  footer?: React.ReactNode;
  /** Sidebar size */
  size?: '1' | '2';
  /** Sidebar variant */
  variant?: 'soft' | 'outline' | 'surface' | 'ghost';
  /** Menu item variant */
  menuVariant?: 'solid' | 'soft';
  /** Accent color */
  color?: AccentColor;
  /** Current pathname for active state detection */
  pathname?: string;
  /** Link component to use (defaults to 'a') */
  linkComponent?: React.ComponentType<{ href: string; children: React.ReactNode; prefetch?: boolean; 'aria-label'?: string }>;
}

export function DocsSidebar({
  navigation,
  logo,
  presentation = 'expanded',
  headerActions,
  footer,
  size = '2',
  variant = 'soft',
  menuVariant = 'soft',
  color = 'gray',
  pathname = '',
  linkComponent: LinkComponent = 'a' as any,
}: DocsSidebarProps) {

  // Helper to check if icon is HugeIcons IconSvgObject format
  const isIconSvgObject = (icon: unknown): icon is IconSvgObject => {
    return Array.isArray(icon) && icon.length > 0 && Array.isArray(icon[0]);
  };

  // Helper to render icon
  const renderIcon = (icon: React.ComponentType<{ className?: string }> | React.ReactNode | IconSvgObject) => {
    if (!icon) return null;
    if (isValidElement(icon)) return icon;
    // Handle HugeIcons IconSvgObject format
    if (isIconSvgObject(icon)) {
      return <HugeiconsIcon icon={icon} size={16} />;
    }
    if (typeof icon === 'function') {
      const IconComponent = icon as React.ComponentType<{ className?: string }>;
      return <IconComponent />;
    }
    return null;
  };

  return (
    <Sidebar.Root
      size={size}
      variant={variant}
      color={color}
      menuVariant={menuVariant}
      presentation={presentation}
    >
      {(logo || headerActions) && (
        <Sidebar.Header>
          <Flex justify="between" align="center" width="100%">
            {logo && (
              <LinkComponent href={logo.href || '/'} aria-label={logo.alt || 'Home'}>
                <Flex align="center" gap="2">
                  <Avatar fallback={logo.alt?.[0] || 'K'} size="2" src={logo.src} />
                </Flex>
              </LinkComponent>
            )}
            {headerActions && (
              <Flex align="center" gap="0">
                {headerActions}
              </Flex>
            )}
          </Flex>
        </Sidebar.Header>
      )}

      <Sidebar.Content>
        <Sidebar.Menu>
          {navigation.groups.map((group) => (
            <Sidebar.Group key={group.label}>
              <Sidebar.GroupLabel>{group.label}</Sidebar.GroupLabel>
              <Sidebar.GroupContent>
                {group.items.map((item) => {
                  // Check if this item or any nested item is active
                  const hasNestedItems = item.items && item.items.length > 0;
                  const isNestedActive = hasNestedItems
                    ? item.items!.some((subItem) => pathname === subItem.href)
                    : false;

                  if (hasNestedItems) {
                    return (
                      <Sidebar.MenuItem key={item.href}>
                        <Sidebar.MenuSub defaultOpen={isNestedActive}>
                          <Sidebar.MenuSubTrigger>
                            {renderIcon(item.icon)}
                            {item.title}
                          </Sidebar.MenuSubTrigger>
                          <Sidebar.MenuSubContent>
                            {item.items!.map((subItem) => (
                              <Sidebar.MenuButton
                                asChild
                                key={subItem.href}
                                isActive={pathname === subItem.href}
                              >
                                <LinkComponent href={subItem.href}>
                                  {renderIcon(subItem.icon)}
                                  <span className="rt-SidebarMenuLabel">{subItem.title}</span>
                                </LinkComponent>
                              </Sidebar.MenuButton>
                            ))}
                          </Sidebar.MenuSubContent>
                        </Sidebar.MenuSub>
                      </Sidebar.MenuItem>
                    );
                  }

                  // Regular menu item
                  return (
                    <Sidebar.MenuItem key={item.href}>
                      <Sidebar.MenuButton
                        asChild
                        isActive={pathname === item.href}
                        badge={item.badge}
                      >
                        <LinkComponent href={item.href}>
                          {renderIcon(item.icon)}
                          <span className="rt-SidebarMenuLabel">{item.title}</span>
                        </LinkComponent>
                      </Sidebar.MenuButton>
                    </Sidebar.MenuItem>
                  );
                })}
              </Sidebar.GroupContent>
            </Sidebar.Group>
          ))}
        </Sidebar.Menu>
      </Sidebar.Content>

      {footer && <Sidebar.Footer>{footer}</Sidebar.Footer>}
    </Sidebar.Root>
  );
}
