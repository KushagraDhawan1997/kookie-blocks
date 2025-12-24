"use client";
import * as React from "react";
import { CodeBlock } from "@kushagradhawan/kookie-blocks";
import { Box, Flex, Heading, Button } from "@kushagradhawan/kookie-ui";

const sampleCode = `function hello() {
  console.log("Hello, World!");
  return "This is a test";
}`;

const longCode = `import React from 'react';
import { Box, Flex, Button } from '@kushagradhawan/kookie-ui';

export function Example() {
  const [count, setCount] = React.useState(0);
  
  return (
    <Box>
      <Flex direction="column" gap="3">
        <Heading>Counter: {count}</Heading>
        <Button onClick={() => setCount(count + 1)}>
          Increment
        </Button>
      </Flex>
    </Box>
  );
}`;

export default function Page() {
  return (
    <Box p="6">
      <Flex direction="column" gap="6">
        <Heading size="8">CodeBlock Test Page</Heading>

        <Flex direction="column" gap="3">
          <Heading size="5">1. Simple Code Block</Heading>
          <CodeBlock code={sampleCode} language="javascript" />
        </Flex>

        <Flex direction="column" gap="3">
          <Heading size="5">2. With Preview (no background)</Heading>
          <CodeBlock code={sampleCode} language="typescript" preview={<Button>Test Button</Button>} />
        </Flex>

        <Flex direction="column" gap="3">
          <Heading size="5">3. With Preview + Dots Background</Heading>
          <CodeBlock
            code={longCode}
            language="tsx"
            preview={
              <Flex gap="2">
                <Button variant="solid">Primary</Button>
                <Button variant="soft">Secondary</Button>
              </Flex>
            }
            background="dots"
          />
        </Flex>

        <Flex direction="column" gap="3">
          <Heading size="5">4. Long Code (test scrollbar hiding)</Heading>
          <CodeBlock code={longCode} language="tsx" />
        </Flex>
      </Flex>
    </Box>
  );
}
