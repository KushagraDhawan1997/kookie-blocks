"use client";

import * as React from "react";
import { Hero, PreviewBlock, CodeBlock } from "@kushagradhawan/kookie-blocks";
import {
  Flex,
  Heading,
  Button,
  Avatar,
  Badge,
  Link,
  Section,
  Container,
  Separator,
  Text,
  Image,
} from "@kushagradhawan/kookie-ui";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  File02Icon,
  Rocket01Icon,
  PresentationLineChartIcon,
  ActivityIcon,
  UserMultiple02Icon,
  Download01Icon,
  Store04Icon,
  Github01Icon,
  SparklesIcon,
  CodeIcon,
  FileViewIcon,
} from "@hugeicons/core-free-icons";

export function HeroExamples() {
  return (
    <Flex direction="column" gap="9">
      {/* Test 1: Basic Hero */}
      <Flex direction="column" gap="4">
        <Flex direction="column" gap="2">
          <Heading as="h2" size="6" weight="medium">
            Basic Hero
          </Heading>
          <Text size="2" color="gray">
            Default centered layout with title and description only
          </Text>
        </Flex>
        <PreviewBlock background="none" height="40rem">
          <Hero.Root p="4">
            <Hero.Title>Build better software</Hero.Title>
            <Hero.Description color="gray">
              The complete platform for modern development teams. Ship better
              and faster with confidence.
            </Hero.Description>
          </Hero.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<Hero.Root p="4">
  <Hero.Title>Build better software</Hero.Title>
  <Hero.Description color="gray">
    The complete platform for modern development teams. Ship better
    and faster with confidence.
  </Hero.Description>
</Hero.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Test 2: Full Marketing Hero */}
      <Flex direction="column" gap="4">
        <Flex direction="column" gap="2">
          <Heading as="h2" size="6" weight="medium">
            Marketing Hero
          </Heading>
          <Text size="2" color="gray">
            Complete hero with meta, title, description, and actions
          </Text>
        </Flex>
        <PreviewBlock background="none" height="40rem">
          <Hero.Root p="4">
            <Hero.Meta>
              <Avatar
                fallback="K"
                size="2"
                color="gray"
                src="/kookie-blocks-logo.svg"
              />
            </Hero.Meta>

            <Hero.Title>
              Production-ready components for modern web apps
            </Hero.Title>

            <Hero.Description color="gray">
              An open-source library of accessible, customizable components
              built on <Link href="https://hellokookie.com">Kookie UI</Link>.
              Ship polished interfaces faster with battle-tested patterns.
            </Hero.Description>

            <Hero.Actions>
              <Button variant="solid" size="2" highContrast>
                <HugeiconsIcon icon={CodeIcon} strokeWidth={1.75} />
                Browse Components
              </Button>
              <Button variant="soft" size="2" highContrast>
                <HugeiconsIcon icon={File02Icon} strokeWidth={1.75} />
                View Documentation
              </Button>
            </Hero.Actions>
          </Hero.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<Hero.Root p="4">
  <Hero.Meta>
    <Avatar
      fallback="K"
      size="2"
      color="gray"
      src="/kookie-blocks-logo.svg"
    />
  </Hero.Meta>

  <Hero.Title>
    Production-ready components for modern web apps
  </Hero.Title>

  <Hero.Description color="gray">
    An open-source library of accessible, customizable components
    built on <Link href="https://hellokookie.com">Kookie UI</Link>.
    Ship polished interfaces faster with battle-tested patterns.
  </Hero.Description>

  <Hero.Actions>
    <Button variant="solid" size="2" highContrast>
      <HugeiconsIcon icon={CodeIcon} strokeWidth={1.75} />
      Browse Components
    </Button>
    <Button variant="soft" size="2" highContrast>
      <HugeiconsIcon icon={File02Icon} strokeWidth={1.75} />
      View Documentation
    </Button>
  </Hero.Actions>
</Hero.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Test 3: Left-Aligned Hero */}
      <Flex direction="column" gap="4">
        <Flex direction="column" gap="2">
          <Heading as="h2" size="6" weight="medium">
            Left-Aligned Hero
          </Heading>
          <Text size="2" color="gray">
            Content aligned to the start for editorial layouts
          </Text>
        </Flex>
        <PreviewBlock background="none" height="40rem">
          <Hero.Root align="start" p="4">
            <Hero.Title align="left" size="9">
              Project management that adapts to your team
            </Hero.Title>
            <Hero.Description align="left" size="4" color="gray">
              From startups to enterprises, streamline workflows with
              intelligent automation and real-time collaboration.
            </Hero.Description>
            <Hero.Actions>
              <Button size="2">
                <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={1.75} />
                Start 14-Day Trial
              </Button>
            </Hero.Actions>
          </Hero.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<Hero.Root align="start" p="4">
  <Hero.Title align="left" size="9">
    Project management that adapts to your team
  </Hero.Title>
  <Hero.Description align="left" size="4" color="gray">
    From startups to enterprises, streamline workflows with intelligent
    automation and real-time collaboration.
  </Hero.Description>
  <Hero.Actions>
    <Button size="2">
      <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={1.75} />
      Start 14-Day Trial
    </Button>
  </Hero.Actions>
