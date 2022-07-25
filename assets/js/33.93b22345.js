(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{627:function(s,t,a){"use strict";a.r(t);var n=a(10),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("在着色器语言 GLSL ES 前面内容介绍过浮点数 float、整形数 int、三维向量 vec3、4x4 矩阵 mat4 等各种数据类型，关于结构体主要功能就是利用 WebGL 着色器已经提供的常见数据类型，自定义一个新的数据类型。\nWebGL 着色器语言中结构体和 C 语言类似，结构体是由多个同类或不同类的数据类型构成的一个集合。")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 首先定义一个结构体，也就是自定义一个数据类型")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DirectionalLight")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  vec3 direction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  vec4 color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("float")]),s._v(" shadowBias"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用自定义的结构体，或者说使用自定义的数据类型DirectionalLight声明一个变量")]),s._v("\nuniform DirectionalLight dirLight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[a("code",[s._v("struct")]),s._v("是声明结构体的关键字，"),a("code",[s._v("DirectionalLight")]),s._v("是自定义结构体的名称，可以根据表达的含义自由命名，你可以把自定义的结构体 "),a("code",[s._v("DirectionalLight")]),s._v(" 理解为自定义的数据类型，自定义的数据类型"),a("code",[s._v("DirectionalLight")]),s._v("就像浮点数 "),a("code",[s._v("float")]),s._v("、三维向量 "),a("code",[s._v("vec3")]),s._v(" 一样可以用来声明一个变量。")]),s._v(" "),a("h2",{attrs:{id:"访问分量-点符号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问分量-点符号"}},[s._v("#")]),s._v(" 访问分量(点符号.)")]),s._v(" "),a("p",[s._v("三维向量"),a("code",[s._v("vec3")]),s._v("、4x4 矩阵 "),a("code",[s._v("mat4")]),s._v(" 等数据类型可以通过点符号.访问自身的变量或元素，对于结构体关键字 "),a("code",[s._v("struct")]),s._v(" 自定义的数据类型也一样可以通过点符号访问自身的变量或元素，你可把 "),a("code",[s._v("webgl")]),s._v(" 着色器的结构体类比 "),a("code",[s._v("javascript")]),s._v(" 的对象，对象可以通过点符号访问对象自身的属性。")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[s._v("vec3 dir "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vec3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ndir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100.0")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// x分量赋值")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("float")]),s._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" dir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 访问x分量，赋值给其它变量")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DirectionalLight")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  vec3 direction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  vec4 color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nuniform DirectionalLight dirLight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 结构体成员赋值")]),s._v("\ndirLight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("color "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vec4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 访问成员，赋值给其它变量")]),s._v("\nvec4 newcol "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" dirLight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"结构体-uniform-变量数据传递"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结构体-uniform-变量数据传递"}},[s._v("#")]),s._v(" 结构体 uniform 变量数据传递")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获得结构体位置")]),s._v("\nvar lightColor "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getUniformLocation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("program"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token char"}},[s._v("'directionalLight.color'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 结构体的一个属性传递数据")]),s._v("\ngl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uniform4f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("lightColor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);