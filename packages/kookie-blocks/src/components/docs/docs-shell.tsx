'use client';

import React, { useState } from 'react';
import { Shell, Flex, IconButton } from '@kushagradhawan/kookie-ui';
import { DocsSidebar } from './docs-sidebar.js';
import type { DocsNavigationConfig, DocsLogoConfig } from './types.js';

export interface DocsShellProps {
  children: React.ReactNode;
  /** Navigation configuration */
  navigation: DocsNavigationConfig;
  /** Logo configuration */
  logo?: DocsLogoConfig;
  /** Optional header actions (dark mode toggle, github link, etc.) */
  headerActions?: React.ReactNode;
  /** Optional sidebar footer content */
  sidebarFooter?: React.ReactNode;
  /** Shell height */
  height?: 'full' | 'auto' | string | number;
  /** Sidebar thin size (when collapsed) */
  sidebarThinSize?: number;
  /** Whether sidebar is resizable */
  sidebarResizable?: boolean;
  /** Mobile trigger icon */
  mobileTriggerIcon?: React.ReactNode;
  /** Current pathname for active state detection */
  pathname?: string;
  /** Link component to use (defaults to 'a') */
  linkComponent?: React.ComponentType<{ href: string; children: React.ReactNode; prefetch?: boolean; 'aria-label'?: string }>;
  /** Whether to show a thin/expanded toggle in the sidebar footer */
  sidebarToggle?: boolean;
}

function SidebarThinToggle() {
  const { sidebarMode, setSidebarMode } = Shell.useSidebarMode();
  const isThin = sidebarMode === 'thin';

  return (
    <IconButton
      variant="ghost"
      size="2"
      highContrast
      color="gray"
      onClick={() => setSidebarMode(isThin ? 'expanded' : 'thin')}
      aria-label={isThin ? 'Expand sidebar' : 'Collapse sidebar'}
    >
      {isThin ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="9" y1="3" x2="9" y2="21" />
          <polyline points="14 9 17 12 14 15" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="9" y1="3" x2="9" y2="21" />
          <polyline points="17 9 14 12 17 15" />
        </svg>
      )}
    </IconButton>
  );
}

export function DocsShell({
  children,
  navigation,
  logo,
  headerActions,
  sidebarFooter,
  height,
  sidebarThinSize = 80,
  sidebarResizable = true,
  mobileTriggerIcon,
  pathname = '',
  linkComponent,
  sidebarToggle = false,
}: DocsShellProps) {
  const [sidebarPresentation, setSidebarPresentation] = useState<'thin' | 'expanded'>('expanded');

  const composedFooter = sidebarToggle ? (
    <Flex justify="between" align="center" width="100%" gap="1">
      {sidebarFooter}
      <SidebarThinToggle />
    </Flex>
  ) : sidebarFooter;

  return (
    <Shell.Root height={height}>
      <Shell.Sidebar
        toggleModes="single"
        thinSize={sidebarThinSize}
        resizable={sidebarResizable}
        defaultState={{ initial: 'collapsed', sm: 'expanded' }}
        onStateChange={(state) => setSidebarPresentation(state === 'thin' ? 'thin' : 'expanded')}
        presentation={{ initial: 'overlay', sm: 'fixed' }}
      >
        <DocsSidebar
          navigation={navigation}
          logo={logo}
          presentation={sidebarPresentation}
          headerActions={headerActions}
          footer={composedFooter}
          pathname={pathname}
          linkComponent={linkComponent}
        />
      </Shell.Sidebar>

      <Shell.Content>
        {/* Mobile trigger */}
        <Flex
          display={{ initial: 'flex', sm: 'none' }}
          position="fixed"
          top="4"
          left="4"
          align="center"
          justify="center"
          width="auto"
          height="auto"
          style={{ zIndex: 999 }}
        >
          <IconButton variant="ghost" size="3" highContrast color="gray" asChild>
            <Shell.Trigger target="sidebar">
              {mobileTriggerIcon || (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 4h12M2 8h12M2 12h12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </Shell.Trigger>
          </IconButton>
        </Flex>

        {children}
      </Shell.Content>
    </Shell.Root>
  );
}
