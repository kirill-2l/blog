import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from '@/shared/ui/Avatar';
import AvatarSrc from '../../assets/tests/avatar.png';

export default {
    title: 'shared/Avatar',

    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    size: 150,
    src: AvatarSrc,
};

export const Small = Template.bind({});
Small.args = {
    size: 50,
    src: AvatarSrc,
};
