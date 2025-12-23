import React, { type ReactNode } from "react";
import { Box } from "@kushagradhawan/kookie-ui";

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

export function PreviewSection({ children, background = "none", backgroundProps = {} }: PreviewSectionProps) {
  const { dotSize = 2, color = "#d4d4d8", backgroundColor = "transparent", height = "auto", width = "100%", radius = "var(--radius-3)" } = backgroundProps;

  const backgroundStyle =
    background === "dots"
      ? {
          backgroundImage: `radial-gradient(circle, ${color} ${dotSize}px, ${backgroundColor} ${dotSize}px)`,
          backgroundSize: "20px 20px",
        }
      : background !== "none"
        ? {
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }
        : {};

  return (
    <Box
      p="4"
      style={{
        ...backgroundStyle,
        height,
        width,
        borderRadius: radius,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "200px",
      }}
    >
      {children}
    </Box>
  );
}

