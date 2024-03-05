import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {NotFoundPage} from "pages/NotFound";

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage/>;

export const Normal = Template.bind({});

Normal.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});


Dark.decorators = [ThemeDecorator(Theme.DARK)];
