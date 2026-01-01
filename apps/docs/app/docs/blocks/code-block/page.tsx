import { getCachedDocMetadata } from "@/lib/docs-metadata";
import CodeBlockPageClient from "./page-client";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = getCachedDocMetadata("/docs/blocks/code-block");

  if (!metadata) {
    return {};
  }

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default function CodeBlockPage() {
  const metadata = getCachedDocMetadata("/docs/blocks/code-block");

  return <CodeBlockPageClient metadata={metadata || undefined} />;
}
