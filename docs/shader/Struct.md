---
title: "结构体"
publish: false
date: 2022-06-06 15:02:28
---

在着色器语言 GLSL ES 前面内容介绍过浮点数 float、整形数 int、三维向量 vec3、4x4 矩阵 mat4 等各种数据类型，关于结构体主要功能就是利用 WebGL 着色器已经提供的常见数据类型，自定义一个新的数据类型。
WebGL 着色器语言中结构体和 C 语言类似，结构体是由多个同类或不同类的数据类型构成的一个集合。

```c
// 首先定义一个结构体，也就是自定义一个数据类型
struct DirectionalLight {
  vec3 direction;
  vec4 color;
  float shadowBias;
};
// 使用自定义的结构体，或者说使用自定义的数据类型DirectionalLight声明一个变量
uniform DirectionalLight dirLight;
```

`struct`是声明结构体的关键字，`DirectionalLight`是自定义结构体的名称，可以根据表达的含义自由命名，你可以把自定义的结构体 `DirectionalLight` 理解为自定义的数据类型，自定义的数据类型`DirectionalLight`就像浮点数 `float`、三维向量 `vec3` 一样可以用来声明一个变量。

## 访问分量(点符号.)

三维向量`vec3`、4x4 矩阵 `mat4` 等数据类型可以通过点符号.访问自身的变量或元素，对于结构体关键字 `struct` 自定义的数据类型也一样可以通过点符号访问自身的变量或元素，你可把 `webgl` 着色器的结构体类比 `javascript` 的对象，对象可以通过点符号访问对象自身的属性。

```c
vec3 dir = vec3(1.0,0.0,0.0);
dir.x = 100.0// x分量赋值
float x = dir.x;// 访问x分量，赋值给其它变量
```

```c
struct DirectionalLight {
  vec3 direction;
  vec4 color;
};
uniform DirectionalLight dirLight;
// 结构体成员赋值
dirLight.color = vec4(0.8,0.6,0.1,1.0);
// 访问成员，赋值给其它变量
vec4 newcol = dirLight.color;
```

## 结构体 uniform 变量数据传递

```c
// 获得结构体位置
var lightColor = gl.getUniformLocation(program,'directionalLight.color');
// 结构体的一个属性传递数据
gl.uniform4f(lightColor, 1.0, 0.0, 1.0,0.7);
```
