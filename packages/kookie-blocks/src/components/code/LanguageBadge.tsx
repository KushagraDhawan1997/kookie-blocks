import React from "react";
import { Code } from "@kushagradhawan/kookie-ui";

interface LanguageBadgeProps {
  language: string;
}

function formatLanguage(lang: string): string {
  const languageMap: Record<string, string> = {
    js: "JS",
    jsx: "JSX",
    ts: "TS",
    tsx: "TSX",
    py: "Python",
    rb: "Ruby",
    sh: "Shell",
    bash: "Bash",
    text: "plaintext",
  };

  return languageMap[lang.toLowerCase()] || lang;
}

export function LanguageBadge({ language }: LanguageBadgeProps) {
  const displayLanguage = formatLanguage(language);

  return (
    <Code size="1" color="gray" highContrast>
      {displayLanguage}
    </Code>
  );
}