</Hero.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Test 4: Right-Aligned Hero */}
      <Flex direction="column" gap="4">
        <Flex direction="column" gap="2">
          <Heading as="h2" size="6" weight="medium">
            Right-Aligned Hero
          </Heading>
          <Text size="2" color="gray">
            Content aligned to the end with right-aligned text
          </Text>
        </Flex>
        <PreviewBlock background="none" height="40rem">
          <Hero.Root align="end" p="4">
            <Hero.Title align="right" size="9">
              Design systems at enterprise scale
            </Hero.Title>
            <Hero.Description align="right" size="4" color="gray">
              Maintain consistency across products with version-controlled
              components, automated documentation, and seamless
              designer-developer handoff.
            </Hero.Description>
            <Hero.Actions>
              <Button size="2" variant="solid">
                <HugeiconsIcon
                  icon={PresentationLineChartIcon}
                  strokeWidth={1.75}
                />
                Request Demo
              </Button>
            </Hero.Actions>
          </Hero.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<Hero.Root align="end" p="4">
  <Hero.Title align="right" size="9">
    Design systems at enterprise scale
  </Hero.Title>
  <Hero.Description align="right" size="4" color="gray">
    Maintain consistency across products with version-controlled
    components, automated documentation, and seamless
    designer-developer handoff.
  </Hero.Description>
  <Hero.Actions>
    <Button size="2" variant="solid">
      <HugeiconsIcon
        icon={PresentationLineChartIcon}
        strokeWidth={1.75}
      />
      Request Demo
    </Button>
  </Hero.Actions>
</Hero.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Test 5: With Badge Meta */}
      <Flex direction="column" gap="4">
        <Flex direction="column" gap="2">
          <Heading as="h2" size="6" weight="medium">
            Hero with Badge
          </Heading>
          <Text size="2" color="gray">
            Meta section with badge for announcements or status
          </Text>
        </Flex>
        <PreviewBlock background="none" height="40rem">
          <Hero.Root p="4">
            <Hero.Meta>
              <Badge size="2" color="gray" highContrast>
                <HugeiconsIcon
                  icon={Rocket01Icon}
                  strokeWidth={1.75}
                  style={{ width: 14, height: 14 }}
                />
                Launch Week
              </Badge>
            </Hero.Meta>
            <Hero.Title>
              Real-time observability with AI-powered insights
            </Hero.Title>
            <Hero.Description color="gray">
              Monitor infrastructure, trace requests, and detect anomalies
              before they impact users. Now with predictive alerting.
            </Hero.Description>
            <Hero.Actions>
              <Button color="gray" highContrast>
                <HugeiconsIcon icon={ActivityIcon} strokeWidth={1.75} />
                Start Monitoring
              </Button>
            </Hero.Actions>
          </Hero.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<Hero.Root p="4">
  <Hero.Meta>
    <Badge size="2" color="gray" highContrast>
      <HugeiconsIcon
        icon={Rocket01Icon}
        strokeWidth={1.75}
        style={{ width: 14, height: 14 }}
      />
      Launch Week
    </Badge>
  </Hero.Meta>
  <Hero.Title>Real-time observability with AI-powered insights</Hero.Title>
  <Hero.Description color="gray">
    Monitor infrastructure, trace requests, and detect anomalies before
    they impact users. Now with predictive alerting.
  </Hero.Description>
  <Hero.Actions>
    <Button color="gray" highContrast>
      <HugeiconsIcon icon={ActivityIcon} strokeWidth={1.75} />
      Start Monitoring
    </Button>
  </Hero.Actions>
