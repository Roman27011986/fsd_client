import { FC, lazy } from 'react';
import { IAddCommentForm } from './AddCommentForm';

export const AddCommentFormAsync = lazy<FC<IAddCommentForm>>(
    () => import('./AddCommentForm' /* webpackChunkName: "AddCommentForm" */),
);
