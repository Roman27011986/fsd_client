import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import { loginActions, loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { loginByUserName } from 'features/AuthByUserName/model/services/loginByUserName/loginByUserName';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/Text';
import { getLoginUserName } from 'features/AuthByUserName/model/selectors/getLoginUserName/getLoginUserName';
import { getLoginPassword } from 'features/AuthByUserName/model/selectors/getLoginUserPassword/getLoginUserPassword';
import { getLoginIsLoading } from 'features/AuthByUserName/model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from 'features/AuthByUserName/model/selectors/getLoginError/getLoginError';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import cls from './LoginForm.module.scss';

interface ILoginForm {
    className?: string;
    onSuccess: () => void;
}

const initialsReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: ILoginForm) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const userName = useSelector(getLoginUserName);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const mods: Record<string, boolean> = {};

    const onChangeUserName = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUserName({ userName, password }));

        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, password, userName, onSuccess]);

    return (
        <DynamicModuleLoader reducers={initialsReducers} removeAfterUnmount>
            <div className={
                classNames(cls.loginForm, mods, [className])
            }
            >
                <Text title={t('Форма авторизации')} theme={TextTheme.PRIMARY} />
                {error && <Text text={error} theme={TextTheme.ERROR} />}
                <Input
                    placeholder={t('Введите username')}
                    type="text"
                    className={cls.input}
                    autofocus
                    onChange={onChangeUserName}
                    value={userName}
                />
                <Input
                    placeholder={t('Введите пароль')}
                    type="text"
                    className={cls.input}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    type="submit"
                    className={cls.loginBtn}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
