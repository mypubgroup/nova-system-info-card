!function(t){var e={};function n(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:s})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){n(1),t.exports=n(6)},function(t,e,n){Nova.booting(function(t,e){t.component("system-info-card",n(2))})},function(t,e,n){var s=n(3)(n(4),n(5),!1,null,null,null);t.exports=s.exports},function(t,e){t.exports=function(t,e,n,s,a,o){var r,i=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(r=t,i=t.default);var l,p="function"==typeof i?i.options:i;if(e&&(p.render=e.render,p.staticRenderFns=e.staticRenderFns,p._compiled=!0),n&&(p.functional=!0),a&&(p._scopeId=a),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},p._ssrRegister=l):s&&(l=s),l){var u=p.functional,d=u?p.render:p.beforeCreate;u?(p._injectStyles=l,p.render=function(t,e){return l.call(e),d(t,e)}):p.beforeCreate=d?[].concat(d,l):[l]}return{esModule:r,exports:i,options:p}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["card"],data:function(){return{os:null,php:null,database:null}},mounted:function(){var t=this;Nova.request().get("/nova-vendor/codeat3/nova-system-info-card/check").then(function(e){var n=e.data;t.os=n.os,t.php=n.php,t.database=n.database,t.laravel=n.laravel,t.nova=n.nova})}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card bg-white"},[n("div",{staticClass:"py-4 px-4 text-sm"},[n("h3",{staticClass:"mb-2"},[t._v("Basic System Information")]),t._v(" "),n("p",{staticClass:"pb-1"},[n("span",{staticClass:"font-bold pr-3"},[t._v("OS:")]),t._v(t._s(t.os))]),t._v(" "),n("p",{staticClass:"pb-1"},[n("span",{staticClass:"font-bold pr-3"},[t._v("PHP Version:")]),t._v(t._s(t.php))]),t._v(" "),n("p",{staticClass:"pb-1"},[n("span",{staticClass:"font-bold pr-3"},[t._v("Database:")]),t._v(t._s(t.database))]),t._v(" "),n("p",{staticClass:"pb-1"},[n("span",{staticClass:"font-bold pr-3"},[t._v("Laravel Version:")]),t._v(t._s(t.laravel))]),t._v(" "),n("p",{staticClass:"pb-1"},[n("span",{staticClass:"font-bold pr-3"},[t._v("Nova Version:")]),t._v(t._s(t.nova))])])])},staticRenderFns:[]}},function(t,e){}]);