---
title: "数组"
publish: false
date: 2022-06-06 15:07:21
---

WebGL 着色器和 javascript 语言、C 语言一样 可以声明数组类型变量，不过 WebGL 着色器的数据仅仅支持一维数组，不支持多维数组。

声明语法结构

`数组元素的数据类型 数组变量名[数组元素个数]`

```c
// 声明一个数组变量fArr，数组变量fArr有100个元素，元素的数据类型是浮点数
float arr[100];
// 声明一个长度20的三维向量数组变量v3Arr
vec3 v3Arr[20];
```

访问数组变量元素,直接通过数组下标就可以，比如 arr[0]表示数组第一个元素，arr[1]表示数组第二个元素。

`gl_Position =vec4(arr[1],0.0,0.0,1.0)`

## 数组变量数据传递

WebGL 顶点或片元着色器的数组变量需要传递数据，声明数组变量的时候，需要使用关键词 `uniform`。

`uniform float arr[12];`

调用 WebGL API 给数据变量传递数据
`uniform float arr[12];`

```c
// 传递数组的某个元素  一次传递一个
var arr0 = gl.getUniformLocation(program, "arr[0]")
// 传递数组第1个元素的值
gl.uniform1f(arr0, 0.3);
var arr1 = gl.getUniformLocation(program, "arr[1]")
// 传递数组第2个元素的值
gl.uniform1f(arr1, -0.3);

// 批量传递数组元素值
var arr =gl.getUniformLocation(program, "arr")
var typeArr = new Float32Array([
  0.6,-0.3,0.6,0.4,
  -0.8,-0.3,0.6,0.4,
  0.7,0.7,0.6,0.99,
])
gl.uniform1fv(, typeArr);
```

## 结构体声明数组元素

自定义结构体用来声明数组元素的数据类型。

```c
// 自定义一个方向光结构体
struct DirectionalLight {
  vec3 direction;//光的方向
  vec4 color;//光的颜色
};
// 声明一个数组变量dirLight，可以存入3个方向光元素
// DirectionalLight声明数组元素的数据类型
uniform DirectionalLight dirLight[3];
```

```c
// 通过WebGL API给数组中第二个方向光的颜色成员传递值
var lightColor = gl.getUniformLocation(program,'dirLight[1].color');
gl.uniform4f(lightColor, 1.0, 0.0, 1.0,0.7);
```
