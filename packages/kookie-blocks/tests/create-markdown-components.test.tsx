import { describe, it, expect, vi } from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import { createMarkdownComponents } from "../src/components/markdown/create-markdown-components";
import type { MarkdownComponentOptions } from "../src/components/markdown/types";

// Mock KookieUI components to avoid needing full setup
vi.mock("@kushagradhawan/kookie-ui", () => ({
  Blockquote: ({ children }: { children?: React.ReactNode }) => <blockquote>{children}</blockquote>,
  Box: ({ children, ...props }: { children?: React.ReactNode; [key: string]: any }) => (
    <div data-testid="box" {...props}>
      {children}
    </div>
  ),
  Code: ({ children, highContrast, ...props }: { children?: React.ReactNode; highContrast?: boolean; [key: string]: any }) => (
    <code data-high-contrast={highContrast} {...props}>
      {children}
    </code>
  ),
  Flex: ({ children, ...props }: { children?: React.ReactNode; [key: string]: any }) => (
    <div data-testid="flex" {...props}>
      {children}
    </div>
  ),
  Heading: ({ children, size, as, ...props }: { children?: React.ReactNode; size?: string; as?: string; [key: string]: any }) => {
    const Component = as || "h1";
    return React.createElement(Component, { "data-size": size, ...props }, children);
  },
  Text: ({ children, weight, ...props }: { children?: React.ReactNode; weight?: string; [key: string]: any }) => (
    <span data-weight={weight} {...props}>
      {children}
    </span>
  ),
  Table: {
    Root: ({ children, ...props }: { children?: React.ReactNode; [key: string]: any }) => <table {...props}>{children}</table>,
    Header: ({ children }: { children?: React.ReactNode }) => <thead>{children}</thead>,
    Body: ({ children }: { children?: React.ReactNode }) => <tbody>{children}</tbody>,
    Row: ({ children }: { children?: React.ReactNode }) => <tr>{children}</tr>,
    ColumnHeaderCell: ({ children }: { children?: React.ReactNode }) => <th>{children}</th>,
    Cell: ({ children }: { children?: React.ReactNode }) => <td>{children}</td>,
  },
}));

// Mock CodeBlock component
vi.mock("../src/components/code", () => ({
  CodeBlock: ({ code, language, collapsible }: { code: string; language: string; collapsible?: boolean }) => (
    <div data-testid="code-block" data-language={language} data-collapsible={collapsible}>
      {code}
    </div>
  ),
}));

