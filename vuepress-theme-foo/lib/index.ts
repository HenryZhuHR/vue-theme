const { path } = require('@vuepress/utils')

const fooTheme = (options, app) => {
  return {
    name: 'vuepress-theme-foo',
    extends: '@vuepress/theme-default', // 继承默认主题:https://v2.vuepress.vuejs.org/zh/reference/theme-api.html#主题特定配置项
    layouts: {
      Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
      404: path.resolve(__dirname, 'layouts/404.vue'),
    },
    // ...
  }
}

module.exports = fooTheme