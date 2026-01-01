"use client";

import { DocsPage, Hero } from "@kushagradhawan/kookie-blocks";
import { Text } from "@kushagradhawan/kookie-ui";

export default function Page() {
  return (
    <DocsPage
      meta={{
        title: "Kookie Blocks",
        description: "A collection of reusable blocks built on Kookie UI for building beautiful app interfaces and marketing pages.",
      }}
    >
      <Hero.Root gap="4">
        <Text size="4" color="gray">
          Kookie Blocks provides pre-built, composable components that help you build
          documentation sites, marketing pages, and application interfaces faster.
        </Text>
      </Hero.Root>
    </DocsPage>
  );
}
