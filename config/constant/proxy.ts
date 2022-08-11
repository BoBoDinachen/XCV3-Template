import { ProxyOptions } from 'vite';
import { API_BASE_URL, API_TARGET_URL } from '../../config/constant';

type ProxyTargetList = Record<string, ProxyOptions>;

/**
 * 这里进行proxy代理服务配置，可自定义进行扩展，从constant里面
 */
const proxyList: ProxyTargetList = {
  [API_BASE_URL]: {
    target: API_TARGET_URL,
    changeOrigin: true,
    rewrite: (path) => path.replace(new RegExp(`^${API_BASE_URL}`), ''),
  },
};

export { proxyList };
