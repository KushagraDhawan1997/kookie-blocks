import "./global.css";
import "@kushagradhawan/kookie-ui/styles.css";
import "@kushagradhawan/kookie-blocks/styles.css";
import { Providers } from "../components/providers";
import { DocsLayout } from "../components/docs-layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <DocsLayout>{children}</DocsLayout>
        </Providers>
      </body>
    </html>
  );
}
