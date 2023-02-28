import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DiscoverView from '../views/DiscoverView.vue';
import BookView from '../views/BookView.vue';
import WishListView from '../views/WishListView.vue';
import SettingView from '../views/SettingView.vue';
import RegisterView from '../views/RegisterView.vue';
import Login from '../views/LoginView.vue';
import useAuthenticationStore from '../stores/useAuthenticationStore';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {
                requiredAuth: true
            }

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
            path: '/register',
            name: 'register',
            component: RegisterView
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            beforeEnter: (to, from, next) => {
                const auth = useAuthenticationStore();
                if (to.query.redirect || to.query.logout || !auth.isLogin) {
                    next();
                }
                else if (auth.isLogin) next({ name: 'home' })
            }
        }
    ]
});

router.beforeEach(async (to, from, next) => {
    const auth = useAuthenticationStore();
    if (to.meta.requiredAuth && !auth.isLogin && to.name !== 'login') {
        next({
            name: 'login',
            query: {
                redirect: to.name
            }
        })
    }
    else next();
})

export default router;
