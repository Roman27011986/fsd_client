import { useTranslation } from 'react-i18next';
import { CurrencySelect, CurrencyType } from 'entities/Currency';
import { Text } from 'shared/ui/Text';
import { Input } from 'shared/ui/Input/Input';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import { TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Country, CountrySelect } from 'entities/Country';
import { IProfile } from '../model/types/profile';

import cls from './ProfileCard.module.scss';

interface IProfileCard {
    className?: string;
    data: IProfile | undefined;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstName?: (value: string) => void;
    onChangeLastName?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeUserName?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCarrency?: (currency: CurrencyType) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = ({
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
    onChangeUserName,
    onChangeAvatar,
    onChangeCarrency,
    onChangeCountry,
}: IProfileCard) => {
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.profile__card, {}, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.profile__card, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={classNames(cls.profile__card, mods, [className])}>
            <div className={cls.profile__data}>
                {data?.avatar && (
                    <div className={cls.profile__avatarWrapper}>
                        <Avatar src={data.avatar} alt={data.avatar} />
                    </div>
                )}
                <Input
                    className={cls.profile__input}
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    onChange={onChangeFirstName}
                    readonly={readonly}
                />
                <Input
                    className={cls.profile__input}
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    onChange={onChangeLastName}
                    readonly={readonly}
                />
                <Input
                    className={cls.profile__input}
                    value={data?.age}
                    placeholder={t('Ваш возраст')}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input
                    className={cls.profile__input}
                    value={data?.city}
                    placeholder={t('Город')}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <Input
                    className={cls.profile__input}
                    value={data?.username}
                    placeholder={t('Имя пользователя')}
                    onChange={onChangeUserName}
                    readonly={readonly}
                />
                <Input
                    className={cls.profile__input}
                    value={data?.avatar}
                    placeholder={t('Аватар')}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />

                <CurrencySelect
                    className={cls.profile__input}
                    value={data?.currency}
                    onChange={onChangeCarrency}
                    readonly={readonly}
                />

                <CountrySelect
                    className={cls.profile__input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
