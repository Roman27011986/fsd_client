import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui/Button';
import { SizeButton, ThemeButton } from 'shared/ui/Button/Button';
import { AppLink } from 'shared/ui/AppLink';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';

import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';

import cls from './SideBar.module.scss';

interface ISideBar {
    className?: string;
}

export const SideBar: FC<ISideBar> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((p) => !p);
    };

    return (
        <div
            data-testid="sidebar"
            className={
                classNames(
                    cls.sidebar,
                    { [cls.collapsed]: collapsed },
                    [className],
                )
            }
        >
            <Button
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
                theme={ThemeButton.BACKGROUND_INVERTED}
                className={cls.collapseBtn}
                square
                size={SizeButton.L}
            >
                {collapsed ? '>' : '<'}
            </Button>

            <ul className={cls.listLinks}>
                <li className={cls.listLinks__item}>
                    <AppLink
                        className={cls.listLinks__link}
                        to={RoutePath.main}
                    >
                        <MainIcon className={cls.listLinks__link__icon} />
                        <span className={cls.listLinks__link__text}>
                            {t('Главная')}
                        </span>
                    </AppLink>
                </li>
                <li className={cls.listLinks__item}>
                    <AppLink
                        className={cls.listLinks__link}
                        to={RoutePath.about}
                    >
                        <AboutIcon className={cls.listLinks__link__icon} />
                        <span className={cls.listLinks__link__text}>
                            {t('О сайте')}
                        </span>
                    </AppLink>
                </li>
            </ul>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
