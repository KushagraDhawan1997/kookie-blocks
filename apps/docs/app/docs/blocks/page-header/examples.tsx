"use client";

import * as React from "react";
import {
  PageHeader,
  SectionHeader,
  PreviewBlock,
  CodeBlock,
} from "@kushagradhawan/kookie-blocks";
import { Flex, Button, Tabs, Text, Separator } from "@kushagradhawan/kookie-ui";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Copy01Icon,
  Mail01Icon,
  Call02Icon,
  Calendar01Icon,
  Clock01Icon,
  UserMultiple02Icon,
  BookOpen01Icon,
  EyeIcon,
  CodeIcon,
  Settings01Icon,
  Share01Icon,
  MoreHorizontalIcon,
} from "@hugeicons/core-free-icons";

export function PageHeaderExamples() {
  return (
    <Flex direction="column" gap="9">
      {/* Example 1: Minimal */}
      <Flex direction="column" gap="4">
        <SectionHeader.Root>
          <SectionHeader.Content>
            <SectionHeader.Title>Minimal</SectionHeader.Title>
            <SectionHeader.Description>
              Simple page header with just a title for settings or utility pages
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock background="none">
          <PageHeader.Root width="100%" p="4" separator>
            <PageHeader.Main>
              <PageHeader.Content>
                <PageHeader.Title>Settings</PageHeader.Title>
              </PageHeader.Content>
            </PageHeader.Main>
          </PageHeader.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<PageHeader.Root separator>
  <PageHeader.Main>
    <PageHeader.Content>
      <PageHeader.Title>Settings</PageHeader.Title>
    </PageHeader.Content>
  </PageHeader.Main>
</PageHeader.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Example 2: Dashboard */}
      <Flex direction="column" gap="4">
        <SectionHeader.Root>
          <SectionHeader.Content>
            <SectionHeader.Title>Dashboard</SectionHeader.Title>
            <SectionHeader.Description>
              Title with description and primary action for main app pages
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock background="none">
          <PageHeader.Root width="100%" p="4">
            <PageHeader.Main>
              <PageHeader.Content>
                <PageHeader.Title>Projects</PageHeader.Title>
                <PageHeader.Description>
                  Manage and organize your projects
                </PageHeader.Description>
              </PageHeader.Content>
              <PageHeader.Actions>
                <Button size="2" highContrast>
                  New Project
                </Button>
              </PageHeader.Actions>
            </PageHeader.Main>
          </PageHeader.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<PageHeader.Root>
  <PageHeader.Main>
    <PageHeader.Content>
      <PageHeader.Title>Projects</PageHeader.Title>
      <PageHeader.Description>
        Manage and organize your projects
      </PageHeader.Description>
    </PageHeader.Content>
    <PageHeader.Actions>
      <Button size="2" highContrast>
        New Project
      </Button>
    </PageHeader.Actions>
  </PageHeader.Main>
</PageHeader.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Example 3: Workspace */}
      <Flex direction="column" gap="4">
        <SectionHeader.Root>
          <SectionHeader.Content>
            <SectionHeader.Title>Workspace</SectionHeader.Title>
            <SectionHeader.Description>
              Logo with meta information for branded contexts like teams or orgs
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock background="none">
          <PageHeader.Root width="100%" p="4">
            <PageHeader.Main>
              <PageHeader.Media type="logo" fallback="K" size="5" />
              <PageHeader.Content gap="1">
                <PageHeader.Meta>
                  <Text size="2" color="gray">
                    12 members
                  </Text>
                </PageHeader.Meta>
                <PageHeader.Title size="6">Kookie Design</PageHeader.Title>
              </PageHeader.Content>
              <PageHeader.Actions>
                <Button size="2" variant="soft" color="gray" highContrast>
                  <HugeiconsIcon icon={Settings01Icon} strokeWidth={1.75} />
                  Settings
                </Button>
                <Button size="2" variant="soft" color="gray" highContrast>
                  <HugeiconsIcon icon={UserMultiple02Icon} strokeWidth={1.75} />
                  Invite
                </Button>
              </PageHeader.Actions>
            </PageHeader.Main>
          </PageHeader.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<PageHeader.Root>
  <PageHeader.Main>
    <PageHeader.Media
      type="logo"
      fallback="K"
      size="5"
    />
    <PageHeader.Content gap="1">
      <PageHeader.Meta>
        <Text size="2" color="gray">12 members</Text>
      </PageHeader.Meta>
      <PageHeader.Title size="6">Kookie Design</PageHeader.Title>
    </PageHeader.Content>
    <PageHeader.Actions>
      <Button
        size="2"
        variant="soft"
        color="gray"
        highContrast
      >
        Settings
      </Button>
      <Button
        size="2"
        variant="soft"
        color="gray"
        highContrast
      >
        Invite
      </Button>
    </PageHeader.Actions>
  </PageHeader.Main>
