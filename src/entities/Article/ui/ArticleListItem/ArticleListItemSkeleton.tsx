import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { useTranslation } from 'react-i18next';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    ArticleView,
} from '../../model/types/article';

import cls from './ArticleListItem.module.scss';

interface IArticleListItemSkeleton {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = ({ className, view }: IArticleListItemSkeleton) => {
    const { t } = useTranslation();

    if (view === ArticleView.BIG) {
        return (
            <div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.articleListItem__header}>
                        <Skeleton border="50%" width={30} height={30} />
                        <Skeleton
                            width={150}
                            height={16}
                            className={cls.articleListItem__header__userName}
                        />
                        <Skeleton
                            width={150}
                            height={16}
                            className={cls.articleListItem__header__date}
                        />
                    </div>

                    <Skeleton
                        width={250}
                        height={24}
                        className={cls.articleListItem__title}
                    />

                    <Skeleton
                        className={cls.articleListItem__img}
                    />
                    <div className={cls.articleListItem__footer}>
                        <Skeleton
                            width={200}
                            height={36}
                        />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
            <Card className={cls.card}>
                <div className={cls.articleListItem__imgWrapper}>
                    <Skeleton className={cls.articleListItem__imgWrapper__img} width={200} height={200} />
                </div>

                <div className={cls.articleListItem__infoWrapper}>
                    <Skeleton width={130} height={16} />
                </div>

                <Skeleton className={cls.articleListItem__title} width={150} height={16} />
            </Card>
        </div>
    );
};
