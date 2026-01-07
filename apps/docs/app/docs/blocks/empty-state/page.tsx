import { getCachedDocMetadata } from "@/lib/docs-metadata";
import EmptyStatePageClient from "./page-client";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = getCachedDocMetadata("/docs/blocks/empty-state");

  if (!metadata) {
    return {};
  }

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default function EmptyStatePage() {
  const metadata = getCachedDocMetadata("/docs/blocks/empty-state");

  return <EmptyStatePageClient metadata={metadata || undefined} />;
}
