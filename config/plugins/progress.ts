import progress from 'vite-plugin-progress';

/**
 * @name ConfigProgressPlugin
 * @description 构建时显示进度条
 */
export const ConfigProgressPlugin = () => {
  return progress();
};
