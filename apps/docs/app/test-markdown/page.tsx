"use client";
import * as React from "react";
import { StreamingMarkdown } from "@kushagradhawan/kookie-blocks";
import { Box, Flex, Heading, Card, Theme, Text, Button } from "@kushagradhawan/kookie-ui";

// Comprehensive markdown content for testing all features
const markdownContent = `# Markdown Component Guide

This is a comprehensive guide demonstrating all markdown features. Use this to test spacing, typography, and component rendering across different contexts.

## Overview

The markdown renderer supports **bold text**, *italic text*, and \`inline code\` within paragraphs. You can also create [links](https://example.com) and combine formatting like **bold with *italic* inside**.

### Installation

To get started, install the package:

\`\`\`bash
npm install @kushagradhawan/kookie-ui
\`\`\`

### Basic Usage

Here's a simple example:

\`\`\`tsx
import { Button, Card } from '@kushagradhawan/kookie-ui';

export function App() {
  return (
    <Card>
      <Button>Click me</Button>
    </Card>
  );
}
\`\`\`

## Component Props

The following table shows all available props:

| Prop           | Type                                                                  | Description                                                                                     |
| -------------- | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| \`variant\`      | \`'classic' \\| 'solid' \\| 'soft' \\| 'surface' \\| 'outline' \\| 'ghost'\` | Button style variant: classic for elevated, solid for primary, outline for secondary, ghost for utility |
| \`size\`         | \`'1' \\| '2' \\| '3' \\| '4'\`                                            | Button density: 1 (24px) for toolbars, 2 (32px) standard, 3 (40px) for important actions, 4 (48px) for hero sections |
| \`color\`        | \`AccentColor\`                                                         | Semantic color to communicate action intent. Use highContrast for maximum visibility |
| \`highContrast\` | \`boolean\`                                                             | Maximum visibility mode, especially useful on complex or translucent backgrounds                |

## Features

### Unordered Lists

- **Fast** - Lightning-quick performance
- **Modern** - Built with latest tech
- **Accessible** - WCAG 2.1 compliant
- **Flexible** - Works with any framework

### Ordered Lists

1. First, install the dependencies
2. Then, configure your environment
3. Finally, start building your app
4. Deploy and enjoy!

### Nested Lists

- Main item one
  - Nested item A
  - Nested item B
    - Deeply nested item
- Main item two
  - Another nested item

## Code Examples

### Inline Code

Use \`const x = 1\` for inline code snippets. You can also use \`function()\` and \`async/await\` patterns.

### Code Blocks

Here's a more complex example:

\`\`\`typescript
interface ButtonProps {
  variant: 'solid' | 'outline' | 'ghost';
  size: '1' | '2' | '3' | '4';
  onClick?: () => void;
}

export function Button({ variant, size, onClick }: ButtonProps) {
  return (
    <button 
      className={\`btn btn-\${variant} btn-\${size}\`}
      onClick={onClick}
    >
      Click me
    </button>
  );
}
\`\`\`

### Python Example

\`\`\`python
def calculate_total(items):
    """Calculate the total price of items."""
    return sum(item.price * item.quantity for item in items)

class ShoppingCart:
    def __init__(self):
        self.items = []
    
    def add_item(self, item):
        self.items.append(item)
    
    def get_total(self):
        return calculate_total(self.items)
\`\`\`

## Blockquotes

> This is a blockquote. Use it to highlight important information, quotes, or callouts.
> 
> You can have multiple paragraphs within a blockquote.
> 
> — Famous Developer

## Horizontal Rules

Use horizontal rules to separate sections:

---

## Text Formatting

You can use various text formatting:

- **Bold text** for emphasis
- *Italic text* for subtle emphasis
- ***Bold and italic*** for strong emphasis
- \`Code\` for technical terms
- ~~Strikethrough~~ for deprecated content

## Links and References

- [External link](https://example.com)
- [Link with title](https://example.com "Example Website")
- [Relative link](/docs/components)
- [Anchor link](#installation)

## Mixed Content

Here's a paragraph with **bold**, *italic*, and \`code\` all mixed together. You can also include [links](https://example.com) seamlessly.

### Subsection with Lists

1. First item with **bold text**
2. Second item with *italic text*
3. Third item with \`inline code\`
4. Fourth item with a [link](https://example.com)

### Another Subsection

This subsection demonstrates spacing between different elements. Notice how paragraphs, lists, and code blocks interact.

- Item one
- Item two
- Item three

More paragraph text here to test spacing.

## Complex Example

Here's a realistic documentation example:

\`\`\`tsx
import { useState } from 'react';
import { Button, Card, Text } from '@kushagradhawan/kookie-ui';

export function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <Card>
      <Text>Count: {count}</Text>
      <Button onClick={() => setCount(count + 1)}>
        Increment
      </Button>
    </Card>
  );
}
\`\`\`

This component demonstrates:
- State management with \`useState\`
- Event handling with \`onClick\`
- Component composition

## Summary

This comprehensive markdown includes:
- Multiple heading levels (h1 through h6)
- Paragraphs with various formatting
- Ordered and unordered lists
- Nested lists
- Inline code and code blocks
- Tables
- Blockquotes
- Horizontal rules
- Links
- Mixed formatting

Use this content to test spacing differences between **compact** and **spacious** modes.`;

