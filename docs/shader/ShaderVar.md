---
title: "声明一个变量"
tags:
  - 着色器
date: 2022-06-02 16:10:00
publish: false
key: var
---

下面会对`C`语言、着色器语言`ES GLSL`、`javascript`语言和`TypeScript`语言声明变量的方式进行简单展示，这样可以更方便不同基础读者类比学习。

## `c`语言

着色器语言`ES GLSL`和`C`语言有很多相似之处，如果你有一定的`C`语言基础，对于学习着色器语言也是有一定的帮助的。

```c
// C语言声明一个整形变量并赋值10
int count = 10;
// 改变变量值，重新赋值
count=20;
// 声明一个浮点数
float num = 10.0
```

## 着色器语言 `ES GLSL`

着色器语言`ES GLSL`和`C`语言一样属于强类型语言，声明一个变量需要定义变量的数据类型，如果你学习过`C`语言，可以类比`C`语言，着色器语言变量的声明基本格式和`C`语言一致。

```glsl
// 着色器语言定义一个整形常量
int count = 10;
// 定义一个浮点数变量num，并赋值10.0
float num = 10.0;
// 定义一个三维向量vec3
vec3 direction = vec3(1.0,0.5,0.6);
// 声明一个数据类型是布尔值的变量，并赋值为true
bool lightBool = true;
```

## `javascript` 语言

脚本语言`javascript`最早出现的时候，为了开发的方便，声明一个变量不需要定义变量的数据类型。
javascript 声明变量

```js
// javascript声明一个变量，并赋值100
var x = 100;
// 声明一个变量,赋值字符串
var str = "webgl";
```

## `TypeScript`语言

如果你接触前端开发比较久了，肯定会对`TypeScript`有一定的了解，相比较`javascript`而言，`TypeScript`语言声明变量的时候，和 C 语言、着色器语言一样需要声明变量的数据类型。

```typescript
let flag: boolean = true; // 声明一个数据类型为布尔的变量
let count: number = 6; // 声明一个数据类型为数字的变量
let lun: string = "typescript"; //声明一个数据类型为字符串的变量
```

`ES GLSL`声明变量和`c`、`Typescript`类似，对变量类型有着严格的推导
