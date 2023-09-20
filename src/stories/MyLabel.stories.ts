import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";


const meta = {
  title: 'MyLabel',
  component: MyLabel,
  tags: ['autodocs'],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  argTypes: {
    size: { control: 'select' }
  }
} satisfies Meta<typeof MyLabel>;


export default meta;
type Story = StoryObj<typeof meta>

export const Baisc: Story = {
  args:{
    label: 'Basic label',
  }
};

export const AllCaps: Story = {
  args:{
    label: 'All Caps label',
    allCaps: true,
  }
};

export const Secondary: Story = {
  args:{
    label: 'Secondary label',
    color: 'text-secondary',
  }
};

export const CustomColor: Story = {
  args:{
    label: 'Custom Color label',
  }
};
