import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { PageWrapper } from './PageWrapper';

export default {
    title: 'shared/PageWrapper',
    component: PageWrapper,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof PageWrapper>;

const Template: StoryFn<typeof PageWrapper> = (args) => (
    <PageWrapper {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
