import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ContactField } from "../components/ContactField";
import { Box } from "@radix-ui/themes";

const meta: Meta<typeof ContactField> = {
  title: "Components/ContactField",
  component: ContactField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ContactField>;

export const Default: Story = {
  args: {
    name: "John Doe",
    email: "john.doe@example.com",
    showEmail: true,
  },
};

export const Enabled: Story = {
  args: {
    name: "Jane Smith",
    showEmail: false,
    enabled: true,
  },
};

export const Disabled: Story = {
  args: {
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    showEmail: true,
    enabled: false,
  },
};

export const DisabledWithoutEmail: Story = {
  args: {
    name: "Alice Brown",
    showEmail: false,
    enabled: false,
  },
};

// Example showing multiple contact fields together
export const ContactList: Story = {
  render: () => (
    <Box style={{ width: "400px" }}>
      <ContactField
        name="John Doe"
        email="john.doe@example.com"
        showEmail={true}
      />
      <ContactField name="Jane Smith" showEmail={false} enabled={true} />
      <ContactField
        name="Bob Johnson"
        email="bob.johnson@example.com"
        showEmail={true}
        enabled={false}
      />
      <ContactField name="Alice Brown" showEmail={false} enabled={false} />
    </Box>
  ),
};
