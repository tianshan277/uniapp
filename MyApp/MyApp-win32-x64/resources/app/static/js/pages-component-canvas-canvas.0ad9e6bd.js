(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-canvas-canvas"],{"4d0d":function(t,a,i){"use strict";i("ac1f"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{title:"canvas",canvasWidth:0,startStatus:!1,ballList:[]}},onReady:function(){var t=this;this.$nextTick((function(){uni.createSelectorQuery().select(".canvas").boundingClientRect((function(a){t.canvasWidth=a.width,t.startStatus=!0})).exec()}))}};a.default=n},"62c5":function(t,a,i){"use strict";i.d(a,"b",(function(){return s})),i.d(a,"c",(function(){return e})),i.d(a,"a",(function(){return n}));var n={pageHead:i("4788").default},s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("page-head",{attrs:{title:t.title}}),i("v-uni-view",{staticClass:"page-body"},[i("v-uni-view",{staticClass:"page-body-wrapper"},[i("v-uni-canvas",{wxsProps:{"change:start":"startStatus"},staticClass:"canvas",attrs:{"canvas-id":"canvas",start:t.startStatus,"change:start":t.animate.start,"data-width":t.canvasWidth,"data-height":t.canvasWidth}})],1)],1)],1)},e=[]},7694:function(t,a,i){"use strict";function n(t){var a=t.x,i=t.y,n=t.vx,s=t.vy,e=t.canvasWidth,c=t.canvasHeight,r=t.ctx;this.canvasWidth=e,this.canvasHeight=c,this.ctx=r,this.x=a,this.y=i,this.vx=n,this.vy=s,this.radius=5}function s(t,a){return Math.pow(Math.pow(t,2)+Math.pow(a,2),.5)}i("cb29"),i("4160"),i("159b"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,n.prototype.draw=function(){this.ctx.beginPath(),this.ctx.fillStyle="#007AFF",this.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI),this.ctx.closePath(),this.ctx.fill()},n.prototype.move=function(){this.x+=this.vx,this.y+=this.vy,this.x<this.radius?this.vx=Math.abs(this.vx):(this.x>this.canvasWidth-this.radius&&(this.vx=-Math.abs(this.vx)),this.y<this.radius?this.vy=Math.abs(this.vy):this.y>this.canvasWidth-this.radius&&(this.vy=-Math.abs(this.vy)))};var e={methods:{start:function(t,a,i,e){for(var c=e.getDataset().width,r=e.getDataset().height,u=document.querySelectorAll(".canvas>canvas")[0],d=u.getContext("2d"),o=3,h=[],v=3,f=20,l=0;l<v;l++)for(var p=s(c/2,r/2)/v*l,x=0;x<f;x++){var b=2*x*Math.PI/f,y=Math.sin(b),g=Math.cos(b),w=p*g+c/2,M=p*y+r/2,m=o*g,W=o*y;h.push(new n({x:w,y:M,vx:m,vy:W,canvasWidth:c,canvasHeight:r,ctx:d,radius:5}))}function _(t){d.clearRect(0,0,u.width,u.height),t.forEach((function(t){t.move(),t.draw()})),requestAnimationFrame((function(){_(t)}))}_(h)}}};a.default=e},"94d4":function(t,a,i){"use strict";i.r(a);var n=i("62c5"),s=i("c0c5");for(var e in s)"default"!==e&&function(t){i.d(a,t,(function(){return s[t]}))}(e);var c=i("d9b9");for(var e in c)"default"!==e&&function(t){i.d(a,t,(function(){return c[t]}))}(e);i("d6be");var r=i("f0c5");s["default"].__module="animate";var u=Object(r["a"])(c["default"],n["b"],n["c"],!1,null,"0141d872",null,!1,n["a"],s["default"]);a["default"]=u.exports},bbda:function(t,a,i){var n=i("24fb");a=n(!1),a.push([t.i,".page-body-wrapper[data-v-0141d872]{text-align:center}.canvas[data-v-0141d872]{width:%?610?%;height:%?610?%;margin:auto;background-color:#fff}",""]),t.exports=a},c0c5:function(t,a,i){"use strict";i.r(a);var n=i("7694"),s=i.n(n);for(var e in n)"default"!==e&&function(t){i.d(a,t,(function(){return n[t]}))}(e);a["default"]=s.a},cb29:function(t,a,i){var n=i("23e7"),s=i("81d5"),e=i("44d2");n({target:"Array",proto:!0},{fill:s}),e("fill")},d6be:function(t,a,i){"use strict";var n=i("f9d8"),s=i.n(n);s.a},d9b9:function(t,a,i){"use strict";i.r(a);var n=i("4d0d"),s=i.n(n);for(var e in n)"default"!==e&&function(t){i.d(a,t,(function(){return n[t]}))}(e);a["default"]=s.a},f9d8:function(t,a,i){var n=i("bbda");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("4f06").default;s("4626dd4a",n,!0,{sourceMap:!1,shadowMode:!1})}}]);