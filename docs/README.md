
[参考](https://juejin.cn/post/6869565504756023310)


根目录下创建一个 `.vuepress/theme` 目录，然后创建它的子目录

```sh
theme
    ├── global-components // 该目录下的组件都会被自动注册为全局组件
    │   └── xxx.vue
    ├── components        // Vue 组件
    │   └── xxx.vue
    ├── layouts           // 布局组件，其中 Layout.vue 是必需的
    │   ├── Layout.vue (必要的)
    │   └── 404.vue
    ├── styles            // 全局的样式和调色板
    │   ├── index.styl
    │   └── palette.styl
    ├── index.js         // 主题文件的入口文件
    └── enhanceApp.js    // 主题水平的客户端增强文件
```

## 本地主题

首先，创建本地主题目录， `.vuepress/theme` ：
```sh
└─ docs
   ├─ .vuepress
   │  ├─ theme
   │  │  └─ index.js
   │  └─ config.js
   └─ README.md
```

然后，将 `theme` 配置项设置为 主题入口 的绝对路径来使用它：
```js
module.exports = {
  theme: path.resolve(__dirname, './path/to/docs/.vuepress/theme/index.js'),
}
```