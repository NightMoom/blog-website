---
title: "函数"
date: 2022-06-06 11:27:05
publish: false
---

WebGL 着色器和 javascript 语言、C 语言一样可以声明函数，着色器声明函数方式类似 C 语言。

## 有返回值

把函数计算后需要返回的值通过关键字`return`返回，注意声明函数时候，函数名称前需要声明`return`返回值的数据类型。

```c
// 声明一个函数
float add(float x,float y){
  return x + y
}
void main(){
  // 调用函数
  float x = add(1.0,2.8);
  ...
}

```

```
返回值数据类型 函数名称(参数1,参数2...){
  return 函数返回值
}
```

## 无法返回值 void

自定义函数无返回值的时候，和主函数 main 一样，使用关键字 void 声明函数。

```c
vec3 direc = vec3(1.0,0.0,0.0);
// 声明一个函数，改变变量direc的x分量
void fun(){
  // 通过函数改变参数x分量
  direc.x = 50.0;
}
void main(){
  // 执行函数
  fun();
  ...
}
```

## out

自定义声明一个函数，传入一个参数，默认情况下，参数被修改了，但是并不影响传入的参数对应变量的值，如果使用 `out` 关键字声明参数变量，函数内部改变参数，函数外参数对应的变量会改变，你可以通过下面的代码在着色器中进行测试。

```c
// 使用out关键字声明dir参数
float fun(out vec3 dir){
  // 如果使用了out关键字，改变dir的值，dir对应的外部变量direc会被修改
  dir.x = 100.0;
  return dir.x*dir.x;
}
vec3 direc = vec3(1.0,0.0,0.0);
void main() {
  fun(direc);
  // 通过WebGL点渲染验证direc变量是否被fun函数改变
  gl_PointSize=direc.x;
  gl_Position =vec4(0.0,0.0,0.0,1.0);
}
```

你可以这么理解上面的代码，如果函数参数形式是`(out vec3 dir)`,相当于传入参数 `dir` 是变量 `direc` 的索引地址，如果函数参数形式是`(vec3 dir)`,相当于传入参数是变量`direc`的值本身

## in 和 const in

自定义函数声明函数参数的时候是用参数和不使用 `in` 或 `out`任何关键字是等价的，也就是说函数名`(in vec3 dir)`和函数名`(vec3 dir)`是等价的。

函数名`(const in vec3 dir)`和函数名`(in vec3 dir`)区别在于使用 `const in` 关键字声明参数变量的时候，参数的值不能被修改，`(in vec3 dir)`或`(vec3 dir)`的形式变量 `dir` 是可以在函数内被修改的。
