import React, { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/libs/classNames/classNames';
import { useTheme } from '@/app/providers/ThemeProvider';
import AppRouter from '@/app/providers/ThemeProvider/router/ui/AppRouter';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { getUserIsInited, userActions } from '@/entities/User';
import { useAppDispatch } from '@/shared/libs/hooks/useAppDispatch/useAppDispatch';
import { MainLayout } from '@/shared/layouts';

const App = () => {
    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch();
    const isInited = useSelector(getUserIsInited);

    useEffect(() => {
        dispatch(userActions.initUserData());
    }, [dispatch]);

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
                />
            </Suspense>
        </div>
    );
};

export default App;
