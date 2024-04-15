import { CSSProperties, useMemo } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';

import cls from './Avatar.module.scss';

interface IAvatar {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = ({
    className, src, size, alt,
}: IAvatar) => {
    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);

    return (
        <img
            className={classNames(cls.avatar, mods, [className])}
            src={src}
            alt={alt}
            style={styles}
        />
    );
};
