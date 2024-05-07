import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react-webpack5';
import { ArticleSortSelector } from './ArticleSortSelector';

export default {
    title: 'entities/ArticlePageSelector',
    component: ArticleSortSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleSortSelector>;

const Template: ComponentStory<typeof ArticleSortSelector> = (args) => (
    <ArticleSortSelector {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
