import * as React from "react";
import { Avatar, Flex, Heading, Text } from "@kushagradhawan/kookie-ui";
import type { FlexProps } from "@kushagradhawan/kookie-ui/components/flex";
import type { HeadingProps } from "@kushagradhawan/kookie-ui/components/heading";
import type { TextProps } from "@kushagradhawan/kookie-ui/components/text";
import type { AvatarProps } from "@kushagradhawan/kookie-ui/components/avatar";

// Testimonial.Root - Main container for testimonial
type TestimonialRootProps = FlexProps;
const TestimonialRoot = React.forwardRef<HTMLDivElement, TestimonialRootProps>(
  ({ direction = "column", align = "center", justify = "center", gap = "6", ...props }, ref) => {
    return (
      <Flex
        ref={ref}
        direction={direction}
        align={align}
        justify={justify}
        gap={gap}
        {...props}
      />
    );
  }
);
TestimonialRoot.displayName = "Testimonial.Root";

// Testimonial.Quote - The quote text
type TestimonialQuoteProps = HeadingProps;
const TestimonialQuote = React.forwardRef<HTMLHeadingElement, TestimonialQuoteProps>(
  ({ size = "7", align = "center", weight = "medium", children, ...props }, ref) => {
    return (
      <Heading ref={ref} size={size} align={align} weight={weight} {...props}>
        "{children}"
      </Heading>
    );
  }
);
TestimonialQuote.displayName = "Testimonial.Quote";

// Testimonial.Author - Container for author information
type TestimonialAuthorProps = FlexProps;
const TestimonialAuthor = React.forwardRef<HTMLDivElement, TestimonialAuthorProps>(
  ({ direction = "column", align = "center", gap = "2", ...props }, ref) => {
    return (
      <Flex ref={ref} direction={direction} align={align} gap={gap} {...props} />
    );
  }
);
TestimonialAuthor.displayName = "Testimonial.Author";

// Testimonial.Avatar - Author's avatar
type TestimonialAvatarProps = AvatarProps;
const TestimonialAvatar = ({ size = "4", radius = "full", ...props }: TestimonialAvatarProps) => {
  return <Avatar size={size} radius={radius} {...props} />;
};
TestimonialAvatar.displayName = "Testimonial.Avatar";

// Testimonial.Name - Author's name
type TestimonialNameProps = TextProps;
const TestimonialName = React.forwardRef<HTMLSpanElement, TestimonialNameProps>(
  ({ size = "3", weight = "medium", ...props }, ref) => {
    return <Text ref={ref} size={size} weight={weight} {...props} />;
  }
);
TestimonialName.displayName = "Testimonial.Name";

// Testimonial.Role - Author's role/designation
type TestimonialRoleProps = TextProps;
const TestimonialRole = React.forwardRef<HTMLSpanElement, TestimonialRoleProps>(
  ({ size = "2", color = "gray", ...props }, ref) => {
    return <Text ref={ref} size={size} color={color} {...props} />;
  }
);
TestimonialRole.displayName = "Testimonial.Role";

// Testimonial.Details - Container for name and role
type TestimonialDetailsProps = FlexProps;
const TestimonialDetails = React.forwardRef<HTMLDivElement, TestimonialDetailsProps>(
  ({ direction = "column", align = "center", gap = "0", ...props }, ref) => {
    return (
      <Flex ref={ref} direction={direction} align={align} gap={gap} {...props} />
    );
  }
);
TestimonialDetails.displayName = "Testimonial.Details";

// Compose the Testimonial object
const Testimonial = Object.assign(TestimonialRoot, {
  Root: TestimonialRoot,
  Quote: TestimonialQuote,
  Author: TestimonialAuthor,
  Avatar: TestimonialAvatar,
  Name: TestimonialName,
  Role: TestimonialRole,
  Details: TestimonialDetails,
});

export { Testimonial };
