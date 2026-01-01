import { getCachedDocMetadata } from "@/lib/docs-metadata";
import DocsShellPageClient from "./page-client";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = getCachedDocMetadata("/docs/blocks/docs-shell");

  if (!metadata) {
    return {};
  }

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default function DocsShellPage() {
  const metadata = getCachedDocMetadata("/docs/blocks/docs-shell");

  return <DocsShellPageClient metadata={metadata || undefined} />;
}
