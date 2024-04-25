import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';

import cls from './ArticlesDetailsPage.module.scss';

const ArticlesDetailsPage = () => {
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <div>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <div>
            <ArticleDetails id={id} />
        </div>
    );
};

export default ArticlesDetailsPage;