export default function Page() {
  const [spacing, setSpacing] = React.useState<"compact" | "spacious">("spacious");

  return (
    <Theme>
      <Box p="6">
        <Flex direction="column" gap="6">
          <Flex justify="between" align="center">
            <Heading size="8">Markdown Spacing Test</Heading>
            <Flex gap="2">
              <Button size="2" variant={spacing === "compact" ? "solid" : "soft"} onClick={() => setSpacing("compact")}>
                Compact
              </Button>
              <Button size="2" variant={spacing === "spacious" ? "solid" : "soft"} onClick={() => setSpacing("spacious")}>
                Spacious
              </Button>
            </Flex>
          </Flex>

          <Text size="3" color="gray">
            Compare compact (chat-style) vs spacious (documentation-style) markdown rendering.
          </Text>

          {/* Side by Side Comparison */}
          <Flex gap="4" style={{ minHeight: "0" }}>
            {/* Compact - Chat Style */}
            <Card style={{ flex: 1, minWidth: 0 }}>
              <Flex direction="column" gap="3">
                <Heading size="4">Compact (Chat)</Heading>
                <Box
                  p="4"
                  style={{
                    borderRadius: "var(--radius-3)",
                    maxHeight: "70vh",
                    overflow: "auto",
                  }}
                >
                  <StreamingMarkdown
                    content={markdownContent}
                    id="compact-example"
                    options={{
                      spacing: "compact",
                      codeBlockCollapsible: false,
                      inlineCodeHighContrast: true,
                    }}
                  />
                </Box>
              </Flex>
            </Card>

            {/* Spacious - Docs Style */}
            <Card style={{ flex: 1, minWidth: 0 }}>
              <Flex direction="column" gap="3">
                <Heading size="4">Spacious (Docs)</Heading>
                <Box
                  p="4"
                  style={{
                    borderRadius: "var(--radius-3)",
                    maxHeight: "70vh",
                    overflow: "auto",
                  }}
                >
                  <StreamingMarkdown
                    content={markdownContent}
                    id="spacious-example"
                    options={{
                      spacing: "spacious",
                      codeBlockCollapsible: false,
                      inlineCodeHighContrast: true,
                    }}
                  />
                </Box>
              </Flex>
            </Card>
          </Flex>

          {/* Single View with Toggle */}
          <Card>
            <Flex direction="column" gap="4">
              <Flex justify="between" align="center">
                <Heading size="4">Current: {spacing === "compact" ? "Compact (Chat)" : "Spacious (Docs)"}</Heading>
                <Flex gap="2">
                  <Button size="2" variant={spacing === "compact" ? "solid" : "soft"} onClick={() => setSpacing("compact")}>
                    Compact
                  </Button>
                  <Button size="2" variant={spacing === "spacious" ? "solid" : "soft"} onClick={() => setSpacing("spacious")}>
                    Spacious
                  </Button>
                </Flex>
              </Flex>

              <Box
                p="4"
                style={{
                  borderRadius: "var(--radius-3)",
                  maxHeight: "70vh",
                  overflow: "auto",
                }}
              >
                <StreamingMarkdown
                  content={markdownContent}
                  id="toggle-example"
                  options={{
                    spacing,
                    codeBlockCollapsible: false,
                    inlineCodeHighContrast: true,
                  }}
                />
              </Box>
            </Flex>
          </Card>

          {/* Spacing Details */}
          <Card>
            <Flex direction="column" gap="3">
              <Heading size="4">Spacing Configuration</Heading>
              <Flex direction="column" gap="2">
                <Text size="2" weight="medium">
                  Compact (spacing="compact")
                </Text>
                <Text size="2" color="gray">
                  • Tighter heading margins (0.375rem - 0.75rem top)
                  <br />
                  • Reduced list spacing (0.25rem margins)
                  <br />
                  • Less whitespace between elements
                  <br />• Ideal for: Chat interfaces, AI responses, conversational UI
                </Text>
              </Flex>
              <Flex direction="column" gap="2">
                <Text size="2" weight="medium">
                  Spacious (spacing="spacious") [Default]
                </Text>
                <Text size="2" color="gray">
                  • More breathing room (0.5rem - 1rem top margins)
                  <br />
                  • Standard list spacing (0.5rem margins)
                  <br />
                  • Clear visual hierarchy
                  <br />• Ideal for: Documentation, articles, marketing content
                </Text>
              </Flex>
            </Flex>
          </Card>
        </Flex>
      </Box>
    </Theme>
  );
}
