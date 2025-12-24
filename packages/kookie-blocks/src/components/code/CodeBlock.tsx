import React, { useState, useRef, useEffect, useCallback, memo, type ReactNode } from "react";
import { Box, Card, Flex, Button, Code, Theme, ScrollArea } from "@kushagradhawan/kookie-ui";
import { HugeiconsIcon } from "@hugeicons/react";
import { Copy01Icon, Tick01Icon, ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { codeToHtml } from "shiki";
import type { CodeBlockProps } from "./types";

const COLLAPSED_HEIGHT = 360;
const DEFAULT_LIGHT_THEME = "one-light";
const DEFAULT_DARK_THEME = "one-dark-pro";

// ============================================
// Preview Section
// ============================================

interface PreviewSectionProps {
  children: ReactNode;
  background?: "none" | "dots" | string;
  backgroundProps?: {
    dotSize?: number;
    color?: string;
    backgroundColor?: string;
    height?: string;
    width?: string;
    radius?: string;
  };
}

function PreviewSection({ children, background = "none", backgroundProps = {} }: PreviewSectionProps) {
  const { dotSize = 24, color = "var(--gray-10)", backgroundColor = "var(--gray-2)", height, width = "100%", radius = "3" } = backgroundProps;

  if (background === "none") {
    return (
      <Card size="1" variant="soft">
        <Flex justify="center" align="center" py="4">
          <Theme fontFamily="sans">{children}</Theme>
        </Flex>
      </Card>
    );
  }

  if (background === "dots") {
    const dotsStyle: React.CSSProperties = {
      backgroundImage: `radial-gradient(circle, ${color} 1px, transparent 1px)`,
      borderRadius: `var(--radius-${radius})`,
      backgroundSize: `${dotSize}px ${dotSize}px`,
      backgroundPosition: "center",
      backgroundColor,
      width,
      ...(height && { height }),
    };

    return (
      <Card size="1" variant="soft">
        <Flex justify="center" align="center" py="4" style={dotsStyle}>
          <Theme fontFamily="sans">{children}</Theme>
        </Flex>
      </Card>
    );
  }

  const imageStyle: React.CSSProperties = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: `var(--radius-${radius})`,
    width,
    ...(height && { height }),
  };

  return (
    <Card size="1" variant="soft">
      <Flex justify="center" align="center" py="4" style={imageStyle}>
        <Theme fontFamily="sans">{children}</Theme>
      </Flex>
    </Card>
  );
}

// ============================================
// Code Section (for runtime highlighting)
// ============================================

interface CodeSectionProps {
  code: string;
  language: string;
  showCopy?: boolean;
  showLanguage?: boolean;
  lightTheme?: string;
  darkTheme?: string;
}

const CodeSection = memo(function CodeSection({
  code,
  language,
  showCopy = true,
  showLanguage = true,
  lightTheme = DEFAULT_LIGHT_THEME,
  darkTheme = DEFAULT_DARK_THEME,
}: CodeSectionProps) {
  const [highlighted, setHighlighted] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(COLLAPSED_HEIGHT);
  const [copied, setCopied] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const resetTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const shouldShowToggle = contentHeight > COLLAPSED_HEIGHT;

  useEffect(() => {
    let cancelled = false;
    codeToHtml(code, {
      lang: language,
      themes: { light: lightTheme, dark: darkTheme },
      defaultColor: false,
    })
      .then((html) => {
        if (!cancelled) setHighlighted(html);
      })
      .catch(() => {
        if (!cancelled) setHighlighted(null);
      });
    return () => {
      cancelled = true;
    };
  }, [code, language, lightTheme, darkTheme]);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [highlighted]);

  useEffect(() => {
    return () => {
      if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
    };
  }, []);

  const handleCopy = useCallback(async () => {
    if (!code.trim()) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
      resetTimeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Silently fail
    }
  }, [code]);

  const displayLanguage = language === "text" ? "plaintext" : language;

  const handleToggle = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  const contentStyle: React.CSSProperties = {
    maxHeight: isExpanded ? `${contentHeight}px` : `${COLLAPSED_HEIGHT}px`,
  };

  const chevronStyle: React.CSSProperties = {
    transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
  };

  return (
    <Box position="relative">
      <Card size="1" variant="soft">
        <Flex direction="column" gap="3">
          <Flex gap="2" justify="between" align="start">
            {showLanguage && (
              <Code size="1" color="gray" highContrast>
                {displayLanguage}
              </Code>
            )}
            <Flex align="center" gap="2" className="code-action-buttons">
              {shouldShowToggle && (
                <Button
                  size="2"
                  variant="ghost"
                  color="gray"
                  onClick={handleToggle}
                  tooltip={isExpanded ? "Collapse" : "Expand"}
                  aria-label={isExpanded ? "Collapse code" : "Expand code"}
                >
                  <HugeiconsIcon icon={ArrowDown01Icon} style={chevronStyle} className="code-chevron" />
                </Button>
              )}
              {showCopy && (
                <Button
                  size="2"
                  variant="ghost"
                  color="gray"
                  onClick={handleCopy}
                  tooltip={copied ? "Copied!" : "Copy"}
                  aria-label={copied ? "Copied!" : "Copy code"}
                >
                  <HugeiconsIcon icon={copied ? Tick01Icon : Copy01Icon} /> Copy
                </Button>
              )}
            </Flex>
          </Flex>

          <Box ref={contentRef} style={contentStyle} className="code-content">
            <ScrollArea type="auto" scrollbars="horizontal">
              {highlighted ? (
                <Box dangerouslySetInnerHTML={{ __html: highlighted }} />
              ) : (
                <pre>
                  <Code size="3">{code}</Code>
                </pre>
              )}
            </ScrollArea>
          </Box>

          {shouldShowToggle && !isExpanded && <Box className="code-scroll-shadow visible" />}
        </Flex>
      </Card>
    </Box>
  );
});

