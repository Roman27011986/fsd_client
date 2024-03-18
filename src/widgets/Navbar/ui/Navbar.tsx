import { FC } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

import { classNames } from "shared/lib/classNames/classNames";

import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

import cls from "./Navbar.module.scss"

interface INavbar {
    className?: string;
}

export const Navbar: FC<INavbar> = ({className}) => {
    return (  
        <div className={classNames(cls.navbar, {}, [className])}>
            <ThemeSwitcher />
            <ul className={cls.listLinks}>
                <li className={cls.listLinks__item}>
                    <AppLink to={"/"} theme={AppLinkTheme.SECONDARY}>Главная</AppLink>
                </li>
                <li className={cls.listLinks__item}>
                    <AppLink to={"/about"} theme={AppLinkTheme.SECONDARY}>О сайте</AppLink>
                </li>
            </ul>
        </div>
    );
}
