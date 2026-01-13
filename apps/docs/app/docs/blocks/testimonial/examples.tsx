"use client";

import { Testimonial, PreviewBlock, CodeBlock, SectionHeader } from "@kushagradhawan/kookie-blocks";
import { Flex, Separator } from "@kushagradhawan/kookie-ui";

export function TestimonialExamples() {
  return (
    <Flex direction="column" gap="9">
      {/* Example 1: Basic Testimonial */}
      <Flex direction="column" gap="4">
        <SectionHeader.Root>
          <SectionHeader.Content>
            <SectionHeader.Title>Basic</SectionHeader.Title>
            <SectionHeader.Description>
              Simple centered testimonial with quote and author
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock background="none" height="30rem">
          <Testimonial.Root p="4">
            <Testimonial.Quote>
              The best investment we made this year. Our productivity increased
              by 40% in just two months.
            </Testimonial.Quote>
            <Testimonial.Author>
              <Testimonial.Avatar fallback="JD" />
              <Testimonial.Details>
                <Testimonial.Name>John Doe</Testimonial.Name>
                <Testimonial.Role>Product Manager at Acme Inc</Testimonial.Role>
              </Testimonial.Details>
            </Testimonial.Author>
          </Testimonial.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<Testimonial.Root p="4">
  <Testimonial.Quote>
    The best investment we made this year. Our productivity increased
    by 40% in just two months.
  </Testimonial.Quote>
  <Testimonial.Author>
    <Testimonial.Avatar fallback="JD" />
    <Testimonial.Details>
      <Testimonial.Name>John Doe</Testimonial.Name>
      <Testimonial.Role>Product Manager at Acme Inc</Testimonial.Role>
    </Testimonial.Details>
  </Testimonial.Author>
</Testimonial.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Example 2: With Avatar Image */}
      <Flex direction="column" gap="4">
        <SectionHeader.Root>
          <SectionHeader.Content>
            <SectionHeader.Title>With Avatar</SectionHeader.Title>
            <SectionHeader.Description>
              Include an avatar image for visual credibility
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock background="none" height="30rem">
          <Testimonial.Root p="4">
            <Testimonial.Quote>
              Kookie Blocks takes the foundations of Kookie UI and turns them
              into ready-to-use building blocks. Instead of assembling
              components from scratch every time, we now have powerful,
              composable patterns that just work.
            </Testimonial.Quote>
            <Testimonial.Author>
              <Testimonial.Avatar
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=150&h=150&fit=crop"
                fallback="A"
              />
              <Testimonial.Details>
                <Testimonial.Name>Anuj</Testimonial.Name>
                <Testimonial.Role>Software Engineer at Womp</Testimonial.Role>
              </Testimonial.Details>
            </Testimonial.Author>
          </Testimonial.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<Testimonial.Root p="4">
  <Testimonial.Quote>
    Kookie Blocks takes the foundations of Kookie UI and turns them
    into ready-to-use building blocks. Instead of assembling
    components from scratch every time, we now have powerful,
    composable patterns that just work.
  </Testimonial.Quote>
  <Testimonial.Author>
    <Testimonial.Avatar
      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=150&h=150&fit=crop"
      fallback="A"
    />
    <Testimonial.Details>
      <Testimonial.Name>Anuj</Testimonial.Name>
      <Testimonial.Role>Software Engineer at Womp</Testimonial.Role>
    </Testimonial.Details>
  </Testimonial.Author>
</Testimonial.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Example 3: Left-Aligned */}
      <Flex direction="column" gap="4">
        <SectionHeader.Root>
          <SectionHeader.Content>
            <SectionHeader.Title>Left-Aligned</SectionHeader.Title>
            <SectionHeader.Description>
              Align content to the start for editorial layouts
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock background="none" height="30rem">
          <Testimonial.Root align="start" p="4">
            <Testimonial.Quote align="left">
              Finally, a component library that understands our needs. The
              compound component pattern makes customization intuitive.
            </Testimonial.Quote>
            <Testimonial.Author align="start">
              <Testimonial.Avatar
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
                fallback="SC"
              />
              <Testimonial.Details align="start">
                <Testimonial.Name>Sarah Chen</Testimonial.Name>
                <Testimonial.Role>Engineering Lead at TechCorp</Testimonial.Role>
              </Testimonial.Details>
            </Testimonial.Author>
          </Testimonial.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<Testimonial.Root align="start" p="4">
  <Testimonial.Quote align="left">
    Finally, a component library that understands our needs. The
    compound component pattern makes customization intuitive.
  </Testimonial.Quote>
  <Testimonial.Author align="start">
    <Testimonial.Avatar
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
      fallback="SC"
    />
    <Testimonial.Details align="start">
      <Testimonial.Name>Sarah Chen</Testimonial.Name>
      <Testimonial.Role>Engineering Lead at TechCorp</Testimonial.Role>
    </Testimonial.Details>
  </Testimonial.Author>
