import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

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
