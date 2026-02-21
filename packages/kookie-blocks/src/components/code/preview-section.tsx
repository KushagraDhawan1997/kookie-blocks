import React, { type ReactNode } from "react";
import { Card, Flex, Theme } from "@kushagradhawan/kookie-ui";

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

const EMPTY_BACKGROUND_PROPS: PreviewSectionProps["backgroundProps"] = {};

export function PreviewSection({ children, background = "none", backgroundProps = EMPTY_BACKGROUND_PROPS }: PreviewSectionProps) {
  const { dotSize = 24, color = "var(--gray-10)", backgroundColor = "var(--gray-2)", height, width = "100%", radius = "3" } = backgroundProps;

  // Render with no background (default card styling)
  if (background === "none") {
    return (
      <Card size="1" variant="soft">
        <Flex justify="center" align="center" py="4">
          <Theme fontFamily="sans">{children}</Theme>
        </Flex>
      </Card>
    );
  }

  // Render with dots pattern background
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

  // Render with custom image background
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
