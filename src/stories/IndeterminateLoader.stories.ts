import { IndeterminateLoader } from "@/components/IndeterminateLoader/IndeterminateLoader";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof IndeterminateLoader> = {
  component: IndeterminateLoader,
};

export default meta;
type Story = StoryObj<typeof IndeterminateLoader>;

export const Horizontal: Story = {
  args: {
    type: "horizontal",
  },
};
export const Vertical: Story = {
  args: {
    type: "vertical",
  },
};
