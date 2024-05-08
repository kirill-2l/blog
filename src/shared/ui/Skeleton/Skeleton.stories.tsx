import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Skeleton>;

const Template: StoryFn<typeof Skeleton> = (args) => (
    <Skeleton {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    width: '100%',
    height: 100,
};

export const Circle = Template.bind({});
Circle.args = {
    width: 100,
    height: 100,
    borderRadius: '50%',
};

export const NormalDark = Template.bind({});
NormalDark.args = {
    width: '100%',
    height: 100,
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleDark = Template.bind({});
CircleDark.args = {
    width: 100,
    height: 100,
    borderRadius: '50%',
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];
