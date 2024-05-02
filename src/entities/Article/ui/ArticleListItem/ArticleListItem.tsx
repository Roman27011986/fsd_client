import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button';
import { ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import {
    ArticleBlockType, ArticleView, IArticle, IArticleTextBlock,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

import cls from './ArticleListItem.module.scss';

interface IArticleListItem {
    className?: string;
    article: IArticle;
    view: ArticleView;
}

export const ArticleListItem = ({ className, article, view }: IArticleListItem) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.articles_details + article.id);
    }, [article.id, navigate]);

    const types = <Text className={cls.articleListItem__types} text={article.type.join(', ')} />;
    const views = (
        <>
            <Text className={cls.articleListItem__footer__views} text={String(article.views)} />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === ArticleView.BIG) {
        const textBlocks = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as IArticleTextBlock;
        return (
            <div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.articleListItem__header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text
                            className={cls.articleListItem__header__userName}
                            text={article.user.userName}
                        />
                        <Text
                            className={cls.articleListItem__header__date}
                            text={article.createdAt}
                        />
                    </div>

                    <Text
                        className={cls.articleListItem__title}
                        text={article.title}
                    />
                    {types}
                    <img
                        className={cls.articleListItem__img}
                        src={article.img}
                        alt={article.title}
                    />
                    {textBlocks && (
                        <ArticleTextBlockComponent
                            className={cls.articleListItem__textBlock}
                            block={textBlocks}
                        />
                    )}
                    <div className={cls.articleListItem__footer}>
                        <Button onClick={onOpenArticle} theme={ThemeButton.OUTLINE}>
                            {t('Читать далее')}
                            ...
                        </Button>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
            <Card className={cls.card} onClick={onOpenArticle}>
                <div className={cls.articleListItem__imgWrapper}>
                    <img className={cls.articleListItem__imgWrapper__img} src={article.img} alt={article.title} />
                    <Text className={cls.articleListItem__imgWrapper__date} text={article.createdAt} />
                </div>

                <div className={cls.articleListItem__infoWrapper}>
                    {types}
                    {views}
                </div>

                <Text className={cls.articleListItem__title} text={article.title} />
            </Card>
        </div>
    );
};
