import { getCachedDocMetadata } from "@/lib/docs-metadata";
import DocsSidebarPageClient from "./page-client";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = getCachedDocMetadata("/docs/blocks/docs-sidebar");

  if (!metadata) {
    return {};
  }

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default function DocsSidebarPage() {
  const metadata = getCachedDocMetadata("/docs/blocks/docs-sidebar");

  return <DocsSidebarPageClient metadata={metadata || undefined} />;
}
