(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{608:function(t,a,e){"use strict";e.r(a);var s=e(15),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("WebGL 着色器提供了一系列内置函数，所谓内置函数和内置变量一样，也就是说不用声明，就可以直接调用。比如向量点乘 dot()、向量叉乘 cross()、两点之间距离 "),e("code",[t._v("distance()")]),t._v("等用于数学计算的函数。")]),t._v(" "),e("h2",{attrs:{id:"角度函数和三角函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#角度函数和三角函数"}},[t._v("#")]),t._v(" 角度函数和三角函数")]),t._v(" "),e("p",[t._v("WebGL 着色器内置函数三角函数，名称和初高中数学写法基本一致，函数参数是角度的弧度值，函数参数数据类型是浮点数 "),e("code",[t._v("float")]),t._v("。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("内置函数")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("功能")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("radians()")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("角度值转弧度值")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("degrees()")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("弧度值转角度值")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("sin(弧度)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("正弦值")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("cos(弧度)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("余弦值")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("tan(弧度)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("正切值")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("asin()")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("反正弦值(弧度)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("acos()")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("反余弦值(弧度)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("atan()")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("反正切值(弧度)")])])])]),t._v(" "),e("div",{staticClass:"language-c extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//角度为30度，并把角度值转化为弧度值")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" radian "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("radians")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("30.0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//求解角度余弦值")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" cos "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cos")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("radian"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//求解角度正弦值")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" sin "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("radian"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"几何函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#几何函数"}},[t._v("#")]),t._v(" 几何函数")]),t._v(" "),e("p",[t._v("内置函数几何函数主要是与几何相关计算的函数，比如计算两点之间的距离，计算两个向量的叉乘、点乘...")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("内置函数")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("功能")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("length(a)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("向量 a 长度")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("distance(a,b)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("a、b 两点之间距离")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("dot(a,b)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("两向量点积")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("cross(a,b)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("两向量叉乘")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("normalize(a)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("向量 a 归一化,长度变为 1，方向不变，即返回值单位向量")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("faceforward(a,b,c)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("向量朝前：如果 c、b 两向量点乘小于 0(dot(c,b) < 0)，则返回 a，否则返回-a")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("reflect(Ru,Fa) 或 reflect(Ru,Fa,Zh)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("向量反射：比如通过入射光计算反射光方向向量,Fa 表示反射平面的法线方向(单位向量)，Ru 表示入射光线的方向(单位向量)，Zh 表示折射率")])])])]),t._v(" "),e("div",{staticClass:"language-c extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 二维平面：计算(0.5, 0.0)和(0.5, 0.5)两点之间距离")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" dis2 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("distance")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vec2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vec2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3D空间")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" dis3 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("distance")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vec3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vec3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),e("div",{staticClass:"language-c extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 向量归一化，方向不变，长度为1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回值vec3(1.0,0.0,0.0)")]),t._v("\nvec3 normal "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("normalize")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vec3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("div",{staticClass:"language-c extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 光线方向：u_lightDirection，顶点法向量：normal")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 计算平行光方向向量和顶点法向量的点积")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" dot "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dot")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u_lightDirection"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" normal"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 计算反射后的颜色")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 光线颜色：u_lightColor，顶点颜色：a_color")]),t._v("\nvec3 reflectedLight "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" u_lightColor "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" a_color"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rgb "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" dot"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"指数函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#指数函数"}},[t._v("#")]),t._v(" 指数函数")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("内置函数")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("功能")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("pow(x,n)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("x 的 n 次幂函数")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("exp(x)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("x 的自然指数 e")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("log(x)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("x 自然对数")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("exp2(x)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("2 的指数 x")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("log2()")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("对数函数，底数为 2")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("sqrt()")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("平方根")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("inversesqrt()")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("平方根倒数")])])])]),t._v(" "),e("h2",{attrs:{id:"通用函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通用函数"}},[t._v("#")]),t._v(" 通用函数")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("通用函数")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("功能")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("abs(x)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("绝对值")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("sign(x)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("判断参数符号，x 是正数返回 1.0；x 是 0.0 返回 0.0，x 是负数返回-1.0")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("floor(x)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("取整，向下取整")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("ceil(x)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("取整，向上取整")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("fract(x)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("返回 x 小数部分")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("min(a,b)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("比较大小，返回较小的值")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("max(a,b)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("比较大小，返回较大的值")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("mod(x,y)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("表示 x–y*floor(x/y)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("clamp(x,min,max)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("规整输入值,x 与 min 和 max 比较大小返回中间大小的值，运算规则：min (max (x, min), max)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("mix(m,n,k)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("线性插值计算,插值区间[m,n],插值系数 k，插值计算公式：m(1-k)+nk")])])])]),t._v(" "),e("div",{staticClass:"language-c extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果两向量v1, v2点积是正数就保留，如果是负数就返回0.0")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 常用于光照计算中，v1表示光线方向，v2表示顶点法线法线，光线背面照射，点积设置为0.0")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" dot "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dot")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"矩阵函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#矩阵函数"}},[t._v("#")]),t._v(" 矩阵函数")]),t._v(" "),e("p",[e("code",[t._v("mat matrixCompMult (mat x, mat y)")])]),t._v(" "),e("p",[t._v("注意内置矩阵函数"),e("code",[t._v("matrixCompMult()")]),t._v("不是按照线性代数中的矩阵乘法规则执行的，如果是线性代数中矩阵乘法规则，直接使用乘法符号*就可以，即"),e("code",[t._v("x*y")]),t._v("。")]),t._v(" "),e("p",[t._v("内置矩阵函数"),e("code",[t._v("matrixCompMult()")]),t._v("的运算规则是同行同列的元素相乘，也就是 "),e("code",[t._v("x[i][j")]),t._v("]和 "),e("code",[t._v("y[i][j]")]),t._v("相乘")]),t._v(" "),e("h2",{attrs:{id:"向量关系函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#向量关系函数"}},[t._v("#")]),t._v(" 向量关系函数")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("内置函数")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("功能")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("lessThan(x,y)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("x 是否小于 y ,参数是 vec 或 ivec")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("lessThanEqual(x,y)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("x 是否小于或等于 y,参数是 vec 或 ivec")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("greaterThan(x,y)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("x 是否大于 y ,参数是 vec 或 ivec")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("greaterThanEqual(x,y)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("x 是否大于或等于 y,参数是 vec 或 ivec")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("equal(x,y)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("x 是否等于 y，向量每个分量是否都相等,参数是 vec 或 ivec")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("any(x)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("x 向量是否存在一个分量是 true，参数是 bvec")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("all(x)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("x 向量所有分量是否全部为 true ，参数是 bvec")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("not(x)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("x 所有分量执行逻辑非运算 ，参数是 bvec")])])])]),t._v(" "),e("h2",{attrs:{id:"纹理采样函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#纹理采样函数"}},[t._v("#")]),t._v(" 纹理采样函数")]),t._v(" "),e("p",[t._v("纹理采用函数主要用于处理 WebGL 的纹理贴图，根据 uv 坐标从图像上获取像素值。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("内置函数")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("判断")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("texture2D()")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("2D 纹理")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("textureCube()")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("立方体纹理")])])])]),t._v(" "),e("ul",[e("li",[t._v("参数 1-sampler：第一个参数是 sampler2D 数据类型")]),t._v(" "),e("li",[t._v("参数 2-uv：第二个参数是 vec2 类型，表示纹理贴图的 UV 坐标")]),t._v(" "),e("li",[t._v("参数 3-k：第三个参数是可选参数，类型是浮点数 float，在为具有 mipmap 的纹理计算适当的细节级别之后，在执行实际纹理查找操作之前添加偏差。")])]),t._v(" "),e("div",{staticClass:"language-c extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[t._v("vec4 "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("texture2D")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sampler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("uv"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nvec4 "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("texture2D")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sampler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("uv"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("k"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nvec4 "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("textureCube")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sampler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("uv"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nvec4 "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("textureCube")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sampler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("uv"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("k"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("WebGL 实现图片作为纹理贴图的片元着色器部分代码")]),t._v(" "),e("div",{staticClass:"language-c extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接收插值后的纹理坐标")]),t._v("\nvarying vec2 v_TexCoord"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 纹理图片像素数据")]),t._v("\nuniform sampler2D u_Sampler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 采集纹素，逐片元赋值像素值")]),t._v("\n  gl_FragColor "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("texture2D")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u_Sampler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("v_TexCoord"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"内置函数参数常见形式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内置函数参数常见形式"}},[t._v("#")]),t._v(" 内置函数参数常见形式")]),t._v(" "),e("p",[t._v("内置函数参数数据类型常见形式："),e("code",[t._v("float")]),t._v("、"),e("code",[t._v("vec2")]),t._v("、"),e("code",[t._v("vec3")]),t._v("、"),e("code",[t._v("vec4")])]),t._v(" "),e("div",{staticClass:"language-c extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 角度转弧度")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("radians")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" degrees"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nvec2 "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("radians")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vec2 degrees"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nvec3 "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("radians")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vec3 degrees"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 正弦函数")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" angle"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nvec4 "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vec4 angle"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 点乘")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dot")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" y"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dot")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vec3 x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vec3 y"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 长度")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vec2 x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);