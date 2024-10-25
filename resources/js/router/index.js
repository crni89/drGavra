import { createRouter, createWebHistory } from "vue-router";

import NotFoundPage from '../components/NotFoundPage.vue';
import App from "../components/App.vue";


const routes = [
    {
        path: '/',
        component: App
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFoundPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
