import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SearchField, SearchFieldProps } from "./SearchField";

const meta: Meta<typeof SearchField> = {
  title: "Components/SearchField",
  component: SearchField,
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
type Story = StoryObj<typeof SearchField>;

// Create a wrapper component for the stories
const SearchStory = (args: Partial<SearchFieldProps>) => {
  const [value, setValue] = useState(args.value || "");
  return <SearchField {...args} value={value} onValueChange={setValue} />;
};

export const Primary: Story = {
  args: {
    placeholder: "Search",
    value: "",
  },
  render: (args) => <SearchStory {...args} />,
};
