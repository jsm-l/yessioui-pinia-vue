import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Register from './views/Register.vue';

const routes = [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
];

const history = createWebHistory();

const router = createRouter({
    history,
    routes,
});

export default router;