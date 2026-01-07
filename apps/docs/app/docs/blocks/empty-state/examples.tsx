"use client";

import * as React from "react";
import {
  EmptyState,
  SectionHeader,
  PreviewBlock,
  CodeBlock,
} from "@kushagradhawan/kookie-blocks";
import { Flex, Button, Separator } from "@kushagradhawan/kookie-ui";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Add01Icon,
  FolderOpenIcon,
  UserAdd01Icon,
  Search01Icon,
  FileAddIcon,
  Notification01Icon,
} from "@hugeicons/core-free-icons";

export function EmptyStateExamples() {
  return (
    <Flex direction="column" gap="9">
      {/* Example 1: Basic */}
      <Flex direction="column" gap="4">
        <SectionHeader.Root>
          <SectionHeader.Content>
            <SectionHeader.Title>Basic</SectionHeader.Title>
            <SectionHeader.Description>
              Minimal empty state with title, description, and action
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock background="none" height="12rem">
          <EmptyState.Root>
            <EmptyState.Content>
              <EmptyState.Title>No projects yet</EmptyState.Title>
              <EmptyState.Description>
                Create your first project to get started
              </EmptyState.Description>
            </EmptyState.Content>
            <EmptyState.Actions>
              <Button size="2" highContrast>
                <HugeiconsIcon icon={Add01Icon} strokeWidth={1.75} />
                Create Project
              </Button>
            </EmptyState.Actions>
          </EmptyState.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<EmptyState.Root>
  <EmptyState.Content>
    <EmptyState.Title>No projects yet</EmptyState.Title>
    <EmptyState.Description>
      Create your first project to get started
    </EmptyState.Description>
  </EmptyState.Content>
  <EmptyState.Actions>
    <Button size="2" highContrast>
      <HugeiconsIcon icon={Add01Icon} strokeWidth={1.75} />
      Create Project
    </Button>
  </EmptyState.Actions>
</EmptyState.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Example 2: With Icon */}
      <Flex direction="column" gap="4">
        <SectionHeader.Root>
          <SectionHeader.Content>
            <SectionHeader.Title>With Icon</SectionHeader.Title>
            <SectionHeader.Description>
              Add visual context with an icon or illustration
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock background="none" height="16rem">
          <EmptyState.Root>
            <EmptyState.Icon>
              <HugeiconsIcon icon={FolderOpenIcon} strokeWidth={1.25} />
            </EmptyState.Icon>
            <EmptyState.Content>
              <EmptyState.Title>No files</EmptyState.Title>
              <EmptyState.Description>
                Upload files to get started
              </EmptyState.Description>
            </EmptyState.Content>
            <EmptyState.Actions>
              <Button size="2" highContrast>
                <HugeiconsIcon icon={FileAddIcon} strokeWidth={1.75} />
                Upload Files
              </Button>
            </EmptyState.Actions>
          </EmptyState.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<EmptyState.Root>
  <EmptyState.Icon>
    <HugeiconsIcon icon={FolderOpenIcon} strokeWidth={1.25} />
  </EmptyState.Icon>
  <EmptyState.Content>
    <EmptyState.Title>No files</EmptyState.Title>
    <EmptyState.Description>
      Upload files to get started
    </EmptyState.Description>
  </EmptyState.Content>
  <EmptyState.Actions>
    <Button size="2" highContrast>
      <HugeiconsIcon icon={FileAddIcon} strokeWidth={1.75} />
      Upload Files
    </Button>
  </EmptyState.Actions>
</EmptyState.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Example 3: Multiple Actions */}
      <Flex direction="column" gap="4">
        <SectionHeader.Root>
          <SectionHeader.Content>
            <SectionHeader.Title>Multiple Actions</SectionHeader.Title>
            <SectionHeader.Description>
              Offer primary and secondary actions for flexibility
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock background="none" height="16rem">
          <EmptyState.Root>
            <EmptyState.Icon>
              <HugeiconsIcon icon={UserAdd01Icon} strokeWidth={1.25} />
            </EmptyState.Icon>
            <EmptyState.Content>
              <EmptyState.Title>No team members</EmptyState.Title>
              <EmptyState.Description>
                Invite colleagues to collaborate on projects
              </EmptyState.Description>
            </EmptyState.Content>
            <EmptyState.Actions>
              <Button size="2" variant="soft" color="gray" highContrast>
                Learn More
              </Button>
              <Button size="2" highContrast>
                <HugeiconsIcon icon={UserAdd01Icon} strokeWidth={1.75} />
                Invite Members
              </Button>
            </EmptyState.Actions>
          </EmptyState.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<EmptyState.Root>
  <EmptyState.Icon>
    <HugeiconsIcon icon={UserAdd01Icon} strokeWidth={1.25} />
  </EmptyState.Icon>
  <EmptyState.Content>
    <EmptyState.Title>No team members</EmptyState.Title>
    <EmptyState.Description>
      Invite colleagues to collaborate on projects
    </EmptyState.Description>
  </EmptyState.Content>
  <EmptyState.Actions>
    <Button size="2" variant="soft" color="gray" highContrast>
      Learn More
    </Button>
    <Button size="2" highContrast>
      <HugeiconsIcon icon={UserAdd01Icon} strokeWidth={1.75} />
      Invite Members
    </Button>
  </EmptyState.Actions>
