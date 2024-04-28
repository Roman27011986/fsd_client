import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';

import { Text } from 'shared/ui/Text';
import { Button } from 'shared/ui/Button';
import {
    getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ThemeButton } from 'shared/ui/Button/Button';
import { getUserAuthData } from 'entities/User';
import cls from './ProfilePageHeader.module.scss';

interface IProfilePageHeader {
    className?: string;
}

export const ProfilePageHeader = ({ className }: IProfilePageHeader) => {
    const { t } = useTranslation();

    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={cls.profile__header}>
            <Text title={t('Профиль')} />
            {canEdit && (
                <div className={cls.profile__btnsWrapper}>
                    {readonly
                        ? (
                            <Button
                                className={cls.profile__editBtn}
                                onClick={onEdit}
                            >
                                {t('Редактировать')}
                            </Button>
                        )
                        : (
                            <>
                                <Button
                                    className={cls.profile__editBtn}
                                    onClick={onCancelEdit}
                                    theme={ThemeButton.OUTLINE_RED}
                                >
                                    {t('Отменить')}
                                </Button>
                                <Button
                                    className={cls.profile__saveBtn}
                                    onClick={onSave}
                                    theme={ThemeButton.OUTLINE}
                                >
                                    {t('Сохранить')}
                                </Button>
                            </>
                        )}
                </div>
            )}
        </div>
    );
};
