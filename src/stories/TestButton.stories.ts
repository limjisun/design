import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import  TestButton  from '../components/TestButton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Buttons/TestButton',
  component: TestButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    iconAlt: { control: 'text', description:"이미지의 alt 속성" , defaultValue: 'icon'},
    iconPath:{ control: 'text', description:"이미지의 경로"},
    text: { control: 'text', description:"버튼 텍스트"},
    onClick:{ action: 'clicked', description:"버튼 클릭 이벤트"}

  },
  args: { onClick: fn() },
} satisfies Meta<typeof TestButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    iconAlt:"icon",
    text:"카테고리",
    iconPath: '/icons/maintap_colse_off.svg',
  },
};
