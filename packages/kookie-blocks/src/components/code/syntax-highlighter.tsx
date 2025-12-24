import React, { useEffect, useState } from "react";
import { codeToHtml } from "shiki";
import { Box, Code } from "@kushagradhawan/kookie-ui";

interface SyntaxHighlighterProps {
  code: string;
  language: string;
  lightTheme?: string;
  darkTheme?: string;
}

const DEFAULT_LIGHT_THEME = "one-light";
const DEFAULT_DARK_THEME = "one-dark-pro";

export function SyntaxHighlighter({ code, language, lightTheme = DEFAULT_LIGHT_THEME, darkTheme = DEFAULT_DARK_THEME }: SyntaxHighlighterProps) {
  const [highlighted, setHighlighted] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    codeToHtml(code, {
      lang: language,
      themes: {
        light: lightTheme,
        dark: darkTheme,
      },
      defaultColor: false,
    })
      .then((html) => {
        if (!cancelled) {
          setHighlighted(html);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setHighlighted(null);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [code, language, lightTheme, darkTheme]);

  if (!highlighted) {
    return (
      <pre className="code-block-content">
        <Code size="3">{code}</Code>
      </pre>
    );
  }

  return <Box className="code-block-content" width="100%" style={{ minWidth: 0 }} dangerouslySetInnerHTML={{ __html: highlighted }} />;
}

