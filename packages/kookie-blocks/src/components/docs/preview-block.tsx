"use client";

import React from "react";
import { Box, Card, Flex, Theme } from "@kushagradhawan/kookie-ui";
import type { ReactNode } from "react";

export interface PreviewBlockProps {
  children: ReactNode;
  /** Background style for the preview - can be a preset or custom CSS properties */
  background?: "none" | "dots" | "grid" | React.CSSProperties;
  /** Width of the preview block */
  width?: string | number;
  /** Height of the preview block */
  height?: string | number;
  /** Card variant - surface, classic, soft, or ghost */
  variant?: "surface" | "classic" | "soft" | "ghost";
  /** Theme appearance - light or dark */
  appearance?: "light" | "dark" | "inherit";
}

/**
 * PreviewBlock - displays a live preview of a component
 *
 * Use this component to showcase live examples of components in documentation.
 * Shows only the rendered component, not the code.
 *
 * @example
 * ```tsx
 * // With preset background
 * <PreviewBlock background="dots">
 *   <Button>Example Button</Button>
 * </PreviewBlock>
 *
 * // With custom background
 * <PreviewBlock background={{ background: "linear-gradient(135deg, var(--blue-2) 0%, var(--violet-2) 100%)" }}>
 *   <Button>Example Button</Button>
 * </PreviewBlock>
 * ```
 */
export function PreviewBlock({
  children,
  background = "dots",
  width,
  height,
  variant = "soft",
  appearance,
}: PreviewBlockProps) {
  const backgroundStyle =
    typeof background === "object"
      ? background
      : background === "dots"
        ? {
            backgroundImage:
              "radial-gradient(circle, var(--gray-6) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            backgroundPosition: "center",
            backgroundColor: "var(--gray-2)",
          }
        : background === "grid"
          ? {
              backgroundImage:
                "linear-gradient(var(--gray-6) 1px, transparent 1px), linear-gradient(90deg, var(--gray-6) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
              backgroundPosition: "center",
              backgroundColor: "var(--gray-2)",
            }
          : undefined;

  const combinedStyle: React.CSSProperties = {
    ...backgroundStyle,
    ...(width && { width }),
    ...(height && { height }),
  };

  return (
    <Theme hasBackground={false} fontFamily="sans" appearance={appearance}>
      <Box my="3">
        <Card size="1" variant={variant}>
          <Flex
            justify="center"
            align="center"
            py="4"
            minHeight={height ? undefined : "240px"}
            style={combinedStyle}
          >
            {children}
          </Flex>
        </Card>
      </Box>
    </Theme>
  );
}