</Hero.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Test 6: Custom Spacing (Large Gap) */}
      <Flex direction="column" gap="4">
        <Flex direction="column" gap="2">
          <Heading as="h2" size="6" weight="medium">
            Large Spacing
          </Heading>
          <Text size="2" color="gray">
            Generous spacing (gap=8) for premium feel
          </Text>
        </Flex>
        <PreviewBlock background="none" height="40rem">
          <Hero.Root gap="8" p="4">
            <Hero.Title size="9">
              Cloud infrastructure for mission-critical workloads
            </Hero.Title>
            <Hero.Description size="5" color="gray">
              99.99% uptime SLA with dedicated support, advanced security, and
              compliance certifications.
            </Hero.Description>
            <Hero.Actions gap="3">
              <Button size="2" highContrast>
                <HugeiconsIcon icon={UserMultiple02Icon} strokeWidth={1.75} />
                Talk to Sales
              </Button>
              <Button size="2" variant="soft" highContrast>
                <HugeiconsIcon icon={File02Icon} strokeWidth={1.75} />
                Architecture Guide
              </Button>
            </Hero.Actions>
          </Hero.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<Hero.Root gap="8" p="4">
  <Hero.Title size="9">
    Cloud infrastructure for mission-critical workloads
  </Hero.Title>
  <Hero.Description size="5" color="gray">
    99.99% uptime SLA with dedicated support, advanced security, and
    compliance certifications.
  </Hero.Description>
  <Hero.Actions gap="3">
    <Button size="2" highContrast>
      <HugeiconsIcon icon={UserMultiple02Icon} strokeWidth={1.75} />
      Talk to Sales
    </Button>
    <Button size="2" variant="soft" highContrast>
      <HugeiconsIcon icon={File02Icon} strokeWidth={1.75} />
      Architecture Guide
    </Button>
  </Hero.Actions>
</Hero.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Test 7: Custom Spacing (Small Gap) */}
      <Flex direction="column" gap="4">
        <Flex direction="column" gap="2">
          <Heading as="h2" size="6" weight="medium">
            Tight Spacing
          </Heading>
          <Text size="2" color="gray">
            Compact layout (gap=3) for smaller sections
          </Text>
        </Flex>
        <PreviewBlock background="none" height="40rem">
          <Hero.Root gap="3" p="4">
            <Hero.Title size="8">Your code snippets, organized</Hero.Title>
            <Hero.Description size="3" color="gray">
              Save, search, and sync code snippets across devices. Never lose
              that perfect function again.
            </Hero.Description>
            <Hero.Actions>
              <Button size="2" highContrast>
                <HugeiconsIcon icon={Download01Icon} strokeWidth={1.75} />
                Add to Browser
              </Button>
            </Hero.Actions>
          </Hero.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<Hero.Root gap="3" p="4">
  <Hero.Title size="8">Your code snippets, organized</Hero.Title>
  <Hero.Description size="3" color="gray">
    Save, search, and sync code snippets across devices. Never lose that
    perfect function again.
  </Hero.Description>
  <Hero.Actions>
    <Button size="2" highContrast>
      <HugeiconsIcon icon={Download01Icon} strokeWidth={1.75} />
      Add to Browser
    </Button>
  </Hero.Actions>
