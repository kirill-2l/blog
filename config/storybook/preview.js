import {addDecorator} from '@storybook/react';
import {StyleDecorator} from '../../src/shared/config/storybook/StyleDecorator';
import {ThemeDecorator} from '../../src/shared/config/storybook/ThemeDecorator';
import {Theme} from '../../src/app/providers/ThemeProvider';
import {RouterDecorator} from '../../src/shared/config/storybook/RouterDecorator';
import { TranslationDecorator } from '../../src/shared/config/storybook/TranslationDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: 'fullscreen',
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: Theme.LIGHT, color: '#ffffff' },
            { name: 'dark', class: Theme.DARK, color: '#000000' },
            { name: 'orange', class: Theme.ORANGE, color: '#ffb005' },
        ],
    },

};

addDecorator(StyleDecorator);
addDecorator(TranslationDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
addDecorator(SuspenseDecorator);
