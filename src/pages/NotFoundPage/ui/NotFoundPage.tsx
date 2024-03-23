import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import cls from './NotFoundPage.module.scss';

interface INotFoundPage {
    className?: string;
}

export const NotFoundPage: FC<INotFoundPage> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    );
};
