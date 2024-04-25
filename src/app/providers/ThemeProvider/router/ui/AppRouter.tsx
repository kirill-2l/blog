import React, { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
    routeConfig,
} from '@/app/providers/ThemeProvider/router/config/routeConfig';
import { PageLoader } from '@/widgets/PageLoader/PageLoader';
import { RequireAuth } from '@/app/providers/ThemeProvider/router/ui/RequireAuth';
import { AppRoutesProps } from '@/shared/types/router';

function AppRouter() {
    const renderWithWrapper = useCallback(
        (route: AppRoutesProps) => {
            const {
                path,
            } = route;
            const element = (
                <Suspense fallback={<PageLoader />}>
                    {route.element}
                </Suspense>
            );
            return (
                <Route
                    key={path}
                    path={path}
                    element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
                />
            );
        },
        [],
    );
    return (
        <Routes>
            {Object.values(routeConfig)
                .map(renderWithWrapper)}
        </Routes>
    );
}

export default AppRouter;
