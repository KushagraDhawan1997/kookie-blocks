import type { ReactNode, ComponentType } from 'react';

// HugeIcons IconSvgObject type - readonly array of tuples with tag name and attributes
type IconSvgObject = readonly (readonly [string, { readonly [key: string]: string | number }])[];

// Accent color type (matches kookie-ui)
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

// Badge configuration type (matches kookie-ui Sidebar.MenuButton BadgeConfig)
export type DocsBadgeConfig = {
  content: ReactNode;
  variant?: 'solid' | 'soft' | 'surface' | 'outline';
  size?: '1' | '2' | '3';
  color?: AccentColor;
  highContrast?: boolean;
  radius?: 'none' | 'small' | 'medium' | 'large' | 'full';
};

// Navigation types
export interface DocsNavigationItem {
  href: string;
  title: string;
  // Support React components, ReactNode, or HugeIcons IconSvgObject format
  icon?: ComponentType<{ className?: string }> | ReactNode | IconSvgObject;
  badge?: string | DocsBadgeConfig;
  items?: DocsNavigationItem[];
}

export interface DocsNavigationGroup {
  label: string;
  items: DocsNavigationItem[];
}

export interface DocsNavigationConfig {
  groups: DocsNavigationGroup[];
}

// Page metadata types
export interface DocsPageMeta {
  title: string;
  description?: string;
  category?: string;
  source?: string;
}

// Logo configuration
export interface DocsLogoConfig {
  src: string;
  alt?: string;
  href?: string;
  size?: '1' | '2' | '3' | '4' | '5';
}

// Table of contents types
export interface TocItem {
  id: string;
  text: string;
  level: number;
}
