import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions } from 'features/AuthByUsername/model/slice/Login.slice';
import { getLoginState } from 'features/AuthByUsername/model/selector/getLoginState.selector';
import { TextTheme, Text } from 'shared/ui/Text/Text';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import i18n from 'shared/config/i18n/i18n';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string,
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, isLoading, error,
    } = useSelector(getLoginState);

    const onChangeUserName = useCallback((val: string) => {
        dispatch(loginActions.setUsername(val));
    }, [dispatch]);

    const onChangePassword = useCallback((val: string) => {
        dispatch(loginActions.setPassword(val));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    console.log(username);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>

            {error && <Text theme={TextTheme.ERROR} text={i18n.t('Wrong login or password')} />}

            <Input
                className={cls.input}
                onChange={onChangeUserName}
                type="text"
                value={username}
            />
            <Input
                className={cls.input}
                type="text"
                onChange={onChangePassword}
                value={password}
            />
            <Button
                className={cls.loginBtn}
                theme={ButtonTheme.OUTLINE}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Log in')}
            </Button>
        </div>
    );
});
