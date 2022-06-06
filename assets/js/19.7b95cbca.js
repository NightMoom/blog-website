(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{607:function(t,a,s){"use strict";s.r(a);var e=s(15),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"声明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#声明"}},[t._v("#")]),t._v(" 声明")]),t._v(" "),s("p",[t._v("着色器语言 GLSL 的基本数据类型和 C 语言一样具有常见的整型数 int、浮点数 float 和布尔值 bool 类型数据。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("关键字")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("数据类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("bool")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("布尔值")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("布尔变量值为 true 或 false")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("整型数")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("值为整数，比如 0,1,2,3...")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("float")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("单精度浮点数")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("浮点数用小数点表示，比如 0.6,3.14,2.8")])])])]),t._v(" "),s("div",{staticClass:"language-glsl extra-class"},[s("pre",{pre:!0,attrs:{class:"language-glsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// bool关键字声明一个数据类型是布尔值的变量，并赋值为true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" lightBool "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 改变变量的值")]),t._v("\nlightBool "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 着色器语言定义一个整形常量")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 改变变量count的值")]),t._v("\ncount "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义一个浮点数变量num，并赋值10.0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" num "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("浮点数不能省略 0，必须要书写完全，否则会被识别成整型数")])]),t._v(" "),s("div",{staticClass:"language-glsl extra-class"},[s("pre",{pre:!0,attrs:{class:"language-glsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 正确")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" num "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 错误")]),t._v("\n")])])]),s("h2",{attrs:{id:"赋值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#赋值"}},[t._v("#")]),t._v(" 赋值")]),t._v(" "),s("p",[t._v("声明可以一个变量，可以先声明后复制，也可以声明的时候直接赋值")]),t._v(" "),s("div",{staticClass:"language-glsl extra-class"},[s("pre",{pre:!0,attrs:{class:"language-glsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义一个浮点数变量")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" num "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 给变量赋值10.0")]),t._v("\nnum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"language-glsl extra-class"},[s("pre",{pre:!0,attrs:{class:"language-glsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 声明变量的同时赋值")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" num "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"数据类型转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据类型转换"}},[t._v("#")]),t._v(" 数据类型转换")]),t._v(" "),s("p",[t._v("整型数"),s("code",[t._v("int")]),t._v("、浮点数"),s("code",[t._v("float")]),t._v("、布尔值"),s("code",[t._v("bool")]),t._v("三种不同的数据值可以相互转化，把一个类型转化为另一个类型通过相应的内置函数"),s("code",[t._v("int()")]),t._v("、"),s("code",[t._v("float()")]),t._v("、"),s("code",[t._v("bool()")]),t._v("实现。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("转化")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("函数")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("规则")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("浮点数转整型数")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("int(10.1)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("直接把浮点数部分去掉，10.1 转化为 10")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("整型数转浮点数")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("float(10)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("整型数直接转化为浮点数 10.0")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("数子转布尔值")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("bool(10)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("0 或 0.0 转化为 false，非 0 或非 0.0 转化为 true")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("布尔值转整型数")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("int(true)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("false 转化为 0，true 转化为 1")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("布尔值转浮点数")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("float(true)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("false 转化为 0.0，true 转化为 1.0")])])])]),t._v(" "),s("div",{staticClass:"language-glsl extra-class"},[s("pre",{pre:!0,attrs:{class:"language-glsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//声明一个整型数变量num，并赋值1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" num "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 整型数num转化为浮点数fnum")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" fnum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"language-glsl extra-class"},[s("pre",{pre:!0,attrs:{class:"language-glsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//声明一个浮点数变量fnum，并赋值1.0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" fnum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.08")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 浮点数转化整型数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" inum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//转化结果1")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);