</PageHeader.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Example 4: Team Member */}
      <Flex direction="column" gap="4">
        <SectionHeader.Root>
          <SectionHeader.Content>
            <SectionHeader.Title>Team Member</SectionHeader.Title>
            <SectionHeader.Description>
              Avatar with stacked layout for people-focused pages
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock background="none">
          <PageHeader.Root width="100%" p="4">
            <PageHeader.Main layout="inline" align="center" gap="5">
              <Flex gap="4" align="center">
                <PageHeader.Media type="avatar" fallback="KD" size="5" />
                <PageHeader.Content gap="1">
                  <PageHeader.Title size="6">Kushagra Dhawan</PageHeader.Title>
                  <PageHeader.Description size="3">
                    Chief Treat Provider · New Delhi
                  </PageHeader.Description>
                </PageHeader.Content>
              </Flex>
              <PageHeader.Actions>
                <Button size="2" variant="outline" color="gray" highContrast>
                  <HugeiconsIcon icon={Mail01Icon} strokeWidth={1.75} />
                  Message
                </Button>
                <Button size="2" highContrast>
                  View Profile
                </Button>
              </PageHeader.Actions>
            </PageHeader.Main>
          </PageHeader.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<PageHeader.Root>
  <PageHeader.Main
    layout="inline"
    align="centerS"
    gap="5"
  >
    <Flex gap="4" align="center">
      <PageHeader.Media
        type="avatar"
        fallback="KD"
        size="5"
      />
      <PageHeader.Content gap="1">
        <PageHeader.Title size="6">Kushagra Dhawan</PageHeader.Title>
        <PageHeader.Description size="3">
          Chief Treat Provider · New Delhi
        </PageHeader.Description>
      </PageHeader.Content>
    </Flex>
    <PageHeader.Actions>
      <Button
        size="2"
        variant="outline"
        color="gray"
        highContrast
      >
        Message
      </Button>
      <Button size="2" highContrast>
        View Profile
      </Button>
    </PageHeader.Actions>
  </PageHeader.Main>
</PageHeader.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Example 5: Profile */}
      <Flex direction="column" gap="4">
        <SectionHeader.Root>
          <SectionHeader.Content>
            <SectionHeader.Title>Profile</SectionHeader.Title>
            <SectionHeader.Description>
              Banner with overlapping avatar for social or community pages
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock background="none">
          <PageHeader.Root width="100%" gap="0">
            <PageHeader.Banner
              src="/sample-banner.webp"
              alt="Abstract gradient"
              height="160px"
            />
            <PageHeader.Main px="4" pb="4">
              <PageHeader.Media
                type="avatar"
                fallback="QL"
                size="8"
                overlap
                src="/sample-profile.jpg"
              />
              <PageHeader.Content>
                <PageHeader.Title size="6">Queen Lukita</PageHeader.Title>
              </PageHeader.Content>
              <PageHeader.Actions>
                <Button size="2" variant="outline" color="gray" highContrast>
                  <HugeiconsIcon icon={Mail01Icon} strokeWidth={1.75} />
                  Message
                </Button>
                <Button size="2" variant="outline" color="gray" highContrast>
                  <HugeiconsIcon icon={Call02Icon} strokeWidth={1.75} />
                  Call
                </Button>
              </PageHeader.Actions>
            </PageHeader.Main>
          </PageHeader.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<PageHeader.Root gap="0">
  <PageHeader.Banner
    src="/banner.jpg"
    alt="Abstract gradient"
    height="160px"
  />
  <PageHeader.Main px="4" pb="4">
    <PageHeader.Media
      type="avatar"
      fallback="QL"
      size="8"
      overlap
    />
    <PageHeader.Content>
      <PageHeader.Title size="6">Queen Lukita</PageHeader.Title>
    </PageHeader.Content>
    <PageHeader.Actions>
      <Button
        size="2"
        variant="outline"
        color="gray"
        highContrast
      >
        Message
      </Button>
      <Button
        size="2"
        variant="outline"
        color="gray"
        highContrast
      >
        Call
      </Button>
    </PageHeader.Actions>
  </PageHeader.Main>
