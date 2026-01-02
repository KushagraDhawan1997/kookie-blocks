"use client";

import { Theme } from "@kushagradhawan/kookie-ui";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Theme
      accentColor="indigo"
      grayColor="auto"
      material="solid"
      radius="medium"
      fontFamily="sans"
    >
      {children}
    </Theme>
  );
}
