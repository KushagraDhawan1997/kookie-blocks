'use client';

import React, { useCallback } from 'react';
import { Text, Link, Button } from '@kushagradhawan/kookie-ui';
import { HugeiconsIcon } from '@hugeicons/react';
import { Copy01Icon } from '@hugeicons/core-free-icons';
import { PageHeader } from '../page-header/page-header.js';
import type { DocsPageMeta } from './types.js';

export interface DocsPageHeaderProps {
  /** Page metadata */
  meta: DocsPageMeta;
  /** Optional actions to render on the right side */
  actions?: React.ReactNode;
  /** Show copy page button */
  showCopyButton?: boolean;
  /** Optional tabs element to render below header */
  tabs?: React.ReactNode;
}

export function DocsPageHeader({ meta, actions, showCopyButton = true, tabs }: DocsPageHeaderProps) {
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
    <PageHeader.Root gap="4">
      <PageHeader.Main>
        <PageHeader.Content gap="4">
          {meta.category && (
            <PageHeader.Meta>
              <Text size="2" weight="medium">
                {meta.category}
              </Text>
            </PageHeader.Meta>
          )}
          <PageHeader.Title>{meta.title}</PageHeader.Title>
          {meta.description && (
            <PageHeader.Description size="3">{meta.description}</PageHeader.Description>
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
        </PageHeader.Content>
        <PageHeader.Actions gap="4">
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
        </PageHeader.Actions>
      </PageHeader.Main>
      {tabs && <PageHeader.Tabs mt="4">{tabs}</PageHeader.Tabs>}
    </PageHeader.Root>
  );
}
