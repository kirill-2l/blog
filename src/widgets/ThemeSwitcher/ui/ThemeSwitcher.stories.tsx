import React from 'react';

import { Meta, StoryFn } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeSwitcher } from './ThemeSwitcher';

export default {
    title: 'widgets/ThemeSwitcher',
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ThemeSwitcher>;

const Template: StoryFn<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const Normal = Template.bind({});

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];
