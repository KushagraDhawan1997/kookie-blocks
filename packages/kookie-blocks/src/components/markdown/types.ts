import type { ReactNode } from "react";

/**
 * Options for customizing markdown component behavior
 */
export type MarkdownComponentOptions = {
  /**
   * Whether code blocks should be collapsible
   * @default false
   */
  codeBlockCollapsible?: boolean;

  /**
   * Custom image component
   */
  imageComponent?: (props: { src?: string; alt?: string; width?: string; height?: string }) => ReactNode;

  /**
   * Whether to use high contrast for inline code
   * @default true
   */
  inlineCodeHighContrast?: boolean;
};

/**
 * Common props for markdown child components
 */
export type MarkdownChildrenProps = {
  children?: ReactNode;
};

