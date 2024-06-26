import { ButtonHTMLAttributes, FC } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    SECONDARY = 'secondary',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
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
    disabled?: boolean;
}

export const Button: FC<IButton> = ({
    children, className, theme = ThemeButton.OUTLINE, square, size = '', disabled, ...otherProps
}) => {
    const mods: Mods = {
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={
                classNames(cls.btn, mods, [className, cls[theme]])
            }
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};
