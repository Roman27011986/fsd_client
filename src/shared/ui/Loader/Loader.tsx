import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Loader.module.scss';

interface ILoader {
    className?: string;
}

export const Loader: FC<ILoader> = ({ className }) => (
    <div className={classNames(cls.ldsRoller, {}, [className])}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>
);
