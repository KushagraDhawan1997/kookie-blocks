import { useState, useRef, useEffect, useCallback } from "react";

const COPY_FEEDBACK_DURATION_MS = 2000;

interface UseCodeCardOptions {
  code: string;
  collapsedHeight: number;
}

interface UseCodeCardReturn {
  isExpanded: boolean;
  shouldShowToggle: boolean;
  copied: boolean;
  contentRef: React.RefObject<HTMLDivElement | null>;
  contentMaxHeight: number;
  handleToggle: () => void;
  handleCopy: () => Promise<void>;
}

/**
 * Shared hook for code card UI behavior.
 * Handles expand/collapse state and copy functionality.
 */
export function useCodeCard({ code, collapsedHeight }: UseCodeCardOptions): UseCodeCardReturn {
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(collapsedHeight);
  const [copied, setCopied] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const resetTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const shouldShowToggle = contentHeight > collapsedHeight;
  const contentMaxHeight = isExpanded ? contentHeight : collapsedHeight;

  // Measure content height via ResizeObserver (only fires when size actually changes)
  useEffect(() => {
    const element = contentRef.current;
    if (!element) return;

    setContentHeight(element.scrollHeight);

    const observer = new ResizeObserver(() => {
      setContentHeight(element.scrollHeight);
    });
    observer.observe(element);

    return () => observer.disconnect();
  }, [code]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }
    };
  }, []);

  const handleToggle = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  const handleCopy = useCallback(async () => {
    if (!code.trim()) return;

    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);

      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }
      resetTimeoutRef.current = setTimeout(() => setCopied(false), COPY_FEEDBACK_DURATION_MS);
    } catch (error) {
      // Log error in development, fail gracefully in production
      if (process.env.NODE_ENV === "development") {
        console.error("[CodeBlock] Failed to copy to clipboard:", error);
      }
    }
  }, [code]);

  return {
    isExpanded,
    shouldShowToggle,
    copied,
    contentRef,
    contentMaxHeight,
    handleToggle,
    handleCopy,
  };
}
