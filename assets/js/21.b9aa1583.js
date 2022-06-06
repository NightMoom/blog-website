(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{607:function(s,t,a){"use strict";a.r(t);var e=a(15),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("WebGL 着色器语言和 C 语言一样提供了一些用于预处理的命令"),a("code",[s._v("#define")]),s._v("、"),a("code",[s._v("#include")]),s._v("、"),a("code",[s._v("#if")]),s._v(" 等以#号开头的命令。")]),s._v(" "),a("h2",{attrs:{id:"宏定义-define"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#宏定义-define"}},[s._v("#")]),s._v(" 宏定义#define")]),s._v(" "),a("p",[s._v("注意宏定义和着色器声明的变量不同，着色器程序执行前需要进行编译处理，着色器程序编译处理之后程序才会在 GPU 上执行，宏定义主要是在编译处理阶段起作用。比如宏定义#define PI 3.14,PI 符号表示圆周率 3.14，如果在代码 "),a("code",[s._v("return float f = PI\\*100.0;")]),s._v("中使用 PI 符号，编译预处理的时候把自动把 PI 替换成浮点数 3.14。")]),s._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("PI")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.14")])]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//圆周率")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("RECIPROCAL_PI")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.318")])]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//圆周率倒数")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("float")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("float")]),s._v(" f "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" PI"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//预处理的时候会把PI符号自动替换为3.14")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("预处理之后代码")]),s._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("float")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("float")]),s._v(" f "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.14")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//预处理的时候会把PI符号自动替换为3.14")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"ifdef"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ifdef"}},[s._v("#")]),s._v(" #ifdef")]),s._v(" "),a("p",[a("code",[s._v("#ifdef")]),s._v(" 的作用是判断一个宏定义是否存在，如果存在，在编译预处理的时候，代码 "),a("code",[s._v("vColor.xyz = color.xyz;")]),s._v("会保留，否则就不保留。\n通过"),a("code",[s._v("#ifdef")]),s._v(" 和"),a("code",[s._v("#endif")]),s._v(" 两个关键字约束作用代码范围。")]),s._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("USE_COLOR")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 判断宏定义是否存在")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("ifdef")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[s._v("USE_COLOR")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 顶点颜色进行插值计算")]),s._v("\nvColor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("xyz "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("xyz"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("endif")])]),s._v("\n")])])]),a("p",[s._v("上面代码预处理后最终结果就是"),a("code",[s._v("vColor.xyz = color.xyz;")]),s._v(",在 GPU 着色器中执行的是下面代码，而不是上面代码。")]),s._v(" "),a("p",[a("code",[s._v("vColor.xyz = color.xyz;")])]),s._v(" "),a("h2",{attrs:{id:"if"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#if"}},[s._v("#")]),s._v(" #if")]),s._v(" "),a("p",[a("code",[s._v("#if")]),s._v("主要是判断条件是否成立，如果成立，在编译预处理后会保留通过"),a("code",[s._v("#if")]),s._v(" 和"),a("code",[s._v("#endif")]),s._v(" 两个关键字之间的代码，否在不保留。")]),s._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")])])]),s._v("\nvec3 v3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vec3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("endif")])]),s._v("\n")])])]),a("h2",{attrs:{id:"引入文件-include"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入文件-include"}},[s._v("#")]),s._v(" 引入文件#include")]),s._v(" "),a("p",[s._v("在编写 WebGL 着色器代码的时候，比如代码比较多可能会拆分为多个文件，比如某一段逻辑代码会在多个着色器文件中使用，也可以抽离出来单独作为一个文件。WebGL 着色器提供因此提供了一个预处理命令"),a("code",[s._v("#include")]),s._v(" 关键字可在一个着色器文件中引入另一个着色器文件。")]),s._v(" "),a("p",[s._v("着色器文件"),a("code",[s._v("common.glsl")])]),s._v(" "),a("p",[a("code",[s._v("float a = 0.5;")])]),s._v(" "),a("p",[s._v("着色器文件"),a("code",[s._v("color.glsl")])]),s._v(" "),a("p",[a("code",[s._v("uniform vec3 color;")])]),s._v(" "),a("p",[a("code",[s._v("frag.glgl")]),s._v("文件的代码中引入了"),a("code",[s._v("color.glsl")]),s._v("和"),a("code",[s._v("common.glsl")]),s._v("两个着色器文件。")]),s._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("<common>")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("<color>")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  gl_FragColor "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vec4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])])]),a("p",[s._v("上面代码等价于下面代码")]),s._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("float")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nuniform vec3 color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  gl_FragColor "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vec4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);