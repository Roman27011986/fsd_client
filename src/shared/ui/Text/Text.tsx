import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export enum TextTheme {
   PRIMARY = 'primary',
   ERROR = 'error',
}

interface IText {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}

export const Text = ({
    className, title, text, theme = TextTheme.PRIMARY,
}:IText) => {
    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
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
