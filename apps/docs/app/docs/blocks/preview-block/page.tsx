import { getCachedDocMetadata } from "@/lib/docs-metadata";
import PreviewBlockPageClient from "./page-client";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = getCachedDocMetadata("/docs/blocks/preview-block");

  if (!metadata) {
    return {};
  }

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default function PreviewBlockPage() {
  const metadata = getCachedDocMetadata("/docs/blocks/preview-block");

  return <PreviewBlockPageClient metadata={metadata || undefined} />;
}
