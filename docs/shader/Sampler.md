---
title: "纹理采样器Sampler2D"
publish: false
date: 2022-06-06 10:52:54
---

WebGL 在处理图片纹理编写片元着色器的时候，会通过`sampler2D`关键字声明一个纹理相关的变量，`sampler2D`和`vec2`、`float`表示一种数据类型，只不过`sampler2D`关键字声明的变量表示一种取样器类型变量，简单点说就是该变量对应纹理图片的像素数据。

## 声明变量

`uniform sampler2D u_Sampler;`

在前面课程中讲解过，通过 `attribute` 关键字声明的顶点变量，需要通过 `javascript` 调用 `gl.vertexAttribPointer()`等 WebGL API 传递 `attribute` 变量对应的顶点数据，对于片元着色器中表示图片像素数据的 `sampler2D` 变量，一样需要 `javascript` 调用 `gl.uniform1i()`等 WebGL API 传递图像数据。所以 sampler2D 关键字声明变量的时候，需要使用 uniform 关键字进行修饰。

## 内置函数 texture2D

WebGL 着色器提供了内置函数`texture2D`，可以直接使用，通过`texture2D`函数，可以从纹理图像提取像素值，赋值给内置变量`gl_FragColor`

```c
// 采集纹素，逐片元赋值像素值
gl_FragColor = texture2D(u_Sampler,v_TexCoord);
```

```c
<!-- 顶点着色器源码 -->
<script id="vertexShader" type="x-shader/x-vertex">
  attribute vec4 a_Position;//顶点位置坐标
  attribute vec2 a_TexCoord;//纹理坐标
  varying vec2 v_TexCoord;//插值后纹理坐标
  void main() {
    //顶点坐标apos赋值给内置变量gl_Position
    gl_Position = a_Position;
    //纹理坐标插值计算
    v_TexCoord = a_TexCoord;
  }

</script>
<!-- 片元着色器源码 -->
<script id="fragmentShader" type="x-shader/x-fragment">
  //所有float类型数据的精度是highp
  precision highp float;
  // 接收插值后的纹理坐标
  varying vec2 v_TexCoord;
  // 纹理图片像素数据
  uniform sampler2D u_Sampler;
  void main() {
    // 采集纹素，逐片元赋值像素值
    gl_FragColor = texture2D(u_Sampler,v_TexCoord);
  }
</script>
```
