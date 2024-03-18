import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import { AppLink } from 'shared/ui/AppLink/AppLink';

import cls from './Navbar.module.scss';

interface INavbar {
    className?: string;
}

export const Navbar: FC<INavbar> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <ul className={cls.listLinks}>
                <li className={cls.listLinks__item}>
                    <AppLink to="/">{t('Главная')}</AppLink>
                </li>
                <li className={cls.listLinks__item}>
                    <AppLink to="/about">{t('О сайте')}</AppLink>
                </li>
            </ul>
        </div>
    );
};
