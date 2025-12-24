"use client";
import * as React from "react";
import { CodeBlock } from "@kushagradhawan/kookie-blocks";
import { Box, Flex, Heading, Button } from "@kushagradhawan/kookie-ui";

const sampleCode = `function hello() {
  console.log("Hello, World!");
  return "This is a test";
}`;

const longCode = `import React from 'react';
import { Box, Flex, Button, Card, Heading, Text, Badge } from '@kushagradhawan/kookie-ui';

export function Example() {
  const [count, setCount] = React.useState(0);
  const [todos, setTodos] = React.useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build something awesome', completed: false },
    { id: 3, text: 'Ship it', completed: false },
  ]);

  const handleToggle = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleAdd = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };
  
  return (
    <Box p="6">
      <Flex direction="column" gap="4">
        <Heading size="8">Todo List</Heading>
        
        <Card>
          <Flex direction="column" gap="3">
            {todos.map(todo => (
              <Flex key={todo.id} align="center" gap="3" p="3">
                <input 
                  type="checkbox" 
                  checked={todo.completed}
                  onChange={() => handleToggle(todo.id)}
                />
                <Text style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                  {todo.text}
                </Text>
                <Badge color={todo.completed ? 'green' : 'gray'}>
                  {todo.completed ? 'Done' : 'Pending'}
                </Badge>
              </Flex>
            ))}
          </Flex>
        </Card>

        <Flex gap="3">
          <Button onClick={() => setCount(count + 1)}>
            Increment Counter: {count}
          </Button>
          <Button variant="soft" onClick={() => handleAdd('New task')}>
            Add Todo
          </Button>
        </Flex>
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
