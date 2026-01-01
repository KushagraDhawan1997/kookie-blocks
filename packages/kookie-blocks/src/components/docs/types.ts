import type { ReactNode, ComponentType } from 'react';

// HugeIcons IconSvgObject type - readonly array of tuples with tag name and attributes
type IconSvgObject = readonly (readonly [string, { readonly [key: string]: string | number }])[];

// Navigation types
export interface DocsNavigationItem {
  href: string;
  title: string;
  // Support React components, ReactNode, or HugeIcons IconSvgObject format
  icon?: ComponentType<{ className?: string }> | ReactNode | IconSvgObject;
  badge?: string;
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
}

// Table of contents types
export interface TocItem {
  id: string;
  text: string;
  level: number;
}
