import React, { Suspense, useEffect } from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import AppRouter from 'app/providers/ThemeProvider/router/ui/AppRouter';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { getUserIsInited, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';

const App = () => {
    const {
        theme,
        toggleTheme,
    } = useTheme();
    const dispatch = useAppDispatch();
    const isInited = useSelector(getUserIsInited);

    useEffect(() => {
        dispatch(userActions.initUserData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {isInited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};

export default App;
