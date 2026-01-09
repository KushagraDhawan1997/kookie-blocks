"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { Hero, Footer } from "@kushagradhawan/kookie-blocks";
import {
  Avatar,
  Button,
  Section,
  Container,
  Link,
  Separator,
  Text,
  Box,
  Flex,
} from "@kushagradhawan/kookie-ui";
import NextLink from "next/link";
import { Testimonial } from "@/components/testimonial";

export default function Page() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Section size="2">
        <Container size="2">
          <Hero.Root gap="8" p="6">
            <Hero.Meta>
              <Avatar
                fallback="K"
                size="2"
                color="gray"
                src="/kookie-blocks-logo.svg"
              />
            </Hero.Meta>

            <Hero.Title>Pre-built blocks for rapid development.</Hero.Title>

            <Hero.Description color="gray">
              An open-source collection of reusable blocks built on{" "}
              <Link
                target="_blank"
                href="https://www.hellokookie.com/"
                rel="noopener noreferrer"
              >
                Kookie UI
              </Link>
              . Ship documentation sites, marketing pages, and application
              interfaces faster with composable, accessible components.
            </Hero.Description>

            <Hero.Actions>
              <Button
                asChild
                highContrast
                color="gray"
                variant="solid"
                size="2"
              >
                <NextLink href="/docs/installation">
                  Get Started with Blocks
                  <HugeiconsIcon icon={ArrowUpRight01Icon} strokeWidth={1.5} />
                </NextLink>
              </Button>
            </Hero.Actions>
          </Hero.Root>
        </Container>
      </Section>

      <Separator size="4" light />

      <Testimonial
        quote="Kookie Blocks takes the foundations of Kookie UI and turns them into ready-to-use building blocks. Instead of assembling components from scratch every time, we now have powerful, composable patterns that just work. It's going to change how we build interfaces."
        author="Anuj"
        designation="Software Engineer at Womp"
        avatar="https://media.licdn.com/dms/image/v2/D5603AQGWSOGxFf3cCw/profile-displayphoto-shrink_400_400/B56ZSwejfaGoAg-/0/1738127590217?e=1769040000&v=beta&t=set7ygl1nzZiXozOoibgjTYfIsenO28wVGcw1dK8sCw"
      />

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
                      href="https://blocks.hellokookie.com/"
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
                    href="https://blocks.hellokookie.com/"
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
