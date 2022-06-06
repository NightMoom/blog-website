---
title: "着色器运算精度"
publish: false
date: 2022-06-06 11:16:43
---

通过设置着色器数值的精度可以更好的配置资源，可以根据需要，在不太影响渲染效果前提下，可以尽量降低运算精度。

## lowp、mediump 和 highp 关键字

声明变量精度高低的三个关键子`lowp`、`mediump`和`highp`。

| 关键字  |  精度  |
| :-----: | :----: |
|  lowp   | 低精度 |
| mediump | 中精度 |
|  highp  | 高精度 |

声明单个 WebGL 着色器变量的精度

```c
// 低精度pos变量
lowp vec3 pos;
// 高精度浮点数变量k
highp float k;
```

## precision 关键字

通过`precision`关键字可以批量声明一些变量精度。

比如顶点着色器代码设置`precision highp float;`，表示顶点着色器中所有浮点数精度为高精度。

`precision mediump float; `

比如片元着色器代码设置 `precision lowp int;`，表示片元着色器中所有整型数精度为低精度。

`precision mediump float;`

## 顶点和片元着色器不同类型数据默认精度

除了片元着色器浮点数的精度意外，WebGL 系统其它的数值精通全部设置了默认精度，所以如果片元着色器中使用了浮点数类型的变量，比如声明精度，否则会报错。

片元着色器中设置浮点数变量精度，可以单独设置一个变量，也可以使用关键字 `precision` 批量设置。

```c
//所有float类型数据的精度是lowp
precision lowp float;
```

顶点着色器默认精度

|  数据类型   |   默认精度   |
| :---------: | :----------: |
|     int     | 高精度 hight |
|    float    |  高度 hight  |
|  sampler2D  | 低精度 lowp  |
| samplerCube | 低精度 lowp  |

片元着色器默认精度

|  数据类型   |                       默认精度                       |
| :---------: | :--------------------------------------------------: |
|     int     |                    中精度 mediump                    |
|    float    | 无默认值，如果片元着色器用到浮点数，注意一定手动设置 |
|  sampler2D  |                     低精度 lowp                      |
| samplerCube |                     低精度 lowp                      |
