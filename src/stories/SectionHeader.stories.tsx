import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SectionHeader, SectionHeaderProps } from "../components/SectionHeader";
import { Box, Text } from "@radix-ui/themes";

const meta: Meta<typeof SectionHeader> = {
  title: "Components/SectionHeader",
  component: SectionHeader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SectionHeader>;

// Basic example with controlled state
const DefaultStory = (args: SectionHeaderProps) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Box>
      <SectionHeader
        {...args}
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      />
      {expanded && (
        <Box
          style={{
            padding: "16px",
            width: "400px",
            border: "1px solid #E4E5E8",
            borderTop: "none",
          }}
        >
          <Text>This content appears when the section is expanded.</Text>
        </Box>
      )}
    </Box>
  );
};

export const Default: Story = {
  render: DefaultStory,
  args: {
    title: "Attended",
  },
};

// Example with long title
const LongTitleStory = (args: SectionHeaderProps) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Box>
      <SectionHeader
        {...args}
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      />
      {expanded && (
        <Box
          style={{
            padding: "16px",
            width: "400px",
            border: "1px solid #E4E5E8",
            borderTop: "none",
          }}
        >
          <Text>Content for section with long title.</Text>
        </Box>
      )}
    </Box>
  );
};

export const LongTitle: Story = {
  render: LongTitleStory,
  args: {
    title:
      "This is a very long section title that might wrap to multiple lines",
  },
};

// Example with default expanded state
const DefaultExpandedStory = (args: SectionHeaderProps) => {
  const [expanded, setExpanded] = useState(true);
  return (
    <Box>
      <SectionHeader
        {...args}
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      />
      {expanded && (
        <Box
          style={{
            padding: "16px",
            width: "400px",
            border: "1px solid #E4E5E8",
            borderTop: "none",
          }}
        >
          <Text>This section starts expanded.</Text>
        </Box>
      )}
    </Box>
  );
};

export const DefaultExpanded: Story = {
  render: DefaultExpandedStory,
  args: {
    title: "Pre-expanded Section",
  },
};

// Example without content
const WithoutContentStory = (args: SectionHeaderProps) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Box>
      <SectionHeader
        {...args}
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      />
      {expanded && (
        <Box
          style={{
            padding: "16px",
            width: "400px",
            border: "1px solid #E4E5E8",
            borderTop: "none",
          }}
        >
          <Text>This section has no content when collapsed.</Text>
        </Box>
      )}
    </Box>
  );
};

export const WithoutContent: Story = {
  render: WithoutContentStory,
  args: {
    title: "Section Without Content",
  },
};
