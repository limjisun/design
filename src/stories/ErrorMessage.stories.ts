import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import  ErroMessage  from '../components/ErrorMessage';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Text/ErroMessage',
  component: ErroMessage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
     children:{ control: 'text', description:"ErroMessage의 for 속성"}

  },
  args: { onClick: fn() },
} satisfies Meta<typeof ErroMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: '에러 메세지는 여기로',
  },
};
