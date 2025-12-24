/**
 * Utilities for handling streaming markdown content.
 * Completes unterminated markdown blocks to enable proper parsing during streaming.
 */

/**
 * Checks if there's an unpaired double marker (** or __) with content after the last opener.
 * Returns true only if there's text after the unclosed marker (not just the marker itself).
 */
function hasUnpairedDoubleMarkerWithContent(content: string, marker: string): boolean {
  const escaped = marker === "**" ? "\\*\\*" : "__";
  const regex = new RegExp(escaped, "g");
  const matches = content.match(regex) || [];

  if (matches.length % 2 === 0) {
    return false; // All paired
  }

  // Find the last occurrence of the marker - there should be content after it
  const lastIndex = content.lastIndexOf(marker);
  if (lastIndex === -1) {
    return false;
  }

  // Check if there's actual content after the marker
  const afterMarker = content.slice(lastIndex + marker.length);
  return afterMarker.length > 0;
}

/**
 * Checks if there's an unpaired strikethrough with content after the last opener.
 */
function hasUnpairedStrikethroughWithContent(content: string): boolean {
  const matches = content.match(/~~/g) || [];

  if (matches.length % 2 === 0) {
    return false; // All paired
  }

  // Find the last occurrence - there should be content after it
  const lastIndex = content.lastIndexOf("~~");
  if (lastIndex === -1) {
    return false;
  }

  const afterMarker = content.slice(lastIndex + 2);
  return afterMarker.length > 0;
}

/**
 * Checks if a marker at position i is a list marker (at start of line followed by space).
 */
function isListMarker(content: string, i: number, marker: string): boolean {
  // Only * can be a list marker (not _)
  if (marker !== "*") {
    return false;
  }

  // Check if at start of line (or start of content)
  const isStartOfLine = i === 0 || content[i - 1] === "\n";
  // Check if followed by space
  const followedBySpace = i < content.length - 1 && content[i + 1] === " ";

  return isStartOfLine && followedBySpace;
}

/**
 * Checks if there's an unpaired single italic marker (* or _) that needs closing.
 * Must distinguish from bold markers (** or __) and list markers (* ).
 *
 * Returns true if:
 * - There's an odd number of single markers (not part of double markers or list markers)
 * - Either there's content after the last marker, OR the content ends with the marker
 */
function hasUnpairedItalicWithContent(content: string, marker: string): boolean {
  // Count single markers (not part of double markers or list markers)
  let singleCount = 0;
  let lastSingleIndex = -1;

  for (let i = 0; i < content.length; i++) {
    if (content[i] === marker) {
      // Check if it's a list marker
      if (isListMarker(content, i, marker)) {
        continue;
      }

      // Check if it's part of a double marker
      const prevIsMarker = i > 0 && content[i - 1] === marker;
      const nextIsMarker = i < content.length - 1 && content[i + 1] === marker;

      if (prevIsMarker || nextIsMarker) {
        // Part of ** or __, skip
        if (nextIsMarker) {
          i++; // Skip the next one too
        }
        continue;
      }

      singleCount++;
      lastSingleIndex = i;
    }
  }

  if (singleCount % 2 === 0) {
    return false; // All paired
  }

  if (lastSingleIndex === -1) {
    return false;
  }

  // If content ends with the marker, it's an opener that needs closing
  // (e.g., "*text* more *" - the last * is a new opener)
  // BUT only if there's content before it (not just a lone marker)
  if (lastSingleIndex === content.length - 1) {
    // Must have content before the marker for it to be a meaningful opener
    return lastSingleIndex > 0;
  }

  // Otherwise, check if there's content after the last unpaired marker
  const afterMarker = content.slice(lastSingleIndex + 1);
  return afterMarker.length > 0;
}

/**
 * Checks if content has an unclosed code block.
 * Returns true if the last ``` opens a block that isn't closed.
 */
