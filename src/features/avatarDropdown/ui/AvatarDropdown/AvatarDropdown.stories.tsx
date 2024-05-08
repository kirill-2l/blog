import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { AvatarDropdown } from './AvatarDropdown';

export default {
    title: 'shared/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof AvatarDropdown>;

const Template: StoryFn<typeof AvatarDropdown> = (args) => (
    <AvatarDropdown {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
