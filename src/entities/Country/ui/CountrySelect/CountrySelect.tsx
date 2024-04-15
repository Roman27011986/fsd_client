import { memo, useCallback } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Country } from 'entities/Country/model/types/country';

interface ICountrySelect {
    className?: string;
    value?: Country;
    readonly?: boolean;
    onChange?: (value: Country) => void;
}

const opt = [
    { value: Country.RUSSIA, content: Country.RUSSIA },
];

export const CountrySelect = memo(({
    className, value, readonly, onChange,
}: ICountrySelect) => {
    const mods: Mods = {};

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={classNames('', mods, [className])}
            label="Укажите страну"
            options={opt}
            value={value}
            readonly={readonly}
            onChange={onChangeHandler}
        />
    );
});
