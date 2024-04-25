import { lazy } from 'react';

export const ArticlesPageAsync = lazy(
    () => import('./ArticlesPage' /* webpackChunkName: "ArticlesPage" */),
);
