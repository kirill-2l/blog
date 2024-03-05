import {Story} from "@storybook/react";
import {classNames} from "shared/lib/classNames/classNames";
import {Theme} from "app/providers/ThemeProvider";

export const ThemeDecorator = (theme: Theme) =>
    (StoryComponent: Story) => {
        return (
            <div className={`app ${theme}`}>
                {<StoryComponent/>}
            </div>
        )
    }