'use client';

import React, { useEffect, useState, useCallback, useRef, memo } from 'react';
import { Text, Link, Flex } from '@kushagradhawan/kookie-ui';
import type { TocItem } from './types.js';

// Generate slug from heading text
const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .trim();
};

export interface TableOfContentsProps {
  className?: string;
  /** Heading levels to include (default: [2]) */
  levels?: number[];
  /** Title shown above TOC (default: "On this page") */
  title?: string;
  /** Optional wrapper for the TOC content */
  renderContainer?: (tocContent: React.ReactNode) => React.ReactNode | null;
}

export const TableOfContents = memo(function TableOfContents({
  className,
  levels = [2],
  title = 'On this page',
  renderContainer,
}: TableOfContentsProps) {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const observerRef = useRef<IntersectionObserver | null>(null);
  const rafIdRef = useRef<number | null>(null);
  const timeoutIdRef = useRef<number | null>(null);

  const extractHeadings = useCallback(() => {
    rafIdRef.current = requestAnimationFrame(() => {
      const contentArea = document.querySelector('[data-content-area]');
      if (!contentArea) return;

      // Build selector from levels
      const selector = levels.map((l) => `h${l}`).join(', ');
      const headingElements = Array.from(contentArea.querySelectorAll(selector));

      const headings = headingElements
        .map((heading) => {
          const text = heading.textContent || '';
          let id = heading.id;

          if (!id && text) {
            id = generateSlug(text);
            heading.id = id;
          }

          return {
            id,
            text,
            level: parseInt(heading.tagName.charAt(1)),
          };
        })
        .filter((item) => item.id && item.text);

      setToc(headings);

      // Disconnect any previous observer
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }

      if (headings.length > 0) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveId(entry.target.id);
              }
            });
          },
          { rootMargin: '-20% 0% -35% 0%' }
        );

        headings.forEach(({ id }) => {
          const element = document.getElementById(id);
          if (element) observer.observe(element);
        });

        observerRef.current = observer;
      }
    });
  }, [levels]);

  useEffect(() => {
    // Initial extraction with delay for DOM readiness
    timeoutIdRef.current = window.setTimeout(() => {
      extractHeadings();
    }, 100);

    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
        timeoutIdRef.current = null;
      }
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [extractHeadings]);

  const getLinkStyle = useCallback(
    (level: number): React.CSSProperties => ({
      display: 'block',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      paddingLeft: level > 2 ? `${(level - 2) * 12}px` : '0',
    }),
    []
  );

  if (toc.length === 0) return null;

  const tocContent = (
    <Flex direction="column" gap="3" className={className}>
      <Text size="1" weight="medium" color="gray">
        {title}
      </Text>
      <Flex direction="column" gap="2">
        {toc.map((item) => (
          <Link
            key={item.id}
            color="gray"
            highContrast={activeId === item.id}
            size="1"
            href={`#${item.id}`}
            style={getLinkStyle(item.level)}
          >
            {item.text}
          </Link>
        ))}
      </Flex>
    </Flex>
  );

  if (renderContainer) {
    return renderContainer(tocContent);
  }

  return tocContent;
});
