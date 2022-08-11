import { RouteRecordRaw } from 'vue-router';
const Home = () => import('~/pages/Home.vue');

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: Home,
  },
];
