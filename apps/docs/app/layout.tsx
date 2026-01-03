import type { Metadata } from "next";
import "./global.css";
import "@kushagradhawan/kookie-ui/styles.css";
import "@kushagradhawan/kookie-blocks/styles.css";
import { Providers } from "../components/providers";
import { DocsLayout } from "../components/docs-layout";

export const metadata: Metadata = {
  metadataBase: new URL("https://kookieblocks.com"),
  title: {
    default: "Kookie Blocks – Higher-Level Components for Kookie UI",
    template: "%s – Kookie Blocks",
  },
  description:
    "Higher-level composed components built on Kookie UI. Documentation shells, markdown rendering, code blocks, and more.",
  keywords: [
    "Kookie Blocks",
    "React components",
    "Kookie UI",
    "Markdown renderer",
    "Code blocks",
    "Documentation components",
    "TypeScript",
  ],
  authors: [{ name: "Kushagra Dhawan" }],
  creator: "Kushagra Dhawan",
  publisher: "Kushagra Dhawan",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Kookie Blocks – Higher-Level Components for Kookie UI",
    description:
      "Higher-level composed components built on Kookie UI. Documentation shells, markdown rendering, code blocks, and more.",
    url: "https://kookieblocks.com",
    siteName: "Kookie Blocks",
    images: [
      {
        url: "/kookie-blocks-logo.png",
        width: 1200,
        height: 630,
        alt: "Kookie Blocks",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kookie Blocks – Higher-Level Components for Kookie UI",
    description:
      "Higher-level composed components built on Kookie UI. Documentation shells, markdown rendering, code blocks, and more.",
    images: ["/kookie-blocks-logo.png"],
    site: "@kookieblocks",
    creator: "@kushagradhawan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareSourceCode",
              name: "Kookie Blocks",
              description:
                "Higher-level composed components built on Kookie UI.",
              url: "https://kookieblocks.com",
              codeRepository:
                "https://github.com/KushagraDhawan1997/kookie-blocks",
              programmingLanguage: ["TypeScript", "React"],
              author: {
                "@type": "Person",
                name: "Kushagra Dhawan",
                url: "https://kushagradhawan.com",
              },
              license: "https://opensource.org/licenses/MIT",
            }),
          }}
        />
      </head>
      <body>
        <Providers>
          <DocsLayout>{children}</DocsLayout>
        </Providers>
      </body>
    </html>
  );
}
