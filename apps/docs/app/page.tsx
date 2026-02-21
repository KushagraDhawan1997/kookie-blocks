"use client";

import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowUpRight01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import { Hero, Footer, Testimonial } from "@kushagradhawan/kookie-blocks";
import {
  Avatar,
  Button,
  Heading,
  Section,
  Container,
  Link,
  Separator,
  Text,
  Box,
  Flex,
} from "@kushagradhawan/kookie-ui";
import NextLink from "next/link";

const components = [
  { name: "Hero", category: "Marketing", href: "/docs/blocks/hero" },
  { name: "Footer", category: "Marketing", href: "/docs/blocks/footer" },
  { name: "Testimonial", category: "Marketing", href: "/docs/blocks/testimonial" },
  { name: "Page Header", category: "Application", href: "/docs/blocks/page-header" },
  { name: "Section Header", category: "Application", href: "/docs/blocks/section-header" },
  { name: "Empty State", category: "Application", href: "/docs/blocks/empty-state" },
  { name: "Markdown Components", category: "AI", href: "/docs/blocks/create-markdown-components" },
  { name: "Streaming Markdown", category: "AI", href: "/docs/blocks/streaming-markdown" },
  { name: "Code Block", category: "Documentation", href: "/docs/blocks/code-block" },
  { name: "Docs Shell", category: "Documentation", href: "/docs/blocks/docs-shell" },
  { name: "Docs Sidebar", category: "Documentation", href: "/docs/blocks/docs-sidebar" },
  { name: "Docs Page", category: "Documentation", href: "/docs/blocks/docs-page" },
  { name: "Table Of Contents", category: "Documentation", href: "/docs/blocks/table-of-contents" },
  { name: "Preview Block", category: "Documentation", href: "/docs/blocks/preview-block" },
];

