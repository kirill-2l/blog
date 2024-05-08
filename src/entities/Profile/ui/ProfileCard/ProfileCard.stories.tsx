import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ProfileCard } from '@/entities/Profile';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/avatar.png';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ProfileCard>;

const Template: StoryFn<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
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
};

export const WithError = Template.bind({});
WithError.args = {
    error: 'error',
};
