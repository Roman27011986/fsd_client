import { ChangeEvent, memo, useMemo } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';

import cls from './Select.module.scss';

export interface ISelectOptions {
    value: string;
    content: string;
}

interface ISelect {
    className?: string;
    label?: string;
    options?: ISelectOptions[];
    value?: string;
    readonly?: boolean;
    onChange?: (value: string) => void;
}

export const Select = memo(({
    className, label, options, value, readonly, onChange,
}: ISelect) => {
    const optionsList = useMemo(() => options?.map((opt) => (
        <option
            className={cls.option}
            value={opt.value}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    const mods: Mods = {};

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.wrapper, mods, [className])}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <select
                className={cls.select}
                name=""
                id=""
                value={value}
                disabled={readonly}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </div>
    );
});
