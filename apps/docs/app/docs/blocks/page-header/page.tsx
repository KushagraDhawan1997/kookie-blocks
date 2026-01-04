import { getCachedDocMetadata } from "@/lib/docs-metadata";
import PageHeaderPageClient from "./page-client";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = getCachedDocMetadata("/docs/blocks/page-header");

  if (!metadata) {
    return {};
  }

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default function PageHeaderPage() {
  const metadata = getCachedDocMetadata("/docs/blocks/page-header");

  return <PageHeaderPageClient metadata={metadata || undefined} />;
}
