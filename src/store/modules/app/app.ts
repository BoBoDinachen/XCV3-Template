import { defineStore } from 'pinia';
import piniaStore from '~/store/index';
import { AppState } from './types';

export const useAppStore = defineStore(
  // 唯一ID
  'app',
  {
    state: () => ({
      title: 'Vue3+Vite+Ts模板',
      theme: 'dark',
    }),
    getters: {},
    actions: {
      updateSettings(partial: Partial<AppState>) {
        this.$patch(partial);
      },

      // 改变主题 颜色，根据组件库提供的建议进行操作
      toggleTheme(dark: boolean) {
        if (dark) {
          this.theme = 'dark';
          // document.documentElement.classList.add('dark');
          // document.body.setAttribute('arco-theme', 'dark');
        } else {
          this.theme = 'light';
          // document.documentElement.classList.remove('dark');
          // document.body.removeAttribute('arco-theme');
        }
      },
    },
    persist: {
      key: 'theme',
      storage: localStorage,
      paths: ['theme'],
    },
  },
);

// 暴露给Vue外部使用
export function useAppOutsideStore() {
  return useAppStore(piniaStore);
}