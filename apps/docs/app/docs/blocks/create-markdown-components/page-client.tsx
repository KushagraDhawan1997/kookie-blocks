"use client";

import { TableOfContents } from "@kushagradhawan/kookie-blocks";
import { SiteDocsPage } from "@/components/site-docs-page";
import ContentMDX from "./content.mdx";
import type { DocMetadata } from "@/lib/frontmatter";

interface CreateMarkdownComponentsPageClientProps {
  metadata?: DocMetadata;
}

export default function CreateMarkdownComponentsPageClient({ metadata }: CreateMarkdownComponentsPageClientProps) {
  return (
    <SiteDocsPage
      meta={metadata}
      tableOfContents={
        <TableOfContents renderContainer={(content) => content || null} />
      }
    >
      <ContentMDX />
    </SiteDocsPage>
  );
}
