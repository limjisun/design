import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import  Label  from '../components/Label';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Text/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
     htmlFor: { control: 'text', description:"label의 for 속성" },
     children:{ control: 'text', description:"label의 for 속성"}

  },
  args: { onClick: fn() },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    htmlFor:"username",
    children: '이메일',
  },
};
