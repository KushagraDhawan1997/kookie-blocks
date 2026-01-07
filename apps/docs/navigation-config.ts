import type { DocsNavigationConfig } from "@kushagradhawan/kookie-blocks";
import {
  Download01Icon,
  LayoutIcon,
  CodeIcon,
  AiGenerativeIcon,
  File02Icon,
  SidebarLeftIcon,
  TextAlignLeftIcon,
  Heading01Icon,
  Asterisk02Icon,
  DashboardSquare01Icon,
} from "@hugeicons/core-free-icons";

const alphaBadge = { content: "Alpha", size: "1", highContrast: true } as const;

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
        { href: "/docs/blocks/hero", title: "Hero", icon: Asterisk02Icon, badge: alphaBadge },
        { href: "/docs/blocks/footer", title: "Footer", icon: Asterisk02Icon, badge: alphaBadge },
      ],
    },
    {
      label: "Application",
      items: [
        {
          href: "/docs/blocks/page-header",
          title: "Page Header",
          icon: Heading01Icon,
          badge: alphaBadge,
        },
        {
          href: "/docs/blocks/section-header",
          title: "Section Header",
          icon: Heading01Icon,
          badge: alphaBadge,
        },
        {
          href: "/docs/blocks/empty-state",
          title: "Empty State",
          icon: DashboardSquare01Icon,
          badge: alphaBadge,
        },
      ],
    },
    {
      label: "AI",
      items: [
        {
          href: "/docs/blocks/create-markdown-components",
          title: "createMarkdownComponents",
          icon: AiGenerativeIcon,
          badge: alphaBadge,
        },
        {
          href: "/docs/blocks/streaming-markdown",
          title: "Streaming Markdown",
          icon: AiGenerativeIcon,
          badge: alphaBadge,
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
          badge: alphaBadge,
        },
        {
          href: "/docs/blocks/docs-shell",
          title: "Docs Shell",
          icon: LayoutIcon,
          badge: alphaBadge,
        },
        {
          href: "/docs/blocks/docs-sidebar",
          title: "Docs Sidebar",
          icon: SidebarLeftIcon,
          badge: alphaBadge,
        },
        {
          href: "/docs/blocks/docs-page",
          title: "Docs Page",
          icon: File02Icon,
          badge: alphaBadge,
        },
        {
          href: "/docs/blocks/table-of-contents",
          title: "Table Of Contents",
          icon: TextAlignLeftIcon,
          badge: alphaBadge,
        },
        {
          href: "/docs/blocks/preview-block",
          title: "Preview Block",
          icon: Asterisk02Icon,
          badge: alphaBadge,
        },
      ],
    },
  ],
};
