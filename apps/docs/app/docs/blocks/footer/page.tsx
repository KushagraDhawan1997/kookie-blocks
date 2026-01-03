import { getCachedDocMetadata } from "@/lib/docs-metadata";
import FooterPageClient from "./page-client";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = getCachedDocMetadata("/docs/blocks/footer");

  if (!metadata) {
    return {};
  }

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default function FooterPage() {
  const metadata = getCachedDocMetadata("/docs/blocks/footer");

  return <FooterPageClient metadata={metadata || undefined} />;
}
