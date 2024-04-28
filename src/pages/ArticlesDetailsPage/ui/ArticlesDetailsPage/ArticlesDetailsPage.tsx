import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { Text } from 'shared/ui/Text';
import { CommentList } from 'entities/Comment';

import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    articleDetailsCommentsReducer,
    getArticleComments,
} from 'pages/ArticlesDetailsPage/model/slices/articleDetailsCommentsSlice';
import { useSelector } from 'react-redux';
import {
    getArticleCommentsError,
    getArticleCommentsIsLoading,
} from 'pages/ArticlesDetailsPage/model/selectors/comments';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import {
    fetchCommentsByArticleId,
} from 'pages/ArticlesDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { AddCommentForm } from 'features/AddCommentForm';
import {
    addCommentForArticle,
} from 'pages/ArticlesDetailsPage/model/services/addCommentForArticle/addCommentForArticle';
import { getAddCommentFormText } from 'features/AddCommentForm/model/selectors/AddCommentFormSelectors';
import cls from './ArticlesDetailsPage.module.scss';

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticlesDetailsPage = () => {
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleCommentsIsLoading);
    const error = useSelector(getArticleCommentsError);

    useEffect(() => {
        if (id) {
            dispatch(fetchCommentsByArticleId(id));
        }
    }, [dispatch, id]);

    const onSendComment = useCallback((text: string) => {
        if (text) {
            dispatch(addCommentForArticle(text));
        }
    }, [dispatch]);

    if (!id) {
        return (
            <div>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div>
                <ArticleDetails id={id} />
                <Text className={cls.commentTitle} title={t('Коментарии')} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={isLoading}
                    comments={comments}
                />
            </div>
        </DynamicModuleLoader>

    );
};

export default ArticlesDetailsPage;
