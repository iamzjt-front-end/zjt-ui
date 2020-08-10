module.exports = {
  base: '/zjt-ui/',
  title: 'ZJT UI',
  description: '从零开始的UI组件库',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      {text: '首页', link: '/', target: "_self"},
      {text: '文档', link: '/guide/install', target: "_self"},
      {text: '个人博客', link: 'https://zjt1326002840.gitee.io/blog/'},
    ],
    sidebar: [
      {
        title: '快速上手',
        collapsable: false,
        children: [
          '/guide/install',
          '/guide/get-start'
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/guide/button',
          '/guide/icon',
          '/guide/input',
          '/guide/grid',
          '/guide/layout',
          '/guide/toast',
          '/guide/tabs',
          '/guide/popover',
          '/guide/collapse',
          '/guide/spread',
        ]
      },
    ],
    search: true,
    searchMaxSuggestions: 10,
    themeConfig: {
      smoothScroll: true
    },
    '@vuepress/back-to-top': true
  }
}