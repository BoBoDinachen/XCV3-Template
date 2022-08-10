import { PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

/**
 * vite插件配置
 * @param isBuild 是否是构建模式
 */
export function createVitePlugins(isBuild: boolean) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // vue支持
    vue(),
    // JSX支持
    vueJsx()
  ];
  // 可自定义进行扩展vite插件  vitePlugins.push(...)

  return vitePlugins;
}
