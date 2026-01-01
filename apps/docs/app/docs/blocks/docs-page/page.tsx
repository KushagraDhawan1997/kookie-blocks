import { getCachedDocMetadata } from "@/lib/docs-metadata";
import DocsPagePageClient from "./page-client";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = getCachedDocMetadata("/docs/blocks/docs-page");

  if (!metadata) {
    return {};
  }

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default function DocsPagePage() {
  const metadata = getCachedDocMetadata("/docs/blocks/docs-page");

  return <DocsPagePageClient metadata={metadata || undefined} />;
}
