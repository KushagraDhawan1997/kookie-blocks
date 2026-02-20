"use client";

import { Theme, ThemePanel } from "@kushagradhawan/kookie-ui";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Theme
      accentColor="iris"
      grayColor="auto"
      material="solid"
      radius="medium"
      fontFamily="mono"
    >
      {children}
      <ThemePanel defaultOpen={false} />
    </Theme>
  );
}
