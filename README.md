# Kookie Blocks

> Higher-level composed components built on [Kookie UI](https://hellokookie.com) for documentation sites, content rendering, and application shells.

[![Alpha](https://img.shields.io/badge/alpha-blue)](https://github.com/KushagraDhawan1997/kookie-blocks)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://img.shields.io/npm/v/@kushagradhawan/kookie-blocks)](https://www.npmjs.com/package/@kushagradhawan/kookie-blocks)

## Introduction

Kookie Blocks provides ready-to-use, high-level components that compose multiple Kookie UI primitives into complete features. Instead of assembling sidebars, navigation, and content areas yourself, use DocsShell. Instead of building markdown rendering with syntax highlighting, use StreamingMarkdown.

## Installation

```bash
npm install @kushagradhawan/kookie-blocks @kushagradhawan/kookie-ui
```

## Quick Start

```tsx
import '@kushagradhawan/kookie-ui/styles.css';
import '@kushagradhawan/kookie-blocks/styles.css';
import { Theme } from '@kushagradhawan/kookie-ui';
import { DocsShell } from '@kushagradhawan/kookie-blocks';

const navigation = {
  groups: [
    {
      label: 'Getting Started',
      items: [
        { href: '/docs/installation', title: 'Installation' },
        { href: '/docs/usage', title: 'Usage' },
      ],
    },
  ],
};

export default function DocsLayout({ children }) {
  return (
    <Theme accentColor="blue">
      <DocsShell navigation={navigation} logo={{ src: '/logo.png', alt: 'Docs' }}>
        {children}
      </DocsShell>
    </Theme>
  );
}
```

## Components

Documented components:

- **DocsShell** — Complete documentation layout with sidebar, header, and content area
- **DocsSidebar** — Navigation sidebar with collapsible groups
- **DocsPage** — Documentation page wrapper with table of contents
- **StreamingMarkdown** — Markdown renderer with streaming support for AI content
- **CodeBlock** — Syntax-highlighted code with copy button and language label
- **TableOfContents** — Auto-generated table of contents from headings
- **Hero** — Hero section for landing pages
- **Footer** — Site footer component
- **PreviewBlock** — Component preview with code

## Documentation

Visit [kookieblocks.com](https://kookieblocks.com) for full documentation.

## Requirements

- React 18+
- Kookie UI (peer dependency)
- TypeScript support built-in

## License

MIT © [Kushagra Dhawan](https://github.com/kushagradhawan)

## Status

⚠️ **Alpha** - Kookie Blocks is in alpha. Components and APIs are still evolving, and breaking changes may happen.
