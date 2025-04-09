import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { InputField, InputFieldProps } from "../components/InputField";
import magnifyingGlassIcon from "../components/assets/magnifying-glass.svg";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#FFFFFF" },
        { name: "dark", value: "#333333" },
      ],
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InputField>;

// Create a wrapper component for the stories
const InputStory = (args: Partial<InputFieldProps>) => {
  const [value, setValue] = useState(args.value || "");
  return <InputField {...args} value={value} onValueChange={setValue} />;
};

export const Primary: Story = {
  args: {
    placeholder: "Enter text",
    value: "",
    variant: "primary",
  },
  render: (args) => <InputStory {...args} />,
};

export const Secondary: Story = {
  args: {
    placeholder: "Enter text",
    value: "",
    variant: "secondary",
  },
  render: (args) => <InputStory {...args} />,
};

export const WithIcon: Story = {
  args: {
    placeholder: "Search...",
    value: "",
    variant: "primary",
    icon: <img src={magnifyingGlassIcon} alt="Search" width="20" height="20" />,
  },
  render: (args) => <InputStory {...args} />,
};
