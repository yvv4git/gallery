import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../components/content/MainPage.vue';
import GalleryPage from '../components/content/GalleryPage.vue';
import CartPage from '../components/content/CartPage.vue';
import DonatePage from '../components/content/DonatePage.vue';
import CheckoutPage from '../components/content/CheckoutPage.vue';

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
    },
    {
        path: '/donate',
        name: 'DonatePage',
        component: DonatePage
    },
    {
        path: '/checkout',
        name: 'CheckoutPage',
        component: CheckoutPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;