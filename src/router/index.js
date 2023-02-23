import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DiscoverView from '../views/DiscoverView.vue';
import BookView from '../views/BookView.vue';
import WishListView from '../views/WishListView.vue';
import SettingView from '../views/SettingView.vue';
import Login from '../views/LoginView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/discovers',
            name: 'discover',
            component: DiscoverView
        },
        {
            path: '/books',
            name: 'book',
            component: BookView
        },
        {
            path: '/wishlist',
            name: 'wishlist',
            component: WishListView
        },
        {
            path: '/setting',
            name: 'setting',
            component: SettingView
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
});

export default router;
