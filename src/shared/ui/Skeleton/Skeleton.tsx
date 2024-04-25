import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface ISkeleton {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

export const Skeleton = ({
    className, width, height, border,
}:ISkeleton) => (
    <div
        className={classNames(cls.skeleton, {}, [className])}
        style={{
            width,
            height,
            borderRadius: border,
        }}
    />
);
