import React, { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/libs/classNames/classNames';
import { useTheme } from '@/app/providers/ThemeProvider';
import AppRouter from '@/app/providers/ThemeProvider/router/ui/AppRouter';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { getUserIsInited, userActions } from '@/entities/User';
import { useAppDispatch } from '@/shared/libs/hooks/useAppDispatch/useAppDispatch';
import { AppLoaderLayout, MainLayout } from '@/shared/layouts';
import { useAppToolbar } from '@/app/lib/useAppToolbar/useAppToolbar';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserIsInited);
    const toolbar = useAppToolbar();
    useEffect(() => {
        dispatch(userActions.initUserData());
    }, [dispatch]);

    if (!inited) {
        return (
            <div
                id="app"
                className={classNames('app', {}, [theme])}
            >
                <AppLoaderLayout />
            </div>
        );
    }

    return (
        <div
            id="app"
            className={classNames('app', {}, [theme])}
        >
            <Suspense fallback="">
                <MainLayout
                    header={<Navbar />}
                    content={<AppRouter />}
                    sidebar={<Sidebar />}
                    toolbar={toolbar}
                />
            </Suspense>
        </div>
    );
};

export default App;
