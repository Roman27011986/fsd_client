import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export enum TextTheme {
   PRIMARY = 'primary',
   ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
 }

interface IText {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
}

export const Text = ({
    className, title, text, theme = TextTheme.PRIMARY, align = TextAlign.LEFT,
}:IText) => {
    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls[align]]: true,
    };

    return (
        <div
            className={
                classNames(cls.wrapper, mods, [className])
            }
        >
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};
