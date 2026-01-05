"use client";

import React, { useState } from "react";
import {
  Box,
  Card,
  Flex,
  SegmentedControl,
  Theme,
} from "@kushagradhawan/kookie-ui";
import { HugeiconsIcon } from "@hugeicons/react";
import { Sun01Icon, Moon02Icon } from "@hugeicons/core-free-icons";
import type { ReactNode } from "react";

export interface PreviewBlockProps {
  children: ReactNode;
  /** Background style for the preview - can be a preset or custom CSS properties */
  background?: "none" | "dots" | "grid" | React.CSSProperties;
  /** Size of the pattern (dots or grid spacing) - default 24 */
  patternSize?: number;
  /** Color of the pattern - default "var(--gray-a6)" for dots, "var(--gray-a3)" for grid */
  patternColor?: string;
  /** Width of the preview block */
  width?: string | number;
  /** Height of the preview block */
  height?: string | number;
  /** Card variant - surface, classic, soft, or ghost */
  variant?: "surface" | "classic" | "soft" | "ghost";
  /** Theme appearance - light or dark */
  appearance?: "light" | "dark" | "inherit";
  /** Show theme toggle control */
  showThemeToggle?: boolean;
  /** Font family for the preview - default "sans" */
  fontFamily?: "sans" | "mono" | "serif";
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
  patternSize = 24,
  patternColor,
  width,
  height,
  variant = "soft",
  appearance,
  showThemeToggle = true,
  fontFamily = "sans",
}: PreviewBlockProps) {
  const [currentAppearance, setCurrentAppearance] = useState<
    "light" | "dark" | "inherit"
  >(appearance ?? "inherit");

  const sizeValue = `${patternSize}px`;

  // Default colors: dots = a6 (more visible), grid = a3 (subtler)
  const effectiveColor =
    patternColor ??
    (background === "dots" ? "var(--gray-a6)" : "var(--gray-a3)");

  const backgroundStyle =
    typeof background === "object"
      ? background
      : background === "dots"
        ? {
            backgroundImage: `radial-gradient(circle, ${effectiveColor} 1px, transparent 1px)`,
            backgroundSize: `${sizeValue} ${sizeValue}`,
            backgroundPosition: "center",
          }
        : background === "grid"
          ? {
              backgroundImage: `linear-gradient(${effectiveColor} 1px, transparent 1px), linear-gradient(90deg, ${effectiveColor} 1px, transparent 1px)`,
              backgroundSize: `${sizeValue} ${sizeValue}`,
              backgroundPosition: "center",
            }
          : undefined;

  const isCustomBackground = typeof background === "object";

  const combinedStyle: React.CSSProperties = {
    ...backgroundStyle,
    ...(width && { width }),
    ...(height && { height }),
  };

  const effectiveAppearance = showThemeToggle ? currentAppearance : appearance;

  return (
    <Theme
      hasBackground={false}
      fontFamily={fontFamily}
      appearance={effectiveAppearance}
    >
      <Box my="3">
        <Card
          size="1"
          variant={variant}
          style={{
            position: "relative",
            ...(isCustomBackground && { padding: 0 }),
          }}
        >
          {showThemeToggle && (
            <Box
              style={{
                position: "absolute",
                top: "var(--space-2)",
                right: "var(--space-2)",
                zIndex: 1,
              }}
            >
              <SegmentedControl.Root
                size="2"
                value={
                  currentAppearance === "inherit" ? "light" : currentAppearance
                }
                onValueChange={(value) =>
                  setCurrentAppearance(value as "light" | "dark")
                }
              >
                <SegmentedControl.Item value="light" iconOnly>
                  <HugeiconsIcon icon={Sun01Icon} />
                </SegmentedControl.Item>
                <SegmentedControl.Item value="dark" iconOnly>
                  <HugeiconsIcon icon={Moon02Icon} />
                </SegmentedControl.Item>
              </SegmentedControl.Root>
            </Box>
          )}
          <Flex
            justify="center"
            align="center"
            py={isCustomBackground ? undefined : "4"}
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
