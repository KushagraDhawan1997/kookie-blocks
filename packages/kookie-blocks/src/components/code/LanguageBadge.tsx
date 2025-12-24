import React from "react";
import { Code } from "@kushagradhawan/kookie-ui";

const LANGUAGE_DISPLAY_MAP: Record<string, string> = {
  js: "JS",
  javascript: "JS",
  jsx: "JSX",
  ts: "TS",
  typescript: "TS",
  tsx: "TSX",
  py: "Python",
  python: "Python",
  rb: "Ruby",
  ruby: "Ruby",
  sh: "Shell",
  bash: "Shell",
  shell: "Shell",
  zsh: "Shell",
  css: "CSS",
  scss: "SCSS",
  sass: "Sass",
  less: "Less",
  html: "HTML",
  xml: "XML",
  json: "JSON",
  yaml: "YAML",
  yml: "YAML",
  md: "Markdown",
  markdown: "Markdown",
  mdx: "MDX",
  sql: "SQL",
  graphql: "GraphQL",
  gql: "GraphQL",
  go: "Go",
  rust: "Rust",
  rs: "Rust",
  swift: "Swift",
  kotlin: "Kotlin",
  java: "Java",
  cpp: "C++",
  c: "C",
  cs: "C#",
  csharp: "C#",
  php: "PHP",
  vue: "Vue",
  svelte: "Svelte",
  astro: "Astro",
  dockerfile: "Docker",
  docker: "Docker",
  text: "Text",
  plaintext: "Text",
  txt: "Text",
};

/**
 * Formats a language identifier for display in the badge.
 * Converts technical identifiers to human-readable labels.
 */
export function formatLanguageForDisplay(lang: string): string {
  const normalized = lang.toLowerCase().trim();
  return LANGUAGE_DISPLAY_MAP[normalized] || lang.toUpperCase();
}

interface LanguageBadgeProps {
  language: string;
}

/**
 * Displays the programming language as a small badge.
 * Uses Kookie UI's Code component with consistent styling.
 */
export function LanguageBadge({ language }: LanguageBadgeProps) {
  const displayLanguage = formatLanguageForDisplay(language);

  return (
    <Code size="1" color="gray" variant="ghost">
      {displayLanguage.toLowerCase()}
    </Code>
  );
}
