import Home from '../views/Home.vue';

export default [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue'),
    },
    {
        path: '/list-user',
        name: 'List User',
        component: () => import('@/views/users/Users.vue'),
    },
];