</PageHeader.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Example 6: Article */}
      <Flex direction="column" gap="4">
        <SectionHeader.Root>
          <SectionHeader.Content>
            <SectionHeader.Title>Article</SectionHeader.Title>
            <SectionHeader.Description>
              Meta information with icons for blog posts or content pages
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock background="none">
          <PageHeader.Root width="100%" p="4">
            <PageHeader.Main>
              <PageHeader.Content>
                <PageHeader.Title size="7">
                  Building Accessible Design Systems
                </PageHeader.Title>
                <PageHeader.Meta>
                  <Flex align="center" gap="1" flexShrink="0">
                    <HugeiconsIcon
                      icon={Calendar01Icon}
                      strokeWidth={1.75}
                      size={14}
                    />
                    <Text size="2" color="gray">
                      Dec 15, 2024
                    </Text>
                  </Flex>
                  <Flex align="center" gap="1" flexShrink="0">
                    <HugeiconsIcon
                      icon={Clock01Icon}
                      strokeWidth={1.75}
                      size={14}
                    />
                    <Text size="2" color="gray">
                      8 min read
                    </Text>
                  </Flex>
                </PageHeader.Meta>
              </PageHeader.Content>
              <PageHeader.Actions>
                <Button size="2" variant="ghost" color="gray" highContrast>
                  <HugeiconsIcon icon={Share01Icon} strokeWidth={1.75} />
                  Share
                </Button>
                <Button size="2" variant="ghost" color="gray" highContrast>
                  <HugeiconsIcon icon={MoreHorizontalIcon} strokeWidth={1.75} />
                </Button>
              </PageHeader.Actions>
            </PageHeader.Main>
          </PageHeader.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<PageHeader.Root>
  <PageHeader.Main>
    <PageHeader.Content>
      <PageHeader.Title size="7">
        Building Accessible Design Systems
      </PageHeader.Title>
      <PageHeader.Meta>
        <Flex align="center" gap="1" flexShrink="0">
          <Calendar01Icon size={14} />
          <Text size="2" color="gray">Dec 15, 2024</Text>
        </Flex>
        <Flex align="center" gap="1" flexShrink="0">
          <Clock01Icon size={14} />
          <Text size="2" color="gray">8 min read</Text>
        </Flex>
      </PageHeader.Meta>
    </PageHeader.Content>
    <PageHeader.Actions>
      <Button
        size="2"
        variant="ghost"
        color="gray"
        highContrast
      >
        Share
      </Button>
      <Button
        size="2"
        variant="ghost"
        color="gray"
        highContrast
      >
        <MoreHorizontalIcon />
      </Button>
    </PageHeader.Actions>
  </PageHeader.Main>
</PageHeader.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Example 7: Documentation with Tabs */}
      <Flex direction="column" gap="4">
        <SectionHeader.Root>
          <SectionHeader.Content>
            <SectionHeader.Title>Documentation</SectionHeader.Title>
            <SectionHeader.Description>
              Category meta with tabs for navigating between sections
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock background="none">
          <PageHeader.Root width="100%" p="4">
            <PageHeader.Main>
              <PageHeader.Content>
                <PageHeader.Meta>
                  <Text size="2" weight="medium">
                    Components
                  </Text>
                </PageHeader.Meta>
                <PageHeader.Title>Button</PageHeader.Title>
                <PageHeader.Description>
                  A clickable button element for user interactions
                </PageHeader.Description>
              </PageHeader.Content>
              <PageHeader.Actions>
                <Button size="2" variant="ghost" color="gray" highContrast>
                  <HugeiconsIcon icon={Copy01Icon} strokeWidth={1.75} />
                  Copy page
                </Button>
              </PageHeader.Actions>
            </PageHeader.Main>
            <PageHeader.Tabs>
              <Tabs.Root defaultValue="docs">
                <Tabs.List>
                  <Tabs.Trigger value="docs">
                    <HugeiconsIcon icon={BookOpen01Icon} strokeWidth={1.75} />
                    Documentation
                  </Tabs.Trigger>
                  <Tabs.Trigger value="examples">
                    <HugeiconsIcon icon={EyeIcon} strokeWidth={1.75} />
                    Examples
                  </Tabs.Trigger>
                  <Tabs.Trigger value="api">
                    <HugeiconsIcon icon={CodeIcon} strokeWidth={1.75} />
                    API
                  </Tabs.Trigger>
                </Tabs.List>
              </Tabs.Root>
            </PageHeader.Tabs>
          </PageHeader.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<PageHeader.Root>
  <PageHeader.Main>
    <PageHeader.Content>
      <PageHeader.Meta>
        <Text size="2" weight="medium">Components</Text>
      </PageHeader.Meta>
      <PageHeader.Title>Button</PageHeader.Title>
      <PageHeader.Description>
        A clickable button element for user interactions
      </PageHeader.Description>
    </PageHeader.Content>
    <PageHeader.Actions>
      <Button
        size="2"
        variant="ghost"
        color="gray"
        highContrast
      >
        Copy page
      </Button>
    </PageHeader.Actions>
  </PageHeader.Main>
  <PageHeader.Tabs>
    <Tabs.Root defaultValue="docs">
      <Tabs.List>
        <Tabs.Trigger value="docs">
          Documentation
        </Tabs.Trigger>
        <Tabs.Trigger value="examples">
          Examples
        </Tabs.Trigger>
        <Tabs.Trigger value="api">
          API
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  </PageHeader.Tabs>
</PageHeader.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>
    </Flex>
  );
}