</Hero.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Test 8: Split Layout */}
      <Flex direction="column" gap="4">
        <Flex direction="column" gap="2">
          <Heading as="h2" size="6" weight="medium">
            Split Layout
          </Heading>
          <Text size="2" color="gray">
            Horizontal layout with content and media side-by-side
          </Text>
        </Flex>
        <PreviewBlock background="none" height="40rem">
          <Hero.Root layout="split" gap="8" p="6">
            <Flex direction="column" gap="6" style={{ flex: 1 }}>
              <Hero.Title align="left" size="9">
                Deploy faster with zero-config pipelines
              </Hero.Title>
              <Hero.Description align="left" size="4" color="gray">
                Automated builds, tests, and deployments that just work.
                Integrate with GitHub, GitLab, or Bitbucket in seconds.
              </Hero.Description>
              <Hero.Actions>
                <Button color="blue">
                  <HugeiconsIcon icon={Github01Icon} strokeWidth={1.75} />
                  Connect Repository
                </Button>
              </Hero.Actions>
            </Flex>

            <Hero.Media position="right" style={{ flex: 1 }}>
              <Image
                height="30rem"
                src="https://images.unsplash.com/photo-1587924656868-6fa1bfba7a64?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExNnxpVUlzblZ0akIwWXx8ZW58MHx8fHx8"
                alt="Abstract oil painting"
              />
            </Hero.Media>
          </Hero.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<Hero.Root layout="split" gap="8" p="6">
  <Flex direction="column" gap="6" style={{ flex: 1 }}>
    <Hero.Title align="left" size="9">
      Deploy faster with zero-config pipelines
    </Hero.Title>
    <Hero.Description align="left" size="4" color="gray">
      Automated builds, tests, and deployments that just work. Integrate
      with GitHub, GitLab, or Bitbucket in seconds.
    </Hero.Description>
    <Hero.Actions>
      <Button color="blue">
        <HugeiconsIcon icon={Github01Icon} strokeWidth={1.75} />
        Connect Repository
      </Button>
    </Hero.Actions>
  </Flex>

  <Hero.Media position="right" style={{ flex: 1 }}>
    <Image
      height="30rem"
      src="https://images.unsplash.com/photo-1587924656868-6fa1bfba7a64?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExNnxpVUlzblZ0akIwWXx8ZW58MHx8fHx8"
      alt="Abstract oil painting"
    />
  </Hero.Media>
</Hero.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Test 9: Multiple Meta Items */}
      <Flex direction="column" gap="4">
        <Flex direction="column" gap="2">
          <Heading as="h2" size="6" weight="medium">
            Multiple Meta Items
          </Heading>
          <Text size="2" color="gray">
            Combining avatar and multiple badges in meta section
          </Text>
        </Flex>
        <PreviewBlock background="none" height="40rem">
          <Hero.Root p="4">
            <Hero.Meta>
              <Avatar
                fallback="K"
                size="2"
                color="gray"
                src="/kookie-blocks-logo.svg"
              />
            </Hero.Meta>
            <Hero.Meta gap="2">
              <Badge size="2" color="green">
                Verified
              </Badge>
              <Badge size="2" color="blue">
                Trending
              </Badge>
            </Hero.Meta>
            <Hero.Title>Premium UI Kit Collection</Hero.Title>
            <Hero.Description color="gray">
              Over 500 handcrafted components, templates, and design assets from
              verified creators. Lifetime updates included.
            </Hero.Description>
          </Hero.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<Hero.Root p="4">
  <Hero.Meta>
    <Avatar
      fallback="K"
      size="2"
      color="gray"
      src="/kookie-blocks-logo.svg"
    />
  </Hero.Meta>
  <Hero.Meta gap="2">
    <Badge size="2" color="green">
      Verified
    </Badge>
    <Badge size="2" color="blue">
      Trending
    </Badge>
  </Hero.Meta>
  <Hero.Title>Premium UI Kit Collection</Hero.Title>
  <Hero.Description color="gray">
    Over 500 handcrafted components, templates, and design assets from
    verified creators. Lifetime updates included.
  </Hero.Description>
