import * as React from "react";
import { Flex, Heading, Text } from "@kushagradhawan/kookie-ui";
import type { FlexProps } from "@kushagradhawan/kookie-ui/components/flex";
import type { HeadingProps } from "@kushagradhawan/kookie-ui/components/heading";
import type { TextProps } from "@kushagradhawan/kookie-ui/components/text";

// Responsive type matching Kookie UI's pattern
type Responsive<T> = T | Partial<Record<'initial' | 'xs' | 'sm' | 'md' | 'lg' | 'xl', T>>;

// Helper to convert layout to direction
function layoutToDirection(layout: "stacked" | "split"): "column" | "row" {
  return layout === "split" ? "row" : "column";
}

// Helper to convert responsive layout to responsive direction
function convertLayoutToDirection(
  layout?: Responsive<"stacked" | "split">
): Responsive<"column" | "row"> | undefined {
  if (!layout) return undefined;

  if (typeof layout === "string") {
    return layoutToDirection(layout);
  }

  // Handle responsive object
  const result: Partial<Record<'initial' | 'xs' | 'sm' | 'md' | 'lg' | 'xl', "column" | "row">> = {};
  for (const [breakpoint, value] of Object.entries(layout)) {
    if (value) {
      result[breakpoint as keyof typeof result] = layoutToDirection(value);
    }
  }
  return result;
}

// Hero.Root Props
type HeroRootProps = Omit<FlexProps, 'direction'> & {
  layout?: Responsive<"stacked" | "split">;
  direction?: FlexProps['direction']; // Allow override if needed
};

const HeroRoot = React.forwardRef<HTMLDivElement, HeroRootProps>(
  ({ layout = "stacked", align = "center", gap = "6", direction, ...props }, ref) => {
    // Convert layout to direction, but allow explicit direction override
    const computedDirection = direction || convertLayoutToDirection(layout) || "column";

    return (
      <Flex
        ref={ref}
        direction={computedDirection}
        align={align}
        gap={gap}
        {...props}
      />
    );
  }
);
HeroRoot.displayName = "Hero.Root";

// Hero.Meta - Container for logos, badges, meta info above title
type HeroMetaProps = FlexProps;
const HeroMeta = React.forwardRef<HTMLDivElement, HeroMetaProps>(
  ({ gap = "2", align = "center", ...props }, ref) => {
    return <Flex ref={ref} gap={gap} align={align} {...props} />;
  }
);
HeroMeta.displayName = "Hero.Meta";

// Hero.Title - Passes through to Heading with sensible defaults
type HeroTitleProps = HeadingProps;
const HeroTitle = React.forwardRef<HTMLHeadingElement, HeroTitleProps>(
  ({ size = "9", weight = "medium", align = "center", ...props }, ref) => {
    return <Heading ref={ref} size={size} weight={weight} align={align} {...props} />;
  }
);
HeroTitle.displayName = "Hero.Title";

// Hero.Description - Passes through to Text with sensible defaults
type HeroDescriptionProps = TextProps;
const HeroDescription = React.forwardRef<HTMLParagraphElement, HeroDescriptionProps>(
  ({ size = "4", align = "center", ...props }, ref) => {
    return <Text ref={ref} size={size} align={align} {...props} />;
  }
);
HeroDescription.displayName = "Hero.Description";

// Hero.Actions - Container for buttons/CTAs
type HeroActionsProps = FlexProps;
const HeroActions = React.forwardRef<HTMLDivElement, HeroActionsProps>(
  ({ gap = "2", direction = "row", align = "center", ...props }, ref) => {
    return <Flex ref={ref} gap={gap} direction={direction} align={align} {...props} />;
  }
);
HeroActions.displayName = "Hero.Actions";

// Hero.Media - Container for images/media with position control
type HeroMediaProps = FlexProps & {
  position?: "left" | "right" | "below" | "background";
};
const HeroMedia = React.forwardRef<HTMLDivElement, HeroMediaProps>(
  ({ position = "below", ...props }, ref) => {
    // For now, just render as a Flex container
    // Position handling will be done by parent layout
    return <Flex ref={ref} {...props} />;
  }
);
HeroMedia.displayName = "Hero.Media";

// Compose the Hero object
const Hero = Object.assign(HeroRoot, {
  Root: HeroRoot,
  Meta: HeroMeta,
  Title: HeroTitle,
  Description: HeroDescription,
  Actions: HeroActions,
  Media: HeroMedia,
});

export { Hero };
