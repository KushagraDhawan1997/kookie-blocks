import * as React from "react";
import { Flex, Heading, Text, Box } from "@kushagradhawan/kookie-ui";
import type { FlexProps } from "@kushagradhawan/kookie-ui/components/flex";
import type { HeadingProps } from "@kushagradhawan/kookie-ui/components/heading";
import type { TextProps } from "@kushagradhawan/kookie-ui/components/text";
import type { BoxProps } from "@kushagradhawan/kookie-ui/components/box";

// EmptyState.Root Props
type EmptyStateRootProps = Omit<FlexProps, 'direction'> & {
  /** Content alignment. Defaults to center. */
  align?: "start" | "center";
};

const EmptyStateRoot = React.forwardRef<HTMLDivElement, EmptyStateRootProps>(
  ({ align = "center", gap = "4", children, ...props }, ref) => {
    return (
      <Flex
        ref={ref}
        direction="column"
        align={align}
        gap={gap}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);
EmptyStateRoot.displayName = "EmptyState.Root";

// EmptyState.Icon - Container for the icon/illustration
type EmptyStateIconProps = BoxProps;
const EmptyStateIcon = React.forwardRef<HTMLDivElement, EmptyStateIconProps>(
  ({ className, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        className={`kb-empty-state-icon${className ? ` ${className}` : ""}`}
        {...props}
      />
    );
  }
);
EmptyStateIcon.displayName = "EmptyState.Icon";

// EmptyState.Content - Groups title and description with tighter gap
type EmptyStateContentProps = FlexProps;
const EmptyStateContent = React.forwardRef<HTMLDivElement, EmptyStateContentProps>(
  ({ direction = "column", gap = "1", ...props }, ref) => {
    return <Flex ref={ref} direction={direction} gap={gap} {...props} />;
  }
);
EmptyStateContent.displayName = "EmptyState.Content";

// EmptyState.Title - Passes through to Heading with sensible defaults
type EmptyStateTitleProps = HeadingProps;
const EmptyStateTitle = React.forwardRef<HTMLHeadingElement, EmptyStateTitleProps>(
  ({ as = "h3", size = "5", weight = "medium", align = "center", ...props }, ref) => {
    return <Heading ref={ref} as={as} size={size} weight={weight} align={align} {...props} />;
  }
);
EmptyStateTitle.displayName = "EmptyState.Title";

// EmptyState.Description - Passes through to Text with sensible defaults
type EmptyStateDescriptionProps = TextProps;
const EmptyStateDescription = React.forwardRef<HTMLParagraphElement, EmptyStateDescriptionProps>(
  ({ size = "2", color = "gray", align = "center", ...props }, ref) => {
    return <Text ref={ref} size={size} color={color} align={align} {...props} />;
  }
);
EmptyStateDescription.displayName = "EmptyState.Description";

// EmptyState.Actions - Container for action buttons
type EmptyStateActionsProps = FlexProps;
const EmptyStateActions = React.forwardRef<HTMLDivElement, EmptyStateActionsProps>(
  ({ gap = "2", align = "center", justify = "center", ...props }, ref) => {
    return <Flex ref={ref} gap={gap} align={align} justify={justify} {...props} />;
  }
);
EmptyStateActions.displayName = "EmptyState.Actions";

// Compose the EmptyState object
const EmptyState = Object.assign(EmptyStateRoot, {
  Root: EmptyStateRoot,
  Icon: EmptyStateIcon,
  Content: EmptyStateContent,
  Title: EmptyStateTitle,
  Description: EmptyStateDescription,
  Actions: EmptyStateActions,
});

export { EmptyState };
