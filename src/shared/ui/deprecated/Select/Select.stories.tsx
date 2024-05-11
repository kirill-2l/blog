import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Select } from '@/shared/ui';

export default {
    title: 'shared/Select',

    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Select country',
    options: [
        {
            value: 'US',
            content: 'United States',
        },
        {
            value: 'Arg',
            content: 'Argentina',
        },
    ],
};
