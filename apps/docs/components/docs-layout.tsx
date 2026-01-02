"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { DocsShell } from "@kushagradhawan/kookie-blocks";
import { docsNavigation } from "../navigation-config";
import { Text } from "@kushagradhawan/kookie-ui";

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
      sidebarFooter={
        <Text size="1" color="gray">
          v1.0.0 • <Link href="/changelog">Changelog</Link>
        </Text>
      }
    >
      {children}
    </DocsShell>
  );
}
