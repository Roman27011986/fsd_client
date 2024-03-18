import { FC } from "react";
import { LinkProps, NavLink } from "react-router-dom";

import { classNames } from "shared/lib/classNames/classNames";

import cls from "./AppLink.module.scss"

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface IAppLink extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<IAppLink> = ({to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps}) => {
    return (  
        <NavLink to={to} className={classNames(cls.appLink, {}, [className, cls[theme]])} {...otherProps}>
           {children}
        </NavLink>
    );
}