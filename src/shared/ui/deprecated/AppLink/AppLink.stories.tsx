import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { AppLink, AppLinksTheme } from '@/shared/ui';

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
    theme: AppLinksTheme.PRIMARY,
};

export const PrimaryDark = Template.bind({});

PrimaryDark.args = {
    children: 'Text',
    theme: AppLinksTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Secondary = Template.bind({});

Secondary.args = {
    children: 'Text',
    theme: AppLinksTheme.SECONDARY,
};

export const SecondaryDark = Template.bind({});

SecondaryDark.args = {
    children: 'Text',
    theme: AppLinksTheme.SECONDARY,
};

SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
