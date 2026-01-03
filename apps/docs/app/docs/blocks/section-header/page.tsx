import { getCachedDocMetadata } from "@/lib/docs-metadata";
import SectionHeaderPageClient from "./page-client";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = getCachedDocMetadata("/docs/blocks/section-header");

  if (!metadata) {
    return {};
  }

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default function SectionHeaderPage() {
  const metadata = getCachedDocMetadata("/docs/blocks/section-header");

  return <SectionHeaderPageClient metadata={metadata || undefined} />;
}
