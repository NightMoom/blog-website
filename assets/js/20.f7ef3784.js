(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{611:function(t,a,s){"use strict";s.r(a);var n=s(15),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("code",[t._v("WebGL")]),t._v(" 的着色器代码分为顶点着色器代码和片元着色器代码两部分，顶点着色器代码会在 "),s("code",[t._v("GPU")]),t._v(" 的顶点着色器单元执行，片元着色器代码会在 "),s("code",[t._v("GPU")]),t._v(" 的片元着色器单元执行，在 "),s("code",[t._v("WebGL")]),t._v(" 渲染管线流程中，或者说"),s("code",[t._v("GPU")]),t._v(" 的渲染流程中，顶点着色器代码先执行处理顶点，得到一系列片元，然后再执行片元着色器代码处理片元。")]),t._v(" "),s("h2",{attrs:{id:"main-函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#main-函数"}},[t._v("#")]),t._v(" main()函数")]),t._v(" "),s("p",[t._v("顶点着色器和片元着色器代码都有一个唯一的主函数"),s("code",[t._v("main()")]),t._v(","),s("code",[t._v("attribute")]),t._v("、"),s("code",[t._v("varying")]),t._v("和"),s("code",[t._v("uniform")]),t._v("类型的变量需要在 main 函数之外声明，在 main 函数中通常编写，逐片元或逐顶点处理的代码。")]),t._v(" "),s("h2",{attrs:{id:"着色器数据传递"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#着色器数据传递"}},[t._v("#")]),t._v(" 着色器数据传递")]),t._v(" "),s("p",[t._v("javascript 可以通过 WebGL 相关的 API 把一些数据传递给顶点着色器和片元着色器。")]),t._v(" "),s("p",[t._v("在着色器中通过 attribute 和 uniform 关键字声明的变量，需要通过 javascript 代码传递相关的数据。比如通过关键字 attribute 声明的顶点位置坐标数据，可以通过 javascript 调用 WebGL 相关 API 传递顶点数据")]),t._v(" "),s("h2",{attrs:{id:"着色器编写形式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#着色器编写形式"}},[t._v("#")]),t._v(" 着色器编写形式")]),t._v(" "),s("p",[t._v("顶点着色器、片元着色器代码在 javascript 代码中以字符串的形式存在，javascript 会通过调用相关 WebGL API 编译处理着色器代码，然后在 CPU 着色器单元执行。")]),t._v(" "),s("p",[t._v("在 javascript 语言中以字符串的形式编写着色器代码比较麻烦，可以在 div 元素中编写着色器代码，然后通过元素的"),s("code",[t._v(".innerText")]),t._v("属性返回着色器代码字符串即可。")]),t._v(" "),s("p",[t._v("WebGL 着色器代码在 javascript 以字符串的形式存在。")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//顶点着色器源码")]),t._v("\nvar vertexShaderSource "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("''")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("'void main(){'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//给内置变量gl_PointSize赋值像素大小")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("'   gl_PointSize=20.0;'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//顶点位置，位于坐标原点")]),t._v("\n    '   gl_Position "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vec4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("' "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("'}'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("为了方便，可以把着色器代码放在 script 标签中编写。")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" 顶点着色器源码 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vertexShader"')]),t._v(" type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"x-shader/x-vertex"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//给内置变量gl_PointSize赋值像素大小")]),t._v("\n    gl_PointSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//顶点位置，位于坐标原点")]),t._v("\n    gl_Position "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vec4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),s("p",[t._v("通过元素的"),s("code",[t._v(".innerText")]),t._v(" 属性以字符串形式获得 script 标签中的 WebGL 着色器代码")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//顶点着色器源码")]),t._v("\nvar vertexShaderSource "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("'vertexShader'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerText"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//片元着色器源码")]),t._v("\nvar fragShaderSource "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("'fragmentShader'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerText"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("javascript 调用相关的 WebGL API 编译处理着色器代码")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建顶点着色器对象")]),t._v("\nvar vertexShader "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("VERTEX_SHADER"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建片元着色器对象")]),t._v("\nvar fragmentShader "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FRAGMENT_SHADER"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//引入顶点、片元着色器源代码")]),t._v("\ngl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shaderSource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vertexShader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("vertexShaderSource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ngl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shaderSource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fragmentShader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("fragmentShaderSource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//编译顶点、片元着色器")]),t._v("\ngl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("compileShader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vertexShader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ngl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("compileShader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fragmentShader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);