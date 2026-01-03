import * as React from "react";
import { Flex, Text, Link, IconButton, Heading } from "@kushagradhawan/kookie-ui";
import type { FlexProps } from "@kushagradhawan/kookie-ui/components/flex";
import type { TextProps } from "@kushagradhawan/kookie-ui/components/text";
import type { LinkProps } from "@kushagradhawan/kookie-ui/components/link";
import type { IconButtonProps } from "@kushagradhawan/kookie-ui/components/icon-button";
import type { HeadingProps } from "@kushagradhawan/kookie-ui/components/heading";

// Footer.Root Props
type FooterRootProps = FlexProps & {
  align?: "left" | "center";
};

const FooterRoot = React.forwardRef<HTMLElement, FooterRootProps>(
  ({ align = "left", direction = "column", gap = "6", children, ...props }, ref) => {
    return (
      <Flex
        ref={ref as React.Ref<HTMLDivElement>}
        asChild
        direction={direction}
        align={align === "center" ? "center" : "stretch"}
        gap={gap}
        {...props}
      >
        <footer>{children}</footer>
      </Flex>
    );
  }
);
FooterRoot.displayName = "Footer.Root";

// Footer.Main - Top section containing brand and links
type FooterMainProps = FlexProps;
const FooterMain = React.forwardRef<HTMLDivElement, FooterMainProps>(
  ({ gap = "8", justify = "between", align = "start", wrap = "wrap", ...props }, ref) => {
    return (
      <Flex
        ref={ref}
        gap={gap}
        justify={justify}
        align={align}
        wrap={wrap}
        {...props}
      />
    );
  }
);
FooterMain.displayName = "Footer.Main";

// Footer.Bottom - Bottom bar for legal and social
type FooterBottomProps = FlexProps;
const FooterBottom = React.forwardRef<HTMLDivElement, FooterBottomProps>(
  ({ gap = "4", justify = "between", align = "center", wrap = "wrap", ...props }, ref) => {
    return (
      <Flex
        ref={ref}
        gap={gap}
        justify={justify}
        align={align}
        wrap={wrap}
        {...props}
      />
    );
  }
);
FooterBottom.displayName = "Footer.Bottom";

// Footer.Brand - Container for logo, name, and tagline
type FooterBrandProps = FlexProps;
const FooterBrand = React.forwardRef<HTMLDivElement, FooterBrandProps>(
  ({ direction = "column", gap = "3", ...props }, ref) => {
    return <Flex ref={ref} direction={direction} gap={gap} {...props} />;
  }
);
FooterBrand.displayName = "Footer.Brand";

// Footer.BrandName - Company/product name
type FooterBrandNameProps = TextProps;
const FooterBrandName = React.forwardRef<HTMLSpanElement, FooterBrandNameProps>(
  ({ size = "4", weight = "bold", ...props }, ref) => {
    return <Text ref={ref} size={size} weight={weight} {...props} />;
  }
);
FooterBrandName.displayName = "Footer.BrandName";

// Footer.Tagline - Short description under brand
type FooterTaglineProps = TextProps;
const FooterTagline = React.forwardRef<HTMLSpanElement, FooterTaglineProps>(
  ({ size = "2", color = "gray", ...props }, ref) => {
    return <Text ref={ref} size={size} color={color} {...props} />;
  }
);
FooterTagline.displayName = "Footer.Tagline";

// Footer.Links - Container for link groups (columns)
type FooterLinksProps = FlexProps;
const FooterLinks = React.forwardRef<HTMLDivElement, FooterLinksProps>(
  ({ gap = "8", wrap = "wrap", ...props }, ref) => {
    return <Flex ref={ref} gap={gap} wrap={wrap} {...props} />;
  }
);
FooterLinks.displayName = "Footer.Links";

