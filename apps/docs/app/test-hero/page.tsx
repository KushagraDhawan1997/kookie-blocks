"use client";
import * as React from "react";
import { Hero } from "@kushagradhawan/kookie-blocks";
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
  Card,
  Text,
} from "@kushagradhawan/kookie-ui";

export default function Page() {
  return (
    <Section size="3">
      <Container size="4">
        <Flex direction="column" gap="9" py="9">
          {/* Page Header */}
          <Flex direction="column" gap="3" align="start">
            <Heading size="9" weight="medium">
              Hero Component
            </Heading>
            <Text size="4" color="gray">
              A comprehensive showcase of Hero variations and responsive
              behaviors.
            </Text>
          </Flex>

          <Separator size="4" />

          {/* Test 1: Basic Hero */}
          <Flex direction="column" gap="4">
            <Flex direction="column" gap="2">
              <Heading size="6" weight="medium">
                Basic Hero
              </Heading>
              <Text size="2" color="gray">
                Default centered layout with title and description only
              </Text>
            </Flex>
            <Card size="3" variant="outline">
              <Hero.Root>
                <Hero.Title>Build Something Amazing</Hero.Title>
                <Hero.Description color="gray">
                  The fastest way to ship your next project.
                </Hero.Description>
              </Hero.Root>
            </Card>
          </Flex>

          <Separator size="4" />

          {/* Test 2: Full Marketing Hero */}
          <Flex direction="column" gap="4">
            <Flex direction="column" gap="2">
              <Heading size="6" weight="medium">
                Marketing Hero
              </Heading>
              <Text size="2" color="gray">
                Complete hero with meta, title, description, and actions
              </Text>
            </Flex>
            <Card size="3" variant="outline">
              <Section size="2">
                <Container size="2">
                  <Hero.Root>
                    <Hero.Meta>
                      <Avatar
                        fallback="K"
                        size="2"
                        color="gray"
                        src="/kookie-logo.png"
                      />
                    </Hero.Meta>

                    <Hero.Title>
                      Pre-built blocks for rapid development.
                    </Hero.Title>

                    <Hero.Description color="gray">
                      An open-source collection of reusable blocks built on{" "}
                      <Link href="https://hellokookie.com">Kookie UI</Link>.
                      Ship faster with composable, accessible components.
                    </Hero.Description>

                    <Hero.Actions>
                      <Button variant="solid" size="2" highContrast>
                        Get Started
                      </Button>
                      <Button variant="soft" size="2">
                        Learn More
                      </Button>
                    </Hero.Actions>
                  </Hero.Root>
                </Container>
              </Section>
            </Card>
          </Flex>

          <Separator size="4" />

          {/* Test 3: Left-Aligned Hero */}
          <Flex direction="column" gap="4">
            <Flex direction="column" gap="2">
              <Heading size="6" weight="medium">
                Left-Aligned Hero
              </Heading>
              <Text size="2" color="gray">
                Content aligned to the start for editorial layouts
              </Text>
            </Flex>
            <Card size="3" variant="outline">
              <Hero.Root align="start">
                <Hero.Title align="left">Transform Your Workflow</Hero.Title>
                <Hero.Description align="left" color="gray">
                  Tools designed for modern teams.
                </Hero.Description>
                <Hero.Actions>
                  <Button size="3">Start Free Trial</Button>
                </Hero.Actions>
              </Hero.Root>
            </Card>
          </Flex>

          <Separator size="4" />

          {/* Test 4: Right-Aligned Hero */}
          <Flex direction="column" gap="4">
            <Flex direction="column" gap="2">
              <Heading size="6" weight="medium">
                Right-Aligned Hero
              </Heading>
              <Text size="2" color="gray">
                Content aligned to the end with right-aligned text
              </Text>
            </Flex>
            <Card size="3" variant="outline">
              <Hero.Root align="end">
                <Hero.Title align="right">Ship Faster, Build Better</Hero.Title>
                <Hero.Description align="right" color="gray">
                  Everything you need in one place.
                </Hero.Description>
                <Hero.Actions>
                  <Button size="2" variant="solid">
                    Get Started
                  </Button>
                </Hero.Actions>
              </Hero.Root>
            </Card>
          </Flex>

          <Separator size="4" />

          {/* Test 5: With Badge Meta */}
          <Flex direction="column" gap="4">
            <Flex direction="column" gap="2">
              <Heading size="6" weight="medium">
                Hero with Badge
              </Heading>
              <Text size="2" color="gray">
                Meta section with badge for announcements or status
              </Text>
            </Flex>
            <Card size="3" variant="outline">
              <Hero.Root>
                <Hero.Meta>
                  <Badge size="2" color="blue">
                    New Release
                  </Badge>
                </Hero.Meta>
                <Hero.Title>Version 2.0 is Here</Hero.Title>
                <Hero.Description color="gray">
                  Faster, more powerful, and easier to use.
                </Hero.Description>
                <Hero.Actions>
                  <Button>Upgrade Now</Button>
                </Hero.Actions>
              </Hero.Root>
            </Card>
          </Flex>

          <Separator size="4" />

          {/* Test 6: Custom Spacing (Large Gap) */}
          <Flex direction="column" gap="4">
            <Flex direction="column" gap="2">
              <Heading size="6" weight="medium">
                Large Spacing
              </Heading>
              <Text size="2" color="gray">
                Generous spacing (gap=8) for premium feel
              </Text>
            </Flex>
            <Card size="3" variant="outline">
              <Hero.Root gap="8">
                <Hero.Title size="9">Premium Experience</Hero.Title>
                <Hero.Description size="5" color="gray">
                  Enterprise-grade solutions.
                </Hero.Description>
                <Hero.Actions gap="3">
                  <Button size="3">Contact Sales</Button>
                  <Button size="3" variant="soft">
                    View Demo
                  </Button>
                </Hero.Actions>
              </Hero.Root>
            </Card>
          </Flex>

          <Separator size="4" />

          {/* Test 7: Custom Spacing (Small Gap) */}
          <Flex direction="column" gap="4">
            <Flex direction="column" gap="2">
              <Heading size="6" weight="medium">
                Tight Spacing
              </Heading>
              <Text size="2" color="gray">
                Compact layout (gap=3) for smaller sections
              </Text>
            </Flex>
            <Card size="3" variant="outline">
              <Hero.Root gap="3">
                <Hero.Title size="7">Compact Layout</Hero.Title>
                <Hero.Description size="3" color="gray">
                  Perfect for smaller sections.
                </Hero.Description>
                <Hero.Actions>
                  <Button size="1">Small CTA</Button>
                </Hero.Actions>
              </Hero.Root>
            </Card>
          </Flex>

          <Separator size="4" />

          {/* Test 8: Split Layout */}
          <Flex direction="column" gap="4">
            <Flex direction="column" gap="2">
              <Heading size="6" weight="medium">
                Split Layout
              </Heading>
              <Text size="2" color="gray">
                Horizontal layout with content and media side-by-side
              </Text>
            </Flex>
            <Card size="3" variant="outline">
              <Hero.Root layout="split" gap="8" p="6">
                <Flex direction="column" gap="4" style={{ flex: 1 }}>
                  <Hero.Title align="left" size="8">
                    Ship Faster
                  </Hero.Title>
                  <Hero.Description align="left" color="gray">
                    Pre-built components that save hours of development time.
                  </Hero.Description>
                  <Hero.Actions>
                    <Button>Get Started</Button>
                  </Hero.Actions>
                </Flex>

                <Hero.Media position="right" style={{ flex: 1 }}>
                  <Flex
                    width="100%"
                    height="300px"
                    align="center"
                    justify="center"
                    style={{
                      background: "var(--gray-3)",
                      borderRadius: "var(--radius-3)",
                    }}
                  >
                    <Heading size="4" color="gray">
                      Image Placeholder
                    </Heading>
                  </Flex>
                </Hero.Media>
              </Hero.Root>
            </Card>
          </Flex>

          <Separator size="4" />

          {/* Test 9: Multiple Meta Items */}
          <Flex direction="column" gap="4">
            <Flex direction="column" gap="2">
              <Heading size="6" weight="medium">
                Multiple Meta Items
              </Heading>
              <Text size="2" color="gray">
                Combining avatar and multiple badges in meta section
              </Text>
            </Flex>
            <Card size="3" variant="outline">
              <Hero.Root>
                <Hero.Meta gap="3">
                  <Avatar fallback="K" size="1" color="gray" />
                  <Badge size="1" color="green">
                    Verified
                  </Badge>
                  <Badge size="1" color="blue">
                    New
                  </Badge>
                </Hero.Meta>
                <Hero.Title>Multi-Meta Hero</Hero.Title>
                <Hero.Description color="gray">
                  Multiple badges and logos in the meta section.
                </Hero.Description>
              </Hero.Root>
            </Card>
          </Flex>

          <Separator size="4" />

          {/* Test 10: Vertical Action Buttons */}
          <Flex direction="column" gap="4">
            <Flex direction="column" gap="2">
              <Heading size="6" weight="medium">
                Vertical Actions
              </Heading>
              <Text size="2" color="gray">
                Buttons stacked vertically for mobile-first layouts
              </Text>
            </Flex>
            <Card size="3" variant="outline">
              <Hero.Root>
                <Hero.Title>Vertical Buttons</Hero.Title>
                <Hero.Description color="gray">
                  Actions stacked vertically for mobile-first design.
                </Hero.Description>
                <Hero.Actions direction="column">
                  <Button size="2" style={{ width: "100%" }}>
                    Primary Action
                  </Button>
                  <Button size="2" variant="soft" style={{ width: "100%" }}>
                    Secondary Action
                  </Button>
                </Hero.Actions>
              </Hero.Root>
            </Card>
          </Flex>

          <Separator size="4" />

          {/* Test 11: Responsive Test */}
          <Flex direction="column" gap="4">
            <Flex direction="column" gap="2">
              <Heading size="6" weight="medium">
                Responsive Sizing
              </Heading>
              <Text size="2" color="gray">
                Spacing and text sizes adapt based on breakpoints
              </Text>
            </Flex>
            <Card size="3" variant="outline">
              <Hero.Root
                gap={{ initial: "4", sm: "6", md: "8" }}
                p={{ initial: "4", sm: "6", md: "8" }}
              >
                <Hero.Meta>
                  <Avatar fallback="R" size="2" color="blue" />
                </Hero.Meta>
                <Hero.Title size={{ initial: "7", sm: "8", md: "9" }}>
                  Responsive Hero
                </Hero.Title>
                <Hero.Description
                  size={{ initial: "3", sm: "4", md: "5" }}
                  color="gray"
                >
                  This hero adapts spacing and sizing based on screen size.
                </Hero.Description>
                <Hero.Actions gap={{ initial: "2", md: "3" }}>
                  <Button size={{ initial: "1", sm: "2", md: "3" }}>
                    Responsive Button
                  </Button>
                </Hero.Actions>
              </Hero.Root>
            </Card>
          </Flex>

          <Separator size="4" />

          {/* Test 12: With Gradient Background */}
          <Flex direction="column" gap="4">
            <Flex direction="column" gap="2">
              <Heading size="6" weight="medium">
                Gradient Background
              </Heading>
              <Text size="2" color="gray">
                Hero on a subtle gradient background for visual depth
              </Text>
            </Flex>
            <Card
              size="3"
              variant="outline"
              style={{
                background:
                  "linear-gradient(135deg, var(--blue-2) 0%, var(--violet-2) 100%)",
              }}
            >
              <Hero.Root p="8">
                <Hero.Meta>
                  <Badge size="2" color="violet">
                    Featured
                  </Badge>
                </Hero.Meta>
                <Hero.Title>Beautiful Gradient Hero</Hero.Title>
                <Hero.Description color="gray">
                  Subtle gradients add depth without overwhelming your content.
                </Hero.Description>
                <Hero.Actions>
                  <Button size="2" variant="solid" highContrast>
                    Explore
                  </Button>
                  <Button size="2" variant="soft">
                    Learn More
                  </Button>
                </Hero.Actions>
              </Hero.Root>
            </Card>
          </Flex>

          <Separator size="4" />

          {/* Test 13: With Background Pattern */}
          <Flex direction="column" gap="4">
            <Flex direction="column" gap="2">
              <Heading size="6" weight="medium">
                Background Pattern
              </Heading>
              <Text size="2" color="gray">
                Hero with dot pattern background for texture
              </Text>
            </Flex>
            <Card
              size="3"
              variant="outline"
              style={{
                backgroundImage:
                  "radial-gradient(circle, var(--gray-5) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
                backgroundColor: "var(--gray-1)",
              }}
            >
              <Hero.Root p="8">
                <Hero.Title>Textured Background</Hero.Title>
                <Hero.Description color="gray">
                  Dot patterns provide subtle texture and visual interest.
                </Hero.Description>
                <Hero.Actions>
                  <Button size="2" highContrast>
                    Get Started
                  </Button>
                </Hero.Actions>
              </Hero.Root>
            </Card>
          </Flex>

          <Separator size="4" />

          {/* Test 14: Responsive Layout (Stacked to Split) */}
          <Flex direction="column" gap="4">
            <Flex direction="column" gap="2">
              <Heading size="6" weight="medium">
                Responsive Layout
              </Heading>
              <Text size="2" color="gray">
                Automatically switches from stacked (mobile) to split (desktop)
                at md breakpoint. Resize your browser window to see the layout
                change at 1024px.
              </Text>
            </Flex>
            <Card size="3" variant="outline">
              <Hero.Root
                layout={{ initial: "stacked", md: "split" }}
                gap={{ initial: "6", md: "8" }}
                p="6"
              >
                <Flex direction="column" gap="4" style={{ flex: 1 }}>
                  <Hero.Title
                    align={{ initial: "center", md: "left" }}
                    size="8"
                  >
                    Adaptive Layout Hero
                  </Hero.Title>
                  <Hero.Description
                    align={{ initial: "center", md: "left" }}
                    size="3"
                    color="gray"
                  >
                    This hero demonstrates responsive layout behavior. On mobile
                    (below 1024px), content is stacked vertically with centered
                    text. On desktop (1024px+), it splits into a two-column
                    layout with left-aligned text.
                  </Hero.Description>
                  <Hero.Actions justify={{ initial: "center", md: "start" }}>
                    <Button size="2" highContrast>
                      Get Started
                    </Button>
                    <Button size="2" variant="soft">
                      Learn More
                    </Button>
                  </Hero.Actions>
                </Flex>

                <Hero.Media position="right" style={{ flex: 1 }}>
                  <Flex
                    direction="column"
                    width="100%"
                    height={{ initial: "200px", md: "300px" }}
                    align="center"
                    justify="center"
                    gap="3"
                    style={{
                      background: "var(--blue-3)",
                      borderRadius: "var(--radius-3)",
                    }}
                  >
                    <Heading size="5" color="blue">
                      Responsive Media
                    </Heading>
                    <Flex direction="column" gap="1" align="center">
                      <Badge size="1" color="blue" variant="soft">
                        200px high on mobile
                      </Badge>
                      <Badge size="1" color="blue" variant="soft">
                        300px high on desktop
                      </Badge>
                    </Flex>
                  </Flex>
                </Hero.Media>
              </Hero.Root>
            </Card>
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
}
