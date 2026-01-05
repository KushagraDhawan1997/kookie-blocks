"use client";

import * as React from "react";
import {
  PreviewBlock,
  CodeBlock,
  SectionHeader,
} from "@kushagradhawan/kookie-blocks";
import {
  Flex,
  Button,
  Card,
  Text,
  Separator,
  Callout,
  Badge,
  Avatar,
} from "@kushagradhawan/kookie-ui";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  InformationCircleIcon,
  CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons";

export function PreviewBlockExamples() {
  return (
    <Flex direction="column" gap="9">
      {/* Example 1: Component Documentation */}
      <Flex direction="column" gap="4">
        <SectionHeader.Root>
          <SectionHeader.Content>
            <SectionHeader.Title>Component Documentation</SectionHeader.Title>
            <SectionHeader.Description>
              The default dots background provides subtle visual boundaries
              without distracting from the component being showcased.
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock>
          <Button variant="solid" size="2" highContrast>
            Get Started
          </Button>
        </PreviewBlock>
        <CodeBlock
          code={`<PreviewBlock>
  <Button variant="solid" size="2" highContrast>
    Get Started
  </Button>
</PreviewBlock>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Example 2: Layout Demonstration */}
      <Flex direction="column" gap="4">
        <SectionHeader.Root>
          <SectionHeader.Content>
            <SectionHeader.Title>Layout Demonstration</SectionHeader.Title>
            <SectionHeader.Description>
              The grid background helps visualize spacing and alignment when
              demonstrating layout components or grid systems.
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock background="grid">
          <Flex gap="4">
            <Card variant="classic" size="2" style={{ width: 120 }}>
              <Flex direction="column" gap="2" align="center" p="2">
                <Avatar fallback="A" size="3" />
                <Text size="2" weight="medium">
                  Card 1
                </Text>
              </Flex>
            </Card>
            <Card variant="classic" size="2" style={{ width: 120 }}>
              <Flex direction="column" gap="2" align="center" p="2">
                <Avatar fallback="B" size="3" />
                <Text size="2" weight="medium">
                  Card 2
                </Text>
              </Flex>
            </Card>
            <Card variant="classic" size="2" style={{ width: 120 }}>
              <Flex direction="column" gap="2" align="center" p="2">
                <Avatar fallback="C" size="3" />
                <Text size="2" weight="medium">
                  Card 3
                </Text>
              </Flex>
            </Card>
          </Flex>
        </PreviewBlock>
        <CodeBlock
          code={`<PreviewBlock background="grid">
  <Flex gap="4">
    <Card variant="classic" size="2" style={{ width: 120 }}>
      <Flex direction="column" gap="2" align="center" p="2">
        <Avatar fallback="A" size="3" />
        <Text size="2" weight="medium">Card 1</Text>
      </Flex>
    </Card>
    <Card variant="classic" size="2" style={{ width: 120 }}>
      <Flex direction="column" gap="2" align="center" p="2">
        <Avatar fallback="B" size="3" />
        <Text size="2" weight="medium">Card 2</Text>
      </Flex>
    </Card>
    <Card variant="classic" size="2" style={{ width: 120 }}>
      <Flex direction="column" gap="2" align="center" p="2">
        <Avatar fallback="C" size="3" />
        <Text size="2" weight="medium">Card 3</Text>
      </Flex>
    </Card>
  </Flex>
</PreviewBlock>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Example 3: Full-Width Components */}
      <Flex direction="column" gap="4">
        <SectionHeader.Root>
          <SectionHeader.Content>
            <SectionHeader.Title>Full-Width Components</SectionHeader.Title>
            <SectionHeader.Description>
              Use background="none" for components that need clean backgrounds or
              have their own visual styling like callouts and alerts.
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock background="none">
          <Flex direction="column" gap="3" style={{ width: "100%", maxWidth: 400 }}>
            <Callout.Root color="green">
              <Callout.Icon>
                <HugeiconsIcon icon={CheckmarkCircle02Icon} strokeWidth={1.75} />
              </Callout.Icon>
              <Callout.Text>
                Your changes have been saved successfully.
              </Callout.Text>
            </Callout.Root>
            <Callout.Root color="blue">
              <Callout.Icon>
                <HugeiconsIcon icon={InformationCircleIcon} strokeWidth={1.75} />
              </Callout.Icon>
              <Callout.Text>
                This feature requires a Pro subscription.
              </Callout.Text>
            </Callout.Root>
          </Flex>
        </PreviewBlock>
        <CodeBlock
          code={`<PreviewBlock background="none">
  <Flex direction="column" gap="3" style={{ width: "100%", maxWidth: 400 }}>
    <Callout.Root color="green">
      <Callout.Icon>
        <HugeiconsIcon icon={CheckmarkCircle02Icon} strokeWidth={1.75} />
      </Callout.Icon>
      <Callout.Text>
        Your changes have been saved successfully.
      </Callout.Text>
    </Callout.Root>
    <Callout.Root color="blue">
      <Callout.Icon>
        <HugeiconsIcon icon={InformationCircleIcon} strokeWidth={1.75} />
      </Callout.Icon>
      <Callout.Text>
        This feature requires a Pro subscription.
      </Callout.Text>
    </Callout.Root>
  </Flex>
</PreviewBlock>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Example 4: Theme Testing */}
      <Flex direction="column" gap="4">
        <SectionHeader.Root>
          <SectionHeader.Content>
            <SectionHeader.Title>Theme Testing</SectionHeader.Title>
            <SectionHeader.Description>
              The built-in theme toggle lets users test components in both light
              and dark modes without leaving the documentation.
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock background="dots" showThemeToggle={true}>
          <Flex gap="2" align="center">
            <Badge color="green" highContrast>
              Active
            </Badge>
            <Badge color="amber" highContrast>
              Pending
            </Badge>
            <Badge color="red" highContrast>
              Inactive
            </Badge>
          </Flex>
        </PreviewBlock>
        <CodeBlock
          code={`<PreviewBlock background="dots" showThemeToggle={true}>
  <Flex gap="2" align="center">
    <Badge color="green" highContrast>Active</Badge>
    <Badge color="amber" highContrast>Pending</Badge>
    <Badge color="red" highContrast>Inactive</Badge>
  </Flex>
</PreviewBlock>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Example 5: Translucent Components */}
      <Flex direction="column" gap="4">
        <SectionHeader.Root>
          <SectionHeader.Content>
            <SectionHeader.Title>Translucent Components</SectionHeader.Title>
            <SectionHeader.Description>
              Custom CSS backgrounds showcase translucent materials over dynamic
              imagery. Use appearance="dark" with showThemeToggle={false} for
              fixed dark contexts.
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock
          showThemeToggle={false}
          appearance="dark"
          variant="ghost"
          height="20rem"
          background={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1765572446249-a583906255f0?q=80&w=1341&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Callout.Root
            color="blue"
            material="translucent"
            highContrast
            style={{ maxWidth: 400 }}
          >
            <Callout.Icon>
              <HugeiconsIcon icon={InformationCircleIcon} strokeWidth={1.75} />
            </Callout.Icon>
            <Callout.Text>
              Translucent materials blend with backgrounds while maintaining
              readability.
            </Callout.Text>
          </Callout.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<PreviewBlock
  showThemeToggle={false}
  appearance="dark"
  variant="ghost"
  height="20rem"
  background={{
    backgroundImage: "url(https://images.unsplash.com/...)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <Callout.Root
    color="blue"
    material="translucent"
    highContrast
    style={{ maxWidth: 400 }}
  >
    <Callout.Icon>
      <HugeiconsIcon icon={InformationCircleIcon} strokeWidth={1.75} />
    </Callout.Icon>
    <Callout.Text>
      Translucent materials blend with backgrounds while maintaining
      readability.
    </Callout.Text>
  </Callout.Root>
</PreviewBlock>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Example 6: Custom Height */}
      <Flex direction="column" gap="4">
        <SectionHeader.Root>
          <SectionHeader.Content>
            <SectionHeader.Title>Custom Height</SectionHeader.Title>
            <SectionHeader.Description>
              Adjust the preview height to match your content. Taller previews
              work well for vertical layouts and full-page components.
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock background="none" height="30rem">
          <Card variant="classic" size="3" style={{ width: 280 }}>
            <Flex direction="column" gap="4" p="2">
              <Flex direction="column" gap="2" align="center">
                <Avatar fallback="JD" size="5" />
                <Flex direction="column" gap="1" align="center">
                  <Text size="3" weight="medium">
                    Jane Doe
                  </Text>
                  <Text size="2" color="gray">
                    Product Designer
                  </Text>
                </Flex>
              </Flex>
              <Separator size="4" />
              <Flex direction="column" gap="2">
                <Flex justify="between">
                  <Text size="2" color="gray">
                    Projects
                  </Text>
                  <Text size="2" weight="medium">
                    24
                  </Text>
                </Flex>
                <Flex justify="between">
                  <Text size="2" color="gray">
                    Followers
                  </Text>
                  <Text size="2" weight="medium">
                    1.2k
                  </Text>
                </Flex>
              </Flex>
              <Button variant="soft" size="2" highContrast>
                View Profile
              </Button>
            </Flex>
          </Card>
        </PreviewBlock>
        <CodeBlock
          code={`<PreviewBlock background="none" height="30rem">
  <Card variant="classic" size="3" style={{ width: 280 }}>
    <Flex direction="column" gap="4" p="2">
      <Flex direction="column" gap="2" align="center">
        <Avatar fallback="JD" size="5" />
        <Flex direction="column" gap="1" align="center">
          <Text size="3" weight="medium">Jane Doe</Text>
          <Text size="2" color="gray">Product Designer</Text>
        </Flex>
      </Flex>
      <Separator size="4" />
      <Flex direction="column" gap="2">
        <Flex justify="between">
          <Text size="2" color="gray">Projects</Text>
          <Text size="2" weight="medium">24</Text>
        </Flex>
        <Flex justify="between">
          <Text size="2" color="gray">Followers</Text>
          <Text size="2" weight="medium">1.2k</Text>
        </Flex>
      </Flex>
      <Button variant="soft" size="2" highContrast>
        View Profile
      </Button>
    </Flex>
  </Card>
</PreviewBlock>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>
    </Flex>
  );
}
