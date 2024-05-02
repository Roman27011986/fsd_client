import { IArticleTextBlock } from 'entities/Article/model/types/article';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';

interface IArticleTextBlockComponent {
    className?: string;
    block: IArticleTextBlock;
}

export const ArticleTextBlockComponent = ({ className, block }: IArticleTextBlockComponent) => {
    const { t } = useTranslation('article');

    return (
        <div className={classNames('', {}, [className])}>
            {block?.title && (
                <Text title={block.title} className={cls.title} />
            )}
            {block.paragraphs.map((paragraph) => (
                <Text
                    key={paragraph}
                    text={paragraph}
                    className={cls.paragraph}
                />
            ))}
        </div>
    );
};
