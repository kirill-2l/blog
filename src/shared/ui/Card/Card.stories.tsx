import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BaseText } from '@/shared/ui';
import { Card } from './Card';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
    <Card {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    children: <BaseText title="title" text="text" />,
};
