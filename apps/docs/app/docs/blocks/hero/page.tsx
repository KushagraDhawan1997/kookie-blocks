import { getCachedDocMetadata } from "@/lib/docs-metadata";
import HeroPageClient from "./page-client";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = getCachedDocMetadata("/docs/blocks/hero");

  if (!metadata) {
    return {};
  }

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default function HeroPage() {
  const metadata = getCachedDocMetadata("/docs/blocks/hero");

  return <HeroPageClient metadata={metadata || undefined} />;
}
