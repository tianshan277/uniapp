(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-fav-fav"],{"1c0d":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n\n/* 头条小程序组件内不能引入字体 */\nuni-page-body[data-v-3d8faa65]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-3d8faa65]{font-size:14px;line-height:inherit}.example[data-v-3d8faa65]{padding:0 15px 15px}.example-info[data-v-3d8faa65]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-3d8faa65]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-3d8faa65]{padding:0 15px}.example-info[data-v-3d8faa65]{\ndisplay:block;\npadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-3d8faa65]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-3d8faa65]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-3d8faa65]{font-size:18px;color:#fff}.word-btn[data-v-3d8faa65]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-3d8faa65]{background-color:#4ca2ff}\n.favBtn[data-v-3d8faa65]{margin:0 %?20?% %?20?% 0}.example-body-fullWidth[data-v-3d8faa65]{padding:%?32?% 0}.example-body-first[data-v-3d8faa65]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}body.?%PAGE?%[data-v-3d8faa65]{background-color:#efeff4}',""]),t.exports=e},"2a6a":function(t,e,i){"use strict";var n=i("5b04"),a=i.n(n);a.a},"4bfb":function(t,e,i){"use strict";i.r(e);var n=i("ad1a"),a=i.n(n);for(var c in n)"default"!==c&&function(t){i.d(e,t,(function(){return n[t]}))}(c);e["default"]=a.a},"5b04":function(t,e,i){var n=i("f3624");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("1a562bcc",n,!0,{sourceMap:!1,shadowMode:!1})},6704:function(t,e,i){"use strict";var n=i("e4ad"),a=i.n(n);a.a},"7a9e":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("ad7b")),c={name:"UniFav",components:{uniIcons:a.default},props:{star:{type:[Boolean,String],default:!0},bgColor:{type:String,default:"#eeeeee"},fgColor:{type:String,default:"#666666"},bgColorChecked:{type:String,default:"#007aff"},fgColorChecked:{type:String,default:"#FFFFFF"},circle:{type:[Boolean,String],default:!1},checked:{type:Boolean,default:!1},contentText:{type:Object,default:function(){return{contentDefault:"收藏",contentFav:"已收藏"}}}},watch:{checked:function(){uni.report&&(this.checked?uni.report("收藏","收藏"):uni.report("取消收藏","取消收藏"))}},methods:{onClick:function(){this.$emit("click")}}};e.default=c},"7c2a":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return c})),i.d(e,"a",(function(){return n}));var n={uniIcons:i("ad7b").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-fav",class:[!0===t.circle||"true"===t.circle?"uni-fav--circle":""],style:[{backgroundColor:t.checked?t.bgColorChecked:t.bgColor}],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.checked||!0!==t.star&&"true"!==t.star?t._e():i("uni-icons",{staticClass:"uni-fav-star",style:{color:t.checked?t.fgColorChecked:t.fgColor},attrs:{color:t.fgColor,size:"14",type:"star-filled"}}),i("v-uni-text",{staticClass:"uni-fav-text",style:{color:t.checked?t.fgColorChecked:t.fgColor}},[t._v(t._s(t.checked?t.contentText.contentFav:t.contentText.contentDefault))])],1)},c=[]},ad1a:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={components:{},data:function(){return{checkList:[!1,!1,!1,!1,!1,!1],contentText:{contentDefault:"追番",contentFav:"已追番"}}},methods:{favClick:function(t){this.checkList[t]=!this.checkList[t],this.$forceUpdate()}}};e.default=n},b235:function(t,e,i){"use strict";i.r(e);var n=i("f18f"),a=i("4bfb");for(var c in a)"default"!==c&&function(t){i.d(e,t,(function(){return a[t]}))}(c);i("6704");var o,r=i("f0c5"),l=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"3d8faa65",null,!1,n["a"],o);e["default"]=l.exports},d7a8:function(t,e,i){"use strict";i.r(e);var n=i("7c2a"),a=i("f65a");for(var c in a)"default"!==c&&function(t){i.d(e,t,(function(){return a[t]}))}(c);i("2a6a");var o,r=i("f0c5"),l=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"6d832934",null,!1,n["a"],o);e["default"]=l.exports},e4ad:function(t,e,i){var n=i("1c0d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("3e9e38e9",n,!0,{sourceMap:!1,shadowMode:!1})},f18f:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return c})),i.d(e,"a",(function(){return n}));var n={uniSection:i("8cbb").default,uniFav:i("d7a8").default,uniNavBar:i("4947").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"example-fav"},[i("uni-section",{attrs:{title:"基本用法",type:"line"}}),i("v-uni-view",{staticClass:"example-body example-body-first"},[i("uni-fav",{staticClass:"favBtn",attrs:{checked:t.checkList[0]},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.favClick(0)}}}),i("uni-fav",{staticClass:"favBtn",attrs:{checked:t.checkList[1],star:!1},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.favClick(1)}}}),i("uni-fav",{staticClass:"favBtn",attrs:{checked:t.checkList[2],circle:!0,"bg-color":"#dd524d","bg-color-checked":"#007aff","fg-color":"#ffffff","fg-color-checked":"#ffffff"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.favClick(2)}}}),i("uni-fav",{staticClass:"favBtn",attrs:{checked:t.checkList[3],"bg-color":"#f8f8f8","bg-color-checked":"#eeeeee","fg-color":"#333333","fg-color-checked":"#333333"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.favClick(3)}}})],1),i("uni-section",{attrs:{title:"自定义文字",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("uni-fav",{staticClass:"favBtn",attrs:{checked:t.checkList[4],"content-text":t.contentText},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.favClick(4)}}})],1),i("uni-section",{staticClass:"hideOnPc",attrs:{title:"在自定义导航栏使用",type:"line"}}),i("v-uni-view",{staticClass:"example-body example-body-fullWidth hideOnPc"},[i("uni-nav-bar",{staticStyle:{width:"100%"},attrs:{fixed:!1,"left-icon":"arrowleft",title:"标题",color:"#333333","background-color":"#FFFFFF"}},[i("template",{attrs:{slot:"right"},slot:"right"},[i("uni-fav",{staticClass:"favBtn-nav",attrs:{checked:t.checkList[5],circle:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.favClick(5)}}})],1)],2)],1)],1)},c=[]},f3624:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".uni-fav[data-v-6d832934]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:60px;height:25px;line-height:25px;text-align:center;border-radius:3px}.uni-fav--circle[data-v-6d832934]{border-radius:30px}.uni-fav-star[data-v-6d832934]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nheight:25px;line-height:24px;margin-right:3px;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-fav-text[data-v-6d832934]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nheight:25px;line-height:25px;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:14px}",""]),t.exports=e},f65a:function(t,e,i){"use strict";i.r(e);var n=i("7a9e"),a=i.n(n);for(var c in n)"default"!==c&&function(t){i.d(e,t,(function(){return n[t]}))}(c);e["default"]=a.a}}]);