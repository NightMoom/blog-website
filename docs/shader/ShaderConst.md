---
title: "声明一个常量"
date: 2022-06-02 16:20:00
publish: false
key: var
---

着色器语言和`C`语言、`javascript`语言一样可以通过关键字`const`声明一个常量。

```glsl
// 着色器语言定义一个整形常量
const int count = 10;
// 定义一个浮点数常量10.0
const float count = 10.0;
// 定义一个三维向量vec3常量,表示方向等量
const vec3 direction = vec(1.0,0.5,0.6);
```

**常量一旦定义，就不能改变**

> 在 JavaScript 里面，const 声明的对象可以改变
