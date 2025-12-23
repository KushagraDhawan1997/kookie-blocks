import React, { type ReactNode } from "react";
import { Card, Flex } from "@kushagradhawan/kookie-ui";
import { SyntaxHighlighter } from "./SyntaxHighlighter";
import { CopyButton } from "./CopyButton";
import { LanguageBadge } from "./LanguageBadge";
import { PreviewSection } from "./PreviewSection";
import type { CodeBlockProps } from "./types";

function extractLanguageFromChildren(children?: ReactNode): string {
  if (!children) return "text";

  // Try to extract language from pre > code className
  if (typeof children === "object" && children !== null && "props" in children) {
    const childProps = (children as any).props;

    // If children is a <pre><code className="language-xxx">
    if (childProps?.children && typeof childProps.children === "object") {
      const codeProps = (childProps.children as any).props;
      const className = codeProps?.className || "";
      const match = className.match(/language-([\w-]+)/i);
      if (match) return match[1];
    }

    // Direct className on children
    const className = childProps?.className || "";
    const match = className.match(/language-([\w-]+)/i);
    if (match) return match[1];
  }

  return "text";
}

function extractCodeFromChildren(children?: ReactNode): string {
  if (!children) return "";

  // Try to extract text from pre > code structure
  if (typeof children === "object" && children !== null && "props" in children) {
    const childProps = (children as any).props;

    // If children is <pre><code>...</code></pre>
    if (childProps?.children && typeof childProps.children === "object") {
      const codeProps = (childProps.children as any).props;
      const codeChildren = codeProps?.children;

      if (typeof codeChildren === "string") {
        return codeChildren;
      }
    }

    // Direct text content
    if (typeof childProps?.children === "string") {
      return childProps.children;
    }
  }

  if (typeof children === "string") {
    return children;
  }

  return "";
}

export function CodeBlock({
  children,
  code,
  language,
  preview,
  showCopy = true,
  showLanguage = true,
  lightTheme,
  darkTheme,
  background,
  backgroundProps,
}: CodeBlockProps) {
  // Determine the code and language to display
  let displayCode = code;
  let displayLanguage = language;

  // If children are provided (pre-highlighted from MDX), extract code and language
  if (children && !code) {
    displayCode = extractCodeFromChildren(children);
    displayLanguage = language || extractLanguageFromChildren(children);
  }

  // Default language
  if (!displayLanguage) {
    displayLanguage = "text";
  }

  // If no code to display, render nothing
  if (!displayCode && !children) {
    return null;
  }

  return (
    <Flex direction="column" className="code-block-wrapper" style={{ minWidth: 0 }} my="2">
      {preview && (
        <PreviewSection background={background} backgroundProps={backgroundProps}>
          {preview}
        </PreviewSection>
      )}

      <Card size="2" variant="soft">
        <Flex gap="2" direction="column">
          <Flex align="start" justify="between">
            {showLanguage && <LanguageBadge language={displayLanguage} />}
            {showCopy && displayCode && <CopyButton code={displayCode} />}
          </Flex>

          {/* If we have runtime code, use SyntaxHighlighter */}
          {code && <SyntaxHighlighter code={code} language={displayLanguage} lightTheme={lightTheme} darkTheme={darkTheme} />}

          {/* If we have pre-highlighted children from MDX, render them */}
          {children && !code && <div className="code-block-content">{children}</div>}
        </Flex>
      </Card>
    </Flex>
  );
}
