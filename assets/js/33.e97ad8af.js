(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{622:function(t,e,a){"use strict";a.r(e);var n=a(15),v=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("通过设置着色器数值的精度可以更好的配置资源，可以根据需要，在不太影响渲染效果前提下，可以尽量降低运算精度。")]),t._v(" "),a("h2",{attrs:{id:"lowp、mediump-和-highp-关键字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lowp、mediump-和-highp-关键字"}},[t._v("#")]),t._v(" lowp、mediump 和 highp 关键字")]),t._v(" "),a("p",[t._v("声明变量精度高低的三个关键子"),a("code",[t._v("lowp")]),t._v("、"),a("code",[t._v("mediump")]),t._v("和"),a("code",[t._v("highp")]),t._v("。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("关键字")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("精度")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("lowp")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("低精度")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("mediump")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("中精度")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("highp")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("高精度")])])])]),t._v(" "),a("p",[t._v("声明单个 WebGL 着色器变量的精度")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 低精度pos变量")]),t._v("\nlowp vec3 pos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 高精度浮点数变量k")]),t._v("\nhighp "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"precision-关键字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#precision-关键字"}},[t._v("#")]),t._v(" precision 关键字")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("precision")]),t._v("关键字可以批量声明一些变量精度。")]),t._v(" "),a("p",[t._v("比如顶点着色器代码设置"),a("code",[t._v("precision highp float;")]),t._v("，表示顶点着色器中所有浮点数精度为高精度。")]),t._v(" "),a("p",[a("code",[t._v("precision mediump float;")])]),t._v(" "),a("p",[t._v("比如片元着色器代码设置 "),a("code",[t._v("precision lowp int;")]),t._v("，表示片元着色器中所有整型数精度为低精度。")]),t._v(" "),a("p",[a("code",[t._v("precision mediump float;")])]),t._v(" "),a("h2",{attrs:{id:"顶点和片元着色器不同类型数据默认精度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#顶点和片元着色器不同类型数据默认精度"}},[t._v("#")]),t._v(" 顶点和片元着色器不同类型数据默认精度")]),t._v(" "),a("p",[t._v("除了片元着色器浮点数的精度意外，WebGL 系统其它的数值精通全部设置了默认精度，所以如果片元着色器中使用了浮点数类型的变量，比如声明精度，否则会报错。")]),t._v(" "),a("p",[t._v("片元着色器中设置浮点数变量精度，可以单独设置一个变量，也可以使用关键字 "),a("code",[t._v("precision")]),t._v(" 批量设置。")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//所有float类型数据的精度是lowp")]),t._v("\nprecision lowp "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("顶点着色器默认精度")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("数据类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("默认精度")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("高精度 hight")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("float")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("高度 hight")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("sampler2D")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("低精度 lowp")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("samplerCube")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("低精度 lowp")])])])]),t._v(" "),a("p",[t._v("片元着色器默认精度")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("数据类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("默认精度")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("中精度 mediump")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("float")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("无默认值，如果片元着色器用到浮点数，注意一定手动设置")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("sampler2D")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("低精度 lowp")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("samplerCube")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("低精度 lowp")])])])])])}),[],!1,null,null,null);e.default=v.exports}}]);