!function t(n,e,r){function i(u,a){if(!e[u]){if(!n[u]){var s="function"==typeof require&&require;if(!a&&s)return s(u,!0);if(o)return o(u,!0);var c=new Error("Cannot find module '"+u+"'");throw c.code="MODULE_NOT_FOUND",c}var l=e[u]={exports:{}};n[u][0].call(l.exports,function(t){var e=n[u][1][t];return i(e?e:t)},l,l.exports,t,n,e,r)}return e[u].exports}for(var o="function"==typeof require&&require,u=0;u<r.length;u++)i(r[u]);return i}({1:[function(t,n,e){!function(t){function r(n){function e(){function n(t,n,e){return t||n?(console.warn(e),!0):!1}function e(){return c?n(r,i,s):!1}var r=t.webkitRequestAnimationFrame,i=t.requestAnimationFrame,o=screen.width<=768?!0:!1,u=!(r&&i),a=t.performance?!1:!0,s="setTimeout is being used as a substitiue forrequestAnimationFrame due to a bug within iOS 6 builds",c=u&&o&&a;return e()}function r(t){clearTimeout(t)}function i(t){var n=Date.now(),e=Math.max(v+16,n);return setTimeout(function(){t(v=e)},e-n)}function o(){return Array.prototype.filter?(l=t["request"+d]||t[p.filter(function(n){return void 0!==t[n+m]?n:void 0})+m]||i,e()?i:l):i}function u(){function n(n,e){for(var r;e<n.length;e++)if(t[n[e]]){r=t[n[e]];break}return r}var i=[];return Array.prototype.map?(p.map(function(t){return["Cancel","CancelRequest"].map(function(n){i.push(t+n+d)})}),f=t["cancel"+d]||n(i,0)||r,e()?r:f):r}function a(){return b?i:o()}function s(){return u()}function c(){b?(t.requestAnimationFrame=i,t.cancelAnimationFrame=r):(t.requestAnimationFrame=o(),t.cancelAnimationFrame=u())}var l,f,h,p=["moz","webkit"],d="AnimationFrame",m="Request"+d,v=0,g=t.mozRequestAnimationFrame,y=t.mozCancelAnimationFrame,b=g&&!y;switch(Date.now||(Date.now=function(){return(new Date).getTime()}),n){case"request":case"":h=a();break;case"cancel":h=s();break;case"native":c();break;default:throw new Error("RequestFrame parameter is not a type.")}return h}"object"==typeof n&&"object"==typeof n.exports?n.exports=e=r:"function"==typeof define&&define.amd?define(function(){return r}):"object"==typeof t&&(t.requestFrame=r)}("undefined"==typeof window?{}:window)},{}],2:[function(t,n,e){(function(t){!function(t,r){"function"==typeof define&&define.amd?define([],r(t)):"object"==typeof e?n.exports=r(t):t.smoothScroll=r(t)}("undefined"!=typeof t?t:this.window||this.global,function(t){"use strict";var n,e,r,i,o={},u="querySelector"in document&&"addEventListener"in t,a={selector:"[data-scroll]",selectorHeader:"[data-scroll-header]",speed:500,easing:"easeInOutCubic",offset:0,updateURL:!0,callback:function(){}},s=function(){var t={},n=!1,e=0,r=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(n=arguments[0],e++);for(var i=function(e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n&&"[object Object]"===Object.prototype.toString.call(e[r])?t[r]=s(!0,t[r],e[r]):t[r]=e[r])};r>e;e++){var o=arguments[e];i(o)}return t},c=function(t){return Math.max(t.scrollHeight,t.offsetHeight,t.clientHeight)},l=function(t,n){var e,r,i=n.charAt(0),o="classList"in document.documentElement;for("["===i&&(n=n.substr(1,n.length-2),e=n.split("="),e.length>1&&(r=!0,e[1]=e[1].replace(/"/g,"").replace(/'/g,"")));t&&t!==document;t=t.parentNode){if("."===i)if(o){if(t.classList.contains(n.substr(1)))return t}else if(new RegExp("(^|\\s)"+n.substr(1)+"(\\s|$)").test(t.className))return t;if("#"===i&&t.id===n.substr(1))return t;if("["===i&&t.hasAttribute(e[0])){if(!r)return t;if(t.getAttribute(e[0])===e[1])return t}if(t.tagName.toLowerCase()===n)return t}return null},f=function(t){for(var n,e=String(t),r=e.length,i=-1,o="",u=e.charCodeAt(0);++i<r;){if(n=e.charCodeAt(i),0===n)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");o+=n>=1&&31>=n||127==n||0===i&&n>=48&&57>=n||1===i&&n>=48&&57>=n&&45===u?"\\"+n.toString(16)+" ":n>=128||45===n||95===n||n>=48&&57>=n||n>=65&&90>=n||n>=97&&122>=n?e.charAt(i):"\\"+e.charAt(i)}return o},h=function(t,n){var e;return"easeInQuad"===t&&(e=n*n),"easeOutQuad"===t&&(e=n*(2-n)),"easeInOutQuad"===t&&(e=.5>n?2*n*n:-1+(4-2*n)*n),"easeInCubic"===t&&(e=n*n*n),"easeOutCubic"===t&&(e=--n*n*n+1),"easeInOutCubic"===t&&(e=.5>n?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1),"easeInQuart"===t&&(e=n*n*n*n),"easeOutQuart"===t&&(e=1- --n*n*n*n),"easeInOutQuart"===t&&(e=.5>n?8*n*n*n*n:1-8*--n*n*n*n),"easeInQuint"===t&&(e=n*n*n*n*n),"easeOutQuint"===t&&(e=1+--n*n*n*n*n),"easeInOutQuint"===t&&(e=.5>n?16*n*n*n*n*n:1+16*--n*n*n*n*n),e||n},p=function(t,n,e){var r=0;if(t.offsetParent)do r+=t.offsetTop,t=t.offsetParent;while(t);return r=r-n-e,r>=0?r:0},d=function(){return Math.max(t.document.body.scrollHeight,t.document.documentElement.scrollHeight,t.document.body.offsetHeight,t.document.documentElement.offsetHeight,t.document.body.clientHeight,t.document.documentElement.clientHeight)},m=function(t){return t&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(t):{}},v=function(n,e){t.history.pushState&&(e||"true"===e)&&"file:"!==t.location.protocol&&t.history.pushState(null,null,[t.location.protocol,"//",t.location.host,t.location.pathname,t.location.search,n].join(""))},g=function(t){return null===t?0:c(t)+t.offsetTop};o.animateScroll=function(n,e,o){var u=m(n?n.getAttribute("data-options"):null),c=s(c||a,o||{},u);e="#"+f(e.substr(1));var l="#"===e?t.document.documentElement:t.document.querySelector(e),y=t.pageYOffset;r||(r=t.document.querySelector(c.selectorHeader)),i||(i=g(r));var b,S,w,O=p(l,i,parseInt(c.offset,10)),x=O-y,k=d(),A=0;v(e,c.updateURL);var j=function(r,i,o){var u=t.pageYOffset;(r==i||u==i||t.innerHeight+u>=k)&&(clearInterval(o),l.focus(),c.callback(n,e))},E=function(){A+=16,S=A/parseInt(c.speed,10),S=S>1?1:S,w=y+x*h(c.easing,S),t.scrollTo(0,Math.floor(w)),j(w,O,b)},F=function(){b=setInterval(E,16)};0===t.pageYOffset&&t.scrollTo(0,0),F()};var y=function(t){var e=l(t.target,n.selector);e&&"a"===e.tagName.toLowerCase()&&(t.preventDefault(),o.animateScroll(e,e.hash,n))},b=function(t){e||(e=setTimeout(function(){e=null,i=g(r)},66))};return o.destroy=function(){n&&(t.document.removeEventListener("click",y,!1),t.removeEventListener("resize",b,!1),n=null,e=null,r=null,i=null)},o.init=function(e){u&&(o.destroy(),n=s(a,e||{}),r=t.document.querySelector(n.selectorHeader),i=g(r),t.document.addEventListener("click",y,!1),r&&t.addEventListener("resize",b,!1))},o})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],3:[function(t,n,e){(function(){function t(t){function n(n,e,r,i,o,u){for(;o>=0&&u>o;o+=t){var a=i?i[o]:o;r=e(r,n[a],a,n)}return r}return function(e,r,i,o){r=w(r,o,4);var u=!F(e)&&S.keys(e),a=(u||e).length,s=t>0?0:a-1;return arguments.length<3&&(i=e[u?u[s]:s],s+=t),n(e,r,i,u,s,a)}}function r(t){return function(n,e,r){e=O(e,r);for(var i=E(n),o=t>0?0:i-1;o>=0&&i>o;o+=t)if(e(n[o],o,n))return o;return-1}}function i(t,n,e){return function(r,i,o){var u=0,a=E(r);if("number"==typeof o)t>0?u=o>=0?o:Math.max(o+a,u):a=o>=0?Math.min(o+1,a):o+a+1;else if(e&&o&&a)return o=e(r,i),r[o]===i?o:-1;if(i!==i)return o=n(h.call(r,u,a),S.isNaN),o>=0?o+u:-1;for(o=t>0?u:a-1;o>=0&&a>o;o+=t)if(r[o]===i)return o;return-1}}function o(t,n){var e=T.length,r=t.constructor,i=S.isFunction(r)&&r.prototype||c,o="constructor";for(S.has(t,o)&&!S.contains(n,o)&&n.push(o);e--;)o=T[e],o in t&&t[o]!==i[o]&&!S.contains(n,o)&&n.push(o)}var u=this,a=u._,s=Array.prototype,c=Object.prototype,l=Function.prototype,f=s.push,h=s.slice,p=c.toString,d=c.hasOwnProperty,m=Array.isArray,v=Object.keys,g=l.bind,y=Object.create,b=function(){},S=function(t){return t instanceof S?t:this instanceof S?void(this._wrapped=t):new S(t)};"undefined"!=typeof e?("undefined"!=typeof n&&n.exports&&(e=n.exports=S),e._=S):u._=S,S.VERSION="1.8.3";var w=function(t,n,e){if(void 0===n)return t;switch(null==e?3:e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,i){return t.call(n,e,r,i)};case 4:return function(e,r,i,o){return t.call(n,e,r,i,o)}}return function(){return t.apply(n,arguments)}},O=function(t,n,e){return null==t?S.identity:S.isFunction(t)?w(t,n,e):S.isObject(t)?S.matcher(t):S.property(t)};S.iteratee=function(t,n){return O(t,n,1/0)};var x=function(t,n){return function(e){var r=arguments.length;if(2>r||null==e)return e;for(var i=1;r>i;i++)for(var o=arguments[i],u=t(o),a=u.length,s=0;a>s;s++){var c=u[s];n&&void 0!==e[c]||(e[c]=o[c])}return e}},k=function(t){if(!S.isObject(t))return{};if(y)return y(t);b.prototype=t;var n=new b;return b.prototype=null,n},A=function(t){return function(n){return null==n?void 0:n[t]}},j=Math.pow(2,53)-1,E=A("length"),F=function(t){var n=E(t);return"number"==typeof n&&n>=0&&j>=n};S.each=S.forEach=function(t,n,e){n=w(n,e);var r,i;if(F(t))for(r=0,i=t.length;i>r;r++)n(t[r],r,t);else{var o=S.keys(t);for(r=0,i=o.length;i>r;r++)n(t[o[r]],o[r],t)}return t},S.map=S.collect=function(t,n,e){n=O(n,e);for(var r=!F(t)&&S.keys(t),i=(r||t).length,o=Array(i),u=0;i>u;u++){var a=r?r[u]:u;o[u]=n(t[a],a,t)}return o},S.reduce=S.foldl=S.inject=t(1),S.reduceRight=S.foldr=t(-1),S.find=S.detect=function(t,n,e){var r;return r=F(t)?S.findIndex(t,n,e):S.findKey(t,n,e),void 0!==r&&-1!==r?t[r]:void 0},S.filter=S.select=function(t,n,e){var r=[];return n=O(n,e),S.each(t,function(t,e,i){n(t,e,i)&&r.push(t)}),r},S.reject=function(t,n,e){return S.filter(t,S.negate(O(n)),e)},S.every=S.all=function(t,n,e){n=O(n,e);for(var r=!F(t)&&S.keys(t),i=(r||t).length,o=0;i>o;o++){var u=r?r[o]:o;if(!n(t[u],u,t))return!1}return!0},S.some=S.any=function(t,n,e){n=O(n,e);for(var r=!F(t)&&S.keys(t),i=(r||t).length,o=0;i>o;o++){var u=r?r[o]:o;if(n(t[u],u,t))return!0}return!1},S.contains=S.includes=S.include=function(t,n,e,r){return F(t)||(t=S.values(t)),("number"!=typeof e||r)&&(e=0),S.indexOf(t,n,e)>=0},S.invoke=function(t,n){var e=h.call(arguments,2),r=S.isFunction(n);return S.map(t,function(t){var i=r?n:t[n];return null==i?i:i.apply(t,e)})},S.pluck=function(t,n){return S.map(t,S.property(n))},S.where=function(t,n){return S.filter(t,S.matcher(n))},S.findWhere=function(t,n){return S.find(t,S.matcher(n))},S.max=function(t,n,e){var r,i,o=-(1/0),u=-(1/0);if(null==n&&null!=t){t=F(t)?t:S.values(t);for(var a=0,s=t.length;s>a;a++)r=t[a],r>o&&(o=r)}else n=O(n,e),S.each(t,function(t,e,r){i=n(t,e,r),(i>u||i===-(1/0)&&o===-(1/0))&&(o=t,u=i)});return o},S.min=function(t,n,e){var r,i,o=1/0,u=1/0;if(null==n&&null!=t){t=F(t)?t:S.values(t);for(var a=0,s=t.length;s>a;a++)r=t[a],o>r&&(o=r)}else n=O(n,e),S.each(t,function(t,e,r){i=n(t,e,r),(u>i||i===1/0&&o===1/0)&&(o=t,u=i)});return o},S.shuffle=function(t){for(var n,e=F(t)?t:S.values(t),r=e.length,i=Array(r),o=0;r>o;o++)n=S.random(0,o),n!==o&&(i[o]=i[n]),i[n]=e[o];return i},S.sample=function(t,n,e){return null==n||e?(F(t)||(t=S.values(t)),t[S.random(t.length-1)]):S.shuffle(t).slice(0,Math.max(0,n))},S.sortBy=function(t,n,e){return n=O(n,e),S.pluck(S.map(t,function(t,e,r){return{value:t,index:e,criteria:n(t,e,r)}}).sort(function(t,n){var e=t.criteria,r=n.criteria;if(e!==r){if(e>r||void 0===e)return 1;if(r>e||void 0===r)return-1}return t.index-n.index}),"value")};var I=function(t){return function(n,e,r){var i={};return e=O(e,r),S.each(n,function(r,o){var u=e(r,o,n);t(i,r,u)}),i}};S.groupBy=I(function(t,n,e){S.has(t,e)?t[e].push(n):t[e]=[n]}),S.indexBy=I(function(t,n,e){t[e]=n}),S.countBy=I(function(t,n,e){S.has(t,e)?t[e]++:t[e]=1}),S.toArray=function(t){return t?S.isArray(t)?h.call(t):F(t)?S.map(t,S.identity):S.values(t):[]},S.size=function(t){return null==t?0:F(t)?t.length:S.keys(t).length},S.partition=function(t,n,e){n=O(n,e);var r=[],i=[];return S.each(t,function(t,e,o){(n(t,e,o)?r:i).push(t)}),[r,i]},S.first=S.head=S.take=function(t,n,e){return null!=t?null==n||e?t[0]:S.initial(t,t.length-n):void 0},S.initial=function(t,n,e){return h.call(t,0,Math.max(0,t.length-(null==n||e?1:n)))},S.last=function(t,n,e){return null!=t?null==n||e?t[t.length-1]:S.rest(t,Math.max(0,t.length-n)):void 0},S.rest=S.tail=S.drop=function(t,n,e){return h.call(t,null==n||e?1:n)},S.compact=function(t){return S.filter(t,S.identity)};var _=function(t,n,e,r){for(var i=[],o=0,u=r||0,a=E(t);a>u;u++){var s=t[u];if(F(s)&&(S.isArray(s)||S.isArguments(s))){n||(s=_(s,n,e));var c=0,l=s.length;for(i.length+=l;l>c;)i[o++]=s[c++]}else e||(i[o++]=s)}return i};S.flatten=function(t,n){return _(t,n,!1)},S.without=function(t){return S.difference(t,h.call(arguments,1))},S.uniq=S.unique=function(t,n,e,r){S.isBoolean(n)||(r=e,e=n,n=!1),null!=e&&(e=O(e,r));for(var i=[],o=[],u=0,a=E(t);a>u;u++){var s=t[u],c=e?e(s,u,t):s;n?(u&&o===c||i.push(s),o=c):e?S.contains(o,c)||(o.push(c),i.push(s)):S.contains(i,s)||i.push(s)}return i},S.union=function(){return S.uniq(_(arguments,!0,!0))},S.intersection=function(t){for(var n=[],e=arguments.length,r=0,i=E(t);i>r;r++){var o=t[r];if(!S.contains(n,o)){for(var u=1;e>u&&S.contains(arguments[u],o);u++);u===e&&n.push(o)}}return n},S.difference=function(t){var n=_(arguments,!0,!0,1);return S.filter(t,function(t){return!S.contains(n,t)})},S.zip=function(){return S.unzip(arguments)},S.unzip=function(t){for(var n=t&&S.max(t,E).length||0,e=Array(n),r=0;n>r;r++)e[r]=S.pluck(t,r);return e},S.object=function(t,n){for(var e={},r=0,i=E(t);i>r;r++)n?e[t[r]]=n[r]:e[t[r][0]]=t[r][1];return e},S.findIndex=r(1),S.findLastIndex=r(-1),S.sortedIndex=function(t,n,e,r){e=O(e,r,1);for(var i=e(n),o=0,u=E(t);u>o;){var a=Math.floor((o+u)/2);e(t[a])<i?o=a+1:u=a}return o},S.indexOf=i(1,S.findIndex,S.sortedIndex),S.lastIndexOf=i(-1,S.findLastIndex),S.range=function(t,n,e){null==n&&(n=t||0,t=0),e=e||1;for(var r=Math.max(Math.ceil((n-t)/e),0),i=Array(r),o=0;r>o;o++,t+=e)i[o]=t;return i};var C=function(t,n,e,r,i){if(!(r instanceof n))return t.apply(e,i);var o=k(t.prototype),u=t.apply(o,i);return S.isObject(u)?u:o};S.bind=function(t,n){if(g&&t.bind===g)return g.apply(t,h.call(arguments,1));if(!S.isFunction(t))throw new TypeError("Bind must be called on a function");var e=h.call(arguments,2),r=function(){return C(t,r,n,this,e.concat(h.call(arguments)))};return r},S.partial=function(t){var n=h.call(arguments,1),e=function(){for(var r=0,i=n.length,o=Array(i),u=0;i>u;u++)o[u]=n[u]===S?arguments[r++]:n[u];for(;r<arguments.length;)o.push(arguments[r++]);return C(t,e,this,this,o)};return e},S.bindAll=function(t){var n,e,r=arguments.length;if(1>=r)throw new Error("bindAll must be passed function names");for(n=1;r>n;n++)e=arguments[n],t[e]=S.bind(t[e],t);return t},S.memoize=function(t,n){var e=function(r){var i=e.cache,o=""+(n?n.apply(this,arguments):r);return S.has(i,o)||(i[o]=t.apply(this,arguments)),i[o]};return e.cache={},e},S.delay=function(t,n){var e=h.call(arguments,2);return setTimeout(function(){return t.apply(null,e)},n)},S.defer=S.partial(S.delay,S,1),S.throttle=function(t,n,e){var r,i,o,u=null,a=0;e||(e={});var s=function(){a=e.leading===!1?0:S.now(),u=null,o=t.apply(r,i),u||(r=i=null)};return function(){var c=S.now();a||e.leading!==!1||(a=c);var l=n-(c-a);return r=this,i=arguments,0>=l||l>n?(u&&(clearTimeout(u),u=null),a=c,o=t.apply(r,i),u||(r=i=null)):u||e.trailing===!1||(u=setTimeout(s,l)),o}},S.debounce=function(t,n,e){var r,i,o,u,a,s=function(){var c=S.now()-u;n>c&&c>=0?r=setTimeout(s,n-c):(r=null,e||(a=t.apply(o,i),r||(o=i=null)))};return function(){o=this,i=arguments,u=S.now();var c=e&&!r;return r||(r=setTimeout(s,n)),c&&(a=t.apply(o,i),o=i=null),a}},S.wrap=function(t,n){return S.partial(n,t)},S.negate=function(t){return function(){return!t.apply(this,arguments)}},S.compose=function(){var t=arguments,n=t.length-1;return function(){for(var e=n,r=t[n].apply(this,arguments);e--;)r=t[e].call(this,r);return r}},S.after=function(t,n){return function(){return--t<1?n.apply(this,arguments):void 0}},S.before=function(t,n){var e;return function(){return--t>0&&(e=n.apply(this,arguments)),1>=t&&(n=null),e}},S.once=S.partial(S.before,2);var $=!{toString:null}.propertyIsEnumerable("toString"),T=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];S.keys=function(t){if(!S.isObject(t))return[];if(v)return v(t);var n=[];for(var e in t)S.has(t,e)&&n.push(e);return $&&o(t,n),n},S.allKeys=function(t){if(!S.isObject(t))return[];var n=[];for(var e in t)n.push(e);return $&&o(t,n),n},S.values=function(t){for(var n=S.keys(t),e=n.length,r=Array(e),i=0;e>i;i++)r[i]=t[n[i]];return r},S.mapObject=function(t,n,e){n=O(n,e);for(var r,i=S.keys(t),o=i.length,u={},a=0;o>a;a++)r=i[a],u[r]=n(t[r],r,t);return u},S.pairs=function(t){for(var n=S.keys(t),e=n.length,r=Array(e),i=0;e>i;i++)r[i]=[n[i],t[n[i]]];return r},S.invert=function(t){for(var n={},e=S.keys(t),r=0,i=e.length;i>r;r++)n[t[e[r]]]=e[r];return n},S.functions=S.methods=function(t){var n=[];for(var e in t)S.isFunction(t[e])&&n.push(e);return n.sort()},S.extend=x(S.allKeys),S.extendOwn=S.assign=x(S.keys),S.findKey=function(t,n,e){n=O(n,e);for(var r,i=S.keys(t),o=0,u=i.length;u>o;o++)if(r=i[o],n(t[r],r,t))return r},S.pick=function(t,n,e){var r,i,o={},u=t;if(null==u)return o;S.isFunction(n)?(i=S.allKeys(u),r=w(n,e)):(i=_(arguments,!1,!1,1),r=function(t,n,e){return n in e},u=Object(u));for(var a=0,s=i.length;s>a;a++){var c=i[a],l=u[c];r(l,c,u)&&(o[c]=l)}return o},S.omit=function(t,n,e){if(S.isFunction(n))n=S.negate(n);else{var r=S.map(_(arguments,!1,!1,1),String);n=function(t,n){return!S.contains(r,n)}}return S.pick(t,n,e)},S.defaults=x(S.allKeys,!0),S.create=function(t,n){var e=k(t);return n&&S.extendOwn(e,n),e},S.clone=function(t){return S.isObject(t)?S.isArray(t)?t.slice():S.extend({},t):t},S.tap=function(t,n){return n(t),t},S.isMatch=function(t,n){var e=S.keys(n),r=e.length;if(null==t)return!r;for(var i=Object(t),o=0;r>o;o++){var u=e[o];if(n[u]!==i[u]||!(u in i))return!1}return!0};var q=function(t,n,e,r){if(t===n)return 0!==t||1/t===1/n;if(null==t||null==n)return t===n;t instanceof S&&(t=t._wrapped),n instanceof S&&(n=n._wrapped);var i=p.call(t);if(i!==p.call(n))return!1;switch(i){case"[object RegExp]":case"[object String]":return""+t==""+n;case"[object Number]":return+t!==+t?+n!==+n:0===+t?1/+t===1/n:+t===+n;case"[object Date]":case"[object Boolean]":return+t===+n}var o="[object Array]"===i;if(!o){if("object"!=typeof t||"object"!=typeof n)return!1;var u=t.constructor,a=n.constructor;if(u!==a&&!(S.isFunction(u)&&u instanceof u&&S.isFunction(a)&&a instanceof a)&&"constructor"in t&&"constructor"in n)return!1}e=e||[],r=r||[];for(var s=e.length;s--;)if(e[s]===t)return r[s]===n;if(e.push(t),r.push(n),o){if(s=t.length,s!==n.length)return!1;for(;s--;)if(!q(t[s],n[s],e,r))return!1}else{var c,l=S.keys(t);if(s=l.length,S.keys(n).length!==s)return!1;for(;s--;)if(c=l[s],!S.has(n,c)||!q(t[c],n[c],e,r))return!1}return e.pop(),r.pop(),!0};S.isEqual=function(t,n){return q(t,n)},S.isEmpty=function(t){return null==t?!0:F(t)&&(S.isArray(t)||S.isString(t)||S.isArguments(t))?0===t.length:0===S.keys(t).length},S.isElement=function(t){return!(!t||1!==t.nodeType)},S.isArray=m||function(t){return"[object Array]"===p.call(t)},S.isObject=function(t){var n=typeof t;return"function"===n||"object"===n&&!!t},S.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(t){S["is"+t]=function(n){return p.call(n)==="[object "+t+"]"}}),S.isArguments(arguments)||(S.isArguments=function(t){return S.has(t,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(S.isFunction=function(t){return"function"==typeof t||!1}),S.isFinite=function(t){return isFinite(t)&&!isNaN(parseFloat(t))},S.isNaN=function(t){return S.isNumber(t)&&t!==+t},S.isBoolean=function(t){return t===!0||t===!1||"[object Boolean]"===p.call(t)},S.isNull=function(t){return null===t},S.isUndefined=function(t){return void 0===t},S.has=function(t,n){return null!=t&&d.call(t,n)},S.noConflict=function(){return u._=a,this},S.identity=function(t){return t},S.constant=function(t){return function(){return t}},S.noop=function(){},S.property=A,S.propertyOf=function(t){return null==t?function(){}:function(n){return t[n]}},S.matcher=S.matches=function(t){return t=S.extendOwn({},t),function(n){return S.isMatch(n,t)}},S.times=function(t,n,e){var r=Array(Math.max(0,t));n=w(n,e,1);for(var i=0;t>i;i++)r[i]=n(i);return r},S.random=function(t,n){return null==n&&(n=t,t=0),t+Math.floor(Math.random()*(n-t+1))},S.now=Date.now||function(){return(new Date).getTime()};var M={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},D=S.invert(M),N=function(t){var n=function(n){return t[n]},e="(?:"+S.keys(t).join("|")+")",r=RegExp(e),i=RegExp(e,"g");return function(t){return t=null==t?"":""+t,r.test(t)?t.replace(i,n):t}};S.escape=N(M),S.unescape=N(D),S.result=function(t,n,e){var r=null==t?void 0:t[n];return void 0===r&&(r=e),S.isFunction(r)?r.call(t):r};var H=0;S.uniqueId=function(t){var n=++H+"";return t?t+n:n},S.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var z=/(.)^/,L={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},R=/\\|'|\r|\n|\u2028|\u2029/g,Q=function(t){return"\\"+L[t]};S.template=function(t,n,e){!n&&e&&(n=e),n=S.defaults({},n,S.templateSettings);var r=RegExp([(n.escape||z).source,(n.interpolate||z).source,(n.evaluate||z).source].join("|")+"|$","g"),i=0,o="__p+='";t.replace(r,function(n,e,r,u,a){return o+=t.slice(i,a).replace(R,Q),i=a+n.length,e?o+="'+\n((__t=("+e+"))==null?'':_.escape(__t))+\n'":r?o+="'+\n((__t=("+r+"))==null?'':__t)+\n'":u&&(o+="';\n"+u+"\n__p+='"),n}),o+="';\n",n.variable||(o="with(obj||{}){\n"+o+"}\n"),o="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{var u=new Function(n.variable||"obj","_",o)}catch(a){throw a.source=o,a}var s=function(t){return u.call(this,t,S)},c=n.variable||"obj";return s.source="function("+c+"){\n"+o+"}",s},S.chain=function(t){var n=S(t);return n._chain=!0,n};var B=function(t,n){return t._chain?S(n).chain():n};S.mixin=function(t){S.each(S.functions(t),function(n){var e=S[n]=t[n];S.prototype[n]=function(){var t=[this._wrapped];return f.apply(t,arguments),B(this,e.apply(S,t))}})},S.mixin(S),S.each(["pop","push","reverse","shift","sort","splice","unshift"],function(t){var n=s[t];S.prototype[t]=function(){var e=this._wrapped;return n.apply(e,arguments),"shift"!==t&&"splice"!==t||0!==e.length||delete e[0],B(this,e)}}),S.each(["concat","join","slice"],function(t){var n=s[t];S.prototype[t]=function(){return B(this,n.apply(this._wrapped,arguments))}}),S.prototype.value=function(){return this._wrapped},S.prototype.valueOf=S.prototype.toJSON=S.prototype.value,S.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return S})}).call(this)},{}],4:[function(t,n,e){!function(n,e,r,i,o){function u(){p=new m(e("form#contact")),d.init({speed:800,easing:"easeOutCubic",updateURL:!1}),v.init(),g.init(),y.init(),a(),new i({boxClass:"gs-animate",offset:200}).init(),setTimeout(function(){x.animateIn()},1e3),b.trigger("resize")}function a(){S.scroll(s),b.resize(f.debounce(c,100)),e("#overlay-contact").on("shown.overlay",function(){p.focus()}).on("hidden.overlay",function(){p.reset()})}function s(t){}function c(t){l()}function l(){n.innerWidth>=w.sm?(v.unpause(),y.unpause(),g.pause()):(v.pause(),y.pause(),g.unpause())}var f=t("underscore"),h=t("request-frame");h("request"),h("cancel");t("./components/svOverlay");var p,d=t("smooth-scroll"),m=t("./components/contactForm"),v=t("./components/strainSectionDesktop"),g=t("./components/strainSectionMobile"),y=t("./components/stockistsSection"),b=e(n),S=e(document),w=(e(document.body),{xs:480,sm:768,md:992,lg:1200}),O=n.navigator.userAgent;document.documentElement.setAttribute("data-useragent",O);var x={$el:e(".home-logo"),$sideTexts:e(".side-text, .mobile-secondary"),animateIn:function(){this.$el.removeClass("hidden"),setTimeout(function(){this.$el.addClass("with-border"),this.$sideTexts.removeClass("hidden")}.bind(this),800)}};e(u)}(window,jQuery,Modernizr,WOW)},{"./components/contactForm":5,"./components/stockistsSection":7,"./components/strainSectionDesktop":8,"./components/strainSectionMobile":9,"./components/svOverlay":10,"request-frame":1,"smooth-scroll":2,underscore:3}],5:[function(t,n,e){!function(t){ContactForm=function(n){function e(){r.$form.on("focus",'[name="email"], [name="message"]',function(){t(this).removeClass("error")}),r.$form.on("submit",function(t){t.preventDefault(),r.onSubmit(t)})}var r=this;this.$form=n;var i=this.$form.find('[name="email"]'),o=this.$form.find('[name="message"]'),u=this.$form.find('[name="url"]'),a=this.$form.find('input[type="submit"]'),s=a.val(),c="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$",l={sending:"Sending...",success:"Thank you for your message",failure:"Something went wrong, please try again"},f=1e3;this.validateEmail=function(){var t=null!==i.val().match(c);return t||i.addClass("error"),t},this.validateMessage=function(){var t=o.val(),n=!(!t||/^\s*$/.test(t));return n||o.addClass("error"),n},this.validateForm=function(){var t=this.validateEmail(),n=this.validateMessage();return t&&n},this.focus=function(){return this.$form.find("input").first().focus(),this},this.reset=function(){return i.val("").removeClass("error"),o.val("").removeClass("error"),a.val(s).prop("disabled",!1),this},this.onSubmit=function(n){var e=this;if(this.validateForm()){var r=Date.now(),a={url:u.val(),email:i.val(),message:o.val()};t.ajax({url:"/contact.php",type:"POST",dataType:"json",data:a,beforeSend:e.beforeSend}).done(function(t){var n=0,i=Date.now()-r,o=t.success?e.onSuccess:e.onFailure;return f>i&&(n=f-i),setTimeout(o.bind(e),n)}).fail(e.onFailure)}},this.beforeSend=function(){a.val(l.sending).prop("disabled","disabled"),window.ga&&ga("send","event","Contact Form","Message Submit")},this.onSuccess=function(){var t=this;a.val(l.success),setTimeout(function(){t.$form.parents(".overlay").find(".overlay-close").trigger("click"),setTimeout(function(){t.reset()},500)},1500)},this.onFailure=function(){a.val(l.failure).prop("disabled",!1),setTimeout(function(){a.val(s)},3e3)},e()},n.exports=ContactForm}(jQuery)},{}],6:[function(t,n,e){n.exports=function(t,n,e){return Math.min(Math.max(t,n),e)}},{}],7:[function(t,n,e){!function(e,r){var i=t("underscore"),o=function(){var t=e(document),n="scroll.stockists",r=!1;this.$el=e("#stockists"),this.$header=e("header"),this.$nav=this.$header.find("nav"),this.onScroll=function(){if(!r){var n=t.scrollTop(),e=this.$el.offset().top,i=this.$header.outerHeight(),o=e-n-i;return 0>o?this.$nav.addClass("inverted"):this.$nav.removeClass("inverted"),this}},this.attachScrollHandler=function(){return t.on(n,this.onScroll.bind(this)),this},this.removeScrollHandler=function(){return t.off(n),this},this.pause=function(){return r=!0,this},this.unpause=function(){return r=!1,this.onScroll(),this};var o=function(){this.attachScrollHandler()};return this.init=i.once(o),this};n.exports=new o}(jQuery)},{underscore:3}],8:[function(t,n,e){!function(e,r){var i=t("underscore"),o=t("request-frame"),u=o("request"),a=(o("cancel"),t("./math/clamp")),s=function(){var t=this,n=e(window),r=e(document),o=e(".strain"),s="scroll.sticky.desktop",c=!1;this.setElementTransform=function(t,n){var e=n.find(".strain-image"),r=n.find(".section-strain-info");u(function(){e.css({"-webkit-transform":"scale("+t+")","-ms-transform":"scale("+t+")","-o-transform":"scale("+t+")",transform:"scale("+t+")"}),r.css({"-webkit-transform":"scale("+t+")","-ms-transform":"scale("+t+")","-o-transform":"scale("+t+")",transform:"scale("+t+")"})})},this.setElementOpacity=function(t,n,e){u(function(){n.css("opacity",t),e&&e.css("opacity",1-t)})},this.getSectionScrollProgress=function(t){var n=t.parent(".sticky-wrapper"),e=n.offset().top,i=n.height(),o=r.scrollTop(),u=e+i-o,s=1-u/i;return a(s,0,1)},this.getScaleAmount=function(t){return+(1-Math.pow(t,4)).toFixed(2)},this.getFadeAmount=function(t){return+(1-Math.pow(t,2.2)).toFixed(2)},this.getNextSectionShadow=function(t){var n,e=o.index(t);return o.eq(e+1).length&&(n=o.eq(e+1).find(".strain-desktop-shadow")),n},this.onStrainScroll=function(t){if(!c){var n=this.getSectionScrollProgress(t),e=this.getFadeAmount(n),r=this.getScaleAmount(n),i=this.getNextSectionShadow(t);this.setElementOpacity(e,t,i),this.setElementTransform(r,t)}},this.pause=function(){return c=!0,this},this.unpause=function(){return c=!1,this},this.onResize=function(){o.each(function(n,r){var i=e(r);i.sticky("update"),t.onStrainScroll(i)})},this.initStrainSection=function(n){var e=o.index(n),i=s+"."+e;n.css("z-index",e+10),n.on("sticky-start",function(){r.on(i,t.onStrainScroll.bind(t,n,e))}).on("sticky-end",function(){r.off(i)}).sticky(),this.onStrainScroll(n)};var l=function(){o.each(function(t,n){this.initStrainSection(e(n))}.bind(this)),n.on("resize",i.debounce(t.onResize.bind(t),100))};this.init=i.once(l)};n.exports=new s}(jQuery)},{"./math/clamp":6,"request-frame":1,underscore:3}],9:[function(t,n,e){!function(e,r){var i=t("underscore"),o=t("request-frame"),u=o("request"),a=(o("cancel"),t("./math/clamp")),s=function(){var t=this,n=e(document),r=e(".strain-mobile-infos"),o=e(".strain-mobile-info"),s=e(".strain-mobile-image-list"),c=e(".strain-mobile-infos-shadow"),l="scroll.sticky.mobile",f=!1,h={slidesToShow:1,swipeToSlide:!0,mobileFirst:!0,arrows:!1,centerMode:!0,centerPadding:"80px"};this.setBgColor=function(){var t=s.slick("getSlick"),n=t.$slides.eq(t.getCurrent()).data("color");r.css("background-color",n)},this.setElementsTransform=function(t){var n=s.find("img");u(function(){n.css({"-webkit-transform":"scale("+t+")","-ms-transform":"scale("+t+")","-o-transform":"scale("+t+")",transform:"scale("+t+")"})})},this.setElementsOpacity=function(t){u(function(){s.css("opacity",t),c.css("opacity",1-t)})},this.getScrollProgress=function(){var t=s.height(),e=n.scrollTop(),i=r.offset().top-e;return progress=1-i/t,progress=a(progress,0,1),progress},this.getScaleAmount=function(t){return 1-Math.pow(t,3)},this.getFadeAmount=function(t){return 1-Math.pow(t,3)},this.onScroll=function(){if(!f){var t=this.getScrollProgress(),n=this.getFadeAmount(t),e=this.getScaleAmount(t);return this.setElementsOpacity(n),this.setElementsTransform(e),this}},this.attachScrollHandler=function(){return n.on(l,this.onScroll.bind(this)),this},this.removeScrollHandler=function(){return n.off(l),this},this.onStickyStart=function(){this.attachScrollHandler()},this.onStickyEnd=function(){this.removeScrollHandler()},this.pause=function(){return f=!0,this},this.unpause=function(){return f=!1,this};var p=function(){return s.on("init",function(n,e){console.log("init mobile strain slider"),setTimeout(t.setBgColor,200)}),s.slick(h).on("afterChange",function(n,e,r){o.removeClass("current"),o.eq(r).addClass("current"),t.setBgColor()}).on("sticky-start",this.onStickyStart.bind(this)).on("sticky-end",this.onStickyEnd.bind(this)).sticky(),this};return this.init=i.once(p),this};n.exports=new s}(jQuery)},{"./math/clamp":6,"request-frame":1,underscore:3}],10:[function(t,n,e){!function(t){function n(t){return this.each(function(){var t=new SvOverlay(this);t.show()})}var e="overlay",r="."+e,i={HIDE:"hide"+r,HIDDEN:"hidden"+r,SHOW:"show"+r,SHOWN:"shown"+r,FOCUSIN:"focusin"+r,CLICK_DISMISS:"click.dismiss"+r,KEYDOWN_DISMISS:"keydown.dismiss"+r};SvOverlay=function(n,e){this.options=e,this.$body=t(document.body),this.$element=t(n),this.isShown=!1},SvOverlay.prototype.show=function(){var n=function(){this.$element.trigger("focus").trigger(i.SHOWN)}.bind(this),e=t.Event(i.SHOW,{overlay:this,target:self.$element});return this.$element.trigger(e),this.isShown?void 0:(this.isShown=!0,this.escape(),this.$element.on(i.CLICK_DISMISS,".overlay-close",t.proxy(this.hide,this)),this.enforceFocus(),this.$element.fadeTo(500,1,"swing",n),this.$body.addClass("overlay-open"),this.$element.show(),this)},SvOverlay.prototype.hide=function(n){var e=function(){this.$element.hide().trigger(i.HIDDEN)}.bind(this);return n&&n.preventDefault(),n=t.Event(i.HIDE),this.$element.trigger(n),this.isShown?(this.isShown=!1,this.$body.removeClass("overlay-open"),this.escape(),t(document).off("focusin.overlay"),
this.$element.off(i.CLICK_DISMISS),this.$element.fadeTo(500,0,"swing",e),this):void 0},SvOverlay.prototype.enforceFocus=function(){t(document).off(i.FOCUSIN).on(i.FOCUSIN,t.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},SvOverlay.prototype.escape=function(){this.isShown?this.$element.on(i.KEYDOWN_DISMISS,t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off(i.KEYDOWN_DISMISS)},SvOverlay.prototype.hasOverflow=function(){return this.$element.find(".overlay-content").height()>=window.innerHeight},t.fn.svOverlay=n,t.fn.svOverlay.Constructor=SvOverlay,t(document).on("click","[data-overlay]",function(e){var r=t(this),i=r.attr("href"),o=t(r.attr("data-overlay")||i&&i.replace(/.*(?=#[^\s]+$)/,""));r.is("a")&&e.preventDefault(),n.call(o,this)})}(jQuery)},{}]},{},[4]);
//# sourceMappingURL=app.js.map
