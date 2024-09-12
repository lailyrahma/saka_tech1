import type { Meta, StoryObj } from "@storybook/react";
import Breadcrumbs from "./breadcrumb";
import { BreadcrumbsProps } from "./breadcrumb.type";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Molecule/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
  args: {
    variant: "medium",
    datas: [
      { title: "Home", path: "/" },
      { title: "About", path: "/" },
      { title: "Gallery", path: "/" },
      { title: "Contact", path: "/" },
    ],
  },
};

export default meta;
type Story = StoryObj<BreadcrumbsProps>;

export const Default: Story = {
  args: {
    variant: "medium",
  },
};

export const small: Story = {
  args: {
    variant: "small",
  },
};

export const large: Story = {
  args: {
    variant: "large",
  },
};