---
title: "内置变量"
publish: false
date: 2022-06-06 09:42:31
---

## gl_PointSize

当`WebGL`执行绘制函数`gl.drawArrays()`绘制模式是点模式`gl.POINTS`的时候，顶点着色器语言`main`函数中才会用到内置变量`gl_PointSize`，使用内置变量`gl_PointSize`主要是用来设置顶点渲染出来的方形点像素大小。

```c
void main() {
  //给内置变量gl_PointSize赋值像素大小，注意值是浮点数
  gl_PointSize=20.0;
}
```

```c
//绘制函数绘制模式：点gl.POINTS
gl.drawArrays(gl.POINTS,0,点数量);
```

## gl_Position

`gl_Position`内置变量主要和顶点相关，出现的位置是顶点着色器语言的`main` 函数中。
`gl_Position`内置变量表示最终传入片元着色器片元化要使用的顶点位置坐标。

如果只有一个顶点，直接在给顶点着色器中设置内置变量`gl_Position`赋值就可以，内置变量`gl_Position`的值是四维向量`vec4(x,y,z,1.0)`,前三个参数表示顶点的 xyz 坐标值，第四个参数是**浮点数 1.0**。

```c
void main() {
  //顶点位置，位于坐标原点
  gl_Position = vec4(0.0,0.0,0.0,1.0);
}
```

如果你想完全理解内置变量`gl_Position`，必须建立逐顶点的概念，如果`javascript`语言中出现一个变量赋值，你可以理解为仅仅执行一次，但是对于着色器中不能直接这么理解，如果有多个顶点，你可以理解为每个顶点都要执行一遍顶点着色器主函数`main`中的程序。

多个顶点的时候，内置变量`gl_Position`对应的值是`attribute`关键字声明的顶点位置坐标变量`apos`，顶点位置坐标变量`apos`变量对应了 `javascript`代码中多个顶点位置数据。

## gl_FragColor

`gl_FragColor`内置变量主要用来设置片元像素的颜色，出现的位置是片元着色器语言的`main`函数中。

内置变量`gl_Position`的值是四维向量`vec4(r,g,b,a)`,前三个参数表示片元像素颜色值 RGB，第四个参数是片元像素透明度 A，`1.0`表示不透明,`0.0`表示完全透明。

```c
// 片元颜色设置为红色
gl_FragColor = vec4(1.0,0.0,0.0,1.0);
```

理解内置变量`gl_Position`需要建立逐顶点的概念，对于内置变量`gl_FragColor`而言，需要建立逐片元的概念。顶点经过片元着色器片元化以后，得到一个个片元，或者说像素点，然后通过内置变量`gl_FragColor`给每一个片元设置颜色值，所有片元可以使用同一个颜色值，也可能不是同一个颜色值，可以通过特定算法计算或者纹理像素采样。

根据片元位置设置渐变色

```c
  void main() {
    // 片元沿着x方向渐变
    gl_FragColor = vec4(gl_FragCoord.x/500.0*1.0,1.0,0.0,1.0);
  }
```

纹理采样

```c
// 接收插值后的纹理坐标
varying vec2 v_TexCoord;
// 纹理图片像素数据
uniform sampler2D u_Sampler;
void main() {
  // 采集纹素，逐片元赋值像素值
  gl_FragColor = texture2D(u_Sampler,v_TexCoord);
}
```

## gl_PointCoord

如果你想了解内置变量`gl_PointCoord`表示的坐标含义，就需要了解`WebGL`绘制函数`gl.drawArrays()`的绘制模式参数`gl.POINTS`。

绘制函数`gl.drawArrays()`绘制模式参数设置为点渲染模式`gl.POINTS`，`WebGL`会把顶点渲染为一个方形区域，在顶点着色器代码中可以通过内置变量`gl_PointSize`设置顶点渲染的方向区域像素大小。

一个顶点渲染为一个方形区域，每个方形区域可以以方向区域的左上角建立一个直角坐标系，然后使用内置变量`gl_PointCoord`描述每个方形区域中像素或者说片元的坐标，比如方形区域的左上角坐标是`(0.0,0.0)`,每个方形区域几何中心坐标是`(0.5,0.5)`，右下角坐标是`(1.0,1.0)`。

注意内置变量`gl_PointCoord`和`gl_FragCoord`表示的像素坐标含义不同,查看下图表示。

![1](https://piclog-1257285586.cos.ap-guangzhou.myqcloud.com/uPic/lWwsVL.png)

```c
// 点绘制模式渲染10个顶点
gl.drawArrays(gl.POINTS,0,10);
```

顶点着色器中通过内置变量`gl_PointSize`设置点渲染的方形区域像素尺寸。

```c
void main() {
  //点渲染的方形区域像素大小
  gl_PointSize = 20.0;
  ...
}
```

gl.POINTS 绘制模式点默认渲染效果是方形区域，通过下面片元着色器代码设置可以把默认渲染效果更改为圆形区域。

```c
  precision lowp float;// 所有float类型数据的精度是lowp
  void main() {
    // 计算方形区域每个片元距离方形几何中心的距离
    // gl.POINTS模式点渲染的方形区域,方形中心是0.5,0.5,左上角是坐标原点,右下角是1.0,1.0，
    float r = distance(gl_PointCoord, vec2(0.5, 0.5));
    //根据距离设置片元
    if(r < 0.5){
      // 方形区域片元距离几何中心半径小于0.5，像素颜色设置红色
      gl_FragColor = vec4(1.0,0.0,0.0,1.0);
    }else {
      // 方形区域距离几何中心半径不小于0.5的片元剪裁舍弃掉：
      discard;
    }
  }
```

## gl_FragCoord

内置变量`gl_FragCoord`表示`WebGL`在`canvas`画布上渲染的所有片元或者说像素的坐标，坐标原点是 canvas 画布的左上角，x 轴水平向右，y 竖直向下，`gl_FragCoord`坐标的单位是像素，`gl_FragCoord`的值是`vec2(x,y)`,通过`gl_FragCoord.x`、`gl_FragCoord.y`方式可以分别访问片元坐标的纵横坐标。

![2](https://piclog-1257285586.cos.ap-guangzhou.myqcloud.com/uPic/BBDvLC.png)

下面代码是把 canvas 画布上不同区域片元设置为不同颜色。

```c
  void main() {
    // 根据片元的x坐标，来设置片元的像素值
    if(gl_FragCoord.x < 300.0){
      // canvas画布上[0,300)之间片元像素值设置
      gl_FragColor = vec4(1.0,0.0,0.0,1.0);
    }else if (gl_FragCoord.x <= 400.0) {
      // canvas画布上(300,400]之间片元像素值设置
      gl_FragColor = vec4(0.0,1.0,0.0,1.0);
    }else {
      // canvas画布上(400,500]之间片元像素值设置
      gl_FragColor = vec4(0.0,0.0,1.0,1.0);
    }
    // 所有片元设置为红色
    // gl_FragColor = vec4(1.0,0.0,0.0,1.0);
  }
```

片元的颜色随着坐标变化(设置一个渐变色效果)

```c
  void main() {
    // 片元沿着x方向渐变
    gl_FragColor = vec4(gl_FragCoord.x/500.0*1.0,1.0,0.0,1.0);
  }
```
