import { getCachedDocMetadata } from "@/lib/docs-metadata";
import TestimonialPageClient from "./page-client";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = getCachedDocMetadata("/docs/blocks/testimonial");

  if (!metadata) {
    return {};
  }

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default function TestimonialPage() {
  const metadata = getCachedDocMetadata("/docs/blocks/testimonial");

  return <TestimonialPageClient metadata={metadata || undefined} />;
}
