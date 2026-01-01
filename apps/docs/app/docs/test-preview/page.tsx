import { getCachedDocMetadata } from "@/lib/docs-metadata";
import TestPreviewPageClient from "./page-client";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = getCachedDocMetadata("/docs/test-preview");

  if (!metadata) {
    return {
      title: "Preview Test",
      description: "Testing CodeBlock preview feature",
    };
  }

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default function TestPreviewPage() {
  const metadata = getCachedDocMetadata("/docs/test-preview");

  return <TestPreviewPageClient metadata={metadata || undefined} />;
}
