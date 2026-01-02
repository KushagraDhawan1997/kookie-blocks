"use client";

import React from "react";
import { Box, Card, Flex, Theme } from "@kushagradhawan/kookie-ui";
import type { ReactNode } from "react";

export interface PreviewBlockProps {
  children: ReactNode;
  /** Background style for the preview */
  background?: "none" | "dots" | "grid";
}

/**
 * PreviewBlock - displays a live preview of a component
 *
 * Use this component to showcase live examples of components in documentation.
 * Shows only the rendered component, not the code.
 *
 * @example
 * ```tsx
 * <PreviewBlock background="dots">
 *   <Button>Example Button</Button>
 * </PreviewBlock>
 * ```
 */
export function PreviewBlock({
  children,
  background = "dots",
}: PreviewBlockProps) {
  const backgroundStyle =
    background === "dots"
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

  return (
    <Box my="3">
      <Card size="1" variant="soft">
        <Flex
          justify="center"
          align="center"
          py="4"
          minHeight="240px"
          style={backgroundStyle}
        >
          <Theme fontFamily="sans">{children}</Theme>
        </Flex>
      </Card>
    </Box>
  );
}
