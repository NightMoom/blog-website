/*
 * @Author: zsmya
 * @Date: 2022-05-25 11:24:28
 * @LastEditors: zsmya
 * @LastEditTime: 2022-05-26 18:33:39
 * @FilePath: /vuepress-starter/docs/.vuepress/config.js
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
 */

console.log(process.env)
module.exports = (options, context) => ({ 
  define() { 
    return {
      base: process.env.mode === 'website' ? '/blog-website/' : '/',
      title: '深夜书店',
      description: '博客',
      theme: 'vuepress-theme-reco',
      themeConfig: {
        search: true,
        searchMaxSuggestions: 10,
        subSidebar: 'auto',
        lastUpdated: '更新时间:',
        author: 'zsmya',
        nav: [
          { text: '首页', link: '/' },
          {
            text: '前端',
            items: [
              {
                text: '基础',
                items: [
                  {
                    text: 'JavaScript',
                    link: '/javascript/'
                  },
                  {
                    text: 'css',
                    link: '/css/'
                  },
                  {
                    text: 'Vue',
                    link: '/vue/'
                  }
                ]
              },
            ]
          },
          {
            text: '框架',
            items: [
              {
                text: 'Vue',
                link: '/vue/'
              }
            ],
          },
          {
            text: '地图相关',
            items: [
              {
                text: 'openlayers',
                link: '/openlayers/'
              },
              {
                text: '高德地图',
                link: '/amap/ '
              }
            ]
          },
          {
            text: 'WebGL',
            items: [
              {
                text: '着色器',
                link: '/shader/'
              },
              {
                text: 'three.js',
                link: 'https://zsmya.com/vite/',
                target: '_blank'
              }
            ],
          },
          {
            text: 'GitHub',
            link: 'https://github.com/NightMoom',
            icon: 'reco-github',
            target: '_blank'
          }
        ],
        vssueConfig: {
          platform: 'github',
          owner: 'NightMoom',
          repo: 'https://github.com/NightMoom/blog-issue.git',
          clientId: '8a5ecbaf6a60971d1318',
          clientSecret: '1d02e9a47e0b91a7b78faf29e8148ce2d01e701c'
        }
      },
      locales: {
        '/': {
          lang: 'zh-CN'
        },
      },
      cache: false, // 
      configureWebpack: {
        resolve: {
          alias: {
            '@': '/'
          }
        }
      },
      head: [
        [
          'script', {}, `
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?be3027d01299b67c1535e670a2c5a957";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
          `
        ]
      ],
      plugins: [
        ['cursor-effects', {
          size: 2, // size of the particle, default: 2
          shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
          zIndex: 999999999, // z-index property of the canvas, default: 999999999
        }]
      ],
    }
  }
})
