import React from 'react';

import { Meta, StoryFn } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Loader } from './Loader';

export default {
    title: 'shared/Loader',
    component: Loader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Loader>;

const Template: StoryFn<typeof Loader> = (args) => <Loader {...args} />;

export const Normal = Template.bind({});

Normal.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];
