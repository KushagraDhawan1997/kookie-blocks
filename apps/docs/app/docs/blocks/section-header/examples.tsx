"use client";

import * as React from "react";
import {
  SectionHeader,
  PreviewBlock,
  CodeBlock,
} from "@kushagradhawan/kookie-blocks";
import {
  Flex,
  Button,
  Tabs,
  IconButton,
  Separator,
} from "@kushagradhawan/kookie-ui";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Add01Icon,
  UserAdd01Icon,
  Settings01Icon,
  Download01Icon,
  Upload01Icon,
  FilterIcon,
  MoreHorizontalIcon,
  Share01Icon,
  AnalyticsUpIcon,
  Calendar01Icon,
  FolderOpenIcon,
  ChartLineData01Icon,
  Target01Icon,
} from "@hugeicons/core-free-icons";

export function SectionHeaderExamples() {
  return (
    <Flex direction="column" gap="9">
      {/* Example 1: Basic Section Header - dogfooding SectionHeader for the example header! */}
      <Flex direction="column" gap="4">
        <SectionHeader.Root>
          <SectionHeader.Content>
            <SectionHeader.Title>Basic</SectionHeader.Title>
            <SectionHeader.Description>
              Default inline layout with title and single action
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock background="none">
          <SectionHeader.Root width="100%" p="4">
            <SectionHeader.Content>
              <SectionHeader.Title>Projects</SectionHeader.Title>
            </SectionHeader.Content>
            <SectionHeader.Actions>
              <Button size="2" highContrast>
                <HugeiconsIcon icon={Add01Icon} strokeWidth={1.75} />
                New Project
              </Button>
            </SectionHeader.Actions>
          </SectionHeader.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<SectionHeader.Root>
  <SectionHeader.Content>
    <SectionHeader.Title>Projects</SectionHeader.Title>
  </SectionHeader.Content>
  <SectionHeader.Actions>
    <Button size="2" highContrast>
      <HugeiconsIcon icon={Add01Icon} strokeWidth={1.75} />
      New Project
    </Button>
  </SectionHeader.Actions>
</SectionHeader.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Example 2: With Description */}
      <Flex direction="column" gap="4">
        <SectionHeader.Root>
          <SectionHeader.Content>
            <SectionHeader.Title>Description</SectionHeader.Title>
            <SectionHeader.Description>
              Add context with supporting text below the title
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock background="none">
          <SectionHeader.Root width="100%" p="4">
            <SectionHeader.Content>
              <SectionHeader.Title>Team Members</SectionHeader.Title>
              <SectionHeader.Description>
                Invite and manage team members across your organization
              </SectionHeader.Description>
            </SectionHeader.Content>
            <SectionHeader.Actions>
              <Button size="2" highContrast>
                <HugeiconsIcon icon={UserAdd01Icon} strokeWidth={1.75} />
                Invite Member
              </Button>
            </SectionHeader.Actions>
          </SectionHeader.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<SectionHeader.Root>
  <SectionHeader.Content>
    <SectionHeader.Title>Team Members</SectionHeader.Title>
    <SectionHeader.Description>
      Invite and manage team members across your organization
    </SectionHeader.Description>
  </SectionHeader.Content>
  <SectionHeader.Actions>
    <Button size="2" highContrast>
      <HugeiconsIcon icon={UserAdd01Icon} strokeWidth={1.75} />
      Invite Member
    </Button>
  </SectionHeader.Actions>
</SectionHeader.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Example 3: With Separator */}
      <Flex direction="column" gap="4">
        <SectionHeader.Root>
          <SectionHeader.Content>
            <SectionHeader.Title>Separator</SectionHeader.Title>
            <SectionHeader.Description>
              Built-in separator for visual division when not using tabs
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock background="none">
          <SectionHeader.Root width="100%" p="4" separator>
            <SectionHeader.Content>
              <SectionHeader.Title>Settings</SectionHeader.Title>
              <SectionHeader.Description>
                Configure your workspace preferences
              </SectionHeader.Description>
            </SectionHeader.Content>
            <SectionHeader.Actions>
              <Button size="2" variant="soft" highContrast>
                Reset
              </Button>
              <Button size="2" highContrast>
                <HugeiconsIcon icon={Settings01Icon} strokeWidth={1.75} />
                Save Changes
              </Button>
            </SectionHeader.Actions>
          </SectionHeader.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<SectionHeader.Root separator>
  <SectionHeader.Content>
    <SectionHeader.Title>Settings</SectionHeader.Title>
    <SectionHeader.Description>
      Configure your workspace preferences
    </SectionHeader.Description>
  </SectionHeader.Content>
  <SectionHeader.Actions>
    <Button size="2" variant="soft" highContrast>
      Reset
    </Button>
    <Button size="2" highContrast>
      <HugeiconsIcon icon={Settings01Icon} strokeWidth={1.75} />
      Save Changes
    </Button>
  </SectionHeader.Actions>
