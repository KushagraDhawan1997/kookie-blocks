/** @type {import("prettier").Config} */
export default {
  // Explicitly disable formatting for MDX files
  overrides: [
    {
      files: "*.mdx",
      options: {
        // This will make prettier skip formatting MDX files
        requirePragma: true,
      },
    },
  ],
};
