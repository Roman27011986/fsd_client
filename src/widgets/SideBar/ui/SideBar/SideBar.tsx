import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui/Button';
import { ThemeButton } from 'shared/ui/Button/Button';

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
                classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])
            }
        >
            <Button
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
                theme={ThemeButton.OUTLINE}
            >
                {t('переключать')}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
