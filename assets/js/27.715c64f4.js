(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{618:function(t,s,a){"use strict";a.r(s);var n=a(15),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"gl-pointsize"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gl-pointsize"}},[t._v("#")]),t._v(" gl_PointSize")]),t._v(" "),a("p",[t._v("当"),a("code",[t._v("WebGL")]),t._v("执行绘制函数"),a("code",[t._v("gl.drawArrays()")]),t._v("绘制模式是点模式"),a("code",[t._v("gl.POINTS")]),t._v("的时候，顶点着色器语言"),a("code",[t._v("main")]),t._v("函数中才会用到内置变量"),a("code",[t._v("gl_PointSize")]),t._v("，使用内置变量"),a("code",[t._v("gl_PointSize")]),t._v("主要是用来设置顶点渲染出来的方形点像素大小。")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//给内置变量gl_PointSize赋值像素大小，注意值是浮点数")]),t._v("\n  gl_PointSize"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//绘制函数绘制模式：点gl.POINTS")]),t._v("\ngl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawArrays")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("POINTS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("点数量"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"gl-position"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gl-position"}},[t._v("#")]),t._v(" gl_Position")]),t._v(" "),a("p",[a("code",[t._v("gl_Position")]),t._v("内置变量主要和顶点相关，出现的位置是顶点着色器语言的"),a("code",[t._v("main")]),t._v(" 函数中。\n"),a("code",[t._v("gl_Position")]),t._v("内置变量表示最终传入片元着色器片元化要使用的顶点位置坐标。")]),t._v(" "),a("p",[t._v("如果只有一个顶点，直接在给顶点着色器中设置内置变量"),a("code",[t._v("gl_Position")]),t._v("赋值就可以，内置变量"),a("code",[t._v("gl_Position")]),t._v("的值是四维向量"),a("code",[t._v("vec4(x,y,z,1.0)")]),t._v(",前三个参数表示顶点的 xyz 坐标值，第四个参数是"),a("strong",[t._v("浮点数 1.0")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//顶点位置，位于坐标原点")]),t._v("\n  gl_Position "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vec4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("如果你想完全理解内置变量"),a("code",[t._v("gl_Position")]),t._v("，必须建立逐顶点的概念，如果"),a("code",[t._v("javascript")]),t._v("语言中出现一个变量赋值，你可以理解为仅仅执行一次，但是对于着色器中不能直接这么理解，如果有多个顶点，你可以理解为每个顶点都要执行一遍顶点着色器主函数"),a("code",[t._v("main")]),t._v("中的程序。")]),t._v(" "),a("p",[t._v("多个顶点的时候，内置变量"),a("code",[t._v("gl_Position")]),t._v("对应的值是"),a("code",[t._v("attribute")]),t._v("关键字声明的顶点位置坐标变量"),a("code",[t._v("apos")]),t._v("，顶点位置坐标变量"),a("code",[t._v("apos")]),t._v("变量对应了 "),a("code",[t._v("javascript")]),t._v("代码中多个顶点位置数据。")]),t._v(" "),a("h2",{attrs:{id:"gl-fragcolor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gl-fragcolor"}},[t._v("#")]),t._v(" gl_FragColor")]),t._v(" "),a("p",[a("code",[t._v("gl_FragColor")]),t._v("内置变量主要用来设置片元像素的颜色，出现的位置是片元着色器语言的"),a("code",[t._v("main")]),t._v("函数中。")]),t._v(" "),a("p",[t._v("内置变量"),a("code",[t._v("gl_Position")]),t._v("的值是四维向量"),a("code",[t._v("vec4(r,g,b,a)")]),t._v(",前三个参数表示片元像素颜色值 RGB，第四个参数是片元像素透明度 A，"),a("code",[t._v("1.0")]),t._v("表示不透明,"),a("code",[t._v("0.0")]),t._v("表示完全透明。")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 片元颜色设置为红色")]),t._v("\ngl_FragColor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vec4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("理解内置变量"),a("code",[t._v("gl_Position")]),t._v("需要建立逐顶点的概念，对于内置变量"),a("code",[t._v("gl_FragColor")]),t._v("而言，需要建立逐片元的概念。顶点经过片元着色器片元化以后，得到一个个片元，或者说像素点，然后通过内置变量"),a("code",[t._v("gl_FragColor")]),t._v("给每一个片元设置颜色值，所有片元可以使用同一个颜色值，也可能不是同一个颜色值，可以通过特定算法计算或者纹理像素采样。")]),t._v(" "),a("p",[t._v("根据片元位置设置渐变色")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 片元沿着x方向渐变")]),t._v("\n    gl_FragColor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vec4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gl_FragCoord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500.0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("纹理采样")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接收插值后的纹理坐标")]),t._v("\nvarying vec2 v_TexCoord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 纹理图片像素数据")]),t._v("\nuniform sampler2D u_Sampler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 采集纹素，逐片元赋值像素值")]),t._v("\n  gl_FragColor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("texture2D")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u_Sampler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("v_TexCoord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"gl-pointcoord"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gl-pointcoord"}},[t._v("#")]),t._v(" gl_PointCoord")]),t._v(" "),a("p",[t._v("如果你想了解内置变量"),a("code",[t._v("gl_PointCoord")]),t._v("表示的坐标含义，就需要了解"),a("code",[t._v("WebGL")]),t._v("绘制函数"),a("code",[t._v("gl.drawArrays()")]),t._v("的绘制模式参数"),a("code",[t._v("gl.POINTS")]),t._v("。")]),t._v(" "),a("p",[t._v("绘制函数"),a("code",[t._v("gl.drawArrays()")]),t._v("绘制模式参数设置为点渲染模式"),a("code",[t._v("gl.POINTS")]),t._v("，"),a("code",[t._v("WebGL")]),t._v("会把顶点渲染为一个方形区域，在顶点着色器代码中可以通过内置变量"),a("code",[t._v("gl_PointSize")]),t._v("设置顶点渲染的方向区域像素大小。")]),t._v(" "),a("p",[t._v("一个顶点渲染为一个方形区域，每个方形区域可以以方向区域的左上角建立一个直角坐标系，然后使用内置变量"),a("code",[t._v("gl_PointCoord")]),t._v("描述每个方形区域中像素或者说片元的坐标，比如方形区域的左上角坐标是"),a("code",[t._v("(0.0,0.0)")]),t._v(",每个方形区域几何中心坐标是"),a("code",[t._v("(0.5,0.5)")]),t._v("，右下角坐标是"),a("code",[t._v("(1.0,1.0)")]),t._v("。")]),t._v(" "),a("p",[t._v("注意内置变量"),a("code",[t._v("gl_PointCoord")]),t._v("和"),a("code",[t._v("gl_FragCoord")]),t._v("表示的像素坐标含义不同,查看下图表示。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://piclog-1257285586.cos.ap-guangzhou.myqcloud.com/uPic/lWwsVL.png",alt:"1"}})]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 点绘制模式渲染10个顶点")]),t._v("\ngl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawArrays")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("POINTS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("顶点着色器中通过内置变量"),a("code",[t._v("gl_PointSize")]),t._v("设置点渲染的方形区域像素尺寸。")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//点渲染的方形区域像素大小")]),t._v("\n  gl_PointSize "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("gl.POINTS 绘制模式点默认渲染效果是方形区域，通过下面片元着色器代码设置可以把默认渲染效果更改为圆形区域。")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("  precision lowp "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所有float类型数据的精度是lowp")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 计算方形区域每个片元距离方形几何中心的距离")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// gl.POINTS模式点渲染的方形区域,方形中心是0.5,0.5,左上角是坐标原点,右下角是1.0,1.0，")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("distance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gl_PointCoord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vec2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//根据距离设置片元")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方形区域片元距离几何中心半径小于0.5，像素颜色设置红色")]),t._v("\n      gl_FragColor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vec4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方形区域距离几何中心半径不小于0.5的片元剪裁舍弃掉：")]),t._v("\n      discard"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"gl-fragcoord"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gl-fragcoord"}},[t._v("#")]),t._v(" gl_FragCoord")]),t._v(" "),a("p",[t._v("内置变量"),a("code",[t._v("gl_FragCoord")]),t._v("表示"),a("code",[t._v("WebGL")]),t._v("在"),a("code",[t._v("canvas")]),t._v("画布上渲染的所有片元或者说像素的坐标，坐标原点是 canvas 画布的左上角，x 轴水平向右，y 竖直向下，"),a("code",[t._v("gl_FragCoord")]),t._v("坐标的单位是像素，"),a("code",[t._v("gl_FragCoord")]),t._v("的值是"),a("code",[t._v("vec2(x,y)")]),t._v(",通过"),a("code",[t._v("gl_FragCoord.x")]),t._v("、"),a("code",[t._v("gl_FragCoord.y")]),t._v("方式可以分别访问片元坐标的纵横坐标。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://piclog-1257285586.cos.ap-guangzhou.myqcloud.com/uPic/BBDvLC.png",alt:"2"}})]),t._v(" "),a("p",[t._v("下面代码是把 canvas 画布上不同区域片元设置为不同颜色。")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据片元的x坐标，来设置片元的像素值")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gl_FragCoord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// canvas画布上[0,300)之间片元像素值设置")]),t._v("\n      gl_FragColor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vec4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gl_FragCoord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("400.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// canvas画布上(300,400]之间片元像素值设置")]),t._v("\n      gl_FragColor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vec4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// canvas画布上(400,500]之间片元像素值设置")]),t._v("\n      gl_FragColor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vec4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所有片元设置为红色")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// gl_FragColor = vec4(1.0,0.0,0.0,1.0);")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("片元的颜色随着坐标变化(设置一个渐变色效果)")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 片元沿着x方向渐变")]),t._v("\n    gl_FragColor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vec4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gl_FragCoord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500.0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);