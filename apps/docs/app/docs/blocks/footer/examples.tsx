"use client";

import * as React from "react";
import { Footer, PreviewBlock, CodeBlock } from "@kushagradhawan/kookie-blocks";
import {
  Flex,
  Heading,
  Separator,
  Text,
  Avatar,
} from "@kushagradhawan/kookie-ui";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Facebook02Icon,
  NewTwitterIcon,
  Github01Icon,
} from "@hugeicons/core-free-icons";

export function FooterExamples() {
  return (
    <Flex direction="column" gap="9">
      {/* Example 1: Simple with Social Links */}
      <Flex direction="column" gap="4">
        <Flex direction="column" gap="2">
          <Heading as="h2" size="6" weight="medium">
            Simple with Social Links
          </Heading>
          <Text size="2" color="gray">
            Minimal footer with copyright text and social icons
          </Text>
        </Flex>
        <PreviewBlock background="none">
          <Footer p="6" style={{ width: "100%" }}>
            <Footer.Bottom>
              <Footer.Legal>
                <Text size="2" color="gray">
                  © 2024 Your Company, Inc.
                </Text>
                <Footer.Link underline="always" href="/terms">
                  Terms
                </Footer.Link>
                <Footer.Link underline="always" href="/privacy">
                  Privacy
                </Footer.Link>
                <Footer.Link underline="always" href="/cookies">
                  Cookies
                </Footer.Link>
              </Footer.Legal>
              <Footer.Social>
                <Footer.SocialLink
                  flush
                  href="https://facebook.com"
                  icon={() => (
                    <HugeiconsIcon icon={Facebook02Icon} strokeWidth={1.75} />
                  )}
                  label="Facebook"
                />
                <Footer.SocialLink
                  flush
                  href="https://twitter.com"
                  icon={() => (
                    <HugeiconsIcon icon={NewTwitterIcon} strokeWidth={1.75} />
                  )}
                  label="Twitter"
                />
                <Footer.SocialLink
                  flush
                  href="https://github.com"
                  icon={() => (
                    <HugeiconsIcon icon={Github01Icon} strokeWidth={1.75} />
                  )}
                  label="GitHub"
                />
              </Footer.Social>
            </Footer.Bottom>
          </Footer>
        </PreviewBlock>
        <CodeBlock
          code={`<Footer p="6">
  <Footer.Bottom>
    <Footer.Legal>
      <Text size="2" color="gray">
        © 2024 Your Company, Inc. All rights reserved.
      </Text>
    </Footer.Legal>
    <Footer.Social>
      <Footer.SocialLink
        href="https://facebook.com"
        icon={Facebook02Icon}
        label="Facebook"
      />
      <Footer.SocialLink
        href="https://twitter.com"
        icon={NewTwitterIcon}
        label="Twitter"
      />
      <Footer.SocialLink
        href="https://github.com"
        icon={Github01Icon}
        label="GitHub"
      />
    </Footer.Social>
  </Footer.Bottom>
</Footer>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Example 2: Simple Centered */}
      <Flex direction="column" gap="4">
        <Flex direction="column" gap="2">
          <Heading as="h2" size="6" weight="medium">
            Simple Centered
          </Heading>
          <Text size="2" color="gray">
            Centered layout with inline navigation links
          </Text>
        </Flex>
        <PreviewBlock background="none">
          <Footer align="center" p="8" gap="6" style={{ width: "100%" }}>
            <Footer.Nav>
              <Footer.Link href="/about">About</Footer.Link>
              <Footer.Link href="/blog">Blog</Footer.Link>
              <Footer.Link href="/jobs">Jobs</Footer.Link>
              <Footer.Link href="/press">Press</Footer.Link>
              <Footer.Link href="/accessibility">Accessibility</Footer.Link>
              <Footer.Link href="/partners">Partners</Footer.Link>
            </Footer.Nav>
            <Footer.Social>
              <Footer.SocialLink
                flush
                href="https://facebook.com"
                icon={() => (
                  <HugeiconsIcon icon={Facebook02Icon} strokeWidth={1.75} />
                )}
                label="Facebook"
              />
              <Footer.SocialLink
                flush
                href="https://twitter.com"
                icon={() => (
                  <HugeiconsIcon icon={NewTwitterIcon} strokeWidth={1.75} />
                )}
                label="Twitter"
              />
              <Footer.SocialLink
                flush
                href="https://github.com"
                icon={() => (
                  <HugeiconsIcon icon={Github01Icon} strokeWidth={1.75} />
                )}
                label="GitHub"
              />
            </Footer.Social>
            <Footer.Legal>
              <Text size="2" color="gray">
                © 2024 Your Company, Inc.
              </Text>
              <Footer.Link underline="always" href="/terms">
                Terms
              </Footer.Link>
              <Footer.Link underline="always" href="/privacy">
                Privacy
              </Footer.Link>
              <Footer.Link underline="always" href="/cookies">
                Cookies
              </Footer.Link>
            </Footer.Legal>
          </Footer>
        </PreviewBlock>
        <CodeBlock
          code={`<Footer align="center" p="8" gap="6">
  <Footer.Nav>
    <Footer.Link href="/about">About</Footer.Link>
    <Footer.Link href="/blog">Blog</Footer.Link>
    <Footer.Link href="/jobs">Jobs</Footer.Link>
    <Footer.Link href="/press">Press</Footer.Link>
    <Footer.Link href="/accessibility">Accessibility</Footer.Link>
    <Footer.Link href="/partners">Partners</Footer.Link>
  </Footer.Nav>
  <Footer.Social>
    <Footer.SocialLink href="..." icon={Facebook02Icon} label="Facebook" />
    <Footer.SocialLink href="..." icon={NewTwitterIcon} label="Twitter" />
    <Footer.SocialLink href="..." icon={Github01Icon} label="GitHub" />
  </Footer.Social>
  <Footer.Legal>
    <Text size="2" color="gray">
      © 2024 Your Company, Inc. All rights reserved.
    </Text>
  </Footer.Legal>
</Footer>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Example 3: 4-Column Simple */}
      <Flex direction="column" gap="4">
        <Flex direction="column" gap="2">
          <Heading as="h2" size="6" weight="medium">
            4-Column Simple
          </Heading>
          <Text size="2" color="gray">
            Logo with four link columns
          </Text>
        </Flex>
        <PreviewBlock background="none">
          <Footer p="8" style={{ width: "100%" }}>
            <Footer.Main>
              <Footer.Brand>
                <Avatar
                  fallback="K"
                  size="3"
                  color="indigo"
                  src="/kookie-blocks-logo.svg"
                />
              </Footer.Brand>
              <Footer.Links>
                <Footer.LinkGroup title="Solutions">
                  <Footer.Link href="/marketing">Marketing</Footer.Link>
                  <Footer.Link href="/analytics">Analytics</Footer.Link>
                  <Footer.Link href="/automation">Automation</Footer.Link>
                  <Footer.Link href="/commerce">Commerce</Footer.Link>
                  <Footer.Link href="/insights">Insights</Footer.Link>
                </Footer.LinkGroup>
                <Footer.LinkGroup title="Support">
                  <Footer.Link href="/submit-ticket">Submit ticket</Footer.Link>
                  <Footer.Link href="/documentation">Documentation</Footer.Link>
                  <Footer.Link href="/guides">Guides</Footer.Link>
                </Footer.LinkGroup>
                <Footer.LinkGroup title="Company">
                  <Footer.Link href="/about">About</Footer.Link>
                  <Footer.Link href="/blog">Blog</Footer.Link>
                  <Footer.Link href="/jobs">Jobs</Footer.Link>
                  <Footer.Link href="/press">Press</Footer.Link>
                </Footer.LinkGroup>
                <Footer.LinkGroup title="Legal">
                  <Footer.Link href="/terms">Terms of service</Footer.Link>
                  <Footer.Link href="/privacy">Privacy policy</Footer.Link>
                  <Footer.Link href="/license">License</Footer.Link>
                </Footer.LinkGroup>
              </Footer.Links>
            </Footer.Main>
          </Footer>
        </PreviewBlock>
        <CodeBlock
          code={`<Footer p="8">
  <Footer.Main>
    <Footer.Brand>
      <Avatar fallback="K" size="3" color="indigo" src="/logo.svg" />
    </Footer.Brand>
    <Footer.Links>
      <Footer.LinkGroup title="Solutions">
        <Footer.Link href="/marketing">Marketing</Footer.Link>
        <Footer.Link href="/analytics">Analytics</Footer.Link>
        <Footer.Link href="/automation">Automation</Footer.Link>
        <Footer.Link href="/commerce">Commerce</Footer.Link>
        <Footer.Link href="/insights">Insights</Footer.Link>
      </Footer.LinkGroup>
      <Footer.LinkGroup title="Support">
        <Footer.Link href="/submit-ticket">Submit ticket</Footer.Link>
        <Footer.Link href="/documentation">Documentation</Footer.Link>
        <Footer.Link href="/guides">Guides</Footer.Link>
      </Footer.LinkGroup>
      <Footer.LinkGroup title="Company">
        <Footer.Link href="/about">About</Footer.Link>
        <Footer.Link href="/blog">Blog</Footer.Link>
        <Footer.Link href="/jobs">Jobs</Footer.Link>
        <Footer.Link href="/press">Press</Footer.Link>
      </Footer.LinkGroup>
      <Footer.LinkGroup title="Legal">
        <Footer.Link href="/terms">Terms of service</Footer.Link>
        <Footer.Link href="/privacy">Privacy policy</Footer.Link>
        <Footer.Link href="/license">License</Footer.Link>
      </Footer.LinkGroup>
    </Footer.Links>
  </Footer.Main>
</Footer>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>

      <Separator size="4" />

      {/* Example 4: 4-Column with Company Mission */}
      <Flex direction="column" gap="4">
        <Flex direction="column" gap="2">
          <Heading as="h2" size="6" weight="medium">
            4-Column with Company Mission
          </Heading>
          <Text size="2" color="gray">
            Full footer with brand, tagline, social links, link columns, and
            legal text
          </Text>
        </Flex>
        <PreviewBlock background="none">
          <Footer p="8" gap="8" style={{ width: "100%" }}>
            <Footer.Main>
              <Footer.Brand gap="5">
                <Avatar
                  fallback="K"
                  size="3"
                  color="indigo"
                  src="/kookie-blocks-logo.svg"
                />
                <Footer.Tagline style={{ maxWidth: "20rem" }}>
                  Making the world a better place through constructing elegant
                  hierarchies.
                </Footer.Tagline>
                <Footer.Social>
                  <Footer.SocialLink
                    flush
                    href="https://facebook.com"
                    icon={() => (
                      <HugeiconsIcon icon={Facebook02Icon} strokeWidth={1.75} />
                    )}
                    label="Facebook"
                  />
                  <Footer.SocialLink
                    flush
                    href="https://twitter.com"
                    icon={() => (
                      <HugeiconsIcon icon={NewTwitterIcon} strokeWidth={1.75} />
                    )}
                    label="Twitter"
                  />
                  <Footer.SocialLink
                    flush
                    href="https://github.com"
                    icon={() => (
                      <HugeiconsIcon icon={Github01Icon} strokeWidth={1.75} />
                    )}
                    label="GitHub"
                  />
                </Footer.Social>
              </Footer.Brand>
              <Footer.Links>
                <Footer.LinkGroup title="Solutions">
                  <Footer.Link href="/marketing">Marketing</Footer.Link>
                  <Footer.Link href="/analytics">Analytics</Footer.Link>
                  <Footer.Link href="/automation">Automation</Footer.Link>
                  <Footer.Link href="/commerce">Commerce</Footer.Link>
                  <Footer.Link href="/insights">Insights</Footer.Link>
                </Footer.LinkGroup>
                <Footer.LinkGroup title="Support">
                  <Footer.Link href="/submit-ticket">Submit ticket</Footer.Link>
                  <Footer.Link href="/documentation">Documentation</Footer.Link>
                  <Footer.Link href="/guides">Guides</Footer.Link>
                </Footer.LinkGroup>
                <Footer.LinkGroup title="Company">
                  <Footer.Link href="/about">About</Footer.Link>
                  <Footer.Link href="/blog">Blog</Footer.Link>
                  <Footer.Link href="/jobs">Jobs</Footer.Link>
                  <Footer.Link href="/press">Press</Footer.Link>
                </Footer.LinkGroup>
                <Footer.LinkGroup title="Legal">
                  <Footer.Link href="/terms">Terms of service</Footer.Link>
                  <Footer.Link href="/privacy">Privacy policy</Footer.Link>
                  <Footer.Link href="/license">License</Footer.Link>
                </Footer.LinkGroup>
              </Footer.Links>
            </Footer.Main>
            <Separator size="4" light />
            <Footer.Bottom>
              <Footer.Legal>
                <Text size="2" color="gray">
                  © 2024 Your Company, Inc.
                </Text>
                <Footer.Link underline="always" href="/terms">
                  Terms
                </Footer.Link>
                <Footer.Link underline="always" href="/privacy">
                  Privacy
                </Footer.Link>
                <Footer.Link underline="always" href="/cookies">
                  Cookies
                </Footer.Link>
              </Footer.Legal>
            </Footer.Bottom>
          </Footer>
        </PreviewBlock>
        <CodeBlock
          code={`<Footer p="8" gap="8">
  <Footer.Main>
    <Footer.Brand gap="5">
      <Avatar fallback="K" size="3" color="indigo" src="/logo.svg" />
      <Footer.Tagline style={{ maxWidth: "20rem" }}>
        Making the world a better place through constructing elegant
        hierarchies.
      </Footer.Tagline>
      <Footer.Social>
        <Footer.SocialLink href="..." icon={Facebook02Icon} label="Facebook" />
        <Footer.SocialLink href="..." icon={NewTwitterIcon} label="Twitter" />
        <Footer.SocialLink href="..." icon={Github01Icon} label="GitHub" />
      </Footer.Social>
    </Footer.Brand>
    <Footer.Links>
      <Footer.LinkGroup title="Solutions">
        <Footer.Link href="/marketing">Marketing</Footer.Link>
        <Footer.Link href="/analytics">Analytics</Footer.Link>
        <Footer.Link href="/automation">Automation</Footer.Link>
        <Footer.Link href="/commerce">Commerce</Footer.Link>
        <Footer.Link href="/insights">Insights</Footer.Link>
      </Footer.LinkGroup>
      <Footer.LinkGroup title="Support">
        <Footer.Link href="/submit-ticket">Submit ticket</Footer.Link>
        <Footer.Link href="/documentation">Documentation</Footer.Link>
        <Footer.Link href="/guides">Guides</Footer.Link>
      </Footer.LinkGroup>
      <Footer.LinkGroup title="Company">
        <Footer.Link href="/about">About</Footer.Link>
        <Footer.Link href="/blog">Blog</Footer.Link>
        <Footer.Link href="/jobs">Jobs</Footer.Link>
        <Footer.Link href="/press">Press</Footer.Link>
      </Footer.LinkGroup>
      <Footer.LinkGroup title="Legal">
        <Footer.Link href="/terms">Terms of service</Footer.Link>
        <Footer.Link href="/privacy">Privacy policy</Footer.Link>
        <Footer.Link href="/license">License</Footer.Link>
      </Footer.LinkGroup>
    </Footer.Links>
  </Footer.Main>
  <Separator size="4" light />
  <Footer.Bottom>
    <Footer.Legal>
      <Text size="2" color="gray">
        © 2024 Your Company, Inc. All rights reserved.
      </Text>
    </Footer.Legal>
  </Footer.Bottom>
</Footer>`}
          language="tsx"
          showLineNumbers={true}
          collapsible={false}
        />
      </Flex>
    </Flex>
  );
}
