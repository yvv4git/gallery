import { createRouter, createWebHistory } from 'vue-router';
import MainContent from '../components/MainContent.vue';
import CartPage from '../views/CartPage.vue';

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