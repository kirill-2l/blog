import React from 'react';

import { Meta, StoryFn } from '@storybook/react';
import { AppListBox } from './AppListBox';

export default {
    title: 'shared/ListBox',
    component: AppListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        ),
    ],
} as Meta<typeof AppListBox>;

const Template: StoryFn<typeof AppListBox> = (args) => <AppListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    value: '123',
    items: [
        {
            content: '1asfasfasf23',
            value: '123',
        },
        {
            content: '1asfasfasf21233',
            value: '1232',
        },
    ],
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    direction: 'top-left',
    value: '123',
    items: [
        {
            content: '1asfasfasf23',
            value: '123',
        },
        {
            content: '1asfasfasf21233',
            value: '1232',
        },
    ],
};

export const TopRight = Template.bind({});
TopRight.args = {
    direction: 'top-right',
    value: '123',
    items: [
        {
            content: '1asfasfasf23',
            value: '123',
        },
        {
            content: '1asfasfasf21233',
            value: '1232',
        },
    ],
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    direction: 'bottom-left',
    value: '123',
    items: [
        {
            content: '1asfasfasf23',
            value: '123',
        },
        {
            content: '1asfasfasf21233',
            value: '1232',
        },
    ],
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    direction: 'bottom-right',
    value: '123',
    items: [
        {
            content: '1asfasfasf23',
            value: '123',
        },
        {
            content: '1asfasfasf21233',
            value: '1232',
        },
    ],
};