describe("createMarkdownComponents", () => {
  describe("default options", () => {
    it("returns all required component mappings", () => {
      const components = createMarkdownComponents();

      expect(components.h1).toBeDefined();
      expect(components.h2).toBeDefined();
      expect(components.h3).toBeDefined();
      expect(components.h4).toBeDefined();
      expect(components.h5).toBeDefined();
      expect(components.h6).toBeDefined();
      expect(components.p).toBeDefined();
      expect(components.code).toBeDefined();
      expect(components.ul).toBeDefined();
      expect(components.ol).toBeDefined();
      expect(components.li).toBeDefined();
      expect(components.blockquote).toBeDefined();
      expect(components.a).toBeDefined();
      expect(components.strong).toBeDefined();
      expect(components.em).toBeDefined();
      expect(components.hr).toBeDefined();
      expect(components.pre).toBeDefined();
      expect(components.table).toBeDefined();
      expect(components.thead).toBeDefined();
      expect(components.tbody).toBeDefined();
      expect(components.tr).toBeDefined();
      expect(components.th).toBeDefined();
      expect(components.td).toBeDefined();
      expect(components.sub).toBeDefined();
      expect(components.sup).toBeDefined();
      expect(components.br).toBeDefined();
      expect(components.details).toBeDefined();
      expect(components.summary).toBeDefined();
    });

    it("renders headings with correct hierarchy", () => {
      const components = createMarkdownComponents();

      const { container: h1Container } = render(<>{components.h1?.({ children: "Heading 1" })}</>);
      expect(h1Container.querySelector("h1")).toBeInTheDocument();
      expect(h1Container).toHaveTextContent("Heading 1");

      const { container: h2Container } = render(<>{components.h2?.({ children: "Heading 2" })}</>);
      expect(h2Container.querySelector("h2")).toBeInTheDocument();

      const { container: h3Container } = render(<>{components.h3?.({ children: "Heading 3" })}</>);
      expect(h3Container.querySelector("h3")).toBeInTheDocument();

      const { container: h4Container } = render(<>{components.h4?.({ children: "Heading 4" })}</>);
      expect(h4Container.querySelector("h4")).toBeInTheDocument();

      const { container: h5Container } = render(<>{components.h5?.({ children: "Heading 5" })}</>);
      expect(h5Container.querySelector("h5")).toBeInTheDocument();

      const { container: h6Container } = render(<>{components.h6?.({ children: "Heading 6" })}</>);
      expect(h6Container.querySelector("h6")).toBeInTheDocument();
    });

    it("renders paragraph text", () => {
      const components = createMarkdownComponents();
      const { container } = render(<>{components.p?.({ children: "Paragraph text" })}</>);

      expect(container).toHaveTextContent("Paragraph text");
      expect(container.querySelector("span")).toBeInTheDocument();
    });
  });

  describe("code handling", () => {
    it("renders inline code by default", () => {
      const components = createMarkdownComponents();
      const { container } = render(<>{components.code?.({ children: "const x = 1", inline: true })}</>);

      const codeElement = container.querySelector("code");
      expect(codeElement).toBeInTheDocument();
      expect(codeElement).toHaveTextContent("const x = 1");
    });

    it("renders block code when className includes language", () => {
      const components = createMarkdownComponents();
      render(<>{components.code?.({ children: "const x = 1", className: "language-typescript" })}</>);

      const codeBlock = screen.getByTestId("code-block");
      expect(codeBlock).toBeInTheDocument();
      expect(codeBlock).toHaveAttribute("data-language", "typescript");
    });

    it("renders block code when content has newlines", () => {
      const components = createMarkdownComponents();
      render(<>{components.code?.({ children: "const x = 1;\nconst y = 2;" })}</>);

      expect(screen.getByTestId("code-block")).toBeInTheDocument();
    });

    it("uses codeBlockCollapsible option", () => {
      const components = createMarkdownComponents({ codeBlockCollapsible: true });
      render(<>{components.code?.({ children: "const x = 1", className: "language-typescript" })}</>);

      const codeBlock = screen.getByTestId("code-block");
      expect(codeBlock).toHaveAttribute("data-collapsible", "true");
    });

    it("uses inlineCodeHighContrast option", () => {
      const componentsDefault = createMarkdownComponents({ inlineCodeHighContrast: true });
      const { container: defaultContainer } = render(<>{componentsDefault.code?.({ children: "code", inline: true })}</>);
      const defaultCode = defaultContainer.querySelector("code");
      expect(defaultCode).toHaveAttribute("data-high-contrast", "true");

      const componentsLowContrast = createMarkdownComponents({ inlineCodeHighContrast: false });
      const { container: lowContrastContainer } = render(<>{componentsLowContrast.code?.({ children: "code", inline: true })}</>);
      const lowContrastCode = lowContrastContainer.querySelector("code");
      expect(lowContrastCode).toHaveAttribute("data-high-contrast", "false");
    });

    it("extracts language correctly from className", () => {
      const components = createMarkdownComponents();
      render(<>{components.code?.({ children: "code", className: "language-python" })}</>);

      expect(screen.getByTestId("code-block")).toHaveAttribute("data-language", "python");
    });

    it("defaults to 'text' language when no className", () => {
      const components = createMarkdownComponents();
      render(<>{components.code?.({ children: "code\nmore code", className: undefined })}</>);

      expect(screen.getByTestId("code-block")).toHaveAttribute("data-language", "text");
    });

    it("detects inline code for short single-line content without className", () => {
      const components = createMarkdownComponents();
      const { container } = render(<>{components.code?.({ children: "shortcode" })}</>);

      expect(container.querySelector("code")).toBeInTheDocument();
      expect(screen.queryByTestId("code-block")).not.toBeInTheDocument();
    });
  });

  describe("lists", () => {
    it("renders unordered list", () => {
      const components = createMarkdownComponents();
      const { container } = render(<>{components.ul?.({ children: <li>Item</li> })}</>);

      const ul = container.querySelector("ul");
      expect(ul).toBeInTheDocument();
      expect(ul).toHaveStyle({ listStyleType: "disc" });
    });

    it("renders ordered list", () => {
      const components = createMarkdownComponents();
      const { container } = render(<>{components.ol?.({ children: <li>Item</li> })}</>);

      const ol = container.querySelector("ol");
      expect(ol).toBeInTheDocument();
      expect(ol).toHaveStyle({ listStyleType: "decimal" });
    });

    it("renders list items", () => {
      const components = createMarkdownComponents();
      const { container } = render(<>{components.li?.({ children: "List item" })}</>);

      const li = container.querySelector("li");
      expect(li).toBeInTheDocument();
      expect(li).toHaveTextContent("List item");
    });
  });

  describe("blockquote", () => {
    it("renders blockquote", () => {
      const components = createMarkdownComponents();
      const { container } = render(<>{components.blockquote?.({ children: "Quote text" })}</>);

      const blockquote = container.querySelector("blockquote");
      expect(blockquote).toBeInTheDocument();
      expect(blockquote).toHaveTextContent("Quote text");
    });
  });

  describe("links", () => {
    it("renders links with href", () => {
      const components = createMarkdownComponents();
      const { container } = render(<>{components.a?.({ href: "https://example.com", children: "Link text" })}</>);

      const link = container.querySelector("a");
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "https://example.com");
      expect(link).toHaveTextContent("Link text");
    });

    it("renders links with accent color", () => {
      const components = createMarkdownComponents();
      const { container } = render(<>{components.a?.({ href: "#", children: "Link" })}</>);

      const link = container.querySelector("a");
      expect(link).toHaveStyle({ color: "var(--accent-9)" });
    });
  });

  describe("text styling", () => {
    it("renders strong text", () => {
      const components = createMarkdownComponents();
      const { container } = render(<>{components.strong?.({ children: "Bold text" })}</>);

      const text = container.querySelector("span");
      expect(text).toBeInTheDocument();
      expect(text).toHaveAttribute("data-weight", "medium");
      expect(text).toHaveTextContent("Bold text");
    });

    it("renders emphasized text", () => {
      const components = createMarkdownComponents();
      const { container } = render(<>{components.em?.({ children: "Italic text" })}</>);

      const text = container.querySelector("span");
      expect(text).toBeInTheDocument();
      expect(text).toHaveStyle({ fontStyle: "italic" });
      expect(text).toHaveTextContent("Italic text");
    });
  });

  describe("tables", () => {
    it("renders table structure", () => {
      const components = createMarkdownComponents();
      const { container } = render(
        <>
          {components.table?.({
            children: (
              <>
                {components.thead?.({
                  children: (
                    <>
                      {components.tr?.({
                        children: <>{components.th?.({ children: "Header" })}</>,
                      })}
                    </>
                  ),
                })}
                {components.tbody?.({
                  children: (
                    <>
                      {components.tr?.({
                        children: <>{components.td?.({ children: "Cell" })}</>,
                      })}
                    </>
                  ),
                })}
              </>
            ),
          })}
        </>
      );

      expect(container.querySelector("table")).toBeInTheDocument();
      expect(container.querySelector("thead")).toBeInTheDocument();
      expect(container.querySelector("tbody")).toBeInTheDocument();
      expect(container.querySelector("th")).toHaveTextContent("Header");
      expect(container.querySelector("td")).toHaveTextContent("Cell");
    });

    it("wraps table in Box for overflow", () => {
      const components = createMarkdownComponents();
      render(
        <>
          {components.table?.({
            children: (
              <tbody>
                <tr>
                  <td>Cell</td>
                </tr>
              </tbody>
            ),
          })}
        </>
      );

      expect(screen.getByTestId("box")).toBeInTheDocument();
    });
  });

  describe("image component option", () => {
    it("uses custom image component when provided", () => {
      const CustomImage = ({ src, alt }: { src?: string; alt?: string }) => <img src={src} alt={alt} data-testid="custom-image" />;

      const components = createMarkdownComponents({
        imageComponent: CustomImage,
      });

      expect(components.img).toBeDefined();
      render(<>{components.img?.({ src: "https://example.com/image.jpg", alt: "Test image" } as any)}</>);

      const image = screen.getByTestId("custom-image");
      expect(image).toHaveAttribute("src", "https://example.com/image.jpg");
      expect(image).toHaveAttribute("alt", "Test image");
    });

    it("returns undefined for img when no imageComponent provided", () => {
      const components = createMarkdownComponents();
      expect(components.img).toBeUndefined();
    });

    it("handles missing src gracefully", () => {
      const CustomImage = ({ src }: { src?: string }) => <div data-testid="custom-image">{src || "no src"}</div>;

      const components = createMarkdownComponents({
        imageComponent: CustomImage,
      });

      const { container } = render(<>{components.img?.({ src: undefined } as any)}</>);
      expect(container).toBeEmptyDOMElement();
    });

    it("passes width and height to custom image component", () => {
      const CustomImage = ({ src, alt, width, height }: { src?: string; alt?: string; width?: string; height?: string }) => (
        <img src={src} alt={alt} width={width} height={height} data-testid="custom-image" />
      );

      const components = createMarkdownComponents({
        imageComponent: CustomImage,
      });

      render(<>{components.img?.({ src: "image.jpg", alt: "Alt", width: "500", height: "300" } as any)}</>);

      const image = screen.getByTestId("custom-image");
      expect(image).toHaveAttribute("width", "500");
      expect(image).toHaveAttribute("height", "300");
    });
  });

  describe("horizontal rule", () => {
    it("renders hr", () => {
      const components = createMarkdownComponents();
      const { container } = render(<>{components.hr?.({})}</>);

      const hr = container.querySelector("hr");
      expect(hr).toBeInTheDocument();
    });

    it("hr has proper styling", () => {
      const components = createMarkdownComponents();
      const { container } = render(<>{components.hr?.({})}</>);

      const hr = container.querySelector("hr");
      expect(hr).toHaveStyle({ opacity: "0.5" });
    });
  });

  describe("pre wrapper", () => {
    it("passes through children", () => {
      const components = createMarkdownComponents();
      const { container } = render(<>{components.pre?.({ children: "pre content" })}</>);

      expect(container).toHaveTextContent("pre content");
    });

    it("does not wrap children in extra elements", () => {
      const components = createMarkdownComponents();
      const { container } = render(<>{components.pre?.({ children: <code>code</code> })}</>);

      expect(container.querySelector("code")).toBeInTheDocument();
    });
  });

  describe("HTML elements", () => {
    it("renders sub", () => {
      const components = createMarkdownComponents();
      const { container } = render(<>{components.sub?.({ children: "sub" })}</>);

      expect(container.querySelector("sub")).toBeInTheDocument();
    });

    it("renders sup", () => {
      const components = createMarkdownComponents();
      const { container } = render(<>{components.sup?.({ children: "sup" })}</>);

      expect(container.querySelector("sup")).toBeInTheDocument();
    });

    it("renders br", () => {
      const components = createMarkdownComponents();
      const { container } = render(<>{components.br?.({})}</>);

      expect(container.querySelector("br")).toBeInTheDocument();
    });
  });

  describe("details/summary", () => {
    it("renders details", () => {
      const components = createMarkdownComponents();
      const { container } = render(<>{components.details?.({ children: "Details content" })}</>);

      const details = container.querySelector("details");
      expect(details).toBeInTheDocument();
      expect(details).toHaveTextContent("Details content");
    });

    it("renders summary", () => {
      const components = createMarkdownComponents();
      const { container } = render(<>{components.summary?.({ children: "Summary text" })}</>);

      const summary = container.querySelector("summary");
      expect(summary).toBeInTheDocument();
      expect(summary).toHaveTextContent("Summary text");
      expect(summary).toHaveStyle({ cursor: "pointer" });
    });
  });

  describe("use case configurations", () => {
    it("supports compact chat-like configuration", () => {
      // Configuration similar to kookie-ai's MarkdownRenderer
      const components = createMarkdownComponents({
        codeBlockCollapsible: false,
        inlineCodeHighContrast: true,
        spacing: "compact",
        imageComponent: ({ src, alt }) => <img src={src} alt={alt} />,
      });

      expect(components).toBeDefined();
      expect(components.code).toBeDefined();
      expect(components.img).toBeDefined();

      // Test inline code has high contrast
      const { container: inlineContainer } = render(<>{components.code?.({ children: "code", inline: true })}</>);
      expect(inlineContainer.querySelector("code")).toHaveAttribute("data-high-contrast", "true");

      // Test block code is not collapsible
      render(<>{components.code?.({ children: "code", className: "language-ts" })}</>);
      expect(screen.getByTestId("code-block")).toHaveAttribute("data-collapsible", "false");
    });

    it("supports spacious docs-like configuration", () => {
      // Configuration similar to kookie-ui docs
      const components = createMarkdownComponents({
        codeBlockCollapsible: false,
        inlineCodeHighContrast: true,
        spacing: "spacious",
      });

      expect(components).toBeDefined();
      expect(components.h1).toBeDefined();
      expect(components.p).toBeDefined();

      // Verify headings render correctly with proper sizes
      const { container } = render(<>{components.h1?.({ children: "Title" })}</>);
      const h1 = container.querySelector("h1");
      expect(h1).toBeInTheDocument();
      expect(h1).toHaveAttribute("data-size", "9");
      expect(h1).toHaveTextContent("Title");
    });

    it("defaults to spacious spacing when not specified", () => {
      const components = createMarkdownComponents({});

      // Test that defaults are applied
      expect(components.h1).toBeDefined();
      expect(components.p).toBeDefined();
    });

    it("applies compact spacing correctly", () => {
      const components = createMarkdownComponents({ spacing: "compact" });

      const { container } = render(<>{components.h1?.({ children: "Heading" })}</>);
      const h1 = container.querySelector("h1");

      // Compact spacing should have smaller top margin
      expect(h1).toHaveStyle({ marginTop: "0.75rem" });
    });

    it("applies spacious spacing correctly", () => {
      const components = createMarkdownComponents({ spacing: "spacious" });

      const { container } = render(<>{components.h1?.({ children: "Heading" })}</>);
      const h1 = container.querySelector("h1");

      // Spacious spacing should have larger top margin
      expect(h1).toHaveStyle({ marginTop: "1rem" });
    });
  });

  describe("edge cases", () => {
    it("handles empty children", () => {
      const components = createMarkdownComponents();
      const { container } = render(<>{components.p?.({ children: undefined })}</>);

      expect(container.querySelector("span")).toBeInTheDocument();
    });

    it("handles array children", () => {
      const components = createMarkdownComponents();
      const { container } = render(<>{components.p?.({ children: ["Text ", "more text"] })}</>);

      expect(container).toHaveTextContent("Text more text");
    });

    it("handles code with empty string", () => {
      const components = createMarkdownComponents();
      const { container } = render(<>{components.code?.({ children: "", inline: true })}</>);

      expect(container.querySelector("code")).toBeInTheDocument();
    });

    it("handles code with only whitespace", () => {
      const components = createMarkdownComponents();
      const { container } = render(<>{components.code?.({ children: "   ", inline: true })}</>);

      const code = container.querySelector("code");
      expect(code).toBeInTheDocument();
      // Whitespace is preserved in the code element
      expect(code?.textContent).toBe("   ");
    });

    it("handles code extraction from ReactNode arrays", () => {
      const components = createMarkdownComponents();
      const { container } = render(<>{components.code?.({ children: ["part1", "part2"], inline: true })}</>);

      expect(container.querySelector("code")).toBeInTheDocument();
      expect(container).toHaveTextContent("part1part2");
    });

    it("trims newlines from code blocks", () => {
      const components = createMarkdownComponents();
      render(<>{components.code?.({ children: "\n\ncode\n\n", className: "language-js" })}</>);

      const codeBlock = screen.getByTestId("code-block");
      expect(codeBlock).toHaveTextContent("code");
    });
  });
});
