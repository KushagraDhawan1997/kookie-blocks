import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@kushagradhawan/kookie-ui";
import { HugeiconsIcon } from "@hugeicons/react";
import { Copy01Icon, Tick01Icon } from "@hugeicons/core-free-icons";

interface CopyButtonProps {
  code: string;
}

export function CopyButton({ code }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const resetTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }
    };
  }, []);

  const handleCopy = useCallback(async () => {
    if (!code.trim()) return;

    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);

      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }

      resetTimeoutRef.current = setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      // Silently fail
    }
  }, [code]);

  return (
    <Button size="2" tooltip={copied ? "Copied" : "Copy code"} variant="ghost" onClick={handleCopy} aria-label={copied ? "Copied" : "Copy code"}>
      <HugeiconsIcon icon={copied ? Tick01Icon : Copy01Icon} /> Copy
    </Button>
  );
}
