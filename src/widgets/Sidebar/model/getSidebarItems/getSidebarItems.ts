import { createSelector } from '@reduxjs/toolkit';
import { RoutePath } from '@/app/providers/ThemeProvider/router/config/routeConfig';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';
import { getUserAuthData } from '@/entities/User';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList = [{
            path: RoutePath.main,
            Icon: MainIcon,
            text: 'Главная',
        },
        {
            path: RoutePath.about,
            Icon: AboutIcon,
            text: 'О сайте',
        }];
        if (userData) {
            sidebarItemsList.push(
                {
                    path: RoutePath.articles,
                    Icon: ArticleIcon,
                    text: 'Статьи',
                },
                {
                    path: `${RoutePath.profile}${userData?.id}`,
                    Icon: ProfileIcon,
                    text: 'Профиль',
                },
            );
        }
        return sidebarItemsList;
    },
);
