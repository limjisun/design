import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import  NavigationBar  from '../components/NavigationBar';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Navigation/NavigationBar',
  component: NavigationBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators:[
    (Story) => (
      <div style={{width: '375px' , border: '1px solid black'}}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    isDark:{ control: "boolean", description:"다크모드 여부" , defaultValue: false},
    showBackButton: { control: "boolean", description:"뒤로가기 버튼 표시 여부" , defaultValue: true},
    showCloseButton:{ control: "boolean", description:"닫기 버튼 표시 여부" , defaultValue: true},
    showTitle:{ control: "boolean", description:"페이지 이름 여부 표시" , defaultValue: true},
    title: { control: 'text', description:"페이지 이름", defaultValue: '페이지 타이틀'},
    onBackClick: { action: 'clicked', description:"뒤로가기 버튼 클릭 이벤트"},
    onCloseClick: { action: 'clicked', description:"닫기 버튼 클릭 이벤트",}
  },
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: { 
    showBackButton: true,
    showCloseButton: true,
    showTitle: true,
    title: '페이지 타이틀',
    isDark: false,
  },
};
