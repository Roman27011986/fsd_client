import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";

import cls from "./Button.module.scss"

export enum ThemeButton {
    CLEAR = 'clear',
    SECONDARY = 'secondary'
}

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<IButton> = ({children, className, theme, ...otherProps}) => {
    return (  
        <button className={classNames(cls.btn, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </button>
    );
}