import * as React from "react";
import { Flex, Heading, Text, Avatar, Box, Separator } from "@kushagradhawan/kookie-ui";
import type { FlexProps } from "@kushagradhawan/kookie-ui/components/flex";
import type { HeadingProps } from "@kushagradhawan/kookie-ui/components/heading";
import type { TextProps } from "@kushagradhawan/kookie-ui/components/text";
import type { AvatarProps } from "@kushagradhawan/kookie-ui/components/avatar";
import type { BoxProps } from "@kushagradhawan/kookie-ui/components/box";

// Context for tracking banner presence
interface PageHeaderContextValue {
  hasBanner: boolean;
}

const PageHeaderContext = React.createContext<PageHeaderContextValue>({
  hasBanner: false,
});

// PageHeader.Root Props
type PageHeaderRootProps = FlexProps & {
  /** Show a separator at the bottom of the header */
  separator?: boolean;
};

const PageHeaderRoot = React.forwardRef<HTMLDivElement, PageHeaderRootProps>(
  ({ direction = "column", gap = "4", separator = false, children, ...props }, ref) => {
    const childArray = React.Children.toArray(children);

    // Check if Banner is among children
    const hasBanner = childArray.some(
      (child) =>
        React.isValidElement(child) && child.type === PageHeaderBanner
    );

    // Check if Tabs is among children
    const hasTabs = childArray.some(
      (child) =>
        React.isValidElement(child) && child.type === PageHeaderTabs
    );

    // Dev warning for separator with tabs
    React.useEffect(() => {
      if (process.env.NODE_ENV !== "production") {
        if (separator && hasTabs) {
          console.warn(
            "PageHeader.Root: 'separator' prop is redundant when using PageHeader.Tabs, as tabs already provide a visual divider"
          );
        }
      }
    }, [separator, hasTabs]);

    return (
      <PageHeaderContext.Provider value={{ hasBanner }}>
        <Flex ref={ref} direction={direction} gap={gap} {...props}>
          {children}
          {separator && <Separator size="4" />}
        </Flex>
      </PageHeaderContext.Provider>
    );
  }
);
PageHeaderRoot.displayName = "PageHeader.Root";

// PageHeader.Banner - Full-width banner image
type PageHeaderBannerProps = BoxProps & {
  /** Image source URL */
  src: string;
  /** Alt text for the image */
  alt?: string;
  /** Banner height */
  height?: string;
};

const PageHeaderBanner = React.forwardRef<HTMLDivElement, PageHeaderBannerProps>(
  ({ src, alt = "", height = "200px", style, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        width="100%"
        style={{
          height,
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "var(--radius-3)",
          ...style,
        }}
        role="img"
        aria-label={alt}
        {...props}
      />
    );
  }
);
PageHeaderBanner.displayName = "PageHeader.Banner";

// Responsive type matching Kookie UI's pattern
type Responsive<T> = T | Partial<Record<"initial" | "xs" | "sm" | "md" | "lg" | "xl", T>>;

// Helper to convert layout to direction
function layoutToDirection(layout: "inline" | "stacked"): "row" | "column" {
  return layout === "stacked" ? "column" : "row";
}

// Helper to convert responsive layout to responsive direction
function convertLayoutToDirection(
  layout?: Responsive<"inline" | "stacked">
): Responsive<"row" | "column"> | undefined {
  if (!layout) return undefined;

  if (typeof layout === "string") {
    return layoutToDirection(layout);
  }

  // Handle responsive object
  const result: Partial<Record<"initial" | "xs" | "sm" | "md" | "lg" | "xl", "row" | "column">> = {};
  for (const [breakpoint, value] of Object.entries(layout)) {
    if (value) {
      result[breakpoint as keyof typeof result] = layoutToDirection(value);
    }
  }
  return result;
}

// PageHeader.Main - Inline row containing media, content, and actions
type PageHeaderMainProps = Omit<FlexProps, "direction"> & {
  /** Layout mode: inline (row) or stacked (column). Supports responsive values. */
  layout?: Responsive<"inline" | "stacked">;
  /** Allow direction override if needed */
  direction?: FlexProps["direction"];
};

const PageHeaderMain = React.forwardRef<HTMLDivElement, PageHeaderMainProps>(
  ({ layout = "inline", gap = "4", align = "center", justify = "between", direction, ...props }, ref) => {
    // Convert layout to direction, but allow explicit direction override
    const computedDirection = direction || convertLayoutToDirection(layout) || "row";

    return (
      <Flex ref={ref} direction={computedDirection} gap={gap} align={align} justify={justify} {...props} />
    );
  }
);
PageHeaderMain.displayName = "PageHeader.Main";

