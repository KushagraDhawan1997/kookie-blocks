"use client";

import { DocsPage, TableOfContents } from "@kushagradhawan/kookie-blocks";
import ContentMDX from "./content.mdx";
import type { DocMetadata } from "@/lib/frontmatter";

interface HeroPageClientProps {
  metadata?: DocMetadata;
}

export default function HeroPageClient({ metadata }: HeroPageClientProps) {
  return (
    <DocsPage
      meta={metadata}
      tableOfContents={
        <TableOfContents renderContainer={(content) => content || null} />
      }
      showFooter
      footerCopyright={{ name: "Kushagra Dhawan", url: "https://www.kushagradhawan.com" }}
      githubUrl="https://github.com/KushagraDhawan1997/kookie-blocks"
    >
      <ContentMDX />
    </DocsPage>
  );
}
