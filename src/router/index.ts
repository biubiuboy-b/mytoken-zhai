import {createRouter, createWebHistory} from 'vue-router';
import Home from "../views/Home.vue";
import About from "../views/About.vue";

// 路由定义，根据自己的需求添加新的组件和页面

const routes = [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/about',
        component: About,
        name: 'about'
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});
