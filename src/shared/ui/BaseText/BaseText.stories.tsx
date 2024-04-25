import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BaseText, TextSize, TextTheme } from '@/shared/ui/BaseText';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

export default {
    title: 'shared/BaseText',
    component: BaseText,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof BaseText>;

const Template: ComponentStory<typeof BaseText> = (args) => <BaseText {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Lorem ipsum dolor sit amet',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Lorem ipsum dolor sit amet',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet',
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Lorem ipsum dolor sit amet',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Lorem ipsum dolor sit amet',
};

OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet',
    theme: TextTheme.ERROR,
};

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet',
    size: TextSize.L,
};

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet',
    size: TextSize.M,
};

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet',
    size: TextSize.S,
};
