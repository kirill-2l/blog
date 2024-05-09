import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ArticleDetailsComments } from './ArticleDetailsComments';

export default {
    title: 'shared/ArticleDetailsComments',
    component: ArticleDetailsComments,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ArticleDetailsComments>;

const Template: StoryFn<typeof ArticleDetailsComments> = (args) => <ArticleDetailsComments {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
