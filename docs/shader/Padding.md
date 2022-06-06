---
title: "预处理"
date: 2022-06-06 15:13:07
publish: false
---

WebGL 着色器语言和 C 语言一样提供了一些用于预处理的命令`#define`、`#include`、`#if` 等以#号开头的命令。

## 宏定义#define

注意宏定义和着色器声明的变量不同，着色器程序执行前需要进行编译处理，着色器程序编译处理之后程序才会在 GPU 上执行，宏定义主要是在编译处理阶段起作用。比如宏定义#define PI 3.14,PI 符号表示圆周率 3.14，如果在代码 `return float f = PI\*100.0;`中使用 PI 符号，编译预处理的时候把自动把 PI 替换成浮点数 3.14。

```c
#define PI 3.14//圆周率
#define RECIPROCAL_PI 0.318//圆周率倒数
float add(){
  float f = PI*100.0;//预处理的时候会把PI符号自动替换为3.14
  return f;
}
```

预处理之后代码

```c
float add(){
  float f = 3.14*100.0;//预处理的时候会把PI符号自动替换为3.14
  return f;
}
```

## #ifdef

`#ifdef` 的作用是判断一个宏定义是否存在，如果存在，在编译预处理的时候，代码 `vColor.xyz = color.xyz;`会保留，否则就不保留。
通过`#ifdef` 和`#endif` 两个关键字约束作用代码范围。

```c
#define USE_COLOR 1.0;
// 判断宏定义是否存在
#ifdef USE_COLOR
// 顶点颜色进行插值计算
vColor.xyz = color.xyz;
#endif
```

上面代码预处理后最终结果就是`vColor.xyz = color.xyz;`,在 GPU 着色器中执行的是下面代码，而不是上面代码。

`vColor.xyz = color.xyz;`

## #if

`#if`主要是判断条件是否成立，如果成立，在编译预处理后会保留通过`#if` 和`#endif` 两个关键字之间的代码，否在不保留。

```c
#if 10 > 0
vec3 v3 = vec3(1.0,1.0,0.0);
#endif
```

## 引入文件#include

在编写 WebGL 着色器代码的时候，比如代码比较多可能会拆分为多个文件，比如某一段逻辑代码会在多个着色器文件中使用，也可以抽离出来单独作为一个文件。WebGL 着色器提供因此提供了一个预处理命令`#include` 关键字可在一个着色器文件中引入另一个着色器文件。

着色器文件`common.glsl`

`float a = 0.5;`

着色器文件`color.glsl`

`uniform vec3 color;`

`frag.glgl`文件的代码中引入了`color.glsl`和`common.glsl`两个着色器文件。

```c
#include <common>
#include <color>
void main(){
  gl_FragColor = vec4(color,a);
}

```

上面代码等价于下面代码

```c
float a = 0.5;
uniform vec3 color;
void main(){
  gl_FragColor = vec4(color,a);
}
```