</EmptyState.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Example 4: Search Results */}
      <Flex direction="column" gap="4">
        <SectionHeader.Root>
          <SectionHeader.Content>
            <SectionHeader.Title>Search Results</SectionHeader.Title>
            <SectionHeader.Description>
              Empty state for when a search returns no results
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock background="none" height="14rem">
          <EmptyState.Root>
            <EmptyState.Icon>
              <HugeiconsIcon icon={Search01Icon} strokeWidth={1.25} />
            </EmptyState.Icon>
            <EmptyState.Content>
              <EmptyState.Title>No results found</EmptyState.Title>
              <EmptyState.Description>
                Try adjusting your search or filter to find what you're looking
                for
              </EmptyState.Description>
            </EmptyState.Content>
          </EmptyState.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<EmptyState.Root>
  <EmptyState.Icon>
    <HugeiconsIcon icon={Search01Icon} strokeWidth={1.25} />
  </EmptyState.Icon>
  <EmptyState.Content>
    <EmptyState.Title>No results found</EmptyState.Title>
    <EmptyState.Description>
      Try adjusting your search or filter to find what you're looking for
    </EmptyState.Description>
  </EmptyState.Content>
</EmptyState.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Example 5: Left Aligned */}
      <Flex direction="column" gap="4">
        <SectionHeader.Root>
          <SectionHeader.Content>
            <SectionHeader.Title>Left Aligned</SectionHeader.Title>
            <SectionHeader.Description>
              Use align="start" for inline or sidebar contexts
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock background="none" height="14rem">
          <EmptyState.Root align="start" width="100%" maxWidth="24rem" px="4">
            <EmptyState.Icon style={{ "--empty-state-icon-size": "40px" } as React.CSSProperties}>
              <HugeiconsIcon icon={Notification01Icon} strokeWidth={1.25} />
            </EmptyState.Icon>
            <EmptyState.Content>
              <EmptyState.Title align="left">No notifications</EmptyState.Title>
              <EmptyState.Description align="left">
                You're all caught up. Check back later for updates.
              </EmptyState.Description>
            </EmptyState.Content>
          </EmptyState.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<EmptyState.Root align="start">
  <EmptyState.Icon style={{ "--empty-state-icon-size": "40px" }}>
    <HugeiconsIcon icon={Notification01Icon} strokeWidth={1.25} />
  </EmptyState.Icon>
  <EmptyState.Content>
    <EmptyState.Title align="left">No notifications</EmptyState.Title>
    <EmptyState.Description align="left">
      You're all caught up. Check back later for updates.
    </EmptyState.Description>
  </EmptyState.Content>
</EmptyState.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>
    </Flex>
  );
}
