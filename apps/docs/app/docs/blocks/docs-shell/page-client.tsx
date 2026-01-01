"use client";

import { DocsPage, TableOfContents } from "@kushagradhawan/kookie-blocks";
import ContentMDX from "./content.mdx";
import type { DocMetadata } from "@/lib/frontmatter";

interface DocsShellPageClientProps {
  metadata?: DocMetadata;
}

export default function DocsShellPageClient({ metadata }: DocsShellPageClientProps) {
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
