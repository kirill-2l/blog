import { memo } from 'react';
import { useTheme } from '@/app/providers/ThemeProvider';
import ThemeIcon from '@/shared/assets/icons/theme.svg';
import { Icon } from '@/shared/ui';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Icon
            width={40}
            height={40}
            clickable
            onClick={toggleTheme}
            Svg={ThemeIcon}
        />
    );
});
