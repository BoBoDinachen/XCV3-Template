/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

/**
 * 添加.env.* 环境变量提示
 */
interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_APP_API_BASE_URL: string,
  readonly VUE_APP_SERVER_HOST: string,
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}