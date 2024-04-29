import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { Button } from 'shared/ui/Button';
import { SizeButton, ThemeButton } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getSideBarItems } from 'widgets/SideBar/model/selectors/getSideBarItems';
import { SideBarItem } from '../SideBarItem/SideBarItem';

import cls from './SideBar.module.scss';

interface ISideBar {
    className?: string;
}

export const SideBar: FC<ISideBar> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);

    const sideBarItemsList = useSelector(getSideBarItems);

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
                {sideBarItemsList.map((item) => (
                    <li key={item.text} className={cls.listLinks__item}>
                        <SideBarItem item={item} collapsed={collapsed} />
                    </li>
                ))}
            </ul>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
