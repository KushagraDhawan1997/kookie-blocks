import "./global.css";
import { Theme } from "@kushagradhawan/kookie-ui";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Theme accentColor="blue" grayColor="gray" material="solid" radius="medium" fontFamily="sans">
          {children}
        </Theme>
      </body>
    </html>
  );
}
