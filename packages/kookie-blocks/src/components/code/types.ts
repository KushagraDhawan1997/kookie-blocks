import type { ReactNode } from "react";

export interface CodeBlockProps {
  // Content modes (mutually exclusive)
  children?: ReactNode; // Pre-highlighted HTML from build-time (MDX)
  code?: string; // Raw code to highlight at runtime
  language?: string; // Language for runtime highlighting

  // Optional features
  preview?: ReactNode; // Preview component (for docs)
  showCopy?: boolean; // Default: true
  showLanguage?: boolean; // Default: true
  file?: string; // File path label
  collapsible?: boolean; // Enable expand/collapse
  collapsedHeight?: number; // Default: 360px

  // Preview styling (for kookie-ui docs)
  background?: "none" | "dots" | string; // Background type
  backgroundProps?: {
    dotSize?: number;
    color?: string;
    backgroundColor?: string;
    height?: string;
    width?: string;
    radius?: string;
  };

  // Theme
  lightTheme?: string; // Default: 'one-light'
  darkTheme?: string; // Default: 'one-dark-pro'
}

