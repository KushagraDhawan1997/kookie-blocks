import type { DocsNavigationConfig } from "@kushagradhawan/kookie-blocks";
import {
  Download01Icon,
  LayoutIcon,
  CodeIcon,
  TextIcon,
  Layers01Icon,
  LayoutBottomIcon,
  LayoutTopIcon,
  Menu01Icon,
  TextAlignLeftIcon,
} from "@hugeicons/core-free-icons";

export const docsNavigation: DocsNavigationConfig = {
  groups: [
    {
      label: "Get Started",
      items: [
        {
          href: "/docs/installation",
          title: "Installation",
          icon: Download01Icon,
        },
      ],
    },
    {
      label: "Marketing",
      items: [
        { href: "/docs/blocks/hero", title: "Hero", icon: LayoutBottomIcon },
        { href: "/docs/blocks/footer", title: "Footer", icon: LayoutTopIcon },
      ],
    },
    {
      label: "AI",
      items: [
        {
          href: "/docs/blocks/streaming-markdown",
          title: "Streaming Markdown",
          icon: TextIcon,
        },
      ],
    },
    {
      label: "Documentation",
      items: [
        {
          href: "/docs/blocks/code-block",
          title: "Code Block",
          icon: CodeIcon,
        },
        {
          href: "/docs/blocks/docs-shell",
          title: "Docs Shell",
          icon: LayoutIcon,
        },
        {
          href: "/docs/blocks/docs-sidebar",
          title: "Docs Sidebar",
          icon: Menu01Icon,
        },
        {
          href: "/docs/blocks/docs-page",
          title: "Docs Page",
          icon: Layers01Icon,
        },
        {
          href: "/docs/blocks/table-of-contents",
          title: "Table Of Contents",
          icon: TextAlignLeftIcon,
        },
        {
          href: "/docs/blocks/preview-block",
          title: "Preview Block",
          icon: LayoutBottomIcon,
        },
      ],
    },
  ],
};
