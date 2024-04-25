import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from '@/shared/ui/Select';
import AvatarSrc from './avatar.png';

export default {
    title: 'shared/Select',

    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

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
