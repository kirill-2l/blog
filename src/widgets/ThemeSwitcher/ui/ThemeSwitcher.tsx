import { memo } from 'react';
import { classNames } from '@/shared/libs/classNames/classNames';
import { useTheme } from '@/app/providers/ThemeProvider';
import ThemeIcon from '@/shared/assets/icons/theme.svg';
import { Button, ButtonTheme , Icon } from '@/shared/ui';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button theme={ButtonTheme.CLEAR} className={classNames(null, {}, [className])} onClick={toggleTheme}>
            <Icon width={40} height={40} inverted
Svg={ThemeIcon} />
        </Button>
    );
});
