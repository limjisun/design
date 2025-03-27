import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import  IconButton  from '../components/IconButton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Buttons/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    alt: { control: 'text', description:"이미지의 alt 속성" , defaultValue: 'icon'},
    iconPath:{ control: 'text', description:"이미지의 경로"},
    onClick:{ action: 'clicked', description:"버튼 클릭 이벤트"}

  },
  args: { onClick: fn() },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    alt:"icon",
    iconPath: '/icons/maintap_colse_off.svg',
  },
};
