import { IComment } from 'entities/Comment/model/types/comment';
import { Text } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '../CommentCard/CommentCard';

import cls from './CommentList.module.scss';

interface ICommentList {
    className?: string;
    comments?: IComment[];
    isLoading?: boolean;
}

export const CommentList = ({ className, comments, isLoading }: ICommentList) => {
    const { t } = useTranslation();

    return (
        <div>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        className={cls.comment}
                        comment={comment}
                        isLoading={isLoading}
                    />
                ))
                : <Text text={t('Комментарии отсутствуют')} />}
        </div>
    );
};
