---
title: "内置函数"
date: 2022-06-06 10:58:45
publish: false
---

WebGL 着色器提供了一系列内置函数，所谓内置函数和内置变量一样，也就是说不用声明，就可以直接调用。比如向量点乘 dot()、向量叉乘 cross()、两点之间距离 `distance()`等用于数学计算的函数。

## 角度函数和三角函数

WebGL 着色器内置函数三角函数，名称和初高中数学写法基本一致，函数参数是角度的弧度值，函数参数数据类型是浮点数 `float`。

| 内置函数  |      功能      |
| :-------: | :------------: |
| radians() | 角度值转弧度值 |
| degrees() | 弧度值转角度值 |
| sin(弧度) |     正弦值     |
| cos(弧度) |     余弦值     |
| tan(弧度) |     正切值     |
|  asin()   | 反正弦值(弧度) |
|  acos()   | 反余弦值(弧度) |
|  atan()   | 反正切值(弧度) |

```c
//角度为30度，并把角度值转化为弧度值
float radian = radians(30.0);
//求解角度余弦值
float cos = cos(radian);
//求解角度正弦值
float sin = sin(radian);
```

## 几何函数

内置函数几何函数主要是与几何相关计算的函数，比如计算两点之间的距离，计算两个向量的叉乘、点乘...

|              内置函数               |                                                              功能                                                              |
| :---------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
|              length(a)              |                                                          向量 a 长度                                                           |
|            distance(a,b)            |                                                       a、b 两点之间距离                                                        |
|              dot(a,b)               |                                                           两向量点积                                                           |
|             cross(a,b)              |                                                           两向量叉乘                                                           |
|            normalize(a)             |                                      向量 a 归一化,长度变为 1，方向不变，即返回值单位向量                                      |
|         faceforward(a,b,c)          |                            向量朝前：如果 c、b 两向量点乘小于 0(dot(c,b) < 0)，则返回 a，否则返回-a                            |
| reflect(Ru,Fa) 或 reflect(Ru,Fa,Zh) | 向量反射：比如通过入射光计算反射光方向向量,Fa 表示反射平面的法线方向(单位向量)，Ru 表示入射光线的方向(单位向量)，Zh 表示折射率 |

```c
// 二维平面：计算(0.5, 0.0)和(0.5, 0.5)两点之间距离
float dis2 = distance(vec2(0.5, 0.0), vec2(0.5, 0.5));
// 3D空间
float dis3 = distance(vec3(0.5, 0.0, 0.0), vec3(0.5, 0.5, 0.5));

```

```c
// 向量归一化，方向不变，长度为1
// 返回值vec3(1.0,0.0,0.0)
vec3 normal = normalize(vec3(3.0,0.0,0.0));
```

```c
// 光线方向：u_lightDirection，顶点法向量：normal
// 计算平行光方向向量和顶点法向量的点积
float dot = max(dot(u_lightDirection, normal), 0.0);
// 计算反射后的颜色
// 光线颜色：u_lightColor，顶点颜色：a_color
vec3 reflectedLight = u_lightColor * a_color.rgb * dot;
```

## 指数函数

|   内置函数    |        功能        |
| :-----------: | :----------------: |
|   pow(x,n)    |  x 的 n 次幂函数   |
|    exp(x)     |   x 的自然指数 e   |
|    log(x)     |     x 自然对数     |
|    exp2(x)    |     2 的指数 x     |
|    log2()     | 对数函数，底数为 2 |
|    sqrt()     |       平方根       |
| inversesqrt() |     平方根倒数     |

## 通用函数

|     通用函数     |                                          功能                                          |
| :--------------: | :------------------------------------------------------------------------------------: |
|      abs(x)      |                                         绝对值                                         |
|     sign(x)      |          判断参数符号，x 是正数返回 1.0；x 是 0.0 返回 0.0，x 是负数返回-1.0           |
|     floor(x)     |                                     取整，向下取整                                     |
|     ceil(x)      |                                     取整，向上取整                                     |
|     fract(x)     |                                    返回 x 小数部分                                     |
|     min(a,b)     |                                 比较大小，返回较小的值                                 |
|     max(a,b)     |                                 比较大小，返回较大的值                                 |
|     mod(x,y)     |                                  表示 x–y\*floor(x/y)                                  |
| clamp(x,min,max) | 规整输入值,x 与 min 和 max 比较大小返回中间大小的值，运算规则：min (max (x, min), max) |
|    mix(m,n,k)    |             线性插值计算,插值区间[m,n],插值系数 k，插值计算公式：m(1-k)+nk             |

```c
// 如果两向量v1, v2点积是正数就保留，如果是负数就返回0.0
// 常用于光照计算中，v1表示光线方向，v2表示顶点法线法线，光线背面照射，点积设置为0.0
float dot = max(dot(v1, v2), 0.0);
```

## 矩阵函数

`mat matrixCompMult (mat x, mat y) `

注意内置矩阵函数`matrixCompMult()`不是按照线性代数中的矩阵乘法规则执行的，如果是线性代数中矩阵乘法规则，直接使用乘法符号*就可以，即` x*y`。

内置矩阵函数`matrixCompMult()`的运算规则是同行同列的元素相乘，也就是 `x[i][j`]和 `y[i][j]`相乘

## 向量关系函数

|       内置函数        |                          功能                           |
| :-------------------: | :-----------------------------------------------------: |
|     lessThan(x,y)     |            x 是否小于 y ,参数是 vec 或 ivec             |
|  lessThanEqual(x,y)   |          x 是否小于或等于 y,参数是 vec 或 ivec          |
|   greaterThan(x,y)    |            x 是否大于 y ,参数是 vec 或 ivec             |
| greaterThanEqual(x,y) |          x 是否大于或等于 y,参数是 vec 或 ivec          |
|      equal(x,y)       | x 是否等于 y，向量每个分量是否都相等,参数是 vec 或 ivec |
|        any(x)         |       x 向量是否存在一个分量是 true，参数是 bvec        |
|        all(x)         |       x 向量所有分量是否全部为 true ，参数是 bvec       |
|        not(x)         |         x 所有分量执行逻辑非运算 ，参数是 bvec          |

## 纹理采样函数

纹理采用函数主要用于处理 WebGL 的纹理贴图，根据 uv 坐标从图像上获取像素值。

|   内置函数    |    判断    |
| :-----------: | :--------: |
|  texture2D()  |  2D 纹理   |
| textureCube() | 立方体纹理 |

- 参数 1-sampler：第一个参数是 sampler2D 数据类型
- 参数 2-uv：第二个参数是 vec2 类型，表示纹理贴图的 UV 坐标
- 参数 3-k：第三个参数是可选参数，类型是浮点数 float，在为具有 mipmap 的纹理计算适当的细节级别之后，在执行实际纹理查找操作之前添加偏差。

```c
vec4 texture2D(sampler,uv)
vec4 texture2D(sampler,uv,k)
vec4 textureCube(sampler,uv)
vec4 textureCube(sampler,uv,k)
```

WebGL 实现图片作为纹理贴图的片元着色器部分代码

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

## 内置函数参数常见形式

内置函数参数数据类型常见形式：`float`、`vec2`、`vec3`、`vec4`

```c
// 角度转弧度
float radians(float degrees)
vec2 radians(vec2 degrees)
vec3 radians(vec3 degrees)
// 正弦函数
float sin(float angle)
vec4 sin(vec4 angle)
// 点乘
float dot(float x, float y)
float dot(vec3 x, vec3 y)
// 长度
float length(float x)
float length(vec2 x)
```
