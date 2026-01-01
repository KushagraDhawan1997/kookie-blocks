"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { DocsShell } from "@kushagradhawan/kookie-blocks";
import { docsNavigation } from "../navigation-config";

export function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <DocsShell
      navigation={docsNavigation}
      logo={{
        src: "/kookie-logo.png",
        alt: "Kookie Blocks",
        href: "/",
      }}
      pathname={pathname}
      linkComponent={Link as any}
    >
      {children}
    </DocsShell>
  );
}