// PageHeader.Media - Logo or Avatar
type PageHeaderMediaProps = Omit<AvatarProps, "radius"> & {
  /** Media type: logo (square) or avatar (circular) */
  type?: "logo" | "avatar";
  /** Overlap the banner (only works with avatar type when banner is present) */
  overlap?: boolean;
};

const PageHeaderMedia = React.forwardRef<HTMLImageElement, PageHeaderMediaProps>(
  ({ type = "avatar", overlap = false, size = "6", style, ...props }, ref) => {
    const context = React.useContext(PageHeaderContext);

    // Dev warning for overlap without banner
    React.useEffect(() => {
      if (process.env.NODE_ENV !== "production") {
        if (overlap && !context.hasBanner) {
          console.warn(
            "PageHeader.Media: 'overlap' prop has no effect without a PageHeader.Banner"
          );
        }
        if (overlap && type === "logo") {
          console.warn(
            "PageHeader.Media: 'overlap' prop is intended for 'avatar' type, not 'logo'"
          );
        }
      }
    }, [overlap, context.hasBanner, type]);

    const radius = type === "logo" ? "small" : "full";
    const shouldOverlap = overlap && context.hasBanner && type === "avatar";

    return (
      <Avatar
        ref={ref}
        radius={radius}
        size={size}
        style={{
          ...(shouldOverlap && {
            marginTop: "calc(var(--space-9) * -1)",
            border: "4px solid var(--color-background)",
          }),
          ...style,
        }}
        {...props}
      />
    );
  }
);
PageHeaderMedia.displayName = "PageHeader.Media";

// PageHeader.Content - Groups meta, title, and description
type PageHeaderContentProps = FlexProps;

const PageHeaderContent = React.forwardRef<HTMLDivElement, PageHeaderContentProps>(
  ({ direction = "column", gap = "2", flexGrow = "1", ...props }, ref) => {
    return <Flex ref={ref} direction={direction} gap={gap} flexGrow={flexGrow} {...props} />;
  }
);
PageHeaderContent.displayName = "PageHeader.Content";

// PageHeader.Meta - Container for meta info (category, date, author, etc.)
type PageHeaderMetaProps = FlexProps;

const PageHeaderMeta = React.forwardRef<HTMLDivElement, PageHeaderMetaProps>(
  ({ gap = "2", align = "center", wrap = "wrap", ...props }, ref) => {
    return <Flex ref={ref} gap={gap} align={align} wrap={wrap} {...props} />;
  }
);
PageHeaderMeta.displayName = "PageHeader.Meta";

// PageHeader.Title - Page heading (h1, size 9)
type PageHeaderTitleProps = HeadingProps;

const PageHeaderTitle = React.forwardRef<HTMLHeadingElement, PageHeaderTitleProps>(
  ({ as = "h1", size = "9", weight = "medium", ...props }, ref) => {
    return <Heading ref={ref} as={as} size={size} weight={weight} {...props} />;
  }
);
PageHeaderTitle.displayName = "PageHeader.Title";

// PageHeader.Description - Supporting text
type PageHeaderDescriptionProps = TextProps;

const PageHeaderDescription = React.forwardRef<
  HTMLParagraphElement,
  PageHeaderDescriptionProps
>(({ size = "4", color = "gray", ...props }, ref) => {
  return <Text ref={ref} size={size} color={color} {...props} />;
});
PageHeaderDescription.displayName = "PageHeader.Description";

// PageHeader.Actions - Container for action buttons
type PageHeaderActionsProps = FlexProps;

const PageHeaderActions = React.forwardRef<HTMLDivElement, PageHeaderActionsProps>(
  ({ gap = "2", align = "center", ...props }, ref) => {
    return <Flex ref={ref} gap={gap} align={align} {...props} />;
  }
);
PageHeaderActions.displayName = "PageHeader.Actions";

// PageHeader.Tabs - Container for tabs
type PageHeaderTabsProps = BoxProps;

const PageHeaderTabs = React.forwardRef<HTMLDivElement, PageHeaderTabsProps>(
  ({ width = "100%", children, style, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        width={width}
        style={{
          display: "flex",
          flexDirection: "column",
          ...style,
        }}
        {...props}
      >
        {children}
      </Box>
    );
  }
);
PageHeaderTabs.displayName = "PageHeader.Tabs";

// Compose the PageHeader object
const PageHeader = Object.assign(PageHeaderRoot, {
  Root: PageHeaderRoot,
  Banner: PageHeaderBanner,
  Main: PageHeaderMain,
  Media: PageHeaderMedia,
  Content: PageHeaderContent,
  Meta: PageHeaderMeta,
  Title: PageHeaderTitle,
  Description: PageHeaderDescription,
  Actions: PageHeaderActions,
  Tabs: PageHeaderTabs,
});

export { PageHeader };
