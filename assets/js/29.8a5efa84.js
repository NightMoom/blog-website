(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{614:function(t,a,s){"use strict";s.r(a);var n=s(15),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("着色器语言和 C 语言一样，通过一个表示特定数据类型的关键词声明一个变量，比如 int num;通过 int 关键字声明一个整数型变量 num，不过着色器语言还提供了三个关键字 "),s("code",[t._v("attribute")]),t._v("、"),s("code",[t._v("uniform")]),t._v(" 和 "),s("code",[t._v("varying")]),t._v(" 用来声明特定用途的变量。")]),t._v(" "),s("p",[s("code",[t._v("attribute")]),t._v("和"),s("code",[t._v("uniform")]),t._v("关键字的目的主要是为了"),s("code",[t._v("javascript")]),t._v("语言可以通过相关的"),s("code",[t._v("WebGL API")]),t._v("把一些数据传递给着色器，如果一个着色器中一个变量，着色器代码中变量不通过"),s("code",[t._v("attribute")]),t._v("或"),s("code",[t._v("uniform")]),t._v("声明标识，该变量是不能从"),s("code",[t._v("javascript")]),t._v("代码中获得相应的数据")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("关键字(变量类型)")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("数据传递")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("声明变量")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("attribute")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("javascript——>顶点着色器")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("声明顶点数据变量")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("uniform")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("javascript——>顶点、片元着色器")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("声明非顶点数据变量")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("varying")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("顶点着色器——>片元着色器")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("声明需要插值计算的顶点变量")])])])]),t._v(" "),s("h2",{attrs:{id:"attribute"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#attribute"}},[t._v("#")]),t._v(" attribute")]),t._v(" "),s("p",[s("code",[t._v("attribute")]),t._v("关键字通常用来声明与顶点数据相关的变量，比如顶点位置坐标数据、顶点颜色数据、顶点法向量数据...\n顶点着色器中通过"),s("code",[t._v("attribute")]),t._v("关键字声明的顶点变量，"),s("code",[t._v("javascript")]),t._v("代码可以通过相关的 WebGL API 把顶点的数据传递给着色器中相应的顶点变量。")]),t._v(" "),s("p",[t._v("因为"),s("code",[t._v("javascript")]),t._v("没必要给片元着色器传递顶点数据，所以规定"),s("code",[t._v("attribute")]),t._v("关键字只能在顶点着色器中声明变量使用。只要注意"),s("code",[t._v("attribute")]),t._v("关键字声明顶点变量代码位于主函数 "),s("code",[t._v("main")]),t._v(" 之外就可以")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// attribute声明顶点位置变量")]),t._v("\nattribute vec4 position"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// attribute声明顶点颜色变量")]),t._v("\nattribute vec4 a_color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// attribute声明顶点法向量")]),t._v("\nattribute vec4 normal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 与顶点相关的浮点数")]),t._v("\nattribute "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" scale"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("同一个顶点着色器通常需要处理是一批顶点数据，一个顶点可能会有多种数据，比如顶点位置、颜色、法向量，还有其它自定义的，比如"),s("code",[t._v("attribute float scale")]),t._v(";，声明了一个"),s("code",[t._v("scale")]),t._v("变量。")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// attribute声明顶点位置变量")]),t._v("\nattribute vec4 position"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 与顶点相关的浮点数")]),t._v("\nattribute "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" scale"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 每个顶点的x坐标乘以该顶点对应的一个系数scale")]),t._v("\n  gl_Position "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vec4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("position"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("scale"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("position"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("position"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("z"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"uniform"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uniform"}},[t._v("#")]),t._v(" uniform")]),t._v(" "),s("p",[s("code",[t._v("uniform")]),t._v("关键字出现的目的就是为了"),s("code",[t._v("javascript")]),t._v("可以通过相关的"),s("code",[t._v("WebGL API")]),t._v("给着色器变量传递数据，比如传递一个光源的位置数据、一个光源的方向数据、一个光源的颜色数据、一个用于顶点变换的模型矩阵、一个用于顶点变换的视图矩阵...")]),t._v(" "),s("p",[t._v("不过要注意如果是顶点相关的变量，比如顶点位置、顶点颜色等顶点数据相关变量不能使用关键字"),s("code",[t._v("uniform")]),t._v("去声明，主要是顶点的数据往往不是一个，通常有很多个顶点，而且这些顶点都要逐顶点执行 "),s("code",[t._v("main")]),t._v(" 函数中的程序，所以为了声明顶点数据相关的变量，着色器语言规定了一个新的关键字"),s("code",[t._v("attribute")]),t._v("。")]),t._v(" "),s("p",[s("code",[t._v("javascript")]),t._v("可以给顶点着色器的变量传递数据，也可以给片元着色器的变量传递数据，也就是说 "),s("code",[t._v("uniform")]),t._v(" 关键字既可以在顶点着色器中使用，也可以在片元着色器中使用。只要注意"),s("code",[t._v("uniform")]),t._v("关键字声明变量需要在主函数"),s("code",[t._v("main")]),t._v(" 之前声明。")]),t._v(" "),s("h2",{attrs:{id:"varying"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#varying"}},[t._v("#")]),t._v(" varying")]),t._v(" "),s("p",[s("code",[t._v("attribute vec4 a_color;")]),t._v("在顶点着色器中声明了一个顶点颜色变量，如果想在片元着色器中获得顶点颜色插值计算以后的数据，需要同时在顶点着色器和片元着色器中执行"),s("code",[t._v("varying vec4 v_color;")]),t._v("，也就是在顶点、片元两个着色器代码中都需要通过关键字"),s("code",[t._v("varying")]),t._v("声明一个新变量"),s("code",[t._v("v_color")]),t._v(",最后再顶点着色器中执行"),s("code",[t._v("v_color = a_color")]),t._v(";即可")]),t._v(" "),s("ul",[s("li",[t._v("顶点着色器")])]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("attribute vec4 a_color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// attribute声明顶点颜色变量")]),t._v("\nvarying vec4 v_color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//varying声明顶点颜色插值后变量")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//顶点颜色插值计算")]),t._v("\n  v_color "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a_color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("ul",[s("li",[t._v("片元着色器")])]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接收顶点着色器中v_color数据")]),t._v("\nvarying vec4 v_color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 插值后颜色数据赋值给对应的片元")]),t._v("\n  gl_FragColor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" v_color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("code",[t._v("varying")]),t._v("类型变量主要是为了完成顶点着色器和片元着色器之间的数据传递和插值计算。比如在一个 "),s("code",[t._v("WebGL")]),t._v(" 程序中通过三个顶点绘制一个彩色三角形，三个顶点的位置坐标定义了一个三角形区域，这个三角形区域经过片元着色器处理后会得到由一个个片元或者说像素组成的三角形区域，在片元化的过程中，顶点的颜色数据也会进行插值计算，插值计算之前每个顶点对应一个颜色，插值计算之后，每个片元对应一个颜色值，通过 "),s("code",[t._v("varying")]),t._v(" 关键字就可以在片元着色器中获得插值后的颜色数据，然后赋值给片元。")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" 顶点着色器源码 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vertexShader"')]),t._v(" type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"x-shader/x-vertex"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//attribute声明vec4类型变量apos")]),t._v("\n  attribute vec4 apos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// attribute声明顶点颜色变量")]),t._v("\n  attribute vec4 a_color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//varying声明顶点颜色插值后变量")]),t._v("\n  varying vec4 v_color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 顶点坐标apos赋值给内置变量gl_Position")]),t._v("\n    gl_Position "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" apos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//顶点颜色插值计算")]),t._v("\n    v_color "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a_color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" 片元着色器源码 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fragmentShader"')]),t._v(" type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"x-shader/x-fragment"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所有float类型数据的精度是lowp")]),t._v("\n  precision lowp "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接收顶点着色器中v_color数据")]),t._v("\n  varying vec4 v_color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 插值后颜色数据赋值给对应的片元")]),t._v("\n    gl_FragColor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" v_color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);