</Hero.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Test 10: Vertical Action Buttons */}
      <Flex direction="column" gap="4">
        <Flex direction="column" gap="2">
          <Heading as="h2" size="6" weight="medium">
            Vertical Actions
          </Heading>
          <Text size="2" color="gray">
            Buttons stacked vertically for mobile-first layouts
          </Text>
        </Flex>
        <PreviewBlock background="none" height="40rem">
          <Hero.Root p="4">
            <Hero.Title>Analytics that fit in your pocket</Hero.Title>
            <Hero.Description color="gray">
              Track metrics, view insights, and make data-driven decisions on
              the go with our mobile-optimized dashboard.
            </Hero.Description>
            <Hero.Actions direction="column">
              <Button size="2" highContrast fullWidth>
                <HugeiconsIcon icon={Download01Icon} strokeWidth={1.75} />
                Download iOS App
              </Button>
              <Button size="2" variant="soft" highContrast fullWidth>
                <HugeiconsIcon icon={Download01Icon} strokeWidth={1.75} />
                Download Android App
              </Button>
            </Hero.Actions>
          </Hero.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<Hero.Root p="4">
  <Hero.Title>Analytics that fit in your pocket</Hero.Title>
  <Hero.Description color="gray">
    Track metrics, view insights, and make data-driven decisions on the
    go with our mobile-optimized dashboard.
  </Hero.Description>
  <Hero.Actions direction="column">
    <Button size="2" highContrast fullWidth>
      <HugeiconsIcon icon={Download01Icon} strokeWidth={1.75} />
      Download iOS App
    </Button>
    <Button size="2" variant="soft" highContrast fullWidth>
      <HugeiconsIcon icon={Download01Icon} strokeWidth={1.75} />
      Download Android App
    </Button>
  </Hero.Actions>
</Hero.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Test 11: Responsive Test */}
      <Flex direction="column" gap="4">
        <Flex direction="column" gap="2">
          <Heading as="h2" size="6" weight="medium">
            Responsive Sizing
          </Heading>
          <Text size="2" color="gray">
            Spacing and text sizes adapt based on breakpoints
          </Text>
        </Flex>
        <PreviewBlock background="none" height="40rem">
          <Hero.Root
            gap={{ initial: "4", sm: "6", md: "8" }}
            p={{ initial: "4", sm: "6", md: "8" }}
          >
            <Hero.Meta>
              <Avatar
                fallback="K"
                size="2"
                color="blue"
                src="/kookie-blocks-logo.svg"
              />
            </Hero.Meta>
            <Hero.Title size={{ initial: "7", sm: "8", md: "9" }}>
              Where remote teams come together
            </Hero.Title>
            <Hero.Description
              size={{ initial: "3", sm: "4", md: "5" }}
              color="gray"
            >
              Video, chat, and documents in one platform. Purpose-built for
              distributed teams with seamless cross-device experiences.
            </Hero.Description>
            <Hero.Actions gap={{ initial: "2", md: "3" }}>
              <Button size={{ initial: "1", sm: "2", md: "3" }} highContrast>
                <HugeiconsIcon icon={UserMultiple02Icon} strokeWidth={1.75} />
                Create Workspace
              </Button>
            </Hero.Actions>
          </Hero.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<Hero.Root
  gap={{ initial: "4", sm: "6", md: "8" }}
  p={{ initial: "4", sm: "6", md: "8" }}