</SectionHeader.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Example 4: With Tabs */}
      <Flex direction="column" gap="4">
        <SectionHeader.Root>
          <SectionHeader.Content>
            <SectionHeader.Title>Tabs</SectionHeader.Title>
            <SectionHeader.Description>
              Tabs provide built-in separator, no need for separator prop
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock background="none">
          <SectionHeader.Root width="100%" p="4">
            <SectionHeader.Content>
              <SectionHeader.Title>Analytics</SectionHeader.Title>
              <SectionHeader.Description>
                Track performance and engagement metrics
              </SectionHeader.Description>
            </SectionHeader.Content>
            <SectionHeader.Actions>
              <Button size="2" variant="soft" highContrast>
                <HugeiconsIcon icon={Download01Icon} strokeWidth={1.75} />
                Export
              </Button>
            </SectionHeader.Actions>
            <SectionHeader.Tabs>
              <Tabs.Root defaultValue="overview" style={{ width: "100%" }}>
                <Tabs.List>
                  <Tabs.Trigger value="overview">
                    <HugeiconsIcon icon={AnalyticsUpIcon} strokeWidth={1.75} />
                    Overview
                  </Tabs.Trigger>
                  <Tabs.Trigger value="traffic">
                    <HugeiconsIcon icon={ChartLineData01Icon} strokeWidth={1.75} />
                    Traffic
                  </Tabs.Trigger>
                  <Tabs.Trigger value="conversions">
                    <HugeiconsIcon icon={Target01Icon} strokeWidth={1.75} />
                    Conversions
                  </Tabs.Trigger>
                </Tabs.List>
              </Tabs.Root>
            </SectionHeader.Tabs>
          </SectionHeader.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<SectionHeader.Root>
  <SectionHeader.Content>
    <SectionHeader.Title>Analytics</SectionHeader.Title>
    <SectionHeader.Description>
      Track performance and engagement metrics
    </SectionHeader.Description>
  </SectionHeader.Content>
  <SectionHeader.Actions>
    <Button size="2" variant="soft" highContrast>
      <HugeiconsIcon icon={Download01Icon} strokeWidth={1.75} />
      Export
    </Button>
  </SectionHeader.Actions>
  <SectionHeader.Tabs>
    <Tabs.Root defaultValue="overview" style={{ width: "100%" }}>
      <Tabs.List>
        <Tabs.Trigger value="overview">
          <HugeiconsIcon icon={AnalyticsUpIcon} strokeWidth={1.75} />
          Overview
        </Tabs.Trigger>
        <Tabs.Trigger value="traffic">
          <HugeiconsIcon icon={ChartLineData01Icon} strokeWidth={1.75} />
          Traffic
        </Tabs.Trigger>
        <Tabs.Trigger value="conversions">
          <HugeiconsIcon icon={Target01Icon} strokeWidth={1.75} />
          Conversions
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  </SectionHeader.Tabs>
</SectionHeader.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Example 5: Stacked Layout */}
      <Flex direction="column" gap="4">
        <SectionHeader.Root>
          <SectionHeader.Content>
            <SectionHeader.Title>Stacked</SectionHeader.Title>
            <SectionHeader.Description>
              Vertical layout for mobile or narrow containers
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock background="none">
          <SectionHeader.Root width="100%" p="4" layout="stacked" separator>
            <SectionHeader.Content>
              <SectionHeader.Title>Billing</SectionHeader.Title>
              <SectionHeader.Description>
                Manage your subscription and payment methods
              </SectionHeader.Description>
            </SectionHeader.Content>
            <SectionHeader.Actions>
              <Button size="2" highContrast>
                Upgrade Plan
              </Button>
            </SectionHeader.Actions>
          </SectionHeader.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<SectionHeader.Root layout="stacked" separator>
  <SectionHeader.Content>
    <SectionHeader.Title>Billing</SectionHeader.Title>
    <SectionHeader.Description>
      Manage your subscription and payment methods
    </SectionHeader.Description>
  </SectionHeader.Content>
  <SectionHeader.Actions>
    <Button size="2" highContrast>
      Upgrade Plan
    </Button>
  </SectionHeader.Actions>
