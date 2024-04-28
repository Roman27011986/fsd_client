import { IComment } from 'entities/Comment/model/types/comment';
import { useTranslation } from 'react-i18next';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text';
import { classNames } from 'shared/lib/classNames/classNames';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import cls from './CommentCard.module.scss';

interface ICommentCard {
    className?: string;
    comment: IComment;
    isLoading?: boolean;
}

export const CommentCard = ({ className, comment, isLoading }: ICommentCard) => {
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.commentCard, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton className={cls.userName} width={100} height={16} />
                </div>
                <Skeleton className={cls.text} width="100%" height={50} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.commentCard, {}, [className])}>
            <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cls.header}>
                {comment.user?.avatar && <Avatar size={30} src={comment.user.avatar} />}
                <Text className={cls.userName} title={comment.user.userName} />
            </AppLink>
            <Text className={cls.text} text={t(comment.text)} />
        </div>
    );
};
