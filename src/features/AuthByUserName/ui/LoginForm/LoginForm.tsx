import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';

import cls from './LoginForm.module.scss';

interface ILoginForm {
    className?: string;
}

export const LoginForm: FC<ILoginForm> = ({ className }) => {
    const { t } = useTranslation();
    const mods: Record<string, boolean> = {};

    return (
        <div className={
            classNames(cls.loginForm, mods, [className])
        }
        >
            <Input
                placeholder={t('Введите username')}
                type="text"
                className={cls.input}
                autofocus
            />
            <Input
                placeholder={t('Введите пароль')}
                type="text"
                className={cls.input}
            />
            <Button type="submit" className={cls.loginBtn}>{t('Войти')}</Button>
        </div>
    );
};
