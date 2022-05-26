/*
 * @Author: zsmya
 * @Date: 2022-05-25 13:52:09
 * @LastEditors: zsmya
 * @LastEditTime: 2022-05-25 13:54:06
 * @FilePath: /vuepress-starter/docs/.vuepress/enhanceApp.js
 * @Description: 
 * Copyright (c) 2022 by zsmya, All Rights Reserved. 
 */
export default ({ router }) => {
  router.beforeEach((to, from, next) => {
    if (typeof _hmt !== "undefined") {
      if (to.path) {
        _hmt.push(["_trackPageview", to.fullPath]);
      }
    }
    
    next();
  });
};