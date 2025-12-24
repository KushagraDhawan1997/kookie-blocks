import * as React from "react";
import { Flex, Heading } from "@kushagradhawan/kookie-ui";
import type { FlexProps } from "@kushagradhawan/kookie-ui/components/flex";
import type { HeadingProps } from "@kushagradhawan/kookie-ui/components/heading";

type HeroRootProps = FlexProps;
const HeroVariant1 = React.forwardRef<HTMLDivElement, HeroRootProps>((props, ref) => {
  return <Flex ref={ref} direction="column" gap="6" p="6" {...props} />;
});
HeroVariant1.displayName = "Hero.Variant1";

type HeroTitleProps = HeadingProps;
const HeroTitle = React.forwardRef<HTMLHeadingElement, HeroTitleProps>((props, ref) => {
  return <Heading ref={ref} {...props} />;
});
HeroTitle.displayName = "Hero.Title";

const Hero = Object.assign(HeroVariant1, {
  // Base/root maps to the primary variant
  Root: HeroVariant1,
  Variant1: HeroVariant1,
  One: HeroVariant1,
  // Shared slots
  Title: HeroTitle,
});

export { Hero };
