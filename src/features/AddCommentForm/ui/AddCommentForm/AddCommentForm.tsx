import { Input } from 'shared/ui/Input/Input';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { addCommentFormActions, addCommentFormReducer } from 'features/AddCommentForm/model/slices/addCommentFormSlice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from '../../model/selectors/AddCommentFormSelectors';
import cls from './AddCommentForm.module.scss';

export interface IAddCommentForm {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = ({ className, onSendComment }: IAddCommentForm) => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);

    const onCommentTextChange = useCallback((text: string) => {
        dispatch(addCommentFormActions.setText(text));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={cls.addCommentForm}>
                <Input
                    className={cls.input}
                    placeholder={t('Введите текст комментария')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button
                    onClick={onSendHandler}
                >
                    {t('Отправить')}
                </Button>
            </div>
        </DynamicModuleLoader>

    );
};

export default AddCommentForm;
