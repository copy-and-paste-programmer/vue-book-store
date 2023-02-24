import { createApp } from "vue";
import { createPinia } from "pinia";
import VueCookies from 'vue-cookies'

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueCookies, { expires: '7d' , secure:true})

app.mount("#app");