</SectionHeader.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Example 6: Center Aligned */}
      <Flex direction="column" gap="4">
        <SectionHeader.Root>
          <SectionHeader.Content>
            <SectionHeader.Title>Center Aligned</SectionHeader.Title>
            <SectionHeader.Description>
              Center content for hero-like section headers
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock background="none">
          <SectionHeader.Root
            width="100%"
            p="4"
            layout="stacked"
            align="center"
            separator
          >
            <SectionHeader.Content align="center">
              <SectionHeader.Title align="center">
                Welcome to Your Dashboard
              </SectionHeader.Title>
              <SectionHeader.Description align="center">
                Get started by creating your first project or exploring the
                documentation
              </SectionHeader.Description>
            </SectionHeader.Content>
            <SectionHeader.Actions>
              <Button size="2" variant="soft" highContrast>
                View Docs
              </Button>
              <Button size="2" highContrast>
                <HugeiconsIcon icon={Add01Icon} strokeWidth={1.75} />
                Create Project
              </Button>
            </SectionHeader.Actions>
          </SectionHeader.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<SectionHeader.Root layout="stacked" align="center" separator>
  <SectionHeader.Content align="center">
    <SectionHeader.Title align="center">
      Welcome to Your Dashboard
    </SectionHeader.Title>
    <SectionHeader.Description align="center">
      Get started by creating your first project or exploring the documentation
    </SectionHeader.Description>
  </SectionHeader.Content>
  <SectionHeader.Actions>
    <Button size="2" variant="soft" highContrast>
      View Docs
    </Button>
    <Button size="2" highContrast>
      <HugeiconsIcon icon={Add01Icon} strokeWidth={1.75} />
      Create Project
    </Button>
  </SectionHeader.Actions>
</SectionHeader.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Example 7: Responsive Layout */}
      <Flex direction="column" gap="4">
        <SectionHeader.Root>
          <SectionHeader.Content>
            <SectionHeader.Title>Responsive</SectionHeader.Title>
            <SectionHeader.Description>
              Stacked on mobile, inline on desktop. Resize to see the change at
              md breakpoint.
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock background="none">
          <SectionHeader.Root
            width="100%"
            p="4"
            layout={{ initial: "stacked", md: "inline" }}
            separator
          >
            <SectionHeader.Content>
              <SectionHeader.Title>Integrations</SectionHeader.Title>
              <SectionHeader.Description>
                Connect your favorite tools and services
              </SectionHeader.Description>
            </SectionHeader.Content>
            <SectionHeader.Actions>
              <Button size="2" highContrast>
                Browse Integrations
              </Button>
            </SectionHeader.Actions>
          </SectionHeader.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<SectionHeader.Root layout={{ initial: "stacked", md: "inline" }} separator>
  <SectionHeader.Content>
    <SectionHeader.Title>Integrations</SectionHeader.Title>
    <SectionHeader.Description>
      Connect your favorite tools and services
    </SectionHeader.Description>
  </SectionHeader.Content>
  <SectionHeader.Actions>
    <Button size="2" highContrast>
      Browse Integrations
    </Button>
  </SectionHeader.Actions>
</SectionHeader.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Example 8: Multiple Actions */}
      <Flex direction="column" gap="4">
        <SectionHeader.Root>
          <SectionHeader.Content>
            <SectionHeader.Title>Multiple Actions</SectionHeader.Title>
            <SectionHeader.Description>
              Multiple buttons and icon buttons in the actions slot
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock background="none">
          <SectionHeader.Root width="100%" p="4" separator>
            <SectionHeader.Content>
              <SectionHeader.Title>Documents</SectionHeader.Title>
              <SectionHeader.Description>
                Manage and organize your files
              </SectionHeader.Description>
            </SectionHeader.Content>
            <SectionHeader.Actions>
              <IconButton size="2" variant="soft" highContrast>
                <HugeiconsIcon icon={FilterIcon} strokeWidth={1.75} />
              </IconButton>
              <Button size="2" variant="soft" highContrast>
                <HugeiconsIcon icon={Download01Icon} strokeWidth={1.75} />
                Import
              </Button>
              <Button size="2" highContrast>
                <HugeiconsIcon icon={Upload01Icon} strokeWidth={1.75} />
                Upload
              </Button>
            </SectionHeader.Actions>
          </SectionHeader.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<SectionHeader.Root separator>
  <SectionHeader.Content>
    <SectionHeader.Title>Documents</SectionHeader.Title>
    <SectionHeader.Description>
      Manage and organize your files
    </SectionHeader.Description>
  </SectionHeader.Content>
  <SectionHeader.Actions>
    <IconButton size="2" variant="soft" highContrast>
      <HugeiconsIcon icon={FilterIcon} strokeWidth={1.75} />
    </IconButton>
    <Button size="2" variant="soft" highContrast>
      <HugeiconsIcon icon={Download01Icon} strokeWidth={1.75} />
      Import
    </Button>
    <Button size="2" highContrast>
      <HugeiconsIcon icon={Upload01Icon} strokeWidth={1.75} />
      Upload
    </Button>
  </SectionHeader.Actions>
