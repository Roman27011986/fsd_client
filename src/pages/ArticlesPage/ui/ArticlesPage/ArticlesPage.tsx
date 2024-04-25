import { useTranslation } from 'react-i18next';

import cls from './ArticlesPage.module.scss';

const ArticlesPage = () => {
    const { t } = useTranslation('article');

    return (
        <div>
            {t('ArticlesPage')}
        </div>
    );
};

export default ArticlesPage;
