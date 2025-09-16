import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "若林技术团队",
  description: "若林轻小说网站以及生态技术开发团队",
  head: [
    ['link', { rel: 'icon', href: '/logo.jpg', type: 'image/jpg' }]
  ],
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '文章', link: '/basic/intro' }
    ],

    sidebar: [
      {
        text: '基础',
        items: [
          { text: '项目介绍', link: '/basic/intro' },
        ]
      }
    ],

    footer: {
      message: 'MIT协议 | 若林轻小说 © 2023',
      copyright: '保留所有权利'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Rolinsf' }
    ]
  }
})