function hasUnclosedCodeBlock(content: string): boolean {
  // Find all ``` occurrences
  const fenceRegex = /```/g;
  const matches: number[] = [];
  let match;

  while ((match = fenceRegex.exec(content)) !== null) {
    matches.push(match.index);
  }

  // Odd number of fences means unclosed
  return matches.length % 2 === 1;
}

/**
 * Completes unterminated markdown syntax at the end of content.
 * This allows streaming markdown to be parsed correctly even when syntax is incomplete.
 *
 * Handles:
 * - Headings (# Heading)
 * - Inline code (`code)
 * - Bold (**text or __text)
 * - Italic (*text or _text)
 * - Links ([text](url or [text]()
 * - Code blocks (```language\ncode)
 * - Lists (- item or * item or 1. item)
 * - Blockquotes (> text)
 * - Strikethrough (~~text)
 */
export function completeUnterminatedMarkdown(content: string): string {
  if (!content.trim()) {
    return content;
  }

  // Work backwards from the end to find the last incomplete markdown pattern
  const trimmed = content.trimEnd();
  const trailingWhitespace = content.slice(trimmed.length);
  let result = trimmed;

  // Check for incomplete code fence without newline yet (e.g., "```python" with no \n)
  // This must come before the code block check
  const incompleteFenceMatch = result.match(/```[\w-]*$/);
  if (incompleteFenceMatch && !result.includes("```\n") && !result.match(/```[\w-]+\n/)) {
    // Code fence just started, hasn't gotten content yet - add newline and closing
    result += "\n```";
    return result + trailingWhitespace;
  }

  // Check for incomplete code blocks using fence counting
  if (hasUnclosedCodeBlock(result)) {
    result += "\n```";
    return result + trailingWhitespace;
  }

  // Check for incomplete inline code (backticks)
  // Count backticks that are NOT part of code fences
  // First, remove all code fence markers to count only inline backticks
  const withoutFences = result.replace(/```[\w-]*/g, "");
  const backtickCount = (withoutFences.match(/`/g) || []).length;
  if (backtickCount % 2 === 1) {
    result += "`";
    return result + trailingWhitespace;
  }

  // Check for incomplete links [text](url
  const linkMatch = result.match(/\[([^\]]*)\]\(([^)]*)$/);
  if (linkMatch) {
    // Incomplete link - close the URL part
    result += ")";
    return result + trailingWhitespace;
  }

  // Check for incomplete bold (**text or __text)
  // Only complete if there's actual content after the marker
  if (hasUnpairedDoubleMarkerWithContent(result, "**")) {
    result += "**";
    return result + trailingWhitespace;
  }

  if (hasUnpairedDoubleMarkerWithContent(result, "__")) {
    result += "__";
    return result + trailingWhitespace;
  }

  // Check for incomplete strikethrough (~~text)
  if (hasUnpairedStrikethroughWithContent(result)) {
    result += "~~";
    return result + trailingWhitespace;
  }

  // Check structural elements BEFORE italic to avoid false positives
  // (e.g., "* item" is a list, not italic)
  const lines = result.split("\n");
  const lastLine = lines[lines.length - 1];

  // Check for incomplete headings (# Heading without newline)
  // Look for # at the start of the last line
  if (lastLine.match(/^#{1,6}\s+.+$/)) {
    // Heading without trailing newline - add one for proper parsing
    result += "\n";
    return result + trailingWhitespace;
  }

  // Check for incomplete list items (- item, * item, 1. item)
  // Look for list markers at the start of the last line
  if (lastLine.match(/^(\s*)([-*+]|\d+\.)\s+.+$/)) {
    // List item without trailing newline - add one for proper parsing
    result += "\n";
    return result + trailingWhitespace;
  }

  // Check for incomplete blockquotes (> text)
  if (lastLine.match(/^>\s+.+$/)) {
    // Blockquote without trailing newline - add one for proper parsing
    result += "\n";
    return result + trailingWhitespace;
  }

  // Check for incomplete italic (*text or _text) AFTER structural elements
  // This prevents "* item" from being treated as italic
  if (hasUnpairedItalicWithContent(result, "*")) {
    result += "*";
    return result + trailingWhitespace;
  }

  if (hasUnpairedItalicWithContent(result, "_")) {
    result += "_";
    return result + trailingWhitespace;
  }

  return result + trailingWhitespace;
}

/**
 * Parses markdown content into blocks for efficient rendering.
 * Each block is a separate markdown token that can be memoized independently.
 *
 * @param content - The markdown content to parse
 * @param parser - Optional parser function (defaults to using marked.lexer)
 * @returns Array of markdown block strings
 */
export function parseMarkdownIntoBlocks(
  content: string,
  parser?: (content: string) => Array<{ raw?: string }>
): string[] {
  if (!content.trim()) {
    return [];
  }

  // Complete unterminated markdown blocks for streaming support
  const completedContent = completeUnterminatedMarkdown(content);

  // If no parser provided, return the content as a single block
  // This allows usage without marked dependency
  if (!parser) {
    return [completedContent];
  }

  const tokens = parser(completedContent);
  return tokens
    .map((token) => {
      if ("raw" in token && typeof token.raw === "string") {
        return token.raw;
      }
      return "";
    })
    .filter((raw) => Boolean(raw.trim()));
}

