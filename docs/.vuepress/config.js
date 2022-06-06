/*
 * @Author: zsmya
 * @Date: 2022-05-25 11:24:28
 * @LastEditors: zsmya
 * @LastEditTime: 2022-06-06 18:16:42
 * @FilePath: /vuepress-starter/docs/.vuepress/config.js
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
 */

const vssueConifg = {
  website: {
    
  },
  publish: {
    platform: 'github',
    owner: 'NightMoom',
    repo: 'https://github.com/NightMoom/blog-issue.git',
    clientId: '8a5ecbaf6a60971d1318',
    clientSecret: '1d02e9a47e0b91a7b78faf29e8148ce2d01e701c'
  }
}

const valineConfig = {
  appId: "JBrIAPnTlHFjaR0YQoklrcJa-gzGzoHsz",
  appKey: "UImCjPCygwl25mr17z9MdzdR"
}
const base = process.env.mode === 'website' ? '/blog-website/' : '/'
console.log(base)
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
    },
    // valineConfig,
    vssueConfig: {
      platform: 'github',
      owner: 'NightMoom',
      repo: 'https://github.com/NightMoom/blog-issue.git',
      clientId: '8a5ecbaf6a60971d1318',
      clientSecret: '1d02e9a47e0b91a7b78faf29e8148ce2d01e701c'
    },
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
    }]
  ],
}
