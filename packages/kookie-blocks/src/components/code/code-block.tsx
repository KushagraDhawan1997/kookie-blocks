import React, { useState, useEffect, useMemo, memo, createContext, useContext, type ReactNode } from "react";
import { Box, Card, Code, Flex, Button, Text, Theme, ScrollArea, IconButton } from "@kushagradhawan/kookie-ui";
import { HugeiconsIcon } from "@hugeicons/react";
import { Copy01Icon, Tick01Icon, ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { codeToHtml, type BundledLanguage, type BundledTheme } from "shiki";
import type { CodeBlockProps, ShikiConfig, PreviewBackgroundProps } from "./types";
import { extractTextFromChildren, extractLanguageFromChildren } from "./types";
import { useCodeCard } from "./use-code-card";
import { LanguageBadge } from "./language-badge";

const CodeBlockContext = createContext<boolean>(false);

const DEFAULT_COLLAPSED_HEIGHT = 360;
const DEFAULT_LIGHT_THEME = "one-light";
const DEFAULT_DARK_THEME = "one-dark-pro";

interface PreviewSectionProps {
  children: ReactNode;
  background?: "none" | "dots" | string;
  backgroundProps?: PreviewBackgroundProps;
}

function PreviewSection({ children, background = "none", backgroundProps = {} }: PreviewSectionProps) {
  const { dotSize = 24, color = "var(--gray-10)", backgroundColor = "var(--gray-2)", height, width = "100%", radius = "3" } = backgroundProps;

  const backgroundStyle = useMemo((): React.CSSProperties | undefined => {
    if (background === "none") return undefined;

    if (background === "dots") {
      return {
        backgroundImage: `radial-gradient(circle, ${color} 1px, transparent 1px)`,
        borderRadius: `var(--radius-${radius})`,
        backgroundSize: `${dotSize}px ${dotSize}px`,
        backgroundPosition: "center",
        backgroundColor,
        width,
        ...(height && { height }),
      };
    }

    // Image background
    return {
      backgroundImage: `url(${background})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      borderRadius: `var(--radius-${radius})`,
      width,
      ...(height && { height }),
    };
  }, [background, color, backgroundColor, dotSize, height, width, radius]);

  return (
    <Card size="1" variant="soft">
      <Flex justify="center" align="center" py="4" style={backgroundStyle}>
        <Theme fontFamily="sans">{children}</Theme>
      </Flex>
    </Card>
  );
}

interface CodeCardProps {
  code: string;
  language: string;
  showCopy: boolean;
  showLanguage: boolean;
  showLineNumbers: boolean;
  collapsible: boolean;
  collapsedHeight: number;
  file?: string;
  isLoading?: boolean;
  children: ReactNode;
}

function CodeSkeleton() {
  // Generate varied line widths for visual interest
  const lineWidths = ["85%", "70%", "90%", "60%", "75%", "80%"];

  return (
    <Box className="code-skeleton">
      {lineWidths.map((width, index) => (
        <Box key={index} className="code-skeleton-line" style={{ width }} />
      ))}
    </Box>
  );
}

const CodeCard = memo(function CodeCard({
  code,
  language,
  showCopy,
  showLanguage,
  showLineNumbers,
  collapsible,
  collapsedHeight,
  file,
  isLoading = false,
  children,
}: CodeCardProps) {
  const { isExpanded, shouldShowToggle, copied, contentRef, contentMaxHeight, handleToggle, handleCopy } = useCodeCard({
    code,
    collapsedHeight,
  });

  const showToggle = collapsible && shouldShowToggle;
  const chevronRotation = isExpanded ? "rotate(180deg)" : "rotate(0deg)";
  const contentClassName = showLineNumbers ? "code-content" : "code-content hide-line-numbers";

  return (
    <Box position="relative">
      <Card size="1" variant="soft">
        <Flex direction="column">
          <Flex justify="between" align="start" gap="2">
            <Flex align="center" gap="2">
              {showLanguage && <LanguageBadge language={language} />}
              {file && (
                <Text size="1" color="gray" highContrast>
                  {file}
                </Text>
              )}
            </Flex>

            <Flex align="center" className="code-action-buttons">
              {showToggle && (
                <IconButton
                  size="2"
                  variant="ghost"
                  color="gray"
                  onClick={handleToggle}
                  tooltip={isExpanded ? "Collapse" : "Expand"}
                  aria-label={isExpanded ? "Collapse code" : "Expand code"}
                >
                  <HugeiconsIcon icon={ArrowDown01Icon} style={{ transform: chevronRotation }} className="code-chevron" strokeWidth={1.75} />
                </IconButton>
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
                  <HugeiconsIcon icon={copied ? Tick01Icon : Copy01Icon} strokeWidth={1.75} /> Copy
                </Button>
              )}
            </Flex>
          </Flex>

          <Box ref={contentRef} style={{ maxHeight: collapsible ? `${contentMaxHeight}px` : undefined }} className={contentClassName}>
            <ScrollArea type="auto" scrollbars="horizontal">
              {isLoading ? <CodeSkeleton /> : children}
            </ScrollArea>
          </Box>

          {showToggle && !isExpanded && <Box className="code-scroll-shadow visible" />}
        </Flex>
      </Card>
    </Box>
  );
});

interface RuntimeCodeSectionProps {
  code: string;
  language: string;
  showCopy: boolean;
  showLanguage: boolean;
  showLineNumbers: boolean;
  collapsible: boolean;
  collapsedHeight: number;
  file?: string;
  shikiConfig?: ShikiConfig;
}

const RuntimeCodeSection = memo(function RuntimeCodeSection({
  code,
  language,
  showCopy,
  showLanguage,
  showLineNumbers,
  collapsible,
  collapsedHeight,
  file,
  shikiConfig,
}: RuntimeCodeSectionProps) {
  const [highlighted, setHighlighted] = useState<string | null>(null);

  // Memoize Shiki config to prevent unnecessary re-highlights
  const shikiOptions = useMemo(() => {
    const lightTheme = shikiConfig?.themes?.light || DEFAULT_LIGHT_THEME;
    const darkTheme = shikiConfig?.themes?.dark || DEFAULT_DARK_THEME;

    return {
      lang: language as BundledLanguage,
      themes: {
        light: lightTheme as BundledTheme,
        dark: darkTheme as BundledTheme,
      },
      defaultColor: false as const,
      langAlias: shikiConfig?.langAlias,
      transformers: shikiConfig?.transformers,
      meta: shikiConfig?.meta ? { __raw: shikiConfig.meta } : undefined,
    };
  }, [language, shikiConfig?.themes?.light, shikiConfig?.themes?.dark, shikiConfig?.langAlias, shikiConfig?.transformers, shikiConfig?.meta]);

  useEffect(() => {
    let cancelled = false;

    codeToHtml(code, shikiOptions)
      .then((html) => {
        if (!cancelled) {
          setHighlighted(html);
        }
      })
      .catch((error) => {
        if (!cancelled) {
          // Keep previous highlighted content on error (stale while revalidate)
          if (process.env.NODE_ENV === "development") {
            console.error("[CodeBlock] Shiki highlighting failed:", error);
          }
        }
      });

    return () => {
      cancelled = true;
    };
  }, [code, shikiOptions]);

  // Only show loading skeleton on initial render (no highlighted content yet)
  // During updates, keep showing previous highlighted content (stale while revalidate)
  const isInitialLoading = highlighted === null;

  return (
    <CodeCard
      code={code}
      language={language}
      showCopy={showCopy}
      showLanguage={showLanguage}
      showLineNumbers={showLineNumbers}
      collapsible={collapsible}
      collapsedHeight={collapsedHeight}
      file={file}
      isLoading={isInitialLoading}
    >
      {highlighted ? <Box dangerouslySetInnerHTML={{ __html: highlighted }} /> : null}
    </CodeCard>
  );
});

interface ChildrenCodeSectionProps {
  children: ReactNode;
  showCopy: boolean;
  showLanguage: boolean;
  showLineNumbers: boolean;
  collapsible: boolean;
  collapsedHeight: number;
  file?: string;
}

const ChildrenCodeSection = memo(function ChildrenCodeSection({
  children,
  showCopy,
  showLanguage,
  showLineNumbers,
  collapsible,
  collapsedHeight,
  file,
}: ChildrenCodeSectionProps) {
  const code = extractTextFromChildren(children);
  const language = extractLanguageFromChildren(children);

  return (
    <CodeCard
      code={code}
      language={language}
      showCopy={showCopy}
      showLanguage={showLanguage}
      showLineNumbers={showLineNumbers}
      collapsible={collapsible}
      collapsedHeight={collapsedHeight}
      file={file}
    >
      {children}
    </CodeCard>
  );
});

export function CodeBlock({
  children,
  code,
  language,
  preview,
  showCopy = true,
  showLanguage = true,
  showLineNumbers = true,
  shikiConfig,
  background,
  backgroundProps,
  collapsible = true,
  collapsedHeight = DEFAULT_COLLAPSED_HEIGHT,
  file,
}: CodeBlockProps) {
  const displayLanguage = language || extractLanguageFromChildren(children) || "text";

  return (
    <CodeBlockContext.Provider value={true}>
      <Box className="docs-code-block" mt="6" mb="8">
        <Flex direction="column" gap="2">
          {preview && (
            <PreviewSection background={background} backgroundProps={backgroundProps}>
              {preview}
            </PreviewSection>
          )}

          {code && (
            <RuntimeCodeSection
              code={code}
              language={displayLanguage}
              showCopy={showCopy}
              showLanguage={showLanguage}
              showLineNumbers={showLineNumbers}
              collapsible={collapsible}
              collapsedHeight={collapsedHeight}
              file={file}
              shikiConfig={shikiConfig}
            />
          )}

          {children && !code && (
            <ChildrenCodeSection
              showCopy={showCopy}
              showLanguage={showLanguage}
              showLineNumbers={showLineNumbers}
              collapsible={collapsible}
              collapsedHeight={collapsedHeight}
              file={file}
            >
              {children}
            </ChildrenCodeSection>
          )}
        </Flex>
      </Box>
    </CodeBlockContext.Provider>
  );
}

export function useCodeBlockContext() {
  return useContext(CodeBlockContext);
}
