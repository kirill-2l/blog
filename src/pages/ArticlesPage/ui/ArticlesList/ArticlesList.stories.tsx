import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ArticlesList } from './ArticlesList';

export default {
    title: 'shared/ArticlesInfiniteList',
    component: ArticlesList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ArticlesList>;

const Template: StoryFn<typeof ArticlesList> = (args) => (
    <ArticlesList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
