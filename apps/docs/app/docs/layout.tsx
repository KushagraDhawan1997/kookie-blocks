export default function DocsContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Each page handles its own DocsPage wrapper with TableOfContents
  return <>{children}</>;
}
