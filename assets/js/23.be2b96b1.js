(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{610:function(t,s,a){"use strict";a.r(s);var n=a(15),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("着色器语言中通过关键字"),a("code",[t._v("mat2")]),t._v("、"),a("code",[t._v("mat3")]),t._v("、"),a("code",[t._v("mat4")]),t._v("分别声明一个 2x2 矩阵、3x3 矩阵、4x4 矩阵，通过内置函数"),a("code",[t._v("mat2()")]),t._v("、"),a("code",[t._v("mat3()")]),t._v("、"),a("code",[t._v("mat4()")]),t._v("分别创建一个 2x2 矩阵、3x3 矩阵、4x4 矩阵。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("关键字")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("数据类型")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("mat2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2x2 矩阵，4 个元素")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("mat3")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3x3 矩阵，9 个元素")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("mat4")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("4x4 矩阵，16 个元素")])])])]),t._v(" "),a("h2",{attrs:{id:"声明变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#声明变量"}},[t._v("#")]),t._v(" 声明变量")]),t._v(" "),a("p",[t._v("关键字"),a("code",[t._v("mat4")]),t._v("声明一个 4x4 矩阵")]),t._v(" "),a("p",[a("code",[t._v("mat4 matrix4;")])]),t._v(" "),a("h2",{attrs:{id:"构造函数赋值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构造函数赋值"}},[t._v("#")]),t._v(" 构造函数赋值")]),t._v(" "),a("p",[t._v("矩阵类型数据需要通过相应的构造函数创建，下面代码 mat4()构造函数创建一个 4x4 矩阵赋值给 matrix4 变量。")]),t._v(" "),a("p",[t._v("注意行列对应关系，按照列的先后顺序，从上到下依次传入 mat 构造函数参数中。")]),t._v(" "),a("div",{staticClass:"language-glsl extra-class"},[a("pre",{pre:!0,attrs:{class:"language-glsl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要表示的矩阵")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.1 1.2 1.3 1.4")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2.1 2.2 2.3 2.4")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3.1 3.2 3.3 3.4")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4.1 4.2 4.3 4.4")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mat4")]),t._v(" matrix4 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mat4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.4")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"快速创建对角矩阵"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速创建对角矩阵"}},[t._v("#")]),t._v(" 快速创建对角矩阵")]),t._v(" "),a("p",[t._v("创建普通的矩阵，需要传入多个元素，比如 mat2 需要传入 4 个参数，mat4 需要传入 16 个参数，如果是对角矩阵，可以直接传入一个参数就可以。")]),t._v(" "),a("p",[t._v("可以通过"),a("code",[t._v("mat4(2.0)")]),t._v("写法快速创建一个 4x4 对角矩阵")]),t._v(" "),a("div",{staticClass:"language-glsl extra-class"},[a("pre",{pre:!0,attrs:{class:"language-glsl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2.0 0.0 0.0 0.0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0.0 2.0 0.0 0.0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0.0 0.0 2.0 0.0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0.0 0.0 0.0 2.0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mat4")]),t._v(" matrix "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mat4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"访问矩阵元素-运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问矩阵元素-运算符"}},[t._v("#")]),t._v(" 访问矩阵元素([]运算符)")]),t._v(" "),a("div",{staticClass:"language-glsl extra-class"},[a("pre",{pre:!0,attrs:{class:"language-glsl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mat4")]),t._v(" matrix4 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mat4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.4")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 访问矩阵matrix4的第二列")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("vec4")]),t._v(" v4 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" matrix4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//返回值vec4(1.2,2.2,3.2,4.2)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 访问矩阵matrix4的第三列第四行对应的元素")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" f "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" matrix4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//返回4.3")]),t._v("\n")])])]),a("h2",{attrs:{id:"数学运算-矩阵和浮点数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数学运算-矩阵和浮点数"}},[t._v("#")]),t._v(" 数学运算(矩阵和浮点数)")]),t._v(" "),a("p",[t._v("矩阵乘一个系数，相当矩阵的每个元素都乘以该系数，加法、减法、除法同样逐元素操作。")]),t._v(" "),a("div",{staticClass:"language-glsl extra-class"},[a("pre",{pre:!0,attrs:{class:"language-glsl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mat4")]),t._v(" matrix4 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mat4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mat4")]),t._v(" m2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" matrix4"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//结果是mat4(11.0,21.0,31.0...)")]),t._v("\n")])])]),a("h2",{attrs:{id:"数学运算-矩阵乘向量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数学运算-矩阵乘向量"}},[t._v("#")]),t._v(" 数学运算(矩阵乘向量)")]),t._v(" "),a("p",[a("code",[t._v("mat4*vec4")]),t._v(":矩阵 mat4 左乘向量 vec4，矩阵和向量的乘法运算规则，参考线性代数中矩阵和列向量的乘法运算。")]),t._v(" "),a("div",{staticClass:"language-glsl extra-class"},[a("pre",{pre:!0,attrs:{class:"language-glsl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//声明一个四维向量pos，xyz的坐标是0.8,3.2,6.8，假设表示一个顶点位置坐标")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("vec4")]),t._v(" pos "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("vec4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6.8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建平移矩阵(表示沿x轴平移-0.4)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1   0   0  -0.4")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//0   1   0    0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//0   0   1    0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//0   0   0    1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mat4")]),t._v(" m4 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mat4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//平移矩阵m4左乘顶点坐标pos(vec4类型数据可以理解为线性代数中的nx1矩阵，即列向量)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 顶点位置坐标pos进行平移变换")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("vec4")]),t._v(" newPos"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" m4"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("pos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//平移后结果：newPos = vec4(-0.4,3.2,6.8,1.0)")]),t._v("\n")])])]),a("h2",{attrs:{id:"数学运算-矩阵乘矩阵"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数学运算-矩阵乘矩阵"}},[t._v("#")]),t._v(" 数学运算(矩阵乘矩阵)")]),t._v(" "),a("p",[a("code",[t._v("mx*my")]),t._v(":表示矩阵 mx 左乘矩阵 my，着色器中矩阵之间乘法运算规则和线性代数中规则一致。")]),t._v(" "),a("p",[t._v("假设"),a("code",[t._v("mx、my")]),t._v("都是旋转矩阵，下面代码表示旋转矩阵 mx 和旋转矩阵 my 的乘积，然后对顶点进行变换，相当顶点旋转执行 mx 和 my 两次旋转。")]),t._v(" "),a("div",{staticClass:"language-glsl extra-class"},[a("pre",{pre:!0,attrs:{class:"language-glsl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 顶点齐次坐标pos")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("vec4")]),t._v(" pos "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("vec4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6.8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" radian "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("radians")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//角度转弧度")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" cos "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cos")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("radian"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//求解旋转角度余弦值")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" sin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("radian"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//求解旋转角度正弦值")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//旋转矩阵mx，创建绕x轴旋转矩阵")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mat4")]),t._v(" mx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mat4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("sin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("sin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//旋转矩阵my，创建绕y轴旋转矩阵")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mat4")]),t._v(" my "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mat4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("sin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  sin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//两个旋转矩阵、顶点齐次坐标连乘")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("vec4")]),t._v(" newPos "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("my"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("pos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);