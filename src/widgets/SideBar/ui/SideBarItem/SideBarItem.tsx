import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink } from 'shared/ui/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import { SideBarItemType } from 'widgets/SideBar/model/types/sideBar';

import cls from './SideBarItem.module.scss';

interface ISideBarItem {
    item: SideBarItemType;
    collapsed: boolean;
}

export const SideBarItem = memo(({ item, collapsed }: ISideBarItem) => {
    const { t } = useTranslation();

    return (
        <AppLink
            className={classNames(cls.listLinks__link, { [cls.collapsed]: collapsed })}
            to={item.path}
        >
            <item.icon className={cls.listLinks__link__icon} />
            <span className={cls.listLinks__link__text}>
                {t(item.text)}
            </span>
        </AppLink>
    );
});
