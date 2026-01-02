import React from "react";
import {
  Flex,
  Box,
  Separator,
  Container,
  Text,
  Link,
} from "@kushagradhawan/kookie-ui";
import { DocsPageHeader } from "./docs-page-header.js";
import type { DocsPageMeta } from "./types.js";

export interface DocsPageProps {
  children: React.ReactNode;
  /** Page metadata for header */
  meta?: DocsPageMeta;
  /** Optional table of contents element */
  tableOfContents?: React.ReactNode;
  /** Content max width */
  maxWidth?: string | number;
  /** Page padding */
  padding?: "3" | "4" | "5" | "6" | "7" | "8" | "9";
  /** Optional header actions */
  headerActions?: React.ReactNode;
  /** Optional tabs element to render below header */
  headerTabs?: React.ReactNode;
  /** Custom header element (overrides meta-based header) */
  header?: React.ReactNode;
  /** Show footer with copyright */
  showFooter?: boolean;
  /** Footer copyright holder */
  footerCopyright?: {
    name: string;
    url?: string;
  };
  /** GitHub repo URL for footer */
  githubUrl?: string;
}

export function DocsPage({
  children,
  meta,
  tableOfContents,
  maxWidth = "48rem",
  padding = "6",
  headerActions,
  headerTabs,
  header,
  showFooter = false,
  footerCopyright,
  githubUrl,
}: DocsPageProps) {
  const currentYear = new Date().getFullYear();
  const showHeader = header || meta;

  return (
    <Flex
      my="6"
      gap={{ initial: "6", md: "6" }}
      align="start"
      direction={{ initial: "column", lg: "row" }}
    >
      {/* Main content area */}
      <Flex
        direction="column"
        gap="6"
        p={{ initial: "2", sm: "4" }}
        flexGrow="1"
        style={{ minWidth: 0 }}
      >
        <Container size="2" style={{ minWidth: 0 }} data-content-area>
          <Box p="4" width="100%">
            <Flex direction="column" gap="8" width="100%">
              {/* Page Header */}
              {header
                ? header
                : meta && (
                    <DocsPageHeader
                      meta={meta}
                      actions={headerActions}
                      tabs={headerTabs}
                    />
                  )}

              {/* {showHeader && <Separator size="4" />} */}

              <Flex direction="column" gap="0" width="100%">
                {children}
              </Flex>
            </Flex>

            {showFooter && (
              <Flex align="center" justify="center" width="100%" pt="8">
                <Text size="2" color="gray" align="center">
                  © {currentYear}{" "}
                  {footerCopyright?.url ? (
                    <Link
                      href={footerCopyright.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {footerCopyright.name}
                    </Link>
                  ) : (
                    footerCopyright?.name || "Your Company"
                  )}
                  . Licensed under MIT.
                  {githubUrl && (
                    <>
                      {" "}
                      <Link href={githubUrl} target="_blank" rel="noreferrer">
                        GitHub
                      </Link>
                      .
                    </>
                  )}
                </Text>
              </Flex>
            )}
          </Box>
        </Container>
      </Flex>

      {/* Table of Contents */}
      {tableOfContents && (
        <Box
          style={{ width: "240px", minWidth: "160px" }}
          position="sticky"
          top="200px"
          display={{ initial: "none", lg: "block" }}
        >
          {tableOfContents}
        </Box>
      )}
    </Flex>
  );
}
