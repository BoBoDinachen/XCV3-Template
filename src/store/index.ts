
import { createPinia } from 'pinia';
import { useAppStore } from './modules/app/app';

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia();

//Pinia 状态的可配置持久化。
pinia.use(piniaPluginPersistedstate);

export { useAppStore };
export default pinia;