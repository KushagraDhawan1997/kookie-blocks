'use client';

import React, { useCallback } from 'react';
import { Flex, Heading, Text, Link, Button } from '@kushagradhawan/kookie-ui';
import { HugeiconsIcon } from '@hugeicons/react';
import { Copy01Icon } from '@hugeicons/core-free-icons';
import type { DocsPageMeta } from './types.js';

export interface DocsPageHeaderProps {
  /** Page metadata */
  meta: DocsPageMeta;
  /** Optional actions to render on the right side */
  actions?: React.ReactNode;
  /** Show copy page button */
  showCopyButton?: boolean;
}

export function DocsPageHeader({ meta, actions, showCopyButton = true }: DocsPageHeaderProps) {
  const handleCopyPage = useCallback(() => {
    const contentArea = document.querySelector('[data-content-area]');
    if (!contentArea) return;

    let markdown = `# ${meta.title}\n\n`;

    if (meta.description) {
      markdown += `${meta.description}\n\n`;
    }

    if (meta.source) {
      markdown += `[View source](${meta.source})\n\n`;
    }

    markdown += `---\n\n`;

    const textContent = contentArea.textContent || '';
    markdown += textContent.trim();

    navigator.clipboard.writeText(markdown);
  }, [meta.title, meta.description, meta.source]);

  return (
    <Flex direction="column" gap="4">
      {meta.category && (
        <Text size="2" weight="medium">
          {meta.category}
        </Text>
      )}

      <Flex align="center" justify="between" gap="4">
        <Heading as="h1" size="9" weight="medium">
          {meta.title}
        </Heading>

        <Flex align="center" gap="4">
          {actions}
          {showCopyButton && (
            <Button
              size="2"
              variant="ghost"
              color="gray"
              highContrast
              onClick={handleCopyPage}
              aria-label="Copy page content"
            >
              <HugeiconsIcon icon={Copy01Icon} />
              Copy page
            </Button>
          )}
        </Flex>
      </Flex>

      {meta.description && (
        <Text size="3" color="gray">
          {meta.description}
        </Text>
      )}

      {meta.source && (
        <Link
          size="3"
          href={meta.source}
          target="_blank"
          color="gray"
          highContrast
          rel="noreferrer"
        >
          View source →
        </Link>
      )}
    </Flex>
  );
}
