(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-textarea-textarea"],{"28a3":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return u})),a.d(e,"a",(function(){return n}));var n={pageHead:a("4788").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("page-head",{attrs:{title:t.title}}),a("v-uni-view",{staticClass:"uni-title uni-common-pl"},[t._v("输入区域高度自适应，不会出现滚动条")]),a("v-uni-view",{staticClass:"uni-textarea"},[a("v-uni-textarea",{attrs:{"auto-height":!0},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.bindTextAreaBlur.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"uni-title uni-common-pl"},[t._v("占位符字体是红色的textarea")]),a("v-uni-view",{staticClass:"uni-textarea"},[a("v-uni-textarea",{attrs:{"placeholder-style":"color:#F76260",placeholder:"占位符字体是红色的"}})],1)],1)},u=[]},"37fe":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{title:"textarea",focus:!1}},methods:{bindTextAreaBlur:function(t){console.log(t.detail.value)}}};e.default=n},"384e":function(t,e,a){"use strict";a.r(e);var n=a("37fe"),i=a.n(n);for(var u in n)"default"!==u&&function(t){a.d(e,t,(function(){return n[t]}))}(u);e["default"]=i.a},affb:function(t,e,a){"use strict";a.r(e);var n=a("28a3"),i=a("384e");for(var u in i)"default"!==u&&function(t){a.d(e,t,(function(){return i[t]}))}(u);var r,o=a("f0c5"),l=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"b90943fa",null,!1,n["a"],r);e["default"]=l.exports}}]);