export default function Page() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Section position="relative" size="4">
        <Container size="4">
          <Flex
            direction="column"
            align="start"
            gap={{ initial: "5", sm: "8" }}
            py={{ initial: "4", sm: "6" }}
            px={{ initial: "4", sm: "6" }}
          >
            <Flex direction="column" gap="2" width="100%">
              <Heading size="3" weight="medium">
                Kookie Blocks
              </Heading>
              <Separator size="4" />
            </Flex>

            <Hero.Root align="start" gap={{ initial: "6", sm: "8" }}>
              <Hero.Title
                size={{ initial: "8", sm: "9", lg: "10" }}
                weight="medium"
                align="left"
              >
                Pre-built blocks for rapid development.
              </Hero.Title>

              <Hero.Description
                size={{ initial: "3", sm: "4" }}
                color="gray"
                align="left"
              >
                An open-source collection of reusable blocks built on{" "}
                <Link
                  target="_blank"
                  href="https://www.hellokookie.com/"
                  rel="noopener noreferrer"
                  underline="always"
                  color="blue"
                >
                  Kookie UI
                </Link>
                . Ship documentation sites, marketing pages, and application
                interfaces faster with composable, accessible components.
              </Hero.Description>

              <Hero.Actions gap="3">
                <Button asChild variant="solid" size="2" highContrast>
                  <NextLink href="/docs/installation">
                    Get Started
                    <HugeiconsIcon icon={ArrowUpRight01Icon} />
                  </NextLink>
                </Button>
                <Button asChild variant="soft" highContrast size="2">
                  <a
                    href="https://github.com/KushagraDhawan1997/kookie-blocks"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                    <HugeiconsIcon icon={ArrowRight01Icon} />
                  </a>
                </Button>
              </Hero.Actions>
            </Hero.Root>
          </Flex>
        </Container>
      </Section>

      <Section size="4">
        <Container size="4">
          <Flex
            direction="column"
            align="start"
            gap={{ initial: "6", sm: "10" }}
            py={{ initial: "4", sm: "6" }}
            px={{ initial: "4", sm: "6" }}
          >
          <Flex direction="column" gap="2" width="100%">
            <Heading size="3" weight="medium">
              Components
            </Heading>
            <Separator size="4" />
          </Flex>
          <Flex
            direction={{ initial: "column", lg: "row" }}
            gap={{ initial: "6", md: "12" }}
            width="100%"
            align="stretch"
          >
            <Flex
              direction="column"
              gap={{ initial: "6", sm: "8" }}
              flexShrink="0"
              maxWidth={{ initial: "100%", lg: "600px" }}
              position={{ initial: "static", lg: "sticky" }}
              top="96px"
              style={{ alignSelf: "flex-start" }}
            >
              <Heading
                align="left"
                size={{ initial: "6", sm: "8", lg: "9" }}
                weight="medium"
                style={{ textWrap: "balance" }}
              >
                Composable patterns for documentation, marketing, and AI
                interfaces.
              </Heading>
              <Flex gap="3" justify="start">
                <Button asChild variant="solid" size="2" highContrast>
                  <NextLink href="/docs/installation">
                    Get Started
                    <HugeiconsIcon icon={ArrowUpRight01Icon} />
                  </NextLink>
                </Button>
                <Button asChild variant="soft" highContrast size="2">
                  <a
                    href="https://github.com/KushagraDhawan1997/kookie-blocks"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                    <HugeiconsIcon icon={ArrowRight01Icon} />
                  </a>
                </Button>
              </Flex>
            </Flex>
            <Flex
              direction="column"
              justify="between"
              gap={{ initial: "6", sm: "8" }}
              width="100%"
              px={{ initial: "0", md: "4" }}
            >
              <Flex direction="column" gap="4" width="100%">
                {components.map((comp) => (
                  <React.Fragment key={comp.href}>
                    <Flex
                      justify="between"
                      width="100%"
                      gap="3"
                      align={{ initial: "start", md: "center" }}
                      direction={{ initial: "column", md: "row" }}
                    >
                      <Link
                        asChild
                        highContrast
                        underline="always"
                      >
                        <NextLink href={comp.href}>
                          <Flex
                            gap="1"
                            align="center"
                          >
                            <Text size="3" weight="medium">
                              {comp.name}
                            </Text>
                            <Flex flexShrink="0">
                              <HugeiconsIcon
                                icon={ArrowUpRight01Icon}
                                size={16}
                                color="currentColor"
                              />
                            </Flex>
                          </Flex>
                        </NextLink>
                      </Link>
                      <Text size="2" weight="regular" color="gray">
                        {comp.category}
                      </Text>
                    </Flex>
                    <Separator size="4" />
                  </React.Fragment>
                ))}
              </Flex>
              {/* Stats — hidden for now
              <Flex
                gap={{ initial: "6", sm: "8" }}
                align="baseline"
                justify="end"
                direction={{ initial: "column", sm: "row" }}
              >
                <Flex gap="0" align="baseline">
                  <Heading
                    size={{ initial: "9", sm: "10", md: "11", lg: "12" }}
                    weight="regular"
                    style={{
                      textBoxTrim: "trim-both",
                      textBoxEdge: "cap alphabetic",
                    }}
                  >
                    {components.length}
                  </Heading>
                  <Text size="1" color="gray">
                    (blocks)
                  </Text>
                </Flex>
                <Flex gap="0" align="baseline">
                  <Heading
                    size={{ initial: "9", sm: "10", md: "11", lg: "12" }}
                    weight="regular"
                    style={{
                      textBoxTrim: "trim-both",
                      textBoxEdge: "cap alphabetic",
                    }}
                  >
                    Open Source
                  </Heading>
                  <Text size="1" color="gray">
                    (MIT)
                  </Text>
                </Flex>
              </Flex>
              */}
            </Flex>
          </Flex>
        </Flex>
        </Container>
      </Section>

      <Section size="4">
        <Container size="4">
          <Flex direction="column" align="start" gap={{ initial: "6", sm: "10" }} py={{ initial: "4", sm: "6" }} px={{ initial: "4", sm: "6" }}>
            <Flex direction="column" gap="2" width="100%">
              <Heading size="3" weight="medium">
                Testimonial
              </Heading>
              <Separator size="4" />
            </Flex>
            <Testimonial.Root align="start">
              <Testimonial.Quote size={{ initial: "6", sm: "7", lg: "8" }} align="left">
                Kookie Blocks takes the foundations of Kookie UI and turns them
                into ready-to-use building blocks. Instead of assembling
                components from scratch every time, we now have powerful,
                composable patterns that just work. It's going to change how we
                build interfaces.
              </Testimonial.Quote>
              <Testimonial.Author align="start">
                <Testimonial.Avatar
                  src="https://media.licdn.com/dms/image/v2/D5603AQGWSOGxFf3cCw/profile-displayphoto-shrink_400_400/B56ZSwejfaGoAg-/0/1738127590217?e=1769040000&v=beta&t=set7ygl1nzZiXozOoibgjTYfIsenO28wVGcw1dK8sCw"
                  fallback="A"
                />
                <Testimonial.Details align="start">
                  <Testimonial.Name>Anuj</Testimonial.Name>
                  <Testimonial.Role>Software Engineer at Womp</Testimonial.Role>
                </Testimonial.Details>
              </Testimonial.Author>
            </Testimonial.Root>
          </Flex>
        </Container>
      </Section>

      <Box mb={{ initial: "6", sm: "9" }}>
        <Separator size="4" light />
        <Container size="4">
          <Footer.Root p={{ initial: "4", sm: "8" }} gap={{ initial: "6", sm: "8" }} px={{ initial: "4", sm: "6" }}>
            <Footer.Brand gap="6">
              <Avatar
                fallback="K"
                size="4"
                color="gray"
                src="/logos/kookie-blocks/kookie-blocks.png"
              />
              <Flex direction="column" gap="4">
                <Footer.Tagline>
                  Built with{" "}
                  <Footer.Link
                    href="https://www.hellokookie.com/"
                    target="_blank"
                    underline="always"
                  >
                    Kookie UI
                  </Footer.Link>
                  {" + "}
                  <Footer.Link
                    href="https://kookieblocks.com/"
                    target="_blank"
                    underline="always"
                  >
                    Kookie Blocks
                  </Footer.Link>
                  .
                </Footer.Tagline>
                <Footer.Legal>
                  <Text size="2" color="gray">
                    © {currentYear} Kushagra Dhawan.
                  </Text>
                  <Footer.Link
                    href="https://github.com/KushagraDhawan1997/kookie-blocks"
                    target="_blank"
                  >
                    GitHub
                  </Footer.Link>
                  <Footer.Link href="/sitemap.xml">Sitemap</Footer.Link>
                </Footer.Legal>
              </Flex>
            </Footer.Brand>
            <Footer.Links>
              <Footer.LinkGroup title="Projects">
                <Footer.Link
                  href="https://www.hellokookie.com/"
                  target="_blank"
                >
                  Kookie UI
                </Footer.Link>
                <Footer.Link
                  href="https://kookieblocks.com/"
                  target="_blank"
                >
                  Kookie Blocks
                </Footer.Link>
                <Footer.Link href="https://womp.com" target="_blank">
                  Womp 3D
                </Footer.Link>
              </Footer.LinkGroup>
            </Footer.Links>
          </Footer.Root>
        </Container>
      </Box>
    </>
  );
}
