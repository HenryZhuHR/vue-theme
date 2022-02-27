import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import path = require('path');

console.log('THEME: ',path.resolve(__dirname, '../../vuepress-theme-foo/lib/index.ts'))


export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: 'en-US',
  title: 'Hello VuePress',
  description: 'Just playing around',

  // 主题和它的配置
  // theme: '@vuepress/theme-default',
  // themeConfig: {
  //   logo: 'https://vuejs.org/images/logo.png',
  // },
  theme: path.resolve(__dirname, '../../vuepress-theme-foo/lib/index.ts'),
})