// ============================================
// Children Code Section (for pre-highlighted MDX)
// ============================================

interface ChildrenCodeSectionProps {
  children: ReactNode;
  showCopy?: boolean;
  showLanguage?: boolean;
}

function extractCodeFromChildren(children?: ReactNode): string {
  const extractText = (node: any): string => {
    if (typeof node === "string") return node;
    if (typeof node === "number") return String(node);
    if (!node) return "";
    if (Array.isArray(node)) return node.map(extractText).join("");
    if (typeof node === "object" && "props" in node) {
      const props = node.props;
      if (props?.children) return extractText(props.children);
    }
    return "";
  };
  return extractText(children);
}

function extractLanguageFromChildren(children?: ReactNode): string {
  const findLanguage = (node: any): string | null => {
    if (!node) return null;
    if (typeof node === "object" && "props" in node) {
      const props = node.props;

      // Check data-language attribute (rehype-pretty-code)
      if (props?.["data-language"]) {
        return props["data-language"];
      }

      // Check className for language-xxx
      const className = props?.className || props?.class || "";
      if (typeof className === "string") {
        const match = className.match(/language-([\w-]+)/i);
        if (match) return match[1];
      }

      // Recursively check children
      if (props?.children) {
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

function formatLanguageLabel(lang: string): string {
  const aliasMap: Record<string, string> = {
    tsx: "TSX",
    ts: "TS",
    jsx: "JSX",
    js: "JS",
    javascript: "JS",
    typescript: "TS",
    css: "CSS",
    html: "HTML",
    json: "JSON",
    bash: "SH",
    sh: "SH",
    shell: "SH",
    text: "plaintext",
  };
  return aliasMap[lang.toLowerCase()] || lang.toLowerCase();
}

const ChildrenCodeSection = memo(function ChildrenCodeSection({ children, showCopy = true, showLanguage = true }: ChildrenCodeSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(COLLAPSED_HEIGHT);
  const [copied, setCopied] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const resetTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const code = extractCodeFromChildren(children);
  const language = extractLanguageFromChildren(children);
  const displayLanguage = formatLanguageLabel(language);

  const shouldShowToggle = contentHeight > COLLAPSED_HEIGHT;

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [children]);

  useEffect(() => {
    return () => {
      if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
    };
  }, []);

  const handleCopy = useCallback(async () => {
    if (!code.trim()) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
      resetTimeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Silently fail
    }
  }, [code]);

  const contentStyle: React.CSSProperties = {
    maxHeight: isExpanded ? `${contentHeight}px` : `${COLLAPSED_HEIGHT}px`,
  };

  const handleToggle = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  const chevronStyle: React.CSSProperties = {
    transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
  };

  return (
    <Box position="relative">
      <Card size="1" variant="soft">
        <Flex direction="column" gap="3">
          <Flex gap="2" justify="between" align="start">
            {showLanguage && (
              <Code size="1" color="gray" highContrast>
                {displayLanguage}
              </Code>
            )}
            <Flex align="center" gap="2" className="code-action-buttons">
              {shouldShowToggle && (
                <Button
                  size="2"
                  variant="ghost"
                  color="gray"
                  onClick={handleToggle}
                  tooltip={isExpanded ? "Collapse" : "Expand"}
                  aria-label={isExpanded ? "Collapse code" : "Expand code"}
                >
                  <HugeiconsIcon icon={ArrowDown01Icon} style={chevronStyle} className="code-chevron" />
                </Button>
              )}
              {showCopy && (
                <Button
                  size="2"
                  variant="ghost"
                  color="gray"
                  onClick={handleCopy}
                  tooltip={copied ? "Copied!" : "Copy"}
                  aria-label={copied ? "Copied!" : "Copy code"}
                >
                  <HugeiconsIcon icon={copied ? Tick01Icon : Copy01Icon} /> Copy
                </Button>
              )}
            </Flex>
          </Flex>

          <Box ref={contentRef} style={contentStyle} className="code-content">
            <ScrollArea type="auto" scrollbars="horizontal">
              {children}
            </ScrollArea>
          </Box>

          {shouldShowToggle && !isExpanded && <Box className="code-scroll-shadow visible" />}
        </Flex>
      </Card>
    </Box>
  );
});

// ============================================
// Main CodeBlock Component
// ============================================

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
  const hasCode = code || (children && React.Children.count(children) > 0);
  const displayLanguage = language || extractLanguageFromChildren(children) || "text";

  return (
    <Box className="docs-code-block" mt="6" mb="8">
      <Flex direction="column" gap="2">
        {preview && (
          <PreviewSection background={background} backgroundProps={backgroundProps}>
            {preview}
          </PreviewSection>
        )}

        {code && (
          <CodeSection code={code} language={displayLanguage} showCopy={showCopy} showLanguage={showLanguage} lightTheme={lightTheme} darkTheme={darkTheme} />
        )}

        {children && !code && (
          <ChildrenCodeSection showCopy={showCopy} showLanguage={showLanguage}>
            {children}
          </ChildrenCodeSection>
        )}
      </Flex>
    </Box>
  );
}