>
  <Hero.Meta>
    <Avatar
      fallback="K"
      size="2"
      color="blue"
      src="/kookie-blocks-logo.svg"
    />
  </Hero.Meta>
  <Hero.Title size={{ initial: "7", sm: "8", md: "9" }}>
    Where remote teams come together
  </Hero.Title>
  <Hero.Description
    size={{ initial: "3", sm: "4", md: "5" }}
    color="gray"
  >
    Video, chat, and documents in one platform. Purpose-built for
    distributed teams with seamless cross-device experiences.
  </Hero.Description>
  <Hero.Actions gap={{ initial: "2", md: "3" }}>
    <Button size={{ initial: "1", sm: "2", md: "3" }} highContrast>
      <HugeiconsIcon icon={UserMultiple02Icon} strokeWidth={1.75} />
      Create Workspace
    </Button>
  </Hero.Actions>
</Hero.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Test 12: With Gradient Background */}
      <Flex direction="column" gap="4">
        <Flex direction="column" gap="2">
          <Heading as="h2" size="6" weight="medium">
            Gradient Background
          </Heading>
          <Text size="2" color="gray">
            Hero on a subtle gradient background for visual depth
          </Text>
        </Flex>
        <PreviewBlock
          height="40rem"
          appearance="dark"
          showThemeToggle={false}
          variant="ghost"
          background={{
            backgroundColor: "hsla(244.85294117647055, 100%, 50%, 1)",
            backgroundImage:
              "radial-gradient(circle at 50% 0%, hsla(319, 0%, 0%, 1) 49.15975941515135%, transparent 102.23193813062571%)",
            backgroundBlendMode: "normal",
            borderRadius: "var(--radius-3)",
          }}
        >
          <Hero.Root p="8">
            <Hero.Meta>
              <Badge size="2">
                <HugeiconsIcon
                  icon={SparklesIcon}
                  strokeWidth={1.75}
                  style={{ width: 14, height: 14 }}
                />
                Powered by AI
              </Badge>
            </Hero.Meta>
            <Hero.Title>Generate marketing copy that converts</Hero.Title>
            <Hero.Description color="gray">
              From blog posts to ad campaigns, create compelling content 10x
              faster with AI trained on high-performing copy.
            </Hero.Description>
            <Hero.Actions>
              <Button size="2" variant="solid" highContrast>
                <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={1.75} />
                Try Free
              </Button>
              <Button size="2" variant="soft">
                <HugeiconsIcon icon={FileViewIcon} strokeWidth={1.75} />
                See Examples
              </Button>
            </Hero.Actions>
          </Hero.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<Theme appearance="dark">
  <Hero.Root p="8">
    <Hero.Meta>
      <Badge size="2">
        <HugeiconsIcon
          icon={SparklesIcon}
          strokeWidth={1.75}
          style={{ width: 14, height: 14 }}
        />
        Powered by AI
      </Badge>
    </Hero.Meta>
    <Hero.Title>Generate marketing copy that converts</Hero.Title>
    <Hero.Description color="gray">
      From blog posts to ad campaigns, create compelling content 10x
      faster with AI trained on high-performing copy.
    </Hero.Description>
    <Hero.Actions>
      <Button size="2" variant="solid" highContrast>
        <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={1.75} />
        Try Free
      </Button>
      <Button size="2" variant="soft">
        <HugeiconsIcon icon={FileViewIcon} strokeWidth={1.75} />
        See Examples
      </Button>
    </Hero.Actions>
  </Hero.Root>
</Theme>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Test 13: With Background Pattern */}
      <Flex direction="column" gap="4">
        <Flex direction="column" gap="2">
          <Heading as="h2" size="6" weight="medium">
            Background Pattern
          </Heading>
          <Text size="2" color="gray">
            Hero with dot pattern background for texture
          </Text>
        </Flex>
        <PreviewBlock height="40rem" background="dots">
          <Hero.Root p="8">
            <Hero.Title>Documentation that developers actually read</Hero.Title>
            <Hero.Description color="gray">
              Interactive code examples, versioned docs, and intelligent search.
              Keep your API documentation in sync with every release.
            </Hero.Description>
            <Hero.Actions>
              <Button size="2" highContrast>
                Import OpenAPI Spec
              </Button>
            </Hero.Actions>
          </Hero.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<Hero.Root p="8">
  <Hero.Title>Documentation that developers actually read</Hero.Title>
  <Hero.Description color="gray">
    Interactive code examples, versioned docs, and intelligent search.
    Keep your API documentation in sync with every release.
  </Hero.Description>
  <Hero.Actions>
    <Button size="2" highContrast>
      Import OpenAPI Spec
    </Button>
  </Hero.Actions>
