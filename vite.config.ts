import { ConfigEnv, UserConfig } from 'vite';
import {resolve} from 'path';
import { createVitePlugins } from './config/plugins/index';
import { proxyList } from './config/constant/proxy';
import { VITE_PORT, VITE_BUILD_DROP_CONSOLE } from './config/constant/settings';

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  // 判断是否处于构建模式
  const isBuild = command === 'build';

  return {
    plugins: createVitePlugins(isBuild),

    // 别名配置
    resolve: {
      alias: [
        {
          find: '~',
          replacement: resolve(__dirname,"./src"),
        },
        {
          find: "@config",
          replacement: resolve(__dirname,"./config")
        }
      ],
      extensions: [".ts",".tsx"]
    },

    // 开发服务器配置
    server: {
      hmr: { overlay: false }, // 禁用或配置 HMR 连接 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
      open: false, // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
      cors: false, // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
      port: VITE_PORT,
      host: '0.0.0.0',
      proxy: proxyList,
    },

    // 打包构建配置
    build: {
      target: 'es2015', // 设置最终构建的浏览器兼容目标。
      minify: 'terser', // 禁用最小化混淆，或是用来指定使用哪种混淆器。默认esbuild
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: VITE_BUILD_DROP_CONSOLE,
        },
      },
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖,分块打包
        external: [],
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        },
        // https://rollupjs.org/guide/en/#big-list-of-options
      },
      watch: {
        // https://rollupjs.org/guide/en/#watch-options
      },
      // Turning off brotliSize display can slightly reduce packaging time
      chunkSizeWarningLimit: 2000,
    },
  };
};
