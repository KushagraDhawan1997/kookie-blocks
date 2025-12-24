import React, { type ReactNode } from "react";
import type { Components } from "react-markdown";
import { Blockquote, Box, Code, Flex, Heading, Text, Table, Separator } from "@kushagradhawan/kookie-ui";
import { CodeBlock } from "../code";
import type { MarkdownComponentOptions, MarkdownChildrenProps } from "./types";

/**
 * Extracts language from className (e.g., "language-typescript" -> "typescript")
 */
function extractLanguage(className?: string): string {
  if (!className) {
    return "text";
  }
  const match = className.match(/language-([\w-]+)/i);
  return match?.[1] ?? "text";
}

/**
 * Extracts code string from ReactNode children
 */
function extractCode(children?: ReactNode): string {
  let code = "";
  if (!children) {
    return code;
  }
  if (typeof children === "string") {
    code = children;
  } else if (Array.isArray(children)) {
    code = children.map((child) => (typeof child === "string" ? child : "")).join("");
  }
  // Trim trailing newlines but preserve internal whitespace
  return code.replace(/^\n+|\n+$/g, "");
}

/**
 * Creates markdown component mappings that work with both react-markdown and MDX.
 * Uses KookieUI components for consistent styling across all projects.
 *
 * @param options - Optional configuration for component behavior
 * @returns Component mappings for markdown/MDX renderers
 *
 * @example
 * ```tsx
 * // In react-markdown
 * <ReactMarkdown components={createMarkdownComponents()}>
 *   {content}
 * </ReactMarkdown>
 *
 * // In MDX
 * export function useMDXComponents(components: MDXComponents) {
 *   return {
 *     ...createMarkdownComponents(),
 *     ...components,
 *   };
 * }
 * ```
 */