</SectionHeader.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Example 9: Title Only */}
      <Flex direction="column" gap="4">
        <SectionHeader.Root>
          <SectionHeader.Content>
            <SectionHeader.Title>Title Only</SectionHeader.Title>
            <SectionHeader.Description>
              Minimal header with just a title
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock background="none">
          <SectionHeader.Root width="100%" p="4" separator>
            <SectionHeader.Content>
              <SectionHeader.Title>Recent Activity</SectionHeader.Title>
            </SectionHeader.Content>
          </SectionHeader.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<SectionHeader.Root separator>
  <SectionHeader.Content>
    <SectionHeader.Title>Recent Activity</SectionHeader.Title>
  </SectionHeader.Content>
</SectionHeader.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Example 10: Custom Sizes */}
      <Flex direction="column" gap="4">
        <SectionHeader.Root>
          <SectionHeader.Content>
            <SectionHeader.Title>Sizes</SectionHeader.Title>
            <SectionHeader.Description>
              Adjust title and description sizes for different contexts
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock background="none">
          <SectionHeader.Root width="100%" p="4" separator>
            <SectionHeader.Content>
              <SectionHeader.Title size="8">
                Dashboard Overview
              </SectionHeader.Title>
              <SectionHeader.Description size="3">
                View key metrics and performance indicators for your
                organization
              </SectionHeader.Description>
            </SectionHeader.Content>
            <SectionHeader.Actions>
              <Button size="2" variant="soft" highContrast>
                <HugeiconsIcon icon={Calendar01Icon} strokeWidth={1.75} />
                Last 30 days
              </Button>
              <Button size="2" highContrast>
                <HugeiconsIcon icon={Share01Icon} strokeWidth={1.75} />
                Share
              </Button>
            </SectionHeader.Actions>
          </SectionHeader.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<SectionHeader.Root separator>
  <SectionHeader.Content>
    <SectionHeader.Title size="8">Dashboard Overview</SectionHeader.Title>
    <SectionHeader.Description size="3">
      View key metrics and performance indicators for your organization
    </SectionHeader.Description>
  </SectionHeader.Content>
  <SectionHeader.Actions>
    <Button size="2" variant="soft" highContrast>
      <HugeiconsIcon icon={Calendar01Icon} strokeWidth={1.75} />
      Last 30 days
    </Button>
    <Button size="2" highContrast>
      <HugeiconsIcon icon={Share01Icon} strokeWidth={1.75} />
      Share
    </Button>
  </SectionHeader.Actions>
</SectionHeader.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Example 11: Actions with Dropdown */}
      <Flex direction="column" gap="4">
        <SectionHeader.Root>
          <SectionHeader.Content>
            <SectionHeader.Title>More Menu</SectionHeader.Title>
            <SectionHeader.Description>
              Combine primary actions with a more menu for secondary actions
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock background="none">
          <SectionHeader.Root width="100%" p="4" separator>
            <SectionHeader.Content>
              <SectionHeader.Title>Files</SectionHeader.Title>
              <SectionHeader.Description>
                Browse and manage your uploaded files
              </SectionHeader.Description>
            </SectionHeader.Content>
            <SectionHeader.Actions>
              <Button size="2" highContrast>
                <HugeiconsIcon icon={FolderOpenIcon} strokeWidth={1.75} />
                New Folder
              </Button>
              <IconButton size="2" variant="soft" highContrast>
                <HugeiconsIcon icon={MoreHorizontalIcon} strokeWidth={1.75} />
              </IconButton>
            </SectionHeader.Actions>
          </SectionHeader.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<SectionHeader.Root separator>
  <SectionHeader.Content>
    <SectionHeader.Title>Files</SectionHeader.Title>
    <SectionHeader.Description>
      Browse and manage your uploaded files
    </SectionHeader.Description>
  </SectionHeader.Content>
  <SectionHeader.Actions>
    <Button size="2" highContrast>
      <HugeiconsIcon icon={FolderOpenIcon} strokeWidth={1.75} />
      New Folder
    </Button>
    <IconButton size="2" variant="soft" highContrast>
      <HugeiconsIcon icon={MoreHorizontalIcon} strokeWidth={1.75} />
    </IconButton>
  </SectionHeader.Actions>
</SectionHeader.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>
    </Flex>
  );
}
