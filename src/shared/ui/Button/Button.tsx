import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    SECONDARY = 'secondary',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum SizeButton {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
    square?: boolean;
    size?: SizeButton;
}

export const Button: FC<IButton> = ({
    children, className, theme, square, size, ...otherProps
}) => {
    const mods: Record<string, boolean> = {
        [cls.square]: square,
        [cls[size]]: true,
    };

    return (
        <button
            type="button"
            className={
                classNames(cls.btn, mods, [className, cls[theme]])
            }
            {...otherProps}
        >
            {children}
        </button>
    );
};
