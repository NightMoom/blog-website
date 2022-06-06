---
title: "顶点着色器和片元着色器"
publish: false
date: 2022-06-06 10:48:21
---

`WebGL` 的着色器代码分为顶点着色器代码和片元着色器代码两部分，顶点着色器代码会在 `GPU` 的顶点着色器单元执行，片元着色器代码会在 `GPU` 的片元着色器单元执行，在 `WebGL` 渲染管线流程中，或者说`GPU` 的渲染流程中，顶点着色器代码先执行处理顶点，得到一系列片元，然后再执行片元着色器代码处理片元。

## main()函数

顶点着色器和片元着色器代码都有一个唯一的主函数`main()`,`attribute`、`varying`和`uniform`类型的变量需要在 main 函数之外声明，在 main 函数中通常编写，逐片元或逐顶点处理的代码。

## 着色器数据传递

javascript 可以通过 WebGL 相关的 API 把一些数据传递给顶点着色器和片元着色器。

在着色器中通过 attribute 和 uniform 关键字声明的变量，需要通过 javascript 代码传递相关的数据。比如通过关键字 attribute 声明的顶点位置坐标数据，可以通过 javascript 调用 WebGL 相关 API 传递顶点数据

## 着色器编写形式

顶点着色器、片元着色器代码在 javascript 代码中以字符串的形式存在，javascript 会通过调用相关 WebGL API 编译处理着色器代码，然后在 CPU 着色器单元执行。

在 javascript 语言中以字符串的形式编写着色器代码比较麻烦，可以在 div 元素中编写着色器代码，然后通过元素的`.innerText `属性返回着色器代码字符串即可。

WebGL 着色器代码在 javascript 以字符串的形式存在。

```c
//顶点着色器源码
var vertexShaderSource = '' +
    'void main(){' +
    //给内置变量gl_PointSize赋值像素大小
    '   gl_PointSize=20.0;' +
    //顶点位置，位于坐标原点
    '   gl_Position =vec4(0.0,0.0,0.0,1.0);' +
    '}';

```

为了方便，可以把着色器代码放在 script 标签中编写。

```c
<!-- 顶点着色器源码 -->
<script id="vertexShader" type="x-shader/x-vertex">
  void main() {
    //给内置变量gl_PointSize赋值像素大小
    gl_PointSize=20.0;
    //顶点位置，位于坐标原点
    gl_Position =vec4(0.0,0.0,0.0,1.0);
  }
</script>

```

通过元素的`.innerText` 属性以字符串形式获得 script 标签中的 WebGL 着色器代码

```c
//顶点着色器源码
var vertexShaderSource = document.getElementById('vertexShader').innerText;
//片元着色器源码
var fragShaderSource = document.getElementById('fragmentShader').innerText;

```

javascript 调用相关的 WebGL API 编译处理着色器代码

```c
//创建顶点着色器对象
var vertexShader = gl.createShader(gl.VERTEX_SHADER);
//创建片元着色器对象
var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
//引入顶点、片元着色器源代码
gl.shaderSource(vertexShader,vertexShaderSource);
gl.shaderSource(fragmentShader,fragmentShaderSource);
//编译顶点、片元着色器
gl.compileShader(vertexShader);
gl.compileShader(fragmentShader);
```
