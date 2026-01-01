import { getCachedDocMetadata } from "@/lib/docs-metadata";
import StreamingMarkdownPageClient from "./page-client";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = getCachedDocMetadata("/docs/blocks/streaming-markdown");

  if (!metadata) {
    return {};
  }

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default function StreamingMarkdownPage() {
  const metadata = getCachedDocMetadata("/docs/blocks/streaming-markdown");

  return <StreamingMarkdownPageClient metadata={metadata || undefined} />;
}