</Testimonial.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Example 4: Horizontal Author */}
      <Flex direction="column" gap="4">
        <SectionHeader.Root>
          <SectionHeader.Content>
            <SectionHeader.Title>Horizontal Author</SectionHeader.Title>
            <SectionHeader.Description>
              Display author info in a row for compact layouts
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock background="none" height="30rem">
          <Testimonial.Root p="4">
            <Testimonial.Quote>
              Incredible attention to detail in every component. It feels like
              the team really cares about developer experience.
            </Testimonial.Quote>
            <Testimonial.Author direction="row" gap="3">
              <Testimonial.Avatar
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
                fallback="AL"
              />
              <Testimonial.Details align="start">
                <Testimonial.Name>Alex Lee</Testimonial.Name>
                <Testimonial.Role>Designer at Agency Co</Testimonial.Role>
              </Testimonial.Details>
            </Testimonial.Author>
          </Testimonial.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<Testimonial.Root p="4">
  <Testimonial.Quote>
    Incredible attention to detail in every component. It feels like
    the team really cares about developer experience.
  </Testimonial.Quote>
  <Testimonial.Author direction="row" gap="3">
    <Testimonial.Avatar
      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
      fallback="AL"
    />
    <Testimonial.Details align="start">
      <Testimonial.Name>Alex Lee</Testimonial.Name>
      <Testimonial.Role>Designer at Agency Co</Testimonial.Role>
    </Testimonial.Details>
  </Testimonial.Author>
</Testimonial.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Example 5: Large Spacing */}
      <Flex direction="column" gap="4">
        <SectionHeader.Root>
          <SectionHeader.Content>
            <SectionHeader.Title>Large Spacing</SectionHeader.Title>
            <SectionHeader.Description>
              Generous spacing (gap=8) for a premium feel
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock background="none" height="30rem">
          <Testimonial.Root gap="8" p="6">
            <Testimonial.Quote size="8">
              A game-changer for our product team. We shipped our redesign in
              half the time.
            </Testimonial.Quote>
            <Testimonial.Author gap="3">
              <Testimonial.Avatar
                size="5"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
                fallback="EP"
              />
              <Testimonial.Details>
                <Testimonial.Name size="4">Emma Parker</Testimonial.Name>
                <Testimonial.Role size="3">VP of Product at StartupXYZ</Testimonial.Role>
              </Testimonial.Details>
            </Testimonial.Author>
          </Testimonial.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<Testimonial.Root gap="8" p="6">
  <Testimonial.Quote size="8">
    A game-changer for our product team. We shipped our redesign in
    half the time.
  </Testimonial.Quote>
  <Testimonial.Author gap="3">
    <Testimonial.Avatar
      size="5"
      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
      fallback="EP"
    />
    <Testimonial.Details>
      <Testimonial.Name size="4">Emma Parker</Testimonial.Name>
      <Testimonial.Role size="3">VP of Product at StartupXYZ</Testimonial.Role>
    </Testimonial.Details>
  </Testimonial.Author>
</Testimonial.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Example 6: Compact */}
      <Flex direction="column" gap="4">
        <SectionHeader.Root>
          <SectionHeader.Content>
            <SectionHeader.Title>Compact</SectionHeader.Title>
            <SectionHeader.Description>
              Tighter spacing (gap=4) for smaller sections
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock background="none" height="30rem">
          <Testimonial.Root gap="4" p="4">
            <Testimonial.Quote size="6">
              Simple, elegant, and powerful. Exactly what we needed.
            </Testimonial.Quote>
            <Testimonial.Author gap="2">
              <Testimonial.Avatar size="3" fallback="DW" />
              <Testimonial.Details>
                <Testimonial.Name size="2">David Wilson</Testimonial.Name>
                <Testimonial.Role size="1">Senior Developer</Testimonial.Role>
              </Testimonial.Details>
            </Testimonial.Author>
          </Testimonial.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<Testimonial.Root gap="4" p="4">
  <Testimonial.Quote size="6">
    Simple, elegant, and powerful. Exactly what we needed.
  </Testimonial.Quote>
  <Testimonial.Author gap="2">
    <Testimonial.Avatar size="3" fallback="DW" />
    <Testimonial.Details>
      <Testimonial.Name size="2">David Wilson</Testimonial.Name>
      <Testimonial.Role size="1">Senior Developer</Testimonial.Role>
    </Testimonial.Details>
  </Testimonial.Author>
