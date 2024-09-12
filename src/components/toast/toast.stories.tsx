import type { Meta, StoryObj } from "@storybook/react";
import Toast from "./toast";
import { ToastProps } from "./toast.type";

const meta: Meta<typeof Toast> = {
  title: "Molecule/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["success", "danger", "information", "warning"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    type: {
      control: "select",
      options: ["information", "notification"],
    },
  },
  args: {
    message: "This is a toast message!",
    variant: "information",
    size: "medium",
    type: "information",
    duration: 10000000000000,
  },
};

export default meta;
type Story = StoryObj<ToastProps>;

export const Default: Story = {
  args: {
    message: "This is a default toast message!",
    variant: "information",
    size: "medium",
    type: "information",
  },
};

export const Success: Story = {
  args: {
    message: "Success! Operation completed.",
    variant: "success",
    size: "medium",
    type: "notification",
  },
};

export const Danger: Story = {
  args: {
    message: "Error! Something went wrong.",
    variant: "danger",
    size: "medium",
    type: "notification",
  },
};

export const Warning: Story = {
  args: {
    message: "Warning! Please be cautious.",
    variant: "warning",
    size: "large",
    type: "information",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const Large: Story = {
  args: {
    size: "large",
  },
};