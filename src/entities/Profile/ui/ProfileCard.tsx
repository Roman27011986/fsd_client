import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getProfileData } from '../model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../model/selectors/getProfileError/getProfileError';

import cls from './ProfileCard.module.scss';

interface IProfileCard {
    className?: string;
}

export const ProfileCard = ({ className }: IProfileCard) => {
    const { t } = useTranslation();

    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(cls.profile__card, {}, [className])}>
            <div className={cls.profile__header}>
                <Text title={t('Профиль')} />

                <Button className={cls.profile__editBtn}>{t('Редактировать')}</Button>
            </div>

            <div className={cls.profile__data}>
                <Input className={cls.profile__input} value={data?.first} placeholder={t('Ваше имя')} />
                <Input className={cls.profile__input} value={data?.lastname} placeholder={t('Ваша фамилия')} />
            </div>
        </div>
    );
};
