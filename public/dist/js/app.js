!function n(t,e,r){function i(u,a){if(!e[u]){if(!t[u]){var s="function"==typeof require&&require;if(!a&&s)return s(u,!0);if(o)return o(u,!0);var c=new Error("Cannot find module '"+u+"'");throw c.code="MODULE_NOT_FOUND",c}var l=e[u]={exports:{}};t[u][0].call(l.exports,function(n){var e=t[u][1][n];return i(e?e:n)},l,l.exports,n,t,e,r)}return e[u].exports}for(var o="function"==typeof require&&require,u=0;u<r.length;u++)i(r[u]);return i}({1:[function(n,t,e){!function(n){function r(t){function e(){function t(n,t,e){return n||t?(console.warn(e),!0):!1}function e(){return c?t(r,i,s):!1}var r=n.webkitRequestAnimationFrame,i=n.requestAnimationFrame,o=screen.width<=768?!0:!1,u=!(r&&i),a=n.performance?!1:!0,s="setTimeout is being used as a substitiue forrequestAnimationFrame due to a bug within iOS 6 builds",c=u&&o&&a;return e()}function r(n){clearTimeout(n)}function i(n){var t=Date.now(),e=Math.max(v+16,t);return setTimeout(function(){n(v=e)},e-t)}function o(){return Array.prototype.filter?(l=n["request"+m]||n[p.filter(function(t){return void 0!==n[t+d]?t:void 0})+d]||i,e()?i:l):i}function u(){function t(t,e){for(var r;e<t.length;e++)if(n[t[e]]){r=n[t[e]];break}return r}var i=[];return Array.prototype.map?(p.map(function(n){return["Cancel","CancelRequest"].map(function(t){i.push(n+t+m)})}),f=n["cancel"+m]||t(i,0)||r,e()?r:f):r}function a(){return b?i:o()}function s(){return u()}function c(){b?(n.requestAnimationFrame=i,n.cancelAnimationFrame=r):(n.requestAnimationFrame=o(),n.cancelAnimationFrame=u())}var l,f,h,p=["moz","webkit"],m="AnimationFrame",d="Request"+m,v=0,g=n.mozRequestAnimationFrame,y=n.mozCancelAnimationFrame,b=g&&!y;switch(Date.now||(Date.now=function(){return(new Date).getTime()}),t){case"request":case"":h=a();break;case"cancel":h=s();break;case"native":c();break;default:throw new Error("RequestFrame parameter is not a type.")}return h}"object"==typeof t&&"object"==typeof t.exports?t.exports=e=r:"function"==typeof define&&define.amd?define(function(){return r}):"object"==typeof n&&(n.requestFrame=r)}("undefined"==typeof window?{}:window)},{}],2:[function(n,t,e){(function(n){!function(n,r){"function"==typeof define&&define.amd?define([],r(n)):"object"==typeof e?t.exports=r(n):n.smoothScroll=r(n)}("undefined"!=typeof n?n:this.window||this.global,function(n){"use strict";var t,e,r,i,o={},u="querySelector"in document&&"addEventListener"in n,a={selector:"[data-scroll]",selectorHeader:"[data-scroll-header]",speed:500,easing:"easeInOutCubic",offset:0,updateURL:!0,callback:function(){}},s=function(){var n={},t=!1,e=0,r=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],e++);for(var i=function(e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t&&"[object Object]"===Object.prototype.toString.call(e[r])?n[r]=s(!0,n[r],e[r]):n[r]=e[r])};r>e;e++){var o=arguments[e];i(o)}return n},c=function(n){return Math.max(n.scrollHeight,n.offsetHeight,n.clientHeight)},l=function(n,t){var e,r,i=t.charAt(0),o="classList"in document.documentElement;for("["===i&&(t=t.substr(1,t.length-2),e=t.split("="),e.length>1&&(r=!0,e[1]=e[1].replace(/"/g,"").replace(/'/g,"")));n&&n!==document;n=n.parentNode){if("."===i)if(o){if(n.classList.contains(t.substr(1)))return n}else if(new RegExp("(^|\\s)"+t.substr(1)+"(\\s|$)").test(n.className))return n;if("#"===i&&n.id===t.substr(1))return n;if("["===i&&n.hasAttribute(e[0])){if(!r)return n;if(n.getAttribute(e[0])===e[1])return n}if(n.tagName.toLowerCase()===t)return n}return null},f=function(n){for(var t,e=String(n),r=e.length,i=-1,o="",u=e.charCodeAt(0);++i<r;){if(t=e.charCodeAt(i),0===t)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");o+=t>=1&&31>=t||127==t||0===i&&t>=48&&57>=t||1===i&&t>=48&&57>=t&&45===u?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&57>=t||t>=65&&90>=t||t>=97&&122>=t?e.charAt(i):"\\"+e.charAt(i)}return o},h=function(n,t){var e;return"easeInQuad"===n&&(e=t*t),"easeOutQuad"===n&&(e=t*(2-t)),"easeInOutQuad"===n&&(e=.5>t?2*t*t:-1+(4-2*t)*t),"easeInCubic"===n&&(e=t*t*t),"easeOutCubic"===n&&(e=--t*t*t+1),"easeInOutCubic"===n&&(e=.5>t?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===n&&(e=t*t*t*t),"easeOutQuart"===n&&(e=1- --t*t*t*t),"easeInOutQuart"===n&&(e=.5>t?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===n&&(e=t*t*t*t*t),"easeOutQuint"===n&&(e=1+--t*t*t*t*t),"easeInOutQuint"===n&&(e=.5>t?16*t*t*t*t*t:1+16*--t*t*t*t*t),e||t},p=function(n,t,e){var r=0;if(n.offsetParent)do r+=n.offsetTop,n=n.offsetParent;while(n);return r=r-t-e,r>=0?r:0},m=function(){return Math.max(n.document.body.scrollHeight,n.document.documentElement.scrollHeight,n.document.body.offsetHeight,n.document.documentElement.offsetHeight,n.document.body.clientHeight,n.document.documentElement.clientHeight)},d=function(n){return n&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(n):{}},v=function(t,e){n.history.pushState&&(e||"true"===e)&&"file:"!==n.location.protocol&&n.history.pushState(null,null,[n.location.protocol,"//",n.location.host,n.location.pathname,n.location.search,t].join(""))},g=function(n){return null===n?0:c(n)+n.offsetTop};o.animateScroll=function(t,e,o){var u=d(t?t.getAttribute("data-options"):null),c=s(c||a,o||{},u);e="#"+f(e.substr(1));var l="#"===e?n.document.documentElement:n.document.querySelector(e),y=n.pageYOffset;r||(r=n.document.querySelector(c.selectorHeader)),i||(i=g(r));var b,S,w,O=p(l,i,parseInt(c.offset,10)),x=O-y,k=m(),A=0;v(e,c.updateURL);var j=function(r,i,o){var u=n.pageYOffset;(r==i||u==i||n.innerHeight+u>=k)&&(clearInterval(o),l.focus(),c.callback(t,e))},F=function(){A+=16,S=A/parseInt(c.speed,10),S=S>1?1:S,w=y+x*h(c.easing,S),n.scrollTo(0,Math.floor(w)),j(w,O,b)},I=function(){b=setInterval(F,16)};0===n.pageYOffset&&n.scrollTo(0,0),I()};var y=function(n){var e=l(n.target,t.selector);e&&"a"===e.tagName.toLowerCase()&&(n.preventDefault(),o.animateScroll(e,e.hash,t))},b=function(n){e||(e=setTimeout(function(){e=null,i=g(r)},66))};return o.destroy=function(){t&&(n.document.removeEventListener("click",y,!1),n.removeEventListener("resize",b,!1),t=null,e=null,r=null,i=null)},o.init=function(e){u&&(o.destroy(),t=s(a,e||{}),r=n.document.querySelector(t.selectorHeader),i=g(r),n.document.addEventListener("click",y,!1),r&&n.addEventListener("resize",b,!1))},o})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],3:[function(n,t,e){(function(){function n(n){function t(t,e,r,i,o,u){for(;o>=0&&u>o;o+=n){var a=i?i[o]:o;r=e(r,t[a],a,t)}return r}return function(e,r,i,o){r=w(r,o,4);var u=!I(e)&&S.keys(e),a=(u||e).length,s=n>0?0:a-1;return arguments.length<3&&(i=e[u?u[s]:s],s+=n),t(e,r,i,u,s,a)}}function r(n){return function(t,e,r){e=O(e,r);for(var i=F(t),o=n>0?0:i-1;o>=0&&i>o;o+=n)if(e(t[o],o,t))return o;return-1}}function i(n,t,e){return function(r,i,o){var u=0,a=F(r);if("number"==typeof o)n>0?u=o>=0?o:Math.max(o+a,u):a=o>=0?Math.min(o+1,a):o+a+1;else if(e&&o&&a)return o=e(r,i),r[o]===i?o:-1;if(i!==i)return o=t(h.call(r,u,a),S.isNaN),o>=0?o+u:-1;for(o=n>0?u:a-1;o>=0&&a>o;o+=n)if(r[o]===i)return o;return-1}}function o(n,t){var e=$.length,r=n.constructor,i=S.isFunction(r)&&r.prototype||c,o="constructor";for(S.has(n,o)&&!S.contains(t,o)&&t.push(o);e--;)o=$[e],o in n&&n[o]!==i[o]&&!S.contains(t,o)&&t.push(o)}var u=this,a=u._,s=Array.prototype,c=Object.prototype,l=Function.prototype,f=s.push,h=s.slice,p=c.toString,m=c.hasOwnProperty,d=Array.isArray,v=Object.keys,g=l.bind,y=Object.create,b=function(){},S=function(n){return n instanceof S?n:this instanceof S?void(this._wrapped=n):new S(n)};"undefined"!=typeof e?("undefined"!=typeof t&&t.exports&&(e=t.exports=S),e._=S):u._=S,S.VERSION="1.8.3";var w=function(n,t,e){if(void 0===t)return n;switch(null==e?3:e){case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,i){return n.call(t,e,r,i)};case 4:return function(e,r,i,o){return n.call(t,e,r,i,o)}}return function(){return n.apply(t,arguments)}},O=function(n,t,e){return null==n?S.identity:S.isFunction(n)?w(n,t,e):S.isObject(n)?S.matcher(n):S.property(n)};S.iteratee=function(n,t){return O(n,t,1/0)};var x=function(n,t){return function(e){var r=arguments.length;if(2>r||null==e)return e;for(var i=1;r>i;i++)for(var o=arguments[i],u=n(o),a=u.length,s=0;a>s;s++){var c=u[s];t&&void 0!==e[c]||(e[c]=o[c])}return e}},k=function(n){if(!S.isObject(n))return{};if(y)return y(n);b.prototype=n;var t=new b;return b.prototype=null,t},A=function(n){return function(t){return null==t?void 0:t[n]}},j=Math.pow(2,53)-1,F=A("length"),I=function(n){var t=F(n);return"number"==typeof t&&t>=0&&j>=t};S.each=S.forEach=function(n,t,e){t=w(t,e);var r,i;if(I(n))for(r=0,i=n.length;i>r;r++)t(n[r],r,n);else{var o=S.keys(n);for(r=0,i=o.length;i>r;r++)t(n[o[r]],o[r],n)}return n},S.map=S.collect=function(n,t,e){t=O(t,e);for(var r=!I(n)&&S.keys(n),i=(r||n).length,o=Array(i),u=0;i>u;u++){var a=r?r[u]:u;o[u]=t(n[a],a,n)}return o},S.reduce=S.foldl=S.inject=n(1),S.reduceRight=S.foldr=n(-1),S.find=S.detect=function(n,t,e){var r;return r=I(n)?S.findIndex(n,t,e):S.findKey(n,t,e),void 0!==r&&-1!==r?n[r]:void 0},S.filter=S.select=function(n,t,e){var r=[];return t=O(t,e),S.each(n,function(n,e,i){t(n,e,i)&&r.push(n)}),r},S.reject=function(n,t,e){return S.filter(n,S.negate(O(t)),e)},S.every=S.all=function(n,t,e){t=O(t,e);for(var r=!I(n)&&S.keys(n),i=(r||n).length,o=0;i>o;o++){var u=r?r[o]:o;if(!t(n[u],u,n))return!1}return!0},S.some=S.any=function(n,t,e){t=O(t,e);for(var r=!I(n)&&S.keys(n),i=(r||n).length,o=0;i>o;o++){var u=r?r[o]:o;if(t(n[u],u,n))return!0}return!1},S.contains=S.includes=S.include=function(n,t,e,r){return I(n)||(n=S.values(n)),("number"!=typeof e||r)&&(e=0),S.indexOf(n,t,e)>=0},S.invoke=function(n,t){var e=h.call(arguments,2),r=S.isFunction(t);return S.map(n,function(n){var i=r?t:n[t];return null==i?i:i.apply(n,e)})},S.pluck=function(n,t){return S.map(n,S.property(t))},S.where=function(n,t){return S.filter(n,S.matcher(t))},S.findWhere=function(n,t){return S.find(n,S.matcher(t))},S.max=function(n,t,e){var r,i,o=-(1/0),u=-(1/0);if(null==t&&null!=n){n=I(n)?n:S.values(n);for(var a=0,s=n.length;s>a;a++)r=n[a],r>o&&(o=r)}else t=O(t,e),S.each(n,function(n,e,r){i=t(n,e,r),(i>u||i===-(1/0)&&o===-(1/0))&&(o=n,u=i)});return o},S.min=function(n,t,e){var r,i,o=1/0,u=1/0;if(null==t&&null!=n){n=I(n)?n:S.values(n);for(var a=0,s=n.length;s>a;a++)r=n[a],o>r&&(o=r)}else t=O(t,e),S.each(n,function(n,e,r){i=t(n,e,r),(u>i||i===1/0&&o===1/0)&&(o=n,u=i)});return o},S.shuffle=function(n){for(var t,e=I(n)?n:S.values(n),r=e.length,i=Array(r),o=0;r>o;o++)t=S.random(0,o),t!==o&&(i[o]=i[t]),i[t]=e[o];return i},S.sample=function(n,t,e){return null==t||e?(I(n)||(n=S.values(n)),n[S.random(n.length-1)]):S.shuffle(n).slice(0,Math.max(0,t))},S.sortBy=function(n,t,e){return t=O(t,e),S.pluck(S.map(n,function(n,e,r){return{value:n,index:e,criteria:t(n,e,r)}}).sort(function(n,t){var e=n.criteria,r=t.criteria;if(e!==r){if(e>r||void 0===e)return 1;if(r>e||void 0===r)return-1}return n.index-t.index}),"value")};var E=function(n){return function(t,e,r){var i={};return e=O(e,r),S.each(t,function(r,o){var u=e(r,o,t);n(i,r,u)}),i}};S.groupBy=E(function(n,t,e){S.has(n,e)?n[e].push(t):n[e]=[t]}),S.indexBy=E(function(n,t,e){n[e]=t}),S.countBy=E(function(n,t,e){S.has(n,e)?n[e]++:n[e]=1}),S.toArray=function(n){return n?S.isArray(n)?h.call(n):I(n)?S.map(n,S.identity):S.values(n):[]},S.size=function(n){return null==n?0:I(n)?n.length:S.keys(n).length},S.partition=function(n,t,e){t=O(t,e);var r=[],i=[];return S.each(n,function(n,e,o){(t(n,e,o)?r:i).push(n)}),[r,i]},S.first=S.head=S.take=function(n,t,e){return null!=n?null==t||e?n[0]:S.initial(n,n.length-t):void 0},S.initial=function(n,t,e){return h.call(n,0,Math.max(0,n.length-(null==t||e?1:t)))},S.last=function(n,t,e){return null!=n?null==t||e?n[n.length-1]:S.rest(n,Math.max(0,n.length-t)):void 0},S.rest=S.tail=S.drop=function(n,t,e){return h.call(n,null==t||e?1:t)},S.compact=function(n){return S.filter(n,S.identity)};var _=function(n,t,e,r){for(var i=[],o=0,u=r||0,a=F(n);a>u;u++){var s=n[u];if(I(s)&&(S.isArray(s)||S.isArguments(s))){t||(s=_(s,t,e));var c=0,l=s.length;for(i.length+=l;l>c;)i[o++]=s[c++]}else e||(i[o++]=s)}return i};S.flatten=function(n,t){return _(n,t,!1)},S.without=function(n){return S.difference(n,h.call(arguments,1))},S.uniq=S.unique=function(n,t,e,r){S.isBoolean(t)||(r=e,e=t,t=!1),null!=e&&(e=O(e,r));for(var i=[],o=[],u=0,a=F(n);a>u;u++){var s=n[u],c=e?e(s,u,n):s;t?(u&&o===c||i.push(s),o=c):e?S.contains(o,c)||(o.push(c),i.push(s)):S.contains(i,s)||i.push(s)}return i},S.union=function(){return S.uniq(_(arguments,!0,!0))},S.intersection=function(n){for(var t=[],e=arguments.length,r=0,i=F(n);i>r;r++){var o=n[r];if(!S.contains(t,o)){for(var u=1;e>u&&S.contains(arguments[u],o);u++);u===e&&t.push(o)}}return t},S.difference=function(n){var t=_(arguments,!0,!0,1);return S.filter(n,function(n){return!S.contains(t,n)})},S.zip=function(){return S.unzip(arguments)},S.unzip=function(n){for(var t=n&&S.max(n,F).length||0,e=Array(t),r=0;t>r;r++)e[r]=S.pluck(n,r);return e},S.object=function(n,t){for(var e={},r=0,i=F(n);i>r;r++)t?e[n[r]]=t[r]:e[n[r][0]]=n[r][1];return e},S.findIndex=r(1),S.findLastIndex=r(-1),S.sortedIndex=function(n,t,e,r){e=O(e,r,1);for(var i=e(t),o=0,u=F(n);u>o;){var a=Math.floor((o+u)/2);e(n[a])<i?o=a+1:u=a}return o},S.indexOf=i(1,S.findIndex,S.sortedIndex),S.lastIndexOf=i(-1,S.findLastIndex),S.range=function(n,t,e){null==t&&(t=n||0,n=0),e=e||1;for(var r=Math.max(Math.ceil((t-n)/e),0),i=Array(r),o=0;r>o;o++,n+=e)i[o]=n;return i};var C=function(n,t,e,r,i){if(!(r instanceof t))return n.apply(e,i);var o=k(n.prototype),u=n.apply(o,i);return S.isObject(u)?u:o};S.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,h.call(arguments,1));if(!S.isFunction(n))throw new TypeError("Bind must be called on a function");var e=h.call(arguments,2),r=function(){return C(n,r,t,this,e.concat(h.call(arguments)))};return r},S.partial=function(n){var t=h.call(arguments,1),e=function(){for(var r=0,i=t.length,o=Array(i),u=0;i>u;u++)o[u]=t[u]===S?arguments[r++]:t[u];for(;r<arguments.length;)o.push(arguments[r++]);return C(n,e,this,this,o)};return e},S.bindAll=function(n){var t,e,r=arguments.length;if(1>=r)throw new Error("bindAll must be passed function names");for(t=1;r>t;t++)e=arguments[t],n[e]=S.bind(n[e],n);return n},S.memoize=function(n,t){var e=function(r){var i=e.cache,o=""+(t?t.apply(this,arguments):r);return S.has(i,o)||(i[o]=n.apply(this,arguments)),i[o]};return e.cache={},e},S.delay=function(n,t){var e=h.call(arguments,2);return setTimeout(function(){return n.apply(null,e)},t)},S.defer=S.partial(S.delay,S,1),S.throttle=function(n,t,e){var r,i,o,u=null,a=0;e||(e={});var s=function(){a=e.leading===!1?0:S.now(),u=null,o=n.apply(r,i),u||(r=i=null)};return function(){var c=S.now();a||e.leading!==!1||(a=c);var l=t-(c-a);return r=this,i=arguments,0>=l||l>t?(u&&(clearTimeout(u),u=null),a=c,o=n.apply(r,i),u||(r=i=null)):u||e.trailing===!1||(u=setTimeout(s,l)),o}},S.debounce=function(n,t,e){var r,i,o,u,a,s=function(){var c=S.now()-u;t>c&&c>=0?r=setTimeout(s,t-c):(r=null,e||(a=n.apply(o,i),r||(o=i=null)))};return function(){o=this,i=arguments,u=S.now();var c=e&&!r;return r||(r=setTimeout(s,t)),c&&(a=n.apply(o,i),o=i=null),a}},S.wrap=function(n,t){return S.partial(t,n)},S.negate=function(n){return function(){return!n.apply(this,arguments)}},S.compose=function(){var n=arguments,t=n.length-1;return function(){for(var e=t,r=n[t].apply(this,arguments);e--;)r=n[e].call(this,r);return r}},S.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},S.before=function(n,t){var e;return function(){return--n>0&&(e=t.apply(this,arguments)),1>=n&&(t=null),e}},S.once=S.partial(S.before,2);var T=!{toString:null}.propertyIsEnumerable("toString"),$=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];S.keys=function(n){if(!S.isObject(n))return[];if(v)return v(n);var t=[];for(var e in n)S.has(n,e)&&t.push(e);return T&&o(n,t),t},S.allKeys=function(n){if(!S.isObject(n))return[];var t=[];for(var e in n)t.push(e);return T&&o(n,t),t},S.values=function(n){for(var t=S.keys(n),e=t.length,r=Array(e),i=0;e>i;i++)r[i]=n[t[i]];return r},S.mapObject=function(n,t,e){t=O(t,e);for(var r,i=S.keys(n),o=i.length,u={},a=0;o>a;a++)r=i[a],u[r]=t(n[r],r,n);return u},S.pairs=function(n){for(var t=S.keys(n),e=t.length,r=Array(e),i=0;e>i;i++)r[i]=[t[i],n[t[i]]];return r},S.invert=function(n){for(var t={},e=S.keys(n),r=0,i=e.length;i>r;r++)t[n[e[r]]]=e[r];return t},S.functions=S.methods=function(n){var t=[];for(var e in n)S.isFunction(n[e])&&t.push(e);return t.sort()},S.extend=x(S.allKeys),S.extendOwn=S.assign=x(S.keys),S.findKey=function(n,t,e){t=O(t,e);for(var r,i=S.keys(n),o=0,u=i.length;u>o;o++)if(r=i[o],t(n[r],r,n))return r},S.pick=function(n,t,e){var r,i,o={},u=n;if(null==u)return o;S.isFunction(t)?(i=S.allKeys(u),r=w(t,e)):(i=_(arguments,!1,!1,1),r=function(n,t,e){return t in e},u=Object(u));for(var a=0,s=i.length;s>a;a++){var c=i[a],l=u[c];r(l,c,u)&&(o[c]=l)}return o},S.omit=function(n,t,e){if(S.isFunction(t))t=S.negate(t);else{var r=S.map(_(arguments,!1,!1,1),String);t=function(n,t){return!S.contains(r,t)}}return S.pick(n,t,e)},S.defaults=x(S.allKeys,!0),S.create=function(n,t){var e=k(n);return t&&S.extendOwn(e,t),e},S.clone=function(n){return S.isObject(n)?S.isArray(n)?n.slice():S.extend({},n):n},S.tap=function(n,t){return t(n),n},S.isMatch=function(n,t){var e=S.keys(t),r=e.length;if(null==n)return!r;for(var i=Object(n),o=0;r>o;o++){var u=e[o];if(t[u]!==i[u]||!(u in i))return!1}return!0};var q=function(n,t,e,r){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof S&&(n=n._wrapped),t instanceof S&&(t=t._wrapped);var i=p.call(n);if(i!==p.call(t))return!1;switch(i){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var o="[object Array]"===i;if(!o){if("object"!=typeof n||"object"!=typeof t)return!1;var u=n.constructor,a=t.constructor;if(u!==a&&!(S.isFunction(u)&&u instanceof u&&S.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}e=e||[],r=r||[];for(var s=e.length;s--;)if(e[s]===n)return r[s]===t;if(e.push(n),r.push(t),o){if(s=n.length,s!==t.length)return!1;for(;s--;)if(!q(n[s],t[s],e,r))return!1}else{var c,l=S.keys(n);if(s=l.length,S.keys(t).length!==s)return!1;for(;s--;)if(c=l[s],!S.has(t,c)||!q(n[c],t[c],e,r))return!1}return e.pop(),r.pop(),!0};S.isEqual=function(n,t){return q(n,t)},S.isEmpty=function(n){return null==n?!0:I(n)&&(S.isArray(n)||S.isString(n)||S.isArguments(n))?0===n.length:0===S.keys(n).length},S.isElement=function(n){return!(!n||1!==n.nodeType)},S.isArray=d||function(n){return"[object Array]"===p.call(n)},S.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},S.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){S["is"+n]=function(t){return p.call(t)==="[object "+n+"]"}}),S.isArguments(arguments)||(S.isArguments=function(n){return S.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(S.isFunction=function(n){return"function"==typeof n||!1}),S.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},S.isNaN=function(n){return S.isNumber(n)&&n!==+n},S.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===p.call(n)},S.isNull=function(n){return null===n},S.isUndefined=function(n){return void 0===n},S.has=function(n,t){return null!=n&&m.call(n,t)},S.noConflict=function(){return u._=a,this},S.identity=function(n){return n},S.constant=function(n){return function(){return n}},S.noop=function(){},S.property=A,S.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},S.matcher=S.matches=function(n){return n=S.extendOwn({},n),function(t){return S.isMatch(t,n)}},S.times=function(n,t,e){var r=Array(Math.max(0,n));t=w(t,e,1);for(var i=0;n>i;i++)r[i]=t(i);return r},S.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},S.now=Date.now||function(){return(new Date).getTime()};var M={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},D=S.invert(M),N=function(n){var t=function(t){return n[t]},e="(?:"+S.keys(n).join("|")+")",r=RegExp(e),i=RegExp(e,"g");return function(n){return n=null==n?"":""+n,r.test(n)?n.replace(i,t):n}};S.escape=N(M),S.unescape=N(D),S.result=function(n,t,e){var r=null==n?void 0:n[t];return void 0===r&&(r=e),S.isFunction(r)?r.call(n):r};var H=0;S.uniqueId=function(n){var t=++H+"";return n?n+t:t},S.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var z=/(.)^/,L={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},R=/\\|'|\r|\n|\u2028|\u2029/g,Q=function(n){return"\\"+L[n]};S.template=function(n,t,e){!t&&e&&(t=e),t=S.defaults({},t,S.templateSettings);var r=RegExp([(t.escape||z).source,(t.interpolate||z).source,(t.evaluate||z).source].join("|")+"|$","g"),i=0,o="__p+='";n.replace(r,function(t,e,r,u,a){return o+=n.slice(i,a).replace(R,Q),i=a+t.length,e?o+="'+\n((__t=("+e+"))==null?'':_.escape(__t))+\n'":r?o+="'+\n((__t=("+r+"))==null?'':__t)+\n'":u&&(o+="';\n"+u+"\n__p+='"),t}),o+="';\n",t.variable||(o="with(obj||{}){\n"+o+"}\n"),o="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{var u=new Function(t.variable||"obj","_",o)}catch(a){throw a.source=o,a}var s=function(n){return u.call(this,n,S)},c=t.variable||"obj";return s.source="function("+c+"){\n"+o+"}",s},S.chain=function(n){var t=S(n);return t._chain=!0,t};var B=function(n,t){return n._chain?S(t).chain():t};S.mixin=function(n){S.each(S.functions(n),function(t){var e=S[t]=n[t];S.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),B(this,e.apply(S,n))}})},S.mixin(S),S.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=s[n];S.prototype[n]=function(){var e=this._wrapped;return t.apply(e,arguments),"shift"!==n&&"splice"!==n||0!==e.length||delete e[0],B(this,e)}}),S.each(["concat","join","slice"],function(n){var t=s[n];S.prototype[n]=function(){return B(this,t.apply(this._wrapped,arguments))}}),S.prototype.value=function(){return this._wrapped},S.prototype.valueOf=S.prototype.toJSON=S.prototype.value,S.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return S})}).call(this)},{}],4:[function(n,t,e){!function(t,e,r,i,o){function u(){p=new d(e("form#contact")),m.init({speed:800,easing:"easeOutCubic",updateURL:!1}),v.init(),g.init(),a(),new i({boxClass:"gs-animate",offset:200}).init(),setTimeout(function(){w.animateIn()},1e3),y.trigger("resize")}function a(){b.scroll(s),y.resize(f.debounce(c,100)),e("#overlay-contact").on("shown.overlay",function(){p.focus()}).on("hidden.overlay",function(){p.reset()})}function s(n){}function c(n){l()}function l(){t.innerWidth>=S.sm?(v.unpause(),g.pause()):(v.pause(),g.unpause())}var f=n("underscore"),h=n("request-frame");h("request"),h("cancel");n("./components/svOverlay");var p,m=n("smooth-scroll"),d=n("./components/contactForm"),v=n("./components/strainSectionDesktop"),g=n("./components/strainSectionMobile"),y=e(t),b=e(document),S=(e(document.body),{xs:480,sm:768,md:992,lg:1200}),w={$el:e(".home-logo"),$sideTexts:e(".side-text, .mobile-secondary"),animateIn:function(){this.$el.removeClass("hidden"),setTimeout(function(){this.$el.addClass("with-border"),this.$sideTexts.removeClass("hidden")}.bind(this),800)}};e(u)}(window,jQuery,Modernizr,WOW)},{"./components/contactForm":5,"./components/strainSectionDesktop":7,"./components/strainSectionMobile":8,"./components/svOverlay":9,"request-frame":1,"smooth-scroll":2,underscore:3}],5:[function(n,t,e){!function(n){ContactForm=function(t){function e(){r.$form.on("focus",'[name="email"], [name="message"]',function(){n(this).removeClass("error")}),r.$form.on("submit",function(n){n.preventDefault(),r.onSubmit(n)})}var r=this;this.$form=t;var i=this.$form.find('[name="email"]'),o=this.$form.find('[name="message"]'),u=this.$form.find('[name="url"]'),a=this.$form.find('input[type="submit"]'),s=a.val(),c="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$",l={sending:"Sending...",success:"Thank you for your message",failure:"Something went wrong, please try again"},f=1e3;this.validateEmail=function(){var n=null!==i.val().match(c);return n||i.addClass("error"),n},this.validateMessage=function(){var n=o.val(),t=!(!n||/^\s*$/.test(n));return t||o.addClass("error"),t},this.validateForm=function(){var n=this.validateEmail(),t=this.validateMessage();return n&&t},this.focus=function(){return this.$form.find("input").first().focus(),this},this.reset=function(){return i.val("").removeClass("error"),o.val("").removeClass("error"),a.val(s).prop("disabled",!1),this},this.onSubmit=function(t){var e=this;if(this.validateForm()){var r=Date.now(),a={url:u.val(),email:i.val(),message:o.val()};n.ajax({url:"/contact.php",type:"POST",dataType:"json",data:a,beforeSend:e.beforeSend}).done(function(n){var t=0,i=Date.now()-r,o=n.success?e.onSuccess:e.onFailure;return f>i&&(t=f-i),setTimeout(o.bind(e),t)}).fail(e.onFailure)}},this.beforeSend=function(){a.val(l.sending).prop("disabled","disabled"),window.ga&&ga("send","event","Contact Form","Message Submit")},this.onSuccess=function(){var n=this;a.val(l.success),setTimeout(function(){n.$form.parents(".overlay").find(".overlay-close").trigger("click"),setTimeout(function(){n.reset()},500)},1500)},this.onFailure=function(){a.val(l.failure).prop("disabled",!1),setTimeout(function(){a.val(s)},3e3)},e()},t.exports=ContactForm}(jQuery)},{}],6:[function(n,t,e){t.exports=function(n,t,e){return Math.min(Math.max(n,t),e)}},{}],7:[function(n,t,e){!function(e,r){var i=n("underscore"),o=n("request-frame"),u=o("request"),a=(o("cancel"),n("./math/clamp")),s=function(){var n=this,t=e(window),r=e(document),o=e(".strain"),s="scroll.sticky.desktop",c=!1;this.setElementTransform=function(n,t){var e=t.find(".strain-image"),r=t.find(".section-strain-info");u(function(){e.css({"-webkit-transform":"scale("+n+")","-ms-transform":"scale("+n+")","-o-transform":"scale("+n+")",transform:"scale("+n+")"}),r.css({"-webkit-transform":"scale("+n+")","-ms-transform":"scale("+n+")","-o-transform":"scale("+n+")",transform:"scale("+n+")"})})},this.setElementOpacity=function(n,t,e){u(function(){t.css("opacity",n),e&&e.css("opacity",1-n)})},this.getSectionScrollProgress=function(n){var t=n.parent(".sticky-wrapper"),e=t.offset().top,i=t.height(),o=r.scrollTop(),u=e+i-o,s=1-u/i;return a(s,0,1)},this.getScaleAmount=function(n){return+(1-Math.pow(n,4)).toFixed(2)},this.getFadeAmount=function(n){return+(1-Math.pow(n,2.2)).toFixed(2)},this.getNextSectionShadow=function(n){var t,e=o.index(n);return o.eq(e+1).length&&(t=o.eq(e+1).find(".strain-desktop-shadow")),t},this.onStrainScroll=function(n){if(!c){var t=this.getSectionScrollProgress(n),e=this.getFadeAmount(t),r=this.getScaleAmount(t),i=this.getNextSectionShadow(n);this.setElementOpacity(e,n,i),this.setElementTransform(r,n)}},this.pause=function(){return c=!0,this},this.unpause=function(){return c=!1,this},this.onResize=function(){o.each(function(t,r){var i=e(r);i.sticky("update"),n.onStrainScroll(i)})},this.initStrainSection=function(t){var e=o.index(t),i=s+"."+e;t.css("z-index",e+10),t.on("sticky-start",function(){r.on(i,n.onStrainScroll.bind(n,t,e))}).on("sticky-end",function(){r.off(i)}).sticky(),this.onStrainScroll(t)};var l=function(){o.each(function(n,t){this.initStrainSection(e(t))}.bind(this)),t.on("resize",i.debounce(n.onResize.bind(n),100))};this.init=i.once(l)};t.exports=new s}(jQuery)},{"./math/clamp":6,"request-frame":1,underscore:3}],8:[function(n,t,e){!function(e,r){var i=n("underscore"),o=n("request-frame"),u=o("request"),a=(o("cancel"),n("./math/clamp")),s=function(){var n=this,t=e(document),r=e(".strain-mobile-infos"),o=e(".strain-mobile-info"),s=e(".strain-mobile-image-list"),c=e(".strain-mobile-infos-shadow"),l="scroll.sticky.mobile",f=!1,h={slidesToShow:1,swipeToSlide:!0,mobileFirst:!0,arrows:!1,centerMode:!0,centerPadding:"80px"};this.setBgColor=function(){var n=s.slick("getSlick"),t=n.$slides.eq(n.getCurrent()).data("color");r.css("background-color",t)},this.setElementsTransform=function(n){var t=s.find("img");u(function(){t.css({"-webkit-transform":"scale("+n+")","-ms-transform":"scale("+n+")","-o-transform":"scale("+n+")",transform:"scale("+n+")"})})},this.setElementsOpacity=function(n){u(function(){s.css("opacity",n),c.css("opacity",1-n)})},this.getScrollProgress=function(){var n=s.height(),e=t.scrollTop(),i=r.offset().top-e;return progress=1-i/n,progress=a(progress,0,1),progress},this.getScaleAmount=function(n){return 1-Math.pow(n,3)},this.getFadeAmount=function(n){return 1-Math.pow(n,3)},this.onScroll=function(){if(!f){var n=this.getScrollProgress(),t=this.getFadeAmount(n),e=this.getScaleAmount(n);return this.setElementsOpacity(t),this.setElementsTransform(e),this}},this.attachScrollHandler=function(){return t.on(l,this.onScroll.bind(this)),this},this.removeScrollHandler=function(){return t.off(l),this},this.onStickyStart=function(){this.attachScrollHandler()},this.onStickyEnd=function(){this.removeScrollHandler()},this.pause=function(){return f=!0,this},this.unpause=function(){return f=!1,this};var p=function(){return s.on("init",function(t,e){console.log("init mobile strain slider"),setTimeout(n.setBgColor,200)}),s.slick(h).on("afterChange",function(t,e,r){o.removeClass("current"),o.eq(r).addClass("current"),n.setBgColor()}).on("sticky-start",this.onStickyStart.bind(this)).on("sticky-end",this.onStickyEnd.bind(this)).sticky(),this};return this.init=i.once(p),this};t.exports=new s}(jQuery)},{"./math/clamp":6,"request-frame":1,underscore:3}],9:[function(n,t,e){!function(n){function t(n){return this.each(function(){var n=new SvOverlay(this);n.show()})}var e="overlay",r="."+e,i={HIDE:"hide"+r,HIDDEN:"hidden"+r,SHOW:"show"+r,SHOWN:"shown"+r,FOCUSIN:"focusin"+r,CLICK_DISMISS:"click.dismiss"+r,KEYDOWN_DISMISS:"keydown.dismiss"+r};SvOverlay=function(t,e){this.options=e,this.$body=n(document.body),this.$element=n(t),this.isShown=!1},SvOverlay.prototype.show=function(){var t=function(){this.$element.trigger("focus").trigger(i.SHOWN)}.bind(this),e=n.Event(i.SHOW,{overlay:this,target:self.$element});return this.$element.trigger(e),this.isShown?void 0:(this.isShown=!0,this.escape(),this.$element.on(i.CLICK_DISMISS,".overlay-close",n.proxy(this.hide,this)),this.enforceFocus(),this.$element.fadeTo(500,1,"swing",t),this.$body.addClass("overlay-open"),this.$element.show(),this)},SvOverlay.prototype.hide=function(t){var e=function(){this.$element.hide().trigger(i.HIDDEN)}.bind(this);return t&&t.preventDefault(),t=n.Event(i.HIDE),this.$element.trigger(t),this.isShown?(this.isShown=!1,this.$body.removeClass("overlay-open"),this.escape(),n(document).off("focusin.overlay"),this.$element.off(i.CLICK_DISMISS),this.$element.fadeTo(500,0,"swing",e),this):void 0},SvOverlay.prototype.enforceFocus=function(){n(document).off(i.FOCUSIN).on(i.FOCUSIN,n.proxy(function(n){this.$element[0]===n.target||this.$element.has(n.target).length||this.$element.trigger("focus")},this))},SvOverlay.prototype.escape=function(){this.isShown?this.$element.on(i.KEYDOWN_DISMISS,n.proxy(function(n){27==n.which&&this.hide()},this)):this.$element.off(i.KEYDOWN_DISMISS)},SvOverlay.prototype.hasOverflow=function(){return this.$element.find(".overlay-content").height()>=window.innerHeight},n.fn.svOverlay=t,n.fn.svOverlay.Constructor=SvOverlay,n(document).on("click","[data-overlay]",function(e){var r=n(this),i=r.attr("href"),o=n(r.attr("data-overlay")||i&&i.replace(/.*(?=#[^\s]+$)/,""));r.is("a")&&e.preventDefault(),t.call(o,this)})}(jQuery)},{}]},{},[4]);
//# sourceMappingURL=app.js.map
