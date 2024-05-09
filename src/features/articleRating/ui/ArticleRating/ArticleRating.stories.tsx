import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ArticleRating from './ArticleRating';

export default {
    title: 'shared/ArticleRating',
    component: ArticleRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ArticleRating>;

const Template: StoryFn<typeof ArticleRating> = (args) => <ArticleRating {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
