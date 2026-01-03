"use client";

import { Button, Container, Flex, Heading, Text } from "@kushagradhawan/kookie-ui";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container size="2" py="9">
      <Flex direction="column" align="center" gap="4">
        <Heading size="8" weight="bold">
          404
        </Heading>
        <Text size="4" color="gray">
          Page not found
        </Text>
        <Button asChild size="3" variant="soft" mt="4">
          <Link href="/">Go home</Link>
        </Button>
      </Flex>
    </Container>
  );
}
