import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Article } from '@/entities/Article';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ArticlesRecommendationsList } from './ArticlesRecommendationsList';

export default {
    title: 'features/ArticlesRecommendations',
    component: ArticlesRecommendationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ArticlesRecommendationsList>;

const Template: StoryFn<typeof ArticlesRecommendationsList> = (args) => (
    <ArticlesRecommendationsList {...args} />
);

const article: Article = {
    id: '1',
    img: '',
    createdAt: '*',
    views: 123,
    user: {
        id: '1',
        username: '123',
    },
    blocks: [],
    type: [],
    title: '123',
    subtitle: 'assa',
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API_URL__}/articles?_limit=3`,
            method: 'GET',
            status: 200,
            response: [
                {
                    ...article,
                    id: 1,
                }, {
                    ...article,
                    id: 2,
                }, {
                    ...article,
                    id: 3,
                },
            ],
        },
    ],
};
