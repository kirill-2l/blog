import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticlesList } from './ArticlesList';

export default {
    title: 'shared/ArticlesInfiniteList',
    component: ArticlesList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesList>;

const Template: ComponentStory<typeof ArticlesList> = (args) => (
    <ArticlesList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
