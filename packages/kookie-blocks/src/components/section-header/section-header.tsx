import * as React from "react";
import { Flex, Heading, Text, Separator } from "@kushagradhawan/kookie-ui";
import type { FlexProps } from "@kushagradhawan/kookie-ui/components/flex";
import type { HeadingProps } from "@kushagradhawan/kookie-ui/components/heading";
import type { TextProps } from "@kushagradhawan/kookie-ui/components/text";

// Responsive type matching Kookie UI's pattern
type Responsive<T> = T | Partial<Record<'initial' | 'xs' | 'sm' | 'md' | 'lg' | 'xl', T>>;

// Helper to convert layout to direction
function layoutToDirection(layout: "stacked" | "inline"): "column" | "row" {
  return layout === "inline" ? "row" : "column";
}

// Helper to convert responsive layout to responsive direction
function convertLayoutToDirection(
  layout?: Responsive<"stacked" | "inline">
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

// Helper to convert layout to justify
function layoutToJustify(layout: "stacked" | "inline"): "start" | "between" {
  return layout === "inline" ? "between" : "start";
}

// Helper to convert responsive layout to responsive justify
function convertLayoutToJustify(
  layout?: Responsive<"stacked" | "inline">
): Responsive<"start" | "between"> | undefined {
  if (!layout) return undefined;

  if (typeof layout === "string") {
    return layoutToJustify(layout);
  }

  const result: Partial<Record<'initial' | 'xs' | 'sm' | 'md' | 'lg' | 'xl', "start" | "between">> = {};
  for (const [breakpoint, value] of Object.entries(layout)) {
    if (value) {
      result[breakpoint as keyof typeof result] = layoutToJustify(value);
    }
  }
  return result;
}

// Helper to convert layout to align
function layoutToAlign(layout: "stacked" | "inline"): "start" | "center" {
  return layout === "inline" ? "center" : "start";
}

// Helper to convert responsive layout to responsive align
function convertLayoutToAlign(
  layout?: Responsive<"stacked" | "inline">
): Responsive<"start" | "center"> | undefined {
  if (!layout) return undefined;

  if (typeof layout === "string") {
    return layoutToAlign(layout);
  }

  const result: Partial<Record<'initial' | 'xs' | 'sm' | 'md' | 'lg' | 'xl', "start" | "center">> = {};
  for (const [breakpoint, value] of Object.entries(layout)) {
    if (value) {
      result[breakpoint as keyof typeof result] = layoutToAlign(value);
    }
  }
  return result;
}

// SectionHeader.Root Props
type SectionHeaderRootProps = Omit<FlexProps, 'direction'> & {
  /** Layout mode: stacked (vertical) or inline (horizontal with actions on right) */
  layout?: Responsive<"stacked" | "inline">;
  /** Show separator at bottom. Use when no tabs are present. */
  separator?: boolean;
  /** Allow explicit direction override if needed */
  direction?: FlexProps['direction'];
};

const SectionHeaderRoot = React.forwardRef<HTMLDivElement, SectionHeaderRootProps>(
  ({ layout = "inline", separator = false, gap = "4", direction, children, ...props }, ref) => {
    // Convert layout to direction/justify/align, but allow explicit direction override
    const computedDirection = direction || convertLayoutToDirection(layout) || "row";
    const computedJustify = convertLayoutToJustify(layout) || "between";
    const computedAlign = convertLayoutToAlign(layout) || "center";

    return (
      <Flex ref={ref} direction="column" gap={gap} {...props}>
        <Flex
          direction={computedDirection}
          justify={computedJustify}
          align={computedAlign}
          gap={gap}
          wrap="wrap"
        >
          {children}
        </Flex>
        {separator && <Separator size="4" />}
      </Flex>
    );
  }
);
SectionHeaderRoot.displayName = "SectionHeader.Root";

// SectionHeader.Content - Groups title and description
type SectionHeaderContentProps = FlexProps;
const SectionHeaderContent = React.forwardRef<HTMLDivElement, SectionHeaderContentProps>(
  ({ direction = "column", gap = "1", ...props }, ref) => {
    return <Flex ref={ref} direction={direction} gap={gap} {...props} />;
  }
);
SectionHeaderContent.displayName = "SectionHeader.Content";

// SectionHeader.Title - Passes through to Heading with sensible defaults
type SectionHeaderTitleProps = HeadingProps;
const SectionHeaderTitle = React.forwardRef<HTMLHeadingElement, SectionHeaderTitleProps>(
  ({ as = "h2", size = "6", weight = "medium", ...props }, ref) => {
    return <Heading ref={ref} as={as} size={size} weight={weight} {...props} />;
  }
);
SectionHeaderTitle.displayName = "SectionHeader.Title";

// SectionHeader.Description - Passes through to Text with sensible defaults
type SectionHeaderDescriptionProps = TextProps;
const SectionHeaderDescription = React.forwardRef<HTMLParagraphElement, SectionHeaderDescriptionProps>(
  ({ size = "3", color = "gray", ...props }, ref) => {
    return <Text ref={ref} size={size} color={color} {...props} />;
  }
);
SectionHeaderDescription.displayName = "SectionHeader.Description";

// SectionHeader.Actions - Container for action buttons (right side in inline layout)
type SectionHeaderActionsProps = FlexProps;
const SectionHeaderActions = React.forwardRef<HTMLDivElement, SectionHeaderActionsProps>(
  ({ gap = "2", align = "center", ...props }, ref) => {
    return <Flex ref={ref} gap={gap} align={align} {...props} />;
  }
);
SectionHeaderActions.displayName = "SectionHeader.Actions";

// SectionHeader.Tabs - Container for tabs (renders below the header row)
type SectionHeaderTabsProps = FlexProps;
const SectionHeaderTabs = React.forwardRef<HTMLDivElement, SectionHeaderTabsProps>(
  ({ width = "100%", ...props }, ref) => {
    return <Flex ref={ref} width={width} {...props} />;
  }
);
SectionHeaderTabs.displayName = "SectionHeader.Tabs";

// Compose the SectionHeader object
const SectionHeader = Object.assign(SectionHeaderRoot, {
  Root: SectionHeaderRoot,
  Content: SectionHeaderContent,
  Title: SectionHeaderTitle,
  Description: SectionHeaderDescription,
  Actions: SectionHeaderActions,
  Tabs: SectionHeaderTabs,
});

export { SectionHeader };
