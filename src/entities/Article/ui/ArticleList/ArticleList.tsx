import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleView, IArticle } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

import cls from './ArticleList.module.scss';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface IArticleList {
    className?: string;
    articles: IArticle[];
    isLoading?: boolean;
    view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, i) => (
        <ArticleListItemSkeleton className={cls.card} view={view} key={i} />
    ));

export const ArticleList = ({
    className, articles, isLoading, view = ArticleView.SMALL,
}: IArticleList) => {
    const { t } = useTranslation();

    const renderArticle = (article: IArticle) => (
        <ArticleListItem
            article={article}
            view={view}
            className={cls.card}
            key={article.id}
        />
    );

    return (
        <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
            {articles.length > 0
                ? articles.map((article) => (
                    renderArticle(article)
                ))
                : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
};
