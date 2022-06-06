---
title: "discard舍弃片元"
---

`discard`关键字通常出现在片元着色器的 `if` 语句或 `for` 语句中，`discard`的使用语法就像`for`语句中的`continue`和`break`关键字一样，直接编写 discard;即可,但是`discard`的功能比较特殊，专门用于着色器片元处理。
如果想理解 `discard`，你首先应该建立逐片元的概念。GPU 的片元着色器在逐个处理片元的过程中，会把不符合程序条件的代码舍弃掉。

## discard 一个代码案例

```c
//点绘制模式
gl.drawArrays(gl.POINTS, 0, 4);
```

```c
<!-- 顶点着色器源码 -->
<script id="vertexShader" type="x-shader/x-vertex">
  //attribute声明vec4类型变量apos
  attribute vec4 apos;
  void main() {
    //点渲染的方形区域像素大小
    gl_PointSize = 100.0;
    //顶点坐标apos赋值给内置变量gl_Position
    //逐顶点处理数据
    gl_Position = apos;
  }

</script>
<!-- 片元着色器源码 -->
<script id="fragmentShader" type="x-shader/x-fragment">
  precision lowp float;// 所有float类型数据的精度是lowp
  void main() {
    // 计算方形区域每个片元距离方形几何中心的距离
    // gl.POINTS模式点渲染的方形区域,方形中心是0.5,0.5,左上角是坐标原点,右下角是1.0,1.0，
    float r = distance(gl_PointCoord, vec2(0.5, 0.5));
    //根据距离设置片元
    if(r > 0.5){
      // 距离方形中心距离大于0.5的片元剪裁舍弃掉
      discard;
    }
    gl_FragColor = vec4(1.0,0.0,0.0,1.0);
  }

</script>
```
