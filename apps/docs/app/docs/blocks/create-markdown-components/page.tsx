import { getCachedDocMetadata } from "@/lib/docs-metadata";
import CreateMarkdownComponentsPageClient from "./page-client";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = getCachedDocMetadata("/docs/blocks/create-markdown-components");

  if (!metadata) {
    return {};
  }

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default function CreateMarkdownComponentsPage() {
  const metadata = getCachedDocMetadata("/docs/blocks/create-markdown-components");

  return <CreateMarkdownComponentsPageClient metadata={metadata || undefined} />;
}
