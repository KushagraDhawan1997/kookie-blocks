"use client";

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
        <Container size="3" px={{ initial: "4", sm: "6" }}>
          <Testimonial.Root py={{ initial: "4", sm: "6" }}>
            <Testimonial.Quote>
              Kookie Blocks takes the foundations of Kookie UI and turns them
              into ready-to-use building blocks. Instead of assembling
              components from scratch every time, we now have powerful,
              composable patterns that just work. It's going to change how we
              build interfaces.
            </Testimonial.Quote>
            <Testimonial.Author>
              <Testimonial.Avatar
                src="https://media.licdn.com/dms/image/v2/D5603AQGWSOGxFf3cCw/profile-displayphoto-shrink_400_400/B56ZSwejfaGoAg-/0/1738127590217?e=1769040000&v=beta&t=set7ygl1nzZiXozOoibgjTYfIsenO28wVGcw1dK8sCw"
                fallback="A"
              />
              <Testimonial.Details>
                <Testimonial.Name>Anuj</Testimonial.Name>
                <Testimonial.Role>Software Engineer at Womp</Testimonial.Role>
              </Testimonial.Details>
            </Testimonial.Author>
          </Testimonial.Root>
        </Container>
      </Section>

      <Box mb="9">
        <Separator size="4" light />
        <Container size="4">
          <Footer.Root p="8" gap="8" px={{ initial: "4", sm: "6" }}>
            <Footer.Main>
              <Footer.Brand gap="6">
                <Avatar
                  fallback="K"
                  size="3"
                  color="gray"
                  src="/kookie-blocks-logo.svg"
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
                      © {currentYear} Kushagra Dhawan. Licensed under MIT.
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
                  <Footer.Link href="https://womp.com" target="_blank">
                    Womp 3D
                  </Footer.Link>
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
                </Footer.LinkGroup>
              </Footer.Links>
            </Footer.Main>
          </Footer.Root>
        </Container>
      </Box>
    </>
  );
}
