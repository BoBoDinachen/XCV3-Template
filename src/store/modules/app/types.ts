export interface AppState {
  // 主题和颜色配置
  theme: string;
  colorWeek: boolean;
  themeColor: string;
  // menu: boolean;
  // menuCollapse: boolean;
  // menuWidth: number;

  // 导航栏和页脚配置
  // footer: boolean;
  // navbar: boolean;

  // 本地设置
  globalSettings: boolean;
  [key: string]: unknown;
}