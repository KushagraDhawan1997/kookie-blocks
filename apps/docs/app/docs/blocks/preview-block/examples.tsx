"use client";

import * as React from "react";
import {
  PreviewBlock,
  CodeBlock,
  SectionHeader,
  Hero,
} from "@kushagradhawan/kookie-blocks";
import {
  Flex,
  Button,
  Card,
  Text,
  Separator,
  Callout,
  Badge,
  IconButton,
  Chatbar,
} from "@kushagradhawan/kookie-ui";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  InformationCircleIcon,
  CheckmarkCircle02Icon,
  SparklesIcon,
  Attachment01Icon,
  AiBrain01Icon,
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
              size="1"
              style={{ width: 120, height: 120 }}
            />
            <Card
              variant="classic"
              size="1"
              style={{ width: 120, height: 120 }}
            />
            <Card
              variant="classic"
              size="1"
              style={{ width: 120, height: 120 }}
            />
          </Flex>
        </PreviewBlock>
        <CodeBlock
          code={`<PreviewBlock background="grid">
  <Flex gap="5">
    <Card
      variant="classic"
      size="1"
      style={{ width: 120, height: 120 }}
    />
    <Card
      variant="classic"
      size="1"
      style={{ width: 120, height: 120 }}
    />
    <Card
      variant="classic"
      size="1"
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
              A tighter 12px grid helps visualize precise alignment for complex
              layouts like this chat interface.
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock
          background="grid"
          height="40rem"
          patternSize={12}
          patternColor="var(--gray-a2)"
        >
          <Hero.Root style={{ width: "100%", maxWidth: 500 }}>
            <Hero.Meta>
              <HugeiconsIcon icon={SparklesIcon} strokeWidth={1.75} />
            </Hero.Meta>
            <Flex direction="column" gap="4">
              <Hero.Title>How can I help you today?</Hero.Title>
              <Hero.Description color="gray">
                Ask me anything about your projects, code, or ideas.
              </Hero.Description>
            </Flex>
            <Chatbar.Root
              open
              variant="classic"
              size="2"
              color="blue"
              sendMode="always"
              minLines={3}
              maxLines={16}
              style={{ width: "100%" }}
            >
              <Chatbar.Textarea
                aria-label="Ask anything"
                placeholder="Ask me anything..."
                submitOnEnter
              />
              <Chatbar.Row>
                <Chatbar.RowStart>
                  <Chatbar.AttachTrigger asChild>
                    <IconButton
                      variant="ghost"
                      size="2"
                      color="gray"
                      highContrast
                      aria-label="Attach file"
                      tooltip="Attach file"
                    >
                      <HugeiconsIcon
                        icon={Attachment01Icon}
                        strokeWidth={1.75}
                      />
                    </IconButton>
                  </Chatbar.AttachTrigger>
                  <IconButton
                    variant="ghost"
                    size="2"
                    color="gray"
                    highContrast
                    aria-label="Select model"
                    tooltip="Select model"
                  >
                    <HugeiconsIcon icon={AiBrain01Icon} strokeWidth={1.75} />
                  </IconButton>
                </Chatbar.RowStart>
                <Chatbar.RowEnd>
                  <Chatbar.Send highContrast />
                </Chatbar.RowEnd>
              </Chatbar.Row>
            </Chatbar.Root>
          </Hero.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<PreviewBlock
  background="grid"
  patternSize={12}
  patternColor="var(--gray-a2)"
>
  <Hero.Root style={{ width: "100%", maxWidth: 500 }}>
    <Hero.Meta>
      <HugeiconsIcon icon={SparklesIcon} strokeWidth={1.75} />
    </Hero.Meta>
    <Flex direction="column" gap="4">
      <Hero.Title>How can I help you today?</Hero.Title>
      <Hero.Description color="gray">
        Ask me anything about your projects, code, or ideas.
      </Hero.Description>
    </Flex>
    <Chatbar.Root
      open
      variant="classic"
      size="2"
      color="blue"
      sendMode="always"
      minLines={3}
      maxLines={16}
      style={{ width: "100%" }}
    >
      <Chatbar.Textarea
        aria-label="Ask anything"
        placeholder="Ask me anything..."
        submitOnEnter
      />
      <Chatbar.Row>
        <Chatbar.RowStart>
          <Chatbar.AttachTrigger asChild>
            <IconButton
              variant="ghost"
              size="2"
              color="gray"
              highContrast
              aria-label="Attach file"
              tooltip="Attach file"
            >
              <HugeiconsIcon
                icon={Attachment01Icon}
                strokeWidth={1.75}
              />
            </IconButton>
          </Chatbar.AttachTrigger>
          <IconButton
            variant="ghost"
            size="2"
            color="gray"
            highContrast
            aria-label="Select model"
            tooltip="Select model"
          >
            <HugeiconsIcon icon={AiBrain01Icon} strokeWidth={1.75} />
          </IconButton>
        </Chatbar.RowStart>
        <Chatbar.RowEnd>
          <Chatbar.Send highContrast />
        </Chatbar.RowEnd>
      </Chatbar.Row>
    </Chatbar.Root>
  </Hero.Root>
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
    </Flex>
  );
}
