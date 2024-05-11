import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { AppLink } from '@/shared/ui';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as Meta<typeof AppLink>;

const Template: StoryFn<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: 'Text',
    variant: 'primary',
};

export const PrimaryDark = Template.bind({});

PrimaryDark.args = {
    children: 'Text',
    variant: 'primary',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Secondary = Template.bind({});

Secondary.args = {
    children: 'Text',
    variant: 'red',
};

export const SecondaryDark = Template.bind({});

SecondaryDark.args = {
    children: 'Text',
    variant: 'red',
};

SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
