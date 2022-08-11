/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins:{
    // 禁用Taiwindcss提供的基础样式，方便引入组件库时的样式覆盖
    preflight: false 
  }
};
