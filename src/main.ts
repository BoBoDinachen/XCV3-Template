import { createApp } from 'vue';
import { router } from './router/index';
import pinia from './store/index';
import './style.css';
import App from './App.vue';

createApp(App).use(router).use(pinia).mount('#app');
