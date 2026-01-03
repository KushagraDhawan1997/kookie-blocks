"use client";

import { Button, Container, Flex, Heading, Text } from "@kushagradhawan/kookie-ui";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Container size="2" py="9">
      <Flex direction="column" align="center" gap="4">
        <Heading size="8" weight="bold">
          Error
        </Heading>
        <Text size="4" color="gray">
          Something went wrong
        </Text>
        <Button onClick={reset} size="3" variant="soft" mt="4">
          Try again
        </Button>
      </Flex>
    </Container>
  );
}
