import type { ReactNode, ReactElement } from "react";

/**
 * Shiki syntax highlighting configuration.
 * Controls themes and advanced highlighting options.
 */
export interface ShikiConfig {
  /**
   * Theme names for light and dark modes.
   * Uses Shiki's dual-theme mode for automatic theme switching.
   * @default { light: 'one-light', dark: 'one-dark-pro' }
   */
  themes?: {
    light?: string;
    dark?: string;
  };

  /**
   * Language aliases for custom language mapping.
   * @example { js: 'javascript', ts: 'typescript' }
   */
  langAlias?: Record<string, string>;

  /**
   * Shiki transformers for custom code transformations.
   * Useful for line highlighting, diff syntax, etc.
   * @see https://shiki.style/guide/transformers
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transformers?: any[];

  /**
   * Metadata string passed to transformers.
   * Often used for line highlighting syntax like `{1,3-5}`.
   */
  meta?: string;
}

/**
 * Background configuration for preview section.
 */
export interface PreviewBackgroundProps {
  /** Dot size in pixels (for dots background) */
  dotSize?: number;
  /** Dot color (CSS value) */
  color?: string;
  /** Background color (CSS value) */
  backgroundColor?: string;
  /** Preview section height */
  height?: string;
  /** Preview section width */
  width?: string;
  /** Border radius token (e.g., "3" for var(--radius-3)) */
  radius?: string;
}

/**
 * CodeBlock Component Props
 *
 * A unified code block component supporting:
 * - Runtime syntax highlighting via Shiki (`code` + `language`)
 * - Build-time highlighted content from MDX/rehype-pretty-code (`children`)
 * - Optional preview section for documentation
 */
export interface CodeBlockProps {
  /**
   * Raw code string for runtime Shiki highlighting.
   * Mutually exclusive with `children`.
   */
  code?: string;

  /**
   * Language identifier for syntax highlighting.
   * Required when using `code` prop.
   * @example "typescript", "tsx", "python", "bash"
   */
  language?: string;

  /**
   * Pre-highlighted content from MDX/rehype-pretty-code.
   * Mutually exclusive with `code` prop.
   * Language is auto-detected from `data-language` or `className="language-xxx"`.
   */
  children?: ReactNode;

  /**
   * Shiki syntax highlighting configuration.
   * Only applies when using `code` prop (runtime highlighting).
   */
  shikiConfig?: ShikiConfig;

  /**
   * Show copy-to-clipboard button.
   * @default true
   */
  showCopy?: boolean;

  /**
   * Show language badge.
   * @default true
   */
  showLanguage?: boolean;

  /**
   * Show line numbers.
   * @default true
   */
  showLineNumbers?: boolean;

  /**
   * File path displayed above the code block.
   * @example "src/components/Button.tsx"
   */
  file?: string;

  /**
   * Enable expand/collapse for long code blocks.
   * @default true
   */
  collapsible?: boolean;

  /**
   * Height threshold (in pixels) before code is collapsed.
   * @default 360
   */
  collapsedHeight?: number;

  /**
   * Preview component displayed above the code block.
   * Useful for showcasing component examples in documentation.
   */
  preview?: ReactNode;

  /**
   * Background style for preview section.
   * - `"none"`: Plain card background
   * - `"dots"`: Dotted pattern background
   * - `string`: Image URL for custom background
   * @default "none"
   */
  background?: "none" | "dots" | string;

  /**
   * Customization for preview background.
   */
  backgroundProps?: PreviewBackgroundProps;
}

/**
 * Type guard for React elements with props.
 */
export function isReactElement(node: unknown): node is ReactElement {
  return typeof node === "object" && node !== null && "props" in node && typeof (node as ReactElement).props === "object";
}

/**
 * Extracts plain text content from React children.
 * Used to get copyable code from pre-highlighted MDX content.
 */
export function extractTextFromChildren(children: ReactNode): string {
  if (typeof children === "string") return children;
  if (typeof children === "number") return String(children);
  if (!children) return "";

  if (Array.isArray(children)) {
    return children.map(extractTextFromChildren).join("");
  }

  if (isReactElement(children)) {
    const props = children.props as { children?: ReactNode };
    if (props.children) {
      return extractTextFromChildren(props.children);
    }
  }

  return "";
}

/**
 * Extracts language identifier from pre-highlighted MDX children.
 * Checks `data-language` attribute and `className="language-xxx"` pattern.
 */
export function extractLanguageFromChildren(children: ReactNode): string {
  const findLanguage = (node: ReactNode): string | null => {
    if (!node) return null;

    if (isReactElement(node)) {
      const props = node.props as {
        "data-language"?: string;
        className?: string;
        class?: string;
        children?: ReactNode;
      };

      // Check data-language attribute (rehype-pretty-code)
      if (props["data-language"]) {
        return props["data-language"];
      }

      // Check className for language-xxx pattern
      const className = props.className || props.class || "";
      if (typeof className === "string") {
        const match = className.match(/language-([\w-]+)/i);
        if (match) return match[1];
      }

      // Recursively check children
      if (props.children) {
        if (Array.isArray(props.children)) {
          for (const child of props.children) {
            const lang = findLanguage(child);
            if (lang) return lang;
          }
        } else {
          return findLanguage(props.children);
        }
      }
    }

    return null;
  };

  return findLanguage(children) || "text";
}
