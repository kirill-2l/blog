import { ReactElement } from 'react';
import { AppRoutes } from '@/shared/const/router';
import { ScrollToolbar } from '@/widgets/ScrollToolbar';
import { useRouterChange } from '@/shared/libs/router/useRouterChange';

export const useAppToolbar = () => {
    const appRoute = useRouterChange();
    const toolbarByAppRoute: Partial<Record<AppRoutes, ReactElement>> = {
        [AppRoutes.ARTICLES]: <ScrollToolbar />,
        [AppRoutes.ARTICLE_DETAILS]: <ScrollToolbar />,
    };

    return toolbarByAppRoute[appRoute];
};
