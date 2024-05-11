import React from 'react';

import { Meta, StoryFn } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

import { Theme } from '@/app/providers/ThemeProvider';
import { Button } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    variant: 'clear',
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    variant: 'outline',
};

export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
    children: 'Text',
    variant: 'outline',
    size: 'm',
};
export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'Text',
    variant: 'outline',
    size: 'l',
};
export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    children: 'Text',
    variant: 'outline',
    size: 'xl',
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    variant: 'outline',
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
