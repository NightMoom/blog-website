(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{611:function(t,s,a){"use strict";a.r(s);var e=a(15),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("WebGL 在处理图片纹理编写片元着色器的时候，会通过"),a("code",[t._v("sampler2D")]),t._v("关键字声明一个纹理相关的变量，"),a("code",[t._v("sampler2D")]),t._v("和"),a("code",[t._v("vec2")]),t._v("、"),a("code",[t._v("float")]),t._v("表示一种数据类型，只不过"),a("code",[t._v("sampler2D")]),t._v("关键字声明的变量表示一种取样器类型变量，简单点说就是该变量对应纹理图片的像素数据。")]),t._v(" "),a("h2",{attrs:{id:"声明变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#声明变量"}},[t._v("#")]),t._v(" 声明变量")]),t._v(" "),a("p",[a("code",[t._v("uniform sampler2D u_Sampler;")])]),t._v(" "),a("p",[t._v("在前面课程中讲解过，通过 "),a("code",[t._v("attribute")]),t._v(" 关键字声明的顶点变量，需要通过 "),a("code",[t._v("javascript")]),t._v(" 调用 "),a("code",[t._v("gl.vertexAttribPointer()")]),t._v("等 WebGL API 传递 "),a("code",[t._v("attribute")]),t._v(" 变量对应的顶点数据，对于片元着色器中表示图片像素数据的 "),a("code",[t._v("sampler2D")]),t._v(" 变量，一样需要 "),a("code",[t._v("javascript")]),t._v(" 调用 "),a("code",[t._v("gl.uniform1i()")]),t._v("等 WebGL API 传递图像数据。所以 sampler2D 关键字声明变量的时候，需要使用 uniform 关键字进行修饰。")]),t._v(" "),a("h2",{attrs:{id:"内置函数-texture2d"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内置函数-texture2d"}},[t._v("#")]),t._v(" 内置函数 texture2D")]),t._v(" "),a("p",[t._v("WebGL 着色器提供了内置函数"),a("code",[t._v("texture2D")]),t._v("，可以直接使用，通过"),a("code",[t._v("texture2D")]),t._v("函数，可以从纹理图像提取像素值，赋值给内置变量"),a("code",[t._v("gl_FragColor")])]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 采集纹素，逐片元赋值像素值")]),t._v("\ngl_FragColor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("texture2D")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u_Sampler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("v_TexCoord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" 顶点着色器源码 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vertexShader"')]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"x-shader/x-vertex"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  attribute vec4 a_Position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//顶点位置坐标")]),t._v("\n  attribute vec2 a_TexCoord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//纹理坐标")]),t._v("\n  varying vec2 v_TexCoord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//插值后纹理坐标")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//顶点坐标apos赋值给内置变量gl_Position")]),t._v("\n    gl_Position "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a_Position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//纹理坐标插值计算")]),t._v("\n    v_TexCoord "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a_TexCoord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" 片元着色器源码 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fragmentShader"')]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"x-shader/x-fragment"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//所有float类型数据的精度是highp")]),t._v("\n  precision highp "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接收插值后的纹理坐标")]),t._v("\n  varying vec2 v_TexCoord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 纹理图片像素数据")]),t._v("\n  uniform sampler2D u_Sampler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 采集纹素，逐片元赋值像素值")]),t._v("\n    gl_FragColor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("texture2D")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u_Sampler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("v_TexCoord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);