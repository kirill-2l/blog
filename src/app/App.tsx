import React, { Suspense, useEffect } from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import AppRouter from 'app/providers/ThemeProvider/router/ui/AppRouter';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';

const App = () => {
    const { theme, toggleTheme } = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initUserData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
