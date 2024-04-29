import ArticleIcon from 'shared/assets/icons/article-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import { createSelector } from '@reduxjs/toolkit';
// import { StateSchema } from "app/providers/StoreProvider";
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import { SideBarItemType } from '../types/sideBar';

export const getSideBarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sideBarItemsList: SideBarItemType[] = [
            {
                path: RoutePath.main,
                text: 'Главная',
                icon: MainIcon,
            },
            {
                path: RoutePath.about,
                text: 'О сайте',
                icon: AboutIcon,
            },
        ];

        if (userData) {
            sideBarItemsList.push(
                {
                    path: RoutePath.profile + userData.id,
                    text: 'Профиль',
                    icon: ProfileIcon,
                    authOnly: true,
                },
                {
                    path: RoutePath.articles,
                    text: 'Статьи',
                    icon: ArticleIcon,
                    authOnly: true,
                },
            );
        }
        return sideBarItemsList;
    },
);
