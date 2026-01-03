"use client";

import { useState } from "react";
import { TableOfContents } from "@kushagradhawan/kookie-blocks";
import { Tabs } from "@kushagradhawan/kookie-ui";
import { HugeiconsIcon } from "@hugeicons/react";
import { BookOpen01Icon, CodeIcon } from "@hugeicons/core-free-icons";
import { SiteDocsPage } from "@/components/site-docs-page";
import ContentMDX from "./content.mdx";
import { SectionHeaderExamples } from "./examples";
import type { DocMetadata } from "@/lib/frontmatter";

interface SectionHeaderPageClientProps {
  metadata?: DocMetadata;
}

export default function SectionHeaderPageClient({ metadata }: SectionHeaderPageClientProps) {
  const [activeTab, setActiveTab] = useState<"docs" | "examples">("docs");

  return (
    <SiteDocsPage
      meta={metadata}
      headerTabs={
        <Tabs.Root
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as "docs" | "examples")}
        >
          <Tabs.List>
            <Tabs.Trigger value="docs">
              <HugeiconsIcon icon={BookOpen01Icon} strokeWidth={1.75} />
              Documentation
            </Tabs.Trigger>
            <Tabs.Trigger value="examples">
              <HugeiconsIcon icon={CodeIcon} strokeWidth={1.75} />
              Examples
            </Tabs.Trigger>
          </Tabs.List>
        </Tabs.Root>
      }
      tableOfContents={
        <TableOfContents renderContainer={(content) => content || null} />
      }
    >
      {activeTab === "docs" ? <ContentMDX /> : <SectionHeaderExamples />}
    </SiteDocsPage>
  );
}
