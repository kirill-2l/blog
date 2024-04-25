import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { Country } from '@/entities/Country';
import avatar from '@/shared/assets/tests/avatar.png';
import { Currency } from '@/entities/Currency';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    profile: {
        data: {
            country: Country.Ukraine,
            username: 'test',
            age: 20,
            lastname: 'petr',
            first: 'kir',
            avatar,
            city: 'Kiev',
            currency: Currency.USD,
        },
    },

})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            data: {
                country: Country.Ukraine,
                username: 'test',
                age: 20,
                lastname: 'petr',
                first: 'kir',
                avatar,
                city: 'Kiev',
                currency: Currency.USD,
            },
        },
    })];
