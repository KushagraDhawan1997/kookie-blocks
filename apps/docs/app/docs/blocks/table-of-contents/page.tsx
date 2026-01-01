import { getCachedDocMetadata } from "@/lib/docs-metadata";
import TableOfContentsPageClient from "./page-client";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = getCachedDocMetadata("/docs/blocks/table-of-contents");

  if (!metadata) {
    return {};
  }

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default function TableOfContentsPage() {
  const metadata = getCachedDocMetadata("/docs/blocks/table-of-contents");

  return <TableOfContentsPageClient metadata={metadata || undefined} />;
}