</Testimonial.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Example 7: Quote Only */}
      <Flex direction="column" gap="4">
        <SectionHeader.Root>
          <SectionHeader.Content>
            <SectionHeader.Title>Quote Only</SectionHeader.Title>
            <SectionHeader.Description>
              Minimal testimonial with just the quote
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock background="none" height="20rem">
          <Testimonial.Root p="4">
            <Testimonial.Quote size="8">
              The future of component libraries is here.
            </Testimonial.Quote>
          </Testimonial.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<Testimonial.Root p="4">
  <Testimonial.Quote size="8">
    The future of component libraries is here.
  </Testimonial.Quote>
</Testimonial.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Example 8: Dark Theme */}
      <Flex direction="column" gap="4">
        <SectionHeader.Root>
          <SectionHeader.Content>
            <SectionHeader.Title>Dark Theme</SectionHeader.Title>
            <SectionHeader.Description>
              Testimonial on a dark background
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock
          height="30rem"
          appearance="dark"
          showThemeToggle={false}
          variant="ghost"
          background={{
            backgroundColor: "var(--gray-2)",
            borderRadius: "var(--radius-3)",
          }}
        >
          <Testimonial.Root p="6">
            <Testimonial.Quote>
              Beautiful components that work seamlessly in dark mode. Our users
              love it.
            </Testimonial.Quote>
            <Testimonial.Author>
              <Testimonial.Avatar
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
                fallback="MR"
              />
              <Testimonial.Details>
                <Testimonial.Name>Mike Rodriguez</Testimonial.Name>
                <Testimonial.Role>CTO at NightOwl Labs</Testimonial.Role>
              </Testimonial.Details>
            </Testimonial.Author>
          </Testimonial.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<Theme appearance="dark">
  <Testimonial.Root p="6">
    <Testimonial.Quote>
      Beautiful components that work seamlessly in dark mode. Our users
      love it.
    </Testimonial.Quote>
    <Testimonial.Author>
      <Testimonial.Avatar
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
        fallback="MR"
      />
      <Testimonial.Details>
        <Testimonial.Name>Mike Rodriguez</Testimonial.Name>
        <Testimonial.Role>CTO at NightOwl Labs</Testimonial.Role>
      </Testimonial.Details>
    </Testimonial.Author>
  </Testimonial.Root>
</Theme>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Example 9: Dot Pattern Background */}
      <Flex direction="column" gap="4">
        <SectionHeader.Root>
          <SectionHeader.Content>
            <SectionHeader.Title>Pattern Background</SectionHeader.Title>
            <SectionHeader.Description>
              Testimonial with dot pattern background for texture
            </SectionHeader.Description>
          </SectionHeader.Content>
        </SectionHeader.Root>
        <PreviewBlock height="30rem" background="dots">
          <Testimonial.Root p="6">
            <Testimonial.Quote>
              The composable approach makes it easy to create unique designs
              while maintaining consistency.
            </Testimonial.Quote>
            <Testimonial.Author>
              <Testimonial.Avatar
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop"
                fallback="LT"
              />
              <Testimonial.Details>
                <Testimonial.Name>Lisa Thompson</Testimonial.Name>
                <Testimonial.Role>Design Director</Testimonial.Role>
              </Testimonial.Details>
            </Testimonial.Author>
          </Testimonial.Root>
        </PreviewBlock>
        <CodeBlock
          code={`<Testimonial.Root p="6">
  <Testimonial.Quote>
    The composable approach makes it easy to create unique designs
    while maintaining consistency.
  </Testimonial.Quote>
  <Testimonial.Author>
    <Testimonial.Avatar
      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop"
      fallback="LT"
    />
    <Testimonial.Details>
      <Testimonial.Name>Lisa Thompson</Testimonial.Name>
      <Testimonial.Role>Design Director</Testimonial.Role>
    </Testimonial.Details>
  </Testimonial.Author>
</Testimonial.Root>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>
    </Flex>
  );
}
