import { ButtonHTMLAttributes, FC } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LangSwitcher.module.scss"
import { Button } from "../Button";


export enum ThemeButton {
    CLEAR = 'clear',
    SECONDARY = 'secondary'
}

interface ILangSwitcher extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
}

export const LangSwitcher: FC<ILangSwitcher> = ({className}) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }
    
    return (
        <div>
            <Button
                className={classNames(cls.langSwitcher, {}, [className])}
                theme={ThemeButton.CLEAR}
                onClick={toggle}>
                {t("Язык")}
            </Button>
        </div>
    )
}