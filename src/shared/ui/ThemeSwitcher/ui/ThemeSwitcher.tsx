import { FC } from "react";

import { useTheme } from "app/providers/ThemeProvider";
import { Theme } from "app/providers/ThemeProvider";

import { classNames } from "shared/lib/classNames/classNames";

import { Button } from "shared/ui/Button";

import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';

import cls from "./ThemeSwitcher.module.scss"
import { ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcher {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcher> = ({ className }) => {
    const {theme, handleToggleTheme } = useTheme()
    
    return (  
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.switcherBtn, {}, [className])}
            onClick={handleToggleTheme}>
         {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
}