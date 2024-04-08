import { memo } from 'react';

import { useTheme, Theme } from 'app/providers/ThemeProvider';

import { classNames } from 'shared/lib/classNames/classNames';

import { Button } from 'shared/ui/Button';

import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';

import { ThemeButton } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface IThemeSwitcher {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }:IThemeSwitcher) => {
    const { theme, handleToggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.switcherBtn, {}, [className])}
            onClick={handleToggleTheme}
        >
            {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
});
