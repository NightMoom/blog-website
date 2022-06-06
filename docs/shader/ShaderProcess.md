---
title: "if-else语句和for语句"
date: 2022-06-06 09:39:55
publish: false
---

着色器语言 GLSL 中关于 if 语句、for 语句的使用，和 javascript 语言、C 语言中的 if 语句、for 语句执行逻辑规则基本一致

单独使用`if`

```glsl
if(x>100){
  gl_FragColor = vec4(1.0,0.0,0.0,1.0);//红色
}
```

`if-else`

```glsl
bool colorBool;
// 根据布尔值设置片元的像素值
if(bool){
  gl_FragColor = vec4(1.0,0.0,0.0,1.0);//红色
}else {
  gl_FragColor = vec4(0.0,0.0,1.0,1.0);//蓝色
}
```

`if-else if-else if-...else形式`

```glsl
if(x<10){

}else if (x<20) {

}else if (x<30) {

}else {

}
```

`continue`和`break`关键字

`continue:`直接跳到 for 循环的下一个循环 `break`:for 循环终止执行

```glsl
for (int i = 0; i < 20; i++) {
  ...
  if(i==15){
    continue;//进行下次循环，执行i=16对应的循环
  }
  ...
}
```

```glsl
for (int i = 0; i < 20; i++) {
  ...
  if(i==15){
    break;//直接终止循环执行，i=16、17等后面的循环不再执行
  }
  ...
}
```
