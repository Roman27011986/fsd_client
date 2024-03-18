import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import cls from './SideBar.module.scss';

interface ISideBar {
    className?: string;
}

export const SideBar: FC<ISideBar> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((p) => !p);
    };

    return (
        <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <button type="button" onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};