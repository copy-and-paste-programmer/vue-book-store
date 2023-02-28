import { createApp } from "vue";
import { createPinia } from "pinia";
import VueCookies from 'vue-cookies'
import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueCookies, { expires: '7d' , secure:true})
app.use(Vue3Toastify, {
    autoClose: 3000,
})

app.mount("#app");
