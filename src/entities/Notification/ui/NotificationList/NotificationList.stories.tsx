import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { NotificationList } from './NotificationList';

export default {
    title: 'shared/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof NotificationList>;

const Template: StoryFn<typeof NotificationList> = (args) => (
    <NotificationList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
