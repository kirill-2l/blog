import React from 'react';
import { RoutePath } from '@/app/providers/ThemeProvider/router/config/routeConfig';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';

export type SidebarItemType = {
    path: string;
    text: string
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}
export const SidebarItemList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Главная',
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'О сайте',
    },
    {
        path: RoutePath.articles,
        Icon: ArticleIcon,
        text: 'Статьи',
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'Профиль',
    },
];
