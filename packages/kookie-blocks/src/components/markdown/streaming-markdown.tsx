"use client";

import React, { memo, useMemo, type ReactNode } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import hardenReactMarkdownModule from "harden-react-markdown";
import { Box, Flex } from "@kushagradhawan/kookie-ui";
import { createMarkdownComponents } from "./create-markdown-components.js";
import { completeUnterminatedMarkdown, parseMarkdownIntoBlocks } from "./utils/markdown-streaming.js";
import type { MarkdownComponentOptions } from "./types.js";

// Handle different export formats
const hardenReactMarkdown =
  typeof hardenReactMarkdownModule === "function" ? hardenReactMarkdownModule : (hardenReactMarkdownModule as any).default || hardenReactMarkdownModule;

const HardenedMarkdown = hardenReactMarkdown(ReactMarkdown);

const LINK_PREFIXES = ["https://", "http://", "/"];
const IMAGE_PREFIXES = ["https://", "http://", "/", "data:"];
const ALLOWED_PROTOCOLS = ["mailto:", "tel:", "data:", "http:", "https:"];
const DEFAULT_APP_ORIGIN = typeof window !== "undefined" && window.location?.origin ? window.location.origin : "https://app.kookie.ai";

/**
 * Options for StreamingMarkdown component
 */
export type StreamingMarkdownOptions = MarkdownComponentOptions & {
  /**
   * Security origin for link/image validation
   * @default window.location.origin or "https://app.kookie.ai"
   */
  defaultOrigin?: string;

  /**
   * Whether to enable block-level memoization for performance
   * Recommended for streaming scenarios where content updates frequently
   * @default true
   */
  enableBlockMemoization?: boolean;

  /**
   * Custom parser for splitting content into blocks
   * If not provided, content will be rendered as a single block
   * For optimal streaming performance, use marked.lexer with GFM enabled
   */
  blockParser?: (content: string) => Array<{ raw?: string }>;

  /**
   * Override default component mappings
   */
  components?: Partial<Components>;
};

type StreamingMarkdownProps = {
  /**
   * Markdown content to render (supports streaming/incomplete markdown)
   */
  content: string;

  /**
   * Unique identifier for this markdown instance (used for keys)
   */
  id: string;

  /**
   * Optional configuration
   */
  options?: StreamingMarkdownOptions;
};

type MarkdownBlockProps = {
  content: string;
  defaultOrigin: string;
  components: Components;
};

/**
 * Resolves the default origin for security validation
 */
function resolveDefaultOrigin(customOrigin?: string): string {
  if (customOrigin) {
    return customOrigin;
  }
  return DEFAULT_APP_ORIGIN;
}

/**
 * Memoized markdown block component for efficient streaming rendering
 */
const MarkdownBlock = memo(
  ({ content, defaultOrigin, components }: MarkdownBlockProps) => {
    return (
      <Box width="100%">
        <HardenedMarkdown
          defaultOrigin={defaultOrigin}
          allowedLinkPrefixes={LINK_PREFIXES}
          allowedImagePrefixes={IMAGE_PREFIXES}
          allowedProtocols={ALLOWED_PROTOCOLS}
          allowDataImages
          components={components}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        >
          {content}
        </HardenedMarkdown>
      </Box>
    );
  },
  (previous, next) => previous.content === next.content && previous.defaultOrigin === next.defaultOrigin && previous.components === next.components
);

MarkdownBlock.displayName = "MarkdownBlock";

/**
 * StreamingMarkdown - A drop-in markdown renderer designed for AI streaming.
 *
 * Features:
 * - Unterminated block parsing (handles incomplete markdown during streaming)
 * - Block-level memoization for performance
 * - Security hardening (validates links/images)
 * - GitHub Flavored Markdown support
 * - KookieUI component integration
 * - Code syntax highlighting via CodeBlock
 *
 * @example
 * ```tsx
 * import { StreamingMarkdown } from '@kushagradhawan/kookie-blocks';
 * import { marked } from 'marked';
 *
 * function ChatMessage({ message }) {
 *   return (
 *     <StreamingMarkdown
 *       content={message.content}
 *       id={message.id}
 *       options={{
 *         blockParser: (content) => marked.lexer(content, { gfm: true }),
 *         enableBlockMemoization: true,
 *       }}
 *     />
 *   );
 * }
 * ```
 */
export function StreamingMarkdown({ content, id, options = {} }: StreamingMarkdownProps) {
  const { defaultOrigin: customOrigin, enableBlockMemoization = true, blockParser, components: customComponents = {}, ...componentOptions } = options;

  // Resolve security origin
  const defaultOrigin = useMemo(() => resolveDefaultOrigin(customOrigin), [customOrigin]);

  // Create component mappings with custom overrides
  const markdownComponents = useMemo(() => {
    const baseComponents = createMarkdownComponents(componentOptions);
    return {
      ...baseComponents,
      ...customComponents,
    };
  }, [componentOptions, customComponents]);

  // Parse content into blocks for memoization (if enabled and parser provided)
  const blocks = useMemo(() => {
    if (!enableBlockMemoization || !blockParser) {
      // No block splitting - just complete unterminated markdown
      const completed = completeUnterminatedMarkdown(content);
      return completed.trim() ? [completed] : [];
    }

    return parseMarkdownIntoBlocks(content, blockParser);
  }, [content, enableBlockMemoization, blockParser]);

  if (!blocks.length) {
    return null;
  }

  // Single block - no need for wrapper
  if (blocks.length === 1) {
    return <MarkdownBlock content={blocks[0]} defaultOrigin={defaultOrigin} components={markdownComponents} />;
  }

  // Multiple blocks - render with flex wrapper
  return (
    <Flex direction="column" gap="2" width="100%">
      {blocks.map((block, index) => (
        <MarkdownBlock key={`${id}-block-${index}`} content={block} defaultOrigin={defaultOrigin} components={markdownComponents} />
      ))}
    </Flex>
  );
}
