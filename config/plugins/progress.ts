import progress from 'vite-plugin-progress';

/**
 * @name ConfigProgressPlugin
 * @description 构建显示进度条
 */
export const ConfigProgressPlugin = () => {
  return progress();
};
