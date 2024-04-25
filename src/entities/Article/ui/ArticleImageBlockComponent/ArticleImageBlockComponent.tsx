import { IArticleImageBlock, IArticleTextBlock } from 'entities/Article/model/types/article';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';

import { TextAlign } from 'shared/ui/Text/Text';
import cls from './ArticleImageBlockComponent.module.scss';

interface IArticleImageBlockComponent {
    className?: string;
    block: IArticleImageBlock;
}

export const ArticleImageBlockComponent = ({ className, block }: IArticleImageBlockComponent) => {
    const { t } = useTranslation('article');

    return (
        <div>
            <img src={block.src} className={cls.img} alt={block.title} />
            {block?.title && (
                <Text text={block.title} align={TextAlign.CENTER} />
            )}
        </div>
    );
};
