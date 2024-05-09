import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { EditableProfileCard } from './EditableProfileCard';

export default {
    title: 'shared/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof EditableProfileCard>;

const Template: StoryFn<typeof EditableProfileCard> = (args) => <EditableProfileCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
