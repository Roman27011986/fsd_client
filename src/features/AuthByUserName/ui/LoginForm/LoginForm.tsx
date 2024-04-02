import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import { loginActions } from 'features/AuthByUserName/model/slice/loginSlice';
import {
    getLoginState,
} from 'features/AuthByUserName/model/selectors/getLoginState/getLoginState';
import { loginByUserName } from 'features/AuthByUserName/model/services/loginByUserName/loginByUserName';
import { useAppDispatch } from 'app/providers/StoreProvider/ui/StoreProvider';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/Text';
import cls from './LoginForm.module.scss';

interface ILoginForm {
    className?: string;
}

export const LoginForm = memo(({ className }: ILoginForm) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const {
        userName, password, error, isLoading,
    } = useSelector(getLoginState);

    const mods: Record<string, boolean> = {};

    const onChangeUserName = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUserName({ userName, password }));
    }, [dispatch, password, userName]);

    return (
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
    );
});
