import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { Article } from 'entities/Article';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ArticlesRecommendationsList } from './ArticlesRecommendationsList';

export default {
    title: 'features/ArticlesRecommendations',
    component: ArticlesRecommendationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        withMock,
    ],
} as ComponentMeta<typeof ArticlesRecommendationsList>;

const Template: ComponentStory<typeof ArticlesRecommendationsList> = (args) => (
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