export function createMarkdownComponents(options: MarkdownComponentOptions = {}): Components {
  const { codeBlockCollapsible = false, imageComponent, inlineCodeHighContrast = true, spacing = "spacious" } = options;

  // Spacing configuration
  const isCompact = spacing === "compact";
  const headingMargins = {
    h1: { top: isCompact ? "1.5rem" : "3rem", bottom: isCompact ? "1rem" : "1.5rem" },
    h2: { top: isCompact ? "2rem" : "3rem", bottom: isCompact ? "0.375rem" : "0.5rem" },
    h3: { top: isCompact ? "1.5rem" : "2rem", bottom: isCompact ? "0.375rem" : "0.5rem" },
    h4: { top: isCompact ? "0.5rem" : "0.625rem", bottom: isCompact ? "0.25rem" : "0.5rem" },
    h5: { top: isCompact ? "0.375rem" : "0.5rem", bottom: isCompact ? "0.25rem" : "0.5rem" },
    h6: { top: isCompact ? "0.375rem" : "0.5rem", bottom: isCompact ? "0.25rem" : "0.5rem" },
  };
  const listMargin = isCompact ? "0.25rem" : "0.5rem";
  const listItemMargin = isCompact ? "0.125rem" : "0.25rem";
  const codeBlockMargin = isCompact ? "1" : "2";
  const hrMargin = isCompact ? "0.375rem" : "0.5rem";
  const paragraphMargin = isCompact ? "0" : "0.5rem";
  const blockquoteMargin = isCompact ? "0.5rem" : "1rem";

  return {
    // Headings with consistent visual hierarchy (9-6-5-4-3-2)
    h1: ({ children }: MarkdownChildrenProps) => (
      <Heading size="9" weight="medium" as="h1" style={{ marginTop: headingMargins.h1.top, marginBottom: headingMargins.h1.bottom }}>
        {children}
      </Heading>
    ),
    h2: ({ children }: MarkdownChildrenProps) => (
      <Heading weight="medium" size="7" as="h2" style={{ marginTop: headingMargins.h2.top, marginBottom: headingMargins.h2.bottom }}>
        {children}
      </Heading>
    ),
    h3: ({ children }: MarkdownChildrenProps) => (
      <Heading weight="medium" size="5" as="h3" style={{ marginTop: headingMargins.h3.top, marginBottom: headingMargins.h3.bottom }}>
        {children}
      </Heading>
    ),
    h4: ({ children }: MarkdownChildrenProps) => (
      <Heading weight="medium" size="4" as="h4" style={{ marginTop: headingMargins.h4.top, marginBottom: headingMargins.h4.bottom }}>
        {children}
      </Heading>
    ),
    h5: ({ children }: MarkdownChildrenProps) => (
      <Heading weight="medium" size="3" as="h5" style={{ marginTop: headingMargins.h5.top, marginBottom: headingMargins.h5.bottom }}>
        {children}
      </Heading>
    ),
    h6: ({ children }: MarkdownChildrenProps) => (
      <Heading weight="medium" size="2" as="h6" style={{ marginTop: headingMargins.h6.top, marginBottom: headingMargins.h6.bottom }}>
        {children}
      </Heading>
    ),

    // Paragraph text
    p: ({ children }: MarkdownChildrenProps) => (
      <Text size="3" as="p" style={{ lineHeight: "1.6", marginTop: paragraphMargin, marginBottom: paragraphMargin }}>
        {children}
      </Text>
    ),

    // Code - inline vs block
    code: ({ className, children, inline }: { className?: string; children?: ReactNode; inline?: boolean }) => {
      const code = extractCode(children);

      // Block code: has className (language) OR is not marked as inline
      // Inline code: explicitly marked as inline=true, or no className and short single-line content
      const isInlineCode = inline === true || (inline === undefined && !className && !code.includes("\n") && code.length < 100);

      if (isInlineCode) {
        return (
          <Code highContrast={inlineCodeHighContrast} size="3">
            {code}
          </Code>
        );
      }

      return (
        <Box my={codeBlockMargin} style={{ minWidth: 0 }}>
          <CodeBlock code={code} language={extractLanguage(className)} collapsible={codeBlockCollapsible} />
        </Box>
      );
    },

    // Lists
    ul: ({ children }: MarkdownChildrenProps) => (
      <ul style={{ marginTop: listMargin, marginBottom: listMargin, lineHeight: "1.6", paddingLeft: "1.5rem", listStyleType: "disc" }}>{children}</ul>
    ),
    ol: ({ children }: MarkdownChildrenProps) => (
      <ol style={{ marginTop: listMargin, marginBottom: listMargin, lineHeight: "1.6", paddingLeft: "1.5rem", listStyleType: "decimal" }}>{children}</ol>
    ),
    li: ({ children }: MarkdownChildrenProps) => <li style={{ marginBottom: listItemMargin, lineHeight: "1.6" }}>{children}</li>,

    // Blockquote
    blockquote: ({ children }: MarkdownChildrenProps) => (
      <Blockquote size="1" my={blockquoteMargin}>
        {children}
      </Blockquote>
    ),

    // Links
    a: ({ href, children }: { href?: string; children?: ReactNode }) => (
      <a href={href} style={{ color: "var(--accent-9)", textDecoration: "underline" }}>
        {children}
      </a>
    ),

    // Text styling
    strong: ({ children }: MarkdownChildrenProps) => (
      <Text weight="medium" style={{ lineHeight: "1.6" }}>
        {children}
      </Text>
    ),
    em: ({ children }: MarkdownChildrenProps) => <Text style={{ lineHeight: "1.6", fontStyle: "italic" }}>{children}</Text>,

    // Horizontal rule
    hr: () => (
      <Box style={{ marginTop: hrMargin, marginBottom: hrMargin }}>
        <Separator orientation="horizontal" light />
      </Box>
    ),

    // Pre wrapper (pass through to let code handle it)
    pre: ({ children }: MarkdownChildrenProps) => <>{children}</>,

    // Tables using KookieUI
    table: ({ children }: MarkdownChildrenProps) => (
      <Box my="2" style={{ overflowX: "auto" }}>
        <Table.Root size="2" variant="ghost">
          {children}
        </Table.Root>
      </Box>
    ),
    thead: ({ children }: MarkdownChildrenProps) => <Table.Header>{children}</Table.Header>,
    tbody: ({ children }: MarkdownChildrenProps) => <Table.Body>{children}</Table.Body>,
    tr: ({ children }: MarkdownChildrenProps) => <Table.Row>{children}</Table.Row>,
    th: ({ children }: MarkdownChildrenProps) => <Table.ColumnHeaderCell>{children}</Table.ColumnHeaderCell>,
    td: ({ children }: MarkdownChildrenProps) => <Table.Cell>{children}</Table.Cell>,

    // HTML elements for raw HTML support
    sub: ({ children }: MarkdownChildrenProps) => <sub>{children}</sub>,
    sup: ({ children }: MarkdownChildrenProps) => <sup>{children}</sup>,
    br: () => <br />,

    // Images - use custom component if provided
    img: imageComponent
      ? (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
          const { src, alt, width, height } = props;
          if (!src || typeof src !== "string") return null;
          return imageComponent({
            src,
            alt: alt ?? "Image",
            width: width ? String(width) : undefined,
            height: height ? String(height) : undefined,
          });
        }
      : undefined,

    // Details/Summary for expandable sections
    details: ({ children }: MarkdownChildrenProps) => <details style={{ padding: "0.5rem 0" }}>{children}</details>,
    summary: ({ children }: MarkdownChildrenProps) => <summary style={{ cursor: "pointer", fontWeight: 500 }}>{children}</summary>,
  };
}
