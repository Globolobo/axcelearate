import type { Meta, StoryObj } from "@storybook/react";
import { Section } from "../components/Section";

const meta: Meta<typeof Section> = {
  title: "Components/Section",
  component: Section,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Section>;

const sampleContacts = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    showEmail: true,
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    showEmail: true,
  },
  {
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    showEmail: true,
  },
];

export const Default: Story = {
  args: {
    title: "Attended",
    contacts: sampleContacts,
  },
};

export const DefaultExpanded: Story = {
  args: {
    title: "Absent",
    contacts: sampleContacts,
    defaultExpanded: true,
  },
};

export const EmptySection: Story = {
  args: {
    title: "Empty Section",
    contacts: [],
  },
};

export const SingleContact: Story = {
  args: {
    title: "Single Contact",
    contacts: [sampleContacts[0]],
  },
};
