(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{617:function(s,t,a){"use strict";a.r(t);var n=a(10),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("code",[s._v("WebGL")]),s._v(" 的着色器代码分为顶点着色器代码和片元着色器代码两部分，顶点着色器代码会在 "),a("code",[s._v("GPU")]),s._v(" 的顶点着色器单元执行，片元着色器代码会在 "),a("code",[s._v("GPU")]),s._v(" 的片元着色器单元执行，在 "),a("code",[s._v("WebGL")]),s._v(" 渲染管线流程中，或者说"),a("code",[s._v("GPU")]),s._v(" 的渲染流程中，顶点着色器代码先执行处理顶点，得到一系列片元，然后再执行片元着色器代码处理片元。")]),s._v(" "),a("h2",{attrs:{id:"main-函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#main-函数"}},[s._v("#")]),s._v(" main()函数")]),s._v(" "),a("p",[s._v("顶点着色器和片元着色器代码都有一个唯一的主函数"),a("code",[s._v("main()")]),s._v(","),a("code",[s._v("attribute")]),s._v("、"),a("code",[s._v("varying")]),s._v("和"),a("code",[s._v("uniform")]),s._v("类型的变量需要在 main 函数之外声明，在 main 函数中通常编写，逐片元或逐顶点处理的代码。")]),s._v(" "),a("h2",{attrs:{id:"着色器数据传递"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#着色器数据传递"}},[s._v("#")]),s._v(" 着色器数据传递")]),s._v(" "),a("p",[s._v("javascript 可以通过 WebGL 相关的 API 把一些数据传递给顶点着色器和片元着色器。")]),s._v(" "),a("p",[s._v("在着色器中通过 attribute 和 uniform 关键字声明的变量，需要通过 javascript 代码传递相关的数据。比如通过关键字 attribute 声明的顶点位置坐标数据，可以通过 javascript 调用 WebGL 相关 API 传递顶点数据")]),s._v(" "),a("h2",{attrs:{id:"着色器编写形式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#着色器编写形式"}},[s._v("#")]),s._v(" 着色器编写形式")]),s._v(" "),a("p",[s._v("顶点着色器、片元着色器代码在 javascript 代码中以字符串的形式存在，javascript 会通过调用相关 WebGL API 编译处理着色器代码，然后在 CPU 着色器单元执行。")]),s._v(" "),a("p",[s._v("在 javascript 语言中以字符串的形式编写着色器代码比较麻烦，可以在 div 元素中编写着色器代码，然后通过元素的"),a("code",[s._v(".innerText")]),s._v("属性返回着色器代码字符串即可。")]),s._v(" "),a("p",[s._v("WebGL 着色器代码在 javascript 以字符串的形式存在。")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//顶点着色器源码")]),s._v("\nvar vertexShaderSource "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token char"}},[s._v("''")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token char"}},[s._v("'void main(){'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//给内置变量gl_PointSize赋值像素大小")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token char"}},[s._v("'   gl_PointSize=20.0;'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//顶点位置，位于坐标原点")]),s._v("\n    '   gl_Position "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vec4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("' "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token char"}},[s._v("'}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("为了方便，可以把着色器代码放在 script 标签中编写。")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" 顶点着色器源码 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vertexShader"')]),s._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"x-shader/x-vertex"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//给内置变量gl_PointSize赋值像素大小")]),s._v("\n    gl_PointSize"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//顶点位置，位于坐标原点")]),s._v("\n    gl_Position "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vec4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("通过元素的"),a("code",[s._v(".innerText")]),s._v(" 属性以字符串形式获得 script 标签中的 WebGL 着色器代码")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//顶点着色器源码")]),s._v("\nvar vertexShaderSource "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token char"}},[s._v("'vertexShader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("innerText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//片元着色器源码")]),s._v("\nvar fragShaderSource "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token char"}},[s._v("'fragmentShader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("innerText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("javascript 调用相关的 WebGL API 编译处理着色器代码")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//创建顶点着色器对象")]),s._v("\nvar vertexShader "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createShader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("VERTEX_SHADER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//创建片元着色器对象")]),s._v("\nvar fragmentShader "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createShader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("FRAGMENT_SHADER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//引入顶点、片元着色器源代码")]),s._v("\ngl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("shaderSource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vertexShader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("vertexShaderSource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ngl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("shaderSource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fragmentShader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("fragmentShaderSource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//编译顶点、片元着色器")]),s._v("\ngl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("compileShader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vertexShader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ngl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("compileShader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fragmentShader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);