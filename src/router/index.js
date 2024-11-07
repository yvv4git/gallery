import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../components/content/MainPage.vue';
import GalleryPage from '../components/content/GalleryPage.vue';
import CartPage from '../components/content/CartPage.vue';

const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: MainPage
    },
    {
        path: '/gallery',
        name: 'GalleryPage',
        component: GalleryPage
    },
    {
        path: '/cart',
        name: 'CartPage',
        component: CartPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;