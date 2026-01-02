"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { Hero } from "@kushagradhawan/kookie-blocks";
import {
  Avatar,
  Button,
  Section,
  Container,
  Link,
} from "@kushagradhawan/kookie-ui";
import NextLink from "next/link";

export default function Page() {
  return (
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
            <Button asChild highContrast color="gray" variant="solid" size="2">
              <NextLink href="/docs/installation">
                Get Started with Blocks
                <HugeiconsIcon icon={ArrowUpRight01Icon} strokeWidth={1.5} />
              </NextLink>
            </Button>
          </Hero.Actions>
        </Hero.Root>
      </Container>
    </Section>
  );
}
