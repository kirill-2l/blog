import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { LoginForm } from './LoginForm';

export default {
    title: 'feature/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

Primary.decorators = [StoreDecorator({
    login: { username: 'asd', password: 'asd' },
})];

export const Dark = Template.bind({});
Primary.args = {
    children: 'Text',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithError = Template.bind({});
WithError.args = {};

WithError.decorators = [StoreDecorator({
    login: { username: 'asd', password: 'asd', error: 'Error' },
})];

export const Loading = Template.bind({});
Loading.args = {};

Loading.decorators = [StoreDecorator({
    login: { isLoading: true },
})];
