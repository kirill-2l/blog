import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Button, BaseText, Input, VStack } from '@/shared/ui';
import { loginActions, loginReducer } from '@/features/AuthByUsername/model/slice/login.slice';
import i18n from '@/shared/config/i18n/i18n';
import { DynamicModuleLoader } from '@/shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/libs/hooks/useAppDispatch/useAppDispatch';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers = {
    login: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

    const onChangeUserName = useCallback(
        (val: string) => {
            dispatch(loginActions.setUsername(val));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (val: string) => {
            dispatch(loginActions.setPassword(val));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(async () => {
        const res = await dispatch(
            loginByUsername({
                username,
                password,
            }),
        );
        if (res.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, onSuccess, password, username]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <VStack gap="16">
                {error && (
                    <BaseText
                        variant="error"
                        text={i18n.t('Wrong login or password')}
                    />
                )}

                <Input
                    onChange={onChangeUserName}
                    placeholder="login"
                    type="text"
                    value={username}
                />
                <Input
                    type="password"
                    onChange={onChangePassword}
                    placeholder="password"
                    value={password}
                />
                <Button
                    variant="outline"
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t('Log in')}
                </Button>
            </VStack>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
