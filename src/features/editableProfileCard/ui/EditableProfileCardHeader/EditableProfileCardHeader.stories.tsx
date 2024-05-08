import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { EditableProfileCardHeader } from './EditableProfileCardHeader';

export default {
    title: 'shared/EditableProfileCardHeader',
    component: EditableProfileCardHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof EditableProfileCardHeader>;

const Template: StoryFn<typeof EditableProfileCardHeader> = (args) => <EditableProfileCardHeader {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
