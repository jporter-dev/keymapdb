
const header=document.getElementById("header");let lastPos=document.documentElement.scrollTop;window.addEventListener("scroll",()=>{const t=document.documentElement.scrollTop;t>lastPos?t>header.offsetHeight&&(header.classList.add("-translate-y-full"),header.classList.remove("header-shadow")):(header.classList.remove("-translate-y-full"),header.classList.add("header-shadow")),lastPos=t},!1);const menu=document.getElementById("menu"),searchBox=document.getElementById("search"),menuToggle=document.getElementById("menu-toggle");function isKeymapConforming(t,e){for(const[r,n]of t)if(r.endsWith("Count")){let t,i;[t,i]=n.split("-").map(Number),void 0!==i||isNaN(t)||(i=t);const o=Number(e[r]);if(!(t<=o&&o<=i))return!1}else if(e[r]instanceof Array){if(!n.split(",").some(t=>new Set(e[r]).has(t)))return!1}else if(e[r]!==n&&e[r]!==("true"===n))return console.log("Returning false because "+e[r]+" != "+n),!1;return!0}async function getFilteredKeymaps(){const t=await fetch("/keymapdb/index.json").then(t=>t.json()),e=new URLSearchParams(location.search);return t.filter(t=>isKeymapConforming(e,t))}menuToggle.addEventListener("click",()=>{menu.classList.toggle("hidden"),searchBox.classList.toggle("hidden")},!1);const pageRegExp=new RegExp("/keymapdb/page/[0-9]+");("/keymapdb/"===location.pathname||pageRegExp.test(location.pathname))&&(async()=>{let t=await getFilteredKeymaps();console.log("filtered keymaps ↓"),console.log(t);const e=document.getElementById("post-grid");e.innerHTML="";for(const r of t){Boolean(r.isSplit);e.innerHTML+=`\n        <div class="w-full ${t.length>=3?"sm:w-1/2 md:w-1/3":""} self-stretch p-2 mb-2" style="height:fit-content;">\n            <div class="rounded shadow-md h-full">\n                <a href="${r.url}">\n                    <img class="w-full m-0 rounded-t lazy"  src="${r.keymap_image}" width="960" height="500" alt="${r.keymap_author}'s keymap for the ${r.keyboard}">\n                </a>\n                <div class="px-6 py-5">\n                    <div class="font-semibold text-lg mb-2">\n                        <a class="text-gray-900 hover:text-gray-700" href="${r.url}">${r.title}</a>\n                    </div>\n                    <p class="text-gray-700 mb-1">${r.stagger} stagger, ${r.keyCount} keys, ${r.isSplit?"split":"non-split"}</p>\n                    <p class="text-gray-800">\n                        ${null===r.summary?"":r.summary}\n                    </p>\n                </div>\n            </div>\n        </div>\n        `}})(),function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).noUiSlider={})}(this,(function(t){"use strict";var e,r;function n(t){return"object"==typeof t&&"function"==typeof t.to}function i(t){t.parentElement.removeChild(t)}function o(t){return null!=t}function s(t){t.preventDefault()}function a(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function l(t,e,r){r>0&&(d(t,e),setTimeout((function(){f(t,e)}),r))}function u(t){return Math.max(Math.min(t,100),0)}function c(t){return Array.isArray(t)?t:[t]}function p(t){var e=(t=String(t)).split(".");return e.length>1?e[1].length:0}function d(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function f(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function h(t){var e=void 0!==window.pageXOffset,r="CSS1Compat"===(t.compatMode||"");return{x:e?window.pageXOffset:r?t.documentElement.scrollLeft:t.body.scrollLeft,y:e?window.pageYOffset:r?t.documentElement.scrollTop:t.body.scrollTop}}function m(t,e){return 100/(e-t)}function g(t,e,r){return 100*e/(t[r+1]-t[r])}function v(t,e){for(var r=1;t>=e[r];)r+=1;return r}function y(t,e,r){if(r>=t.slice(-1)[0])return 100;var n=v(r,t),i=t[n-1],o=t[n],s=e[n-1],a=e[n];return s+function(t,e){return g(t,t[0]<0?e+Math.abs(t[0]):e-t[0],0)}([i,o],r)/m(s,a)}function b(t,e,r,n){if(100===n)return n;var i=v(n,t),o=t[i-1],s=t[i];return r?n-o>(s-o)/2?s:o:e[i-1]?t[i-1]+function(t,e){return Math.round(t/e)*e}(n-t[i-1],e[i-1]):n}t.PipsMode=void 0,(e=t.PipsMode||(t.PipsMode={})).Range="range",e.Steps="steps",e.Positions="positions",e.Count="count",e.Values="values",t.PipsType=void 0,(r=t.PipsType||(t.PipsType={}))[r.None=-1]="None",r[r.NoValue=0]="NoValue",r[r.LargeValue=1]="LargeValue",r[r.SmallValue=2]="SmallValue";var S=function(){function t(t,e,r){var n;this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.snap=e;var i=[];for(Object.keys(t).forEach((function(e){i.push([c(t[e]),e])})),i.sort((function(t,e){return t[0][0]-e[0][0]})),n=0;n<i.length;n++)this.handleEntryPoint(i[n][1],i[n][0]);for(this.xNumSteps=this.xSteps.slice(0),n=0;n<this.xNumSteps.length;n++)this.handleStepPoint(n,this.xNumSteps[n])}return t.prototype.getDistance=function(t){for(var e=[],r=0;r<this.xNumSteps.length-1;r++)e[r]=g(this.xVal,t,r);return e},t.prototype.getAbsoluteDistance=function(t,e,r){var n,i=0;if(t<this.xPct[this.xPct.length-1])for(;t>this.xPct[i+1];)i++;else t===this.xPct[this.xPct.length-1]&&(i=this.xPct.length-2);r||t!==this.xPct[i+1]||i++,null===e&&(e=[]);var o=1,s=e[i],a=0,l=0,u=0,c=0;for(n=r?(t-this.xPct[i])/(this.xPct[i+1]-this.xPct[i]):(this.xPct[i+1]-t)/(this.xPct[i+1]-this.xPct[i]);s>0;)a=this.xPct[i+1+c]-this.xPct[i+c],e[i+c]*o+100-100*n>100?(l=a*n,o=(s-100*n)/e[i+c],n=1):(l=e[i+c]*a/100*o,o=0),r?(u-=l,this.xPct.length+c>=1&&c--):(u+=l,this.xPct.length-c>=1&&c++),s=e[i+c]*o;return t+u},t.prototype.toStepping=function(t){return t=y(this.xVal,this.xPct,t)},t.prototype.fromStepping=function(t){return function(t,e,r){if(r>=100)return t.slice(-1)[0];var n=v(r,e),i=t[n-1],o=t[n],s=e[n-1];return function(t,e){return e*(t[1]-t[0])/100+t[0]}([i,o],(r-s)*m(s,e[n]))}(this.xVal,this.xPct,t)},t.prototype.getStep=function(t){return t=b(this.xPct,this.xSteps,this.snap,t)},t.prototype.getDefaultStep=function(t,e,r){var n=v(t,this.xPct);return(100===t||e&&t===this.xPct[n-1])&&(n=Math.max(n-1,1)),(this.xVal[n]-this.xVal[n-1])/r},t.prototype.getNearbySteps=function(t){var e=v(t,this.xPct);return{stepBefore:{startValue:this.xVal[e-2],step:this.xNumSteps[e-2],highestStep:this.xHighestCompleteStep[e-2]},thisStep:{startValue:this.xVal[e-1],step:this.xNumSteps[e-1],highestStep:this.xHighestCompleteStep[e-1]},stepAfter:{startValue:this.xVal[e],step:this.xNumSteps[e],highestStep:this.xHighestCompleteStep[e]}}},t.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(p);return Math.max.apply(null,t)},t.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},t.prototype.convert=function(t){return this.getStep(this.toStepping(t))},t.prototype.handleEntryPoint=function(t,e){var r;if(!a(r="min"===t?0:"max"===t?100:parseFloat(t))||!a(e[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(r),this.xVal.push(e[0]);var n=Number(e[1]);r?this.xSteps.push(!isNaN(n)&&n):isNaN(n)||(this.xSteps[0]=n),this.xHighestCompleteStep.push(0)},t.prototype.handleStepPoint=function(t,e){if(e)if(this.xVal[t]!==this.xVal[t+1]){this.xSteps[t]=g([this.xVal[t],this.xVal[t+1]],e,0)/m(this.xPct[t],this.xPct[t+1]);var r=(this.xVal[t+1]-this.xVal[t])/this.xNumSteps[t],n=Math.ceil(Number(r.toFixed(3))-1),i=this.xVal[t]+this.xNumSteps[t]*n;this.xHighestCompleteStep[t]=i}else this.xSteps[t]=this.xHighestCompleteStep[t]=this.xVal[t]},t}(),x={to:function(t){return void 0===t?"":t.toFixed(2)},from:Number},w={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},E=".__tooltips",P=".__aria";function C(t,e){if(!a(e))throw new Error("noUiSlider: 'step' is not numeric.");t.singleStep=e}function N(t,e){if(!a(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");t.keyboardPageMultiplier=e}function k(t,e){if(!a(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");t.keyboardMultiplier=e}function V(t,e){if(!a(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");t.keyboardDefaultStep=e}function A(t,e){if("object"!=typeof e||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(void 0===e.min||void 0===e.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");t.spectrum=new S(e,t.snap||!1,t.singleStep)}function U(t,e){if(e=c(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");t.handles=e.length,t.start=e}function M(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'snap' option must be a boolean.");t.snap=e}function L(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'animate' option must be a boolean.");t.animate=e}function T(t,e){if("number"!=typeof e)throw new Error("noUiSlider: 'animationDuration' option must be a number.");t.animationDuration=e}function D(t,e){var r,n=[!1];if("lower"===e?e=[!0,!1]:"upper"===e&&(e=[!1,!0]),!0===e||!1===e){for(r=1;r<t.handles;r++)n.push(e);n.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");n=e}t.connect=n}function O(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function j(t,e){if(!a(e))throw new Error("noUiSlider: 'margin' option must be numeric.");0!==e&&(t.margin=t.spectrum.getDistance(e))}function H(t,e){if(!a(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(e),!t.limit||t.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function z(t,e){var r;if(!a(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&2!==e.length&&!a(e[0])&&!a(e[1]))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==e){for(Array.isArray(e)||(e=[e,e]),t.padding=[t.spectrum.getDistance(e[0]),t.spectrum.getDistance(e[1])],r=0;r<t.spectrum.xNumSteps.length-1;r++)if(t.padding[0][r]<0||t.padding[1][r]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var n=e[0]+e[1],i=t.spectrum.xVal[0];if(n/(t.spectrum.xVal[t.spectrum.xVal.length-1]-i)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function R(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function F(t,e){if("string"!=typeof e)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var r=e.indexOf("tap")>=0,n=e.indexOf("drag")>=0,i=e.indexOf("fixed")>=0,o=e.indexOf("snap")>=0,s=e.indexOf("hover")>=0,a=e.indexOf("unconstrained")>=0,l=e.indexOf("drag-all")>=0;if(i){if(2!==t.handles)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");j(t,t.start[1]-t.start[0])}if(a&&(t.margin||t.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:r||o,drag:n,dragAll:l,fixed:i,snap:o,hover:s,unconstrained:a}}function B(t,e){if(!1!==e)if(!0===e||n(e)){t.tooltips=[];for(var r=0;r<t.handles;r++)t.tooltips.push(e)}else{if((e=c(e)).length!==t.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach((function(t){if("boolean"!=typeof t&&!n(t))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")})),t.tooltips=e}}function _(t,e){if(e.length!==t.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");t.handleAttributes=e}function $(t,e){if(!n(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");t.ariaFormat=e}function I(t,e){if(!function(t){return n(t)&&"function"==typeof t.from}(e))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");t.format=e}function X(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");t.keyboardSupport=e}function q(t,e){t.documentElement=e}function Y(t,e){if("string"!=typeof e&&!1!==e)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function K(t,e){if("object"!=typeof e)throw new Error("noUiSlider: 'cssClasses' must be an object.");"string"==typeof t.cssPrefix?(t.cssClasses={},Object.keys(e).forEach((function(r){t.cssClasses[r]=t.cssPrefix+e[r]}))):t.cssClasses=e}function W(t){var e={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:x,format:x},r={step:{r:!1,t:C},keyboardPageMultiplier:{r:!1,t:N},keyboardMultiplier:{r:!1,t:k},keyboardDefaultStep:{r:!1,t:V},start:{r:!0,t:U},connect:{r:!0,t:D},direction:{r:!0,t:R},snap:{r:!1,t:M},animate:{r:!1,t:L},animationDuration:{r:!1,t:T},range:{r:!0,t:A},orientation:{r:!1,t:O},margin:{r:!1,t:j},limit:{r:!1,t:H},padding:{r:!1,t:z},behaviour:{r:!0,t:F},ariaFormat:{r:!1,t:$},format:{r:!1,t:I},tooltips:{r:!1,t:B},keyboardSupport:{r:!0,t:X},documentElement:{r:!1,t:q},cssPrefix:{r:!0,t:Y},cssClasses:{r:!0,t:K},handleAttributes:{r:!1,t:_}},n={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:w,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};t.format&&!t.ariaFormat&&(t.ariaFormat=t.format),Object.keys(r).forEach((function(i){if(o(t[i])||void 0!==n[i])r[i].t(e,o(t[i])?t[i]:n[i]);else if(r[i].r)throw new Error("noUiSlider: '"+i+"' is required.")})),e.pips=t.pips;var i=document.createElement("div"),s=void 0!==i.style.msTransform,a=void 0!==i.style.transform;e.transformRule=a?"transform":s?"msTransform":"webkitTransform";return e.style=[["left","top"],["right","bottom"]][e.dir][e.ort],e}function G(e,r,n){var a,p,m,g,v,y,b,S=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},x=window.CSS&&CSS.supports&&CSS.supports("touch-action","none")&&function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}(),w=e,C=r.spectrum,N=[],k=[],V=[],A=0,U={},M=e.ownerDocument,L=r.documentElement||M.documentElement,T=M.body,D="rtl"===M.dir||1===r.ort?0:100;function O(t,e){var r=M.createElement("div");return e&&d(r,e),t.appendChild(r),r}function j(t,e){var n=O(t,r.cssClasses.origin),i=O(n,r.cssClasses.handle);if(O(i,r.cssClasses.touchArea),i.setAttribute("data-handle",String(e)),r.keyboardSupport&&(i.setAttribute("tabindex","0"),i.addEventListener("keydown",(function(t){return function(t,e){if(R()||F(e))return!1;var n=["Left","Right"],i=["Down","Up"],o=["PageDown","PageUp"],s=["Home","End"];r.dir&&!r.ort?n.reverse():r.ort&&!r.dir&&(i.reverse(),o.reverse());var a,l=t.key.replace("Arrow",""),u=l===o[0],c=l===o[1],p=l===i[0]||l===n[0]||u,d=l===i[1]||l===n[1]||c,f=l===s[0],h=l===s[1];if(!(p||d||f||h))return!0;if(t.preventDefault(),d||p){var m=p?0:1,g=vt(e)[m];if(null===g)return!1;!1===g&&(g=C.getDefaultStep(k[e],p,r.keyboardDefaultStep)),g*=c||u?r.keyboardPageMultiplier:r.keyboardMultiplier,g=Math.max(g,1e-7),g*=p?-1:1,a=N[e]+g}else a=h?r.spectrum.xVal[r.spectrum.xVal.length-1]:r.spectrum.xVal[0];return dt(e,C.toStepping(a),!0,!0),st("slide",e),st("update",e),st("change",e),st("set",e),!1}(t,e)}))),void 0!==r.handleAttributes){var o=r.handleAttributes[e];Object.keys(o).forEach((function(t){i.setAttribute(t,o[t])}))}return i.setAttribute("role","slider"),i.setAttribute("aria-orientation",r.ort?"vertical":"horizontal"),0===e?d(i,r.cssClasses.handleLower):e===r.handles-1&&d(i,r.cssClasses.handleUpper),n}function H(t,e){return!!e&&O(t,r.cssClasses.connect)}function z(t,e){return!(!r.tooltips||!r.tooltips[e])&&O(t.firstChild,r.cssClasses.tooltip)}function R(){return w.hasAttribute("disabled")}function F(t){return p[t].hasAttribute("disabled")}function B(){v&&(ot("update"+E),v.forEach((function(t){t&&i(t)})),v=null)}function _(){B(),v=p.map(z),it("update"+E,(function(t,e,n){if(v&&r.tooltips&&!1!==v[e]){var i=t[e];!0!==r.tooltips[e]&&(i=r.tooltips[e].to(n[e])),v[e].innerHTML=i}}))}function $(t,e){return t.map((function(t){return C.fromStepping(e?C.getStep(t):t)}))}function I(e){var r,n=function(e){if(e.mode===t.PipsMode.Range||e.mode===t.PipsMode.Steps)return C.xVal;if(e.mode===t.PipsMode.Count){if(e.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var r=e.values-1,n=100/r,i=[];r--;)i[r]=r*n;return i.push(100),$(i,e.stepped)}return e.mode===t.PipsMode.Positions?$(e.values,e.stepped):e.mode===t.PipsMode.Values?e.stepped?e.values.map((function(t){return C.fromStepping(C.getStep(C.toStepping(t)))})):e.values:[]}(e),i={},o=C.xVal[0],s=C.xVal[C.xVal.length-1],a=!1,l=!1,u=0;return r=n.slice().sort((function(t,e){return t-e})),(n=r.filter((function(t){return!this[t]&&(this[t]=!0)}),{}))[0]!==o&&(n.unshift(o),a=!0),n[n.length-1]!==s&&(n.push(s),l=!0),n.forEach((function(r,o){var s,c,p,d,f,h,m,g,v,y,b=r,S=n[o+1],x=e.mode===t.PipsMode.Steps;for(x&&(s=C.xNumSteps[o]),s||(s=S-b),void 0===S&&(S=b),s=Math.max(s,1e-7),c=b;c<=S;c=Number((c+s).toFixed(7))){for(g=(f=(d=C.toStepping(c))-u)/(e.density||1),y=f/(v=Math.round(g)),p=1;p<=v;p+=1)i[(h=u+p*y).toFixed(5)]=[C.fromStepping(h),0];m=n.indexOf(c)>-1?t.PipsType.LargeValue:x?t.PipsType.SmallValue:t.PipsType.NoValue,!o&&a&&c!==S&&(m=0),c===S&&l||(i[d.toFixed(5)]=[c,m]),u=d}})),i}function X(e,n,i){var o,s,a=M.createElement("div"),l=((o={})[t.PipsType.None]="",o[t.PipsType.NoValue]=r.cssClasses.valueNormal,o[t.PipsType.LargeValue]=r.cssClasses.valueLarge,o[t.PipsType.SmallValue]=r.cssClasses.valueSub,o),u=((s={})[t.PipsType.None]="",s[t.PipsType.NoValue]=r.cssClasses.markerNormal,s[t.PipsType.LargeValue]=r.cssClasses.markerLarge,s[t.PipsType.SmallValue]=r.cssClasses.markerSub,s),c=[r.cssClasses.valueHorizontal,r.cssClasses.valueVertical],p=[r.cssClasses.markerHorizontal,r.cssClasses.markerVertical];function f(t,e){var n=e===r.cssClasses.value,i=n?l:u;return e+" "+(n?c:p)[r.ort]+" "+i[t]}return d(a,r.cssClasses.pips),d(a,0===r.ort?r.cssClasses.pipsHorizontal:r.cssClasses.pipsVertical),Object.keys(e).forEach((function(o){!function(e,o,s){if((s=n?n(o,s):s)!==t.PipsType.None){var l=O(a,!1);l.className=f(s,r.cssClasses.marker),l.style[r.style]=e+"%",s>t.PipsType.NoValue&&((l=O(a,!1)).className=f(s,r.cssClasses.value),l.setAttribute("data-value",String(o)),l.style[r.style]=e+"%",l.innerHTML=String(i.to(o)))}}(o,e[o][0],e[o][1])})),a}function q(){g&&(i(g),g=null)}function Y(t){q();var e=I(t),r=t.filter,n=t.format||{to:function(t){return String(Math.round(t))}};return g=w.appendChild(X(e,r,n))}function K(){var t=a.getBoundingClientRect(),e="offset"+["Width","Height"][r.ort];return 0===r.ort?t.width||a[e]:t.height||a[e]}function G(t,e,n,i){var o=function(o){var s,a,l=function(t,e,r){var n=0===t.type.indexOf("touch"),i=0===t.type.indexOf("mouse"),o=0===t.type.indexOf("pointer"),s=0,a=0;0===t.type.indexOf("MSPointer")&&(o=!0);if("mousedown"===t.type&&!t.buttons&&!t.touches)return!1;if(n){var l=function(e){var n=e.target;return n===r||r.contains(n)||t.composed&&t.composedPath().shift()===r};if("touchstart"===t.type){var u=Array.prototype.filter.call(t.touches,l);if(u.length>1)return!1;s=u[0].pageX,a=u[0].pageY}else{var c=Array.prototype.find.call(t.changedTouches,l);if(!c)return!1;s=c.pageX,a=c.pageY}}e=e||h(M),(i||o)&&(s=t.clientX+e.x,a=t.clientY+e.y);return t.pageOffset=e,t.points=[s,a],t.cursor=i||o,t}(o,i.pageOffset,i.target||e);return!!l&&(!(R()&&!i.doNotReject)&&(s=w,a=r.cssClasses.tap,!((s.classList?s.classList.contains(a):new RegExp("\\b"+a+"\\b").test(s.className))&&!i.doNotReject)&&(!(t===S.start&&void 0!==l.buttons&&l.buttons>1)&&((!i.hover||!l.buttons)&&(x||l.preventDefault(),l.calcPoint=l.points[r.ort],void n(l,i))))))},s=[];return t.split(" ").forEach((function(t){e.addEventListener(t,o,!!x&&{passive:!0}),s.push([t,o])})),s}function J(t){var e,n,i,o,s,l,c=100*(t-(e=a,n=r.ort,i=e.getBoundingClientRect(),o=e.ownerDocument,s=o.documentElement,l=h(o),/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(l.x=0),n?i.top+l.y-s.clientTop:i.left+l.x-s.clientLeft))/K();return c=u(c),r.dir?100-c:c}function Q(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&tt(t,e)}function Z(t,e){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==e.buttonsProperty)return tt(t,e);var n=(r.dir?-1:1)*(t.calcPoint-e.startCalcPoint);ut(n>0,100*n/e.baseSize,e.locations,e.handleNumbers,e.connect)}function tt(t,e){e.handle&&(f(e.handle,r.cssClasses.active),A-=1),e.listeners.forEach((function(t){L.removeEventListener(t[0],t[1])})),0===A&&(f(w,r.cssClasses.drag),pt(),t.cursor&&(T.style.cursor="",T.removeEventListener("selectstart",s))),e.handleNumbers.forEach((function(t){st("change",t),st("set",t),st("end",t)}))}function et(t,e){if(!e.handleNumbers.some(F)){var n;if(1===e.handleNumbers.length)n=p[e.handleNumbers[0]].children[0],A+=1,d(n,r.cssClasses.active);t.stopPropagation();var i=[],o=G(S.move,L,Z,{target:t.target,handle:n,connect:e.connect,listeners:i,startCalcPoint:t.calcPoint,baseSize:K(),pageOffset:t.pageOffset,handleNumbers:e.handleNumbers,buttonsProperty:t.buttons,locations:k.slice()}),a=G(S.end,L,tt,{target:t.target,handle:n,listeners:i,doNotReject:!0,handleNumbers:e.handleNumbers}),l=G("mouseout",L,Q,{target:t.target,handle:n,listeners:i,doNotReject:!0,handleNumbers:e.handleNumbers});i.push.apply(i,o.concat(a,l)),t.cursor&&(T.style.cursor=getComputedStyle(t.target).cursor,p.length>1&&d(w,r.cssClasses.drag),T.addEventListener("selectstart",s,!1)),e.handleNumbers.forEach((function(t){st("start",t)}))}}function rt(t){t.stopPropagation();var e=J(t.calcPoint),n=function(t){var e=100,r=!1;return p.forEach((function(n,i){if(!F(i)){var o=k[i],s=Math.abs(o-t);(s<e||s<=e&&t>o||100===s&&100===e)&&(r=i,e=s)}})),r}(e);!1!==n&&(r.events.snap||l(w,r.cssClasses.tap,r.animationDuration),dt(n,e,!0,!0),pt(),st("slide",n,!0),st("update",n,!0),r.events.snap?et(t,{handleNumbers:[n]}):(st("change",n,!0),st("set",n,!0)))}function nt(t){var e=J(t.calcPoint),r=C.getStep(e),n=C.fromStepping(r);Object.keys(U).forEach((function(t){"hover"===t.split(".")[0]&&U[t].forEach((function(t){t.call(yt,n)}))}))}function it(t,e){U[t]=U[t]||[],U[t].push(e),"update"===t.split(".")[0]&&p.forEach((function(t,e){st("update",e)}))}function ot(t){var e=t&&t.split(".")[0],r=e?t.substring(e.length):t;Object.keys(U).forEach((function(t){var n=t.split(".")[0],i=t.substring(n.length);e&&e!==n||r&&r!==i||function(t){return t===P||t===E}(i)&&r!==i||delete U[t]}))}function st(t,e,n){Object.keys(U).forEach((function(i){var o=i.split(".")[0];t===o&&U[i].forEach((function(t){t.call(yt,N.map(r.format.to),e,N.slice(),n||!1,k.slice(),yt)}))}))}function at(t,e,n,i,o,s){var a;return p.length>1&&!r.events.unconstrained&&(i&&e>0&&(a=C.getAbsoluteDistance(t[e-1],r.margin,!1),n=Math.max(n,a)),o&&e<p.length-1&&(a=C.getAbsoluteDistance(t[e+1],r.margin,!0),n=Math.min(n,a))),p.length>1&&r.limit&&(i&&e>0&&(a=C.getAbsoluteDistance(t[e-1],r.limit,!1),n=Math.min(n,a)),o&&e<p.length-1&&(a=C.getAbsoluteDistance(t[e+1],r.limit,!0),n=Math.max(n,a))),r.padding&&(0===e&&(a=C.getAbsoluteDistance(0,r.padding[0],!1),n=Math.max(n,a)),e===p.length-1&&(a=C.getAbsoluteDistance(100,r.padding[1],!0),n=Math.min(n,a))),!((n=u(n=C.getStep(n)))===t[e]&&!s)&&n}function lt(t,e){var n=r.ort;return(n?e:t)+", "+(n?t:e)}function ut(t,e,r,n,i){var o=r.slice(),s=n[0],a=[!t,t],l=[t,!t];n=n.slice(),t&&n.reverse(),n.length>1?n.forEach((function(t,r){var n=at(o,t,o[t]+e,a[r],l[r],!1);!1===n?e=0:(e=n-o[t],o[t]=n)})):a=l=[!0];var u=!1;n.forEach((function(t,n){u=dt(t,r[t]+e,a[n],l[n])||u})),u&&(n.forEach((function(t){st("update",t),st("slide",t)})),null!=i&&st("drag",s))}function ct(t,e){return r.dir?100-t-e:t}function pt(){V.forEach((function(t){var e=k[t]>50?-1:1,r=3+(p.length+e*t);p[t].style.zIndex=String(r)}))}function dt(t,e,n,i,o){return o||(e=at(k,t,e,n,i,!1)),!1!==e&&(function(t,e){k[t]=e,N[t]=C.fromStepping(e);var n="translate("+lt(ct(e,0)-D+"%","0")+")";p[t].style[r.transformRule]=n,ft(t),ft(t+1)}(t,e),!0)}function ft(t){if(m[t]){var e=0,n=100;0!==t&&(e=k[t-1]),t!==m.length-1&&(n=k[t]);var i=n-e,o="translate("+lt(ct(e,i)+"%","0")+")",s="scale("+lt(i/100,"1")+")";m[t].style[r.transformRule]=o+" "+s}}function ht(t,e){return null===t||!1===t||void 0===t?k[e]:("number"==typeof t&&(t=String(t)),!1!==(t=r.format.from(t))&&(t=C.toStepping(t)),!1===t||isNaN(t)?k[e]:t)}function mt(t,e,n){var i=c(t),o=void 0===k[0];e=void 0===e||e,r.animate&&!o&&l(w,r.cssClasses.tap,r.animationDuration),V.forEach((function(t){dt(t,ht(i[t],t),!0,!1,n)}));var s=1===V.length?0:1;if(o&&C.hasNoSize()&&(n=!0,k[0]=0,V.length>1)){var a=100/(V.length-1);V.forEach((function(t){k[t]=t*a}))}for(;s<V.length;++s)V.forEach((function(t){dt(t,k[t],!0,!0,n)}));pt(),V.forEach((function(t){st("update",t),null!==i[t]&&e&&st("set",t)}))}function gt(t){if(void 0===t&&(t=!1),t)return 1===N.length?N[0]:N.slice(0);var e=N.map(r.format.to);return 1===e.length?e[0]:e}function vt(t){var e=k[t],n=C.getNearbySteps(e),i=N[t],o=n.thisStep.step,s=null;if(r.snap)return[i-n.stepBefore.startValue||null,n.stepAfter.startValue-i||null];!1!==o&&i+o>n.stepAfter.startValue&&(o=n.stepAfter.startValue-i),s=i>n.thisStep.startValue?n.thisStep.step:!1!==n.stepBefore.step&&i-n.stepBefore.highestStep,100===e?o=null:0===e&&(s=null);var a=C.countStepDecimals();return null!==o&&!1!==o&&(o=Number(o.toFixed(a))),null!==s&&!1!==s&&(s=Number(s.toFixed(a))),[s,o]}d(y=w,r.cssClasses.target),0===r.dir?d(y,r.cssClasses.ltr):d(y,r.cssClasses.rtl),0===r.ort?d(y,r.cssClasses.horizontal):d(y,r.cssClasses.vertical),d(y,"rtl"===getComputedStyle(y).direction?r.cssClasses.textDirectionRtl:r.cssClasses.textDirectionLtr),a=O(y,r.cssClasses.base),function(t,e){var n=O(e,r.cssClasses.connects);p=[],(m=[]).push(H(n,t[0]));for(var i=0;i<r.handles;i++)p.push(j(e,i)),V[i]=i,m.push(H(n,t[i+1]))}(r.connect,a),(b=r.events).fixed||p.forEach((function(t,e){G(S.start,t.children[0],et,{handleNumbers:[e]})})),b.tap&&G(S.start,a,rt,{}),b.hover&&G(S.move,a,nt,{hover:!0}),b.drag&&m.forEach((function(t,e){if(!1!==t&&0!==e&&e!==m.length-1){var n=p[e-1],i=p[e],o=[t],s=[n,i],a=[e-1,e];d(t,r.cssClasses.draggable),b.fixed&&(o.push(n.children[0]),o.push(i.children[0])),b.dragAll&&(s=p,a=V),o.forEach((function(e){G(S.start,e,et,{handles:s,handleNumbers:a,connect:t})}))}})),mt(r.start),r.pips&&Y(r.pips),r.tooltips&&_(),ot("update"+P),it("update"+P,(function(t,e,n,i,o){V.forEach((function(t){var e=p[t],i=at(k,t,0,!0,!0,!0),s=at(k,t,100,!0,!0,!0),a=o[t],l=String(r.ariaFormat.to(n[t]));i=C.fromStepping(i).toFixed(1),s=C.fromStepping(s).toFixed(1),a=C.fromStepping(a).toFixed(1),e.children[0].setAttribute("aria-valuemin",i),e.children[0].setAttribute("aria-valuemax",s),e.children[0].setAttribute("aria-valuenow",a),e.children[0].setAttribute("aria-valuetext",l)}))}));var yt={destroy:function(){for(ot(P),ot(E),Object.keys(r.cssClasses).forEach((function(t){f(w,r.cssClasses[t])}));w.firstChild;)w.removeChild(w.firstChild);delete w.noUiSlider},steps:function(){return V.map(vt)},on:it,off:ot,get:gt,set:mt,setHandle:function(t,e,r,n){if(!((t=Number(t))>=0&&t<V.length))throw new Error("noUiSlider: invalid handle number, got: "+t);dt(t,ht(e,t),!0,!0,n),st("update",t),r&&st("set",t)},reset:function(t){mt(r.start,t)},__moveHandles:function(t,e,r){ut(t,e,k,r)},options:n,updateOptions:function(t,e){var i=gt(),s=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];s.forEach((function(e){void 0!==t[e]&&(n[e]=t[e])}));var a=W(n);s.forEach((function(e){void 0!==t[e]&&(r[e]=a[e])})),C=a.spectrum,r.margin=a.margin,r.limit=a.limit,r.padding=a.padding,r.pips?Y(r.pips):q(),r.tooltips?_():B(),k=[],mt(o(t.start)?t.start:i,e)},target:w,removePips:q,removeTooltips:B,getPositions:function(){return k.slice()},getTooltips:function(){return v},getOrigins:function(){return p},pips:Y};return yt}function J(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var r=G(t,W(e),e);return t.noUiSlider=r,r}var Q={__spectrum:S,cssClasses:w,create:J};t.create=J,t.cssClasses=w,t.default=Q,Object.defineProperty(t,"__esModule",{value:!0})}));let keyCountSlider=document.getElementById("keyCountSlider"),layerCountSlider=document.getElementById("layerCountSlider");const MAX_KEY_COUNT=120,keyCountPipsStep=20;let keyCountPips=[1];for(let t=20;t<=120;t+=20)keyCountPips.push(t);noUiSlider.create(keyCountSlider,{start:[1,120],connect:!0,step:1,tooltips:!0,format:{to:t=>Math.round(t),from:t=>Number(t.replace(",-",""))},pips:{mode:"values",values:keyCountPips,density:4},range:{min:1,max:120}});const MAX_LAYER_COUNT=16,layerCountPipsStep=4;let layerCountPips=[1];for(let t=4;t<=16;t+=4)layerCountPips.push(t);function mergeTooltips(t,e,r){var n="rtl"===getComputedStyle(t).direction,i="rtl"===t.noUiSlider.options.direction,o="vertical"===t.noUiSlider.options.orientation,s=t.noUiSlider.getTooltips(),a=t.noUiSlider.getOrigins();s.forEach((function(t,e){t&&a[e].appendChild(t)})),t.noUiSlider.on("update",(function(t,a,l,u,c){var p=[[]],d=[[]],f=[[]],h=0;s[0]&&(p[0][0]=0,d[0][0]=c[0],f[0][0]=t[0]);for(var m=1;m<c.length;m++)(!s[m]||c[m]-c[m-1]>e)&&(p[++h]=[],f[h]=[],d[h]=[]),s[m]&&(p[h].push(m),f[h].push(t[m]),d[h].push(c[m]));p.forEach((function(t,e){for(var a=t.length,l=0;l<a;l++){var u=t[l];if(l===a-1){var c=0;d[e].forEach((function(t){c+=1e3-t}));var p=o?"bottom":"right",h=i?0:a-1,m=1e3-d[e][h];c=(n&&!o?100:0)+c/a-m;var g=f[e].filter((t,e,r)=>r.indexOf(t)===e);s[u].innerHTML=g.join(r),s[u].style.display="block",s[u].style[p]=c+"%"}else s[u].style.display="none"}}))}))}function isIteratorEmpty(t){return t.next().done}function getElementValue(t){return t instanceof HTMLSelectElement?Array.from(t.options).filter(t=>t.selected).map(t=>t.value).toLocaleString():t instanceof HTMLInputElement&&t.hasAttribute("type")&&"checkbox"===t.type?Array.from(document.querySelectorAll(`input[name=${t.name}]:checked`)).map(t=>t.value).toLocaleString():t.hasAttribute("class")&&t.getAttribute("class").startsWith("slider-styled")?t.noUiSlider.get().join("-"):t.getAttribute("value")}function updateUrlSearchParams(t){console.log("updating...");const e=new URLSearchParams(location.search),r=getElementValue(t),n=t.getAttribute("name");""===r||"checked"in t&&e.get(n)===r?(t.checked=!1,e.delete(n)):e.set(n,r);const i=isIteratorEmpty(e.keys())?location.pathname:location.pathname+"?"+e;history.replaceState({},"",i)}noUiSlider.create(layerCountSlider,{start:[1,16],connect:!0,step:1,tooltips:!0,format:{to:t=>Math.round(t),from:t=>Number(t.replace(",-",""))},pips:{mode:"values",values:layerCountPips,density:7},range:{min:1,max:16}}),mergeTooltips(keyCountSlider,15,"–"),mergeTooltips(layerCountSlider,15,"–");
