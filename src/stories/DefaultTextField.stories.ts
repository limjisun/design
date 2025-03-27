import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import  DefaultTextField  from '../components/DefaultTextField';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'TextFields/DefaultTextField',
  component: DefaultTextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    iconAlt: { control: 'text', description:"이미지의 alt 속성" , defaultValue: 'icon'},
    iconPath:{ control: 'text', description:"이미지의 경로" , defaultValue: '/icons/maintap_colse_off.svg'},
    onIconClick:{ action: 'clicked', description:"버튼 클릭 이벤트"},
    placeholder: { control: 'text', description:"텍스트 필드의 placeholder", defaultValue: '텍스트를 입력해주세요'},
    value: { control: 'text', description:"텍스트 필드의 value" , defaultValue: ''},
    onChange: { action: 'changed', description:"텍스트 필드의 값이 변경될 때 발생하는 이벤트",},
    errorMessage: { control: 'text', description:"텍스트 필드의 에러 메시지", defaultValue: ''},
    isError: { control: 'boolean', description:"텍스트 필드의 에러 상태", defaultValue: false},
    id: { control: 'text', description:"텍스트 필드의 id", defaultValue: 'default-text-field'},
  },
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    iconAlt: "icon",
    iconPath: "/icons/maintap_colse_off.svg",
    value: "",
    errorMessage: "텍스트를 입력해주세요",
    placeholder: "텍스트를 입력해주세요",
    isError: false,
    onIconClick: fn(),
    onChange: fn(),
    id: "email",
  },
};
