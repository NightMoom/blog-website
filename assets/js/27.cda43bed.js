(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{619:function(s,t,a){"use strict";a.r(t);var n=a(10),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("WebGL 在处理图片纹理编写片元着色器的时候，会通过"),a("code",[s._v("sampler2D")]),s._v("关键字声明一个纹理相关的变量，"),a("code",[s._v("sampler2D")]),s._v("和"),a("code",[s._v("vec2")]),s._v("、"),a("code",[s._v("float")]),s._v("表示一种数据类型，只不过"),a("code",[s._v("sampler2D")]),s._v("关键字声明的变量表示一种取样器类型变量，简单点说就是该变量对应纹理图片的像素数据。")]),s._v(" "),a("h2",{attrs:{id:"声明变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#声明变量"}},[s._v("#")]),s._v(" 声明变量")]),s._v(" "),a("p",[a("code",[s._v("uniform sampler2D u_Sampler;")])]),s._v(" "),a("p",[s._v("在前面课程中讲解过，通过 "),a("code",[s._v("attribute")]),s._v(" 关键字声明的顶点变量，需要通过 "),a("code",[s._v("javascript")]),s._v(" 调用 "),a("code",[s._v("gl.vertexAttribPointer()")]),s._v("等 WebGL API 传递 "),a("code",[s._v("attribute")]),s._v(" 变量对应的顶点数据，对于片元着色器中表示图片像素数据的 "),a("code",[s._v("sampler2D")]),s._v(" 变量，一样需要 "),a("code",[s._v("javascript")]),s._v(" 调用 "),a("code",[s._v("gl.uniform1i()")]),s._v("等 WebGL API 传递图像数据。所以 sampler2D 关键字声明变量的时候，需要使用 uniform 关键字进行修饰。")]),s._v(" "),a("h2",{attrs:{id:"内置函数-texture2d"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内置函数-texture2d"}},[s._v("#")]),s._v(" 内置函数 texture2D")]),s._v(" "),a("p",[s._v("WebGL 着色器提供了内置函数"),a("code",[s._v("texture2D")]),s._v("，可以直接使用，通过"),a("code",[s._v("texture2D")]),s._v("函数，可以从纹理图像提取像素值，赋值给内置变量"),a("code",[s._v("gl_FragColor")])]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 采集纹素，逐片元赋值像素值")]),s._v("\ngl_FragColor "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("texture2D")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("u_Sampler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("v_TexCoord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" 顶点着色器源码 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vertexShader"')]),s._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"x-shader/x-vertex"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  attribute vec4 a_Position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//顶点位置坐标")]),s._v("\n  attribute vec2 a_TexCoord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//纹理坐标")]),s._v("\n  varying vec2 v_TexCoord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//插值后纹理坐标")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//顶点坐标apos赋值给内置变量gl_Position")]),s._v("\n    gl_Position "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" a_Position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//纹理坐标插值计算")]),s._v("\n    v_TexCoord "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" a_TexCoord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" 片元着色器源码 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fragmentShader"')]),s._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"x-shader/x-fragment"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//所有float类型数据的精度是highp")]),s._v("\n  precision highp "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("float")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 接收插值后的纹理坐标")]),s._v("\n  varying vec2 v_TexCoord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 纹理图片像素数据")]),s._v("\n  uniform sampler2D u_Sampler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 采集纹素，逐片元赋值像素值")]),s._v("\n    gl_FragColor "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("texture2D")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("u_Sampler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("v_TexCoord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);