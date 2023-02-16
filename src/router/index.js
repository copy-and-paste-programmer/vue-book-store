import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DiscoverView from "../views/DiscoverView.vue"
import Recommendations from "../views/Recommendations.vue"
import WishListView from "../views/WishListView.vue"
import SettingView from "../views/SettingView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/discover",
      name: "discover",
      component: DiscoverView
    },
    {
      path: "/recommendations",
      name: "recommendations",
      component: Recommendations
    },
    {
      path: "/wishlist",
      name: "wishlist",
      component: WishListView
    },
    {
      path: "/setting",
      name: "setting",
      component: SettingView
    }
  ],
});

export default router;