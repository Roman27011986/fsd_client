import { memo, useCallback } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { CurrencyType } from '../../model/types/carrency';

import cls from './CurrencySelect.module.scss';

interface ICurrencySelect {
    className?: string;
    value?: CurrencyType;
    readonly?: boolean;
    onChange?: (value: CurrencyType) => void;
}

const opt = [
    { value: CurrencyType.RUB, content: CurrencyType.RUB },
    { value: CurrencyType.EUR, content: CurrencyType.EUR },
    { value: CurrencyType.USD, content: CurrencyType.USD },
];

export const CurrencySelect = memo(({
    className, value, readonly, onChange,
}: ICurrencySelect) => {
    const mods: Mods = {};

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as CurrencyType);
    }, [onChange]);

    return (
        <Select
            className={classNames(cls.currencySelect, mods, [className])}
            label="Укажите валюту"
            options={opt}
            value={value}
            readonly={readonly}
            onChange={onChangeHandler}
        />
    );
});
