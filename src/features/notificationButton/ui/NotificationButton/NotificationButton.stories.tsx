import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { NotificationButton } from './NotificationButton';

export default {
    title: 'shared/NotificationsButton',
    component: NotificationButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof NotificationButton>;

const Template: StoryFn<typeof NotificationButton> = (args) => (
    <NotificationButton {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
