import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ArticleViewSwitcher } from './ArticleViewSwitcher';

export default {
    title: 'entities/ArticleViewSelector',
    component: ArticleViewSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ArticleViewSwitcher>;

const Template: StoryFn<typeof ArticleViewSwitcher> = (args) => <ArticleViewSwitcher {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