</Hero.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Test 14: Responsive Layout (Stacked to Split) */}
      <Flex direction="column" gap="4">
        <Flex direction="column" gap="2">
          <Heading as="h2" size="6" weight="medium">
            Responsive Layout
          </Heading>
          <Text size="2" color="gray">
            Automatically switches from stacked (mobile) to split (desktop) at
            md breakpoint. Resize your browser window to see the layout change
            at 1024px.
          </Text>
        </Flex>
        <PreviewBlock background="none" height="40rem">
          <Hero.Root
            layout={{ initial: "stacked", md: "split" }}
            gap={{ initial: "6", md: "8" }}
            p="6"
          >
            <Flex direction="column" gap="6" style={{ flex: 1 }}>
              <Hero.Title align={{ initial: "center", md: "left" }} size="9">
                Launch your online store in minutes.
              </Hero.Title>
              <Hero.Description
                align={{ initial: "center", md: "left" }}
                size="4"
                color="gray"
              >
                Everything you need to sell online: customizable storefront,
                payment processing, inventory management, and marketing tools.
                No coding required.
              </Hero.Description>
              <Hero.Actions justify={{ initial: "center", md: "start" }}>
                <Button size="2" color="cyan" highContrast>
                  <HugeiconsIcon icon={Store04Icon} strokeWidth={1.75} />
                  Create Store
                </Button>
                <Button size="2" color="cyan" highContrast variant="soft">
                  <HugeiconsIcon icon={FileViewIcon} strokeWidth={1.75} />
                  View Demo Store
                </Button>
              </Hero.Actions>
            </Flex>

            <Hero.Media position="right" style={{ flex: 1 }}>
              <Image
                height="30rem"
                src="https://images.unsplash.com/photo-1737279722208-e6779e8b7ba2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8aVVJc25WdGpCMFl8fGVufDB8fHx8fA%3D%3D"
                alt="Abstract oil painting"
              />
            </Hero.Media>
          </Hero.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<Hero.Root
  layout={{ initial: "stacked", md: "split" }}
  gap={{ initial: "6", md: "8" }}
  p="6"
>
  <Flex direction="column" gap="6" style={{ flex: 1 }}>
    <Hero.Title
      align={{ initial: "center", md: "left" }}
      size="9"
    >
      Launch your online store in minutes.
    </Hero.Title>
    <Hero.Description
      align={{ initial: "center", md: "left" }}
      size="4"
      color="gray"
    >
      Everything you need to sell online: customizable storefront,
      payment processing, inventory management, and marketing tools.
      No coding required.
    </Hero.Description>
    <Hero.Actions justify={{ initial: "center", md: "start" }}>
      <Button size="2" color="cyan" highContrast>
        <HugeiconsIcon icon={Store04Icon} strokeWidth={1.75} />
        Create Store
      </Button>
      <Button size="2" color="cyan" highContrast variant="soft">
        <HugeiconsIcon icon={FileViewIcon} strokeWidth={1.75} />
        View Demo Store
      </Button>
    </Hero.Actions>
  </Flex>

  <Hero.Media position="right" style={{ flex: 1 }}>
    <Image
      height="30rem"
      src="https://images.unsplash.com/photo-1737279722208-e6779e8b7ba2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8aVVJc25WdGpCMFl8fGVufDB8fHx8fA%3D%3D"
      alt="Abstract oil painting"
    />
  </Hero.Media>
</Hero.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>
    </Flex>
  );
}
