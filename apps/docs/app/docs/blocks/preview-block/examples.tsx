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
        <PreviewBlock height="30rem">
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
        <PreviewBlock background="grid" height="30rem">
          <Flex gap="5">
            <Card
              variant="classic"
              size="2"
              style={{ width: 120, height: 120 }}
            />
            <Card
              variant="classic"
              size="2"
              style={{ width: 120, height: 120 }}
            />
            <Card
              variant="classic"
              size="2"
              style={{ width: 120, height: 120 }}
            />
          </Flex>
        </PreviewBlock>
        <CodeBlock
          code={`<PreviewBlock background="grid">
  <Flex gap="5">
    <Card
      variant="classic"
      size="2"
      style={{ width: 120, height: 120 }}
    />
    <Card
      variant="classic"
      size="2"
      style={{ width: 120, height: 120 }}
    />
    <Card
      variant="classic"
      size="2"
      style={{ width: 120, height: 120 }}
    />
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
              Use background="none" for components that need clean backgrounds
              or have their own visual styling like callouts and alerts.
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock background="none" height="30rem">
          <Flex
            direction="column"
            gap="3"
            style={{ width: "100%", maxWidth: 400 }}
          >
            <Callout.Root color="green">
              <Callout.Icon>
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  strokeWidth={1.75}
                />
              </Callout.Icon>
              <Callout.Text>
                Your changes have been saved successfully.
              </Callout.Text>
            </Callout.Root>
            <Callout.Root color="blue">
              <Callout.Icon>
                <HugeiconsIcon
                  icon={InformationCircleIcon}
                  strokeWidth={1.75}
                />
              </Callout.Icon>
              <Callout.Text>
                This feature requires a Pro subscription.
              </Callout.Text>
            </Callout.Root>
          </Flex>
        </PreviewBlock>
        <CodeBlock
          code={`<PreviewBlock background="none">
  <Flex
    direction="column"
    gap="3"
    style={{ width: "100%", maxWidth: 400 }}
  >
    <Callout.Root color="green">
      <Callout.Icon>
        <HugeiconsIcon
          icon={CheckmarkCircle02Icon}
          strokeWidth={1.75}
        />
      </Callout.Icon>
      <Callout.Text>
        Your changes have been saved successfully.
      </Callout.Text>
    </Callout.Root>
    <Callout.Root color="blue">
      <Callout.Icon>
        <HugeiconsIcon
          icon={InformationCircleIcon}
          strokeWidth={1.75}
        />
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
        <PreviewBlock background="dots" height="30rem" showThemeToggle={true}>
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
          code={`<PreviewBlock
  background="dots"
  showThemeToggle={true}
>
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

      {/* Example 5: Precise Spacing */}
      <Flex direction="column" gap="4">
        <SectionHeader.Root>
          <SectionHeader.Content>
            <SectionHeader.Title>Precise Spacing</SectionHeader.Title>
            <SectionHeader.Description>
              A tighter 16px grid helps visualize precise alignment for compact
              components like icon buttons and badges.
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock background="grid" height="30rem" patternSize={16}>
          <Flex gap="2" align="center">
            <Badge size="1" color="blue">
              Small
            </Badge>
            <Badge size="2" color="green">
              Medium
            </Badge>
            <Badge size="3" color="violet">
              Large
            </Badge>
          </Flex>
        </PreviewBlock>
        <CodeBlock
          code={`<PreviewBlock
  background="grid"
  patternSize={16}
>
  <Flex gap="2" align="center">
    <Badge size="1" color="blue">Small</Badge>
    <Badge size="2" color="green">Medium</Badge>
    <Badge size="3" color="violet">Large</Badge>
  </Flex>
</PreviewBlock>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Example 6: Full-Bleed Gradient */}
      <Flex direction="column" gap="4">
        <SectionHeader.Root>
          <SectionHeader.Content>
            <SectionHeader.Title>Full-Bleed Gradient</SectionHeader.Title>
            <SectionHeader.Description>
              Use p="0" for gradients that should extend to the edges of the
              preview container.
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock
          p="0"
          height="30rem"
          background={{
            backgroundColor: "hsla(259, 100%, 58%, 1)",
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1517 1517' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"), radial-gradient(circle at 100% 64%, hsla(45, 55%, 56%, 1) 1%, transparent 68%), radial-gradient(circle at 74% 91%, hsla(336, 54%, 73%, 1) 4%, transparent 77%)`,
            backgroundBlendMode: "overlay, normal, normal",
          }}
        >
          <Text style={{ color: "white" }} size="3" weight="medium">
            Full-bleed gradient
          </Text>
        </PreviewBlock>
        <CodeBlock
          code={`<PreviewBlock
  p="0"
  background={{
    backgroundColor: "hsla(259, 100%, 58%, 1)",
    backgroundImage: \`url("data:image/svg+xml,..."), radial-gradient(...)\`,
    backgroundBlendMode: "overlay, normal, normal",
  }}
>
  <Text style={{ color: "white" }}>Full-bleed gradient</Text>
</PreviewBlock>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Example 7: Image Background */}
      <Flex direction="column" gap="4">
        <SectionHeader.Root>
          <SectionHeader.Content>
            <SectionHeader.Title>Image Background</SectionHeader.Title>
            <SectionHeader.Description>
              Use p="0" with a background image for full-bleed photo backgrounds
              that extend to the container edges.
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock
          p="0"
          height="30rem"
          background={{
            backgroundColor: "hsl(220, 20%, 10%)",
            backgroundImage:
              "url(https://images.unsplash.com/photo-1764244666530-2b64b410a6c7?q=80&w=2670&auto=format&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Text style={{ color: "white" }} size="3" weight="medium">
            Image background
          </Text>
        </PreviewBlock>
        <CodeBlock
          code={`<PreviewBlock
  p="0"
  background={{
    backgroundColor: "hsl(220, 20%, 10%)",
    backgroundImage:
      "url(https://images.unsplash.com/photo-...)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <Text
    style={{ color: "white" }}
    size="3"
    weight="medium"
  >
    Image background
  </Text>
</PreviewBlock>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Example 8: Custom Height */}
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
          code={`<PreviewBlock
  background="none"
  height="30rem"
>
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
