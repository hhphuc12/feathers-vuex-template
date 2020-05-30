import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import singleRouter from './single-router';

// Router with child
import administrator from './administrator';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    ...singleRouter,
    administrator,
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
