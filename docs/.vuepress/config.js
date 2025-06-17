import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';
import { componentsPlugin } from "vuepress-plugin-components";
export default defineUserConfig({
  base: '/rmc-doc/',
  locales: {
    '/': {
      lang: 'en-US',

      title: 'Rmc',
      description: 'Just a little bit',



    },
    '/zh/': {
      lang: 'zh-CN',
      title: '若迷尘',
      description: '仅仅只是一点点',
    }
  },
 theme: defaultTheme({
    logo: 'https://avatars.githubusercontent.com/u/192405856?v=4',
    locales: {
      '/': {
        navbar: [
          { text: 'Home', link: '/' },
          { text: 'Get Started', link: '/get-started' },
          // Add more English navbar items here
        ],
        
        selectLanguageText: 'Languages', 
      },
      '/zh/': {
        navbar: [
          { text: '首页', link: '/zh/' },
          { text: '快速开始', link: '/zh/get-started' },
          // Add more Chinese navbar items here
        ],
        
        selectLanguageText: '语言', 
      },
    },
  }),
  bundler: viteBundler(),
  plugins: [
    // your options
    componentsPlugin({
      components: [

        "SiteInfo",
      ],
    }),
  ]



})