// Footer.LinkGroup - Single column of links with a title
type FooterLinkGroupProps = FlexProps & {
  title: string;
};
const FooterLinkGroup = React.forwardRef<HTMLDivElement, FooterLinkGroupProps>(
  ({ title, direction = "column", gap = "3", children, ...props }, ref) => {
    return (
      <Flex ref={ref} direction={direction} gap={gap} {...props}>
        <Heading as="h3" size="2" weight="medium">
          {title}
        </Heading>
        <Flex direction="column" gap="2">
          {children}
        </Flex>
      </Flex>
    );
  }
);
FooterLinkGroup.displayName = "Footer.LinkGroup";

// Footer.Nav - Flat inline links (no grouping, for simple layouts)
type FooterNavProps = FlexProps;
const FooterNav = React.forwardRef<HTMLElement, FooterNavProps>(
  ({ gap = "6", align = "center", wrap = "wrap", children, ...props }, ref) => {
    return (
      <Flex
        ref={ref as React.Ref<HTMLDivElement>}
        asChild
        gap={gap}
        align={align}
        wrap={wrap}
        {...props}
      >
        <nav>{children}</nav>
      </Flex>
    );
  }
);
FooterNav.displayName = "Footer.Nav";

// Footer.Link - Individual link
type FooterLinkProps = LinkProps;
const FooterLink = React.forwardRef<HTMLAnchorElement, FooterLinkProps>(
  ({ size = "2", color = "gray", ...props }, ref) => {
    return <Link ref={ref} size={size} color={color} {...props} />;
  }
);
FooterLink.displayName = "Footer.Link";

// Footer.Legal - Copyright and legal links container
type FooterLegalProps = FlexProps;
const FooterLegal = React.forwardRef<HTMLDivElement, FooterLegalProps>(
  ({ gap = "4", align = "center", wrap = "wrap", ...props }, ref) => {
    return <Flex ref={ref} gap={gap} align={align} wrap={wrap} {...props} />;
  }
);
FooterLegal.displayName = "Footer.Legal";

// Footer.Social - Social icons container
type FooterSocialProps = FlexProps;
const FooterSocial = React.forwardRef<HTMLDivElement, FooterSocialProps>(
  ({ gap = "4", align = "center", ...props }, ref) => {
    return <Flex ref={ref} gap={gap} align={align} {...props} />;
  }
);
FooterSocial.displayName = "Footer.Social";

// Footer.SocialLink - Icon link for social media
// TODO: Add IconLink to Kookie UI for proper anchor ref typing (currently casting ref due to asChild pattern)
type FooterSocialLinkProps = Omit<IconButtonProps, "children" | "aria-label" | "aria-labelledby"> & {
  /** Icon component to render */
  icon: React.ComponentType<{ size?: number | string }>;
  /** Accessible label for screen readers */
  label: string;
  /** Link destination */
  href: string;
  /** @default "ghost" */
  variant?: IconButtonProps["variant"];
  /** @default "gray" */
  color?: IconButtonProps["color"];
  /** @default "2" */
  size?: IconButtonProps["size"];
};
const FooterSocialLink = React.forwardRef<HTMLAnchorElement, FooterSocialLinkProps>(
  ({ icon: Icon, label, href, variant = "ghost", color = "gray", size = "2", ...props }, ref) => {
    return (
      <IconButton
        ref={ref as React.Ref<HTMLButtonElement>}
        asChild
        variant={variant}
        color={color}
        size={size}
        aria-label={label}
        {...props}
      >
        <a href={href} target="_blank" rel="noopener noreferrer">
          <Icon />
        </a>
      </IconButton>
    );
  }
);
FooterSocialLink.displayName = "Footer.SocialLink";

// Compose the Footer object
const Footer = Object.assign(FooterRoot, {
  Root: FooterRoot,
  Main: FooterMain,
  Bottom: FooterBottom,
  Brand: FooterBrand,
  BrandName: FooterBrandName,
  Tagline: FooterTagline,
  Links: FooterLinks,
  LinkGroup: FooterLinkGroup,
  Nav: FooterNav,
  Link: FooterLink,
  Legal: FooterLegal,
  Social: FooterSocial,
  SocialLink: FooterSocialLink,
});

export { Footer };
