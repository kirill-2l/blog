import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleViewSwitcher } from './ArticleViewSwitcher';

export default {
    title: 'shared/ArticleViewSelector',
    component: ArticleViewSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleViewSwitcher>;

const Template: ComponentStory<typeof ArticleViewSwitcher> = (args) => (
    <ArticleViewSwitcher {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
