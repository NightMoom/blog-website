/*
 * @Author: zsmya
 * @Date: 2022-05-25 11:24:28
 * @LastEditors: zsmya
 * @LastEditTime: 2022-06-15 15:08:05
 * @FilePath: /vuepress-starter/docs/.vuepress/config.js
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
 */

const vssueConifg = {
  website: {
    platform: 'github',
    owner: 'NightMoom',
    repo: 'blog-issue',
    clientId: 'c193cff46a6dc1761c31',
    clientSecret: 'a7fc7378348d5dc42485a00cd3fa1dc32239ff5d'
  },
  publish: {
    platform: 'github',
    owner: 'NightMoom',
    repo: 'blog-issue',
    clientId: '3ce182f7af8f35589f82',
    clientSecret: '245f560c140ef9ab842bfa964f83d738b1106a78'
  },
  local: {
    platform: 'github',
    owner: 'NightMoom',
    repo: 'blog-issue',
    clientId: '64d2f887fc2ce7ed9f1e',
    clientSecret: 'de63affa66442f55967928a6119d9fbc95cc3f3b'  
  }
}

const valineConfig = {
  appId: "JBrIAPnTlHFjaR0YQoklrcJa-gzGzoHsz",
  appKey: "UImCjPCygwl25mr17z9MdzdR"
}
const mode = process.env.mode;

const base = mode === 'website' ? '/blog-website/' : '/'
console.log(base)
console.log(vssueConifg[mode])
module.exports = {
  base: process.env.mode === 'website' ? '/blog-website/' : '/',
  title: '深夜书店',
  description: '不积跬步无以至千里',
  theme: 'vuepress-theme-reco',
  themeConfig: {
    type: 'blog',
    search: true,
    searchMaxSuggestions: 10,
    subSidebar: 'auto',
    lastUpdated: '更新时间:',
    author: 'zsmya',
    authorAvatar: '/logo.jpeg',
    nav: [
      { text: '首页', link: '/' },
      // {
      //   text: '前端',
      //   items: [
      //     {
      //       text: '基础',
      //       items: [
      //         {
      //           text: 'JavaScript',
      //           link: '/javascript/'
      //         },
      //         {
      //           text: 'css',
      //           link: '/css/'
      //         },
      //         {
      //           text: 'Vue',
      //           link: '/vue/'
      //         }
      //       ]
      //     },
      //   ]
      // },
      // {
      //   text: '框架',
      //   items: [
      //     {
      //       text: 'Vue',
      //       link: '/vue/'
      //     }
      //   ],
      // },
      // {
      //   text: '地图相关',
      //   items: [
      //     {
      //       text: 'openlayers',
      //       link: '/openlayers/'
      //     },
      //     {
      //       text: '高德地图',
      //       link: '/amap/ '
      //     }
      //   ]
      // },
      {
        text: "Vue3",
        items: [
          {
            text: "Vue3指南",
            link: '/vue/vue3/guide/'
          },
          {
            text: 'Vue3技巧',
            link: '/vue/vue3/skill/'
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
    sidebar: {
      '/shader/': [
        '',
        'ShaderVar',
        'ShaderConst',
        'PrimitiveType',
        'ShaderVec',
        'ShaderMatrix',
        'ShaderProcess',
        'VarIn',
        "Variable",
        "FragShader",
        "Sampler",
        "FnIn",
        'VarPrecision',
        "Fn",
        "Struct",
        "Discard",
        "Array",
        "Refer"
      ],
      '/vue/vue3/guide/': [
        '',
        'Initialize',
        'Lifecycle'
      ]
    },
    // valineConfig,
    vssueConfig: vssueConifg[mode],
    // keyPage: {
    //   keys: ['c930e1a12063e11fddd0cb9221003ad7'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // }
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
    }],
    [
      'md-enhance',
      {
        codegroup: true,
        mermaid: true,
        container: true,
      }
    ]
  ],
}
