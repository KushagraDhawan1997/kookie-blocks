import { describe, it, expect } from "vitest";
import { completeUnterminatedMarkdown } from "../src/components/markdown/utils/markdown-streaming";

describe("completeUnterminatedMarkdown", () => {
  describe("empty and whitespace handling", () => {
    it("returns empty string unchanged", () => {
      expect(completeUnterminatedMarkdown("")).toBe("");
    });

    it("returns whitespace-only string unchanged", () => {
      expect(completeUnterminatedMarkdown("   ")).toBe("   ");
      expect(completeUnterminatedMarkdown("\n\n")).toBe("\n\n");
      expect(completeUnterminatedMarkdown("\t\t")).toBe("\t\t");
    });

    it("preserves trailing whitespace", () => {
      expect(completeUnterminatedMarkdown("text   ")).toBe("text   ");
      // When completing italic, trailing whitespace is preserved after the closing marker
      expect(completeUnterminatedMarkdown("*italic*   ")).toBe("*italic*   ");
    });
  });

  describe("code fence handling", () => {
    it("completes code fence without newline", () => {
      expect(completeUnterminatedMarkdown("```python")).toBe("```python\n```");
      expect(completeUnterminatedMarkdown("```")).toBe("```\n```");
      expect(completeUnterminatedMarkdown("```typescript")).toBe("```typescript\n```");
      expect(completeUnterminatedMarkdown("```my-lang")).toBe("```my-lang\n```");
    });

    it("completes code block with content", () => {
      expect(completeUnterminatedMarkdown("```python\nprint('hello')")).toBe("```python\nprint('hello')\n```");
      expect(completeUnterminatedMarkdown("```\ncode here")).toBe("```\ncode here\n```");
    });

    it("does not modify complete code blocks", () => {
      const complete = "```python\nprint('hello')\n```";
      expect(completeUnterminatedMarkdown(complete)).toBe(complete);
    });

    it("handles code block with multiple lines", () => {
      const input = "```js\nconst x = 1;\nconst y = 2;";
      expect(completeUnterminatedMarkdown(input)).toBe(input + "\n```");
    });
  });

  describe("inline code handling", () => {
    it("completes incomplete inline code", () => {
      expect(completeUnterminatedMarkdown("`code")).toBe("`code`");
      expect(completeUnterminatedMarkdown("some `inline")).toBe("some `inline`");
    });

    it("does not modify complete inline code", () => {
      expect(completeUnterminatedMarkdown("`code`")).toBe("`code`");
      expect(completeUnterminatedMarkdown("text `code` more")).toBe("text `code` more");
    });

    it("handles multiple inline code sections", () => {
      // Two complete inline codes
      expect(completeUnterminatedMarkdown("`a` and `b`")).toBe("`a` and `b`");
      // Two complete + one incomplete
      expect(completeUnterminatedMarkdown("`a` and `b` and `c")).toBe("`a` and `b` and `c`");
    });
  });

  describe("link handling", () => {
    it("completes incomplete link URL", () => {
      expect(completeUnterminatedMarkdown("[text](url")).toBe("[text](url)");
      expect(completeUnterminatedMarkdown("[link](https://example.com")).toBe("[link](https://example.com)");
    });

    it("completes link with empty URL", () => {
      expect(completeUnterminatedMarkdown("[text](")).toBe("[text]()");
    });

    it("does not modify complete links", () => {
      expect(completeUnterminatedMarkdown("[text](url)")).toBe("[text](url)");
      expect(completeUnterminatedMarkdown("[link](https://example.com)")).toBe("[link](https://example.com)");
    });

    it("handles image links", () => {
      expect(completeUnterminatedMarkdown("![alt](https://img.com/x")).toBe("![alt](https://img.com/x)");
    });
  });

  describe("bold handling", () => {
    it("completes incomplete bold with **", () => {
      expect(completeUnterminatedMarkdown("**bold")).toBe("**bold**");
      expect(completeUnterminatedMarkdown("some **bold text")).toBe("some **bold text**");
    });

    it("completes incomplete bold with __", () => {
      expect(completeUnterminatedMarkdown("__bold")).toBe("__bold__");
      expect(completeUnterminatedMarkdown("some __bold text")).toBe("some __bold text__");
    });

    it("does not modify complete bold", () => {
      expect(completeUnterminatedMarkdown("**bold**")).toBe("**bold**");
      expect(completeUnterminatedMarkdown("__bold__")).toBe("__bold__");
    });

    it("handles bold with special characters inside", () => {
      expect(completeUnterminatedMarkdown("**text with * asterisk")).toBe("**text with * asterisk**");
      expect(completeUnterminatedMarkdown("**text with _ underscore")).toBe("**text with _ underscore**");
    });

    it("handles multiple bold sections", () => {
      expect(completeUnterminatedMarkdown("**a** and **b")).toBe("**a** and **b**");
    });
  });

  describe("italic handling", () => {
    it("completes incomplete italic with *", () => {
      expect(completeUnterminatedMarkdown("*italic")).toBe("*italic*");
      expect(completeUnterminatedMarkdown("some *italic text")).toBe("some *italic text*");
    });

    it("completes incomplete italic with _", () => {
      expect(completeUnterminatedMarkdown("_italic")).toBe("_italic_");
      expect(completeUnterminatedMarkdown("some _italic text")).toBe("some _italic text_");
    });

    it("does not modify complete italic", () => {
      expect(completeUnterminatedMarkdown("*italic*")).toBe("*italic*");
      expect(completeUnterminatedMarkdown("_italic_")).toBe("_italic_");
    });

    it("completes new italic after closed italic", () => {
      expect(completeUnterminatedMarkdown("*text* more *")).toBe("*text* more **");
      expect(completeUnterminatedMarkdown("_text_ more _")).toBe("_text_ more __");
    });

    it("handles italic within complete bold", () => {
      // Bold is complete, content inside might have italic
      expect(completeUnterminatedMarkdown("**bold *italic")).toBe("**bold *italic**");
    });
  });

  describe("strikethrough handling", () => {
    it("completes incomplete strikethrough", () => {
      expect(completeUnterminatedMarkdown("~~strike")).toBe("~~strike~~");
      expect(completeUnterminatedMarkdown("some ~~strikethrough text")).toBe("some ~~strikethrough text~~");
    });

    it("does not modify complete strikethrough", () => {
      expect(completeUnterminatedMarkdown("~~strike~~")).toBe("~~strike~~");
    });

    it("handles strikethrough with special characters", () => {
      expect(completeUnterminatedMarkdown("~~text with ~ tilde")).toBe("~~text with ~ tilde~~");
    });

    it("handles multiple strikethrough sections", () => {
      expect(completeUnterminatedMarkdown("~~a~~ and ~~b")).toBe("~~a~~ and ~~b~~");
    });
  });

  describe("heading handling", () => {
    it("adds newline after incomplete heading", () => {
      expect(completeUnterminatedMarkdown("# Heading")).toBe("# Heading\n");
      expect(completeUnterminatedMarkdown("## Heading 2")).toBe("## Heading 2\n");
      expect(completeUnterminatedMarkdown("###### Heading 6")).toBe("###### Heading 6\n");
    });

    it("handles heading with markdown content", () => {
      expect(completeUnterminatedMarkdown("# Heading with **bold**")).toBe("# Heading with **bold**\n");
    });

    it("handles heading after other content", () => {
      expect(completeUnterminatedMarkdown("Paragraph\n\n# Heading")).toBe("Paragraph\n\n# Heading\n");
    });
  });

  describe("list handling", () => {
    it("adds newline after incomplete list item with -", () => {
      expect(completeUnterminatedMarkdown("- item")).toBe("- item\n");
      expect(completeUnterminatedMarkdown("- first\n- second")).toBe("- first\n- second\n");
    });

    it("adds newline after incomplete list item with *", () => {
      expect(completeUnterminatedMarkdown("* item")).toBe("* item\n");
    });

    it("adds newline after incomplete list item with +", () => {
      expect(completeUnterminatedMarkdown("+ item")).toBe("+ item\n");
    });

    it("adds newline after incomplete ordered list item", () => {
      expect(completeUnterminatedMarkdown("1. item")).toBe("1. item\n");
      expect(completeUnterminatedMarkdown("10. item")).toBe("10. item\n");
    });

    it("handles indented list items", () => {
      expect(completeUnterminatedMarkdown("  - nested item")).toBe("  - nested item\n");
      expect(completeUnterminatedMarkdown("    - deeply nested")).toBe("    - deeply nested\n");
    });
  });

  describe("blockquote handling", () => {
    it("adds newline after incomplete blockquote", () => {
      expect(completeUnterminatedMarkdown("> quote")).toBe("> quote\n");
      expect(completeUnterminatedMarkdown("> first line\n> second line")).toBe("> first line\n> second line\n");
    });
  });

  describe("priority order", () => {
    it("prioritizes code fence over inline code", () => {
      // A code fence should be completed as fence, not inline
      expect(completeUnterminatedMarkdown("```")).toBe("```\n```");
    });

    it("prioritizes code blocks over bold/italic", () => {
      // Inside a code block, ** shouldn't trigger bold completion
      const input = "```\n**not bold";
      expect(completeUnterminatedMarkdown(input)).toBe(input + "\n```");
    });

    it("prioritizes bold over italic", () => {
      // ** should be completed as bold, not two italics
      expect(completeUnterminatedMarkdown("**text")).toBe("**text**");
    });
  });

  describe("already complete content", () => {
    it("does not modify regular text", () => {
      expect(completeUnterminatedMarkdown("Hello world")).toBe("Hello world");
    });

    it("does not modify complete markdown", () => {
      // Note: Content must end with newline after list/blockquote/heading to be "complete"
      // Otherwise those patterns will add a trailing newline
      const complete = `# Heading

This is a paragraph with **bold** and *italic*.

- List item 1
- List item 2

\`inline code\` and:

\`\`\`js
code block
\`\`\`

> Blockquote

[Link](https://example.com) and some trailing text.`;
      expect(completeUnterminatedMarkdown(complete)).toBe(complete);
    });
  });

  describe("edge cases", () => {
    it("handles just markers without content", () => {
      // Just ** without text after shouldn't complete (nothing to close)
      expect(completeUnterminatedMarkdown("text **")).toBe("text **");
      expect(completeUnterminatedMarkdown("text ~~")).toBe("text ~~");
    });

    it("handles marker at very start without content", () => {
      // Single marker without content after it - nothing to close
      expect(completeUnterminatedMarkdown("*")).toBe("*");
      expect(completeUnterminatedMarkdown("**")).toBe("**");
      expect(completeUnterminatedMarkdown("~~")).toBe("~~");
    });

    it("handles marker at very start with content", () => {
      expect(completeUnterminatedMarkdown("*text")).toBe("*text*");
      expect(completeUnterminatedMarkdown("**text")).toBe("**text**");
      expect(completeUnterminatedMarkdown("~~text")).toBe("~~text~~");
    });

    it("handles mixed incomplete patterns - bold wins over italic", () => {
      // Bold detected first (before italic) - bold gets closed
      expect(completeUnterminatedMarkdown("**bold *italic")).toBe("**bold *italic**");
    });
  });
});
