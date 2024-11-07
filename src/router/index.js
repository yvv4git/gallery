import { createRouter, createWebHistory } from 'vue-router';
import MainContent from '../components/content/GalleryPage.vue';
import CartPage from '../components/content/CartPage.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: MainContent
    },
    {
        path: '/cart',
        name: 'Cart',
        component: CartPage
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;