import { IArticleCodeBlock } from 'entities/Article/model/types/article';
import { useTranslation } from 'react-i18next';
import { Code } from 'shared/ui/Code/Code';

interface IArticleCodeBlockComponent {
    className?: string;
    block: IArticleCodeBlock;
}

export const ArticleCodeBlockComponent = ({ className, block }: IArticleCodeBlockComponent) => {
    const { t } = useTranslation('article');

    return (
        <div>
            <Code text={block.code} />
        </div>
    );
};
