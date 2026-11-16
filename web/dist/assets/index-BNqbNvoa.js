(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function Tm(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var ou={exports:{}},Ts={},lu={exports:{}},dt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hp;function k0(){if(hp)return dt;hp=1;var a=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,w={};function y(U,ie,Ne){this.props=U,this.context=ie,this.refs=w,this.updater=Ne||S}y.prototype.isReactComponent={},y.prototype.setState=function(U,ie){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ie,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function g(){}g.prototype=y.prototype;function D(U,ie,Ne){this.props=U,this.context=ie,this.refs=w,this.updater=Ne||S}var L=D.prototype=new g;L.constructor=D,T(L,y.prototype),L.isPureReactComponent=!0;var C=Array.isArray,Y=Object.prototype.hasOwnProperty,z={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function X(U,ie,Ne){var K,de={},Ee=null,xe=null;if(ie!=null)for(K in ie.ref!==void 0&&(xe=ie.ref),ie.key!==void 0&&(Ee=""+ie.key),ie)Y.call(ie,K)&&!k.hasOwnProperty(K)&&(de[K]=ie[K]);var we=arguments.length-2;if(we===1)de.children=Ne;else if(1<we){for(var De=Array(we),Ke=0;Ke<we;Ke++)De[Ke]=arguments[Ke+2];de.children=De}if(U&&U.defaultProps)for(K in we=U.defaultProps,we)de[K]===void 0&&(de[K]=we[K]);return{$$typeof:a,type:U,key:Ee,ref:xe,props:de,_owner:z.current}}function R(U,ie){return{$$typeof:a,type:U.type,key:ie,ref:U.ref,props:U.props,_owner:U._owner}}function A(U){return typeof U=="object"&&U!==null&&U.$$typeof===a}function F(U){var ie={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ne){return ie[Ne]})}var ae=/\/+/g;function J(U,ie){return typeof U=="object"&&U!==null&&U.key!=null?F(""+U.key):ie.toString(36)}function ue(U,ie,Ne,K,de){var Ee=typeof U;(Ee==="undefined"||Ee==="boolean")&&(U=null);var xe=!1;if(U===null)xe=!0;else switch(Ee){case"string":case"number":xe=!0;break;case"object":switch(U.$$typeof){case a:case e:xe=!0}}if(xe)return xe=U,de=de(xe),U=K===""?"."+J(xe,0):K,C(de)?(Ne="",U!=null&&(Ne=U.replace(ae,"$&/")+"/"),ue(de,ie,Ne,"",function(Ke){return Ke})):de!=null&&(A(de)&&(de=R(de,Ne+(!de.key||xe&&xe.key===de.key?"":(""+de.key).replace(ae,"$&/")+"/")+U)),ie.push(de)),1;if(xe=0,K=K===""?".":K+":",C(U))for(var we=0;we<U.length;we++){Ee=U[we];var De=K+J(Ee,we);xe+=ue(Ee,ie,Ne,De,de)}else if(De=x(U),typeof De=="function")for(U=De.call(U),we=0;!(Ee=U.next()).done;)Ee=Ee.value,De=K+J(Ee,we++),xe+=ue(Ee,ie,Ne,De,de);else if(Ee==="object")throw ie=String(U),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return xe}function pe(U,ie,Ne){if(U==null)return U;var K=[],de=0;return ue(U,K,"","",function(Ee){return ie.call(Ne,Ee,de++)}),K}function oe(U){if(U._status===-1){var ie=U._result;ie=ie(),ie.then(function(Ne){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ne)},function(Ne){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ne)}),U._status===-1&&(U._status=0,U._result=ie)}if(U._status===1)return U._result.default;throw U._result}var le={current:null},B={transition:null},ce={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:B,ReactCurrentOwner:z};function se(){throw Error("act(...) is not supported in production builds of React.")}return dt.Children={map:pe,forEach:function(U,ie,Ne){pe(U,function(){ie.apply(this,arguments)},Ne)},count:function(U){var ie=0;return pe(U,function(){ie++}),ie},toArray:function(U){return pe(U,function(ie){return ie})||[]},only:function(U){if(!A(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},dt.Component=y,dt.Fragment=n,dt.Profiler=o,dt.PureComponent=D,dt.StrictMode=r,dt.Suspense=p,dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,dt.act=se,dt.cloneElement=function(U,ie,Ne){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var K=T({},U.props),de=U.key,Ee=U.ref,xe=U._owner;if(ie!=null){if(ie.ref!==void 0&&(Ee=ie.ref,xe=z.current),ie.key!==void 0&&(de=""+ie.key),U.type&&U.type.defaultProps)var we=U.type.defaultProps;for(De in ie)Y.call(ie,De)&&!k.hasOwnProperty(De)&&(K[De]=ie[De]===void 0&&we!==void 0?we[De]:ie[De])}var De=arguments.length-2;if(De===1)K.children=Ne;else if(1<De){we=Array(De);for(var Ke=0;Ke<De;Ke++)we[Ke]=arguments[Ke+2];K.children=we}return{$$typeof:a,type:U.type,key:de,ref:Ee,props:K,_owner:xe}},dt.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:c,_context:U},U.Consumer=U},dt.createElement=X,dt.createFactory=function(U){var ie=X.bind(null,U);return ie.type=U,ie},dt.createRef=function(){return{current:null}},dt.forwardRef=function(U){return{$$typeof:d,render:U}},dt.isValidElement=A,dt.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:oe}},dt.memo=function(U,ie){return{$$typeof:m,type:U,compare:ie===void 0?null:ie}},dt.startTransition=function(U){var ie=B.transition;B.transition={};try{U()}finally{B.transition=ie}},dt.unstable_act=se,dt.useCallback=function(U,ie){return le.current.useCallback(U,ie)},dt.useContext=function(U){return le.current.useContext(U)},dt.useDebugValue=function(){},dt.useDeferredValue=function(U){return le.current.useDeferredValue(U)},dt.useEffect=function(U,ie){return le.current.useEffect(U,ie)},dt.useId=function(){return le.current.useId()},dt.useImperativeHandle=function(U,ie,Ne){return le.current.useImperativeHandle(U,ie,Ne)},dt.useInsertionEffect=function(U,ie){return le.current.useInsertionEffect(U,ie)},dt.useLayoutEffect=function(U,ie){return le.current.useLayoutEffect(U,ie)},dt.useMemo=function(U,ie){return le.current.useMemo(U,ie)},dt.useReducer=function(U,ie,Ne){return le.current.useReducer(U,ie,Ne)},dt.useRef=function(U){return le.current.useRef(U)},dt.useState=function(U){return le.current.useState(U)},dt.useSyncExternalStore=function(U,ie,Ne){return le.current.useSyncExternalStore(U,ie,Ne)},dt.useTransition=function(){return le.current.useTransition()},dt.version="18.3.1",dt}var pp;function Ld(){return pp||(pp=1,lu.exports=k0()),lu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp;function B0(){if(mp)return Ts;mp=1;var a=Ld(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function f(d,p,m){var _,v={},x=null,S=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(S=p.ref);for(_ in p)r.call(p,_)&&!c.hasOwnProperty(_)&&(v[_]=p[_]);if(d&&d.defaultProps)for(_ in p=d.defaultProps,p)v[_]===void 0&&(v[_]=p[_]);return{$$typeof:e,type:d,key:x,ref:S,props:v,_owner:o.current}}return Ts.Fragment=n,Ts.jsx=f,Ts.jsxs=f,Ts}var gp;function z0(){return gp||(gp=1,ou.exports=B0()),ou.exports}var N=z0(),qn=Ld();const H0=Tm(qn);var jo={},cu={exports:{}},bn={},uu={exports:{}},du={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p;function G0(){return _p||(_p=1,(function(a){function e(B,ce){var se=B.length;B.push(ce);e:for(;0<se;){var U=se-1>>>1,ie=B[U];if(0<o(ie,ce))B[U]=ce,B[se]=ie,se=U;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var ce=B[0],se=B.pop();if(se!==ce){B[0]=se;e:for(var U=0,ie=B.length,Ne=ie>>>1;U<Ne;){var K=2*(U+1)-1,de=B[K],Ee=K+1,xe=B[Ee];if(0>o(de,se))Ee<ie&&0>o(xe,de)?(B[U]=xe,B[Ee]=se,U=Ee):(B[U]=de,B[K]=se,U=K);else if(Ee<ie&&0>o(xe,se))B[U]=xe,B[Ee]=se,U=Ee;else break e}}return ce}function o(B,ce){var se=B.sortIndex-ce.sortIndex;return se!==0?se:B.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();a.unstable_now=function(){return f.now()-d}}var p=[],m=[],_=1,v=null,x=3,S=!1,T=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(B){for(var ce=n(m);ce!==null;){if(ce.callback===null)r(m);else if(ce.startTime<=B)r(m),ce.sortIndex=ce.expirationTime,e(p,ce);else break;ce=n(m)}}function C(B){if(w=!1,L(B),!T)if(n(p)!==null)T=!0,oe(Y);else{var ce=n(m);ce!==null&&le(C,ce.startTime-B)}}function Y(B,ce){T=!1,w&&(w=!1,g(X),X=-1),S=!0;var se=x;try{for(L(ce),v=n(p);v!==null&&(!(v.expirationTime>ce)||B&&!F());){var U=v.callback;if(typeof U=="function"){v.callback=null,x=v.priorityLevel;var ie=U(v.expirationTime<=ce);ce=a.unstable_now(),typeof ie=="function"?v.callback=ie:v===n(p)&&r(p),L(ce)}else r(p);v=n(p)}if(v!==null)var Ne=!0;else{var K=n(m);K!==null&&le(C,K.startTime-ce),Ne=!1}return Ne}finally{v=null,x=se,S=!1}}var z=!1,k=null,X=-1,R=5,A=-1;function F(){return!(a.unstable_now()-A<R)}function ae(){if(k!==null){var B=a.unstable_now();A=B;var ce=!0;try{ce=k(!0,B)}finally{ce?J():(z=!1,k=null)}}else z=!1}var J;if(typeof D=="function")J=function(){D(ae)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,pe=ue.port2;ue.port1.onmessage=ae,J=function(){pe.postMessage(null)}}else J=function(){y(ae,0)};function oe(B){k=B,z||(z=!0,J())}function le(B,ce){X=y(function(){B(a.unstable_now())},ce)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(B){B.callback=null},a.unstable_continueExecution=function(){T||S||(T=!0,oe(Y))},a.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<B?Math.floor(1e3/B):5},a.unstable_getCurrentPriorityLevel=function(){return x},a.unstable_getFirstCallbackNode=function(){return n(p)},a.unstable_next=function(B){switch(x){case 1:case 2:case 3:var ce=3;break;default:ce=x}var se=x;x=ce;try{return B()}finally{x=se}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(B,ce){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var se=x;x=B;try{return ce()}finally{x=se}},a.unstable_scheduleCallback=function(B,ce,se){var U=a.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?U+se:U):se=U,B){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=se+ie,B={id:_++,callback:ce,priorityLevel:B,startTime:se,expirationTime:ie,sortIndex:-1},se>U?(B.sortIndex=se,e(m,B),n(p)===null&&B===n(m)&&(w?(g(X),X=-1):w=!0,le(C,se-U))):(B.sortIndex=ie,e(p,B),T||S||(T=!0,oe(Y))),B},a.unstable_shouldYield=F,a.unstable_wrapCallback=function(B){var ce=x;return function(){var se=x;x=ce;try{return B.apply(this,arguments)}finally{x=se}}}})(du)),du}var vp;function V0(){return vp||(vp=1,uu.exports=G0()),uu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp;function W0(){if(xp)return bn;xp=1;var a=Ld(),e=V0();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function c(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},v={};function x(t){return p.call(v,t)?!0:p.call(_,t)?!1:m.test(t)?v[t]=!0:(_[t]=!0,!1)}function S(t,i,s,l){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,s,l){if(i===null||typeof i>"u"||S(t,i,s,l))return!0;if(l)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(t,i,s,l,u,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=s,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new w(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new w(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new w(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new w(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new w(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new w(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new w(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new w(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new w(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function D(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,D);y[i]=new w(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,D);y[i]=new w(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,D);y[i]=new w(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new w(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new w(t,1,!1,t.toLowerCase(),null,!0,!0)});function L(t,i,s,l){var u=y.hasOwnProperty(i)?y[i]:null;(u!==null?u.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,s,u,l)&&(s=null),l||u===null?x(i)&&(s===null?t.removeAttribute(i):t.setAttribute(i,""+s)):u.mustUseProperty?t[u.propertyName]=s===null?u.type===3?!1:"":s:(i=u.attributeName,l=u.attributeNamespace,s===null?t.removeAttribute(i):(u=u.type,s=u===3||u===4&&s===!0?"":""+s,l?t.setAttributeNS(l,i,s):t.setAttribute(i,s))))}var C=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Y=Symbol.for("react.element"),z=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),F=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),pe=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),B=Symbol.iterator;function ce(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,U;function ie(t){if(U===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+t}var Ne=!1;function K(t,i){if(!t||Ne)return"";Ne=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(Q){var l=Q}Reflect.construct(t,[],i)}else{try{i.call()}catch(Q){l=Q}t.call(i.prototype)}else{try{throw Error()}catch(Q){l=Q}t()}}catch(Q){if(Q&&l&&typeof Q.stack=="string"){for(var u=Q.stack.split(`
`),h=l.stack.split(`
`),M=u.length-1,I=h.length-1;1<=M&&0<=I&&u[M]!==h[I];)I--;for(;1<=M&&0<=I;M--,I--)if(u[M]!==h[I]){if(M!==1||I!==1)do if(M--,I--,0>I||u[M]!==h[I]){var O=`
`+u[M].replace(" at new "," at ");return t.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",t.displayName)),O}while(1<=M&&0<=I);break}}}finally{Ne=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?ie(t):""}function de(t){switch(t.tag){case 5:return ie(t.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return t=K(t.type,!1),t;case 11:return t=K(t.type.render,!1),t;case 1:return t=K(t.type,!0),t;default:return""}}function Ee(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case k:return"Fragment";case z:return"Portal";case R:return"Profiler";case X:return"StrictMode";case J:return"Suspense";case ue:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case F:return(t.displayName||"Context")+".Consumer";case A:return(t._context.displayName||"Context")+".Provider";case ae:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case pe:return i=t.displayName||null,i!==null?i:Ee(t.type)||"Memo";case oe:i=t._payload,t=t._init;try{return Ee(t(i))}catch{}}return null}function xe(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(i);case 8:return i===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function we(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function De(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ke(t){var i=De(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,h=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(M){l=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function wt(t){t._valueTracker||(t._valueTracker=Ke(t))}function ht(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=De(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function Pt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function j(t,i){var s=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function fn(t,i){var s=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;s=we(i.value!=null?i.value:s),t._wrapperState={initialChecked:l,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ft(t,i){i=i.checked,i!=null&&L(t,"checked",i,!1)}function ct(t,i){ft(t,i);var s=we(i.value),l=i.type;if(s!=null)l==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Tt(t,i.type,s):i.hasOwnProperty("defaultValue")&&Tt(t,i.type,we(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function qe(t,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,s||i===t.value||(t.value=i),t.defaultValue=i}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function Tt(t,i,s){(i!=="number"||Pt(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var Ze=Array.isArray;function P(t,i,s,l){if(t=t.options,i){i={};for(var u=0;u<s.length;u++)i["$"+s[u]]=!0;for(s=0;s<t.length;s++)u=i.hasOwnProperty("$"+t[s].value),t[s].selected!==u&&(t[s].selected=u),u&&l&&(t[s].defaultSelected=!0)}else{for(s=""+we(s),i=null,u=0;u<t.length;u++){if(t[u].value===s){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function E(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $(t,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(n(92));if(Ze(s)){if(1<s.length)throw Error(n(93));s=s[0]}i=s}i==null&&(i=""),s=i}t._wrapperState={initialValue:we(s)}}function me(t,i){var s=we(i.value),l=we(i.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),i.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),l!=null&&(t.defaultValue=""+l)}function _e(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function fe(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ge(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?fe(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ae,Ue=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,l,u){MSApp.execUnsafeLocalFunction(function(){return t(i,s,l,u)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ae.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function lt(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Se={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Se).forEach(function(t){Oe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Se[i]=Se[t]})});function Je(t,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||Se.hasOwnProperty(t)&&Se[t]?(""+i).trim():i+"px"}function Qe(t,i){t=t.style;for(var s in i)if(i.hasOwnProperty(s)){var l=s.indexOf("--")===0,u=Je(s,i[s],l);s==="float"&&(s="cssFloat"),l?t.setProperty(s,u):t[s]=u}}var ke=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ut(t,i){if(i){if(ke[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function it(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Et=null;function G(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ce=null,re=null,he=null;function Le(t){if(t=cs(t)){if(typeof Ce!="function")throw Error(n(280));var i=t.stateNode;i&&(i=ao(i),Ce(t.stateNode,t.type,i))}}function Pe(t){re?he?he.push(t):he=[t]:re=t}function rt(){if(re){var t=re,i=he;if(he=re=null,Le(t),i)for(t=0;t<i.length;t++)Le(i[t])}}function It(t,i){return t(i)}function Wt(){}var gt=!1;function vn(t,i,s){if(gt)return t(i,s);gt=!0;try{return It(t,i,s)}finally{gt=!1,(re!==null||he!==null)&&(Wt(),rt())}}function hn(t,i){var s=t.stateNode;if(s===null)return null;var l=ao(s);if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(n(231,i,typeof s));return s}var $r=!1;if(d)try{var Wi={};Object.defineProperty(Wi,"passive",{get:function(){$r=!0}}),window.addEventListener("test",Wi,Wi),window.removeEventListener("test",Wi,Wi)}catch{$r=!1}function Si(t,i,s,l,u,h,M,I,O){var Q=Array.prototype.slice.call(arguments,3);try{i.apply(s,Q)}catch(ve){this.onError(ve)}}var Mi=!1,Mr=null,Er=!1,ji=null,Bs={onError:function(t){Mi=!0,Mr=t}};function Kr(t,i,s,l,u,h,M,I,O){Mi=!1,Mr=null,Si.apply(Bs,arguments)}function zs(t,i,s,l,u,h,M,I,O){if(Kr.apply(this,arguments),Mi){if(Mi){var Q=Mr;Mi=!1,Mr=null}else throw Error(n(198));Er||(Er=!0,ji=Q)}}function ui(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function Hs(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Gs(t){if(ui(t)!==t)throw Error(n(188))}function Rl(t){var i=t.alternate;if(!i){if(i=ui(t),i===null)throw Error(n(188));return i!==t?null:t}for(var s=t,l=i;;){var u=s.return;if(u===null)break;var h=u.alternate;if(h===null){if(l=u.return,l!==null){s=l;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===s)return Gs(u),t;if(h===l)return Gs(u),i;h=h.sibling}throw Error(n(188))}if(s.return!==l.return)s=u,l=h;else{for(var M=!1,I=u.child;I;){if(I===s){M=!0,s=u,l=h;break}if(I===l){M=!0,l=u,s=h;break}I=I.sibling}if(!M){for(I=h.child;I;){if(I===s){M=!0,s=h,l=u;break}if(I===l){M=!0,l=h,s=u;break}I=I.sibling}if(!M)throw Error(n(189))}}if(s.alternate!==l)throw Error(n(190))}if(s.tag!==3)throw Error(n(188));return s.stateNode.current===s?t:i}function b(t){return t=Rl(t),t!==null?V(t):null}function V(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=V(t);if(i!==null)return i;t=t.sibling}return null}var ee=e.unstable_scheduleCallback,te=e.unstable_cancelCallback,W=e.unstable_shouldYield,be=e.unstable_requestPaint,Me=e.unstable_now,Ve=e.unstable_getCurrentPriorityLevel,ze=e.unstable_ImmediatePriority,et=e.unstable_UserBlockingPriority,nt=e.unstable_NormalPriority,We=e.unstable_LowPriority,mt=e.unstable_IdlePriority,Mt=null,pt=null;function rn(t){if(pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(Mt,t,void 0,(t.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:yt,Xe=Math.log,$n=Math.LN2;function yt(t){return t>>>=0,t===0?32:31-(Xe(t)/$n|0)|0}var an=64,Kn=4194304;function jt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function di(t,i){var s=t.pendingLanes;if(s===0)return 0;var l=0,u=t.suspendedLanes,h=t.pingedLanes,M=s&268435455;if(M!==0){var I=M&~u;I!==0?l=jt(I):(h&=M,h!==0&&(l=jt(h)))}else M=s&~u,M!==0?l=jt(M):h!==0&&(l=jt(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&u)===0&&(u=l&-l,h=i&-i,u>=h||u===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=s&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)s=31-at(i),u=1<<s,l|=t[s],i&=~u;return l}function Ct(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function On(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-at(h),I=1<<M,O=u[M];O===-1?((I&s)===0||(I&l)!==0)&&(u[M]=Ct(I,i)):O<=i&&(t.expiredLanes|=I),h&=~I}}function Ei(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function pn(){var t=an;return an<<=1,(an&4194240)===0&&(an=64),t}function kn(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function xn(t,i,s){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-at(i),t[i]=s}function Vs(t,i){var s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<s;){var u=31-at(s),h=1<<u;i[u]=0,l[u]=-1,t[u]=-1,s&=~h}}function Pl(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-at(s),u=1<<l;u&i|t[l]&i&&(t[l]|=i),s&=~u}}var bt=0;function Wd(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var jd,Ll,Xd,Zd,qd,Il=!1,Ws=[],Xi=null,Zi=null,qi=null,Za=new Map,qa=new Map,Yi=[],sg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yd(t,i){switch(t){case"focusin":case"focusout":Xi=null;break;case"dragenter":case"dragleave":Zi=null;break;case"mouseover":case"mouseout":qi=null;break;case"pointerover":case"pointerout":Za.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":qa.delete(i.pointerId)}}function Ya(t,i,s,l,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[u]},i!==null&&(i=cs(i),i!==null&&Ll(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function og(t,i,s,l,u){switch(i){case"focusin":return Xi=Ya(Xi,t,i,s,l,u),!0;case"dragenter":return Zi=Ya(Zi,t,i,s,l,u),!0;case"mouseover":return qi=Ya(qi,t,i,s,l,u),!0;case"pointerover":var h=u.pointerId;return Za.set(h,Ya(Za.get(h)||null,t,i,s,l,u)),!0;case"gotpointercapture":return h=u.pointerId,qa.set(h,Ya(qa.get(h)||null,t,i,s,l,u)),!0}return!1}function $d(t){var i=Tr(t.target);if(i!==null){var s=ui(i);if(s!==null){if(i=s.tag,i===13){if(i=Hs(s),i!==null){t.blockedOn=i,qd(t.priority,function(){Xd(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function js(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Dl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Et=l,s.target.dispatchEvent(l),Et=null}else return i=cs(s),i!==null&&Ll(i),t.blockedOn=s,!1;i.shift()}return!0}function Kd(t,i,s){js(t)&&s.delete(i)}function lg(){Il=!1,Xi!==null&&js(Xi)&&(Xi=null),Zi!==null&&js(Zi)&&(Zi=null),qi!==null&&js(qi)&&(qi=null),Za.forEach(Kd),qa.forEach(Kd)}function $a(t,i){t.blockedOn===i&&(t.blockedOn=null,Il||(Il=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,lg)))}function Ka(t){function i(u){return $a(u,t)}if(0<Ws.length){$a(Ws[0],t);for(var s=1;s<Ws.length;s++){var l=Ws[s];l.blockedOn===t&&(l.blockedOn=null)}}for(Xi!==null&&$a(Xi,t),Zi!==null&&$a(Zi,t),qi!==null&&$a(qi,t),Za.forEach(i),qa.forEach(i),s=0;s<Yi.length;s++)l=Yi[s],l.blockedOn===t&&(l.blockedOn=null);for(;0<Yi.length&&(s=Yi[0],s.blockedOn===null);)$d(s),s.blockedOn===null&&Yi.shift()}var Jr=C.ReactCurrentBatchConfig,Xs=!0;function cg(t,i,s,l){var u=bt,h=Jr.transition;Jr.transition=null;try{bt=1,Nl(t,i,s,l)}finally{bt=u,Jr.transition=h}}function ug(t,i,s,l){var u=bt,h=Jr.transition;Jr.transition=null;try{bt=4,Nl(t,i,s,l)}finally{bt=u,Jr.transition=h}}function Nl(t,i,s,l){if(Xs){var u=Dl(t,i,s,l);if(u===null)Kl(t,i,l,Zs,s),Yd(t,l);else if(og(u,t,i,s,l))l.stopPropagation();else if(Yd(t,l),i&4&&-1<sg.indexOf(t)){for(;u!==null;){var h=cs(u);if(h!==null&&jd(h),h=Dl(t,i,s,l),h===null&&Kl(t,i,l,Zs,s),h===u)break;u=h}u!==null&&l.stopPropagation()}else Kl(t,i,l,null,s)}}var Zs=null;function Dl(t,i,s,l){if(Zs=null,t=G(l),t=Tr(t),t!==null)if(i=ui(t),i===null)t=null;else if(s=i.tag,s===13){if(t=Hs(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Zs=t,null}function Jd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ve()){case ze:return 1;case et:return 4;case nt:case We:return 16;case mt:return 536870912;default:return 16}default:return 16}}var $i=null,Ul=null,qs=null;function Qd(){if(qs)return qs;var t,i=Ul,s=i.length,l,u="value"in $i?$i.value:$i.textContent,h=u.length;for(t=0;t<s&&i[t]===u[t];t++);var M=s-t;for(l=1;l<=M&&i[s-l]===u[h-l];l++);return qs=u.slice(t,1<l?1-l:void 0)}function Ys(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function $s(){return!0}function ef(){return!1}function Ln(t){function i(s,l,u,h,M){this._reactName=s,this._targetInst=u,this.type=l,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var I in t)t.hasOwnProperty(I)&&(s=t[I],this[I]=s?s(h):h[I]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?$s:ef,this.isPropagationStopped=ef,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=$s)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=$s)},persist:function(){},isPersistent:$s}),i}var Qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fl=Ln(Qr),Ja=se({},Qr,{view:0,detail:0}),dg=Ln(Ja),Ol,kl,Qa,Ks=se({},Ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qa&&(Qa&&t.type==="mousemove"?(Ol=t.screenX-Qa.screenX,kl=t.screenY-Qa.screenY):kl=Ol=0,Qa=t),Ol)},movementY:function(t){return"movementY"in t?t.movementY:kl}}),tf=Ln(Ks),fg=se({},Ks,{dataTransfer:0}),hg=Ln(fg),pg=se({},Ja,{relatedTarget:0}),Bl=Ln(pg),mg=se({},Qr,{animationName:0,elapsedTime:0,pseudoElement:0}),gg=Ln(mg),_g=se({},Qr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),vg=Ln(_g),xg=se({},Qr,{data:0}),nf=Ln(xg),yg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Eg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Mg[t])?!!i[t]:!1}function zl(){return Eg}var Tg=se({},Ja,{key:function(t){if(t.key){var i=yg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Ys(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Sg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zl,charCode:function(t){return t.type==="keypress"?Ys(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ys(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bg=Ln(Tg),wg=se({},Ks,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rf=Ln(wg),Ag=se({},Ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zl}),Cg=Ln(Ag),Rg=se({},Qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pg=Ln(Rg),Lg=se({},Ks,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ig=Ln(Lg),Ng=[9,13,27,32],Hl=d&&"CompositionEvent"in window,es=null;d&&"documentMode"in document&&(es=document.documentMode);var Dg=d&&"TextEvent"in window&&!es,af=d&&(!Hl||es&&8<es&&11>=es),sf=" ",of=!1;function lf(t,i){switch(t){case"keyup":return Ng.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ea=!1;function Ug(t,i){switch(t){case"compositionend":return cf(i);case"keypress":return i.which!==32?null:(of=!0,sf);case"textInput":return t=i.data,t===sf&&of?null:t;default:return null}}function Fg(t,i){if(ea)return t==="compositionend"||!Hl&&lf(t,i)?(t=Qd(),qs=Ul=$i=null,ea=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return af&&i.locale!=="ko"?null:i.data;default:return null}}var Og={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Og[t.type]:i==="textarea"}function df(t,i,s,l){Pe(l),i=no(i,"onChange"),0<i.length&&(s=new Fl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var ts=null,ns=null;function kg(t){Rf(t,0)}function Js(t){var i=aa(t);if(ht(i))return t}function Bg(t,i){if(t==="change")return i}var ff=!1;if(d){var Gl;if(d){var Vl="oninput"in document;if(!Vl){var hf=document.createElement("div");hf.setAttribute("oninput","return;"),Vl=typeof hf.oninput=="function"}Gl=Vl}else Gl=!1;ff=Gl&&(!document.documentMode||9<document.documentMode)}function pf(){ts&&(ts.detachEvent("onpropertychange",mf),ns=ts=null)}function mf(t){if(t.propertyName==="value"&&Js(ns)){var i=[];df(i,ns,t,G(t)),vn(kg,i)}}function zg(t,i,s){t==="focusin"?(pf(),ts=i,ns=s,ts.attachEvent("onpropertychange",mf)):t==="focusout"&&pf()}function Hg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Js(ns)}function Gg(t,i){if(t==="click")return Js(i)}function Vg(t,i){if(t==="input"||t==="change")return Js(i)}function Wg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Jn=typeof Object.is=="function"?Object.is:Wg;function is(t,i){if(Jn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var u=s[l];if(!p.call(i,u)||!Jn(t[u],i[u]))return!1}return!0}function gf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _f(t,i){var s=gf(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=gf(s)}}function vf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?vf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function xf(){for(var t=window,i=Pt();i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Pt(t.document)}return i}function Wl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function jg(t){var i=xf(),s=t.focusedElem,l=t.selectionRange;if(i!==s&&s&&s.ownerDocument&&vf(s.ownerDocument.documentElement,s)){if(l!==null&&Wl(s)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(t,s.value.length);else if(t=(i=s.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var u=s.textContent.length,h=Math.min(l.start,u);l=l.end===void 0?h:Math.min(l.end,u),!t.extend&&h>l&&(u=l,l=h,h=u),u=_f(s,h);var M=_f(s,l);u&&M&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(u.node,u.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=s;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)t=i[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Xg=d&&"documentMode"in document&&11>=document.documentMode,ta=null,jl=null,rs=null,Xl=!1;function yf(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Xl||ta==null||ta!==Pt(l)||(l=ta,"selectionStart"in l&&Wl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),rs&&is(rs,l)||(rs=l,l=no(jl,"onSelect"),0<l.length&&(i=new Fl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=ta)))}function Qs(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var na={animationend:Qs("Animation","AnimationEnd"),animationiteration:Qs("Animation","AnimationIteration"),animationstart:Qs("Animation","AnimationStart"),transitionend:Qs("Transition","TransitionEnd")},Zl={},Sf={};d&&(Sf=document.createElement("div").style,"AnimationEvent"in window||(delete na.animationend.animation,delete na.animationiteration.animation,delete na.animationstart.animation),"TransitionEvent"in window||delete na.transitionend.transition);function eo(t){if(Zl[t])return Zl[t];if(!na[t])return t;var i=na[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Sf)return Zl[t]=i[s];return t}var Mf=eo("animationend"),Ef=eo("animationiteration"),Tf=eo("animationstart"),bf=eo("transitionend"),wf=new Map,Af="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(t,i){wf.set(t,i),c(i,[t])}for(var ql=0;ql<Af.length;ql++){var Yl=Af[ql],Zg=Yl.toLowerCase(),qg=Yl[0].toUpperCase()+Yl.slice(1);Ki(Zg,"on"+qg)}Ki(Mf,"onAnimationEnd"),Ki(Ef,"onAnimationIteration"),Ki(Tf,"onAnimationStart"),Ki("dblclick","onDoubleClick"),Ki("focusin","onFocus"),Ki("focusout","onBlur"),Ki(bf,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var as="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yg=new Set("cancel close invalid load scroll toggle".split(" ").concat(as));function Cf(t,i,s){var l=t.type||"unknown-event";t.currentTarget=s,zs(l,i,void 0,t),t.currentTarget=null}function Rf(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],u=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var M=l.length-1;0<=M;M--){var I=l[M],O=I.instance,Q=I.currentTarget;if(I=I.listener,O!==h&&u.isPropagationStopped())break e;Cf(u,I,Q),h=O}else for(M=0;M<l.length;M++){if(I=l[M],O=I.instance,Q=I.currentTarget,I=I.listener,O!==h&&u.isPropagationStopped())break e;Cf(u,I,Q),h=O}}}if(Er)throw t=ji,Er=!1,ji=null,t}function Nt(t,i){var s=i[ic];s===void 0&&(s=i[ic]=new Set);var l=t+"__bubble";s.has(l)||(Pf(i,t,2,!1),s.add(l))}function $l(t,i,s){var l=0;i&&(l|=4),Pf(s,t,l,i)}var to="_reactListening"+Math.random().toString(36).slice(2);function ss(t){if(!t[to]){t[to]=!0,r.forEach(function(s){s!=="selectionchange"&&(Yg.has(s)||$l(s,!1,t),$l(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[to]||(i[to]=!0,$l("selectionchange",!1,i))}}function Pf(t,i,s,l){switch(Jd(i)){case 1:var u=cg;break;case 4:u=ug;break;default:u=Nl}s=u.bind(null,i,s,t),u=void 0,!$r||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(i,s,{capture:!0,passive:u}):t.addEventListener(i,s,!0):u!==void 0?t.addEventListener(i,s,{passive:u}):t.addEventListener(i,s,!1)}function Kl(t,i,s,l,u){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var I=l.stateNode.containerInfo;if(I===u||I.nodeType===8&&I.parentNode===u)break;if(M===4)for(M=l.return;M!==null;){var O=M.tag;if((O===3||O===4)&&(O=M.stateNode.containerInfo,O===u||O.nodeType===8&&O.parentNode===u))return;M=M.return}for(;I!==null;){if(M=Tr(I),M===null)return;if(O=M.tag,O===5||O===6){l=h=M;continue e}I=I.parentNode}}l=l.return}vn(function(){var Q=h,ve=G(s),ye=[];e:{var ge=wf.get(t);if(ge!==void 0){var Ie=Fl,Be=t;switch(t){case"keypress":if(Ys(s)===0)break e;case"keydown":case"keyup":Ie=bg;break;case"focusin":Be="focus",Ie=Bl;break;case"focusout":Be="blur",Ie=Bl;break;case"beforeblur":case"afterblur":Ie=Bl;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=tf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=hg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=Cg;break;case Mf:case Ef:case Tf:Ie=gg;break;case bf:Ie=Pg;break;case"scroll":Ie=dg;break;case"wheel":Ie=Ig;break;case"copy":case"cut":case"paste":Ie=vg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=rf}var He=(i&4)!==0,Bt=!He&&t==="scroll",Z=He?ge!==null?ge+"Capture":null:ge;He=[];for(var H=Q,q;H!==null;){q=H;var Te=q.stateNode;if(q.tag===5&&Te!==null&&(q=Te,Z!==null&&(Te=hn(H,Z),Te!=null&&He.push(os(H,Te,q)))),Bt)break;H=H.return}0<He.length&&(ge=new Ie(ge,Be,null,s,ve),ye.push({event:ge,listeners:He}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",Ie=t==="mouseout"||t==="pointerout",ge&&s!==Et&&(Be=s.relatedTarget||s.fromElement)&&(Tr(Be)||Be[Ti]))break e;if((Ie||ge)&&(ge=ve.window===ve?ve:(ge=ve.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ie?(Be=s.relatedTarget||s.toElement,Ie=Q,Be=Be?Tr(Be):null,Be!==null&&(Bt=ui(Be),Be!==Bt||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(Ie=null,Be=Q),Ie!==Be)){if(He=tf,Te="onMouseLeave",Z="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(He=rf,Te="onPointerLeave",Z="onPointerEnter",H="pointer"),Bt=Ie==null?ge:aa(Ie),q=Be==null?ge:aa(Be),ge=new He(Te,H+"leave",Ie,s,ve),ge.target=Bt,ge.relatedTarget=q,Te=null,Tr(ve)===Q&&(He=new He(Z,H+"enter",Be,s,ve),He.target=q,He.relatedTarget=Bt,Te=He),Bt=Te,Ie&&Be)t:{for(He=Ie,Z=Be,H=0,q=He;q;q=ia(q))H++;for(q=0,Te=Z;Te;Te=ia(Te))q++;for(;0<H-q;)He=ia(He),H--;for(;0<q-H;)Z=ia(Z),q--;for(;H--;){if(He===Z||Z!==null&&He===Z.alternate)break t;He=ia(He),Z=ia(Z)}He=null}else He=null;Ie!==null&&Lf(ye,ge,Ie,He,!1),Be!==null&&Bt!==null&&Lf(ye,Bt,Be,He,!0)}}e:{if(ge=Q?aa(Q):window,Ie=ge.nodeName&&ge.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&ge.type==="file")var je=Bg;else if(uf(ge))if(ff)je=Vg;else{je=Hg;var Ye=zg}else(Ie=ge.nodeName)&&Ie.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(je=Gg);if(je&&(je=je(t,Q))){df(ye,je,s,ve);break e}Ye&&Ye(t,ge,Q),t==="focusout"&&(Ye=ge._wrapperState)&&Ye.controlled&&ge.type==="number"&&Tt(ge,"number",ge.value)}switch(Ye=Q?aa(Q):window,t){case"focusin":(uf(Ye)||Ye.contentEditable==="true")&&(ta=Ye,jl=Q,rs=null);break;case"focusout":rs=jl=ta=null;break;case"mousedown":Xl=!0;break;case"contextmenu":case"mouseup":case"dragend":Xl=!1,yf(ye,s,ve);break;case"selectionchange":if(Xg)break;case"keydown":case"keyup":yf(ye,s,ve)}var $e;if(Hl)e:{switch(t){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else ea?lf(t,s)&&(tt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(tt="onCompositionStart");tt&&(af&&s.locale!=="ko"&&(ea||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&ea&&($e=Qd()):($i=ve,Ul="value"in $i?$i.value:$i.textContent,ea=!0)),Ye=no(Q,tt),0<Ye.length&&(tt=new nf(tt,t,null,s,ve),ye.push({event:tt,listeners:Ye}),$e?tt.data=$e:($e=cf(s),$e!==null&&(tt.data=$e)))),($e=Dg?Ug(t,s):Fg(t,s))&&(Q=no(Q,"onBeforeInput"),0<Q.length&&(ve=new nf("onBeforeInput","beforeinput",null,s,ve),ye.push({event:ve,listeners:Q}),ve.data=$e))}Rf(ye,i)})}function os(t,i,s){return{instance:t,listener:i,currentTarget:s}}function no(t,i){for(var s=i+"Capture",l=[];t!==null;){var u=t,h=u.stateNode;u.tag===5&&h!==null&&(u=h,h=hn(t,s),h!=null&&l.unshift(os(t,h,u)),h=hn(t,i),h!=null&&l.push(os(t,h,u))),t=t.return}return l}function ia(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Lf(t,i,s,l,u){for(var h=i._reactName,M=[];s!==null&&s!==l;){var I=s,O=I.alternate,Q=I.stateNode;if(O!==null&&O===l)break;I.tag===5&&Q!==null&&(I=Q,u?(O=hn(s,h),O!=null&&M.unshift(os(s,O,I))):u||(O=hn(s,h),O!=null&&M.push(os(s,O,I)))),s=s.return}M.length!==0&&t.push({event:i,listeners:M})}var $g=/\r\n?/g,Kg=/\u0000|\uFFFD/g;function If(t){return(typeof t=="string"?t:""+t).replace($g,`
`).replace(Kg,"")}function io(t,i,s){if(i=If(i),If(t)!==i&&s)throw Error(n(425))}function ro(){}var Jl=null,Ql=null;function ec(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var tc=typeof setTimeout=="function"?setTimeout:void 0,Jg=typeof clearTimeout=="function"?clearTimeout:void 0,Nf=typeof Promise=="function"?Promise:void 0,Qg=typeof queueMicrotask=="function"?queueMicrotask:typeof Nf<"u"?function(t){return Nf.resolve(null).then(t).catch(e0)}:tc;function e0(t){setTimeout(function(){throw t})}function nc(t,i){var s=i,l=0;do{var u=s.nextSibling;if(t.removeChild(s),u&&u.nodeType===8)if(s=u.data,s==="/$"){if(l===0){t.removeChild(u),Ka(i);return}l--}else s!=="$"&&s!=="$?"&&s!=="$!"||l++;s=u}while(s);Ka(i)}function Ji(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Df(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}var ra=Math.random().toString(36).slice(2),fi="__reactFiber$"+ra,ls="__reactProps$"+ra,Ti="__reactContainer$"+ra,ic="__reactEvents$"+ra,t0="__reactListeners$"+ra,n0="__reactHandles$"+ra;function Tr(t){var i=t[fi];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Ti]||s[fi]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=Df(t);t!==null;){if(s=t[fi])return s;t=Df(t)}return i}t=s,s=t.parentNode}return null}function cs(t){return t=t[fi]||t[Ti],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function aa(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ao(t){return t[ls]||null}var rc=[],sa=-1;function Qi(t){return{current:t}}function Dt(t){0>sa||(t.current=rc[sa],rc[sa]=null,sa--)}function Lt(t,i){sa++,rc[sa]=t.current,t.current=i}var er={},sn=Qi(er),yn=Qi(!1),br=er;function oa(t,i){var s=t.type.contextTypes;if(!s)return er;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var u={},h;for(h in s)u[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=u),u}function Sn(t){return t=t.childContextTypes,t!=null}function so(){Dt(yn),Dt(sn)}function Uf(t,i,s){if(sn.current!==er)throw Error(n(168));Lt(sn,i),Lt(yn,s)}function Ff(t,i,s){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return s;l=l.getChildContext();for(var u in l)if(!(u in i))throw Error(n(108,xe(t)||"Unknown",u));return se({},s,l)}function oo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||er,br=sn.current,Lt(sn,t),Lt(yn,yn.current),!0}function Of(t,i,s){var l=t.stateNode;if(!l)throw Error(n(169));s?(t=Ff(t,i,br),l.__reactInternalMemoizedMergedChildContext=t,Dt(yn),Dt(sn),Lt(sn,t)):Dt(yn),Lt(yn,s)}var bi=null,lo=!1,ac=!1;function kf(t){bi===null?bi=[t]:bi.push(t)}function i0(t){lo=!0,kf(t)}function tr(){if(!ac&&bi!==null){ac=!0;var t=0,i=bt;try{var s=bi;for(bt=1;t<s.length;t++){var l=s[t];do l=l(!0);while(l!==null)}bi=null,lo=!1}catch(u){throw bi!==null&&(bi=bi.slice(t+1)),ee(ze,tr),u}finally{bt=i,ac=!1}}return null}var la=[],ca=0,co=null,uo=0,Bn=[],zn=0,wr=null,wi=1,Ai="";function Ar(t,i){la[ca++]=uo,la[ca++]=co,co=t,uo=i}function Bf(t,i,s){Bn[zn++]=wi,Bn[zn++]=Ai,Bn[zn++]=wr,wr=t;var l=wi;t=Ai;var u=32-at(l)-1;l&=~(1<<u),s+=1;var h=32-at(i)+u;if(30<h){var M=u-u%5;h=(l&(1<<M)-1).toString(32),l>>=M,u-=M,wi=1<<32-at(i)+u|s<<u|l,Ai=h+t}else wi=1<<h|s<<u|l,Ai=t}function sc(t){t.return!==null&&(Ar(t,1),Bf(t,1,0))}function oc(t){for(;t===co;)co=la[--ca],la[ca]=null,uo=la[--ca],la[ca]=null;for(;t===wr;)wr=Bn[--zn],Bn[zn]=null,Ai=Bn[--zn],Bn[zn]=null,wi=Bn[--zn],Bn[zn]=null}var In=null,Nn=null,Ut=!1,Qn=null;function zf(t,i){var s=Wn(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=t,i=t.deletions,i===null?(t.deletions=[s],t.flags|=16):i.push(s)}function Hf(t,i){switch(t.tag){case 5:var s=t.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,In=t,Nn=Ji(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,In=t,Nn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=wr!==null?{id:wi,overflow:Ai}:null,t.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=Wn(18,null,null,0),s.stateNode=i,s.return=t,t.child=s,In=t,Nn=null,!0):!1;default:return!1}}function lc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function cc(t){if(Ut){var i=Nn;if(i){var s=i;if(!Hf(t,i)){if(lc(t))throw Error(n(418));i=Ji(s.nextSibling);var l=In;i&&Hf(t,i)?zf(l,s):(t.flags=t.flags&-4097|2,Ut=!1,In=t)}}else{if(lc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ut=!1,In=t}}}function Gf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;In=t}function fo(t){if(t!==In)return!1;if(!Ut)return Gf(t),Ut=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!ec(t.type,t.memoizedProps)),i&&(i=Nn)){if(lc(t))throw Vf(),Error(n(418));for(;i;)zf(t,i),i=Ji(i.nextSibling)}if(Gf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(i===0){Nn=Ji(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}t=t.nextSibling}Nn=null}}else Nn=In?Ji(t.stateNode.nextSibling):null;return!0}function Vf(){for(var t=Nn;t;)t=Ji(t.nextSibling)}function ua(){Nn=In=null,Ut=!1}function uc(t){Qn===null?Qn=[t]:Qn.push(t)}var r0=C.ReactCurrentBatchConfig;function us(t,i,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(n(309));var l=s.stateNode}if(!l)throw Error(n(147,t));var u=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var I=u.refs;M===null?delete I[h]:I[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!s._owner)throw Error(n(290,t))}return t}function ho(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Wf(t){var i=t._init;return i(t._payload)}function jf(t){function i(Z,H){if(t){var q=Z.deletions;q===null?(Z.deletions=[H],Z.flags|=16):q.push(H)}}function s(Z,H){if(!t)return null;for(;H!==null;)i(Z,H),H=H.sibling;return null}function l(Z,H){for(Z=new Map;H!==null;)H.key!==null?Z.set(H.key,H):Z.set(H.index,H),H=H.sibling;return Z}function u(Z,H){return Z=cr(Z,H),Z.index=0,Z.sibling=null,Z}function h(Z,H,q){return Z.index=q,t?(q=Z.alternate,q!==null?(q=q.index,q<H?(Z.flags|=2,H):q):(Z.flags|=2,H)):(Z.flags|=1048576,H)}function M(Z){return t&&Z.alternate===null&&(Z.flags|=2),Z}function I(Z,H,q,Te){return H===null||H.tag!==6?(H=tu(q,Z.mode,Te),H.return=Z,H):(H=u(H,q),H.return=Z,H)}function O(Z,H,q,Te){var je=q.type;return je===k?ve(Z,H,q.props.children,Te,q.key):H!==null&&(H.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===oe&&Wf(je)===H.type)?(Te=u(H,q.props),Te.ref=us(Z,H,q),Te.return=Z,Te):(Te=Oo(q.type,q.key,q.props,null,Z.mode,Te),Te.ref=us(Z,H,q),Te.return=Z,Te)}function Q(Z,H,q,Te){return H===null||H.tag!==4||H.stateNode.containerInfo!==q.containerInfo||H.stateNode.implementation!==q.implementation?(H=nu(q,Z.mode,Te),H.return=Z,H):(H=u(H,q.children||[]),H.return=Z,H)}function ve(Z,H,q,Te,je){return H===null||H.tag!==7?(H=Ur(q,Z.mode,Te,je),H.return=Z,H):(H=u(H,q),H.return=Z,H)}function ye(Z,H,q){if(typeof H=="string"&&H!==""||typeof H=="number")return H=tu(""+H,Z.mode,q),H.return=Z,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case Y:return q=Oo(H.type,H.key,H.props,null,Z.mode,q),q.ref=us(Z,null,H),q.return=Z,q;case z:return H=nu(H,Z.mode,q),H.return=Z,H;case oe:var Te=H._init;return ye(Z,Te(H._payload),q)}if(Ze(H)||ce(H))return H=Ur(H,Z.mode,q,null),H.return=Z,H;ho(Z,H)}return null}function ge(Z,H,q,Te){var je=H!==null?H.key:null;if(typeof q=="string"&&q!==""||typeof q=="number")return je!==null?null:I(Z,H,""+q,Te);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case Y:return q.key===je?O(Z,H,q,Te):null;case z:return q.key===je?Q(Z,H,q,Te):null;case oe:return je=q._init,ge(Z,H,je(q._payload),Te)}if(Ze(q)||ce(q))return je!==null?null:ve(Z,H,q,Te,null);ho(Z,q)}return null}function Ie(Z,H,q,Te,je){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return Z=Z.get(q)||null,I(H,Z,""+Te,je);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case Y:return Z=Z.get(Te.key===null?q:Te.key)||null,O(H,Z,Te,je);case z:return Z=Z.get(Te.key===null?q:Te.key)||null,Q(H,Z,Te,je);case oe:var Ye=Te._init;return Ie(Z,H,q,Ye(Te._payload),je)}if(Ze(Te)||ce(Te))return Z=Z.get(q)||null,ve(H,Z,Te,je,null);ho(H,Te)}return null}function Be(Z,H,q,Te){for(var je=null,Ye=null,$e=H,tt=H=0,Qt=null;$e!==null&&tt<q.length;tt++){$e.index>tt?(Qt=$e,$e=null):Qt=$e.sibling;var St=ge(Z,$e,q[tt],Te);if(St===null){$e===null&&($e=Qt);break}t&&$e&&St.alternate===null&&i(Z,$e),H=h(St,H,tt),Ye===null?je=St:Ye.sibling=St,Ye=St,$e=Qt}if(tt===q.length)return s(Z,$e),Ut&&Ar(Z,tt),je;if($e===null){for(;tt<q.length;tt++)$e=ye(Z,q[tt],Te),$e!==null&&(H=h($e,H,tt),Ye===null?je=$e:Ye.sibling=$e,Ye=$e);return Ut&&Ar(Z,tt),je}for($e=l(Z,$e);tt<q.length;tt++)Qt=Ie($e,Z,tt,q[tt],Te),Qt!==null&&(t&&Qt.alternate!==null&&$e.delete(Qt.key===null?tt:Qt.key),H=h(Qt,H,tt),Ye===null?je=Qt:Ye.sibling=Qt,Ye=Qt);return t&&$e.forEach(function(ur){return i(Z,ur)}),Ut&&Ar(Z,tt),je}function He(Z,H,q,Te){var je=ce(q);if(typeof je!="function")throw Error(n(150));if(q=je.call(q),q==null)throw Error(n(151));for(var Ye=je=null,$e=H,tt=H=0,Qt=null,St=q.next();$e!==null&&!St.done;tt++,St=q.next()){$e.index>tt?(Qt=$e,$e=null):Qt=$e.sibling;var ur=ge(Z,$e,St.value,Te);if(ur===null){$e===null&&($e=Qt);break}t&&$e&&ur.alternate===null&&i(Z,$e),H=h(ur,H,tt),Ye===null?je=ur:Ye.sibling=ur,Ye=ur,$e=Qt}if(St.done)return s(Z,$e),Ut&&Ar(Z,tt),je;if($e===null){for(;!St.done;tt++,St=q.next())St=ye(Z,St.value,Te),St!==null&&(H=h(St,H,tt),Ye===null?je=St:Ye.sibling=St,Ye=St);return Ut&&Ar(Z,tt),je}for($e=l(Z,$e);!St.done;tt++,St=q.next())St=Ie($e,Z,tt,St.value,Te),St!==null&&(t&&St.alternate!==null&&$e.delete(St.key===null?tt:St.key),H=h(St,H,tt),Ye===null?je=St:Ye.sibling=St,Ye=St);return t&&$e.forEach(function(O0){return i(Z,O0)}),Ut&&Ar(Z,tt),je}function Bt(Z,H,q,Te){if(typeof q=="object"&&q!==null&&q.type===k&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case Y:e:{for(var je=q.key,Ye=H;Ye!==null;){if(Ye.key===je){if(je=q.type,je===k){if(Ye.tag===7){s(Z,Ye.sibling),H=u(Ye,q.props.children),H.return=Z,Z=H;break e}}else if(Ye.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===oe&&Wf(je)===Ye.type){s(Z,Ye.sibling),H=u(Ye,q.props),H.ref=us(Z,Ye,q),H.return=Z,Z=H;break e}s(Z,Ye);break}else i(Z,Ye);Ye=Ye.sibling}q.type===k?(H=Ur(q.props.children,Z.mode,Te,q.key),H.return=Z,Z=H):(Te=Oo(q.type,q.key,q.props,null,Z.mode,Te),Te.ref=us(Z,H,q),Te.return=Z,Z=Te)}return M(Z);case z:e:{for(Ye=q.key;H!==null;){if(H.key===Ye)if(H.tag===4&&H.stateNode.containerInfo===q.containerInfo&&H.stateNode.implementation===q.implementation){s(Z,H.sibling),H=u(H,q.children||[]),H.return=Z,Z=H;break e}else{s(Z,H);break}else i(Z,H);H=H.sibling}H=nu(q,Z.mode,Te),H.return=Z,Z=H}return M(Z);case oe:return Ye=q._init,Bt(Z,H,Ye(q._payload),Te)}if(Ze(q))return Be(Z,H,q,Te);if(ce(q))return He(Z,H,q,Te);ho(Z,q)}return typeof q=="string"&&q!==""||typeof q=="number"?(q=""+q,H!==null&&H.tag===6?(s(Z,H.sibling),H=u(H,q),H.return=Z,Z=H):(s(Z,H),H=tu(q,Z.mode,Te),H.return=Z,Z=H),M(Z)):s(Z,H)}return Bt}var da=jf(!0),Xf=jf(!1),po=Qi(null),mo=null,fa=null,dc=null;function fc(){dc=fa=mo=null}function hc(t){var i=po.current;Dt(po),t._currentValue=i}function pc(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function ha(t,i){mo=t,dc=fa=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Mn=!0),t.firstContext=null)}function Hn(t){var i=t._currentValue;if(dc!==t)if(t={context:t,memoizedValue:i,next:null},fa===null){if(mo===null)throw Error(n(308));fa=t,mo.dependencies={lanes:0,firstContext:t}}else fa=fa.next=t;return i}var Cr=null;function mc(t){Cr===null?Cr=[t]:Cr.push(t)}function Zf(t,i,s,l){var u=i.interleaved;return u===null?(s.next=s,mc(i)):(s.next=u.next,u.next=s),i.interleaved=s,Ci(t,l)}function Ci(t,i){t.lanes|=i;var s=t.alternate;for(s!==null&&(s.lanes|=i),s=t,t=t.return;t!==null;)t.childLanes|=i,s=t.alternate,s!==null&&(s.childLanes|=i),s=t,t=t.return;return s.tag===3?s.stateNode:null}var nr=!1;function gc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ri(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function ir(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(_t&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,Ci(t,s)}return u=l.interleaved,u===null?(i.next=i,mc(l)):(i.next=u.next,u.next=i),l.interleaved=i,Ci(t,s)}function go(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Pl(t,s)}}function Yf(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var u=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var M={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};h===null?u=h=M:h=h.next=M,s=s.next}while(s!==null);h===null?u=h=i:h=h.next=i}else u=h=i;s={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}function _o(t,i,s,l){var u=t.updateQueue;nr=!1;var h=u.firstBaseUpdate,M=u.lastBaseUpdate,I=u.shared.pending;if(I!==null){u.shared.pending=null;var O=I,Q=O.next;O.next=null,M===null?h=Q:M.next=Q,M=O;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,I=ve.lastBaseUpdate,I!==M&&(I===null?ve.firstBaseUpdate=Q:I.next=Q,ve.lastBaseUpdate=O))}if(h!==null){var ye=u.baseState;M=0,ve=Q=O=null,I=h;do{var ge=I.lane,Ie=I.eventTime;if((l&ge)===ge){ve!==null&&(ve=ve.next={eventTime:Ie,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var Be=t,He=I;switch(ge=i,Ie=s,He.tag){case 1:if(Be=He.payload,typeof Be=="function"){ye=Be.call(Ie,ye,ge);break e}ye=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=He.payload,ge=typeof Be=="function"?Be.call(Ie,ye,ge):Be,ge==null)break e;ye=se({},ye,ge);break e;case 2:nr=!0}}I.callback!==null&&I.lane!==0&&(t.flags|=64,ge=u.effects,ge===null?u.effects=[I]:ge.push(I))}else Ie={eventTime:Ie,lane:ge,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ve===null?(Q=ve=Ie,O=ye):ve=ve.next=Ie,M|=ge;if(I=I.next,I===null){if(I=u.shared.pending,I===null)break;ge=I,I=ge.next,ge.next=null,u.lastBaseUpdate=ge,u.shared.pending=null}}while(!0);if(ve===null&&(O=ye),u.baseState=O,u.firstBaseUpdate=Q,u.lastBaseUpdate=ve,i=u.shared.interleaved,i!==null){u=i;do M|=u.lane,u=u.next;while(u!==i)}else h===null&&(u.shared.lanes=0);Lr|=M,t.lanes=M,t.memoizedState=ye}}function $f(t,i,s){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],u=l.callback;if(u!==null){if(l.callback=null,l=s,typeof u!="function")throw Error(n(191,u));u.call(l)}}}var ds={},hi=Qi(ds),fs=Qi(ds),hs=Qi(ds);function Rr(t){if(t===ds)throw Error(n(174));return t}function _c(t,i){switch(Lt(hs,i),Lt(fs,t),Lt(hi,ds),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ge(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ge(i,t)}Dt(hi),Lt(hi,i)}function pa(){Dt(hi),Dt(fs),Dt(hs)}function Kf(t){Rr(hs.current);var i=Rr(hi.current),s=Ge(i,t.type);i!==s&&(Lt(fs,t),Lt(hi,s))}function vc(t){fs.current===t&&(Dt(hi),Dt(fs))}var Ft=Qi(0);function vo(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var xc=[];function yc(){for(var t=0;t<xc.length;t++)xc[t]._workInProgressVersionPrimary=null;xc.length=0}var xo=C.ReactCurrentDispatcher,Sc=C.ReactCurrentBatchConfig,Pr=0,Ot=null,Xt=null,Kt=null,yo=!1,ps=!1,ms=0,a0=0;function on(){throw Error(n(321))}function Mc(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!Jn(t[s],i[s]))return!1;return!0}function Ec(t,i,s,l,u,h){if(Pr=h,Ot=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,xo.current=t===null||t.memoizedState===null?c0:u0,t=s(l,u),ps){h=0;do{if(ps=!1,ms=0,25<=h)throw Error(n(301));h+=1,Kt=Xt=null,i.updateQueue=null,xo.current=d0,t=s(l,u)}while(ps)}if(xo.current=Eo,i=Xt!==null&&Xt.next!==null,Pr=0,Kt=Xt=Ot=null,yo=!1,i)throw Error(n(300));return t}function Tc(){var t=ms!==0;return ms=0,t}function pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Kt===null?Ot.memoizedState=Kt=t:Kt=Kt.next=t,Kt}function Gn(){if(Xt===null){var t=Ot.alternate;t=t!==null?t.memoizedState:null}else t=Xt.next;var i=Kt===null?Ot.memoizedState:Kt.next;if(i!==null)Kt=i,Xt=t;else{if(t===null)throw Error(n(310));Xt=t,t={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},Kt===null?Ot.memoizedState=Kt=t:Kt=Kt.next=t}return Kt}function gs(t,i){return typeof i=="function"?i(t):i}function bc(t){var i=Gn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=Xt,u=l.baseQueue,h=s.pending;if(h!==null){if(u!==null){var M=u.next;u.next=h.next,h.next=M}l.baseQueue=u=h,s.pending=null}if(u!==null){h=u.next,l=l.baseState;var I=M=null,O=null,Q=h;do{var ve=Q.lane;if((Pr&ve)===ve)O!==null&&(O=O.next={lane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),l=Q.hasEagerState?Q.eagerState:t(l,Q.action);else{var ye={lane:ve,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null};O===null?(I=O=ye,M=l):O=O.next=ye,Ot.lanes|=ve,Lr|=ve}Q=Q.next}while(Q!==null&&Q!==h);O===null?M=l:O.next=I,Jn(l,i.memoizedState)||(Mn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=O,s.lastRenderedState=l}if(t=s.interleaved,t!==null){u=t;do h=u.lane,Ot.lanes|=h,Lr|=h,u=u.next;while(u!==t)}else u===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function wc(t){var i=Gn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=s.dispatch,u=s.pending,h=i.memoizedState;if(u!==null){s.pending=null;var M=u=u.next;do h=t(h,M.action),M=M.next;while(M!==u);Jn(h,i.memoizedState)||(Mn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,l]}function Jf(){}function Qf(t,i){var s=Ot,l=Gn(),u=i(),h=!Jn(l.memoizedState,u);if(h&&(l.memoizedState=u,Mn=!0),l=l.queue,Ac(nh.bind(null,s,l,t),[t]),l.getSnapshot!==i||h||Kt!==null&&Kt.memoizedState.tag&1){if(s.flags|=2048,_s(9,th.bind(null,s,l,u,i),void 0,null),Jt===null)throw Error(n(349));(Pr&30)!==0||eh(s,i,u)}return u}function eh(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=Ot.updateQueue,i===null?(i={lastEffect:null,stores:null},Ot.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function th(t,i,s,l){i.value=s,i.getSnapshot=l,ih(i)&&rh(t)}function nh(t,i,s){return s(function(){ih(i)&&rh(t)})}function ih(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!Jn(t,s)}catch{return!0}}function rh(t){var i=Ci(t,1);i!==null&&ii(i,t,1,-1)}function ah(t){var i=pi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:gs,lastRenderedState:t},i.queue=t,t=t.dispatch=l0.bind(null,Ot,t),[i.memoizedState,t]}function _s(t,i,s,l){return t={tag:t,create:i,destroy:s,deps:l,next:null},i=Ot.updateQueue,i===null?(i={lastEffect:null,stores:null},Ot.updateQueue=i,i.lastEffect=t.next=t):(s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t)),t}function sh(){return Gn().memoizedState}function So(t,i,s,l){var u=pi();Ot.flags|=t,u.memoizedState=_s(1|i,s,void 0,l===void 0?null:l)}function Mo(t,i,s,l){var u=Gn();l=l===void 0?null:l;var h=void 0;if(Xt!==null){var M=Xt.memoizedState;if(h=M.destroy,l!==null&&Mc(l,M.deps)){u.memoizedState=_s(i,s,h,l);return}}Ot.flags|=t,u.memoizedState=_s(1|i,s,h,l)}function oh(t,i){return So(8390656,8,t,i)}function Ac(t,i){return Mo(2048,8,t,i)}function lh(t,i){return Mo(4,2,t,i)}function ch(t,i){return Mo(4,4,t,i)}function uh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function dh(t,i,s){return s=s!=null?s.concat([t]):null,Mo(4,4,uh.bind(null,i,t),s)}function Cc(){}function fh(t,i){var s=Gn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&Mc(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function hh(t,i){var s=Gn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&Mc(i,l[1])?l[0]:(t=t(),s.memoizedState=[t,i],t)}function ph(t,i,s){return(Pr&21)===0?(t.baseState&&(t.baseState=!1,Mn=!0),t.memoizedState=s):(Jn(s,i)||(s=pn(),Ot.lanes|=s,Lr|=s,t.baseState=!0),i)}function s0(t,i){var s=bt;bt=s!==0&&4>s?s:4,t(!0);var l=Sc.transition;Sc.transition={};try{t(!1),i()}finally{bt=s,Sc.transition=l}}function mh(){return Gn().memoizedState}function o0(t,i,s){var l=or(t);if(s={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null},gh(t))_h(i,s);else if(s=Zf(t,i,s,l),s!==null){var u=gn();ii(s,t,l,u),vh(s,i,l)}}function l0(t,i,s){var l=or(t),u={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null};if(gh(t))_h(i,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,I=h(M,s);if(u.hasEagerState=!0,u.eagerState=I,Jn(I,M)){var O=i.interleaved;O===null?(u.next=u,mc(i)):(u.next=O.next,O.next=u),i.interleaved=u;return}}catch{}finally{}s=Zf(t,i,u,l),s!==null&&(u=gn(),ii(s,t,l,u),vh(s,i,l))}}function gh(t){var i=t.alternate;return t===Ot||i!==null&&i===Ot}function _h(t,i){ps=yo=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function vh(t,i,s){if((s&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Pl(t,s)}}var Eo={readContext:Hn,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useInsertionEffect:on,useLayoutEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useMutableSource:on,useSyncExternalStore:on,useId:on,unstable_isNewReconciler:!1},c0={readContext:Hn,useCallback:function(t,i){return pi().memoizedState=[t,i===void 0?null:i],t},useContext:Hn,useEffect:oh,useImperativeHandle:function(t,i,s){return s=s!=null?s.concat([t]):null,So(4194308,4,uh.bind(null,i,t),s)},useLayoutEffect:function(t,i){return So(4194308,4,t,i)},useInsertionEffect:function(t,i){return So(4,2,t,i)},useMemo:function(t,i){var s=pi();return i=i===void 0?null:i,t=t(),s.memoizedState=[t,i],t},useReducer:function(t,i,s){var l=pi();return i=s!==void 0?s(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=o0.bind(null,Ot,t),[l.memoizedState,t]},useRef:function(t){var i=pi();return t={current:t},i.memoizedState=t},useState:ah,useDebugValue:Cc,useDeferredValue:function(t){return pi().memoizedState=t},useTransition:function(){var t=ah(!1),i=t[0];return t=s0.bind(null,t[1]),pi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,s){var l=Ot,u=pi();if(Ut){if(s===void 0)throw Error(n(407));s=s()}else{if(s=i(),Jt===null)throw Error(n(349));(Pr&30)!==0||eh(l,i,s)}u.memoizedState=s;var h={value:s,getSnapshot:i};return u.queue=h,oh(nh.bind(null,l,h,t),[t]),l.flags|=2048,_s(9,th.bind(null,l,h,s,i),void 0,null),s},useId:function(){var t=pi(),i=Jt.identifierPrefix;if(Ut){var s=Ai,l=wi;s=(l&~(1<<32-at(l)-1)).toString(32)+s,i=":"+i+"R"+s,s=ms++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=a0++,i=":"+i+"r"+s.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},u0={readContext:Hn,useCallback:fh,useContext:Hn,useEffect:Ac,useImperativeHandle:dh,useInsertionEffect:lh,useLayoutEffect:ch,useMemo:hh,useReducer:bc,useRef:sh,useState:function(){return bc(gs)},useDebugValue:Cc,useDeferredValue:function(t){var i=Gn();return ph(i,Xt.memoizedState,t)},useTransition:function(){var t=bc(gs)[0],i=Gn().memoizedState;return[t,i]},useMutableSource:Jf,useSyncExternalStore:Qf,useId:mh,unstable_isNewReconciler:!1},d0={readContext:Hn,useCallback:fh,useContext:Hn,useEffect:Ac,useImperativeHandle:dh,useInsertionEffect:lh,useLayoutEffect:ch,useMemo:hh,useReducer:wc,useRef:sh,useState:function(){return wc(gs)},useDebugValue:Cc,useDeferredValue:function(t){var i=Gn();return Xt===null?i.memoizedState=t:ph(i,Xt.memoizedState,t)},useTransition:function(){var t=wc(gs)[0],i=Gn().memoizedState;return[t,i]},useMutableSource:Jf,useSyncExternalStore:Qf,useId:mh,unstable_isNewReconciler:!1};function ei(t,i){if(t&&t.defaultProps){i=se({},i),t=t.defaultProps;for(var s in t)i[s]===void 0&&(i[s]=t[s]);return i}return i}function Rc(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:se({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var To={isMounted:function(t){return(t=t._reactInternals)?ui(t)===t:!1},enqueueSetState:function(t,i,s){t=t._reactInternals;var l=gn(),u=or(t),h=Ri(l,u);h.payload=i,s!=null&&(h.callback=s),i=ir(t,h,u),i!==null&&(ii(i,t,u,l),go(i,t,u))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=gn(),u=or(t),h=Ri(l,u);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=ir(t,h,u),i!==null&&(ii(i,t,u,l),go(i,t,u))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=gn(),l=or(t),u=Ri(s,l);u.tag=2,i!=null&&(u.callback=i),i=ir(t,u,l),i!==null&&(ii(i,t,l,s),go(i,t,l))}};function xh(t,i,s,l,u,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,M):i.prototype&&i.prototype.isPureReactComponent?!is(s,l)||!is(u,h):!0}function yh(t,i,s){var l=!1,u=er,h=i.contextType;return typeof h=="object"&&h!==null?h=Hn(h):(u=Sn(i)?br:sn.current,l=i.contextTypes,h=(l=l!=null)?oa(t,u):er),i=new i(s,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=To,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=h),i}function Sh(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&To.enqueueReplaceState(i,i.state,null)}function Pc(t,i,s,l){var u=t.stateNode;u.props=s,u.state=t.memoizedState,u.refs={},gc(t);var h=i.contextType;typeof h=="object"&&h!==null?u.context=Hn(h):(h=Sn(i)?br:sn.current,u.context=oa(t,h)),u.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Rc(t,i,h,s),u.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&To.enqueueReplaceState(u,u.state,null),_o(t,s,u,l),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function ma(t,i){try{var s="",l=i;do s+=de(l),l=l.return;while(l);var u=s}catch(h){u=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:u,digest:null}}function Lc(t,i,s){return{value:t,source:null,stack:s??null,digest:i??null}}function Ic(t,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var f0=typeof WeakMap=="function"?WeakMap:Map;function Mh(t,i,s){s=Ri(-1,s),s.tag=3,s.payload={element:null};var l=i.value;return s.callback=function(){Lo||(Lo=!0,Zc=l),Ic(t,i)},s}function Eh(t,i,s){s=Ri(-1,s),s.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var u=i.value;s.payload=function(){return l(u)},s.callback=function(){Ic(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(s.callback=function(){Ic(t,i),typeof l!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),s}function Th(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new f0;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(s)||(u.add(s),t=w0.bind(null,t,i,s),i.then(t,t))}function bh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function wh(t,i,s,l,u){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=Ri(-1,1),i.tag=2,ir(s,i,1))),s.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var h0=C.ReactCurrentOwner,Mn=!1;function mn(t,i,s,l){i.child=t===null?Xf(i,null,s,l):da(i,t.child,s,l)}function Ah(t,i,s,l,u){s=s.render;var h=i.ref;return ha(i,u),l=Ec(t,i,s,l,h,u),s=Tc(),t!==null&&!Mn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,Pi(t,i,u)):(Ut&&s&&sc(i),i.flags|=1,mn(t,i,l,u),i.child)}function Ch(t,i,s,l,u){if(t===null){var h=s.type;return typeof h=="function"&&!eu(h)&&h.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=h,Rh(t,i,h,l,u)):(t=Oo(s.type,null,l,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&u)===0){var M=h.memoizedProps;if(s=s.compare,s=s!==null?s:is,s(M,l)&&t.ref===i.ref)return Pi(t,i,u)}return i.flags|=1,t=cr(h,l),t.ref=i.ref,t.return=i,i.child=t}function Rh(t,i,s,l,u){if(t!==null){var h=t.memoizedProps;if(is(h,l)&&t.ref===i.ref)if(Mn=!1,i.pendingProps=l=h,(t.lanes&u)!==0)(t.flags&131072)!==0&&(Mn=!0);else return i.lanes=t.lanes,Pi(t,i,u)}return Nc(t,i,s,l,u)}function Ph(t,i,s){var l=i.pendingProps,u=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(_a,Dn),Dn|=s;else{if((s&1073741824)===0)return t=h!==null?h.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Lt(_a,Dn),Dn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:s,Lt(_a,Dn),Dn|=l}else h!==null?(l=h.baseLanes|s,i.memoizedState=null):l=s,Lt(_a,Dn),Dn|=l;return mn(t,i,u,s),i.child}function Lh(t,i){var s=i.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function Nc(t,i,s,l,u){var h=Sn(s)?br:sn.current;return h=oa(i,h),ha(i,u),s=Ec(t,i,s,l,h,u),l=Tc(),t!==null&&!Mn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,Pi(t,i,u)):(Ut&&l&&sc(i),i.flags|=1,mn(t,i,s,u),i.child)}function Ih(t,i,s,l,u){if(Sn(s)){var h=!0;oo(i)}else h=!1;if(ha(i,u),i.stateNode===null)wo(t,i),yh(i,s,l),Pc(i,s,l,u),l=!0;else if(t===null){var M=i.stateNode,I=i.memoizedProps;M.props=I;var O=M.context,Q=s.contextType;typeof Q=="object"&&Q!==null?Q=Hn(Q):(Q=Sn(s)?br:sn.current,Q=oa(i,Q));var ve=s.getDerivedStateFromProps,ye=typeof ve=="function"||typeof M.getSnapshotBeforeUpdate=="function";ye||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(I!==l||O!==Q)&&Sh(i,M,l,Q),nr=!1;var ge=i.memoizedState;M.state=ge,_o(i,l,M,u),O=i.memoizedState,I!==l||ge!==O||yn.current||nr?(typeof ve=="function"&&(Rc(i,s,ve,l),O=i.memoizedState),(I=nr||xh(i,s,I,l,ge,O,Q))?(ye||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=O),M.props=l,M.state=O,M.context=Q,l=I):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,qf(t,i),I=i.memoizedProps,Q=i.type===i.elementType?I:ei(i.type,I),M.props=Q,ye=i.pendingProps,ge=M.context,O=s.contextType,typeof O=="object"&&O!==null?O=Hn(O):(O=Sn(s)?br:sn.current,O=oa(i,O));var Ie=s.getDerivedStateFromProps;(ve=typeof Ie=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(I!==ye||ge!==O)&&Sh(i,M,l,O),nr=!1,ge=i.memoizedState,M.state=ge,_o(i,l,M,u);var Be=i.memoizedState;I!==ye||ge!==Be||yn.current||nr?(typeof Ie=="function"&&(Rc(i,s,Ie,l),Be=i.memoizedState),(Q=nr||xh(i,s,Q,l,ge,Be,O)||!1)?(ve||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,Be,O),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,Be,O)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Be),M.props=l,M.state=Be,M.context=O,l=Q):(typeof M.componentDidUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),l=!1)}return Dc(t,i,s,l,h,u)}function Dc(t,i,s,l,u,h){Lh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return u&&Of(i,s,!1),Pi(t,i,h);l=i.stateNode,h0.current=i;var I=M&&typeof s.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=da(i,t.child,null,h),i.child=da(i,null,I,h)):mn(t,i,I,h),i.memoizedState=l.state,u&&Of(i,s,!0),i.child}function Nh(t){var i=t.stateNode;i.pendingContext?Uf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Uf(t,i.context,!1),_c(t,i.containerInfo)}function Dh(t,i,s,l,u){return ua(),uc(u),i.flags|=256,mn(t,i,s,l),i.child}var Uc={dehydrated:null,treeContext:null,retryLane:0};function Fc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Uh(t,i,s){var l=i.pendingProps,u=Ft.current,h=!1,M=(i.flags&128)!==0,I;if((I=M)||(I=t!==null&&t.memoizedState===null?!1:(u&2)!==0),I?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),Lt(Ft,u&1),t===null)return cc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,h?(l=i.mode,h=i.child,M={mode:"hidden",children:M},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=M):h=ko(M,l,0,null),t=Ur(t,l,s,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Fc(s),i.memoizedState=Uc,t):Oc(i,M));if(u=t.memoizedState,u!==null&&(I=u.dehydrated,I!==null))return p0(t,i,M,l,I,u,s);if(h){h=l.fallback,M=i.mode,u=t.child,I=u.sibling;var O={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==u?(l=i.child,l.childLanes=0,l.pendingProps=O,i.deletions=null):(l=cr(u,O),l.subtreeFlags=u.subtreeFlags&14680064),I!==null?h=cr(I,h):(h=Ur(h,M,s,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,M=t.child.memoizedState,M=M===null?Fc(s):{baseLanes:M.baseLanes|s,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~s,i.memoizedState=Uc,l}return h=t.child,t=h.sibling,l=cr(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=s),l.return=i,l.sibling=null,t!==null&&(s=i.deletions,s===null?(i.deletions=[t],i.flags|=16):s.push(t)),i.child=l,i.memoizedState=null,l}function Oc(t,i){return i=ko({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function bo(t,i,s,l){return l!==null&&uc(l),da(i,t.child,null,s),t=Oc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function p0(t,i,s,l,u,h,M){if(s)return i.flags&256?(i.flags&=-257,l=Lc(Error(n(422))),bo(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,u=i.mode,l=ko({mode:"visible",children:l.children},u,0,null),h=Ur(h,u,M,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&da(i,t.child,null,M),i.child.memoizedState=Fc(M),i.memoizedState=Uc,h);if((i.mode&1)===0)return bo(t,i,M,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var I=l.dgst;return l=I,h=Error(n(419)),l=Lc(h,l,void 0),bo(t,i,M,l)}if(I=(M&t.childLanes)!==0,Mn||I){if(l=Jt,l!==null){switch(M&-M){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(l.suspendedLanes|M))!==0?0:u,u!==0&&u!==h.retryLane&&(h.retryLane=u,Ci(t,u),ii(l,t,u,-1))}return Qc(),l=Lc(Error(n(421))),bo(t,i,M,l)}return u.data==="$?"?(i.flags|=128,i.child=t.child,i=A0.bind(null,t),u._reactRetry=i,null):(t=h.treeContext,Nn=Ji(u.nextSibling),In=i,Ut=!0,Qn=null,t!==null&&(Bn[zn++]=wi,Bn[zn++]=Ai,Bn[zn++]=wr,wi=t.id,Ai=t.overflow,wr=i),i=Oc(i,l.children),i.flags|=4096,i)}function Fh(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),pc(t.return,i,s)}function kc(t,i,s,l,u){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:u}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=s,h.tailMode=u)}function Oh(t,i,s){var l=i.pendingProps,u=l.revealOrder,h=l.tail;if(mn(t,i,l.children,s),l=Ft.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fh(t,s,i);else if(t.tag===19)Fh(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Lt(Ft,l),(i.mode&1)===0)i.memoizedState=null;else switch(u){case"forwards":for(s=i.child,u=null;s!==null;)t=s.alternate,t!==null&&vo(t)===null&&(u=s),s=s.sibling;s=u,s===null?(u=i.child,i.child=null):(u=s.sibling,s.sibling=null),kc(i,!1,u,s,h);break;case"backwards":for(s=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&vo(t)===null){i.child=u;break}t=u.sibling,u.sibling=s,s=u,u=t}kc(i,!0,s,null,h);break;case"together":kc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function wo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Pi(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Lr|=i.lanes,(s&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,s=cr(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=cr(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function m0(t,i,s){switch(i.tag){case 3:Nh(i),ua();break;case 5:Kf(i);break;case 1:Sn(i.type)&&oo(i);break;case 4:_c(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,u=i.memoizedProps.value;Lt(po,l._currentValue),l._currentValue=u;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Lt(Ft,Ft.current&1),i.flags|=128,null):(s&i.child.childLanes)!==0?Uh(t,i,s):(Lt(Ft,Ft.current&1),t=Pi(t,i,s),t!==null?t.sibling:null);Lt(Ft,Ft.current&1);break;case 19:if(l=(s&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Oh(t,i,s);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Lt(Ft,Ft.current),l)break;return null;case 22:case 23:return i.lanes=0,Ph(t,i,s)}return Pi(t,i,s)}var kh,Bc,Bh,zh;kh=function(t,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Bc=function(){},Bh=function(t,i,s,l){var u=t.memoizedProps;if(u!==l){t=i.stateNode,Rr(hi.current);var h=null;switch(s){case"input":u=j(t,u),l=j(t,l),h=[];break;case"select":u=se({},u,{value:void 0}),l=se({},l,{value:void 0}),h=[];break;case"textarea":u=E(t,u),l=E(t,l),h=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=ro)}ut(s,l);var M;s=null;for(Q in u)if(!l.hasOwnProperty(Q)&&u.hasOwnProperty(Q)&&u[Q]!=null)if(Q==="style"){var I=u[Q];for(M in I)I.hasOwnProperty(M)&&(s||(s={}),s[M]="")}else Q!=="dangerouslySetInnerHTML"&&Q!=="children"&&Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&Q!=="autoFocus"&&(o.hasOwnProperty(Q)?h||(h=[]):(h=h||[]).push(Q,null));for(Q in l){var O=l[Q];if(I=u!=null?u[Q]:void 0,l.hasOwnProperty(Q)&&O!==I&&(O!=null||I!=null))if(Q==="style")if(I){for(M in I)!I.hasOwnProperty(M)||O&&O.hasOwnProperty(M)||(s||(s={}),s[M]="");for(M in O)O.hasOwnProperty(M)&&I[M]!==O[M]&&(s||(s={}),s[M]=O[M])}else s||(h||(h=[]),h.push(Q,s)),s=O;else Q==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,I=I?I.__html:void 0,O!=null&&I!==O&&(h=h||[]).push(Q,O)):Q==="children"?typeof O!="string"&&typeof O!="number"||(h=h||[]).push(Q,""+O):Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&(o.hasOwnProperty(Q)?(O!=null&&Q==="onScroll"&&Nt("scroll",t),h||I===O||(h=[])):(h=h||[]).push(Q,O))}s&&(h=h||[]).push("style",s);var Q=h;(i.updateQueue=Q)&&(i.flags|=4)}},zh=function(t,i,s,l){s!==l&&(i.flags|=4)};function vs(t,i){if(!Ut)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function ln(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var u=t.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function g0(t,i,s){var l=i.pendingProps;switch(oc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(i),null;case 1:return Sn(i.type)&&so(),ln(i),null;case 3:return l=i.stateNode,pa(),Dt(yn),Dt(sn),yc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(fo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Qn!==null&&($c(Qn),Qn=null))),Bc(t,i),ln(i),null;case 5:vc(i);var u=Rr(hs.current);if(s=i.type,t!==null&&i.stateNode!=null)Bh(t,i,s,l,u),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return ln(i),null}if(t=Rr(hi.current),fo(i)){l=i.stateNode,s=i.type;var h=i.memoizedProps;switch(l[fi]=i,l[ls]=h,t=(i.mode&1)!==0,s){case"dialog":Nt("cancel",l),Nt("close",l);break;case"iframe":case"object":case"embed":Nt("load",l);break;case"video":case"audio":for(u=0;u<as.length;u++)Nt(as[u],l);break;case"source":Nt("error",l);break;case"img":case"image":case"link":Nt("error",l),Nt("load",l);break;case"details":Nt("toggle",l);break;case"input":fn(l,h),Nt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Nt("invalid",l);break;case"textarea":$(l,h),Nt("invalid",l)}ut(s,h),u=null;for(var M in h)if(h.hasOwnProperty(M)){var I=h[M];M==="children"?typeof I=="string"?l.textContent!==I&&(h.suppressHydrationWarning!==!0&&io(l.textContent,I,t),u=["children",I]):typeof I=="number"&&l.textContent!==""+I&&(h.suppressHydrationWarning!==!0&&io(l.textContent,I,t),u=["children",""+I]):o.hasOwnProperty(M)&&I!=null&&M==="onScroll"&&Nt("scroll",l)}switch(s){case"input":wt(l),qe(l,h,!0);break;case"textarea":wt(l),_e(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=ro)}l=u,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=fe(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(s,{is:l.is}):(t=M.createElement(s),s==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,s),t[fi]=i,t[ls]=l,kh(t,i,!1,!1),i.stateNode=t;e:{switch(M=it(s,l),s){case"dialog":Nt("cancel",t),Nt("close",t),u=l;break;case"iframe":case"object":case"embed":Nt("load",t),u=l;break;case"video":case"audio":for(u=0;u<as.length;u++)Nt(as[u],t);u=l;break;case"source":Nt("error",t),u=l;break;case"img":case"image":case"link":Nt("error",t),Nt("load",t),u=l;break;case"details":Nt("toggle",t),u=l;break;case"input":fn(t,l),u=j(t,l),Nt("invalid",t);break;case"option":u=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},u=se({},l,{value:void 0}),Nt("invalid",t);break;case"textarea":$(t,l),u=E(t,l),Nt("invalid",t);break;default:u=l}ut(s,u),I=u;for(h in I)if(I.hasOwnProperty(h)){var O=I[h];h==="style"?Qe(t,O):h==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Ue(t,O)):h==="children"?typeof O=="string"?(s!=="textarea"||O!=="")&&lt(t,O):typeof O=="number"&&lt(t,""+O):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(o.hasOwnProperty(h)?O!=null&&h==="onScroll"&&Nt("scroll",t):O!=null&&L(t,h,O,M))}switch(s){case"input":wt(t),qe(t,l,!1);break;case"textarea":wt(t),_e(t);break;case"option":l.value!=null&&t.setAttribute("value",""+we(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?P(t,!!l.multiple,h,!1):l.defaultValue!=null&&P(t,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=ro)}switch(s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return ln(i),null;case 6:if(t&&i.stateNode!=null)zh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(s=Rr(hs.current),Rr(hi.current),fo(i)){if(l=i.stateNode,s=i.memoizedProps,l[fi]=i,(h=l.nodeValue!==s)&&(t=In,t!==null))switch(t.tag){case 3:io(l.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&io(l.nodeValue,s,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(s.nodeType===9?s:s.ownerDocument).createTextNode(l),l[fi]=i,i.stateNode=l}return ln(i),null;case 13:if(Dt(Ft),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ut&&Nn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Vf(),ua(),i.flags|=98560,h=!1;else if(h=fo(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[fi]=i}else ua(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ln(i),h=!1}else Qn!==null&&($c(Qn),Qn=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=s,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ft.current&1)!==0?Zt===0&&(Zt=3):Qc())),i.updateQueue!==null&&(i.flags|=4),ln(i),null);case 4:return pa(),Bc(t,i),t===null&&ss(i.stateNode.containerInfo),ln(i),null;case 10:return hc(i.type._context),ln(i),null;case 17:return Sn(i.type)&&so(),ln(i),null;case 19:if(Dt(Ft),h=i.memoizedState,h===null)return ln(i),null;if(l=(i.flags&128)!==0,M=h.rendering,M===null)if(l)vs(h,!1);else{if(Zt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=vo(t),M!==null){for(i.flags|=128,vs(h,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=s,s=i.child;s!==null;)h=s,t=l,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return Lt(Ft,Ft.current&1|2),i.child}t=t.sibling}h.tail!==null&&Me()>va&&(i.flags|=128,l=!0,vs(h,!1),i.lanes=4194304)}else{if(!l)if(t=vo(M),t!==null){if(i.flags|=128,l=!0,s=t.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),vs(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!Ut)return ln(i),null}else 2*Me()-h.renderingStartTime>va&&s!==1073741824&&(i.flags|=128,l=!0,vs(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(s=h.last,s!==null?s.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Me(),i.sibling=null,s=Ft.current,Lt(Ft,l?s&1|2:s&1),i):(ln(i),null);case 22:case 23:return Jc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Dn&1073741824)!==0&&(ln(i),i.subtreeFlags&6&&(i.flags|=8192)):ln(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function _0(t,i){switch(oc(i),i.tag){case 1:return Sn(i.type)&&so(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return pa(),Dt(yn),Dt(sn),yc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return vc(i),null;case 13:if(Dt(Ft),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ua()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Dt(Ft),null;case 4:return pa(),null;case 10:return hc(i.type._context),null;case 22:case 23:return Jc(),null;case 24:return null;default:return null}}var Ao=!1,cn=!1,v0=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function ga(t,i){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(l){kt(t,i,l)}else s.current=null}function zc(t,i,s){try{s()}catch(l){kt(t,i,l)}}var Hh=!1;function x0(t,i){if(Jl=Xs,t=xf(),Wl(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var u=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var M=0,I=-1,O=-1,Q=0,ve=0,ye=t,ge=null;t:for(;;){for(var Ie;ye!==s||u!==0&&ye.nodeType!==3||(I=M+u),ye!==h||l!==0&&ye.nodeType!==3||(O=M+l),ye.nodeType===3&&(M+=ye.nodeValue.length),(Ie=ye.firstChild)!==null;)ge=ye,ye=Ie;for(;;){if(ye===t)break t;if(ge===s&&++Q===u&&(I=M),ge===h&&++ve===l&&(O=M),(Ie=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=Ie}s=I===-1||O===-1?null:{start:I,end:O}}else s=null}s=s||{start:0,end:0}}else s=null;for(Ql={focusedElem:t,selectionRange:s},Xs=!1,Fe=i;Fe!==null;)if(i=Fe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Fe=t;else for(;Fe!==null;){i=Fe;try{var Be=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var He=Be.memoizedProps,Bt=Be.memoizedState,Z=i.stateNode,H=Z.getSnapshotBeforeUpdate(i.elementType===i.type?He:ei(i.type,He),Bt);Z.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var q=i.stateNode.containerInfo;q.nodeType===1?q.textContent="":q.nodeType===9&&q.documentElement&&q.removeChild(q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Te){kt(i,i.return,Te)}if(t=i.sibling,t!==null){t.return=i.return,Fe=t;break}Fe=i.return}return Be=Hh,Hh=!1,Be}function xs(t,i,s){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&t)===t){var h=u.destroy;u.destroy=void 0,h!==void 0&&zc(i,s,h)}u=u.next}while(u!==l)}}function Co(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var l=s.create;s.destroy=l()}s=s.next}while(s!==i)}}function Hc(t){var i=t.ref;if(i!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof i=="function"?i(t):i.current=t}}function Gh(t){var i=t.alternate;i!==null&&(t.alternate=null,Gh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[fi],delete i[ls],delete i[ic],delete i[t0],delete i[n0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Vh(t){return t.tag===5||t.tag===3||t.tag===4}function Wh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Vh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(t,i):s.insertBefore(t,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(t,s)):(i=s,i.appendChild(t)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=ro));else if(l!==4&&(t=t.child,t!==null))for(Gc(t,i,s),t=t.sibling;t!==null;)Gc(t,i,s),t=t.sibling}function Vc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Vc(t,i,s),t=t.sibling;t!==null;)Vc(t,i,s),t=t.sibling}var tn=null,ti=!1;function rr(t,i,s){for(s=s.child;s!==null;)jh(t,i,s),s=s.sibling}function jh(t,i,s){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(Mt,s)}catch{}switch(s.tag){case 5:cn||ga(s,i);case 6:var l=tn,u=ti;tn=null,rr(t,i,s),tn=l,ti=u,tn!==null&&(ti?(t=tn,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):tn.removeChild(s.stateNode));break;case 18:tn!==null&&(ti?(t=tn,s=s.stateNode,t.nodeType===8?nc(t.parentNode,s):t.nodeType===1&&nc(t,s),Ka(t)):nc(tn,s.stateNode));break;case 4:l=tn,u=ti,tn=s.stateNode.containerInfo,ti=!0,rr(t,i,s),tn=l,ti=u;break;case 0:case 11:case 14:case 15:if(!cn&&(l=s.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var h=u,M=h.destroy;h=h.tag,M!==void 0&&((h&2)!==0||(h&4)!==0)&&zc(s,i,M),u=u.next}while(u!==l)}rr(t,i,s);break;case 1:if(!cn&&(ga(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=s.memoizedProps,l.state=s.memoizedState,l.componentWillUnmount()}catch(I){kt(s,i,I)}rr(t,i,s);break;case 21:rr(t,i,s);break;case 22:s.mode&1?(cn=(l=cn)||s.memoizedState!==null,rr(t,i,s),cn=l):rr(t,i,s);break;default:rr(t,i,s)}}function Xh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new v0),i.forEach(function(l){var u=C0.bind(null,t,l);s.has(l)||(s.add(l),l.then(u,u))})}}function ni(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var u=s[l];try{var h=t,M=i,I=M;e:for(;I!==null;){switch(I.tag){case 5:tn=I.stateNode,ti=!1;break e;case 3:tn=I.stateNode.containerInfo,ti=!0;break e;case 4:tn=I.stateNode.containerInfo,ti=!0;break e}I=I.return}if(tn===null)throw Error(n(160));jh(h,M,u),tn=null,ti=!1;var O=u.alternate;O!==null&&(O.return=null),u.return=null}catch(Q){kt(u,i,Q)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Zh(i,t),i=i.sibling}function Zh(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ni(i,t),mi(t),l&4){try{xs(3,t,t.return),Co(3,t)}catch(He){kt(t,t.return,He)}try{xs(5,t,t.return)}catch(He){kt(t,t.return,He)}}break;case 1:ni(i,t),mi(t),l&512&&s!==null&&ga(s,s.return);break;case 5:if(ni(i,t),mi(t),l&512&&s!==null&&ga(s,s.return),t.flags&32){var u=t.stateNode;try{lt(u,"")}catch(He){kt(t,t.return,He)}}if(l&4&&(u=t.stateNode,u!=null)){var h=t.memoizedProps,M=s!==null?s.memoizedProps:h,I=t.type,O=t.updateQueue;if(t.updateQueue=null,O!==null)try{I==="input"&&h.type==="radio"&&h.name!=null&&ft(u,h),it(I,M);var Q=it(I,h);for(M=0;M<O.length;M+=2){var ve=O[M],ye=O[M+1];ve==="style"?Qe(u,ye):ve==="dangerouslySetInnerHTML"?Ue(u,ye):ve==="children"?lt(u,ye):L(u,ve,ye,Q)}switch(I){case"input":ct(u,h);break;case"textarea":me(u,h);break;case"select":var ge=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!h.multiple;var Ie=h.value;Ie!=null?P(u,!!h.multiple,Ie,!1):ge!==!!h.multiple&&(h.defaultValue!=null?P(u,!!h.multiple,h.defaultValue,!0):P(u,!!h.multiple,h.multiple?[]:"",!1))}u[ls]=h}catch(He){kt(t,t.return,He)}}break;case 6:if(ni(i,t),mi(t),l&4){if(t.stateNode===null)throw Error(n(162));u=t.stateNode,h=t.memoizedProps;try{u.nodeValue=h}catch(He){kt(t,t.return,He)}}break;case 3:if(ni(i,t),mi(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Ka(i.containerInfo)}catch(He){kt(t,t.return,He)}break;case 4:ni(i,t),mi(t);break;case 13:ni(i,t),mi(t),u=t.child,u.flags&8192&&(h=u.memoizedState!==null,u.stateNode.isHidden=h,!h||u.alternate!==null&&u.alternate.memoizedState!==null||(Xc=Me())),l&4&&Xh(t);break;case 22:if(ve=s!==null&&s.memoizedState!==null,t.mode&1?(cn=(Q=cn)||ve,ni(i,t),cn=Q):ni(i,t),mi(t),l&8192){if(Q=t.memoizedState!==null,(t.stateNode.isHidden=Q)&&!ve&&(t.mode&1)!==0)for(Fe=t,ve=t.child;ve!==null;){for(ye=Fe=ve;Fe!==null;){switch(ge=Fe,Ie=ge.child,ge.tag){case 0:case 11:case 14:case 15:xs(4,ge,ge.return);break;case 1:ga(ge,ge.return);var Be=ge.stateNode;if(typeof Be.componentWillUnmount=="function"){l=ge,s=ge.return;try{i=l,Be.props=i.memoizedProps,Be.state=i.memoizedState,Be.componentWillUnmount()}catch(He){kt(l,s,He)}}break;case 5:ga(ge,ge.return);break;case 22:if(ge.memoizedState!==null){$h(ye);continue}}Ie!==null?(Ie.return=ge,Fe=Ie):$h(ye)}ve=ve.sibling}e:for(ve=null,ye=t;;){if(ye.tag===5){if(ve===null){ve=ye;try{u=ye.stateNode,Q?(h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(I=ye.stateNode,O=ye.memoizedProps.style,M=O!=null&&O.hasOwnProperty("display")?O.display:null,I.style.display=Je("display",M))}catch(He){kt(t,t.return,He)}}}else if(ye.tag===6){if(ve===null)try{ye.stateNode.nodeValue=Q?"":ye.memoizedProps}catch(He){kt(t,t.return,He)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===t)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===t)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===t)break e;ve===ye&&(ve=null),ye=ye.return}ve===ye&&(ve=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:ni(i,t),mi(t),l&4&&Xh(t);break;case 21:break;default:ni(i,t),mi(t)}}function mi(t){var i=t.flags;if(i&2){try{e:{for(var s=t.return;s!==null;){if(Vh(s)){var l=s;break e}s=s.return}throw Error(n(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(lt(u,""),l.flags&=-33);var h=Wh(t);Vc(t,h,u);break;case 3:case 4:var M=l.stateNode.containerInfo,I=Wh(t);Gc(t,I,M);break;default:throw Error(n(161))}}catch(O){kt(t,t.return,O)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function y0(t,i,s){Fe=t,qh(t)}function qh(t,i,s){for(var l=(t.mode&1)!==0;Fe!==null;){var u=Fe,h=u.child;if(u.tag===22&&l){var M=u.memoizedState!==null||Ao;if(!M){var I=u.alternate,O=I!==null&&I.memoizedState!==null||cn;I=Ao;var Q=cn;if(Ao=M,(cn=O)&&!Q)for(Fe=u;Fe!==null;)M=Fe,O=M.child,M.tag===22&&M.memoizedState!==null?Kh(u):O!==null?(O.return=M,Fe=O):Kh(u);for(;h!==null;)Fe=h,qh(h),h=h.sibling;Fe=u,Ao=I,cn=Q}Yh(t)}else(u.subtreeFlags&8772)!==0&&h!==null?(h.return=u,Fe=h):Yh(t)}}function Yh(t){for(;Fe!==null;){var i=Fe;if((i.flags&8772)!==0){var s=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:cn||Co(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!cn)if(s===null)l.componentDidMount();else{var u=i.elementType===i.type?s.memoizedProps:ei(i.type,s.memoizedProps);l.componentDidUpdate(u,s.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&$f(i,h,l);break;case 3:var M=i.updateQueue;if(M!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}$f(i,M,s)}break;case 5:var I=i.stateNode;if(s===null&&i.flags&4){s=I;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&s.focus();break;case"img":O.src&&(s.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var Q=i.alternate;if(Q!==null){var ve=Q.memoizedState;if(ve!==null){var ye=ve.dehydrated;ye!==null&&Ka(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}cn||i.flags&512&&Hc(i)}catch(ge){kt(i,i.return,ge)}}if(i===t){Fe=null;break}if(s=i.sibling,s!==null){s.return=i.return,Fe=s;break}Fe=i.return}}function $h(t){for(;Fe!==null;){var i=Fe;if(i===t){Fe=null;break}var s=i.sibling;if(s!==null){s.return=i.return,Fe=s;break}Fe=i.return}}function Kh(t){for(;Fe!==null;){var i=Fe;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{Co(4,i)}catch(O){kt(i,s,O)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var u=i.return;try{l.componentDidMount()}catch(O){kt(i,u,O)}}var h=i.return;try{Hc(i)}catch(O){kt(i,h,O)}break;case 5:var M=i.return;try{Hc(i)}catch(O){kt(i,M,O)}}}catch(O){kt(i,i.return,O)}if(i===t){Fe=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Fe=I;break}Fe=i.return}}var S0=Math.ceil,Ro=C.ReactCurrentDispatcher,Wc=C.ReactCurrentOwner,Vn=C.ReactCurrentBatchConfig,_t=0,Jt=null,Gt=null,nn=0,Dn=0,_a=Qi(0),Zt=0,ys=null,Lr=0,Po=0,jc=0,Ss=null,En=null,Xc=0,va=1/0,Li=null,Lo=!1,Zc=null,ar=null,Io=!1,sr=null,No=0,Ms=0,qc=null,Do=-1,Uo=0;function gn(){return(_t&6)!==0?Me():Do!==-1?Do:Do=Me()}function or(t){return(t.mode&1)===0?1:(_t&2)!==0&&nn!==0?nn&-nn:r0.transition!==null?(Uo===0&&(Uo=pn()),Uo):(t=bt,t!==0||(t=window.event,t=t===void 0?16:Jd(t.type)),t)}function ii(t,i,s,l){if(50<Ms)throw Ms=0,qc=null,Error(n(185));xn(t,s,l),((_t&2)===0||t!==Jt)&&(t===Jt&&((_t&2)===0&&(Po|=s),Zt===4&&lr(t,nn)),Tn(t,l),s===1&&_t===0&&(i.mode&1)===0&&(va=Me()+500,lo&&tr()))}function Tn(t,i){var s=t.callbackNode;On(t,i);var l=di(t,t===Jt?nn:0);if(l===0)s!==null&&te(s),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(s!=null&&te(s),i===1)t.tag===0?i0(Qh.bind(null,t)):kf(Qh.bind(null,t)),Qg(function(){(_t&6)===0&&tr()}),s=null;else{switch(Wd(l)){case 1:s=ze;break;case 4:s=et;break;case 16:s=nt;break;case 536870912:s=mt;break;default:s=nt}s=op(s,Jh.bind(null,t))}t.callbackPriority=i,t.callbackNode=s}}function Jh(t,i){if(Do=-1,Uo=0,(_t&6)!==0)throw Error(n(327));var s=t.callbackNode;if(xa()&&t.callbackNode!==s)return null;var l=di(t,t===Jt?nn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Fo(t,l);else{i=l;var u=_t;_t|=2;var h=tp();(Jt!==t||nn!==i)&&(Li=null,va=Me()+500,Nr(t,i));do try{T0();break}catch(I){ep(t,I)}while(!0);fc(),Ro.current=h,_t=u,Gt!==null?i=0:(Jt=null,nn=0,i=Zt)}if(i!==0){if(i===2&&(u=Ei(t),u!==0&&(l=u,i=Yc(t,u))),i===1)throw s=ys,Nr(t,0),lr(t,l),Tn(t,Me()),s;if(i===6)lr(t,l);else{if(u=t.current.alternate,(l&30)===0&&!M0(u)&&(i=Fo(t,l),i===2&&(h=Ei(t),h!==0&&(l=h,i=Yc(t,h))),i===1))throw s=ys,Nr(t,0),lr(t,l),Tn(t,Me()),s;switch(t.finishedWork=u,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Dr(t,En,Li);break;case 3:if(lr(t,l),(l&130023424)===l&&(i=Xc+500-Me(),10<i)){if(di(t,0)!==0)break;if(u=t.suspendedLanes,(u&l)!==l){gn(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=tc(Dr.bind(null,t,En,Li),i);break}Dr(t,En,Li);break;case 4:if(lr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,u=-1;0<l;){var M=31-at(l);h=1<<M,M=i[M],M>u&&(u=M),l&=~h}if(l=u,l=Me()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*S0(l/1960))-l,10<l){t.timeoutHandle=tc(Dr.bind(null,t,En,Li),l);break}Dr(t,En,Li);break;case 5:Dr(t,En,Li);break;default:throw Error(n(329))}}}return Tn(t,Me()),t.callbackNode===s?Jh.bind(null,t):null}function Yc(t,i){var s=Ss;return t.current.memoizedState.isDehydrated&&(Nr(t,i).flags|=256),t=Fo(t,i),t!==2&&(i=En,En=s,i!==null&&$c(i)),t}function $c(t){En===null?En=t:En.push.apply(En,t)}function M0(t){for(var i=t;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var l=0;l<s.length;l++){var u=s[l],h=u.getSnapshot;u=u.value;try{if(!Jn(h(),u))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function lr(t,i){for(i&=~jc,i&=~Po,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var s=31-at(i),l=1<<s;t[s]=-1,i&=~l}}function Qh(t){if((_t&6)!==0)throw Error(n(327));xa();var i=di(t,0);if((i&1)===0)return Tn(t,Me()),null;var s=Fo(t,i);if(t.tag!==0&&s===2){var l=Ei(t);l!==0&&(i=l,s=Yc(t,l))}if(s===1)throw s=ys,Nr(t,0),lr(t,i),Tn(t,Me()),s;if(s===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Dr(t,En,Li),Tn(t,Me()),null}function Kc(t,i){var s=_t;_t|=1;try{return t(i)}finally{_t=s,_t===0&&(va=Me()+500,lo&&tr())}}function Ir(t){sr!==null&&sr.tag===0&&(_t&6)===0&&xa();var i=_t;_t|=1;var s=Vn.transition,l=bt;try{if(Vn.transition=null,bt=1,t)return t()}finally{bt=l,Vn.transition=s,_t=i,(_t&6)===0&&tr()}}function Jc(){Dn=_a.current,Dt(_a)}function Nr(t,i){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,Jg(s)),Gt!==null)for(s=Gt.return;s!==null;){var l=s;switch(oc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&so();break;case 3:pa(),Dt(yn),Dt(sn),yc();break;case 5:vc(l);break;case 4:pa();break;case 13:Dt(Ft);break;case 19:Dt(Ft);break;case 10:hc(l.type._context);break;case 22:case 23:Jc()}s=s.return}if(Jt=t,Gt=t=cr(t.current,null),nn=Dn=i,Zt=0,ys=null,jc=Po=Lr=0,En=Ss=null,Cr!==null){for(i=0;i<Cr.length;i++)if(s=Cr[i],l=s.interleaved,l!==null){s.interleaved=null;var u=l.next,h=s.pending;if(h!==null){var M=h.next;h.next=u,l.next=M}s.pending=l}Cr=null}return t}function ep(t,i){do{var s=Gt;try{if(fc(),xo.current=Eo,yo){for(var l=Ot.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}yo=!1}if(Pr=0,Kt=Xt=Ot=null,ps=!1,ms=0,Wc.current=null,s===null||s.return===null){Zt=1,ys=i,Gt=null;break}e:{var h=t,M=s.return,I=s,O=i;if(i=nn,I.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var Q=O,ve=I,ye=ve.tag;if((ve.mode&1)===0&&(ye===0||ye===11||ye===15)){var ge=ve.alternate;ge?(ve.updateQueue=ge.updateQueue,ve.memoizedState=ge.memoizedState,ve.lanes=ge.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Ie=bh(M);if(Ie!==null){Ie.flags&=-257,wh(Ie,M,I,h,i),Ie.mode&1&&Th(h,Q,i),i=Ie,O=Q;var Be=i.updateQueue;if(Be===null){var He=new Set;He.add(O),i.updateQueue=He}else Be.add(O);break e}else{if((i&1)===0){Th(h,Q,i),Qc();break e}O=Error(n(426))}}else if(Ut&&I.mode&1){var Bt=bh(M);if(Bt!==null){(Bt.flags&65536)===0&&(Bt.flags|=256),wh(Bt,M,I,h,i),uc(ma(O,I));break e}}h=O=ma(O,I),Zt!==4&&(Zt=2),Ss===null?Ss=[h]:Ss.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var Z=Mh(h,O,i);Yf(h,Z);break e;case 1:I=O;var H=h.type,q=h.stateNode;if((h.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||q!==null&&typeof q.componentDidCatch=="function"&&(ar===null||!ar.has(q)))){h.flags|=65536,i&=-i,h.lanes|=i;var Te=Eh(h,I,i);Yf(h,Te);break e}}h=h.return}while(h!==null)}ip(s)}catch(je){i=je,Gt===s&&s!==null&&(Gt=s=s.return);continue}break}while(!0)}function tp(){var t=Ro.current;return Ro.current=Eo,t===null?Eo:t}function Qc(){(Zt===0||Zt===3||Zt===2)&&(Zt=4),Jt===null||(Lr&268435455)===0&&(Po&268435455)===0||lr(Jt,nn)}function Fo(t,i){var s=_t;_t|=2;var l=tp();(Jt!==t||nn!==i)&&(Li=null,Nr(t,i));do try{E0();break}catch(u){ep(t,u)}while(!0);if(fc(),_t=s,Ro.current=l,Gt!==null)throw Error(n(261));return Jt=null,nn=0,Zt}function E0(){for(;Gt!==null;)np(Gt)}function T0(){for(;Gt!==null&&!W();)np(Gt)}function np(t){var i=sp(t.alternate,t,Dn);t.memoizedProps=t.pendingProps,i===null?ip(t):Gt=i,Wc.current=null}function ip(t){var i=t;do{var s=i.alternate;if(t=i.return,(i.flags&32768)===0){if(s=g0(s,i,Dn),s!==null){Gt=s;return}}else{if(s=_0(s,i),s!==null){s.flags&=32767,Gt=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Zt=6,Gt=null;return}}if(i=i.sibling,i!==null){Gt=i;return}Gt=i=t}while(i!==null);Zt===0&&(Zt=5)}function Dr(t,i,s){var l=bt,u=Vn.transition;try{Vn.transition=null,bt=1,b0(t,i,s,l)}finally{Vn.transition=u,bt=l}return null}function b0(t,i,s,l){do xa();while(sr!==null);if((_t&6)!==0)throw Error(n(327));s=t.finishedWork;var u=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=s.lanes|s.childLanes;if(Vs(t,h),t===Jt&&(Gt=Jt=null,nn=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||Io||(Io=!0,op(nt,function(){return xa(),null})),h=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||h){h=Vn.transition,Vn.transition=null;var M=bt;bt=1;var I=_t;_t|=4,Wc.current=null,x0(t,s),Zh(s,t),jg(Ql),Xs=!!Jl,Ql=Jl=null,t.current=s,y0(s),be(),_t=I,bt=M,Vn.transition=h}else t.current=s;if(Io&&(Io=!1,sr=t,No=u),h=t.pendingLanes,h===0&&(ar=null),rn(s.stateNode),Tn(t,Me()),i!==null)for(l=t.onRecoverableError,s=0;s<i.length;s++)u=i[s],l(u.value,{componentStack:u.stack,digest:u.digest});if(Lo)throw Lo=!1,t=Zc,Zc=null,t;return(No&1)!==0&&t.tag!==0&&xa(),h=t.pendingLanes,(h&1)!==0?t===qc?Ms++:(Ms=0,qc=t):Ms=0,tr(),null}function xa(){if(sr!==null){var t=Wd(No),i=Vn.transition,s=bt;try{if(Vn.transition=null,bt=16>t?16:t,sr===null)var l=!1;else{if(t=sr,sr=null,No=0,(_t&6)!==0)throw Error(n(331));var u=_t;for(_t|=4,Fe=t.current;Fe!==null;){var h=Fe,M=h.child;if((Fe.flags&16)!==0){var I=h.deletions;if(I!==null){for(var O=0;O<I.length;O++){var Q=I[O];for(Fe=Q;Fe!==null;){var ve=Fe;switch(ve.tag){case 0:case 11:case 15:xs(8,ve,h)}var ye=ve.child;if(ye!==null)ye.return=ve,Fe=ye;else for(;Fe!==null;){ve=Fe;var ge=ve.sibling,Ie=ve.return;if(Gh(ve),ve===Q){Fe=null;break}if(ge!==null){ge.return=Ie,Fe=ge;break}Fe=Ie}}}var Be=h.alternate;if(Be!==null){var He=Be.child;if(He!==null){Be.child=null;do{var Bt=He.sibling;He.sibling=null,He=Bt}while(He!==null)}}Fe=h}}if((h.subtreeFlags&2064)!==0&&M!==null)M.return=h,Fe=M;else e:for(;Fe!==null;){if(h=Fe,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:xs(9,h,h.return)}var Z=h.sibling;if(Z!==null){Z.return=h.return,Fe=Z;break e}Fe=h.return}}var H=t.current;for(Fe=H;Fe!==null;){M=Fe;var q=M.child;if((M.subtreeFlags&2064)!==0&&q!==null)q.return=M,Fe=q;else e:for(M=H;Fe!==null;){if(I=Fe,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Co(9,I)}}catch(je){kt(I,I.return,je)}if(I===M){Fe=null;break e}var Te=I.sibling;if(Te!==null){Te.return=I.return,Fe=Te;break e}Fe=I.return}}if(_t=u,tr(),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(Mt,t)}catch{}l=!0}return l}finally{bt=s,Vn.transition=i}}return!1}function rp(t,i,s){i=ma(s,i),i=Mh(t,i,1),t=ir(t,i,1),i=gn(),t!==null&&(xn(t,1,i),Tn(t,i))}function kt(t,i,s){if(t.tag===3)rp(t,t,s);else for(;i!==null;){if(i.tag===3){rp(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ar===null||!ar.has(l))){t=ma(s,t),t=Eh(i,t,1),i=ir(i,t,1),t=gn(),i!==null&&(xn(i,1,t),Tn(i,t));break}}i=i.return}}function w0(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),i=gn(),t.pingedLanes|=t.suspendedLanes&s,Jt===t&&(nn&s)===s&&(Zt===4||Zt===3&&(nn&130023424)===nn&&500>Me()-Xc?Nr(t,0):jc|=s),Tn(t,i)}function ap(t,i){i===0&&((t.mode&1)===0?i=1:(i=Kn,Kn<<=1,(Kn&130023424)===0&&(Kn=4194304)));var s=gn();t=Ci(t,i),t!==null&&(xn(t,i,s),Tn(t,s))}function A0(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),ap(t,s)}function C0(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(s=u.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),ap(t,s)}var sp;sp=function(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps||yn.current)Mn=!0;else{if((t.lanes&s)===0&&(i.flags&128)===0)return Mn=!1,m0(t,i,s);Mn=(t.flags&131072)!==0}else Mn=!1,Ut&&(i.flags&1048576)!==0&&Bf(i,uo,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;wo(t,i),t=i.pendingProps;var u=oa(i,sn.current);ha(i,s),u=Ec(null,i,l,t,u,s);var h=Tc();return i.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Sn(l)?(h=!0,oo(i)):h=!1,i.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,gc(i),u.updater=To,i.stateNode=u,u._reactInternals=i,Pc(i,l,t,s),i=Dc(null,i,l,!0,h,s)):(i.tag=0,Ut&&h&&sc(i),mn(null,i,u,s),i=i.child),i;case 16:l=i.elementType;e:{switch(wo(t,i),t=i.pendingProps,u=l._init,l=u(l._payload),i.type=l,u=i.tag=P0(l),t=ei(l,t),u){case 0:i=Nc(null,i,l,t,s);break e;case 1:i=Ih(null,i,l,t,s);break e;case 11:i=Ah(null,i,l,t,s);break e;case 14:i=Ch(null,i,l,ei(l.type,t),s);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:ei(l,u),Nc(t,i,l,u,s);case 1:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:ei(l,u),Ih(t,i,l,u,s);case 3:e:{if(Nh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,u=h.element,qf(t,i),_o(i,l,null,s);var M=i.memoizedState;if(l=M.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){u=ma(Error(n(423)),i),i=Dh(t,i,l,s,u);break e}else if(l!==u){u=ma(Error(n(424)),i),i=Dh(t,i,l,s,u);break e}else for(Nn=Ji(i.stateNode.containerInfo.firstChild),In=i,Ut=!0,Qn=null,s=Xf(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(ua(),l===u){i=Pi(t,i,s);break e}mn(t,i,l,s)}i=i.child}return i;case 5:return Kf(i),t===null&&cc(i),l=i.type,u=i.pendingProps,h=t!==null?t.memoizedProps:null,M=u.children,ec(l,u)?M=null:h!==null&&ec(l,h)&&(i.flags|=32),Lh(t,i),mn(t,i,M,s),i.child;case 6:return t===null&&cc(i),null;case 13:return Uh(t,i,s);case 4:return _c(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=da(i,null,l,s):mn(t,i,l,s),i.child;case 11:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:ei(l,u),Ah(t,i,l,u,s);case 7:return mn(t,i,i.pendingProps,s),i.child;case 8:return mn(t,i,i.pendingProps.children,s),i.child;case 12:return mn(t,i,i.pendingProps.children,s),i.child;case 10:e:{if(l=i.type._context,u=i.pendingProps,h=i.memoizedProps,M=u.value,Lt(po,l._currentValue),l._currentValue=M,h!==null)if(Jn(h.value,M)){if(h.children===u.children&&!yn.current){i=Pi(t,i,s);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var I=h.dependencies;if(I!==null){M=h.child;for(var O=I.firstContext;O!==null;){if(O.context===l){if(h.tag===1){O=Ri(-1,s&-s),O.tag=2;var Q=h.updateQueue;if(Q!==null){Q=Q.shared;var ve=Q.pending;ve===null?O.next=O:(O.next=ve.next,ve.next=O),Q.pending=O}}h.lanes|=s,O=h.alternate,O!==null&&(O.lanes|=s),pc(h.return,s,i),I.lanes|=s;break}O=O.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=s,I=M.alternate,I!==null&&(I.lanes|=s),pc(M,s,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}mn(t,i,u.children,s),i=i.child}return i;case 9:return u=i.type,l=i.pendingProps.children,ha(i,s),u=Hn(u),l=l(u),i.flags|=1,mn(t,i,l,s),i.child;case 14:return l=i.type,u=ei(l,i.pendingProps),u=ei(l.type,u),Ch(t,i,l,u,s);case 15:return Rh(t,i,i.type,i.pendingProps,s);case 17:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:ei(l,u),wo(t,i),i.tag=1,Sn(l)?(t=!0,oo(i)):t=!1,ha(i,s),yh(i,l,u),Pc(i,l,u,s),Dc(null,i,l,!0,t,s);case 19:return Oh(t,i,s);case 22:return Ph(t,i,s)}throw Error(n(156,i.tag))};function op(t,i){return ee(t,i)}function R0(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,i,s,l){return new R0(t,i,s,l)}function eu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function P0(t){if(typeof t=="function")return eu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ae)return 11;if(t===pe)return 14}return 2}function cr(t,i){var s=t.alternate;return s===null?(s=Wn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function Oo(t,i,s,l,u,h){var M=2;if(l=t,typeof t=="function")eu(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case k:return Ur(s.children,u,h,i);case X:M=8,u|=8;break;case R:return t=Wn(12,s,i,u|2),t.elementType=R,t.lanes=h,t;case J:return t=Wn(13,s,i,u),t.elementType=J,t.lanes=h,t;case ue:return t=Wn(19,s,i,u),t.elementType=ue,t.lanes=h,t;case le:return ko(s,u,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A:M=10;break e;case F:M=9;break e;case ae:M=11;break e;case pe:M=14;break e;case oe:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Wn(M,s,i,u),i.elementType=t,i.type=l,i.lanes=h,i}function Ur(t,i,s,l){return t=Wn(7,t,l,i),t.lanes=s,t}function ko(t,i,s,l){return t=Wn(22,t,l,i),t.elementType=le,t.lanes=s,t.stateNode={isHidden:!1},t}function tu(t,i,s){return t=Wn(6,t,null,i),t.lanes=s,t}function nu(t,i,s){return i=Wn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function L0(t,i,s,l,u){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kn(0),this.expirationTimes=kn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kn(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function iu(t,i,s,l,u,h,M,I,O){return t=new L0(t,i,s,I,O),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Wn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},gc(h),t}function I0(t,i,s){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:l==null?null:""+l,children:t,containerInfo:i,implementation:s}}function lp(t){if(!t)return er;t=t._reactInternals;e:{if(ui(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Sn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var s=t.type;if(Sn(s))return Ff(t,s,i)}return i}function cp(t,i,s,l,u,h,M,I,O){return t=iu(s,l,!0,t,u,h,M,I,O),t.context=lp(null),s=t.current,l=gn(),u=or(s),h=Ri(l,u),h.callback=i??null,ir(s,h,u),t.current.lanes=u,xn(t,u,l),Tn(t,l),t}function Bo(t,i,s,l){var u=i.current,h=gn(),M=or(u);return s=lp(s),i.context===null?i.context=s:i.pendingContext=s,i=Ri(h,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=ir(u,i,M),t!==null&&(ii(t,u,M,h),go(t,u,M)),M}function zo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function up(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function ru(t,i){up(t,i),(t=t.alternate)&&up(t,i)}function N0(){return null}var dp=typeof reportError=="function"?reportError:function(t){console.error(t)};function au(t){this._internalRoot=t}Ho.prototype.render=au.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Bo(t,i,null,null)},Ho.prototype.unmount=au.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Ir(function(){Bo(null,t,null,null)}),i[Ti]=null}};function Ho(t){this._internalRoot=t}Ho.prototype.unstable_scheduleHydration=function(t){if(t){var i=Zd();t={blockedOn:null,target:t,priority:i};for(var s=0;s<Yi.length&&i!==0&&i<Yi[s].priority;s++);Yi.splice(s,0,t),s===0&&$d(t)}};function su(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Go(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function fp(){}function D0(t,i,s,l,u){if(u){if(typeof l=="function"){var h=l;l=function(){var Q=zo(M);h.call(Q)}}var M=cp(i,l,t,0,null,!1,!1,"",fp);return t._reactRootContainer=M,t[Ti]=M.current,ss(t.nodeType===8?t.parentNode:t),Ir(),M}for(;u=t.lastChild;)t.removeChild(u);if(typeof l=="function"){var I=l;l=function(){var Q=zo(O);I.call(Q)}}var O=iu(t,0,!1,null,null,!1,!1,"",fp);return t._reactRootContainer=O,t[Ti]=O.current,ss(t.nodeType===8?t.parentNode:t),Ir(function(){Bo(i,O,s,l)}),O}function Vo(t,i,s,l,u){var h=s._reactRootContainer;if(h){var M=h;if(typeof u=="function"){var I=u;u=function(){var O=zo(M);I.call(O)}}Bo(i,M,t,u)}else M=D0(s,i,t,u,l);return zo(M)}jd=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var s=jt(i.pendingLanes);s!==0&&(Pl(i,s|1),Tn(i,Me()),(_t&6)===0&&(va=Me()+500,tr()))}break;case 13:Ir(function(){var l=Ci(t,1);if(l!==null){var u=gn();ii(l,t,1,u)}}),ru(t,1)}},Ll=function(t){if(t.tag===13){var i=Ci(t,134217728);if(i!==null){var s=gn();ii(i,t,134217728,s)}ru(t,134217728)}},Xd=function(t){if(t.tag===13){var i=or(t),s=Ci(t,i);if(s!==null){var l=gn();ii(s,t,i,l)}ru(t,i)}},Zd=function(){return bt},qd=function(t,i){var s=bt;try{return bt=t,i()}finally{bt=s}},Ce=function(t,i,s){switch(i){case"input":if(ct(t,s),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var u=ao(l);if(!u)throw Error(n(90));ht(l),ct(l,u)}}}break;case"textarea":me(t,s);break;case"select":i=s.value,i!=null&&P(t,!!s.multiple,i,!1)}},It=Kc,Wt=Ir;var U0={usingClientEntryPoint:!1,Events:[cs,aa,ao,Pe,rt,Kc]},Es={findFiberByHostInstance:Tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},F0={bundleType:Es.bundleType,version:Es.version,rendererPackageName:Es.rendererPackageName,rendererConfig:Es.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=b(t),t===null?null:t.stateNode},findFiberByHostInstance:Es.findFiberByHostInstance||N0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wo.isDisabled&&Wo.supportsFiber)try{Mt=Wo.inject(F0),pt=Wo}catch{}}return bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U0,bn.createPortal=function(t,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!su(i))throw Error(n(200));return I0(t,i,null,s)},bn.createRoot=function(t,i){if(!su(t))throw Error(n(299));var s=!1,l="",u=dp;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(u=i.onRecoverableError)),i=iu(t,1,!1,null,null,s,!1,l,u),t[Ti]=i.current,ss(t.nodeType===8?t.parentNode:t),new au(i)},bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=b(i),t=t===null?null:t.stateNode,t},bn.flushSync=function(t){return Ir(t)},bn.hydrate=function(t,i,s){if(!Go(i))throw Error(n(200));return Vo(null,t,i,!0,s)},bn.hydrateRoot=function(t,i,s){if(!su(t))throw Error(n(405));var l=s!=null&&s.hydratedSources||null,u=!1,h="",M=dp;if(s!=null&&(s.unstable_strictMode===!0&&(u=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(M=s.onRecoverableError)),i=cp(i,null,t,1,s??null,u,!1,h,M),t[Ti]=i.current,ss(t),l)for(t=0;t<l.length;t++)s=l[t],u=s._getVersion,u=u(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,u]:i.mutableSourceEagerHydrationData.push(s,u);return new Ho(i)},bn.render=function(t,i,s){if(!Go(i))throw Error(n(200));return Vo(null,t,i,!1,s)},bn.unmountComponentAtNode=function(t){if(!Go(t))throw Error(n(40));return t._reactRootContainer?(Ir(function(){Vo(null,null,t,!1,function(){t._reactRootContainer=null,t[Ti]=null})}),!0):!1},bn.unstable_batchedUpdates=Kc,bn.unstable_renderSubtreeIntoContainer=function(t,i,s,l){if(!Go(s))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Vo(t,i,s,!1,l)},bn.version="18.3.1-next-f1338f8080-20240426",bn}var yp;function j0(){if(yp)return cu.exports;yp=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),cu.exports=W0(),cu.exports}var Sp;function X0(){if(Sp)return jo;Sp=1;var a=j0();return jo.createRoot=a.createRoot,jo.hydrateRoot=a.hydrateRoot,jo}var Z0=X0();const q0=Tm(Z0);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),bm=(...a)=>a.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=qn.forwardRef(({color:a="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:c,iconNode:f,...d},p)=>qn.createElement("svg",{ref:p,...$0,width:e,height:e,stroke:a,strokeWidth:r?Number(n)*24/Number(e):n,className:bm("lucide",o),...d},[...f.map(([m,_])=>qn.createElement(m,_)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=(a,e)=>{const n=qn.forwardRef(({className:r,...o},c)=>qn.createElement(K0,{ref:c,iconNode:e,className:bm(`lucide-${Y0(a)}`,r),...o}));return n.displayName=`${a}`,n};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=$t("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=$t("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=$t("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=$t("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=$t("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=$t("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=$t("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=$t("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=$t("GitCommitHorizontal",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=$t("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=$t("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=$t("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_=$t("Orbit",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=$t("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=$t("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=$t("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=$t("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=$t("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=$t("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]),h_=()=>N.jsx("header",{className:"sticky top-0 z-50 glass-panel border-b border-slate-800/80",children:N.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between",children:[N.jsxs("div",{className:"flex items-center gap-3",children:[N.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-obsidian-950 font-mono font-bold text-sm shadow-md shadow-cyan-500/20",children:"CG"}),N.jsxs("div",{children:[N.jsxs("div",{className:"font-bold text-sm text-white flex items-center gap-2",children:[N.jsx("span",{children:"CHIRAG GOUR"}),N.jsx("span",{className:"hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/50",children:"● AUTONOMOUS"})]}),N.jsx("div",{className:"text-[10px] font-mono text-slate-400",children:"Creative Computing & Pedagogical Systems"})]})]}),N.jsxs("nav",{className:"hidden md:flex items-center gap-6 text-xs font-mono text-slate-400",children:[N.jsx("a",{href:"#analytics",className:"hover:text-cyan-300 transition-colors",children:"Activity"}),N.jsx("a",{href:"#projects",className:"hover:text-cyan-300 transition-colors",children:"Projects (57)"}),N.jsx("a",{href:"#commit-intelligence",className:"hover:text-cyan-300 transition-colors",children:"Commit Intelligence"}),N.jsx("a",{href:"#timeline",className:"hover:text-cyan-300 transition-colors",children:"Timeline"})]}),N.jsx("div",{className:"flex items-center gap-3",children:N.jsxs("a",{href:"https://github.com/CHIRAG-GOUR",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-cyan-400 text-xs font-mono text-slate-200 hover:text-white transition-all shadow-sm",children:[N.jsx(Id,{className:"w-3.5 h-3.5"}),N.jsx("span",{className:"hidden sm:inline",children:"GitHub"})]})})]})});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dd="170",p_=0,Ep=1,m_=2,Am=1,g_=2,Oi=3,yr=0,Cn=1,ki=2,vr=0,Ua=1,Gu=2,Tp=3,bp=4,__=5,Wr=100,v_=101,x_=102,y_=103,S_=104,M_=200,E_=201,T_=202,b_=203,Vu=204,Wu=205,w_=206,A_=207,C_=208,R_=209,P_=210,L_=211,I_=212,N_=213,D_=214,ju=0,Xu=1,Zu=2,ka=3,qu=4,Yu=5,$u=6,Ku=7,Cm=0,U_=1,F_=2,xr=0,O_=1,k_=2,B_=3,z_=4,H_=5,G_=6,V_=7,Rm=300,Ba=301,za=302,Ju=303,Qu=304,Tl=306,ed=1e3,Xr=1001,td=1002,ci=1003,W_=1004,Xo=1005,_i=1006,fu=1007,Zr=1008,Gi=1009,Pm=1010,Lm=1011,Is=1012,Ud=1013,qr=1014,Bi=1015,Ns=1016,Fd=1017,Od=1018,Ha=1020,Im=35902,Nm=1021,Dm=1022,li=1023,Um=1024,Fm=1025,Fa=1026,Ga=1027,Om=1028,kd=1029,km=1030,Bd=1031,zd=1033,gl=33776,_l=33777,vl=33778,xl=33779,nd=35840,id=35841,rd=35842,ad=35843,sd=36196,od=37492,ld=37496,cd=37808,ud=37809,dd=37810,fd=37811,hd=37812,pd=37813,md=37814,gd=37815,_d=37816,vd=37817,xd=37818,yd=37819,Sd=37820,Md=37821,yl=36492,Ed=36494,Td=36495,Bm=36283,bd=36284,wd=36285,Ad=36286,j_=3200,X_=3201,Z_=0,q_=1,_r="",Xn="srgb",Wa="srgb-linear",bl="linear",At="srgb",ya=7680,wp=519,Y_=512,$_=513,K_=514,zm=515,J_=516,Q_=517,ev=518,tv=519,Ap=35044,Cp="300 es",zi=2e3,Ml=2001;class ja{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,f=o.length;c<f;c++)o[c].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hu=Math.PI/180,Cd=180/Math.PI;function Ds(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(un[a&255]+un[a>>8&255]+un[a>>16&255]+un[a>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[n&63|128]+un[n>>8&255]+"-"+un[n>>16&255]+un[n>>24&255]+un[r&255]+un[r>>8&255]+un[r>>16&255]+un[r>>24&255]).toLowerCase()}function An(a,e,n){return Math.max(e,Math.min(n,a))}function nv(a,e){return(a%e+e)%e}function pu(a,e,n){return(1-n)*a+n*e}function bs(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function wn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class Rt{constructor(e=0,n=0){Rt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(An(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*o+e.x,this.y=c*o+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,n,r,o,c,f,d,p,m){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,f,d,p,m)}set(e,n,r,o,c,f,d,p,m){const _=this.elements;return _[0]=e,_[1]=o,_[2]=d,_[3]=n,_[4]=c,_[5]=p,_[6]=r,_[7]=f,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],_=r[4],v=r[7],x=r[2],S=r[5],T=r[8],w=o[0],y=o[3],g=o[6],D=o[1],L=o[4],C=o[7],Y=o[2],z=o[5],k=o[8];return c[0]=f*w+d*D+p*Y,c[3]=f*y+d*L+p*z,c[6]=f*g+d*C+p*k,c[1]=m*w+_*D+v*Y,c[4]=m*y+_*L+v*z,c[7]=m*g+_*C+v*k,c[2]=x*w+S*D+T*Y,c[5]=x*y+S*L+T*z,c[8]=x*g+S*C+T*k,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8];return n*f*_-n*d*m-r*c*_+r*d*p+o*c*m-o*f*p}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8],v=_*f-d*m,x=d*p-_*c,S=m*c-f*p,T=n*v+r*x+o*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=v*w,e[1]=(o*m-_*r)*w,e[2]=(d*r-o*f)*w,e[3]=x*w,e[4]=(_*n-o*p)*w,e[5]=(o*c-d*n)*w,e[6]=S*w,e[7]=(r*p-m*n)*w,e[8]=(f*n-r*c)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,f,d){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*f+m*d)+f+e,-o*m,o*p,-o*(-m*f+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(mu.makeScale(e,n)),this}rotate(e){return this.premultiply(mu.makeRotation(-e)),this}translate(e,n){return this.premultiply(mu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mu=new st;function Hm(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function El(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function iv(){const a=El("canvas");return a.style.display="block",a}const Rp={};function Ps(a){a in Rp||(Rp[a]=!0,console.warn(a))}function rv(a,e,n){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}function av(a){const e=a.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function sv(a){const e=a.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const vt={enabled:!0,workingColorSpace:Wa,spaces:{},convert:function(a,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===At&&(a.r=Hi(a.r),a.g=Hi(a.g),a.b=Hi(a.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(a.applyMatrix3(this.spaces[e].toXYZ),a.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===At&&(a.r=Oa(a.r),a.g=Oa(a.g),a.b=Oa(a.b))),a},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===_r?bl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,e=this.workingColorSpace){return a.fromArray(this.spaces[e].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,e,n){return a.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}};function Hi(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Oa(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const Pp=[.64,.33,.3,.6,.15,.06],Lp=[.2126,.7152,.0722],Ip=[.3127,.329],Np=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dp=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);vt.define({[Wa]:{primaries:Pp,whitePoint:Ip,transfer:bl,toXYZ:Np,fromXYZ:Dp,luminanceCoefficients:Lp,workingColorSpaceConfig:{unpackColorSpace:Xn},outputColorSpaceConfig:{drawingBufferColorSpace:Xn}},[Xn]:{primaries:Pp,whitePoint:Ip,transfer:At,toXYZ:Np,fromXYZ:Dp,luminanceCoefficients:Lp,outputColorSpaceConfig:{drawingBufferColorSpace:Xn}}});let Sa;class ov{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Sa===void 0&&(Sa=El("canvas")),Sa.width=e.width,Sa.height=e.height;const r=Sa.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Sa}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=El("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let f=0;f<c.length;f++)c[f]=Hi(c[f]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Hi(n[r]/255)*255):n[r]=Hi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lv=0;class Gm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lv++}),this.uuid=Ds(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let f=0,d=o.length;f<d;f++)o[f].isDataTexture?c.push(gu(o[f].image)):c.push(gu(o[f]))}else c=gu(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function gu(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?ov.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cv=0;class Rn extends ja{constructor(e=Rn.DEFAULT_IMAGE,n=Rn.DEFAULT_MAPPING,r=Xr,o=Xr,c=_i,f=Zr,d=li,p=Gi,m=Rn.DEFAULT_ANISOTROPY,_=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cv++}),this.uuid=Ds(),this.name="",this.source=new Gm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ed:e.x=e.x-Math.floor(e.x);break;case Xr:e.x=e.x<0?0:1;break;case td:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ed:e.y=e.y-Math.floor(e.y);break;case Xr:e.y=e.y<0?0:1;break;case td:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Rm;Rn.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,n=0,r=0,o=1){zt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*o+f[12]*c,this.y=f[1]*n+f[5]*r+f[9]*o+f[13]*c,this.z=f[2]*n+f[6]*r+f[10]*o+f[14]*c,this.w=f[3]*n+f[7]*r+f[11]*o+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const p=e.elements,m=p[0],_=p[4],v=p[8],x=p[1],S=p[5],T=p[9],w=p[2],y=p[6],g=p[10];if(Math.abs(_-x)<.01&&Math.abs(v-w)<.01&&Math.abs(T-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(v+w)<.1&&Math.abs(T+y)<.1&&Math.abs(m+S+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(m+1)/2,C=(S+1)/2,Y=(g+1)/2,z=(_+x)/4,k=(v+w)/4,X=(T+y)/4;return L>C&&L>Y?L<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(L),o=z/r,c=k/r):C>Y?C<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(C),r=z/o,c=X/o):Y<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(Y),r=k/c,o=X/c),this.set(r,o,c,n),this}let D=Math.sqrt((y-T)*(y-T)+(v-w)*(v-w)+(x-_)*(x-_));return Math.abs(D)<.001&&(D=1),this.x=(y-T)/D,this.y=(v-w)/D,this.z=(x-_)/D,this.w=Math.acos((m+S+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uv extends ja{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new zt(0,0,e,n),this.scissorTest=!1,this.viewport=new zt(0,0,e,n);const o={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Rn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Gm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yr extends uv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Vm extends Rn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=ci,this.minFilter=ci,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class dv extends Rn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=ci,this.minFilter=ci,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Us{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,f,d){let p=r[o+0],m=r[o+1],_=r[o+2],v=r[o+3];const x=c[f+0],S=c[f+1],T=c[f+2],w=c[f+3];if(d===0){e[n+0]=p,e[n+1]=m,e[n+2]=_,e[n+3]=v;return}if(d===1){e[n+0]=x,e[n+1]=S,e[n+2]=T,e[n+3]=w;return}if(v!==w||p!==x||m!==S||_!==T){let y=1-d;const g=p*x+m*S+_*T+v*w,D=g>=0?1:-1,L=1-g*g;if(L>Number.EPSILON){const Y=Math.sqrt(L),z=Math.atan2(Y,g*D);y=Math.sin(y*z)/Y,d=Math.sin(d*z)/Y}const C=d*D;if(p=p*y+x*C,m=m*y+S*C,_=_*y+T*C,v=v*y+w*C,y===1-d){const Y=1/Math.sqrt(p*p+m*m+_*_+v*v);p*=Y,m*=Y,_*=Y,v*=Y}}e[n]=p,e[n+1]=m,e[n+2]=_,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,o,c,f){const d=r[o],p=r[o+1],m=r[o+2],_=r[o+3],v=c[f],x=c[f+1],S=c[f+2],T=c[f+3];return e[n]=d*T+_*v+p*S-m*x,e[n+1]=p*T+_*x+m*v-d*S,e[n+2]=m*T+_*S+d*x-p*v,e[n+3]=_*T-d*v-p*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(r/2),_=d(o/2),v=d(c/2),x=p(r/2),S=p(o/2),T=p(c/2);switch(f){case"XYZ":this._x=x*_*v+m*S*T,this._y=m*S*v-x*_*T,this._z=m*_*T+x*S*v,this._w=m*_*v-x*S*T;break;case"YXZ":this._x=x*_*v+m*S*T,this._y=m*S*v-x*_*T,this._z=m*_*T-x*S*v,this._w=m*_*v+x*S*T;break;case"ZXY":this._x=x*_*v-m*S*T,this._y=m*S*v+x*_*T,this._z=m*_*T+x*S*v,this._w=m*_*v-x*S*T;break;case"ZYX":this._x=x*_*v-m*S*T,this._y=m*S*v+x*_*T,this._z=m*_*T-x*S*v,this._w=m*_*v+x*S*T;break;case"YZX":this._x=x*_*v+m*S*T,this._y=m*S*v+x*_*T,this._z=m*_*T-x*S*v,this._w=m*_*v-x*S*T;break;case"XZY":this._x=x*_*v-m*S*T,this._y=m*S*v-x*_*T,this._z=m*_*T+x*S*v,this._w=m*_*v+x*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],f=n[1],d=n[5],p=n[9],m=n[2],_=n[6],v=n[10],x=r+d+v;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(_-p)*S,this._y=(c-m)*S,this._z=(f-o)*S}else if(r>d&&r>v){const S=2*Math.sqrt(1+r-d-v);this._w=(_-p)/S,this._x=.25*S,this._y=(o+f)/S,this._z=(c+m)/S}else if(d>v){const S=2*Math.sqrt(1+d-r-v);this._w=(c-m)/S,this._x=(o+f)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+v-r-d);this._w=(f-o)/S,this._x=(c+m)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(An(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,f=e._w,d=n._x,p=n._y,m=n._z,_=n._w;return this._x=r*_+f*d+o*m-c*p,this._y=o*_+f*p+c*d-r*m,this._z=c*_+f*m+r*p-o*d,this._w=f*_-r*d-o*p-c*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,o=this._y,c=this._z,f=this._w;let d=f*e._w+r*e._x+o*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=o,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-n;return this._w=S*f+n*this._w,this._x=S*r+n*this._x,this._y=S*o+n*this._y,this._z=S*c+n*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),v=Math.sin((1-n)*_)/m,x=Math.sin(n*_)/m;return this._w=f*v+this._w*x,this._x=r*v+this._x*x,this._y=o*v+this._y*x,this._z=c*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,n=0,r=0){ne.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Up.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Up.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,f=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*f,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*f,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*o-d*r),_=2*(d*n-c*o),v=2*(c*r-f*n);return this.x=n+p*m+f*v-d*_,this.y=r+p*_+d*m-c*v,this.z=o+p*v+c*_-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,f=n.x,d=n.y,p=n.z;return this.x=o*p-c*d,this.y=c*f-r*p,this.z=r*d-o*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return _u.copy(this).projectOnVector(e),this.sub(_u)}reflect(e){return this.sub(_u.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(An(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _u=new ne,Up=new Us;class Fs{constructor(e=new ne(1/0,1/0,1/0),n=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ri.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ri.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ri.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,ri):ri.fromBufferAttribute(c,f),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zo.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Zo.copy(r.boundingBox)),Zo.applyMatrix4(e.matrixWorld),this.union(Zo)}const o=e.children;for(let c=0,f=o.length;c<f;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ws),qo.subVectors(this.max,ws),Ma.subVectors(e.a,ws),Ea.subVectors(e.b,ws),Ta.subVectors(e.c,ws),dr.subVectors(Ea,Ma),fr.subVectors(Ta,Ea),Fr.subVectors(Ma,Ta);let n=[0,-dr.z,dr.y,0,-fr.z,fr.y,0,-Fr.z,Fr.y,dr.z,0,-dr.x,fr.z,0,-fr.x,Fr.z,0,-Fr.x,-dr.y,dr.x,0,-fr.y,fr.x,0,-Fr.y,Fr.x,0];return!vu(n,Ma,Ea,Ta,qo)||(n=[1,0,0,0,1,0,0,0,1],!vu(n,Ma,Ea,Ta,qo))?!1:(Yo.crossVectors(dr,fr),n=[Yo.x,Yo.y,Yo.z],vu(n,Ma,Ea,Ta,qo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ii=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],ri=new ne,Zo=new Fs,Ma=new ne,Ea=new ne,Ta=new ne,dr=new ne,fr=new ne,Fr=new ne,ws=new ne,qo=new ne,Yo=new ne,Or=new ne;function vu(a,e,n,r,o){for(let c=0,f=a.length-3;c<=f;c+=3){Or.fromArray(a,c);const d=o.x*Math.abs(Or.x)+o.y*Math.abs(Or.y)+o.z*Math.abs(Or.z),p=e.dot(Or),m=n.dot(Or),_=r.dot(Or);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const fv=new Fs,As=new ne,xu=new ne;class wl{constructor(e=new ne,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):fv.setFromPoints(e).getCenter(r);let o=0;for(let c=0,f=e.length;c<f;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;As.subVectors(e,this.center);const n=As.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(As,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(As.copy(e.center).add(xu)),this.expandByPoint(As.copy(e.center).sub(xu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ni=new ne,yu=new ne,$o=new ne,hr=new ne,Su=new ne,Ko=new ne,Mu=new ne;class Wm{constructor(e=new ne,n=new ne(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ni.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,n),Ni.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){yu.copy(e).add(n).multiplyScalar(.5),$o.copy(n).sub(e).normalize(),hr.copy(this.origin).sub(yu);const c=e.distanceTo(n)*.5,f=-this.direction.dot($o),d=hr.dot(this.direction),p=-hr.dot($o),m=hr.lengthSq(),_=Math.abs(1-f*f);let v,x,S,T;if(_>0)if(v=f*p-d,x=f*d-p,T=c*_,v>=0)if(x>=-T)if(x<=T){const w=1/_;v*=w,x*=w,S=v*(v+f*x+2*d)+x*(f*v+x+2*p)+m}else x=c,v=Math.max(0,-(f*x+d)),S=-v*v+x*(x+2*p)+m;else x=-c,v=Math.max(0,-(f*x+d)),S=-v*v+x*(x+2*p)+m;else x<=-T?(v=Math.max(0,-(-f*c+d)),x=v>0?-c:Math.min(Math.max(-c,-p),c),S=-v*v+x*(x+2*p)+m):x<=T?(v=0,x=Math.min(Math.max(-c,-p),c),S=x*(x+2*p)+m):(v=Math.max(0,-(f*c+d)),x=v>0?c:Math.min(Math.max(-c,-p),c),S=-v*v+x*(x+2*p)+m);else x=f>0?-c:c,v=Math.max(0,-(f*x+d)),S=-v*v+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(yu).addScaledVector($o,x),S}intersectSphere(e,n){Ni.subVectors(e.center,this.origin);const r=Ni.dot(this.direction),o=Ni.dot(Ni)-r*r,c=e.radius*e.radius;if(o>c)return null;const f=Math.sqrt(c-o),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,f,d,p;const m=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,o=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,o=(e.min.x-x.x)*m),_>=0?(c=(e.min.y-x.y)*_,f=(e.max.y-x.y)*_):(c=(e.max.y-x.y)*_,f=(e.min.y-x.y)*_),r>f||c>o||((c>r||isNaN(r))&&(r=c),(f<o||isNaN(o))&&(o=f),v>=0?(d=(e.min.z-x.z)*v,p=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,p=(e.min.z-x.z)*v),r>p||d>o)||((d>r||r!==r)&&(r=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,n,r,o,c){Su.subVectors(n,e),Ko.subVectors(r,e),Mu.crossVectors(Su,Ko);let f=this.direction.dot(Mu),d;if(f>0){if(o)return null;d=1}else if(f<0)d=-1,f=-f;else return null;hr.subVectors(this.origin,e);const p=d*this.direction.dot(Ko.crossVectors(hr,Ko));if(p<0)return null;const m=d*this.direction.dot(Su.cross(hr));if(m<0||p+m>f)return null;const _=-d*hr.dot(Mu);return _<0?null:this.at(_/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,n,r,o,c,f,d,p,m,_,v,x,S,T,w,y){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,f,d,p,m,_,v,x,S,T,w,y)}set(e,n,r,o,c,f,d,p,m,_,v,x,S,T,w,y){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=o,g[1]=c,g[5]=f,g[9]=d,g[13]=p,g[2]=m,g[6]=_,g[10]=v,g[14]=x,g[3]=S,g[7]=T,g[11]=w,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,o=1/ba.setFromMatrixColumn(e,0).length(),c=1/ba.setFromMatrixColumn(e,1).length(),f=1/ba.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(o),m=Math.sin(o),_=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const x=f*_,S=f*v,T=d*_,w=d*v;n[0]=p*_,n[4]=-p*v,n[8]=m,n[1]=S+T*m,n[5]=x-w*m,n[9]=-d*p,n[2]=w-x*m,n[6]=T+S*m,n[10]=f*p}else if(e.order==="YXZ"){const x=p*_,S=p*v,T=m*_,w=m*v;n[0]=x+w*d,n[4]=T*d-S,n[8]=f*m,n[1]=f*v,n[5]=f*_,n[9]=-d,n[2]=S*d-T,n[6]=w+x*d,n[10]=f*p}else if(e.order==="ZXY"){const x=p*_,S=p*v,T=m*_,w=m*v;n[0]=x-w*d,n[4]=-f*v,n[8]=T+S*d,n[1]=S+T*d,n[5]=f*_,n[9]=w-x*d,n[2]=-f*m,n[6]=d,n[10]=f*p}else if(e.order==="ZYX"){const x=f*_,S=f*v,T=d*_,w=d*v;n[0]=p*_,n[4]=T*m-S,n[8]=x*m+w,n[1]=p*v,n[5]=w*m+x,n[9]=S*m-T,n[2]=-m,n[6]=d*p,n[10]=f*p}else if(e.order==="YZX"){const x=f*p,S=f*m,T=d*p,w=d*m;n[0]=p*_,n[4]=w-x*v,n[8]=T*v+S,n[1]=v,n[5]=f*_,n[9]=-d*_,n[2]=-m*_,n[6]=S*v+T,n[10]=x-w*v}else if(e.order==="XZY"){const x=f*p,S=f*m,T=d*p,w=d*m;n[0]=p*_,n[4]=-v,n[8]=m*_,n[1]=x*v+w,n[5]=f*_,n[9]=S*v-T,n[2]=T*v-S,n[6]=d*_,n[10]=w*v+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hv,e,pv)}lookAt(e,n,r){const o=this.elements;return Un.subVectors(e,n),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),pr.crossVectors(r,Un),pr.lengthSq()===0&&(Math.abs(r.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),pr.crossVectors(r,Un)),pr.normalize(),Jo.crossVectors(Un,pr),o[0]=pr.x,o[4]=Jo.x,o[8]=Un.x,o[1]=pr.y,o[5]=Jo.y,o[9]=Un.y,o[2]=pr.z,o[6]=Jo.z,o[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],_=r[1],v=r[5],x=r[9],S=r[13],T=r[2],w=r[6],y=r[10],g=r[14],D=r[3],L=r[7],C=r[11],Y=r[15],z=o[0],k=o[4],X=o[8],R=o[12],A=o[1],F=o[5],ae=o[9],J=o[13],ue=o[2],pe=o[6],oe=o[10],le=o[14],B=o[3],ce=o[7],se=o[11],U=o[15];return c[0]=f*z+d*A+p*ue+m*B,c[4]=f*k+d*F+p*pe+m*ce,c[8]=f*X+d*ae+p*oe+m*se,c[12]=f*R+d*J+p*le+m*U,c[1]=_*z+v*A+x*ue+S*B,c[5]=_*k+v*F+x*pe+S*ce,c[9]=_*X+v*ae+x*oe+S*se,c[13]=_*R+v*J+x*le+S*U,c[2]=T*z+w*A+y*ue+g*B,c[6]=T*k+w*F+y*pe+g*ce,c[10]=T*X+w*ae+y*oe+g*se,c[14]=T*R+w*J+y*le+g*U,c[3]=D*z+L*A+C*ue+Y*B,c[7]=D*k+L*F+C*pe+Y*ce,c[11]=D*X+L*ae+C*oe+Y*se,c[15]=D*R+L*J+C*le+Y*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],f=e[1],d=e[5],p=e[9],m=e[13],_=e[2],v=e[6],x=e[10],S=e[14],T=e[3],w=e[7],y=e[11],g=e[15];return T*(+c*p*v-o*m*v-c*d*x+r*m*x+o*d*S-r*p*S)+w*(+n*p*S-n*m*x+c*f*x-o*f*S+o*m*_-c*p*_)+y*(+n*m*v-n*d*S-c*f*v+r*f*S+c*d*_-r*m*_)+g*(-o*d*_-n*p*v+n*d*x+o*f*v-r*f*x+r*p*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8],v=e[9],x=e[10],S=e[11],T=e[12],w=e[13],y=e[14],g=e[15],D=v*y*m-w*x*m+w*p*S-d*y*S-v*p*g+d*x*g,L=T*x*m-_*y*m-T*p*S+f*y*S+_*p*g-f*x*g,C=_*w*m-T*v*m+T*d*S-f*w*S-_*d*g+f*v*g,Y=T*v*p-_*w*p-T*d*x+f*w*x+_*d*y-f*v*y,z=n*D+r*L+o*C+c*Y;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/z;return e[0]=D*k,e[1]=(w*x*c-v*y*c-w*o*S+r*y*S+v*o*g-r*x*g)*k,e[2]=(d*y*c-w*p*c+w*o*m-r*y*m-d*o*g+r*p*g)*k,e[3]=(v*p*c-d*x*c-v*o*m+r*x*m+d*o*S-r*p*S)*k,e[4]=L*k,e[5]=(_*y*c-T*x*c+T*o*S-n*y*S-_*o*g+n*x*g)*k,e[6]=(T*p*c-f*y*c-T*o*m+n*y*m+f*o*g-n*p*g)*k,e[7]=(f*x*c-_*p*c+_*o*m-n*x*m-f*o*S+n*p*S)*k,e[8]=C*k,e[9]=(T*v*c-_*w*c-T*r*S+n*w*S+_*r*g-n*v*g)*k,e[10]=(f*w*c-T*d*c+T*r*m-n*w*m-f*r*g+n*d*g)*k,e[11]=(_*d*c-f*v*c-_*r*m+n*v*m+f*r*S-n*d*S)*k,e[12]=Y*k,e[13]=(_*w*o-T*v*o+T*r*x-n*w*x-_*r*y+n*v*y)*k,e[14]=(T*d*o-f*w*o-T*r*p+n*w*p+f*r*y-n*d*y)*k,e[15]=(f*v*o-_*d*o+_*r*p-n*v*p-f*r*x+n*d*x)*k,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,f=e.x,d=e.y,p=e.z,m=c*f,_=c*d;return this.set(m*f+r,m*d-o*p,m*p+o*d,0,m*d+o*p,_*d+r,_*p-o*f,0,m*p-o*d,_*p+o*f,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,f){return this.set(1,r,c,0,e,1,f,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,f=n._y,d=n._z,p=n._w,m=c+c,_=f+f,v=d+d,x=c*m,S=c*_,T=c*v,w=f*_,y=f*v,g=d*v,D=p*m,L=p*_,C=p*v,Y=r.x,z=r.y,k=r.z;return o[0]=(1-(w+g))*Y,o[1]=(S+C)*Y,o[2]=(T-L)*Y,o[3]=0,o[4]=(S-C)*z,o[5]=(1-(x+g))*z,o[6]=(y+D)*z,o[7]=0,o[8]=(T+L)*k,o[9]=(y-D)*k,o[10]=(1-(x+w))*k,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;let c=ba.set(o[0],o[1],o[2]).length();const f=ba.set(o[4],o[5],o[6]).length(),d=ba.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],ai.copy(this);const m=1/c,_=1/f,v=1/d;return ai.elements[0]*=m,ai.elements[1]*=m,ai.elements[2]*=m,ai.elements[4]*=_,ai.elements[5]*=_,ai.elements[6]*=_,ai.elements[8]*=v,ai.elements[9]*=v,ai.elements[10]*=v,n.setFromRotationMatrix(ai),r.x=c,r.y=f,r.z=d,this}makePerspective(e,n,r,o,c,f,d=zi){const p=this.elements,m=2*c/(n-e),_=2*c/(r-o),v=(n+e)/(n-e),x=(r+o)/(r-o);let S,T;if(d===zi)S=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(d===Ml)S=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,o,c,f,d=zi){const p=this.elements,m=1/(n-e),_=1/(r-o),v=1/(f-c),x=(n+e)*m,S=(r+o)*_;let T,w;if(d===zi)T=(f+c)*v,w=-2*v;else if(d===Ml)T=c*v,w=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=w,p[14]=-T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const ba=new ne,ai=new Ht,hv=new ne(0,0,0),pv=new ne(1,1,1),pr=new ne,Jo=new ne,Un=new ne,Fp=new Ht,Op=new Us;class Vi{constructor(e=0,n=0,r=0,o=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],f=o[4],d=o[8],p=o[1],m=o[5],_=o[9],v=o[2],x=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(An(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-An(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(An(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-An(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(An(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-An(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Fp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Op.setFromEuler(this),this.setFromQuaternion(Op,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class jm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mv=0;const kp=new ne,wa=new Us,Di=new Ht,Qo=new ne,Cs=new ne,gv=new ne,_v=new Us,Bp=new ne(1,0,0),zp=new ne(0,1,0),Hp=new ne(0,0,1),Gp={type:"added"},vv={type:"removed"},Aa={type:"childadded",child:null},Eu={type:"childremoved",child:null};class Pn extends ja{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mv++}),this.uuid=Ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const e=new ne,n=new Vi,r=new Us,o=new ne(1,1,1);function c(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Ht},normalMatrix:{value:new st}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return wa.setFromAxisAngle(e,n),this.quaternion.multiply(wa),this}rotateOnWorldAxis(e,n){return wa.setFromAxisAngle(e,n),this.quaternion.premultiply(wa),this}rotateX(e){return this.rotateOnAxis(Bp,e)}rotateY(e){return this.rotateOnAxis(zp,e)}rotateZ(e){return this.rotateOnAxis(Hp,e)}translateOnAxis(e,n){return kp.copy(e).applyQuaternion(this.quaternion),this.position.add(kp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Bp,e)}translateY(e){return this.translateOnAxis(zp,e)}translateZ(e){return this.translateOnAxis(Hp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Qo.copy(e):Qo.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(Cs,Qo,this.up):Di.lookAt(Qo,Cs,this.up),this.quaternion.setFromRotationMatrix(Di),o&&(Di.extractRotation(o.matrixWorld),wa.setFromRotationMatrix(Di),this.quaternion.premultiply(wa.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gp),Aa.child=e,this.dispatchEvent(Aa),Aa.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(vv),Eu.child=e,this.dispatchEvent(Eu),Eu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gp),Aa.child=e,this.dispatchEvent(Aa),Aa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,e,gv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,_v,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const v=p[m];c(e.shapes,v)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(e.materials,this.material[p]));o.material=d}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(c(e.animations,p))}}if(n){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),_=f(e.images),v=f(e.shapes),x=f(e.skeletons),S=f(e.animations),T=f(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=o,r;function f(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Pn.DEFAULT_UP=new ne(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new ne,Ui=new ne,Tu=new ne,Fi=new ne,Ca=new ne,Ra=new ne,Vp=new ne,bu=new ne,wu=new ne,Au=new ne,Cu=new zt,Ru=new zt,Pu=new zt;class oi{constructor(e=new ne,n=new ne,r=new ne){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),si.subVectors(e,n),o.cross(si);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){si.subVectors(o,n),Ui.subVectors(r,n),Tu.subVectors(e,n);const f=si.dot(si),d=si.dot(Ui),p=si.dot(Tu),m=Ui.dot(Ui),_=Ui.dot(Tu),v=f*m-d*d;if(v===0)return c.set(0,0,0),null;const x=1/v,S=(m*p-d*_)*x,T=(f*_-d*p)*x;return c.set(1-S-T,T,S)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,n,r,o,c,f,d,p){return this.getBarycoord(e,n,r,o,Fi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Fi.x),p.addScaledVector(f,Fi.y),p.addScaledVector(d,Fi.z),p)}static getInterpolatedAttribute(e,n,r,o,c,f){return Cu.setScalar(0),Ru.setScalar(0),Pu.setScalar(0),Cu.fromBufferAttribute(e,n),Ru.fromBufferAttribute(e,r),Pu.fromBufferAttribute(e,o),f.setScalar(0),f.addScaledVector(Cu,c.x),f.addScaledVector(Ru,c.y),f.addScaledVector(Pu,c.z),f}static isFrontFacing(e,n,r,o){return si.subVectors(r,n),Ui.subVectors(e,n),si.cross(Ui).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),si.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return oi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return oi.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let f,d;Ca.subVectors(o,r),Ra.subVectors(c,r),bu.subVectors(e,r);const p=Ca.dot(bu),m=Ra.dot(bu);if(p<=0&&m<=0)return n.copy(r);wu.subVectors(e,o);const _=Ca.dot(wu),v=Ra.dot(wu);if(_>=0&&v<=_)return n.copy(o);const x=p*v-_*m;if(x<=0&&p>=0&&_<=0)return f=p/(p-_),n.copy(r).addScaledVector(Ca,f);Au.subVectors(e,c);const S=Ca.dot(Au),T=Ra.dot(Au);if(T>=0&&S<=T)return n.copy(c);const w=S*m-p*T;if(w<=0&&m>=0&&T<=0)return d=m/(m-T),n.copy(r).addScaledVector(Ra,d);const y=_*T-S*v;if(y<=0&&v-_>=0&&S-T>=0)return Vp.subVectors(c,o),d=(v-_)/(v-_+(S-T)),n.copy(o).addScaledVector(Vp,d);const g=1/(y+w+x);return f=w*g,d=x*g,n.copy(r).addScaledVector(Ca,f).addScaledVector(Ra,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},el={h:0,s:0,l:0};function Lu(a,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(e-a)*6*n:n<1/2?e:n<2/3?a+(e-a)*6*(2/3-n):a}class xt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,o=vt.workingColorSpace){return this.r=e,this.g=n,this.b=r,vt.toWorkingColorSpace(this,o),this}setHSL(e,n,r,o=vt.workingColorSpace){if(e=nv(e,1),n=An(n,0,1),r=An(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,f=2*r-c;this.r=Lu(f,c,e+1/3),this.g=Lu(f,c,e),this.b=Lu(f,c,e-1/3)}return vt.toWorkingColorSpace(this,o),this}setStyle(e,n=Xn){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=o[1],d=o[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Xn){const r=Xm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=Oa(e.r),this.g=Oa(e.g),this.b=Oa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xn){return vt.fromWorkingColorSpace(dn.copy(this),e),Math.round(An(dn.r*255,0,255))*65536+Math.round(An(dn.g*255,0,255))*256+Math.round(An(dn.b*255,0,255))}getHexString(e=Xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=vt.workingColorSpace){vt.fromWorkingColorSpace(dn.copy(this),n);const r=dn.r,o=dn.g,c=dn.b,f=Math.max(r,o,c),d=Math.min(r,o,c);let p,m;const _=(d+f)/2;if(d===f)p=0,m=0;else{const v=f-d;switch(m=_<=.5?v/(f+d):v/(2-f-d),f){case r:p=(o-c)/v+(o<c?6:0);break;case o:p=(c-r)/v+2;break;case c:p=(r-o)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,n=vt.workingColorSpace){return vt.fromWorkingColorSpace(dn.copy(this),n),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=Xn){vt.fromWorkingColorSpace(dn.copy(this),e);const n=dn.r,r=dn.g,o=dn.b;return e!==Xn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(mr),this.setHSL(mr.h+e,mr.s+n,mr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(mr),e.getHSL(el);const r=pu(mr.h,el.h,n),o=pu(mr.s,el.s,n),c=pu(mr.l,el.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new xt;xt.NAMES=Xm;let xv=0;class Os extends ja{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xv++}),this.uuid=Ds(),this.name="",this.blending=Ua,this.side=yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vu,this.blendDst=Wu,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=ka,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ya,this.stencilZFail=ya,this.stencilZPass=ya,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ua&&(r.blending=this.blending),this.side!==yr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Vu&&(r.blendSrc=this.blendSrc),this.blendDst!==Wu&&(r.blendDst=this.blendDst),this.blendEquation!==Wr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ka&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ya&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ya&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ya&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}if(n){const c=o(e.textures),f=o(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Hd extends Os{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=Cm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new ne,tl=new Rt;class Yn{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Ap,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)tl.fromBufferAttribute(this,n),tl.applyMatrix3(e),this.setXY(n,tl.x,tl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix3(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix4(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Vt.fromBufferAttribute(this,n),Vt.applyNormalMatrix(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Vt.fromBufferAttribute(this,n),Vt.transformDirection(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=bs(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=wn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=bs(n,this.array)),n}setX(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=bs(n,this.array)),n}setY(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=bs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=bs(n,this.array)),n}setW(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=wn(n,this.array),r=wn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=wn(n,this.array),r=wn(r,this.array),o=wn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=wn(n,this.array),r=wn(r,this.array),o=wn(o,this.array),c=wn(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ap&&(e.usage=this.usage),e}}class Zm extends Yn{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class qm extends Yn{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class xi extends Yn{constructor(e,n,r){super(new Float32Array(e),n,r)}}let yv=0;const jn=new Ht,Iu=new Pn,Pa=new ne,Fn=new Fs,Rs=new Fs,en=new ne;class yi extends ja{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yv++}),this.uuid=Ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hm(e)?qm:Zm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new st().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,n,r){return jn.makeTranslation(e,n,r),this.applyMatrix4(jn),this}scale(e,n,r){return jn.makeScale(e,n,r),this.applyMatrix4(jn),this}lookAt(e){return Iu.lookAt(e),Iu.updateMatrix(),this.applyMatrix4(Iu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pa).negate(),this.translate(Pa.x,Pa.y,Pa.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const f=e[o];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new xi(r,3))}else{for(let r=0,o=n.count;r<o;r++){const c=e[r];n.setXYZ(r,c.x,c.y,c.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];Fn.setFromBufferAttribute(c),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const r=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),n)for(let c=0,f=n.length;c<f;c++){const d=n[c];Rs.setFromBufferAttribute(d),this.morphTargetsRelative?(en.addVectors(Fn.min,Rs.min),Fn.expandByPoint(en),en.addVectors(Fn.max,Rs.max),Fn.expandByPoint(en)):(Fn.expandByPoint(Rs.min),Fn.expandByPoint(Rs.max))}Fn.getCenter(r);let o=0;for(let c=0,f=e.count;c<f;c++)en.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(en));if(n)for(let c=0,f=n.length;c<f;c++){const d=n[c],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)en.fromBufferAttribute(d,m),p&&(Pa.fromBufferAttribute(e,m),en.add(Pa)),o=Math.max(o,r.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let X=0;X<r.count;X++)d[X]=new ne,p[X]=new ne;const m=new ne,_=new ne,v=new ne,x=new Rt,S=new Rt,T=new Rt,w=new ne,y=new ne;function g(X,R,A){m.fromBufferAttribute(r,X),_.fromBufferAttribute(r,R),v.fromBufferAttribute(r,A),x.fromBufferAttribute(c,X),S.fromBufferAttribute(c,R),T.fromBufferAttribute(c,A),_.sub(m),v.sub(m),S.sub(x),T.sub(x);const F=1/(S.x*T.y-T.x*S.y);isFinite(F)&&(w.copy(_).multiplyScalar(T.y).addScaledVector(v,-S.y).multiplyScalar(F),y.copy(v).multiplyScalar(S.x).addScaledVector(_,-T.x).multiplyScalar(F),d[X].add(w),d[R].add(w),d[A].add(w),p[X].add(y),p[R].add(y),p[A].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let X=0,R=D.length;X<R;++X){const A=D[X],F=A.start,ae=A.count;for(let J=F,ue=F+ae;J<ue;J+=3)g(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const L=new ne,C=new ne,Y=new ne,z=new ne;function k(X){Y.fromBufferAttribute(o,X),z.copy(Y);const R=d[X];L.copy(R),L.sub(Y.multiplyScalar(Y.dot(R))).normalize(),C.crossVectors(z,R);const F=C.dot(p[X])<0?-1:1;f.setXYZW(X,L.x,L.y,L.z,F)}for(let X=0,R=D.length;X<R;++X){const A=D[X],F=A.start,ae=A.count;for(let J=F,ue=F+ae;J<ue;J+=3)k(e.getX(J+0)),k(e.getX(J+1)),k(e.getX(J+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Yn(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const o=new ne,c=new ne,f=new ne,d=new ne,p=new ne,m=new ne,_=new ne,v=new ne;if(e)for(let x=0,S=e.count;x<S;x+=3){const T=e.getX(x+0),w=e.getX(x+1),y=e.getX(x+2);o.fromBufferAttribute(n,T),c.fromBufferAttribute(n,w),f.fromBufferAttribute(n,y),_.subVectors(f,c),v.subVectors(o,c),_.cross(v),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,w),m.fromBufferAttribute(r,y),d.add(_),p.add(_),m.add(_),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(w,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,S=n.count;x<S;x+=3)o.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),_.subVectors(f,c),v.subVectors(o,c),_.cross(v),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)en.fromBufferAttribute(e,n),en.normalize(),e.setXYZ(n,en.x,en.y,en.z)}toNonIndexed(){function e(d,p){const m=d.array,_=d.itemSize,v=d.normalized,x=new m.constructor(p.length*_);let S=0,T=0;for(let w=0,y=p.length;w<y;w++){d.isInterleavedBufferAttribute?S=p[w]*d.data.stride+d.offset:S=p[w]*_;for(let g=0;g<_;g++)x[T++]=m[S++]}return new Yn(x,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new yi,r=this.index.array,o=this.attributes;for(const d in o){const p=o[d],m=e(p,r);n.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let _=0,v=m.length;_<v;_++){const x=m[_],S=e(x,r);p.push(S)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let v=0,x=m.length;v<x;v++){const S=m[v];_.push(S.toJSON(e.data))}_.length>0&&(o[p]=_,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const o=e.attributes;for(const m in o){const _=o[m];this.setAttribute(m,_.clone(n))}const c=e.morphAttributes;for(const m in c){const _=[],v=c[m];for(let x=0,S=v.length;x<S;x++)_.push(v[x].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,_=f.length;m<_;m++){const v=f[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wp=new Ht,kr=new Wm,nl=new wl,jp=new ne,il=new ne,rl=new ne,al=new ne,Nu=new ne,sl=new ne,Xp=new ne,ol=new ne;class vi extends Pn{constructor(e=new yi,n=new Hd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(c&&d){sl.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const _=d[p],v=c[p];_!==0&&(Nu.fromBufferAttribute(v,e),f?sl.addScaledVector(Nu,_):sl.addScaledVector(Nu.sub(n),_))}n.add(sl)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),nl.copy(r.boundingSphere),nl.applyMatrix4(c),kr.copy(e.ray).recast(e.near),!(nl.containsPoint(kr.origin)===!1&&(kr.intersectSphere(nl,jp)===null||kr.origin.distanceToSquared(jp)>(e.far-e.near)**2))&&(Wp.copy(c).invert(),kr.copy(e.ray).applyMatrix4(Wp),!(r.boundingBox!==null&&kr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,kr)))}_computeIntersections(e,n,r){let o;const c=this.geometry,f=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,x=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(f))for(let T=0,w=x.length;T<w;T++){const y=x[T],g=f[y.materialIndex],D=Math.max(y.start,S.start),L=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let C=D,Y=L;C<Y;C+=3){const z=d.getX(C),k=d.getX(C+1),X=d.getX(C+2);o=ll(this,g,e,r,m,_,v,z,k,X),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const T=Math.max(0,S.start),w=Math.min(d.count,S.start+S.count);for(let y=T,g=w;y<g;y+=3){const D=d.getX(y),L=d.getX(y+1),C=d.getX(y+2);o=ll(this,f,e,r,m,_,v,D,L,C),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(f))for(let T=0,w=x.length;T<w;T++){const y=x[T],g=f[y.materialIndex],D=Math.max(y.start,S.start),L=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let C=D,Y=L;C<Y;C+=3){const z=C,k=C+1,X=C+2;o=ll(this,g,e,r,m,_,v,z,k,X),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const T=Math.max(0,S.start),w=Math.min(p.count,S.start+S.count);for(let y=T,g=w;y<g;y+=3){const D=y,L=y+1,C=y+2;o=ll(this,f,e,r,m,_,v,D,L,C),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}}function Sv(a,e,n,r,o,c,f,d){let p;if(e.side===Cn?p=r.intersectTriangle(f,c,o,!0,d):p=r.intersectTriangle(o,c,f,e.side===yr,d),p===null)return null;ol.copy(d),ol.applyMatrix4(a.matrixWorld);const m=n.ray.origin.distanceTo(ol);return m<n.near||m>n.far?null:{distance:m,point:ol.clone(),object:a}}function ll(a,e,n,r,o,c,f,d,p,m){a.getVertexPosition(d,il),a.getVertexPosition(p,rl),a.getVertexPosition(m,al);const _=Sv(a,e,n,r,il,rl,al,Xp);if(_){const v=new ne;oi.getBarycoord(Xp,il,rl,al,v),o&&(_.uv=oi.getInterpolatedAttribute(o,d,p,m,v,new Rt)),c&&(_.uv1=oi.getInterpolatedAttribute(c,d,p,m,v,new Rt)),f&&(_.normal=oi.getInterpolatedAttribute(f,d,p,m,v,new ne),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new ne,materialIndex:0};oi.getNormal(il,rl,al,x.normal),_.face=x,_.barycoord=v}return _}class ks extends yi{constructor(e=1,n=1,r=1,o=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:f};const d=this;o=Math.floor(o),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],_=[],v=[];let x=0,S=0;T("z","y","x",-1,-1,r,n,e,f,c,0),T("z","y","x",1,-1,r,n,-e,f,c,1),T("x","z","y",1,1,e,r,n,o,f,2),T("x","z","y",1,-1,e,r,-n,o,f,3),T("x","y","z",1,-1,e,n,r,o,c,4),T("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(p),this.setAttribute("position",new xi(m,3)),this.setAttribute("normal",new xi(_,3)),this.setAttribute("uv",new xi(v,2));function T(w,y,g,D,L,C,Y,z,k,X,R){const A=C/k,F=Y/X,ae=C/2,J=Y/2,ue=z/2,pe=k+1,oe=X+1;let le=0,B=0;const ce=new ne;for(let se=0;se<oe;se++){const U=se*F-J;for(let ie=0;ie<pe;ie++){const Ne=ie*A-ae;ce[w]=Ne*D,ce[y]=U*L,ce[g]=ue,m.push(ce.x,ce.y,ce.z),ce[w]=0,ce[y]=0,ce[g]=z>0?1:-1,_.push(ce.x,ce.y,ce.z),v.push(ie/k),v.push(1-se/X),le+=1}}for(let se=0;se<X;se++)for(let U=0;U<k;U++){const ie=x+U+pe*se,Ne=x+U+pe*(se+1),K=x+(U+1)+pe*(se+1),de=x+(U+1)+pe*se;p.push(ie,Ne,de),p.push(Ne,K,de),B+=6}d.addGroup(S,B,R),S+=B,x+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ks(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Va(a){const e={};for(const n in a){e[n]={};for(const r in a[n]){const o=a[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function _n(a){const e={};for(let n=0;n<a.length;n++){const r=Va(a[n]);for(const o in r)e[o]=r[o]}return e}function Mv(a){const e=[];for(let n=0;n<a.length;n++)e.push(a[n].clone());return e}function Ym(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const Ev={clone:Va,merge:_n};var Tv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sr extends Os{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tv,this.fragmentShader=bv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Va(e.uniforms),this.uniformsGroups=Mv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const f=this.uniforms[o].value;f&&f.isTexture?n.uniforms[o]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[o]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[o]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[o]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[o]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[o]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[o]={type:"m4",value:f.toArray()}:n.uniforms[o]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class $m extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=zi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gr=new ne,Zp=new Rt,qp=new Rt;class Zn extends $m{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Cd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cd*2*Math.atan(Math.tan(hu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gr.x,gr.y).multiplyScalar(-e/gr.z),gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(gr.x,gr.y).multiplyScalar(-e/gr.z)}getViewSize(e,n){return this.getViewBounds(e,Zp,qp),n.subVectors(qp,Zp)}setViewOffset(e,n,r,o,c,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(hu*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*o/p,n-=f.offsetY*r/m,o*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const La=-90,Ia=1;class wv extends Pn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Zn(La,Ia,e,n);o.layers=this.layers,this.add(o);const c=new Zn(La,Ia,e,n);c.layers=this.layers,this.add(c);const f=new Zn(La,Ia,e,n);f.layers=this.layers,this.add(f);const d=new Zn(La,Ia,e,n);d.layers=this.layers,this.add(d);const p=new Zn(La,Ia,e,n);p.layers=this.layers,this.add(p);const m=new Zn(La,Ia,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,f,d,p]=n;for(const m of n)this.remove(m);if(e===zi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Ml)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,p,m,_]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,c),e.setRenderTarget(r,1,o),e.render(n,f),e.setRenderTarget(r,2,o),e.render(n,d),e.setRenderTarget(r,3,o),e.render(n,p),e.setRenderTarget(r,4,o),e.render(n,m),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,o),e.render(n,_),e.setRenderTarget(v,x,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Km extends Rn{constructor(e,n,r,o,c,f,d,p,m,_){e=e!==void 0?e:[],n=n!==void 0?n:Ba,super(e,n,r,o,c,f,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Av extends Yr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Km(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:_i}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new ks(5,5,5),c=new Sr({name:"CubemapFromEquirect",uniforms:Va(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Cn,blending:vr});c.uniforms.tEquirect.value=n;const f=new vi(o,c),d=n.minFilter;return n.minFilter===Zr&&(n.minFilter=_i),new wv(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n,r,o){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,o);e.setRenderTarget(c)}}const Du=new ne,Cv=new ne,Rv=new st;class Gr{constructor(e=new ne(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Du.subVectors(r,n).cross(Cv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Du),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Rv.getNormalMatrix(e),o=this.coplanarPoint(Du).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new wl,cl=new ne;class Jm{constructor(e=new Gr,n=new Gr,r=new Gr,o=new Gr,c=new Gr,f=new Gr){this.planes=[e,n,r,o,c,f]}set(e,n,r,o,c,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(o),d[4].copy(c),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=zi){const r=this.planes,o=e.elements,c=o[0],f=o[1],d=o[2],p=o[3],m=o[4],_=o[5],v=o[6],x=o[7],S=o[8],T=o[9],w=o[10],y=o[11],g=o[12],D=o[13],L=o[14],C=o[15];if(r[0].setComponents(p-c,x-m,y-S,C-g).normalize(),r[1].setComponents(p+c,x+m,y+S,C+g).normalize(),r[2].setComponents(p+f,x+_,y+T,C+D).normalize(),r[3].setComponents(p-f,x-_,y-T,C-D).normalize(),r[4].setComponents(p-d,x-v,y-w,C-L).normalize(),n===zi)r[5].setComponents(p+d,x+v,y+w,C+L).normalize();else if(n===Ml)r[5].setComponents(d,v,w,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){return Br.center.set(0,0,0),Br.radius=.7071067811865476,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(cl.x=o.normal.x>0?e.max.x:e.min.x,cl.y=o.normal.y>0?e.max.y:e.min.y,cl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(cl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qm(){let a=null,e=!1,n=null,r=null;function o(c,f){n(c,f),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){a=c}}}function Pv(a){const e=new WeakMap;function n(d,p){const m=d.array,_=d.usage,v=m.byteLength,x=a.createBuffer();a.bindBuffer(p,x),a.bufferData(p,m,_),d.onUploadCallback();let S;if(m instanceof Float32Array)S=a.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=a.HALF_FLOAT:S=a.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=a.SHORT;else if(m instanceof Uint32Array)S=a.UNSIGNED_INT;else if(m instanceof Int32Array)S=a.INT;else if(m instanceof Int8Array)S=a.BYTE;else if(m instanceof Uint8Array)S=a.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,p,m){const _=p.array,v=p.updateRanges;if(a.bindBuffer(m,d),v.length===0)a.bufferSubData(m,0,_);else{v.sort((S,T)=>S.start-T.start);let x=0;for(let S=1;S<v.length;S++){const T=v[x],w=v[S];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++x,v[x]=w)}v.length=x+1;for(let S=0,T=v.length;S<T;S++){const w=v[S];a.bufferSubData(m,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(a.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:o,remove:c,update:f}}class Al extends yi{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,f=n/2,d=Math.floor(r),p=Math.floor(o),m=d+1,_=p+1,v=e/d,x=n/p,S=[],T=[],w=[],y=[];for(let g=0;g<_;g++){const D=g*x-f;for(let L=0;L<m;L++){const C=L*v-c;T.push(C,-D,0),w.push(0,0,1),y.push(L/d),y.push(1-g/p)}}for(let g=0;g<p;g++)for(let D=0;D<d;D++){const L=D+m*g,C=D+m*(g+1),Y=D+1+m*(g+1),z=D+1+m*g;S.push(L,C,z),S.push(C,Y,z)}this.setIndex(S),this.setAttribute("position",new xi(T,3)),this.setAttribute("normal",new xi(w,3)),this.setAttribute("uv",new xi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Al(e.width,e.height,e.widthSegments,e.heightSegments)}}var Lv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Iv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Nv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ov=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Wv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$v=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ex=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ix=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ax=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ox="gl_FragColor = linearToOutputTexel( gl_FragColor );",lx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ux=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,px=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_x=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ex=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Tx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ax=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Rx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Px=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ix=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ux=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ox=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Zx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Yx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ey=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ty=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ny=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ry=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ay=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,sy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ly=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,hy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,py=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,my=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_y=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,My=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ey=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ty=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,by=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ry=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Py=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ly=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ny=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Oy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ky=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,By=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Yy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$y=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ky=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,aS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ot={alphahash_fragment:Lv,alphahash_pars_fragment:Iv,alphamap_fragment:Nv,alphamap_pars_fragment:Dv,alphatest_fragment:Uv,alphatest_pars_fragment:Fv,aomap_fragment:Ov,aomap_pars_fragment:kv,batching_pars_vertex:Bv,batching_vertex:zv,begin_vertex:Hv,beginnormal_vertex:Gv,bsdfs:Vv,iridescence_fragment:Wv,bumpmap_pars_fragment:jv,clipping_planes_fragment:Xv,clipping_planes_pars_fragment:Zv,clipping_planes_pars_vertex:qv,clipping_planes_vertex:Yv,color_fragment:$v,color_pars_fragment:Kv,color_pars_vertex:Jv,color_vertex:Qv,common:ex,cube_uv_reflection_fragment:tx,defaultnormal_vertex:nx,displacementmap_pars_vertex:ix,displacementmap_vertex:rx,emissivemap_fragment:ax,emissivemap_pars_fragment:sx,colorspace_fragment:ox,colorspace_pars_fragment:lx,envmap_fragment:cx,envmap_common_pars_fragment:ux,envmap_pars_fragment:dx,envmap_pars_vertex:fx,envmap_physical_pars_fragment:Ex,envmap_vertex:hx,fog_vertex:px,fog_pars_vertex:mx,fog_fragment:gx,fog_pars_fragment:_x,gradientmap_pars_fragment:vx,lightmap_pars_fragment:xx,lights_lambert_fragment:yx,lights_lambert_pars_fragment:Sx,lights_pars_begin:Mx,lights_toon_fragment:Tx,lights_toon_pars_fragment:bx,lights_phong_fragment:wx,lights_phong_pars_fragment:Ax,lights_physical_fragment:Cx,lights_physical_pars_fragment:Rx,lights_fragment_begin:Px,lights_fragment_maps:Lx,lights_fragment_end:Ix,logdepthbuf_fragment:Nx,logdepthbuf_pars_fragment:Dx,logdepthbuf_pars_vertex:Ux,logdepthbuf_vertex:Fx,map_fragment:Ox,map_pars_fragment:kx,map_particle_fragment:Bx,map_particle_pars_fragment:zx,metalnessmap_fragment:Hx,metalnessmap_pars_fragment:Gx,morphinstance_vertex:Vx,morphcolor_vertex:Wx,morphnormal_vertex:jx,morphtarget_pars_vertex:Xx,morphtarget_vertex:Zx,normal_fragment_begin:qx,normal_fragment_maps:Yx,normal_pars_fragment:$x,normal_pars_vertex:Kx,normal_vertex:Jx,normalmap_pars_fragment:Qx,clearcoat_normal_fragment_begin:ey,clearcoat_normal_fragment_maps:ty,clearcoat_pars_fragment:ny,iridescence_pars_fragment:iy,opaque_fragment:ry,packing:ay,premultiplied_alpha_fragment:sy,project_vertex:oy,dithering_fragment:ly,dithering_pars_fragment:cy,roughnessmap_fragment:uy,roughnessmap_pars_fragment:dy,shadowmap_pars_fragment:fy,shadowmap_pars_vertex:hy,shadowmap_vertex:py,shadowmask_pars_fragment:my,skinbase_vertex:gy,skinning_pars_vertex:_y,skinning_vertex:vy,skinnormal_vertex:xy,specularmap_fragment:yy,specularmap_pars_fragment:Sy,tonemapping_fragment:My,tonemapping_pars_fragment:Ey,transmission_fragment:Ty,transmission_pars_fragment:by,uv_pars_fragment:wy,uv_pars_vertex:Ay,uv_vertex:Cy,worldpos_vertex:Ry,background_vert:Py,background_frag:Ly,backgroundCube_vert:Iy,backgroundCube_frag:Ny,cube_vert:Dy,cube_frag:Uy,depth_vert:Fy,depth_frag:Oy,distanceRGBA_vert:ky,distanceRGBA_frag:By,equirect_vert:zy,equirect_frag:Hy,linedashed_vert:Gy,linedashed_frag:Vy,meshbasic_vert:Wy,meshbasic_frag:jy,meshlambert_vert:Xy,meshlambert_frag:Zy,meshmatcap_vert:qy,meshmatcap_frag:Yy,meshnormal_vert:$y,meshnormal_frag:Ky,meshphong_vert:Jy,meshphong_frag:Qy,meshphysical_vert:eS,meshphysical_frag:tS,meshtoon_vert:nS,meshtoon_frag:iS,points_vert:rS,points_frag:aS,shadow_vert:sS,shadow_frag:oS,sprite_vert:lS,sprite_frag:cS},Re={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},gi={basic:{uniforms:_n([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:_n([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new xt(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:_n([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:_n([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:_n([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new xt(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:_n([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:_n([Re.points,Re.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:_n([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:_n([Re.common,Re.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:_n([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:_n([Re.sprite,Re.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:_n([Re.common,Re.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:_n([Re.lights,Re.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};gi.physical={uniforms:_n([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const ul={r:0,b:0,g:0},zr=new Vi,uS=new Ht;function dS(a,e,n,r,o,c,f){const d=new xt(0);let p=c===!0?0:1,m,_,v=null,x=0,S=null;function T(D){let L=D.isScene===!0?D.background:null;return L&&L.isTexture&&(L=(D.backgroundBlurriness>0?n:e).get(L)),L}function w(D){let L=!1;const C=T(D);C===null?g(d,p):C&&C.isColor&&(g(C,1),L=!0);const Y=a.xr.getEnvironmentBlendMode();Y==="additive"?r.buffers.color.setClear(0,0,0,1,f):Y==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(a.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function y(D,L){const C=T(L);C&&(C.isCubeTexture||C.mapping===Tl)?(_===void 0&&(_=new vi(new ks(1,1,1),new Sr({name:"BackgroundCubeMaterial",uniforms:Va(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(Y,z,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(_)),zr.copy(L.backgroundRotation),zr.x*=-1,zr.y*=-1,zr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),_.material.uniforms.envMap.value=C,_.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(uS.makeRotationFromEuler(zr)),_.material.toneMapped=vt.getTransfer(C.colorSpace)!==At,(v!==C||x!==C.version||S!==a.toneMapping)&&(_.material.needsUpdate=!0,v=C,x=C.version,S=a.toneMapping),_.layers.enableAll(),D.unshift(_,_.geometry,_.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new vi(new Al(2,2),new Sr({name:"BackgroundMaterial",uniforms:Va(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:yr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=vt.getTransfer(C.colorSpace)!==At,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(v!==C||x!==C.version||S!==a.toneMapping)&&(m.material.needsUpdate=!0,v=C,x=C.version,S=a.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function g(D,L){D.getRGB(ul,Ym(a)),r.buffers.color.setClear(ul.r,ul.g,ul.b,L,f)}return{getClearColor:function(){return d},setClearColor:function(D,L=1){d.set(D),p=L,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,g(d,p)},render:w,addToRenderList:y}}function fS(a,e){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=x(null);let c=o,f=!1;function d(A,F,ae,J,ue){let pe=!1;const oe=v(J,ae,F);c!==oe&&(c=oe,m(c.object)),pe=S(A,J,ae,ue),pe&&T(A,J,ae,ue),ue!==null&&e.update(ue,a.ELEMENT_ARRAY_BUFFER),(pe||f)&&(f=!1,C(A,F,ae,J),ue!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function p(){return a.createVertexArray()}function m(A){return a.bindVertexArray(A)}function _(A){return a.deleteVertexArray(A)}function v(A,F,ae){const J=ae.wireframe===!0;let ue=r[A.id];ue===void 0&&(ue={},r[A.id]=ue);let pe=ue[F.id];pe===void 0&&(pe={},ue[F.id]=pe);let oe=pe[J];return oe===void 0&&(oe=x(p()),pe[J]=oe),oe}function x(A){const F=[],ae=[],J=[];for(let ue=0;ue<n;ue++)F[ue]=0,ae[ue]=0,J[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:ae,attributeDivisors:J,object:A,attributes:{},index:null}}function S(A,F,ae,J){const ue=c.attributes,pe=F.attributes;let oe=0;const le=ae.getAttributes();for(const B in le)if(le[B].location>=0){const se=ue[B];let U=pe[B];if(U===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(U=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(U=A.instanceColor)),se===void 0||se.attribute!==U||U&&se.data!==U.data)return!0;oe++}return c.attributesNum!==oe||c.index!==J}function T(A,F,ae,J){const ue={},pe=F.attributes;let oe=0;const le=ae.getAttributes();for(const B in le)if(le[B].location>=0){let se=pe[B];se===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(se=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(se=A.instanceColor));const U={};U.attribute=se,se&&se.data&&(U.data=se.data),ue[B]=U,oe++}c.attributes=ue,c.attributesNum=oe,c.index=J}function w(){const A=c.newAttributes;for(let F=0,ae=A.length;F<ae;F++)A[F]=0}function y(A){g(A,0)}function g(A,F){const ae=c.newAttributes,J=c.enabledAttributes,ue=c.attributeDivisors;ae[A]=1,J[A]===0&&(a.enableVertexAttribArray(A),J[A]=1),ue[A]!==F&&(a.vertexAttribDivisor(A,F),ue[A]=F)}function D(){const A=c.newAttributes,F=c.enabledAttributes;for(let ae=0,J=F.length;ae<J;ae++)F[ae]!==A[ae]&&(a.disableVertexAttribArray(ae),F[ae]=0)}function L(A,F,ae,J,ue,pe,oe){oe===!0?a.vertexAttribIPointer(A,F,ae,ue,pe):a.vertexAttribPointer(A,F,ae,J,ue,pe)}function C(A,F,ae,J){w();const ue=J.attributes,pe=ae.getAttributes(),oe=F.defaultAttributeValues;for(const le in pe){const B=pe[le];if(B.location>=0){let ce=ue[le];if(ce===void 0&&(le==="instanceMatrix"&&A.instanceMatrix&&(ce=A.instanceMatrix),le==="instanceColor"&&A.instanceColor&&(ce=A.instanceColor)),ce!==void 0){const se=ce.normalized,U=ce.itemSize,ie=e.get(ce);if(ie===void 0)continue;const Ne=ie.buffer,K=ie.type,de=ie.bytesPerElement,Ee=K===a.INT||K===a.UNSIGNED_INT||ce.gpuType===Ud;if(ce.isInterleavedBufferAttribute){const xe=ce.data,we=xe.stride,De=ce.offset;if(xe.isInstancedInterleavedBuffer){for(let Ke=0;Ke<B.locationSize;Ke++)g(B.location+Ke,xe.meshPerAttribute);A.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ke=0;Ke<B.locationSize;Ke++)y(B.location+Ke);a.bindBuffer(a.ARRAY_BUFFER,Ne);for(let Ke=0;Ke<B.locationSize;Ke++)L(B.location+Ke,U/B.locationSize,K,se,we*de,(De+U/B.locationSize*Ke)*de,Ee)}else{if(ce.isInstancedBufferAttribute){for(let xe=0;xe<B.locationSize;xe++)g(B.location+xe,ce.meshPerAttribute);A.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let xe=0;xe<B.locationSize;xe++)y(B.location+xe);a.bindBuffer(a.ARRAY_BUFFER,Ne);for(let xe=0;xe<B.locationSize;xe++)L(B.location+xe,U/B.locationSize,K,se,U*de,U/B.locationSize*xe*de,Ee)}}else if(oe!==void 0){const se=oe[le];if(se!==void 0)switch(se.length){case 2:a.vertexAttrib2fv(B.location,se);break;case 3:a.vertexAttrib3fv(B.location,se);break;case 4:a.vertexAttrib4fv(B.location,se);break;default:a.vertexAttrib1fv(B.location,se)}}}}D()}function Y(){X();for(const A in r){const F=r[A];for(const ae in F){const J=F[ae];for(const ue in J)_(J[ue].object),delete J[ue];delete F[ae]}delete r[A]}}function z(A){if(r[A.id]===void 0)return;const F=r[A.id];for(const ae in F){const J=F[ae];for(const ue in J)_(J[ue].object),delete J[ue];delete F[ae]}delete r[A.id]}function k(A){for(const F in r){const ae=r[F];if(ae[A.id]===void 0)continue;const J=ae[A.id];for(const ue in J)_(J[ue].object),delete J[ue];delete ae[A.id]}}function X(){R(),f=!0,c!==o&&(c=o,m(c.object))}function R(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:X,resetDefaultState:R,dispose:Y,releaseStatesOfGeometry:z,releaseStatesOfProgram:k,initAttributes:w,enableAttribute:y,disableUnusedAttributes:D}}function hS(a,e,n){let r;function o(m){r=m}function c(m,_){a.drawArrays(r,m,_),n.update(_,r,1)}function f(m,_,v){v!==0&&(a.drawArraysInstanced(r,m,_,v),n.update(_,r,v))}function d(m,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,v);let S=0;for(let T=0;T<v;T++)S+=_[T];n.update(S,r,1)}function p(m,_,v,x){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<m.length;T++)f(m[T],_[T],x[T]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,_,0,x,0,v);let T=0;for(let w=0;w<v;w++)T+=_[w]*x[w];n.update(T,r,1)}}this.setMode=o,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function pS(a,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function f(k){return!(k!==li&&r.convert(k)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(k){const X=k===Ns&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==Gi&&r.convert(k)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==Bi&&!X)}function p(k){if(k==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const v=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),T=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),g=a.getParameter(a.MAX_VERTEX_ATTRIBS),D=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),L=a.getParameter(a.MAX_VARYING_VECTORS),C=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),Y=T>0,z=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:C,vertexTextures:Y,maxSamples:z}}function mS(a){const e=this;let n=null,r=0,o=!1,c=!1;const f=new Gr,d=new st,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const S=v.length!==0||x||r!==0||o;return o=x,r=v.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,x){n=_(v,x,0)},this.setState=function(v,x,S){const T=v.clippingPlanes,w=v.clipIntersection,y=v.clipShadows,g=a.get(v);if(!o||T===null||T.length===0||c&&!y)c?_(null):m();else{const D=c?0:r,L=D*4;let C=g.clippingState||null;p.value=C,C=_(T,x,L,S);for(let Y=0;Y!==L;++Y)C[Y]=n[Y];g.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=D}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,x,S,T){const w=v!==null?v.length:0;let y=null;if(w!==0){if(y=p.value,T!==!0||y===null){const g=S+w*4,D=x.matrixWorldInverse;d.getNormalMatrix(D),(y===null||y.length<g)&&(y=new Float32Array(g));for(let L=0,C=S;L!==w;++L,C+=4)f.copy(v[L]).applyMatrix4(D,d),f.normal.toArray(y,C),y[C+3]=f.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}function gS(a){let e=new WeakMap;function n(f,d){return d===Ju?f.mapping=Ba:d===Qu&&(f.mapping=za),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Ju||d===Qu)if(e.has(f)){const p=e.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new Av(p.height);return m.fromEquirectangularTexture(a,f),e.set(f,m),f.addEventListener("dispose",o),n(m.texture,f.mapping)}else return null}}return f}function o(f){const d=f.target;d.removeEventListener("dispose",o);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class _S extends $m{constructor(e=-1,n=1,r=1,o=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,f=r+e,d=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Da=4,Yp=[.125,.215,.35,.446,.526,.582],jr=20,Uu=new _S,$p=new xt;let Fu=null,Ou=0,ku=0,Bu=!1;const Vr=(1+Math.sqrt(5))/2,Na=1/Vr,Kp=[new ne(-Vr,Na,0),new ne(Vr,Na,0),new ne(-Na,0,Vr),new ne(Na,0,Vr),new ne(0,Vr,-Na),new ne(0,Vr,Na),new ne(-1,1,-1),new ne(1,1,-1),new ne(-1,1,1),new ne(1,1,1)];class Jp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,o=100){Fu=this._renderer.getRenderTarget(),Ou=this._renderer.getActiveCubeFace(),ku=this._renderer.getActiveMipmapLevel(),Bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,o,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=em(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fu,Ou,ku),this._renderer.xr.enabled=Bu,e.scissorTest=!1,dl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ba||e.mapping===za?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fu=this._renderer.getRenderTarget(),Ou=this._renderer.getActiveCubeFace(),ku=this._renderer.getActiveMipmapLevel(),Bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:_i,minFilter:_i,generateMipmaps:!1,type:Ns,format:li,colorSpace:Wa,depthBuffer:!1},o=Qp(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qp(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vS(c)),this._blurMaterial=xS(c,e,n)}return o}_compileMaterial(e){const n=new vi(this._lodPlanes[0],e);this._renderer.compile(n,Uu)}_sceneToCubeUV(e,n,r,o){const d=new Zn(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor($p),_.toneMapping=xr,_.autoClear=!1;const S=new Hd({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),T=new vi(new ks,S);let w=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,w=!0):(S.color.copy($p),w=!0);for(let g=0;g<6;g++){const D=g%3;D===0?(d.up.set(0,p[g],0),d.lookAt(m[g],0,0)):D===1?(d.up.set(0,0,p[g]),d.lookAt(0,m[g],0)):(d.up.set(0,p[g],0),d.lookAt(0,0,m[g]));const L=this._cubeSize;dl(o,D*L,g>2?L:0,L,L),_.setRenderTarget(o),w&&_.render(T,d),_.render(e,d)}T.geometry.dispose(),T.material.dispose(),_.toneMapping=x,_.autoClear=v,e.background=y}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===Ba||e.mapping===za;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=tm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=em());const c=o?this._cubemapMaterial:this._equirectMaterial,f=new vi(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;dl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,Uu)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=Kp[(o-c-1)%Kp.length];this._blur(e,c-1,c,f,d)}n.autoClear=r}_blur(e,n,r,o,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,o,"latitudinal",c),this._halfBlur(f,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new vi(this._lodPlanes[o],m),x=m.uniforms,S=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*jr-1),w=c/T,y=isFinite(c)?1+Math.floor(_*w):jr;y>jr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${jr}`);const g=[];let D=0;for(let k=0;k<jr;++k){const X=k/w,R=Math.exp(-X*X/2);g.push(R),k===0?D+=R:k<y&&(D+=2*R)}for(let k=0;k<g.length;k++)g[k]=g[k]/D;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=g,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=T,x.mipInt.value=L-r;const C=this._sizeLods[o],Y=3*C*(o>L-Da?o-L+Da:0),z=4*(this._cubeSize-C);dl(n,Y,z,3*C,2*C),p.setRenderTarget(n),p.render(v,Uu)}}function vS(a){const e=[],n=[],r=[];let o=a;const c=a-Da+1+Yp.length;for(let f=0;f<c;f++){const d=Math.pow(2,o);n.push(d);let p=1/d;f>a-Da?p=Yp[f-a+Da-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),_=-m,v=1+m,x=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,T=6,w=3,y=2,g=1,D=new Float32Array(w*T*S),L=new Float32Array(y*T*S),C=new Float32Array(g*T*S);for(let z=0;z<S;z++){const k=z%3*2/3-1,X=z>2?0:-1,R=[k,X,0,k+2/3,X,0,k+2/3,X+1,0,k,X,0,k+2/3,X+1,0,k,X+1,0];D.set(R,w*T*z),L.set(x,y*T*z);const A=[z,z,z,z,z,z];C.set(A,g*T*z)}const Y=new yi;Y.setAttribute("position",new Yn(D,w)),Y.setAttribute("uv",new Yn(L,y)),Y.setAttribute("faceIndex",new Yn(C,g)),e.push(Y),o>Da&&o--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Qp(a,e,n){const r=new Yr(a,e,n);return r.texture.mapping=Tl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function dl(a,e,n,r,o){a.viewport.set(e,n,r,o),a.scissor.set(e,n,r,o)}function xS(a,e,n){const r=new Float32Array(jr),o=new ne(0,1,0);return new Sr({name:"SphericalGaussianBlur",defines:{n:jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function em(){return new Sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function tm(){return new Sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function Gd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yS(a){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===Ju||p===Qu,_=p===Ba||p===za;if(m||_){let v=e.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new Jp(a)),v=m?n.fromEquirectangular(d,v):n.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const S=d.image;return m&&S&&S.height>0||_&&S&&o(S)?(n===null&&(n=new Jp(a)),v=m?n.fromEquirectangular(d):n.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function o(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function SS(a){const e={};function n(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=a.getExtension(r)}return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Ps("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function MS(a,e,n,r){const o={},c=new WeakMap;function f(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);for(const T in x.morphAttributes){const w=x.morphAttributes[T];for(let y=0,g=w.length;y<g;y++)e.remove(w[y])}x.removeEventListener("dispose",f),delete o[x.id];const S=c.get(x);S&&(e.remove(S),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(v,x){return o[x.id]===!0||(x.addEventListener("dispose",f),o[x.id]=!0,n.memory.geometries++),x}function p(v){const x=v.attributes;for(const T in x)e.update(x[T],a.ARRAY_BUFFER);const S=v.morphAttributes;for(const T in S){const w=S[T];for(let y=0,g=w.length;y<g;y++)e.update(w[y],a.ARRAY_BUFFER)}}function m(v){const x=[],S=v.index,T=v.attributes.position;let w=0;if(S!==null){const D=S.array;w=S.version;for(let L=0,C=D.length;L<C;L+=3){const Y=D[L+0],z=D[L+1],k=D[L+2];x.push(Y,z,z,k,k,Y)}}else if(T!==void 0){const D=T.array;w=T.version;for(let L=0,C=D.length/3-1;L<C;L+=3){const Y=L+0,z=L+1,k=L+2;x.push(Y,z,z,k,k,Y)}}else return;const y=new(Hm(x)?qm:Zm)(x,1);y.version=w;const g=c.get(v);g&&e.remove(g),c.set(v,y)}function _(v){const x=c.get(v);if(x){const S=v.index;S!==null&&x.version<S.version&&m(v)}else m(v);return c.get(v)}return{get:d,update:p,getWireframeAttribute:_}}function ES(a,e,n){let r;function o(x){r=x}let c,f;function d(x){c=x.type,f=x.bytesPerElement}function p(x,S){a.drawElements(r,S,c,x*f),n.update(S,r,1)}function m(x,S,T){T!==0&&(a.drawElementsInstanced(r,S,c,x*f,T),n.update(S,r,T))}function _(x,S,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,x,0,T);let y=0;for(let g=0;g<T;g++)y+=S[g];n.update(y,r,1)}function v(x,S,T,w){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<x.length;g++)m(x[g]/f,S[g],w[g]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,c,x,0,w,0,T);let g=0;for(let D=0;D<T;D++)g+=S[D]*w[D];n.update(g,r,1)}}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function TS(a){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,d){switch(n.calls++,f){case a.TRIANGLES:n.triangles+=d*(c/3);break;case a.LINES:n.lines+=d*(c/2);break;case a.LINE_STRIP:n.lines+=d*(c-1);break;case a.LINE_LOOP:n.lines+=d*c;break;case a.POINTS:n.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function bS(a,e,n){const r=new WeakMap,o=new zt;function c(f,d,p){const m=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let A=function(){X.dispose(),r.delete(d),d.removeEventListener("dispose",A)};var S=A;x!==void 0&&x.texture.dispose();const T=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let C=0;T===!0&&(C=1),w===!0&&(C=2),y===!0&&(C=3);let Y=d.attributes.position.count*C,z=1;Y>e.maxTextureSize&&(z=Math.ceil(Y/e.maxTextureSize),Y=e.maxTextureSize);const k=new Float32Array(Y*z*4*v),X=new Vm(k,Y,z,v);X.type=Bi,X.needsUpdate=!0;const R=C*4;for(let F=0;F<v;F++){const ae=g[F],J=D[F],ue=L[F],pe=Y*z*4*F;for(let oe=0;oe<ae.count;oe++){const le=oe*R;T===!0&&(o.fromBufferAttribute(ae,oe),k[pe+le+0]=o.x,k[pe+le+1]=o.y,k[pe+le+2]=o.z,k[pe+le+3]=0),w===!0&&(o.fromBufferAttribute(J,oe),k[pe+le+4]=o.x,k[pe+le+5]=o.y,k[pe+le+6]=o.z,k[pe+le+7]=0),y===!0&&(o.fromBufferAttribute(ue,oe),k[pe+le+8]=o.x,k[pe+le+9]=o.y,k[pe+le+10]=o.z,k[pe+le+11]=ue.itemSize===4?o.w:1)}}x={count:v,texture:X,size:new Rt(Y,z)},r.set(d,x),d.addEventListener("dispose",A)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(a,"morphTexture",f.morphTexture,n);else{let T=0;for(let y=0;y<m.length;y++)T+=m[y];const w=d.morphTargetsRelative?1:1-T;p.getUniforms().setValue(a,"morphTargetBaseInfluence",w),p.getUniforms().setValue(a,"morphTargetInfluences",m)}p.getUniforms().setValue(a,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(a,"morphTargetsTextureSize",x.size)}return{update:c}}function wS(a,e,n,r){let o=new WeakMap;function c(p){const m=r.render.frame,_=p.geometry,v=e.get(p,_);if(o.get(v)!==m&&(e.update(v),o.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),o.get(p)!==m&&(n.update(p.instanceMatrix,a.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,a.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;o.get(x)!==m&&(x.update(),o.set(x,m))}return v}function f(){o=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:f}}class eg extends Rn{constructor(e,n,r,o,c,f,d,p,m,_=Fa){if(_!==Fa&&_!==Ga)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Fa&&(r=qr),r===void 0&&_===Ga&&(r=Ha),super(null,o,c,f,d,p,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:ci,this.minFilter=p!==void 0?p:ci,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const tg=new Rn,nm=new eg(1,1),ng=new Vm,ig=new dv,rg=new Km,im=[],rm=[],am=new Float32Array(16),sm=new Float32Array(9),om=new Float32Array(4);function Xa(a,e,n){const r=a[0];if(r<=0||r>0)return a;const o=e*n;let c=im[o];if(c===void 0&&(c=new Float32Array(o),im[o]=c),e!==0){r.toArray(c,0);for(let f=1,d=0;f!==e;++f)d+=n,a[f].toArray(c,d)}return c}function qt(a,e){if(a.length!==e.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==e[n])return!1;return!0}function Yt(a,e){for(let n=0,r=e.length;n<r;n++)a[n]=e[n]}function Cl(a,e){let n=rm[e];n===void 0&&(n=new Int32Array(e),rm[e]=n);for(let r=0;r!==e;++r)n[r]=a.allocateTextureUnit();return n}function AS(a,e){const n=this.cache;n[0]!==e&&(a.uniform1f(this.addr,e),n[0]=e)}function CS(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;a.uniform2fv(this.addr,e),Yt(n,e)}}function RS(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(qt(n,e))return;a.uniform3fv(this.addr,e),Yt(n,e)}}function PS(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;a.uniform4fv(this.addr,e),Yt(n,e)}}function LS(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(qt(n,e))return;a.uniformMatrix2fv(this.addr,!1,e),Yt(n,e)}else{if(qt(n,r))return;om.set(r),a.uniformMatrix2fv(this.addr,!1,om),Yt(n,r)}}function IS(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(qt(n,e))return;a.uniformMatrix3fv(this.addr,!1,e),Yt(n,e)}else{if(qt(n,r))return;sm.set(r),a.uniformMatrix3fv(this.addr,!1,sm),Yt(n,r)}}function NS(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(qt(n,e))return;a.uniformMatrix4fv(this.addr,!1,e),Yt(n,e)}else{if(qt(n,r))return;am.set(r),a.uniformMatrix4fv(this.addr,!1,am),Yt(n,r)}}function DS(a,e){const n=this.cache;n[0]!==e&&(a.uniform1i(this.addr,e),n[0]=e)}function US(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;a.uniform2iv(this.addr,e),Yt(n,e)}}function FS(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(qt(n,e))return;a.uniform3iv(this.addr,e),Yt(n,e)}}function OS(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;a.uniform4iv(this.addr,e),Yt(n,e)}}function kS(a,e){const n=this.cache;n[0]!==e&&(a.uniform1ui(this.addr,e),n[0]=e)}function BS(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;a.uniform2uiv(this.addr,e),Yt(n,e)}}function zS(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(qt(n,e))return;a.uniform3uiv(this.addr,e),Yt(n,e)}}function HS(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;a.uniform4uiv(this.addr,e),Yt(n,e)}}function GS(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(nm.compareFunction=zm,c=nm):c=tg,n.setTexture2D(e||c,o)}function VS(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||ig,o)}function WS(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||rg,o)}function jS(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||ng,o)}function XS(a){switch(a){case 5126:return AS;case 35664:return CS;case 35665:return RS;case 35666:return PS;case 35674:return LS;case 35675:return IS;case 35676:return NS;case 5124:case 35670:return DS;case 35667:case 35671:return US;case 35668:case 35672:return FS;case 35669:case 35673:return OS;case 5125:return kS;case 36294:return BS;case 36295:return zS;case 36296:return HS;case 35678:case 36198:case 36298:case 36306:case 35682:return GS;case 35679:case 36299:case 36307:return VS;case 35680:case 36300:case 36308:case 36293:return WS;case 36289:case 36303:case 36311:case 36292:return jS}}function ZS(a,e){a.uniform1fv(this.addr,e)}function qS(a,e){const n=Xa(e,this.size,2);a.uniform2fv(this.addr,n)}function YS(a,e){const n=Xa(e,this.size,3);a.uniform3fv(this.addr,n)}function $S(a,e){const n=Xa(e,this.size,4);a.uniform4fv(this.addr,n)}function KS(a,e){const n=Xa(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function JS(a,e){const n=Xa(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function QS(a,e){const n=Xa(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function e1(a,e){a.uniform1iv(this.addr,e)}function t1(a,e){a.uniform2iv(this.addr,e)}function n1(a,e){a.uniform3iv(this.addr,e)}function i1(a,e){a.uniform4iv(this.addr,e)}function r1(a,e){a.uniform1uiv(this.addr,e)}function a1(a,e){a.uniform2uiv(this.addr,e)}function s1(a,e){a.uniform3uiv(this.addr,e)}function o1(a,e){a.uniform4uiv(this.addr,e)}function l1(a,e,n){const r=this.cache,o=e.length,c=Cl(n,o);qt(r,c)||(a.uniform1iv(this.addr,c),Yt(r,c));for(let f=0;f!==o;++f)n.setTexture2D(e[f]||tg,c[f])}function c1(a,e,n){const r=this.cache,o=e.length,c=Cl(n,o);qt(r,c)||(a.uniform1iv(this.addr,c),Yt(r,c));for(let f=0;f!==o;++f)n.setTexture3D(e[f]||ig,c[f])}function u1(a,e,n){const r=this.cache,o=e.length,c=Cl(n,o);qt(r,c)||(a.uniform1iv(this.addr,c),Yt(r,c));for(let f=0;f!==o;++f)n.setTextureCube(e[f]||rg,c[f])}function d1(a,e,n){const r=this.cache,o=e.length,c=Cl(n,o);qt(r,c)||(a.uniform1iv(this.addr,c),Yt(r,c));for(let f=0;f!==o;++f)n.setTexture2DArray(e[f]||ng,c[f])}function f1(a){switch(a){case 5126:return ZS;case 35664:return qS;case 35665:return YS;case 35666:return $S;case 35674:return KS;case 35675:return JS;case 35676:return QS;case 5124:case 35670:return e1;case 35667:case 35671:return t1;case 35668:case 35672:return n1;case 35669:case 35673:return i1;case 5125:return r1;case 36294:return a1;case 36295:return s1;case 36296:return o1;case 35678:case 36198:case 36298:case 36306:case 35682:return l1;case 35679:case 36299:case 36307:return c1;case 35680:case 36300:case 36308:case 36293:return u1;case 36289:case 36303:case 36311:case 36292:return d1}}class h1{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=XS(n.type)}}class p1{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=f1(n.type)}}class m1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,f=o.length;c!==f;++c){const d=o[c];d.setValue(e,n[d.id],r)}}}const zu=/(\w+)(\])?(\[|\.)?/g;function lm(a,e){a.seq.push(e),a.map[e.id]=e}function g1(a,e,n){const r=a.name,o=r.length;for(zu.lastIndex=0;;){const c=zu.exec(r),f=zu.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===o){lm(n,m===void 0?new h1(d,a,e):new p1(d,a,e));break}else{let v=n.map[d];v===void 0&&(v=new m1(d),lm(n,v)),n=v}}}class Sl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const c=e.getActiveUniform(n,o),f=e.getUniformLocation(n,c.name);g1(c,f,this)}}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,f=n.length;c!==f;++c){const d=n[c],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const f=e[o];f.id in n&&r.push(f)}return r}}function cm(a,e,n){const r=a.createShader(e);return a.shaderSource(r,n),a.compileShader(r),r}const _1=37297;let v1=0;function x1(a,e){const n=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let f=o;f<c;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}const um=new st;function y1(a){vt._getMatrix(um,vt.workingColorSpace,a);const e=`mat3( ${um.elements.map(n=>n.toFixed(4))} )`;switch(vt.getTransfer(a)){case bl:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function dm(a,e,n){const r=a.getShaderParameter(e,a.COMPILE_STATUS),o=a.getShaderInfoLog(e).trim();if(r&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+o+`

`+x1(a.getShaderSource(e),f)}else return o}function S1(a,e){const n=y1(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function M1(a,e){let n;switch(e){case O_:n="Linear";break;case k_:n="Reinhard";break;case B_:n="Cineon";break;case z_:n="ACESFilmic";break;case G_:n="AgX";break;case V_:n="Neutral";break;case H_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const fl=new ne;function E1(){vt.getLuminanceCoefficients(fl);const a=fl.x.toFixed(4),e=fl.y.toFixed(4),n=fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T1(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ls).join(`
`)}function b1(a){const e=[];for(const n in a){const r=a[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function w1(a,e){const n={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),f=c.name;let d=1;c.type===a.FLOAT_MAT2&&(d=2),c.type===a.FLOAT_MAT3&&(d=3),c.type===a.FLOAT_MAT4&&(d=4),n[f]={type:c.type,location:a.getAttribLocation(e,f),locationSize:d}}return n}function Ls(a){return a!==""}function fm(a,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hm(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const A1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rd(a){return a.replace(A1,R1)}const C1=new Map;function R1(a,e){let n=ot[e];if(n===void 0){const r=C1.get(e);if(r!==void 0)n=ot[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Rd(n)}const P1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pm(a){return a.replace(P1,L1)}function L1(a,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function mm(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function I1(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Am?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===g_?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function N1(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Ba:case za:e="ENVMAP_TYPE_CUBE";break;case Tl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function D1(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case za:e="ENVMAP_MODE_REFRACTION";break}return e}function U1(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Cm:e="ENVMAP_BLENDING_MULTIPLY";break;case U_:e="ENVMAP_BLENDING_MIX";break;case F_:e="ENVMAP_BLENDING_ADD";break}return e}function F1(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function O1(a,e,n,r){const o=a.getContext(),c=n.defines;let f=n.vertexShader,d=n.fragmentShader;const p=I1(n),m=N1(n),_=D1(n),v=U1(n),x=F1(n),S=T1(n),T=b1(c),w=o.createProgram();let y,g,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Ls).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Ls).join(`
`),g.length>0&&(g+=`
`)):(y=[mm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),g=[mm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==xr?"#define TONE_MAPPING":"",n.toneMapping!==xr?ot.tonemapping_pars_fragment:"",n.toneMapping!==xr?M1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,S1("linearToOutputTexel",n.outputColorSpace),E1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ls).join(`
`)),f=Rd(f),f=fm(f,n),f=hm(f,n),d=Rd(d),d=fm(d,n),d=hm(d,n),f=pm(f),d=pm(d),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",n.glslVersion===Cp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Cp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=D+y+f,C=D+g+d,Y=cm(o,o.VERTEX_SHADER,L),z=cm(o,o.FRAGMENT_SHADER,C);o.attachShader(w,Y),o.attachShader(w,z),n.index0AttributeName!==void 0?o.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function k(F){if(a.debug.checkShaderErrors){const ae=o.getProgramInfoLog(w).trim(),J=o.getShaderInfoLog(Y).trim(),ue=o.getShaderInfoLog(z).trim();let pe=!0,oe=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(pe=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,w,Y,z);else{const le=dm(o,Y,"vertex"),B=dm(o,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ae+`
`+le+`
`+B)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(J===""||ue==="")&&(oe=!1);oe&&(F.diagnostics={runnable:pe,programLog:ae,vertexShader:{log:J,prefix:y},fragmentShader:{log:ue,prefix:g}})}o.deleteShader(Y),o.deleteShader(z),X=new Sl(o,w),R=w1(o,w)}let X;this.getUniforms=function(){return X===void 0&&k(this),X};let R;this.getAttributes=function(){return R===void 0&&k(this),R};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=o.getProgramParameter(w,_1)),A},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=v1++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=Y,this.fragmentShader=z,this}let k1=0;class B1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(o)===!1&&(f.add(o),o.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new z1(e),n.set(e,r)),r}}class z1{constructor(e){this.id=k1++,this.code=e,this.usedTimes=0}}function H1(a,e,n,r,o,c,f){const d=new jm,p=new B1,m=new Set,_=[],v=o.logarithmicDepthBuffer,x=o.vertexTextures;let S=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(R){return m.add(R),R===0?"uv":`uv${R}`}function y(R,A,F,ae,J){const ue=ae.fog,pe=J.geometry,oe=R.isMeshStandardMaterial?ae.environment:null,le=(R.isMeshStandardMaterial?n:e).get(R.envMap||oe),B=le&&le.mapping===Tl?le.image.height:null,ce=T[R.type];R.precision!==null&&(S=o.getMaxPrecision(R.precision),S!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",S,"instead."));const se=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,U=se!==void 0?se.length:0;let ie=0;pe.morphAttributes.position!==void 0&&(ie=1),pe.morphAttributes.normal!==void 0&&(ie=2),pe.morphAttributes.color!==void 0&&(ie=3);let Ne,K,de,Ee;if(ce){const gt=gi[ce];Ne=gt.vertexShader,K=gt.fragmentShader}else Ne=R.vertexShader,K=R.fragmentShader,p.update(R),de=p.getVertexShaderID(R),Ee=p.getFragmentShaderID(R);const xe=a.getRenderTarget(),we=a.state.buffers.depth.getReversed(),De=J.isInstancedMesh===!0,Ke=J.isBatchedMesh===!0,wt=!!R.map,ht=!!R.matcap,Pt=!!le,j=!!R.aoMap,fn=!!R.lightMap,ft=!!R.bumpMap,ct=!!R.normalMap,qe=!!R.displacementMap,Tt=!!R.emissiveMap,Ze=!!R.metalnessMap,P=!!R.roughnessMap,E=R.anisotropy>0,$=R.clearcoat>0,me=R.dispersion>0,_e=R.iridescence>0,fe=R.sheen>0,Ge=R.transmission>0,Ae=E&&!!R.anisotropyMap,Ue=$&&!!R.clearcoatMap,lt=$&&!!R.clearcoatNormalMap,Se=$&&!!R.clearcoatRoughnessMap,Oe=_e&&!!R.iridescenceMap,Je=_e&&!!R.iridescenceThicknessMap,Qe=fe&&!!R.sheenColorMap,ke=fe&&!!R.sheenRoughnessMap,ut=!!R.specularMap,it=!!R.specularColorMap,Et=!!R.specularIntensityMap,G=Ge&&!!R.transmissionMap,Ce=Ge&&!!R.thicknessMap,re=!!R.gradientMap,he=!!R.alphaMap,Le=R.alphaTest>0,Pe=!!R.alphaHash,rt=!!R.extensions;let It=xr;R.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(It=a.toneMapping);const Wt={shaderID:ce,shaderType:R.type,shaderName:R.name,vertexShader:Ne,fragmentShader:K,defines:R.defines,customVertexShaderID:de,customFragmentShaderID:Ee,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:S,batching:Ke,batchingColor:Ke&&J._colorsTexture!==null,instancing:De,instancingColor:De&&J.instanceColor!==null,instancingMorph:De&&J.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:xe===null?a.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Wa,alphaToCoverage:!!R.alphaToCoverage,map:wt,matcap:ht,envMap:Pt,envMapMode:Pt&&le.mapping,envMapCubeUVHeight:B,aoMap:j,lightMap:fn,bumpMap:ft,normalMap:ct,displacementMap:x&&qe,emissiveMap:Tt,normalMapObjectSpace:ct&&R.normalMapType===q_,normalMapTangentSpace:ct&&R.normalMapType===Z_,metalnessMap:Ze,roughnessMap:P,anisotropy:E,anisotropyMap:Ae,clearcoat:$,clearcoatMap:Ue,clearcoatNormalMap:lt,clearcoatRoughnessMap:Se,dispersion:me,iridescence:_e,iridescenceMap:Oe,iridescenceThicknessMap:Je,sheen:fe,sheenColorMap:Qe,sheenRoughnessMap:ke,specularMap:ut,specularColorMap:it,specularIntensityMap:Et,transmission:Ge,transmissionMap:G,thicknessMap:Ce,gradientMap:re,opaque:R.transparent===!1&&R.blending===Ua&&R.alphaToCoverage===!1,alphaMap:he,alphaTest:Le,alphaHash:Pe,combine:R.combine,mapUv:wt&&w(R.map.channel),aoMapUv:j&&w(R.aoMap.channel),lightMapUv:fn&&w(R.lightMap.channel),bumpMapUv:ft&&w(R.bumpMap.channel),normalMapUv:ct&&w(R.normalMap.channel),displacementMapUv:qe&&w(R.displacementMap.channel),emissiveMapUv:Tt&&w(R.emissiveMap.channel),metalnessMapUv:Ze&&w(R.metalnessMap.channel),roughnessMapUv:P&&w(R.roughnessMap.channel),anisotropyMapUv:Ae&&w(R.anisotropyMap.channel),clearcoatMapUv:Ue&&w(R.clearcoatMap.channel),clearcoatNormalMapUv:lt&&w(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&w(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&w(R.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&w(R.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&w(R.sheenColorMap.channel),sheenRoughnessMapUv:ke&&w(R.sheenRoughnessMap.channel),specularMapUv:ut&&w(R.specularMap.channel),specularColorMapUv:it&&w(R.specularColorMap.channel),specularIntensityMapUv:Et&&w(R.specularIntensityMap.channel),transmissionMapUv:G&&w(R.transmissionMap.channel),thicknessMapUv:Ce&&w(R.thicknessMap.channel),alphaMapUv:he&&w(R.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(ct||E),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!pe.attributes.uv&&(wt||he),fog:!!ue,useFog:R.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:we,skinning:J.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ie,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:R.dithering,shadowMapEnabled:a.shadowMap.enabled&&F.length>0,shadowMapType:a.shadowMap.type,toneMapping:It,decodeVideoTexture:wt&&R.map.isVideoTexture===!0&&vt.getTransfer(R.map.colorSpace)===At,decodeVideoTextureEmissive:Tt&&R.emissiveMap.isVideoTexture===!0&&vt.getTransfer(R.emissiveMap.colorSpace)===At,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===ki,flipSided:R.side===Cn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:rt&&R.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&R.extensions.multiDraw===!0||Ke)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Wt.vertexUv1s=m.has(1),Wt.vertexUv2s=m.has(2),Wt.vertexUv3s=m.has(3),m.clear(),Wt}function g(R){const A=[];if(R.shaderID?A.push(R.shaderID):(A.push(R.customVertexShaderID),A.push(R.customFragmentShaderID)),R.defines!==void 0)for(const F in R.defines)A.push(F),A.push(R.defines[F]);return R.isRawShaderMaterial===!1&&(D(A,R),L(A,R),A.push(a.outputColorSpace)),A.push(R.customProgramCacheKey),A.join()}function D(R,A){R.push(A.precision),R.push(A.outputColorSpace),R.push(A.envMapMode),R.push(A.envMapCubeUVHeight),R.push(A.mapUv),R.push(A.alphaMapUv),R.push(A.lightMapUv),R.push(A.aoMapUv),R.push(A.bumpMapUv),R.push(A.normalMapUv),R.push(A.displacementMapUv),R.push(A.emissiveMapUv),R.push(A.metalnessMapUv),R.push(A.roughnessMapUv),R.push(A.anisotropyMapUv),R.push(A.clearcoatMapUv),R.push(A.clearcoatNormalMapUv),R.push(A.clearcoatRoughnessMapUv),R.push(A.iridescenceMapUv),R.push(A.iridescenceThicknessMapUv),R.push(A.sheenColorMapUv),R.push(A.sheenRoughnessMapUv),R.push(A.specularMapUv),R.push(A.specularColorMapUv),R.push(A.specularIntensityMapUv),R.push(A.transmissionMapUv),R.push(A.thicknessMapUv),R.push(A.combine),R.push(A.fogExp2),R.push(A.sizeAttenuation),R.push(A.morphTargetsCount),R.push(A.morphAttributeCount),R.push(A.numDirLights),R.push(A.numPointLights),R.push(A.numSpotLights),R.push(A.numSpotLightMaps),R.push(A.numHemiLights),R.push(A.numRectAreaLights),R.push(A.numDirLightShadows),R.push(A.numPointLightShadows),R.push(A.numSpotLightShadows),R.push(A.numSpotLightShadowsWithMaps),R.push(A.numLightProbes),R.push(A.shadowMapType),R.push(A.toneMapping),R.push(A.numClippingPlanes),R.push(A.numClipIntersection),R.push(A.depthPacking)}function L(R,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),R.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reverseDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),R.push(d.mask)}function C(R){const A=T[R.type];let F;if(A){const ae=gi[A];F=Ev.clone(ae.uniforms)}else F=R.uniforms;return F}function Y(R,A){let F;for(let ae=0,J=_.length;ae<J;ae++){const ue=_[ae];if(ue.cacheKey===A){F=ue,++F.usedTimes;break}}return F===void 0&&(F=new O1(a,A,R,c),_.push(F)),F}function z(R){if(--R.usedTimes===0){const A=_.indexOf(R);_[A]=_[_.length-1],_.pop(),R.destroy()}}function k(R){p.remove(R)}function X(){p.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:C,acquireProgram:Y,releaseProgram:z,releaseShaderCache:k,programs:_,dispose:X}}function G1(){let a=new WeakMap;function e(f){return a.has(f)}function n(f){let d=a.get(f);return d===void 0&&(d={},a.set(f,d)),d}function r(f){a.delete(f)}function o(f,d,p){a.get(f)[d]=p}function c(){a=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function V1(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function gm(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function _m(){const a=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function f(v,x,S,T,w,y){let g=a[e];return g===void 0?(g={id:v.id,object:v,geometry:x,material:S,groupOrder:T,renderOrder:v.renderOrder,z:w,group:y},a[e]=g):(g.id=v.id,g.object=v,g.geometry=x,g.material=S,g.groupOrder=T,g.renderOrder=v.renderOrder,g.z=w,g.group=y),e++,g}function d(v,x,S,T,w,y){const g=f(v,x,S,T,w,y);S.transmission>0?r.push(g):S.transparent===!0?o.push(g):n.push(g)}function p(v,x,S,T,w,y){const g=f(v,x,S,T,w,y);S.transmission>0?r.unshift(g):S.transparent===!0?o.unshift(g):n.unshift(g)}function m(v,x){n.length>1&&n.sort(v||V1),r.length>1&&r.sort(x||gm),o.length>1&&o.sort(x||gm)}function _(){for(let v=e,x=a.length;v<x;v++){const S=a[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:d,unshift:p,finish:_,sort:m}}function W1(){let a=new WeakMap;function e(r,o){const c=a.get(r);let f;return c===void 0?(f=new _m,a.set(r,[f])):o>=c.length?(f=new _m,c.push(f)):f=c[o],f}function n(){a=new WeakMap}return{get:e,dispose:n}}function j1(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ne,color:new xt};break;case"SpotLight":n={position:new ne,direction:new ne,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ne,color:new xt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ne,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":n={color:new xt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return a[e.id]=n,n}}}function X1(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=n,n}}}let Z1=0;function q1(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Y1(a){const e=new j1,n=X1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ne);const o=new ne,c=new Ht,f=new Ht;function d(m){let _=0,v=0,x=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let S=0,T=0,w=0,y=0,g=0,D=0,L=0,C=0,Y=0,z=0,k=0;m.sort(q1);for(let R=0,A=m.length;R<A;R++){const F=m[R],ae=F.color,J=F.intensity,ue=F.distance,pe=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)_+=ae.r*J,v+=ae.g*J,x+=ae.b*J;else if(F.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(F.sh.coefficients[oe],J);k++}else if(F.isDirectionalLight){const oe=e.get(F);if(oe.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const le=F.shadow,B=n.get(F);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,r.directionalShadow[S]=B,r.directionalShadowMap[S]=pe,r.directionalShadowMatrix[S]=F.shadow.matrix,D++}r.directional[S]=oe,S++}else if(F.isSpotLight){const oe=e.get(F);oe.position.setFromMatrixPosition(F.matrixWorld),oe.color.copy(ae).multiplyScalar(J),oe.distance=ue,oe.coneCos=Math.cos(F.angle),oe.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),oe.decay=F.decay,r.spot[w]=oe;const le=F.shadow;if(F.map&&(r.spotLightMap[Y]=F.map,Y++,le.updateMatrices(F),F.castShadow&&z++),r.spotLightMatrix[w]=le.matrix,F.castShadow){const B=n.get(F);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,r.spotShadow[w]=B,r.spotShadowMap[w]=pe,C++}w++}else if(F.isRectAreaLight){const oe=e.get(F);oe.color.copy(ae).multiplyScalar(J),oe.halfWidth.set(F.width*.5,0,0),oe.halfHeight.set(0,F.height*.5,0),r.rectArea[y]=oe,y++}else if(F.isPointLight){const oe=e.get(F);if(oe.color.copy(F.color).multiplyScalar(F.intensity),oe.distance=F.distance,oe.decay=F.decay,F.castShadow){const le=F.shadow,B=n.get(F);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,B.shadowCameraNear=le.camera.near,B.shadowCameraFar=le.camera.far,r.pointShadow[T]=B,r.pointShadowMap[T]=pe,r.pointShadowMatrix[T]=F.shadow.matrix,L++}r.point[T]=oe,T++}else if(F.isHemisphereLight){const oe=e.get(F);oe.skyColor.copy(F.color).multiplyScalar(J),oe.groundColor.copy(F.groundColor).multiplyScalar(J),r.hemi[g]=oe,g++}}y>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=x;const X=r.hash;(X.directionalLength!==S||X.pointLength!==T||X.spotLength!==w||X.rectAreaLength!==y||X.hemiLength!==g||X.numDirectionalShadows!==D||X.numPointShadows!==L||X.numSpotShadows!==C||X.numSpotMaps!==Y||X.numLightProbes!==k)&&(r.directional.length=S,r.spot.length=w,r.rectArea.length=y,r.point.length=T,r.hemi.length=g,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=C+Y-z,r.spotLightMap.length=Y,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=k,X.directionalLength=S,X.pointLength=T,X.spotLength=w,X.rectAreaLength=y,X.hemiLength=g,X.numDirectionalShadows=D,X.numPointShadows=L,X.numSpotShadows=C,X.numSpotMaps=Y,X.numLightProbes=k,r.version=Z1++)}function p(m,_){let v=0,x=0,S=0,T=0,w=0;const y=_.matrixWorldInverse;for(let g=0,D=m.length;g<D;g++){const L=m[g];if(L.isDirectionalLight){const C=r.directional[v];C.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(y),v++}else if(L.isSpotLight){const C=r.spot[S];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(y),S++}else if(L.isRectAreaLight){const C=r.rectArea[T];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),f.identity(),c.copy(L.matrixWorld),c.premultiply(y),f.extractRotation(c),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),C.halfWidth.applyMatrix4(f),C.halfHeight.applyMatrix4(f),T++}else if(L.isPointLight){const C=r.point[x];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),x++}else if(L.isHemisphereLight){const C=r.hemi[w];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(y),w++}}}return{setup:d,setupView:p,state:r}}function vm(a){const e=new Y1(a),n=[],r=[];function o(_){m.camera=_,n.length=0,r.length=0}function c(_){n.push(_)}function f(_){r.push(_)}function d(){e.setup(n)}function p(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:f}}function $1(a){let e=new WeakMap;function n(o,c=0){const f=e.get(o);let d;return f===void 0?(d=new vm(a),e.set(o,[d])):c>=f.length?(d=new vm(a),f.push(d)):d=f[c],d}function r(){e=new WeakMap}return{get:n,dispose:r}}class K1 extends Os{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=j_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class J1 extends Os{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Q1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function tM(a,e,n){let r=new Jm;const o=new Rt,c=new Rt,f=new zt,d=new K1({depthPacking:X_}),p=new J1,m={},_=n.maxTextureSize,v={[yr]:Cn,[Cn]:yr,[ki]:ki},x=new Sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:Q1,fragmentShader:eM}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const T=new yi;T.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new vi(T,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Am;let g=this.type;this.render=function(z,k,X){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||z.length===0)return;const R=a.getRenderTarget(),A=a.getActiveCubeFace(),F=a.getActiveMipmapLevel(),ae=a.state;ae.setBlending(vr),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const J=g!==Oi&&this.type===Oi,ue=g===Oi&&this.type!==Oi;for(let pe=0,oe=z.length;pe<oe;pe++){const le=z[pe],B=le.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;o.copy(B.mapSize);const ce=B.getFrameExtents();if(o.multiply(ce),c.copy(B.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(c.x=Math.floor(_/ce.x),o.x=c.x*ce.x,B.mapSize.x=c.x),o.y>_&&(c.y=Math.floor(_/ce.y),o.y=c.y*ce.y,B.mapSize.y=c.y)),B.map===null||J===!0||ue===!0){const U=this.type!==Oi?{minFilter:ci,magFilter:ci}:{};B.map!==null&&B.map.dispose(),B.map=new Yr(o.x,o.y,U),B.map.texture.name=le.name+".shadowMap",B.camera.updateProjectionMatrix()}a.setRenderTarget(B.map),a.clear();const se=B.getViewportCount();for(let U=0;U<se;U++){const ie=B.getViewport(U);f.set(c.x*ie.x,c.y*ie.y,c.x*ie.z,c.y*ie.w),ae.viewport(f),B.updateMatrices(le,U),r=B.getFrustum(),C(k,X,B.camera,le,this.type)}B.isPointLightShadow!==!0&&this.type===Oi&&D(B,X),B.needsUpdate=!1}g=this.type,y.needsUpdate=!1,a.setRenderTarget(R,A,F)};function D(z,k){const X=e.update(w);x.defines.VSM_SAMPLES!==z.blurSamples&&(x.defines.VSM_SAMPLES=z.blurSamples,S.defines.VSM_SAMPLES=z.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Yr(o.x,o.y)),x.uniforms.shadow_pass.value=z.map.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,a.setRenderTarget(z.mapPass),a.clear(),a.renderBufferDirect(k,null,X,x,w,null),S.uniforms.shadow_pass.value=z.mapPass.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,a.setRenderTarget(z.map),a.clear(),a.renderBufferDirect(k,null,X,S,w,null)}function L(z,k,X,R){let A=null;const F=X.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(F!==void 0)A=F;else if(A=X.isPointLight===!0?p:d,a.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const ae=A.uuid,J=k.uuid;let ue=m[ae];ue===void 0&&(ue={},m[ae]=ue);let pe=ue[J];pe===void 0&&(pe=A.clone(),ue[J]=pe,k.addEventListener("dispose",Y)),A=pe}if(A.visible=k.visible,A.wireframe=k.wireframe,R===Oi?A.side=k.shadowSide!==null?k.shadowSide:k.side:A.side=k.shadowSide!==null?k.shadowSide:v[k.side],A.alphaMap=k.alphaMap,A.alphaTest=k.alphaTest,A.map=k.map,A.clipShadows=k.clipShadows,A.clippingPlanes=k.clippingPlanes,A.clipIntersection=k.clipIntersection,A.displacementMap=k.displacementMap,A.displacementScale=k.displacementScale,A.displacementBias=k.displacementBias,A.wireframeLinewidth=k.wireframeLinewidth,A.linewidth=k.linewidth,X.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const ae=a.properties.get(A);ae.light=X}return A}function C(z,k,X,R,A){if(z.visible===!1)return;if(z.layers.test(k.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&A===Oi)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,z.matrixWorld);const J=e.update(z),ue=z.material;if(Array.isArray(ue)){const pe=J.groups;for(let oe=0,le=pe.length;oe<le;oe++){const B=pe[oe],ce=ue[B.materialIndex];if(ce&&ce.visible){const se=L(z,ce,R,A);z.onBeforeShadow(a,z,k,X,J,se,B),a.renderBufferDirect(X,null,J,se,z,B),z.onAfterShadow(a,z,k,X,J,se,B)}}}else if(ue.visible){const pe=L(z,ue,R,A);z.onBeforeShadow(a,z,k,X,J,pe,null),a.renderBufferDirect(X,null,J,pe,z,null),z.onAfterShadow(a,z,k,X,J,pe,null)}}const ae=z.children;for(let J=0,ue=ae.length;J<ue;J++)C(ae[J],k,X,R,A)}function Y(z){z.target.removeEventListener("dispose",Y);for(const X in m){const R=m[X],A=z.target.uuid;A in R&&(R[A].dispose(),delete R[A])}}}const nM={[ju]:Xu,[Zu]:$u,[qu]:Ku,[ka]:Yu,[Xu]:ju,[$u]:Zu,[Ku]:qu,[Yu]:ka};function iM(a,e){function n(){let G=!1;const Ce=new zt;let re=null;const he=new zt(0,0,0,0);return{setMask:function(Le){re!==Le&&!G&&(a.colorMask(Le,Le,Le,Le),re=Le)},setLocked:function(Le){G=Le},setClear:function(Le,Pe,rt,It,Wt){Wt===!0&&(Le*=It,Pe*=It,rt*=It),Ce.set(Le,Pe,rt,It),he.equals(Ce)===!1&&(a.clearColor(Le,Pe,rt,It),he.copy(Ce))},reset:function(){G=!1,re=null,he.set(-1,0,0,0)}}}function r(){let G=!1,Ce=!1,re=null,he=null,Le=null;return{setReversed:function(Pe){if(Ce!==Pe){const rt=e.get("EXT_clip_control");Ce?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);const It=Le;Le=null,this.setClear(It)}Ce=Pe},getReversed:function(){return Ce},setTest:function(Pe){Pe?xe(a.DEPTH_TEST):we(a.DEPTH_TEST)},setMask:function(Pe){re!==Pe&&!G&&(a.depthMask(Pe),re=Pe)},setFunc:function(Pe){if(Ce&&(Pe=nM[Pe]),he!==Pe){switch(Pe){case ju:a.depthFunc(a.NEVER);break;case Xu:a.depthFunc(a.ALWAYS);break;case Zu:a.depthFunc(a.LESS);break;case ka:a.depthFunc(a.LEQUAL);break;case qu:a.depthFunc(a.EQUAL);break;case Yu:a.depthFunc(a.GEQUAL);break;case $u:a.depthFunc(a.GREATER);break;case Ku:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}he=Pe}},setLocked:function(Pe){G=Pe},setClear:function(Pe){Le!==Pe&&(Ce&&(Pe=1-Pe),a.clearDepth(Pe),Le=Pe)},reset:function(){G=!1,re=null,he=null,Le=null,Ce=!1}}}function o(){let G=!1,Ce=null,re=null,he=null,Le=null,Pe=null,rt=null,It=null,Wt=null;return{setTest:function(gt){G||(gt?xe(a.STENCIL_TEST):we(a.STENCIL_TEST))},setMask:function(gt){Ce!==gt&&!G&&(a.stencilMask(gt),Ce=gt)},setFunc:function(gt,vn,hn){(re!==gt||he!==vn||Le!==hn)&&(a.stencilFunc(gt,vn,hn),re=gt,he=vn,Le=hn)},setOp:function(gt,vn,hn){(Pe!==gt||rt!==vn||It!==hn)&&(a.stencilOp(gt,vn,hn),Pe=gt,rt=vn,It=hn)},setLocked:function(gt){G=gt},setClear:function(gt){Wt!==gt&&(a.clearStencil(gt),Wt=gt)},reset:function(){G=!1,Ce=null,re=null,he=null,Le=null,Pe=null,rt=null,It=null,Wt=null}}}const c=new n,f=new r,d=new o,p=new WeakMap,m=new WeakMap;let _={},v={},x=new WeakMap,S=[],T=null,w=!1,y=null,g=null,D=null,L=null,C=null,Y=null,z=null,k=new xt(0,0,0),X=0,R=!1,A=null,F=null,ae=null,J=null,ue=null;const pe=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,le=0;const B=a.getParameter(a.VERSION);B.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(B)[1]),oe=le>=1):B.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),oe=le>=2);let ce=null,se={};const U=a.getParameter(a.SCISSOR_BOX),ie=a.getParameter(a.VIEWPORT),Ne=new zt().fromArray(U),K=new zt().fromArray(ie);function de(G,Ce,re,he){const Le=new Uint8Array(4),Pe=a.createTexture();a.bindTexture(G,Pe),a.texParameteri(G,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(G,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let rt=0;rt<re;rt++)G===a.TEXTURE_3D||G===a.TEXTURE_2D_ARRAY?a.texImage3D(Ce,0,a.RGBA,1,1,he,0,a.RGBA,a.UNSIGNED_BYTE,Le):a.texImage2D(Ce+rt,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Le);return Pe}const Ee={};Ee[a.TEXTURE_2D]=de(a.TEXTURE_2D,a.TEXTURE_2D,1),Ee[a.TEXTURE_CUBE_MAP]=de(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[a.TEXTURE_2D_ARRAY]=de(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Ee[a.TEXTURE_3D]=de(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),xe(a.DEPTH_TEST),f.setFunc(ka),ft(!1),ct(Ep),xe(a.CULL_FACE),j(vr);function xe(G){_[G]!==!0&&(a.enable(G),_[G]=!0)}function we(G){_[G]!==!1&&(a.disable(G),_[G]=!1)}function De(G,Ce){return v[G]!==Ce?(a.bindFramebuffer(G,Ce),v[G]=Ce,G===a.DRAW_FRAMEBUFFER&&(v[a.FRAMEBUFFER]=Ce),G===a.FRAMEBUFFER&&(v[a.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Ke(G,Ce){let re=S,he=!1;if(G){re=x.get(Ce),re===void 0&&(re=[],x.set(Ce,re));const Le=G.textures;if(re.length!==Le.length||re[0]!==a.COLOR_ATTACHMENT0){for(let Pe=0,rt=Le.length;Pe<rt;Pe++)re[Pe]=a.COLOR_ATTACHMENT0+Pe;re.length=Le.length,he=!0}}else re[0]!==a.BACK&&(re[0]=a.BACK,he=!0);he&&a.drawBuffers(re)}function wt(G){return T!==G?(a.useProgram(G),T=G,!0):!1}const ht={[Wr]:a.FUNC_ADD,[v_]:a.FUNC_SUBTRACT,[x_]:a.FUNC_REVERSE_SUBTRACT};ht[y_]=a.MIN,ht[S_]=a.MAX;const Pt={[M_]:a.ZERO,[E_]:a.ONE,[T_]:a.SRC_COLOR,[Vu]:a.SRC_ALPHA,[P_]:a.SRC_ALPHA_SATURATE,[C_]:a.DST_COLOR,[w_]:a.DST_ALPHA,[b_]:a.ONE_MINUS_SRC_COLOR,[Wu]:a.ONE_MINUS_SRC_ALPHA,[R_]:a.ONE_MINUS_DST_COLOR,[A_]:a.ONE_MINUS_DST_ALPHA,[L_]:a.CONSTANT_COLOR,[I_]:a.ONE_MINUS_CONSTANT_COLOR,[N_]:a.CONSTANT_ALPHA,[D_]:a.ONE_MINUS_CONSTANT_ALPHA};function j(G,Ce,re,he,Le,Pe,rt,It,Wt,gt){if(G===vr){w===!0&&(we(a.BLEND),w=!1);return}if(w===!1&&(xe(a.BLEND),w=!0),G!==__){if(G!==y||gt!==R){if((g!==Wr||C!==Wr)&&(a.blendEquation(a.FUNC_ADD),g=Wr,C=Wr),gt)switch(G){case Ua:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Gu:a.blendFunc(a.ONE,a.ONE);break;case Tp:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case bp:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ua:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Gu:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case Tp:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case bp:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}D=null,L=null,Y=null,z=null,k.set(0,0,0),X=0,y=G,R=gt}return}Le=Le||Ce,Pe=Pe||re,rt=rt||he,(Ce!==g||Le!==C)&&(a.blendEquationSeparate(ht[Ce],ht[Le]),g=Ce,C=Le),(re!==D||he!==L||Pe!==Y||rt!==z)&&(a.blendFuncSeparate(Pt[re],Pt[he],Pt[Pe],Pt[rt]),D=re,L=he,Y=Pe,z=rt),(It.equals(k)===!1||Wt!==X)&&(a.blendColor(It.r,It.g,It.b,Wt),k.copy(It),X=Wt),y=G,R=!1}function fn(G,Ce){G.side===ki?we(a.CULL_FACE):xe(a.CULL_FACE);let re=G.side===Cn;Ce&&(re=!re),ft(re),G.blending===Ua&&G.transparent===!1?j(vr):j(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),f.setFunc(G.depthFunc),f.setTest(G.depthTest),f.setMask(G.depthWrite),c.setMask(G.colorWrite);const he=G.stencilWrite;d.setTest(he),he&&(d.setMask(G.stencilWriteMask),d.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),d.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Tt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?xe(a.SAMPLE_ALPHA_TO_COVERAGE):we(a.SAMPLE_ALPHA_TO_COVERAGE)}function ft(G){A!==G&&(G?a.frontFace(a.CW):a.frontFace(a.CCW),A=G)}function ct(G){G!==p_?(xe(a.CULL_FACE),G!==F&&(G===Ep?a.cullFace(a.BACK):G===m_?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):we(a.CULL_FACE),F=G}function qe(G){G!==ae&&(oe&&a.lineWidth(G),ae=G)}function Tt(G,Ce,re){G?(xe(a.POLYGON_OFFSET_FILL),(J!==Ce||ue!==re)&&(a.polygonOffset(Ce,re),J=Ce,ue=re)):we(a.POLYGON_OFFSET_FILL)}function Ze(G){G?xe(a.SCISSOR_TEST):we(a.SCISSOR_TEST)}function P(G){G===void 0&&(G=a.TEXTURE0+pe-1),ce!==G&&(a.activeTexture(G),ce=G)}function E(G,Ce,re){re===void 0&&(ce===null?re=a.TEXTURE0+pe-1:re=ce);let he=se[re];he===void 0&&(he={type:void 0,texture:void 0},se[re]=he),(he.type!==G||he.texture!==Ce)&&(ce!==re&&(a.activeTexture(re),ce=re),a.bindTexture(G,Ce||Ee[G]),he.type=G,he.texture=Ce)}function $(){const G=se[ce];G!==void 0&&G.type!==void 0&&(a.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function me(){try{a.compressedTexImage2D.apply(a,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(){try{a.compressedTexImage3D.apply(a,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function fe(){try{a.texSubImage2D.apply(a,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ge(){try{a.texSubImage3D.apply(a,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ae(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ue(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function lt(){try{a.texStorage2D.apply(a,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Se(){try{a.texStorage3D.apply(a,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Oe(){try{a.texImage2D.apply(a,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Je(){try{a.texImage3D.apply(a,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Qe(G){Ne.equals(G)===!1&&(a.scissor(G.x,G.y,G.z,G.w),Ne.copy(G))}function ke(G){K.equals(G)===!1&&(a.viewport(G.x,G.y,G.z,G.w),K.copy(G))}function ut(G,Ce){let re=m.get(Ce);re===void 0&&(re=new WeakMap,m.set(Ce,re));let he=re.get(G);he===void 0&&(he=a.getUniformBlockIndex(Ce,G.name),re.set(G,he))}function it(G,Ce){const he=m.get(Ce).get(G);p.get(Ce)!==he&&(a.uniformBlockBinding(Ce,he,G.__bindingPointIndex),p.set(Ce,he))}function Et(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),f.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),_={},ce=null,se={},v={},x=new WeakMap,S=[],T=null,w=!1,y=null,g=null,D=null,L=null,C=null,Y=null,z=null,k=new xt(0,0,0),X=0,R=!1,A=null,F=null,ae=null,J=null,ue=null,Ne.set(0,0,a.canvas.width,a.canvas.height),K.set(0,0,a.canvas.width,a.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:xe,disable:we,bindFramebuffer:De,drawBuffers:Ke,useProgram:wt,setBlending:j,setMaterial:fn,setFlipSided:ft,setCullFace:ct,setLineWidth:qe,setPolygonOffset:Tt,setScissorTest:Ze,activeTexture:P,bindTexture:E,unbindTexture:$,compressedTexImage2D:me,compressedTexImage3D:_e,texImage2D:Oe,texImage3D:Je,updateUBOMapping:ut,uniformBlockBinding:it,texStorage2D:lt,texStorage3D:Se,texSubImage2D:fe,texSubImage3D:Ge,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Ue,scissor:Qe,viewport:ke,reset:Et}}function xm(a,e,n,r){const o=rM(r);switch(n){case Nm:return a*e;case Um:return a*e;case Fm:return a*e*2;case Om:return a*e/o.components*o.byteLength;case kd:return a*e/o.components*o.byteLength;case km:return a*e*2/o.components*o.byteLength;case Bd:return a*e*2/o.components*o.byteLength;case Dm:return a*e*3/o.components*o.byteLength;case li:return a*e*4/o.components*o.byteLength;case zd:return a*e*4/o.components*o.byteLength;case gl:case _l:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case vl:case xl:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case id:case ad:return Math.max(a,16)*Math.max(e,8)/4;case nd:case rd:return Math.max(a,8)*Math.max(e,8)/2;case sd:case od:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case ld:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case cd:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case ud:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case dd:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case fd:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case hd:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case pd:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case md:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case gd:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case _d:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case vd:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case xd:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case yd:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Sd:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Md:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case yl:case Ed:case Td:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Bm:case bd:return Math.ceil(a/4)*Math.ceil(e/4)*8;case wd:case Ad:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function rM(a){switch(a){case Gi:case Pm:return{byteLength:1,components:1};case Is:case Lm:case Ns:return{byteLength:2,components:1};case Fd:case Od:return{byteLength:2,components:4};case qr:case Ud:case Bi:return{byteLength:4,components:1};case Im:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}function aM(a,e,n,r,o,c,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Rt,_=new WeakMap;let v;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(P,E){return S?new OffscreenCanvas(P,E):El("canvas")}function w(P,E,$){let me=1;const _e=Ze(P);if((_e.width>$||_e.height>$)&&(me=$/Math.max(_e.width,_e.height)),me<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const fe=Math.floor(me*_e.width),Ge=Math.floor(me*_e.height);v===void 0&&(v=T(fe,Ge));const Ae=E?T(fe,Ge):v;return Ae.width=fe,Ae.height=Ge,Ae.getContext("2d").drawImage(P,0,0,fe,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+fe+"x"+Ge+")."),Ae}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),P;return P}function y(P){return P.generateMipmaps}function g(P){a.generateMipmap(P)}function D(P){return P.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?a.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function L(P,E,$,me,_e=!1){if(P!==null){if(a[P]!==void 0)return a[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let fe=E;if(E===a.RED&&($===a.FLOAT&&(fe=a.R32F),$===a.HALF_FLOAT&&(fe=a.R16F),$===a.UNSIGNED_BYTE&&(fe=a.R8)),E===a.RED_INTEGER&&($===a.UNSIGNED_BYTE&&(fe=a.R8UI),$===a.UNSIGNED_SHORT&&(fe=a.R16UI),$===a.UNSIGNED_INT&&(fe=a.R32UI),$===a.BYTE&&(fe=a.R8I),$===a.SHORT&&(fe=a.R16I),$===a.INT&&(fe=a.R32I)),E===a.RG&&($===a.FLOAT&&(fe=a.RG32F),$===a.HALF_FLOAT&&(fe=a.RG16F),$===a.UNSIGNED_BYTE&&(fe=a.RG8)),E===a.RG_INTEGER&&($===a.UNSIGNED_BYTE&&(fe=a.RG8UI),$===a.UNSIGNED_SHORT&&(fe=a.RG16UI),$===a.UNSIGNED_INT&&(fe=a.RG32UI),$===a.BYTE&&(fe=a.RG8I),$===a.SHORT&&(fe=a.RG16I),$===a.INT&&(fe=a.RG32I)),E===a.RGB_INTEGER&&($===a.UNSIGNED_BYTE&&(fe=a.RGB8UI),$===a.UNSIGNED_SHORT&&(fe=a.RGB16UI),$===a.UNSIGNED_INT&&(fe=a.RGB32UI),$===a.BYTE&&(fe=a.RGB8I),$===a.SHORT&&(fe=a.RGB16I),$===a.INT&&(fe=a.RGB32I)),E===a.RGBA_INTEGER&&($===a.UNSIGNED_BYTE&&(fe=a.RGBA8UI),$===a.UNSIGNED_SHORT&&(fe=a.RGBA16UI),$===a.UNSIGNED_INT&&(fe=a.RGBA32UI),$===a.BYTE&&(fe=a.RGBA8I),$===a.SHORT&&(fe=a.RGBA16I),$===a.INT&&(fe=a.RGBA32I)),E===a.RGB&&$===a.UNSIGNED_INT_5_9_9_9_REV&&(fe=a.RGB9_E5),E===a.RGBA){const Ge=_e?bl:vt.getTransfer(me);$===a.FLOAT&&(fe=a.RGBA32F),$===a.HALF_FLOAT&&(fe=a.RGBA16F),$===a.UNSIGNED_BYTE&&(fe=Ge===At?a.SRGB8_ALPHA8:a.RGBA8),$===a.UNSIGNED_SHORT_4_4_4_4&&(fe=a.RGBA4),$===a.UNSIGNED_SHORT_5_5_5_1&&(fe=a.RGB5_A1)}return(fe===a.R16F||fe===a.R32F||fe===a.RG16F||fe===a.RG32F||fe===a.RGBA16F||fe===a.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function C(P,E){let $;return P?E===null||E===qr||E===Ha?$=a.DEPTH24_STENCIL8:E===Bi?$=a.DEPTH32F_STENCIL8:E===Is&&($=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===qr||E===Ha?$=a.DEPTH_COMPONENT24:E===Bi?$=a.DEPTH_COMPONENT32F:E===Is&&($=a.DEPTH_COMPONENT16),$}function Y(P,E){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==ci&&P.minFilter!==_i?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function z(P){const E=P.target;E.removeEventListener("dispose",z),X(E),E.isVideoTexture&&_.delete(E)}function k(P){const E=P.target;E.removeEventListener("dispose",k),A(E)}function X(P){const E=r.get(P);if(E.__webglInit===void 0)return;const $=P.source,me=x.get($);if(me){const _e=me[E.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&R(P),Object.keys(me).length===0&&x.delete($)}r.remove(P)}function R(P){const E=r.get(P);a.deleteTexture(E.__webglTexture);const $=P.source,me=x.get($);delete me[E.__cacheKey],f.memory.textures--}function A(P){const E=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(E.__webglFramebuffer[me]))for(let _e=0;_e<E.__webglFramebuffer[me].length;_e++)a.deleteFramebuffer(E.__webglFramebuffer[me][_e]);else a.deleteFramebuffer(E.__webglFramebuffer[me]);E.__webglDepthbuffer&&a.deleteRenderbuffer(E.__webglDepthbuffer[me])}else{if(Array.isArray(E.__webglFramebuffer))for(let me=0;me<E.__webglFramebuffer.length;me++)a.deleteFramebuffer(E.__webglFramebuffer[me]);else a.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&a.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&a.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let me=0;me<E.__webglColorRenderbuffer.length;me++)E.__webglColorRenderbuffer[me]&&a.deleteRenderbuffer(E.__webglColorRenderbuffer[me]);E.__webglDepthRenderbuffer&&a.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=P.textures;for(let me=0,_e=$.length;me<_e;me++){const fe=r.get($[me]);fe.__webglTexture&&(a.deleteTexture(fe.__webglTexture),f.memory.textures--),r.remove($[me])}r.remove(P)}let F=0;function ae(){F=0}function J(){const P=F;return P>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),F+=1,P}function ue(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function pe(P,E){const $=r.get(P);if(P.isVideoTexture&&qe(P),P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){const me=P.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K($,P,E);return}}n.bindTexture(a.TEXTURE_2D,$.__webglTexture,a.TEXTURE0+E)}function oe(P,E){const $=r.get(P);if(P.version>0&&$.__version!==P.version){K($,P,E);return}n.bindTexture(a.TEXTURE_2D_ARRAY,$.__webglTexture,a.TEXTURE0+E)}function le(P,E){const $=r.get(P);if(P.version>0&&$.__version!==P.version){K($,P,E);return}n.bindTexture(a.TEXTURE_3D,$.__webglTexture,a.TEXTURE0+E)}function B(P,E){const $=r.get(P);if(P.version>0&&$.__version!==P.version){de($,P,E);return}n.bindTexture(a.TEXTURE_CUBE_MAP,$.__webglTexture,a.TEXTURE0+E)}const ce={[ed]:a.REPEAT,[Xr]:a.CLAMP_TO_EDGE,[td]:a.MIRRORED_REPEAT},se={[ci]:a.NEAREST,[W_]:a.NEAREST_MIPMAP_NEAREST,[Xo]:a.NEAREST_MIPMAP_LINEAR,[_i]:a.LINEAR,[fu]:a.LINEAR_MIPMAP_NEAREST,[Zr]:a.LINEAR_MIPMAP_LINEAR},U={[Y_]:a.NEVER,[tv]:a.ALWAYS,[$_]:a.LESS,[zm]:a.LEQUAL,[K_]:a.EQUAL,[ev]:a.GEQUAL,[J_]:a.GREATER,[Q_]:a.NOTEQUAL};function ie(P,E){if(E.type===Bi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===_i||E.magFilter===fu||E.magFilter===Xo||E.magFilter===Zr||E.minFilter===_i||E.minFilter===fu||E.minFilter===Xo||E.minFilter===Zr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(P,a.TEXTURE_WRAP_S,ce[E.wrapS]),a.texParameteri(P,a.TEXTURE_WRAP_T,ce[E.wrapT]),(P===a.TEXTURE_3D||P===a.TEXTURE_2D_ARRAY)&&a.texParameteri(P,a.TEXTURE_WRAP_R,ce[E.wrapR]),a.texParameteri(P,a.TEXTURE_MAG_FILTER,se[E.magFilter]),a.texParameteri(P,a.TEXTURE_MIN_FILTER,se[E.minFilter]),E.compareFunction&&(a.texParameteri(P,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(P,a.TEXTURE_COMPARE_FUNC,U[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ci||E.minFilter!==Xo&&E.minFilter!==Zr||E.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");a.texParameterf(P,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Ne(P,E){let $=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",z));const me=E.source;let _e=x.get(me);_e===void 0&&(_e={},x.set(me,_e));const fe=ue(E);if(fe!==P.__cacheKey){_e[fe]===void 0&&(_e[fe]={texture:a.createTexture(),usedTimes:0},f.memory.textures++,$=!0),_e[fe].usedTimes++;const Ge=_e[P.__cacheKey];Ge!==void 0&&(_e[P.__cacheKey].usedTimes--,Ge.usedTimes===0&&R(E)),P.__cacheKey=fe,P.__webglTexture=_e[fe].texture}return $}function K(P,E,$){let me=a.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(me=a.TEXTURE_2D_ARRAY),E.isData3DTexture&&(me=a.TEXTURE_3D);const _e=Ne(P,E),fe=E.source;n.bindTexture(me,P.__webglTexture,a.TEXTURE0+$);const Ge=r.get(fe);if(fe.version!==Ge.__version||_e===!0){n.activeTexture(a.TEXTURE0+$);const Ae=vt.getPrimaries(vt.workingColorSpace),Ue=E.colorSpace===_r?null:vt.getPrimaries(E.colorSpace),lt=E.colorSpace===_r||Ae===Ue?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,E.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,E.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let Se=w(E.image,!1,o.maxTextureSize);Se=Tt(E,Se);const Oe=c.convert(E.format,E.colorSpace),Je=c.convert(E.type);let Qe=L(E.internalFormat,Oe,Je,E.colorSpace,E.isVideoTexture);ie(me,E);let ke;const ut=E.mipmaps,it=E.isVideoTexture!==!0,Et=Ge.__version===void 0||_e===!0,G=fe.dataReady,Ce=Y(E,Se);if(E.isDepthTexture)Qe=C(E.format===Ga,E.type),Et&&(it?n.texStorage2D(a.TEXTURE_2D,1,Qe,Se.width,Se.height):n.texImage2D(a.TEXTURE_2D,0,Qe,Se.width,Se.height,0,Oe,Je,null));else if(E.isDataTexture)if(ut.length>0){it&&Et&&n.texStorage2D(a.TEXTURE_2D,Ce,Qe,ut[0].width,ut[0].height);for(let re=0,he=ut.length;re<he;re++)ke=ut[re],it?G&&n.texSubImage2D(a.TEXTURE_2D,re,0,0,ke.width,ke.height,Oe,Je,ke.data):n.texImage2D(a.TEXTURE_2D,re,Qe,ke.width,ke.height,0,Oe,Je,ke.data);E.generateMipmaps=!1}else it?(Et&&n.texStorage2D(a.TEXTURE_2D,Ce,Qe,Se.width,Se.height),G&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,Se.width,Se.height,Oe,Je,Se.data)):n.texImage2D(a.TEXTURE_2D,0,Qe,Se.width,Se.height,0,Oe,Je,Se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){it&&Et&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ce,Qe,ut[0].width,ut[0].height,Se.depth);for(let re=0,he=ut.length;re<he;re++)if(ke=ut[re],E.format!==li)if(Oe!==null)if(it){if(G)if(E.layerUpdates.size>0){const Le=xm(ke.width,ke.height,E.format,E.type);for(const Pe of E.layerUpdates){const rt=ke.data.subarray(Pe*Le/ke.data.BYTES_PER_ELEMENT,(Pe+1)*Le/ke.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,re,0,0,Pe,ke.width,ke.height,1,Oe,rt)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,re,0,0,0,ke.width,ke.height,Se.depth,Oe,ke.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,re,Qe,ke.width,ke.height,Se.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?G&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,re,0,0,0,ke.width,ke.height,Se.depth,Oe,Je,ke.data):n.texImage3D(a.TEXTURE_2D_ARRAY,re,Qe,ke.width,ke.height,Se.depth,0,Oe,Je,ke.data)}else{it&&Et&&n.texStorage2D(a.TEXTURE_2D,Ce,Qe,ut[0].width,ut[0].height);for(let re=0,he=ut.length;re<he;re++)ke=ut[re],E.format!==li?Oe!==null?it?G&&n.compressedTexSubImage2D(a.TEXTURE_2D,re,0,0,ke.width,ke.height,Oe,ke.data):n.compressedTexImage2D(a.TEXTURE_2D,re,Qe,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?G&&n.texSubImage2D(a.TEXTURE_2D,re,0,0,ke.width,ke.height,Oe,Je,ke.data):n.texImage2D(a.TEXTURE_2D,re,Qe,ke.width,ke.height,0,Oe,Je,ke.data)}else if(E.isDataArrayTexture)if(it){if(Et&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ce,Qe,Se.width,Se.height,Se.depth),G)if(E.layerUpdates.size>0){const re=xm(Se.width,Se.height,E.format,E.type);for(const he of E.layerUpdates){const Le=Se.data.subarray(he*re/Se.data.BYTES_PER_ELEMENT,(he+1)*re/Se.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,he,Se.width,Se.height,1,Oe,Je,Le)}E.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Oe,Je,Se.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,Qe,Se.width,Se.height,Se.depth,0,Oe,Je,Se.data);else if(E.isData3DTexture)it?(Et&&n.texStorage3D(a.TEXTURE_3D,Ce,Qe,Se.width,Se.height,Se.depth),G&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Oe,Je,Se.data)):n.texImage3D(a.TEXTURE_3D,0,Qe,Se.width,Se.height,Se.depth,0,Oe,Je,Se.data);else if(E.isFramebufferTexture){if(Et)if(it)n.texStorage2D(a.TEXTURE_2D,Ce,Qe,Se.width,Se.height);else{let re=Se.width,he=Se.height;for(let Le=0;Le<Ce;Le++)n.texImage2D(a.TEXTURE_2D,Le,Qe,re,he,0,Oe,Je,null),re>>=1,he>>=1}}else if(ut.length>0){if(it&&Et){const re=Ze(ut[0]);n.texStorage2D(a.TEXTURE_2D,Ce,Qe,re.width,re.height)}for(let re=0,he=ut.length;re<he;re++)ke=ut[re],it?G&&n.texSubImage2D(a.TEXTURE_2D,re,0,0,Oe,Je,ke):n.texImage2D(a.TEXTURE_2D,re,Qe,Oe,Je,ke);E.generateMipmaps=!1}else if(it){if(Et){const re=Ze(Se);n.texStorage2D(a.TEXTURE_2D,Ce,Qe,re.width,re.height)}G&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,Oe,Je,Se)}else n.texImage2D(a.TEXTURE_2D,0,Qe,Oe,Je,Se);y(E)&&g(me),Ge.__version=fe.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function de(P,E,$){if(E.image.length!==6)return;const me=Ne(P,E),_e=E.source;n.bindTexture(a.TEXTURE_CUBE_MAP,P.__webglTexture,a.TEXTURE0+$);const fe=r.get(_e);if(_e.version!==fe.__version||me===!0){n.activeTexture(a.TEXTURE0+$);const Ge=vt.getPrimaries(vt.workingColorSpace),Ae=E.colorSpace===_r?null:vt.getPrimaries(E.colorSpace),Ue=E.colorSpace===_r||Ge===Ae?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,E.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,E.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const lt=E.isCompressedTexture||E.image[0].isCompressedTexture,Se=E.image[0]&&E.image[0].isDataTexture,Oe=[];for(let he=0;he<6;he++)!lt&&!Se?Oe[he]=w(E.image[he],!0,o.maxCubemapSize):Oe[he]=Se?E.image[he].image:E.image[he],Oe[he]=Tt(E,Oe[he]);const Je=Oe[0],Qe=c.convert(E.format,E.colorSpace),ke=c.convert(E.type),ut=L(E.internalFormat,Qe,ke,E.colorSpace),it=E.isVideoTexture!==!0,Et=fe.__version===void 0||me===!0,G=_e.dataReady;let Ce=Y(E,Je);ie(a.TEXTURE_CUBE_MAP,E);let re;if(lt){it&&Et&&n.texStorage2D(a.TEXTURE_CUBE_MAP,Ce,ut,Je.width,Je.height);for(let he=0;he<6;he++){re=Oe[he].mipmaps;for(let Le=0;Le<re.length;Le++){const Pe=re[Le];E.format!==li?Qe!==null?it?G&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,0,0,Pe.width,Pe.height,Qe,Pe.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,ut,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?G&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,0,0,Pe.width,Pe.height,Qe,ke,Pe.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,ut,Pe.width,Pe.height,0,Qe,ke,Pe.data)}}}else{if(re=E.mipmaps,it&&Et){re.length>0&&Ce++;const he=Ze(Oe[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,Ce,ut,he.width,he.height)}for(let he=0;he<6;he++)if(Se){it?G&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Oe[he].width,Oe[he].height,Qe,ke,Oe[he].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ut,Oe[he].width,Oe[he].height,0,Qe,ke,Oe[he].data);for(let Le=0;Le<re.length;Le++){const rt=re[Le].image[he].image;it?G&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,0,0,rt.width,rt.height,Qe,ke,rt.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,ut,rt.width,rt.height,0,Qe,ke,rt.data)}}else{it?G&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Qe,ke,Oe[he]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ut,Qe,ke,Oe[he]);for(let Le=0;Le<re.length;Le++){const Pe=re[Le];it?G&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,0,0,Qe,ke,Pe.image[he]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,ut,Qe,ke,Pe.image[he])}}}y(E)&&g(a.TEXTURE_CUBE_MAP),fe.__version=_e.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Ee(P,E,$,me,_e,fe){const Ge=c.convert($.format,$.colorSpace),Ae=c.convert($.type),Ue=L($.internalFormat,Ge,Ae,$.colorSpace),lt=r.get(E),Se=r.get($);if(Se.__renderTarget=E,!lt.__hasExternalTextures){const Oe=Math.max(1,E.width>>fe),Je=Math.max(1,E.height>>fe);_e===a.TEXTURE_3D||_e===a.TEXTURE_2D_ARRAY?n.texImage3D(_e,fe,Ue,Oe,Je,E.depth,0,Ge,Ae,null):n.texImage2D(_e,fe,Ue,Oe,Je,0,Ge,Ae,null)}n.bindFramebuffer(a.FRAMEBUFFER,P),ct(E)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,me,_e,Se.__webglTexture,0,ft(E)):(_e===a.TEXTURE_2D||_e>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,me,_e,Se.__webglTexture,fe),n.bindFramebuffer(a.FRAMEBUFFER,null)}function xe(P,E,$){if(a.bindRenderbuffer(a.RENDERBUFFER,P),E.depthBuffer){const me=E.depthTexture,_e=me&&me.isDepthTexture?me.type:null,fe=C(E.stencilBuffer,_e),Ge=E.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ae=ft(E);ct(E)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ae,fe,E.width,E.height):$?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ae,fe,E.width,E.height):a.renderbufferStorage(a.RENDERBUFFER,fe,E.width,E.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ge,a.RENDERBUFFER,P)}else{const me=E.textures;for(let _e=0;_e<me.length;_e++){const fe=me[_e],Ge=c.convert(fe.format,fe.colorSpace),Ae=c.convert(fe.type),Ue=L(fe.internalFormat,Ge,Ae,fe.colorSpace),lt=ft(E);$&&ct(E)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,lt,Ue,E.width,E.height):ct(E)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,lt,Ue,E.width,E.height):a.renderbufferStorage(a.RENDERBUFFER,Ue,E.width,E.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function we(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(a.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(E.depthTexture);me.__renderTarget=E,(!me.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),pe(E.depthTexture,0);const _e=me.__webglTexture,fe=ft(E);if(E.depthTexture.format===Fa)ct(E)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,_e,0,fe):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,_e,0);else if(E.depthTexture.format===Ga)ct(E)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,_e,0,fe):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function De(P){const E=r.get(P),$=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const me=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),me){const _e=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,me.removeEventListener("dispose",_e)};me.addEventListener("dispose",_e),E.__depthDisposeCallback=_e}E.__boundDepthTexture=me}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");we(E.__webglFramebuffer,P)}else if($){E.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(n.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer[me]),E.__webglDepthbuffer[me]===void 0)E.__webglDepthbuffer[me]=a.createRenderbuffer(),xe(E.__webglDepthbuffer[me],P,!1);else{const _e=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,fe=E.__webglDepthbuffer[me];a.bindRenderbuffer(a.RENDERBUFFER,fe),a.framebufferRenderbuffer(a.FRAMEBUFFER,_e,a.RENDERBUFFER,fe)}}else if(n.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=a.createRenderbuffer(),xe(E.__webglDepthbuffer,P,!1);else{const me=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,_e=E.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,_e),a.framebufferRenderbuffer(a.FRAMEBUFFER,me,a.RENDERBUFFER,_e)}n.bindFramebuffer(a.FRAMEBUFFER,null)}function Ke(P,E,$){const me=r.get(P);E!==void 0&&Ee(me.__webglFramebuffer,P,P.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),$!==void 0&&De(P)}function wt(P){const E=P.texture,$=r.get(P),me=r.get(E);P.addEventListener("dispose",k);const _e=P.textures,fe=P.isWebGLCubeRenderTarget===!0,Ge=_e.length>1;if(Ge||(me.__webglTexture===void 0&&(me.__webglTexture=a.createTexture()),me.__version=E.version,f.memory.textures++),fe){$.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[Ae]=[];for(let Ue=0;Ue<E.mipmaps.length;Ue++)$.__webglFramebuffer[Ae][Ue]=a.createFramebuffer()}else $.__webglFramebuffer[Ae]=a.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ae=0;Ae<E.mipmaps.length;Ae++)$.__webglFramebuffer[Ae]=a.createFramebuffer()}else $.__webglFramebuffer=a.createFramebuffer();if(Ge)for(let Ae=0,Ue=_e.length;Ae<Ue;Ae++){const lt=r.get(_e[Ae]);lt.__webglTexture===void 0&&(lt.__webglTexture=a.createTexture(),f.memory.textures++)}if(P.samples>0&&ct(P)===!1){$.__webglMultisampledFramebuffer=a.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ae=0;Ae<_e.length;Ae++){const Ue=_e[Ae];$.__webglColorRenderbuffer[Ae]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,$.__webglColorRenderbuffer[Ae]);const lt=c.convert(Ue.format,Ue.colorSpace),Se=c.convert(Ue.type),Oe=L(Ue.internalFormat,lt,Se,Ue.colorSpace,P.isXRRenderTarget===!0),Je=ft(P);a.renderbufferStorageMultisample(a.RENDERBUFFER,Je,Oe,P.width,P.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ae,a.RENDERBUFFER,$.__webglColorRenderbuffer[Ae])}a.bindRenderbuffer(a.RENDERBUFFER,null),P.depthBuffer&&($.__webglDepthRenderbuffer=a.createRenderbuffer(),xe($.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(fe){n.bindTexture(a.TEXTURE_CUBE_MAP,me.__webglTexture),ie(a.TEXTURE_CUBE_MAP,E);for(let Ae=0;Ae<6;Ae++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ue=0;Ue<E.mipmaps.length;Ue++)Ee($.__webglFramebuffer[Ae][Ue],P,E,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ue);else Ee($.__webglFramebuffer[Ae],P,E,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);y(E)&&g(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ge){for(let Ae=0,Ue=_e.length;Ae<Ue;Ae++){const lt=_e[Ae],Se=r.get(lt);n.bindTexture(a.TEXTURE_2D,Se.__webglTexture),ie(a.TEXTURE_2D,lt),Ee($.__webglFramebuffer,P,lt,a.COLOR_ATTACHMENT0+Ae,a.TEXTURE_2D,0),y(lt)&&g(a.TEXTURE_2D)}n.unbindTexture()}else{let Ae=a.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ae=P.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Ae,me.__webglTexture),ie(Ae,E),E.mipmaps&&E.mipmaps.length>0)for(let Ue=0;Ue<E.mipmaps.length;Ue++)Ee($.__webglFramebuffer[Ue],P,E,a.COLOR_ATTACHMENT0,Ae,Ue);else Ee($.__webglFramebuffer,P,E,a.COLOR_ATTACHMENT0,Ae,0);y(E)&&g(Ae),n.unbindTexture()}P.depthBuffer&&De(P)}function ht(P){const E=P.textures;for(let $=0,me=E.length;$<me;$++){const _e=E[$];if(y(_e)){const fe=D(P),Ge=r.get(_e).__webglTexture;n.bindTexture(fe,Ge),g(fe),n.unbindTexture()}}}const Pt=[],j=[];function fn(P){if(P.samples>0){if(ct(P)===!1){const E=P.textures,$=P.width,me=P.height;let _e=a.COLOR_BUFFER_BIT;const fe=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ge=r.get(P),Ae=E.length>1;if(Ae)for(let Ue=0;Ue<E.length;Ue++)n.bindFramebuffer(a.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ue,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,Ge.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ue,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Ue=0;Ue<E.length;Ue++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(_e|=a.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(_e|=a.STENCIL_BUFFER_BIT)),Ae){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ue]);const lt=r.get(E[Ue]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,lt,0)}a.blitFramebuffer(0,0,$,me,0,0,$,me,_e,a.NEAREST),p===!0&&(Pt.length=0,j.length=0,Pt.push(a.COLOR_ATTACHMENT0+Ue),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Pt.push(fe),j.push(fe),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,j)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Pt))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Ae)for(let Ue=0;Ue<E.length;Ue++){n.bindFramebuffer(a.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ue,a.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ue]);const lt=r.get(E[Ue]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,Ge.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ue,a.TEXTURE_2D,lt,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&p){const E=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[E])}}}function ft(P){return Math.min(o.maxSamples,P.samples)}function ct(P){const E=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function qe(P){const E=f.render.frame;_.get(P)!==E&&(_.set(P,E),P.update())}function Tt(P,E){const $=P.colorSpace,me=P.format,_e=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||$!==Wa&&$!==_r&&(vt.getTransfer($)===At?(me!==li||_e!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),E}function Ze(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(m.width=P.naturalWidth||P.width,m.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(m.width=P.displayWidth,m.height=P.displayHeight):(m.width=P.width,m.height=P.height),m}this.allocateTextureUnit=J,this.resetTextureUnits=ae,this.setTexture2D=pe,this.setTexture2DArray=oe,this.setTexture3D=le,this.setTextureCube=B,this.rebindTextures=Ke,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=fn,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ct}function sM(a,e){function n(r,o=_r){let c;const f=vt.getTransfer(o);if(r===Gi)return a.UNSIGNED_BYTE;if(r===Fd)return a.UNSIGNED_SHORT_4_4_4_4;if(r===Od)return a.UNSIGNED_SHORT_5_5_5_1;if(r===Im)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===Pm)return a.BYTE;if(r===Lm)return a.SHORT;if(r===Is)return a.UNSIGNED_SHORT;if(r===Ud)return a.INT;if(r===qr)return a.UNSIGNED_INT;if(r===Bi)return a.FLOAT;if(r===Ns)return a.HALF_FLOAT;if(r===Nm)return a.ALPHA;if(r===Dm)return a.RGB;if(r===li)return a.RGBA;if(r===Um)return a.LUMINANCE;if(r===Fm)return a.LUMINANCE_ALPHA;if(r===Fa)return a.DEPTH_COMPONENT;if(r===Ga)return a.DEPTH_STENCIL;if(r===Om)return a.RED;if(r===kd)return a.RED_INTEGER;if(r===km)return a.RG;if(r===Bd)return a.RG_INTEGER;if(r===zd)return a.RGBA_INTEGER;if(r===gl||r===_l||r===vl||r===xl)if(f===At)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===gl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===_l)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===vl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===xl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===gl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===_l)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===vl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===xl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===nd||r===id||r===rd||r===ad)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===nd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===id)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===rd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ad)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===sd||r===od||r===ld)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===sd||r===od)return f===At?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===ld)return f===At?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===cd||r===ud||r===dd||r===fd||r===hd||r===pd||r===md||r===gd||r===_d||r===vd||r===xd||r===yd||r===Sd||r===Md)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===cd)return f===At?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ud)return f===At?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===dd)return f===At?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===fd)return f===At?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===hd)return f===At?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===pd)return f===At?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===md)return f===At?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===gd)return f===At?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===_d)return f===At?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===vd)return f===At?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===xd)return f===At?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===yd)return f===At?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Sd)return f===At?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Md)return f===At?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===yl||r===Ed||r===Td)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===yl)return f===At?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ed)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Td)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Bm||r===bd||r===wd||r===Ad)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===yl)return c.COMPRESSED_RED_RGTC1_EXT;if(r===bd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===wd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ad)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ha?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:n}}class oM extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hl extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lM={type:"move"};class Hu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const w of e.hand.values()){const y=n.getJointPose(w,r),g=this._getHandJoint(m,w);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const _=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=_.position.distanceTo(v.position),S=.02,T=.005;m.inputState.pinching&&x>S+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(lM)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new hl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const cM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class dM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const o=new Rn,c=e.properties.get(o);c.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Sr({vertexShader:cM,fragmentShader:uM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new vi(new Al(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fM extends ja{constructor(e,n){super();const r=this;let o=null,c=1,f=null,d="local-floor",p=1,m=null,_=null,v=null,x=null,S=null,T=null;const w=new dM,y=n.getContextAttributes();let g=null,D=null;const L=[],C=[],Y=new Rt;let z=null;const k=new Zn;k.viewport=new zt;const X=new Zn;X.viewport=new zt;const R=[k,X],A=new oM;let F=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let de=L[K];return de===void 0&&(de=new Hu,L[K]=de),de.getTargetRaySpace()},this.getControllerGrip=function(K){let de=L[K];return de===void 0&&(de=new Hu,L[K]=de),de.getGripSpace()},this.getHand=function(K){let de=L[K];return de===void 0&&(de=new Hu,L[K]=de),de.getHandSpace()};function J(K){const de=C.indexOf(K.inputSource);if(de===-1)return;const Ee=L[de];Ee!==void 0&&(Ee.update(K.inputSource,K.frame,m||f),Ee.dispatchEvent({type:K.type,data:K.inputSource}))}function ue(){o.removeEventListener("select",J),o.removeEventListener("selectstart",J),o.removeEventListener("selectend",J),o.removeEventListener("squeeze",J),o.removeEventListener("squeezestart",J),o.removeEventListener("squeezeend",J),o.removeEventListener("end",ue),o.removeEventListener("inputsourceschange",pe);for(let K=0;K<L.length;K++){const de=C[K];de!==null&&(C[K]=null,L[K].disconnect(de))}F=null,ae=null,w.reset(),e.setRenderTarget(g),S=null,x=null,v=null,o=null,D=null,Ne.stop(),r.isPresenting=!1,e.setPixelRatio(z),e.setSize(Y.width,Y.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){c=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){d=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(K){m=K},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return v},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(K){if(o=K,o!==null){if(g=e.getRenderTarget(),o.addEventListener("select",J),o.addEventListener("selectstart",J),o.addEventListener("selectend",J),o.addEventListener("squeeze",J),o.addEventListener("squeezestart",J),o.addEventListener("squeezeend",J),o.addEventListener("end",ue),o.addEventListener("inputsourceschange",pe),y.xrCompatible!==!0&&await n.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(Y),o.renderState.layers===void 0){const de={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(o,n,de),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new Yr(S.framebufferWidth,S.framebufferHeight,{format:li,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let de=null,Ee=null,xe=null;y.depth&&(xe=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,de=y.stencil?Ga:Fa,Ee=y.stencil?Ha:qr);const we={colorFormat:n.RGBA8,depthFormat:xe,scaleFactor:c};v=new XRWebGLBinding(o,n),x=v.createProjectionLayer(we),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),D=new Yr(x.textureWidth,x.textureHeight,{format:li,type:Gi,depthTexture:new eg(x.textureWidth,x.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await o.requestReferenceSpace(d),Ne.setContext(o),Ne.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function pe(K){for(let de=0;de<K.removed.length;de++){const Ee=K.removed[de],xe=C.indexOf(Ee);xe>=0&&(C[xe]=null,L[xe].disconnect(Ee))}for(let de=0;de<K.added.length;de++){const Ee=K.added[de];let xe=C.indexOf(Ee);if(xe===-1){for(let De=0;De<L.length;De++)if(De>=C.length){C.push(Ee),xe=De;break}else if(C[De]===null){C[De]=Ee,xe=De;break}if(xe===-1)break}const we=L[xe];we&&we.connect(Ee)}}const oe=new ne,le=new ne;function B(K,de,Ee){oe.setFromMatrixPosition(de.matrixWorld),le.setFromMatrixPosition(Ee.matrixWorld);const xe=oe.distanceTo(le),we=de.projectionMatrix.elements,De=Ee.projectionMatrix.elements,Ke=we[14]/(we[10]-1),wt=we[14]/(we[10]+1),ht=(we[9]+1)/we[5],Pt=(we[9]-1)/we[5],j=(we[8]-1)/we[0],fn=(De[8]+1)/De[0],ft=Ke*j,ct=Ke*fn,qe=xe/(-j+fn),Tt=qe*-j;if(de.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Tt),K.translateZ(qe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),we[10]===-1)K.projectionMatrix.copy(de.projectionMatrix),K.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Ze=Ke+qe,P=wt+qe,E=ft-Tt,$=ct+(xe-Tt),me=ht*wt/P*Ze,_e=Pt*wt/P*Ze;K.projectionMatrix.makePerspective(E,$,me,_e,Ze,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ce(K,de){de===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(de.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(o===null)return;let de=K.near,Ee=K.far;w.texture!==null&&(w.depthNear>0&&(de=w.depthNear),w.depthFar>0&&(Ee=w.depthFar)),A.near=X.near=k.near=de,A.far=X.far=k.far=Ee,(F!==A.near||ae!==A.far)&&(o.updateRenderState({depthNear:A.near,depthFar:A.far}),F=A.near,ae=A.far),k.layers.mask=K.layers.mask|2,X.layers.mask=K.layers.mask|4,A.layers.mask=k.layers.mask|X.layers.mask;const xe=K.parent,we=A.cameras;ce(A,xe);for(let De=0;De<we.length;De++)ce(we[De],xe);we.length===2?B(A,k,X):A.projectionMatrix.copy(k.projectionMatrix),se(K,A,xe)};function se(K,de,Ee){Ee===null?K.matrix.copy(de.matrixWorld):(K.matrix.copy(Ee.matrixWorld),K.matrix.invert(),K.matrix.multiply(de.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(de.projectionMatrix),K.projectionMatrixInverse.copy(de.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Cd*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&S===null))return p},this.setFoveation=function(K){p=K,x!==null&&(x.fixedFoveation=K),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=K)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(A)};let U=null;function ie(K,de){if(_=de.getViewerPose(m||f),T=de,_!==null){const Ee=_.views;S!==null&&(e.setRenderTargetFramebuffer(D,S.framebuffer),e.setRenderTarget(D));let xe=!1;Ee.length!==A.cameras.length&&(A.cameras.length=0,xe=!0);for(let De=0;De<Ee.length;De++){const Ke=Ee[De];let wt=null;if(S!==null)wt=S.getViewport(Ke);else{const Pt=v.getViewSubImage(x,Ke);wt=Pt.viewport,De===0&&(e.setRenderTargetTextures(D,Pt.colorTexture,x.ignoreDepthValues?void 0:Pt.depthStencilTexture),e.setRenderTarget(D))}let ht=R[De];ht===void 0&&(ht=new Zn,ht.layers.enable(De),ht.viewport=new zt,R[De]=ht),ht.matrix.fromArray(Ke.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Ke.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(wt.x,wt.y,wt.width,wt.height),De===0&&(A.matrix.copy(ht.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),xe===!0&&A.cameras.push(ht)}const we=o.enabledFeatures;if(we&&we.includes("depth-sensing")){const De=v.getDepthInformation(Ee[0]);De&&De.isValid&&De.texture&&w.init(e,De,o.renderState)}}for(let Ee=0;Ee<L.length;Ee++){const xe=C[Ee],we=L[Ee];xe!==null&&we!==void 0&&we.update(xe,de,m||f)}U&&U(K,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),T=null}const Ne=new Qm;Ne.setAnimationLoop(ie),this.setAnimationLoop=function(K){U=K},this.dispose=function(){}}}const Hr=new Vi,hM=new Ht;function pM(a,e){function n(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function r(y,g){g.color.getRGB(y.fogColor.value,Ym(a)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function o(y,g,D,L,C){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(y,g):g.isMeshToonMaterial?(c(y,g),v(y,g)):g.isMeshPhongMaterial?(c(y,g),_(y,g)):g.isMeshStandardMaterial?(c(y,g),x(y,g),g.isMeshPhysicalMaterial&&S(y,g,C)):g.isMeshMatcapMaterial?(c(y,g),T(y,g)):g.isMeshDepthMaterial?c(y,g):g.isMeshDistanceMaterial?(c(y,g),w(y,g)):g.isMeshNormalMaterial?c(y,g):g.isLineBasicMaterial?(f(y,g),g.isLineDashedMaterial&&d(y,g)):g.isPointsMaterial?p(y,g,D,L):g.isSpriteMaterial?m(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,n(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===Cn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,n(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===Cn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,n(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,n(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const D=e.get(g),L=D.envMap,C=D.envMapRotation;L&&(y.envMap.value=L,Hr.copy(C),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),y.envMapRotation.value.setFromMatrix4(hM.makeRotationFromEuler(Hr)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,y.aoMapTransform))}function f(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform))}function d(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function p(y,g,D,L){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*D,y.scale.value=L*.5,g.map&&(y.map.value=g.map,n(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function m(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function _(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function v(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function x(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function S(y,g,D){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Cn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,g){g.matcap&&(y.matcap.value=g.matcap)}function w(y,g){const D=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function mM(a,e,n,r){let o={},c={},f=[];const d=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function p(D,L){const C=L.program;r.uniformBlockBinding(D,C)}function m(D,L){let C=o[D.id];C===void 0&&(T(D),C=_(D),o[D.id]=C,D.addEventListener("dispose",y));const Y=L.program;r.updateUBOMapping(D,Y);const z=e.render.frame;c[D.id]!==z&&(x(D),c[D.id]=z)}function _(D){const L=v();D.__bindingPointIndex=L;const C=a.createBuffer(),Y=D.__size,z=D.usage;return a.bindBuffer(a.UNIFORM_BUFFER,C),a.bufferData(a.UNIFORM_BUFFER,Y,z),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,L,C),C}function v(){for(let D=0;D<d;D++)if(f.indexOf(D)===-1)return f.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(D){const L=o[D.id],C=D.uniforms,Y=D.__cache;a.bindBuffer(a.UNIFORM_BUFFER,L);for(let z=0,k=C.length;z<k;z++){const X=Array.isArray(C[z])?C[z]:[C[z]];for(let R=0,A=X.length;R<A;R++){const F=X[R];if(S(F,z,R,Y)===!0){const ae=F.__offset,J=Array.isArray(F.value)?F.value:[F.value];let ue=0;for(let pe=0;pe<J.length;pe++){const oe=J[pe],le=w(oe);typeof oe=="number"||typeof oe=="boolean"?(F.__data[0]=oe,a.bufferSubData(a.UNIFORM_BUFFER,ae+ue,F.__data)):oe.isMatrix3?(F.__data[0]=oe.elements[0],F.__data[1]=oe.elements[1],F.__data[2]=oe.elements[2],F.__data[3]=0,F.__data[4]=oe.elements[3],F.__data[5]=oe.elements[4],F.__data[6]=oe.elements[5],F.__data[7]=0,F.__data[8]=oe.elements[6],F.__data[9]=oe.elements[7],F.__data[10]=oe.elements[8],F.__data[11]=0):(oe.toArray(F.__data,ue),ue+=le.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,ae,F.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function S(D,L,C,Y){const z=D.value,k=L+"_"+C;if(Y[k]===void 0)return typeof z=="number"||typeof z=="boolean"?Y[k]=z:Y[k]=z.clone(),!0;{const X=Y[k];if(typeof z=="number"||typeof z=="boolean"){if(X!==z)return Y[k]=z,!0}else if(X.equals(z)===!1)return X.copy(z),!0}return!1}function T(D){const L=D.uniforms;let C=0;const Y=16;for(let k=0,X=L.length;k<X;k++){const R=Array.isArray(L[k])?L[k]:[L[k]];for(let A=0,F=R.length;A<F;A++){const ae=R[A],J=Array.isArray(ae.value)?ae.value:[ae.value];for(let ue=0,pe=J.length;ue<pe;ue++){const oe=J[ue],le=w(oe),B=C%Y,ce=B%le.boundary,se=B+ce;C+=ce,se!==0&&Y-se<le.storage&&(C+=Y-se),ae.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=C,C+=le.storage}}}const z=C%Y;return z>0&&(C+=Y-z),D.__size=C,D.__cache={},this}function w(D){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),L}function y(D){const L=D.target;L.removeEventListener("dispose",y);const C=f.indexOf(L.__bindingPointIndex);f.splice(C,1),a.deleteBuffer(o[L.id]),delete o[L.id],delete c[L.id]}function g(){for(const D in o)a.deleteBuffer(o[D]);f=[],o={},c={}}return{bind:p,update:m,dispose:g}}class gM{constructor(e={}){const{canvas:n=iv(),context:r=null,depth:o=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=f;const T=new Uint32Array(4),w=new Int32Array(4);let y=null,g=null;const D=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xn,this.toneMapping=xr,this.toneMappingExposure=1;const C=this;let Y=!1,z=0,k=0,X=null,R=-1,A=null;const F=new zt,ae=new zt;let J=null;const ue=new xt(0);let pe=0,oe=n.width,le=n.height,B=1,ce=null,se=null;const U=new zt(0,0,oe,le),ie=new zt(0,0,oe,le);let Ne=!1;const K=new Jm;let de=!1,Ee=!1;const xe=new Ht,we=new Ht,De=new ne,Ke=new zt,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function Pt(){return X===null?B:1}let j=r;function fn(b,V){return n.getContext(b,V)}try{const b={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Dd}`),n.addEventListener("webglcontextlost",he,!1),n.addEventListener("webglcontextrestored",Le,!1),n.addEventListener("webglcontextcreationerror",Pe,!1),j===null){const V="webgl2";if(j=fn(V,b),j===null)throw fn(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ft,ct,qe,Tt,Ze,P,E,$,me,_e,fe,Ge,Ae,Ue,lt,Se,Oe,Je,Qe,ke,ut,it,Et,G;function Ce(){ft=new SS(j),ft.init(),it=new sM(j,ft),ct=new pS(j,ft,e,it),qe=new iM(j,ft),ct.reverseDepthBuffer&&x&&qe.buffers.depth.setReversed(!0),Tt=new TS(j),Ze=new G1,P=new aM(j,ft,qe,Ze,ct,it,Tt),E=new gS(C),$=new yS(C),me=new Pv(j),Et=new fS(j,me),_e=new MS(j,me,Tt,Et),fe=new wS(j,_e,me,Tt),Qe=new bS(j,ct,P),Se=new mS(Ze),Ge=new H1(C,E,$,ft,ct,Et,Se),Ae=new pM(C,Ze),Ue=new W1,lt=new $1(ft),Je=new dS(C,E,$,qe,fe,S,p),Oe=new tM(C,fe,ct),G=new mM(j,Tt,ct,qe),ke=new hS(j,ft,Tt),ut=new ES(j,ft,Tt),Tt.programs=Ge.programs,C.capabilities=ct,C.extensions=ft,C.properties=Ze,C.renderLists=Ue,C.shadowMap=Oe,C.state=qe,C.info=Tt}Ce();const re=new fM(C,j);this.xr=re,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const b=ft.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ft.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(b){b!==void 0&&(B=b,this.setSize(oe,le,!1))},this.getSize=function(b){return b.set(oe,le)},this.setSize=function(b,V,ee=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=b,le=V,n.width=Math.floor(b*B),n.height=Math.floor(V*B),ee===!0&&(n.style.width=b+"px",n.style.height=V+"px"),this.setViewport(0,0,b,V)},this.getDrawingBufferSize=function(b){return b.set(oe*B,le*B).floor()},this.setDrawingBufferSize=function(b,V,ee){oe=b,le=V,B=ee,n.width=Math.floor(b*ee),n.height=Math.floor(V*ee),this.setViewport(0,0,b,V)},this.getCurrentViewport=function(b){return b.copy(F)},this.getViewport=function(b){return b.copy(U)},this.setViewport=function(b,V,ee,te){b.isVector4?U.set(b.x,b.y,b.z,b.w):U.set(b,V,ee,te),qe.viewport(F.copy(U).multiplyScalar(B).round())},this.getScissor=function(b){return b.copy(ie)},this.setScissor=function(b,V,ee,te){b.isVector4?ie.set(b.x,b.y,b.z,b.w):ie.set(b,V,ee,te),qe.scissor(ae.copy(ie).multiplyScalar(B).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(b){qe.setScissorTest(Ne=b)},this.setOpaqueSort=function(b){ce=b},this.setTransparentSort=function(b){se=b},this.getClearColor=function(b){return b.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(b=!0,V=!0,ee=!0){let te=0;if(b){let W=!1;if(X!==null){const be=X.texture.format;W=be===zd||be===Bd||be===kd}if(W){const be=X.texture.type,Me=be===Gi||be===qr||be===Is||be===Ha||be===Fd||be===Od,Ve=Je.getClearColor(),ze=Je.getClearAlpha(),et=Ve.r,nt=Ve.g,We=Ve.b;Me?(T[0]=et,T[1]=nt,T[2]=We,T[3]=ze,j.clearBufferuiv(j.COLOR,0,T)):(w[0]=et,w[1]=nt,w[2]=We,w[3]=ze,j.clearBufferiv(j.COLOR,0,w))}else te|=j.COLOR_BUFFER_BIT}V&&(te|=j.DEPTH_BUFFER_BIT),ee&&(te|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",he,!1),n.removeEventListener("webglcontextrestored",Le,!1),n.removeEventListener("webglcontextcreationerror",Pe,!1),Ue.dispose(),lt.dispose(),Ze.dispose(),E.dispose(),$.dispose(),fe.dispose(),Et.dispose(),G.dispose(),Ge.dispose(),re.dispose(),re.removeEventListener("sessionstart",$r),re.removeEventListener("sessionend",Wi),Si.stop()};function he(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),Y=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),Y=!1;const b=Tt.autoReset,V=Oe.enabled,ee=Oe.autoUpdate,te=Oe.needsUpdate,W=Oe.type;Ce(),Tt.autoReset=b,Oe.enabled=V,Oe.autoUpdate=ee,Oe.needsUpdate=te,Oe.type=W}function Pe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function rt(b){const V=b.target;V.removeEventListener("dispose",rt),It(V)}function It(b){Wt(b),Ze.remove(b)}function Wt(b){const V=Ze.get(b).programs;V!==void 0&&(V.forEach(function(ee){Ge.releaseProgram(ee)}),b.isShaderMaterial&&Ge.releaseShaderCache(b))}this.renderBufferDirect=function(b,V,ee,te,W,be){V===null&&(V=wt);const Me=W.isMesh&&W.matrixWorld.determinant()<0,Ve=Hs(b,V,ee,te,W);qe.setMaterial(te,Me);let ze=ee.index,et=1;if(te.wireframe===!0){if(ze=_e.getWireframeAttribute(ee),ze===void 0)return;et=2}const nt=ee.drawRange,We=ee.attributes.position;let mt=nt.start*et,Mt=(nt.start+nt.count)*et;be!==null&&(mt=Math.max(mt,be.start*et),Mt=Math.min(Mt,(be.start+be.count)*et)),ze!==null?(mt=Math.max(mt,0),Mt=Math.min(Mt,ze.count)):We!=null&&(mt=Math.max(mt,0),Mt=Math.min(Mt,We.count));const pt=Mt-mt;if(pt<0||pt===1/0)return;Et.setup(W,te,Ve,ee,ze);let rn,at=ke;if(ze!==null&&(rn=me.get(ze),at=ut,at.setIndex(rn)),W.isMesh)te.wireframe===!0?(qe.setLineWidth(te.wireframeLinewidth*Pt()),at.setMode(j.LINES)):at.setMode(j.TRIANGLES);else if(W.isLine){let Xe=te.linewidth;Xe===void 0&&(Xe=1),qe.setLineWidth(Xe*Pt()),W.isLineSegments?at.setMode(j.LINES):W.isLineLoop?at.setMode(j.LINE_LOOP):at.setMode(j.LINE_STRIP)}else W.isPoints?at.setMode(j.POINTS):W.isSprite&&at.setMode(j.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)at.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))at.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Xe=W._multiDrawStarts,$n=W._multiDrawCounts,yt=W._multiDrawCount,an=ze?me.get(ze).bytesPerElement:1,Kn=Ze.get(te).currentProgram.getUniforms();for(let jt=0;jt<yt;jt++)Kn.setValue(j,"_gl_DrawID",jt),at.render(Xe[jt]/an,$n[jt])}else if(W.isInstancedMesh)at.renderInstances(mt,pt,W.count);else if(ee.isInstancedBufferGeometry){const Xe=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,$n=Math.min(ee.instanceCount,Xe);at.renderInstances(mt,pt,$n)}else at.render(mt,pt)};function gt(b,V,ee){b.transparent===!0&&b.side===ki&&b.forceSinglePass===!1?(b.side=Cn,b.needsUpdate=!0,Kr(b,V,ee),b.side=yr,b.needsUpdate=!0,Kr(b,V,ee),b.side=ki):Kr(b,V,ee)}this.compile=function(b,V,ee=null){ee===null&&(ee=b),g=lt.get(ee),g.init(V),L.push(g),ee.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),b!==ee&&b.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),g.setupLights();const te=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const be=W.material;if(be)if(Array.isArray(be))for(let Me=0;Me<be.length;Me++){const Ve=be[Me];gt(Ve,ee,W),te.add(Ve)}else gt(be,ee,W),te.add(be)}),L.pop(),g=null,te},this.compileAsync=function(b,V,ee=null){const te=this.compile(b,V,ee);return new Promise(W=>{function be(){if(te.forEach(function(Me){Ze.get(Me).currentProgram.isReady()&&te.delete(Me)}),te.size===0){W(b);return}setTimeout(be,10)}ft.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let vn=null;function hn(b){vn&&vn(b)}function $r(){Si.stop()}function Wi(){Si.start()}const Si=new Qm;Si.setAnimationLoop(hn),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(b){vn=b,re.setAnimationLoop(b),b===null?Si.stop():Si.start()},re.addEventListener("sessionstart",$r),re.addEventListener("sessionend",Wi),this.render=function(b,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(V),V=re.getCamera()),b.isScene===!0&&b.onBeforeRender(C,b,V,X),g=lt.get(b,L.length),g.init(V),L.push(g),we.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),K.setFromProjectionMatrix(we),Ee=this.localClippingEnabled,de=Se.init(this.clippingPlanes,Ee),y=Ue.get(b,D.length),y.init(),D.push(y),re.enabled===!0&&re.isPresenting===!0){const be=C.xr.getDepthSensingMesh();be!==null&&Mi(be,V,-1/0,C.sortObjects)}Mi(b,V,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(ce,se),ht=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,ht&&Je.addToRenderList(y,b),this.info.render.frame++,de===!0&&Se.beginShadows();const ee=g.state.shadowsArray;Oe.render(ee,b,V),de===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=y.opaque,W=y.transmissive;if(g.setupLights(),V.isArrayCamera){const be=V.cameras;if(W.length>0)for(let Me=0,Ve=be.length;Me<Ve;Me++){const ze=be[Me];Er(te,W,b,ze)}ht&&Je.render(b);for(let Me=0,Ve=be.length;Me<Ve;Me++){const ze=be[Me];Mr(y,b,ze,ze.viewport)}}else W.length>0&&Er(te,W,b,V),ht&&Je.render(b),Mr(y,b,V);X!==null&&(P.updateMultisampleRenderTarget(X),P.updateRenderTargetMipmap(X)),b.isScene===!0&&b.onAfterRender(C,b,V),Et.resetDefaultState(),R=-1,A=null,L.pop(),L.length>0?(g=L[L.length-1],de===!0&&Se.setGlobalState(C.clippingPlanes,g.state.camera)):g=null,D.pop(),D.length>0?y=D[D.length-1]:y=null};function Mi(b,V,ee,te){if(b.visible===!1)return;if(b.layers.test(V.layers)){if(b.isGroup)ee=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(V);else if(b.isLight)g.pushLight(b),b.castShadow&&g.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||K.intersectsSprite(b)){te&&Ke.setFromMatrixPosition(b.matrixWorld).applyMatrix4(we);const Me=fe.update(b),Ve=b.material;Ve.visible&&y.push(b,Me,Ve,ee,Ke.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||K.intersectsObject(b))){const Me=fe.update(b),Ve=b.material;if(te&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ke.copy(b.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ke.copy(Me.boundingSphere.center)),Ke.applyMatrix4(b.matrixWorld).applyMatrix4(we)),Array.isArray(Ve)){const ze=Me.groups;for(let et=0,nt=ze.length;et<nt;et++){const We=ze[et],mt=Ve[We.materialIndex];mt&&mt.visible&&y.push(b,Me,mt,ee,Ke.z,We)}}else Ve.visible&&y.push(b,Me,Ve,ee,Ke.z,null)}}const be=b.children;for(let Me=0,Ve=be.length;Me<Ve;Me++)Mi(be[Me],V,ee,te)}function Mr(b,V,ee,te){const W=b.opaque,be=b.transmissive,Me=b.transparent;g.setupLightsView(ee),de===!0&&Se.setGlobalState(C.clippingPlanes,ee),te&&qe.viewport(F.copy(te)),W.length>0&&ji(W,V,ee),be.length>0&&ji(be,V,ee),Me.length>0&&ji(Me,V,ee),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function Er(b,V,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[te.id]===void 0&&(g.state.transmissionRenderTarget[te.id]=new Yr(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?Ns:Gi,minFilter:Zr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace}));const be=g.state.transmissionRenderTarget[te.id],Me=te.viewport||F;be.setSize(Me.z,Me.w);const Ve=C.getRenderTarget();C.setRenderTarget(be),C.getClearColor(ue),pe=C.getClearAlpha(),pe<1&&C.setClearColor(16777215,.5),C.clear(),ht&&Je.render(ee);const ze=C.toneMapping;C.toneMapping=xr;const et=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),g.setupLightsView(te),de===!0&&Se.setGlobalState(C.clippingPlanes,te),ji(b,ee,te),P.updateMultisampleRenderTarget(be),P.updateRenderTargetMipmap(be),ft.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let We=0,mt=V.length;We<mt;We++){const Mt=V[We],pt=Mt.object,rn=Mt.geometry,at=Mt.material,Xe=Mt.group;if(at.side===ki&&pt.layers.test(te.layers)){const $n=at.side;at.side=Cn,at.needsUpdate=!0,Bs(pt,ee,te,rn,at,Xe),at.side=$n,at.needsUpdate=!0,nt=!0}}nt===!0&&(P.updateMultisampleRenderTarget(be),P.updateRenderTargetMipmap(be))}C.setRenderTarget(Ve),C.setClearColor(ue,pe),et!==void 0&&(te.viewport=et),C.toneMapping=ze}function ji(b,V,ee){const te=V.isScene===!0?V.overrideMaterial:null;for(let W=0,be=b.length;W<be;W++){const Me=b[W],Ve=Me.object,ze=Me.geometry,et=te===null?Me.material:te,nt=Me.group;Ve.layers.test(ee.layers)&&Bs(Ve,V,ee,ze,et,nt)}}function Bs(b,V,ee,te,W,be){b.onBeforeRender(C,V,ee,te,W,be),b.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(C,V,ee,te,b,be),W.transparent===!0&&W.side===ki&&W.forceSinglePass===!1?(W.side=Cn,W.needsUpdate=!0,C.renderBufferDirect(ee,V,te,W,b,be),W.side=yr,W.needsUpdate=!0,C.renderBufferDirect(ee,V,te,W,b,be),W.side=ki):C.renderBufferDirect(ee,V,te,W,b,be),b.onAfterRender(C,V,ee,te,W,be)}function Kr(b,V,ee){V.isScene!==!0&&(V=wt);const te=Ze.get(b),W=g.state.lights,be=g.state.shadowsArray,Me=W.state.version,Ve=Ge.getParameters(b,W.state,be,V,ee),ze=Ge.getProgramCacheKey(Ve);let et=te.programs;te.environment=b.isMeshStandardMaterial?V.environment:null,te.fog=V.fog,te.envMap=(b.isMeshStandardMaterial?$:E).get(b.envMap||te.environment),te.envMapRotation=te.environment!==null&&b.envMap===null?V.environmentRotation:b.envMapRotation,et===void 0&&(b.addEventListener("dispose",rt),et=new Map,te.programs=et);let nt=et.get(ze);if(nt!==void 0){if(te.currentProgram===nt&&te.lightsStateVersion===Me)return ui(b,Ve),nt}else Ve.uniforms=Ge.getUniforms(b),b.onBeforeCompile(Ve,C),nt=Ge.acquireProgram(Ve,ze),et.set(ze,nt),te.uniforms=Ve.uniforms;const We=te.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(We.clippingPlanes=Se.uniform),ui(b,Ve),te.needsLights=Rl(b),te.lightsStateVersion=Me,te.needsLights&&(We.ambientLightColor.value=W.state.ambient,We.lightProbe.value=W.state.probe,We.directionalLights.value=W.state.directional,We.directionalLightShadows.value=W.state.directionalShadow,We.spotLights.value=W.state.spot,We.spotLightShadows.value=W.state.spotShadow,We.rectAreaLights.value=W.state.rectArea,We.ltc_1.value=W.state.rectAreaLTC1,We.ltc_2.value=W.state.rectAreaLTC2,We.pointLights.value=W.state.point,We.pointLightShadows.value=W.state.pointShadow,We.hemisphereLights.value=W.state.hemi,We.directionalShadowMap.value=W.state.directionalShadowMap,We.directionalShadowMatrix.value=W.state.directionalShadowMatrix,We.spotShadowMap.value=W.state.spotShadowMap,We.spotLightMatrix.value=W.state.spotLightMatrix,We.spotLightMap.value=W.state.spotLightMap,We.pointShadowMap.value=W.state.pointShadowMap,We.pointShadowMatrix.value=W.state.pointShadowMatrix),te.currentProgram=nt,te.uniformsList=null,nt}function zs(b){if(b.uniformsList===null){const V=b.currentProgram.getUniforms();b.uniformsList=Sl.seqWithValue(V.seq,b.uniforms)}return b.uniformsList}function ui(b,V){const ee=Ze.get(b);ee.outputColorSpace=V.outputColorSpace,ee.batching=V.batching,ee.batchingColor=V.batchingColor,ee.instancing=V.instancing,ee.instancingColor=V.instancingColor,ee.instancingMorph=V.instancingMorph,ee.skinning=V.skinning,ee.morphTargets=V.morphTargets,ee.morphNormals=V.morphNormals,ee.morphColors=V.morphColors,ee.morphTargetsCount=V.morphTargetsCount,ee.numClippingPlanes=V.numClippingPlanes,ee.numIntersection=V.numClipIntersection,ee.vertexAlphas=V.vertexAlphas,ee.vertexTangents=V.vertexTangents,ee.toneMapping=V.toneMapping}function Hs(b,V,ee,te,W){V.isScene!==!0&&(V=wt),P.resetTextureUnits();const be=V.fog,Me=te.isMeshStandardMaterial?V.environment:null,Ve=X===null?C.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Wa,ze=(te.isMeshStandardMaterial?$:E).get(te.envMap||Me),et=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,nt=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),We=!!ee.morphAttributes.position,mt=!!ee.morphAttributes.normal,Mt=!!ee.morphAttributes.color;let pt=xr;te.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(pt=C.toneMapping);const rn=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,at=rn!==void 0?rn.length:0,Xe=Ze.get(te),$n=g.state.lights;if(de===!0&&(Ee===!0||b!==A)){const pn=b===A&&te.id===R;Se.setState(te,b,pn)}let yt=!1;te.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==$n.state.version||Xe.outputColorSpace!==Ve||W.isBatchedMesh&&Xe.batching===!1||!W.isBatchedMesh&&Xe.batching===!0||W.isBatchedMesh&&Xe.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Xe.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Xe.instancing===!1||!W.isInstancedMesh&&Xe.instancing===!0||W.isSkinnedMesh&&Xe.skinning===!1||!W.isSkinnedMesh&&Xe.skinning===!0||W.isInstancedMesh&&Xe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Xe.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Xe.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Xe.instancingMorph===!1&&W.morphTexture!==null||Xe.envMap!==ze||te.fog===!0&&Xe.fog!==be||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Se.numPlanes||Xe.numIntersection!==Se.numIntersection)||Xe.vertexAlphas!==et||Xe.vertexTangents!==nt||Xe.morphTargets!==We||Xe.morphNormals!==mt||Xe.morphColors!==Mt||Xe.toneMapping!==pt||Xe.morphTargetsCount!==at)&&(yt=!0):(yt=!0,Xe.__version=te.version);let an=Xe.currentProgram;yt===!0&&(an=Kr(te,V,W));let Kn=!1,jt=!1,di=!1;const Ct=an.getUniforms(),On=Xe.uniforms;if(qe.useProgram(an.program)&&(Kn=!0,jt=!0,di=!0),te.id!==R&&(R=te.id,jt=!0),Kn||A!==b){qe.buffers.depth.getReversed()?(xe.copy(b.projectionMatrix),av(xe),sv(xe),Ct.setValue(j,"projectionMatrix",xe)):Ct.setValue(j,"projectionMatrix",b.projectionMatrix),Ct.setValue(j,"viewMatrix",b.matrixWorldInverse);const kn=Ct.map.cameraPosition;kn!==void 0&&kn.setValue(j,De.setFromMatrixPosition(b.matrixWorld)),ct.logarithmicDepthBuffer&&Ct.setValue(j,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Ct.setValue(j,"isOrthographic",b.isOrthographicCamera===!0),A!==b&&(A=b,jt=!0,di=!0)}if(W.isSkinnedMesh){Ct.setOptional(j,W,"bindMatrix"),Ct.setOptional(j,W,"bindMatrixInverse");const pn=W.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Ct.setValue(j,"boneTexture",pn.boneTexture,P))}W.isBatchedMesh&&(Ct.setOptional(j,W,"batchingTexture"),Ct.setValue(j,"batchingTexture",W._matricesTexture,P),Ct.setOptional(j,W,"batchingIdTexture"),Ct.setValue(j,"batchingIdTexture",W._indirectTexture,P),Ct.setOptional(j,W,"batchingColorTexture"),W._colorsTexture!==null&&Ct.setValue(j,"batchingColorTexture",W._colorsTexture,P));const Ei=ee.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&Qe.update(W,ee,an),(jt||Xe.receiveShadow!==W.receiveShadow)&&(Xe.receiveShadow=W.receiveShadow,Ct.setValue(j,"receiveShadow",W.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(On.envMap.value=ze,On.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&V.environment!==null&&(On.envMapIntensity.value=V.environmentIntensity),jt&&(Ct.setValue(j,"toneMappingExposure",C.toneMappingExposure),Xe.needsLights&&Gs(On,di),be&&te.fog===!0&&Ae.refreshFogUniforms(On,be),Ae.refreshMaterialUniforms(On,te,B,le,g.state.transmissionRenderTarget[b.id]),Sl.upload(j,zs(Xe),On,P)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Sl.upload(j,zs(Xe),On,P),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Ct.setValue(j,"center",W.center),Ct.setValue(j,"modelViewMatrix",W.modelViewMatrix),Ct.setValue(j,"normalMatrix",W.normalMatrix),Ct.setValue(j,"modelMatrix",W.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const pn=te.uniformsGroups;for(let kn=0,xn=pn.length;kn<xn;kn++){const Vs=pn[kn];G.update(Vs,an),G.bind(Vs,an)}}return an}function Gs(b,V){b.ambientLightColor.needsUpdate=V,b.lightProbe.needsUpdate=V,b.directionalLights.needsUpdate=V,b.directionalLightShadows.needsUpdate=V,b.pointLights.needsUpdate=V,b.pointLightShadows.needsUpdate=V,b.spotLights.needsUpdate=V,b.spotLightShadows.needsUpdate=V,b.rectAreaLights.needsUpdate=V,b.hemisphereLights.needsUpdate=V}function Rl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(b,V,ee){Ze.get(b.texture).__webglTexture=V,Ze.get(b.depthTexture).__webglTexture=ee;const te=Ze.get(b);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=ee===void 0,te.__autoAllocateDepthBuffer||ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,V){const ee=Ze.get(b);ee.__webglFramebuffer=V,ee.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(b,V=0,ee=0){X=b,z=V,k=ee;let te=!0,W=null,be=!1,Me=!1;if(b){const ze=Ze.get(b);if(ze.__useDefaultFramebuffer!==void 0)qe.bindFramebuffer(j.FRAMEBUFFER,null),te=!1;else if(ze.__webglFramebuffer===void 0)P.setupRenderTarget(b);else if(ze.__hasExternalTextures)P.rebindTextures(b,Ze.get(b.texture).__webglTexture,Ze.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const We=b.depthTexture;if(ze.__boundDepthTexture!==We){if(We!==null&&Ze.has(We)&&(b.width!==We.image.width||b.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(b)}}const et=b.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Me=!0);const nt=Ze.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(nt[V])?W=nt[V][ee]:W=nt[V],be=!0):b.samples>0&&P.useMultisampledRTT(b)===!1?W=Ze.get(b).__webglMultisampledFramebuffer:Array.isArray(nt)?W=nt[ee]:W=nt,F.copy(b.viewport),ae.copy(b.scissor),J=b.scissorTest}else F.copy(U).multiplyScalar(B).floor(),ae.copy(ie).multiplyScalar(B).floor(),J=Ne;if(qe.bindFramebuffer(j.FRAMEBUFFER,W)&&te&&qe.drawBuffers(b,W),qe.viewport(F),qe.scissor(ae),qe.setScissorTest(J),be){const ze=Ze.get(b.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+V,ze.__webglTexture,ee)}else if(Me){const ze=Ze.get(b.texture),et=V||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,ze.__webglTexture,ee||0,et)}R=-1},this.readRenderTargetPixels=function(b,V,ee,te,W,be,Me){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Ze.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Ve=Ve[Me]),Ve){qe.bindFramebuffer(j.FRAMEBUFFER,Ve);try{const ze=b.texture,et=ze.format,nt=ze.type;if(!ct.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=b.width-te&&ee>=0&&ee<=b.height-W&&j.readPixels(V,ee,te,W,it.convert(et),it.convert(nt),be)}finally{const ze=X!==null?Ze.get(X).__webglFramebuffer:null;qe.bindFramebuffer(j.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(b,V,ee,te,W,be,Me){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=Ze.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Ve=Ve[Me]),Ve){const ze=b.texture,et=ze.format,nt=ze.type;if(!ct.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=b.width-te&&ee>=0&&ee<=b.height-W){qe.bindFramebuffer(j.FRAMEBUFFER,Ve);const We=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,We),j.bufferData(j.PIXEL_PACK_BUFFER,be.byteLength,j.STREAM_READ),j.readPixels(V,ee,te,W,it.convert(et),it.convert(nt),0);const mt=X!==null?Ze.get(X).__webglFramebuffer:null;qe.bindFramebuffer(j.FRAMEBUFFER,mt);const Mt=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await rv(j,Mt,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,We),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,be),j.deleteBuffer(We),j.deleteSync(Mt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,V=null,ee=0){b.isTexture!==!0&&(Ps("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,b=arguments[1]);const te=Math.pow(2,-ee),W=Math.floor(b.image.width*te),be=Math.floor(b.image.height*te),Me=V!==null?V.x:0,Ve=V!==null?V.y:0;P.setTexture2D(b,0),j.copyTexSubImage2D(j.TEXTURE_2D,ee,0,0,Me,Ve,W,be),qe.unbindTexture()},this.copyTextureToTexture=function(b,V,ee=null,te=null,W=0){b.isTexture!==!0&&(Ps("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,b=arguments[1],V=arguments[2],W=arguments[3]||0,ee=null);let be,Me,Ve,ze,et,nt,We,mt,Mt;const pt=b.isCompressedTexture?b.mipmaps[W]:b.image;ee!==null?(be=ee.max.x-ee.min.x,Me=ee.max.y-ee.min.y,Ve=ee.isBox3?ee.max.z-ee.min.z:1,ze=ee.min.x,et=ee.min.y,nt=ee.isBox3?ee.min.z:0):(be=pt.width,Me=pt.height,Ve=pt.depth||1,ze=0,et=0,nt=0),te!==null?(We=te.x,mt=te.y,Mt=te.z):(We=0,mt=0,Mt=0);const rn=it.convert(V.format),at=it.convert(V.type);let Xe;V.isData3DTexture?(P.setTexture3D(V,0),Xe=j.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(P.setTexture2DArray(V,0),Xe=j.TEXTURE_2D_ARRAY):(P.setTexture2D(V,0),Xe=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,V.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,V.unpackAlignment);const $n=j.getParameter(j.UNPACK_ROW_LENGTH),yt=j.getParameter(j.UNPACK_IMAGE_HEIGHT),an=j.getParameter(j.UNPACK_SKIP_PIXELS),Kn=j.getParameter(j.UNPACK_SKIP_ROWS),jt=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,pt.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,pt.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,ze),j.pixelStorei(j.UNPACK_SKIP_ROWS,et),j.pixelStorei(j.UNPACK_SKIP_IMAGES,nt);const di=b.isDataArrayTexture||b.isData3DTexture,Ct=V.isDataArrayTexture||V.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const On=Ze.get(b),Ei=Ze.get(V),pn=Ze.get(On.__renderTarget),kn=Ze.get(Ei.__renderTarget);qe.bindFramebuffer(j.READ_FRAMEBUFFER,pn.__webglFramebuffer),qe.bindFramebuffer(j.DRAW_FRAMEBUFFER,kn.__webglFramebuffer);for(let xn=0;xn<Ve;xn++)di&&j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ze.get(b).__webglTexture,W,nt+xn),b.isDepthTexture?(Ct&&j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ze.get(V).__webglTexture,W,Mt+xn),j.blitFramebuffer(ze,et,be,Me,We,mt,be,Me,j.DEPTH_BUFFER_BIT,j.NEAREST)):Ct?j.copyTexSubImage3D(Xe,W,We,mt,Mt+xn,ze,et,be,Me):j.copyTexSubImage2D(Xe,W,We,mt,Mt+xn,ze,et,be,Me);qe.bindFramebuffer(j.READ_FRAMEBUFFER,null),qe.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Ct?b.isDataTexture||b.isData3DTexture?j.texSubImage3D(Xe,W,We,mt,Mt,be,Me,Ve,rn,at,pt.data):V.isCompressedArrayTexture?j.compressedTexSubImage3D(Xe,W,We,mt,Mt,be,Me,Ve,rn,pt.data):j.texSubImage3D(Xe,W,We,mt,Mt,be,Me,Ve,rn,at,pt):b.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,W,We,mt,be,Me,rn,at,pt.data):b.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,W,We,mt,pt.width,pt.height,rn,pt.data):j.texSubImage2D(j.TEXTURE_2D,W,We,mt,be,Me,rn,at,pt);j.pixelStorei(j.UNPACK_ROW_LENGTH,$n),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,yt),j.pixelStorei(j.UNPACK_SKIP_PIXELS,an),j.pixelStorei(j.UNPACK_SKIP_ROWS,Kn),j.pixelStorei(j.UNPACK_SKIP_IMAGES,jt),W===0&&V.generateMipmaps&&j.generateMipmap(Xe),qe.unbindTexture()},this.copyTextureToTexture3D=function(b,V,ee=null,te=null,W=0){return b.isTexture!==!0&&(Ps("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,te=arguments[1]||null,b=arguments[2],V=arguments[3],W=arguments[4]||0),Ps('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,V,ee,te,W)},this.initRenderTarget=function(b){Ze.get(b).__webglFramebuffer===void 0&&P.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?P.setTextureCube(b,0):b.isData3DTexture?P.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?P.setTexture2DArray(b,0):P.setTexture2D(b,0),qe.unbindTexture()},this.resetState=function(){z=0,k=0,X=null,qe.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=vt._getDrawingBufferColorSpace(e),n.unpackColorSpace=vt._getUnpackColorSpace()}}class _M extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class ag extends Os{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ym=new Ht,Pd=new Wm,pl=new wl,ml=new ne;class vM extends Pn{constructor(e=new yi,n=new ag){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),pl.copy(r.boundingSphere),pl.applyMatrix4(o),pl.radius+=c,e.ray.intersectsSphere(pl)===!1)return;ym.copy(o).invert(),Pd.copy(e.ray).applyMatrix4(ym);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,v=r.attributes.position;if(m!==null){const x=Math.max(0,f.start),S=Math.min(m.count,f.start+f.count);for(let T=x,w=S;T<w;T++){const y=m.getX(T);ml.fromBufferAttribute(v,y),Sm(ml,y,p,o,e,n,this)}}else{const x=Math.max(0,f.start),S=Math.min(v.count,f.start+f.count);for(let T=x,w=S;T<w;T++)ml.fromBufferAttribute(v,T),Sm(ml,T,p,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Sm(a,e,n,r,o,c,f){const d=Pd.distanceSqToPoint(a);if(d<n){const p=new ne;Pd.closestPointToPoint(a,p),p.applyMatrix4(r);const m=o.ray.origin.distanceTo(p);if(m<o.near||m>o.far)return;c.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class Vd extends yi{constructor(e=1,n=32,r=16,o=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:c,thetaStart:f,thetaLength:d},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(f+d,Math.PI);let m=0;const _=[],v=new ne,x=new ne,S=[],T=[],w=[],y=[];for(let g=0;g<=r;g++){const D=[],L=g/r;let C=0;g===0&&f===0?C=.5/n:g===r&&p===Math.PI&&(C=-.5/n);for(let Y=0;Y<=n;Y++){const z=Y/n;v.x=-e*Math.cos(o+z*c)*Math.sin(f+L*d),v.y=e*Math.cos(f+L*d),v.z=e*Math.sin(o+z*c)*Math.sin(f+L*d),T.push(v.x,v.y,v.z),x.copy(v).normalize(),w.push(x.x,x.y,x.z),y.push(z+C,1-L),D.push(m++)}_.push(D)}for(let g=0;g<r;g++)for(let D=0;D<n;D++){const L=_[g][D+1],C=_[g][D],Y=_[g+1][D],z=_[g+1][D+1];(g!==0||f>0)&&S.push(L,C,z),(g!==r-1||p<Math.PI)&&S.push(C,Y,z)}this.setIndex(S),this.setAttribute("position",new xi(T,3)),this.setAttribute("normal",new xi(w,3)),this.setAttribute("uv",new xi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class xM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Mm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Mm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Mm(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dd);const yM=()=>{const a=qn.useRef(null);return qn.useEffect(()=>{if(!a.current)return;const e=a.current.clientWidth,n=a.current.clientHeight,r=new _M,o=new Zn(60,e/n,.1,1e3);o.position.z=24;const c=new gM({antialias:!0,alpha:!0});c.setSize(e,n),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.current.appendChild(c.domElement);const f=1400,d=new yi,p=new Float32Array(f*3),m=new Float32Array(f*3),_=new xt(58879),v=new xt(9055202),x=new xt(62880),S=new xt(16758784),T=[_,v,x,S];for(let F=0;F<f;F++){const ae=2+Math.pow(Math.random(),1.5)*22,J=ae*.8,ue=F%4*Math.PI*2/4,pe=(Math.random()-.5)*1.8,oe=(Math.random()-.5)*1.8,le=(Math.random()-.5)*1.8;p[F*3]=Math.cos(ue+J)*ae+pe,p[F*3+1]=oe*(ae*.2),p[F*3+2]=Math.sin(ue+J)*ae+le;const B=T[F%T.length];m[F*3]=B.r,m[F*3+1]=B.g,m[F*3+2]=B.b}d.setAttribute("position",new Yn(p,3)),d.setAttribute("color",new Yn(m,3));const w=new ag({size:.18,vertexColors:!0,transparent:!0,opacity:.85,blending:Gu}),y=new vM(d,w);r.add(y);const g=new Vd(1.2,16,16),D=new Hd({color:58879,wireframe:!0,transparent:!0,opacity:.25}),L=new vi(g,D);r.add(L);let C=0,Y=0;const z=F=>{const{clientX:ae,clientY:J}=F;C=(ae/window.innerWidth-.5)*2,Y=(J/window.innerHeight-.5)*2};window.addEventListener("mousemove",z);const k=()=>{if(!a.current)return;const F=a.current.clientWidth,ae=a.current.clientHeight;o.aspect=F/ae,o.updateProjectionMatrix(),c.setSize(F,ae)};window.addEventListener("resize",k);let X;const R=new xM,A=()=>{X=requestAnimationFrame(A);const F=R.getElapsedTime();y.rotation.y=F*.05+C*.2,y.rotation.x=Y*.15,L.rotation.y=F*.15,L.rotation.z=F*.1,c.render(r,o)};return A(),()=>{window.removeEventListener("mousemove",z),window.removeEventListener("resize",k),cancelAnimationFrame(X),a.current&&c.domElement&&a.current.removeChild(c.domElement),d.dispose(),w.dispose(),g.dispose(),D.dispose(),c.dispose()}},[]),N.jsx("div",{ref:a,className:"absolute inset-0 pointer-events-none opacity-60 z-0 overflow-hidden"})},SM=57,MM=575,EM=11,TM=22.4,bM="2026-11-16 07:18:25 UTC",wM={total_repositories:SM,total_commits_sample:MM,streak_days:EM,tis_score:TM,sync_timestamp:bM},AM=()=>{const{total_repositories:a,total_commits_sample:e,streak_days:n,tis_score:r,sync_timestamp:o}=wM,c=[{month:"Mar",commits:27,focus:"Physics Motion"},{month:"Apr",commits:5,focus:"Solar System 3D"},{month:"Jun",commits:8,focus:"Resume Engine"},{month:"Jul",commits:20,focus:"Mood Mirror AI"},{month:"Aug",commits:114,focus:"Mangalyaan Sim"},{month:"Sep",commits:276,focus:"ZeePrep & StorySprint"},{month:"Oct",commits:51,focus:"Minty Finance"},{month:"Nov",commits:74,focus:"Eat Better & Skippi 3D"}],f=Math.max(...c.map(p=>p.commits)),d=[{day:"Mon",commits:133,pct:83},{day:"Tue",commits:94,pct:58},{day:"Wed",commits:61,pct:38},{day:"Thu",commits:83,pct:51},{day:"Fri",commits:160,pct:100},{day:"Sat",commits:40,pct:25},{day:"Sun",commits:4,pct:2}];return N.jsx("section",{id:"analytics",className:"py-16",children:N.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[N.jsxs("div",{className:"mb-10",children:[N.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2",children:[N.jsx(J0,{className:"w-4 h-4"}),N.jsx("span",{children:"Developer Telemetry // Verified GitHub Metrics"})]}),N.jsxs("h2",{className:"text-3xl font-bold tracking-tight text-white flex items-center justify-between",children:[N.jsx("span",{children:"Activity & Velocity Dashboard"}),N.jsxs("span",{className:"text-xs font-mono font-normal text-slate-500 bg-slate-900 px-3 py-1 rounded-full border border-slate-800",children:["Synced: ",o]})]}),N.jsx("p",{className:"mt-2 text-slate-400 text-sm max-w-2xl",children:"Live metrics extracted directly from 57 repositories and historical commit activity across 2026."})]}),N.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10",children:[N.jsxs("div",{className:"glass-panel p-5 rounded-2xl border border-cyan-500/30",children:[N.jsxs("div",{className:"flex items-center justify-between text-slate-400 mb-2 font-mono text-xs",children:[N.jsx("span",{children:"TOTAL REPOSITORIES"}),N.jsx(t_,{className:"w-4 h-4 text-cyan-400"})]}),N.jsx("div",{className:"text-3xl font-extrabold text-cyan-400 font-mono mb-1",children:a}),N.jsx("div",{className:"text-xs text-slate-400",children:"100% Original Source Works"}),N.jsx("div",{className:"text-[10px] text-slate-500 font-mono mt-2",children:"0 Forks // Pure Origin"})]}),N.jsxs("div",{className:"glass-panel p-5 rounded-2xl border border-purple-500/30",children:[N.jsxs("div",{className:"flex items-center justify-between text-slate-400 mb-2 font-mono text-xs",children:[N.jsx("span",{children:"SAMPLED COMMITS"}),N.jsx(a_,{className:"w-4 h-4 text-purple-400"})]}),N.jsxs("div",{className:"text-3xl font-extrabold text-purple-400 font-mono mb-1",children:[e,"+"]}),N.jsx("div",{className:"text-xs text-slate-400",children:"Across Active Portfolio"}),N.jsx("div",{className:"text-[10px] text-purple-400/80 font-mono mt-2",children:"Peak: 276 in September"})]}),N.jsxs("div",{className:"glass-panel p-5 rounded-2xl border border-emerald-500/30",children:[N.jsxs("div",{className:"flex items-center justify-between text-slate-400 mb-2 font-mono text-xs",children:[N.jsx("span",{children:"TECHNICAL IMPACT (TIS)"}),N.jsx(f_,{className:"w-4 h-4 text-emerald-400"})]}),N.jsx("div",{className:"text-3xl font-extrabold text-emerald-400 font-mono mb-1",children:r}),N.jsx("div",{className:"text-xs text-slate-400",children:"Explainable Index / 100"}),N.jsx("div",{className:"text-[10px] text-slate-500 font-mono mt-2",children:"Weighted 9 Dimensions"})]}),N.jsxs("div",{className:"glass-panel p-5 rounded-2xl border border-amber-500/30",children:[N.jsxs("div",{className:"flex items-center justify-between text-slate-400 mb-2 font-mono text-xs",children:[N.jsx("span",{children:"MAX ACTIVE STREAK"}),N.jsx(r_,{className:"w-4 h-4 text-amber-400"})]}),N.jsxs("div",{className:"text-3xl font-extrabold text-amber-400 font-mono mb-1",children:[n," ",N.jsx("span",{className:"text-base font-normal",children:"Days"})]}),N.jsx("div",{className:"text-xs text-slate-400",children:"Sustained Rhythm"}),N.jsx("div",{className:"text-[10px] text-slate-500 font-mono mt-2",children:"Peak Coding: Fri & Mon"})]})]}),N.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8",children:[N.jsxs("div",{className:"lg:col-span-7 glass-panel p-6 rounded-2xl border border-slate-800",children:[N.jsxs("h3",{className:"text-sm font-mono text-slate-300 uppercase tracking-wider mb-2 flex items-center justify-between",children:[N.jsx("span",{children:"Monthly Commit Velocity Trajectory (2026)"}),N.jsx("span",{className:"text-xs text-cyan-400 font-normal",children:"Peak: Sept 2026"})]}),N.jsx("p",{className:"text-xs text-slate-500 mb-6 font-mono",children:"Empirical commit distribution showing exponential ramp during fall edtech platform sprints."}),N.jsx("div",{className:"h-56 flex items-end gap-3 pt-6 pb-2 px-2",children:c.map((p,m)=>{const _=Math.max(10,p.commits/f*100),v=p.commits===f;return N.jsxs("div",{className:"flex-1 flex flex-col items-center gap-2 group h-full justify-end",children:[N.jsx("span",{className:"text-[10px] font-mono text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity",children:p.commits}),N.jsx("div",{style:{height:`${_}%`},className:`w-full rounded-t-lg transition-all duration-500 ${v?"bg-gradient-to-t from-cyan-600 to-cyan-300 shadow-lg shadow-cyan-950":"bg-gradient-to-t from-slate-800 to-slate-600 group-hover:from-purple-900 group-hover:to-purple-400"}`}),N.jsx("span",{className:"text-[11px] font-mono text-slate-400 group-hover:text-white",children:p.month})]},m)})})]}),N.jsxs("div",{className:"lg:col-span-5 glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between",children:[N.jsxs("div",{children:[N.jsx("h3",{className:"text-sm font-mono text-slate-300 uppercase tracking-wider mb-2",children:"Weekly Cadence & Focus Days"}),N.jsx("p",{className:"text-xs text-slate-500 mb-6 font-mono",children:"Friday (160 commits) and Monday (133 commits) drive peak creative momentum."}),N.jsx("div",{className:"space-y-3",children:d.map((p,m)=>N.jsxs("div",{className:"space-y-1",children:[N.jsxs("div",{className:"flex justify-between text-xs font-mono",children:[N.jsx("span",{className:"text-slate-400",children:p.day}),N.jsxs("span",{className:"text-slate-200",children:[p.commits," commits"]})]}),N.jsx("div",{className:"w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800",children:N.jsx("div",{style:{width:`${p.pct}%`},className:`h-full rounded-full ${p.day==="Fri"?"bg-cyan-400":p.day==="Mon"?"bg-purple-400":"bg-slate-600"}`})})]},m))})]}),N.jsxs("div",{className:"mt-4 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-500 flex justify-between",children:[N.jsx("span",{children:"Active Cycle: Nov 2026"}),N.jsx("span",{className:"text-cyan-400",children:"Weekly Rhythm: Consistent"})]})]})]})]})})},CM=JSON.parse('[{"name":"POA-Skippi","title":"Skippi Island — 3D Shark Tank Simulation","category":"EdTech & Serious Games","description":"Interactive 3D pedagogical simulation for Grades 4-9 navigating Roo the kangaroo through 13 business milestones on Skippi Island.","html_url":"https://github.com/CHIRAG-GOUR/POA-Skippi","live_url":"https://poa-skippi.web.app","language":"TypeScript","key_tech":["React","Three.js","R3F","Zustand","Framer Motion","Recharts"],"stars":0,"forks":0,"stage":"Actively Developing","stage_badge":"Active","days_since_push":2,"pushed_at":"2026-11-13T09:31:56Z","featured":true,"complexity_tier":"High"},{"name":"Eat-Better-Internship","title":"Eat Better — Spatial Internship Platform","category":"Creative Full-Stack","description":"Spatial internship application portal integrating interactive 3D viewports, GSAP motion choreography, and programmatic PDF reporting.","html_url":"https://github.com/CHIRAG-GOUR/Eat-Better-Internship","live_url":null,"language":"TypeScript","key_tech":["Next.js","Turbopack","Three.js","GSAP","Motion","Zustand","jsPDF"],"stars":0,"forks":0,"stage":"Actively Developing","stage_badge":"Active","days_since_push":0,"pushed_at":"2026-11-16T07:00:15Z","featured":true,"complexity_tier":"High"},{"name":"Olympiad-Activities","title":"Olympiad Digital Examination","category":"EdTech & Serious Games","description":"Comprehensive digital examination platform featuring interactive drag-and-drop mechanics, 3D graphical prompts, and cloud data persistence.","html_url":"https://github.com/CHIRAG-GOUR/Olympiad-Activities","live_url":"https://olympiad-activities.web.app","language":"TypeScript","key_tech":["Next.js","Firebase","React Three Fiber","DND-Kit","PapaParse"],"stars":0,"forks":0,"stage":"Actively Developing","stage_badge":"Active","days_since_push":11,"pushed_at":"2026-11-04T08:02:25Z","featured":true,"complexity_tier":"High"},{"name":"IdeathonPPTGuideline2026","title":"IdeathonPPTGuideline2026","category":"Modern Reactive Web","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/IdeathonPPTGuideline2026","live_url":null,"language":"TypeScript","key_tech":["TypeScript"],"stars":0,"forks":0,"stage":"Actively Developing","stage_badge":"Active","days_since_push":13,"pushed_at":"2026-11-03T04:48:36Z","featured":false,"complexity_tier":"Standard"},{"name":"Ideathon-Projects","title":"Ideathon Projects","category":"Modern Reactive Web","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/Ideathon-Projects","live_url":null,"language":"TypeScript","key_tech":["TypeScript"],"stars":0,"forks":0,"stage":"Actively Developing","stage_badge":"Active","days_since_push":36,"pushed_at":"2026-10-10T11:35:34Z","featured":false,"complexity_tier":"Standard"},{"name":"Minty-Finance","title":"Minty Finance — Student Investment Lab","category":"EdTech & Serious Games","description":"Student investment practice laboratory providing virtual capital simulations and real-time market mechanics.","html_url":"https://github.com/CHIRAG-GOUR/Minty-Finance","live_url":null,"language":"TypeScript","key_tech":["TypeScript","React","Market API","Tailwind CSS"],"stars":0,"forks":0,"stage":"Actively Developing","stage_badge":"Active","days_since_push":40,"pushed_at":"2026-10-06T07:46:28Z","featured":false,"complexity_tier":"Medium"},{"name":"POA-Internet-GoodOrBad","title":"POA Internet GoodOrBad","category":"EdTech & Serious Games","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/POA-Internet-GoodOrBad","live_url":null,"language":"HTML","key_tech":["HTML"],"stars":0,"forks":0,"stage":"Maintained & Stable","stage_badge":"Maintained","days_since_push":46,"pushed_at":"2026-10-01T05:28:12Z","featured":false,"complexity_tier":"Standard"},{"name":"Math-Activity-6th-Grade","title":"Math Activity 6th Grade","category":"EdTech & Serious Games","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/Math-Activity-6th-Grade","live_url":null,"language":"TypeScript","key_tech":["TypeScript"],"stars":0,"forks":0,"stage":"Maintained & Stable","stage_badge":"Maintained","days_since_push":46,"pushed_at":"2026-09-30T08:46:00Z","featured":false,"complexity_tier":"Standard"},{"name":"ZeePrep-MobileApp","title":"ZeePrep — Mobile Learning Application","category":"Mobile Architecture","description":"Phone-first cross-platform application for students and educators connected to production Firebase backend with audio/video assessments.","html_url":"https://github.com/CHIRAG-GOUR/ZeePrep-MobileApp","live_url":null,"language":"TypeScript","key_tech":["React Native","Expo Router","Expo Audio/Video","TanStack Query","Firebase"],"stars":0,"forks":0,"stage":"Maintained & Stable","stage_badge":"Maintained","days_since_push":54,"pushed_at":"2026-09-22T11:34:00Z","featured":true,"complexity_tier":"High"},{"name":"POA-StorySprint","title":"StorySprint — Collaborative Storytelling","category":"EdTech & Serious Games","description":"Digital classroom Plan of Activity platform for smartboards featuring baton-passing dynamics, dilemma twist wheels, and printable PDF books.","html_url":"https://github.com/CHIRAG-GOUR/POA-StorySprint","live_url":null,"language":"TypeScript","key_tech":["React","Three.js","R3F","jsPDF","html2canvas","Framer Motion"],"stars":0,"forks":0,"stage":"Maintained & Stable","stage_badge":"Maintained","days_since_push":69,"pushed_at":"2026-09-07T09:02:04Z","featured":false,"complexity_tier":"Medium"},{"name":"LiteraryClub-Activity1","title":"LiteraryClub Activity1","category":"Modern Reactive Web","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/LiteraryClub-Activity1","live_url":null,"language":"TypeScript","key_tech":["TypeScript"],"stars":0,"forks":0,"stage":"Maintained & Stable","stage_badge":"Maintained","days_since_push":87,"pushed_at":"2026-08-21T05:27:06Z","featured":false,"complexity_tier":"Standard"},{"name":"Mangalyan-India","title":"Celestial Launch — Mangalyaan Simulator","category":"Creative 3D & Simulation","description":"Nocturnal aerospace launch simulator for ISRO Mars Orbiter Mission featuring PBR lighting, atmospheric particle systems, and launch tower telemetry.","html_url":"https://github.com/CHIRAG-GOUR/Mangalyan-India","live_url":null,"language":"TypeScript","key_tech":["React","Three.js","Radix UI","PBR Shaders","Tailwind CSS"],"stars":0,"forks":0,"stage":"Maintained & Stable","stage_badge":"Maintained","days_since_push":90,"pushed_at":"2026-08-17T09:26:14Z","featured":true,"complexity_tier":"High"},{"name":"mangalyan","title":"mangalyan","category":"Modern Reactive Web","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/mangalyan","live_url":null,"language":"TypeScript","key_tech":["TypeScript"],"stars":0,"forks":0,"stage":"Maintained & Stable","stage_badge":"Maintained","days_since_push":93,"pushed_at":"2026-08-14T07:57:21Z","featured":false,"complexity_tier":"Standard"},{"name":"Podcast-Tool-New","title":"Podcast Tool New","category":"Modern Reactive Web","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/Podcast-Tool-New","live_url":null,"language":"TypeScript","key_tech":["TypeScript"],"stars":0,"forks":0,"stage":"Maintained & Stable","stage_badge":"Maintained","days_since_push":95,"pushed_at":"2026-08-12T11:48:47Z","featured":false,"complexity_tier":"Standard"},{"name":"Podcast-Tool-CCIS","title":"Podcast Tool CCIS","category":"Modern Reactive Web","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/Podcast-Tool-CCIS","live_url":null,"language":"TypeScript","key_tech":["TypeScript"],"stars":0,"forks":0,"stage":"Maintained & Stable","stage_badge":"Maintained","days_since_push":95,"pushed_at":"2026-08-12T11:48:52Z","featured":false,"complexity_tier":"Standard"},{"name":"VelocityLock","title":"VelocityLock","category":"Modern Reactive Web","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/VelocityLock","live_url":null,"language":"TypeScript","key_tech":["TypeScript"],"stars":0,"forks":0,"stage":"Maintained & Stable","stage_badge":"Maintained","days_since_push":101,"pushed_at":"2026-08-06T11:38:49Z","featured":false,"complexity_tier":"Standard"},{"name":"IdeathonPPT2026","title":"IdeathonPPT2026","category":"Modern Reactive Web","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/IdeathonPPT2026","live_url":null,"language":"TypeScript","key_tech":["TypeScript"],"stars":0,"forks":0,"stage":"Maintained & Stable","stage_badge":"Maintained","days_since_push":111,"pushed_at":"2026-07-27T10:04:21Z","featured":false,"complexity_tier":"Standard"},{"name":"IdeathonPPT-CCIS-2026","title":"IdeathonPPT CCIS 2026","category":"Modern Reactive Web","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/IdeathonPPT-CCIS-2026","live_url":null,"language":"TypeScript","key_tech":["TypeScript"],"stars":0,"forks":0,"stage":"Maintained & Stable","stage_badge":"Maintained","days_since_push":112,"pushed_at":"2026-07-27T06:11:18Z","featured":false,"complexity_tier":"Standard"},{"name":"Mood-Mirror-2026","title":"Mood Mirror — Edge Computer Vision","category":"Vision & Applied AI","description":"Browser-based facial landmark detection and sentiment reflection utilizing neural network inference directly on the client without server roundtrips.","html_url":"https://github.com/CHIRAG-GOUR/Mood-Mirror-2026","live_url":null,"language":"TypeScript","key_tech":["React","Vite","@vladmandic/face-api","Framer Motion","Tailwind CSS"],"stars":0,"forks":0,"stage":"Maintained & Stable","stage_badge":"Maintained","days_since_push":118,"pushed_at":"2026-07-20T11:20:42Z","featured":false,"complexity_tier":"Medium"},{"name":"UltraBox-New","title":"UltraBox New","category":"Foundation & Systems","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/UltraBox-New","live_url":null,"language":"HTML","key_tech":["HTML"],"stars":0,"forks":0,"stage":"Maintained & Stable","stage_badge":"Maintained","days_since_push":118,"pushed_at":"2026-07-20T09:57:31Z","featured":false,"complexity_tier":"Standard"},{"name":"Playbox-School","title":"Playbox School","category":"EdTech & Serious Games","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/Playbox-School","live_url":null,"language":"JavaScript","key_tech":["JavaScript"],"stars":0,"forks":0,"stage":"Maintained & Stable","stage_badge":"Maintained","days_since_push":120,"pushed_at":"2026-07-18T08:24:29Z","featured":false,"complexity_tier":"Standard"},{"name":"SamplePPTIdeathon2026","title":"SamplePPTIdeathon2026","category":"Modern Reactive Web","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/SamplePPTIdeathon2026","live_url":null,"language":"TypeScript","key_tech":["TypeScript"],"stars":0,"forks":0,"stage":"Maintained & Stable","stage_badge":"Maintained","days_since_push":129,"pushed_at":"2026-07-09T08:34:56Z","featured":false,"complexity_tier":"Standard"},{"name":"FinanceClubPPT","title":"FinanceClubPPT","category":"Modern Reactive Web","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/FinanceClubPPT","live_url":null,"language":"TypeScript","key_tech":["TypeScript"],"stars":0,"forks":0,"stage":"Maintained & Stable","stage_badge":"Maintained","days_since_push":129,"pushed_at":"2026-07-09T08:09:34Z","featured":false,"complexity_tier":"Standard"},{"name":"InaugrationPPT2026","title":"InaugrationPPT2026","category":"Modern Reactive Web","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/InaugrationPPT2026","live_url":null,"language":"TypeScript","key_tech":["TypeScript"],"stars":0,"forks":0,"stage":"Maintained & Stable","stage_badge":"Maintained","days_since_push":131,"pushed_at":"2026-07-07T10:11:24Z","featured":false,"complexity_tier":"Standard"},{"name":"ClubPPT2026","title":"ClubPPT2026","category":"Modern Reactive Web","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/ClubPPT2026","live_url":null,"language":"TypeScript","key_tech":["TypeScript"],"stars":0,"forks":0,"stage":"Maintained & Stable","stage_badge":"Maintained","days_since_push":134,"pushed_at":"2026-07-04T08:38:09Z","featured":false,"complexity_tier":"Standard"},{"name":"ResumeBuilder","title":"ResumeBuilder","category":"Modern Reactive Web","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/ResumeBuilder","live_url":null,"language":"JavaScript","key_tech":["JavaScript"],"stars":0,"forks":0,"stage":"Maintained & Stable","stage_badge":"Maintained","days_since_push":139,"pushed_at":"2026-06-29T07:34:12Z","featured":false,"complexity_tier":"Standard"},{"name":"Resume-Portfolio","title":"Resume Portfolio","category":"Foundation & Systems","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/Resume-Portfolio","live_url":null,"language":"HTML","key_tech":["HTML"],"stars":0,"forks":0,"stage":"Foundational Archive","stage_badge":"Archived","days_since_push":192,"pushed_at":"2026-05-08T04:55:27Z","featured":false,"complexity_tier":"Standard"},{"name":"3JsCityNeon","title":"3JsCityNeon","category":"Creative 3D & Simulation","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/3JsCityNeon","live_url":null,"language":"TypeScript","key_tech":[],"stars":0,"forks":0,"stage":"Showcase / Simulation","stage_badge":"Showcase","days_since_push":194,"pushed_at":"2026-05-06T04:19:46Z","featured":false,"complexity_tier":"Standard"},{"name":"UniverseBackgroundAi","title":"UniverseBackgroundAi","category":"Modern Reactive Web","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/UniverseBackgroundAi","live_url":null,"language":"TypeScript","key_tech":["TypeScript"],"stars":0,"forks":0,"stage":"Foundational Archive","stage_badge":"Archived","days_since_push":194,"pushed_at":"2026-05-05T09:08:16Z","featured":false,"complexity_tier":"Standard"},{"name":"InteractiveGalaxy","title":"InteractiveGalaxy","category":"Creative 3D & Simulation","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/InteractiveGalaxy","live_url":null,"language":"JavaScript","key_tech":["JavaScript"],"stars":0,"forks":0,"stage":"Showcase / Simulation","stage_badge":"Showcase","days_since_push":195,"pushed_at":"2026-05-05T06:18:55Z","featured":false,"complexity_tier":"Standard"},{"name":"SaltyRevamp","title":"SaltyRevamp","category":"Foundation & Systems","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/SaltyRevamp","live_url":null,"language":"HTML","key_tech":["HTML"],"stars":0,"forks":0,"stage":"Foundational Archive","stage_badge":"Archived","days_since_push":195,"pushed_at":"2026-05-05T04:58:00Z","featured":false,"complexity_tier":"Standard"},{"name":"3DArchitectureTool","title":"3DArchitectureTool","category":"Creative 3D & Simulation","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/3DArchitectureTool","live_url":null,"language":"TypeScript","key_tech":[],"stars":0,"forks":0,"stage":"Foundational Archive","stage_badge":"Archived","days_since_push":208,"pushed_at":"2026-04-21T10:14:07Z","featured":false,"complexity_tier":"Standard"},{"name":"SolarSystem3js","title":"Solaris — Audiovisual Solar System","category":"Creative 3D & Simulation","description":"Audiovisual 3D solar system featuring procedural GLSL planet shaders, spatial audio synchronization, and post-processing bloom.","html_url":"https://github.com/CHIRAG-GOUR/SolarSystem3js","live_url":null,"language":"JavaScript","key_tech":["Three.js","R3F","Custom Shader Material","GSAP","Leva","Zustand"],"stars":0,"forks":0,"stage":"Showcase / Simulation","stage_badge":"Showcase","days_since_push":213,"pushed_at":"2026-04-16T11:01:16Z","featured":true,"complexity_tier":"Showcase"},{"name":"EartchMoon","title":"EartchMoon","category":"Modern Reactive Web","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/EartchMoon","live_url":null,"language":"JavaScript","key_tech":["JavaScript"],"stars":0,"forks":0,"stage":"Foundational Archive","stage_badge":"Archived","days_since_push":213,"pushed_at":"2026-04-16T10:06:51Z","featured":false,"complexity_tier":"Standard"},{"name":"Audio_SkilliZee","title":"Audio_SkilliZee","category":"Foundation & Systems","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/Audio_SkilliZee","live_url":null,"language":"HTML","key_tech":["HTML"],"stars":0,"forks":0,"stage":"Foundational Archive","stage_badge":"Archived","days_since_push":214,"pushed_at":"2026-04-16T07:04:33Z","featured":false,"complexity_tier":"Standard"},{"name":"poasecondgradenew","title":"poasecondgradenew","category":"EdTech & Serious Games","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/poasecondgradenew","live_url":null,"language":"JavaScript","key_tech":["JavaScript"],"stars":0,"forks":0,"stage":"Foundational Archive","stage_badge":"Archived","days_since_push":215,"pushed_at":"2026-04-14T07:45:05Z","featured":false,"complexity_tier":"Standard"},{"name":"pptsanskarschool","title":"pptsanskarschool","category":"EdTech & Serious Games","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/pptsanskarschool","live_url":null,"language":"TypeScript","key_tech":["TypeScript"],"stars":0,"forks":0,"stage":"Foundational Archive","stage_badge":"Archived","days_since_push":223,"pushed_at":"2026-04-06T12:06:24Z","featured":false,"complexity_tier":"Standard"},{"name":"Work-Energy-Power","title":"Work Energy Power","category":"Modern Reactive Web","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/Work-Energy-Power","live_url":null,"language":"JavaScript","key_tech":["JavaScript"],"stars":0,"forks":0,"stage":"Foundational Archive","stage_badge":"Archived","days_since_push":226,"pushed_at":"2026-04-03T11:20:20Z","featured":false,"complexity_tier":"Standard"},{"name":"poapicturetalk","title":"poapicturetalk","category":"EdTech & Serious Games","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/poapicturetalk","live_url":null,"language":"TypeScript","key_tech":["TypeScript"],"stars":0,"forks":0,"stage":"Foundational Archive","stage_badge":"Archived","days_since_push":226,"pushed_at":"2026-04-03T07:31:34Z","featured":false,"complexity_tier":"Standard"},{"name":"poainnerravan","title":"poainnerravan","category":"EdTech & Serious Games","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/poainnerravan","live_url":null,"language":"JavaScript","key_tech":["JavaScript"],"stars":0,"forks":0,"stage":"Foundational Archive","stage_badge":"Archived","days_since_push":228,"pushed_at":"2026-04-01T08:39:15Z","featured":false,"complexity_tier":"Standard"},{"name":"hbd","title":"hbd","category":"Modern Reactive Web","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/hbd","live_url":null,"language":"JavaScript","key_tech":["JavaScript"],"stars":0,"forks":0,"stage":"Foundational Archive","stage_badge":"Archived","days_since_push":234,"pushed_at":"2026-03-27T06:23:48Z","featured":false,"complexity_tier":"Standard"},{"name":"poapasstheball","title":"poapasstheball","category":"EdTech & Serious Games","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/poapasstheball","live_url":null,"language":"TypeScript","key_tech":["TypeScript"],"stars":0,"forks":0,"stage":"Foundational Archive","stage_badge":"Archived","days_since_push":234,"pushed_at":"2026-03-27T05:13:03Z","featured":false,"complexity_tier":"Standard"},{"name":"SatPdfMaker","title":"SatPdfMaker","category":"Modern Reactive Web","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/SatPdfMaker","live_url":null,"language":"JavaScript","key_tech":["JavaScript"],"stars":0,"forks":0,"stage":"Foundational Archive","stage_badge":"Archived","days_since_push":236,"pushed_at":"2026-03-24T08:54:22Z","featured":false,"complexity_tier":"Standard"},{"name":"LandingPage-PublicSpeaking","title":"LandingPage PublicSpeaking","category":"Modern Reactive Web","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/LandingPage-PublicSpeaking","live_url":null,"language":"TypeScript","key_tech":["TypeScript"],"stars":0,"forks":0,"stage":"Foundational Archive","stage_badge":"Archived","days_since_push":238,"pushed_at":"2026-03-23T04:54:18Z","featured":false,"complexity_tier":"Standard"},{"name":"poaemotions","title":"poaemotions","category":"EdTech & Serious Games","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/poaemotions","live_url":null,"language":"TypeScript","key_tech":["TypeScript"],"stars":0,"forks":0,"stage":"Foundational Archive","stage_badge":"Archived","days_since_push":240,"pushed_at":"2026-03-20T07:33:38Z","featured":false,"complexity_tier":"Standard"},{"name":"poaspoontoon","title":"poaspoontoon","category":"EdTech & Serious Games","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/poaspoontoon","live_url":null,"language":"TypeScript","key_tech":["TypeScript"],"stars":0,"forks":0,"stage":"Foundational Archive","stage_badge":"Archived","days_since_push":243,"pushed_at":"2026-03-17T11:29:25Z","featured":false,"complexity_tier":"Standard"},{"name":"physicsmotion2","title":"Physics Motion 2 — Kinematic Simulation Engine","category":"Simulation & Fast AI","description":"Kinematic motion simulation combining Theatre.js timeline choreography with Groq high-speed LPU inference for real-time physics problem solving.","html_url":"https://github.com/CHIRAG-GOUR/physicsmotion2","live_url":null,"language":"TypeScript","key_tech":["React","Three.js","Theatre.js Studio","Groq SDK","GSAP","BVH"],"stars":0,"forks":0,"stage":"Foundational Archive","stage_badge":"Archived","days_since_push":247,"pushed_at":"2026-03-14T04:53:27Z","featured":true,"complexity_tier":"High"},{"name":"poasecondgrade","title":"poasecondgrade","category":"EdTech & Serious Games","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/poasecondgrade","live_url":null,"language":"JavaScript","key_tech":["JavaScript"],"stars":0,"forks":0,"stage":"Foundational Archive","stage_badge":"Archived","days_since_push":247,"pushed_at":"2026-03-13T08:24:34Z","featured":false,"complexity_tier":"Standard"},{"name":"gravityphysics","title":"gravityphysics","category":"Creative 3D & Simulation","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/gravityphysics","live_url":null,"language":"JavaScript","key_tech":["JavaScript"],"stars":0,"forks":0,"stage":"Foundational Archive","stage_badge":"Archived","days_since_push":248,"pushed_at":"2026-03-12T08:42:35Z","featured":false,"complexity_tier":"Standard"},{"name":"arogyamirrornew2","title":"arogyamirrornew2","category":"Modern Reactive Web","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/arogyamirrornew2","live_url":null,"language":"JavaScript","key_tech":["JavaScript"],"stars":0,"forks":0,"stage":"Foundational Archive","stage_badge":"Archived","days_since_push":253,"pushed_at":"2026-03-07T11:05:39Z","featured":false,"complexity_tier":"Standard"},{"name":"arogyamirror","title":"arogyamirror","category":"Modern Reactive Web","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/arogyamirror","live_url":null,"language":"JavaScript","key_tech":["JavaScript"],"stars":0,"forks":0,"stage":"Foundational Archive","stage_badge":"Archived","days_since_push":253,"pushed_at":"2026-03-07T09:47:43Z","featured":false,"complexity_tier":"Standard"},{"name":"physics-motion","title":"physics motion","category":"Creative 3D & Simulation","description":"Physics course","html_url":"https://github.com/CHIRAG-GOUR/physics-motion","live_url":null,"language":"TypeScript","key_tech":["TypeScript"],"stars":0,"forks":0,"stage":"Foundational Archive","stage_badge":"Archived","days_since_push":258,"pushed_at":"2026-03-02T08:51:11Z","featured":false,"complexity_tier":"Standard"},{"name":"Architecture-Internship","title":"Architecture Internship","category":"Modern Reactive Web","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/Architecture-Internship","live_url":null,"language":"JavaScript","key_tech":["JavaScript"],"stars":0,"forks":0,"stage":"Foundational Archive","stage_badge":"Archived","days_since_push":261,"pushed_at":"2026-02-27T11:14:10Z","featured":false,"complexity_tier":"Standard"},{"name":"SBPL---Timeline","title":"SBPL   Timeline","category":"Foundation & Systems","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/SBPL---Timeline","live_url":null,"language":"HTML","key_tech":["HTML"],"stars":0,"forks":0,"stage":"Foundational Archive","stage_badge":"Archived","days_since_push":263,"pushed_at":"2026-02-25T08:18:34Z","featured":false,"complexity_tier":"Standard"},{"name":"HTML-PORTFOLIO","title":"HTML PORTFOLIO","category":"Foundation & Systems","description":"A basic HTML Program .","html_url":"https://github.com/CHIRAG-GOUR/HTML-PORTFOLIO","live_url":null,"language":"HTML","key_tech":["HTML"],"stars":0,"forks":0,"stage":"Foundational Archive","stage_badge":"Archived","days_since_push":275,"pushed_at":"2026-02-13T11:47:57Z","featured":false,"complexity_tier":"Standard"},{"name":"Audio_SkilliZee2","title":"Audio_SkilliZee2","category":"Foundation & Systems","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/Audio_SkilliZee2","live_url":null,"language":"TypeScript","key_tech":[],"stars":0,"forks":0,"stage":"Foundational Archive","stage_badge":"Archived","days_since_push":395,"pushed_at":"2025-10-16T11:35:23Z","featured":false,"complexity_tier":"Standard"},{"name":"effectiveCommunicationModule","title":"effectiveCommunicationModule","category":"Foundation & Systems","description":"Active development project.","html_url":"https://github.com/CHIRAG-GOUR/effectiveCommunicationModule","live_url":null,"language":"HTML","key_tech":["HTML"],"stars":0,"forks":0,"stage":"Foundational Archive","stage_badge":"Archived","days_since_push":423,"pushed_at":"2025-09-18T21:02:01Z","featured":false,"complexity_tier":"Standard"}]'),RM={all_projects:CM},PM=()=>{const[a,e]=qn.useState("All"),[n,r]=qn.useState(""),o=RM.all_projects||[],c=["All","Featured","EdTech & Serious Games","Creative 3D & Simulation","Modern Reactive Web","Mobile Architecture"],f=o.filter(d=>{const p=a==="All"?!0:a==="Featured"?d.featured:d.category.toLowerCase().includes(a.toLowerCase()),m=n.toLowerCase(),_=!m||d.name.toLowerCase().includes(m)||d.title.toLowerCase().includes(m)||d.description.toLowerCase().includes(m)||d.key_tech.some(v=>v.toLowerCase().includes(m));return p&&_});return N.jsx("section",{id:"projects",className:"py-16 bg-obsidian-900/40",children:N.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[N.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4",children:[N.jsxs("div",{children:[N.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2",children:[N.jsx(o_,{className:"w-4 h-4"}),N.jsx("span",{children:"Project Constellation // 57 Original Works"})]}),N.jsx("h2",{className:"text-3xl font-bold tracking-tight text-white",children:"The Project Universe"}),N.jsx("p",{className:"mt-2 text-slate-400 text-sm max-w-2xl",children:"Spatial interactive simulations, serious educational games, and reactive full-stack web and mobile applications—100% verified source creations."})]}),N.jsxs("div",{className:"relative w-full md:w-72",children:[N.jsx(u_,{className:"w-4 h-4 text-slate-500 absolute left-3 top-3"}),N.jsx("input",{type:"text",placeholder:"Search tech, title, or keyword...",value:n,onChange:d=>r(d.target.value),className:"w-full bg-slate-900/90 border border-slate-700/80 rounded-xl pl-9 pr-4 py-2 text-xs font-mono text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"})]})]}),N.jsx("div",{className:"flex flex-wrap gap-2 mb-8",children:c.map(d=>{const p=a===d;return N.jsx("button",{onClick:()=>e(d),className:`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${p?"bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-sm shadow-cyan-950":"bg-slate-900/60 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-slate-200"}`,children:d},d)})}),N.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:f.map((d,p)=>{const m=d.category.includes("3D")||d.name.toLowerCase().includes("skippi")||d.name.toLowerCase().includes("solar"),_=d.category.includes("EdTech")||d.name.toLowerCase().includes("poa");d.category.includes("Mobile")||d.name.toLowerCase().includes("zeeprep");const v=m?"hover:border-cyan-500/40":_?"hover:border-purple-500/40":"hover:border-emerald-500/40";return N.jsxs("div",{className:`glass-panel p-6 rounded-2xl flex flex-col justify-between border border-slate-800/80 ${v} transition-all duration-300 group`,children:[N.jsxs("div",{children:[N.jsxs("div",{className:"flex items-center justify-between mb-3",children:[N.jsx("span",{className:"text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700",children:d.stage_badge}),d.featured&&N.jsxs("span",{className:"text-[10px] font-mono text-cyan-400 flex items-center gap-1",children:[N.jsx(Nd,{className:"w-3 h-3"})," Featured"]})]}),N.jsx("h3",{className:"text-base font-bold text-white group-hover:text-cyan-300 transition-colors",children:d.title}),N.jsx("p",{className:"text-xs font-mono text-slate-500 mb-3",children:d.name}),N.jsx("p",{className:"text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3",children:d.description})]}),N.jsxs("div",{children:[N.jsx("div",{className:"flex flex-wrap gap-1.5 mb-5",children:d.key_tech.slice(0,5).map((x,S)=>N.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/80 text-slate-300 border border-slate-800",children:x},S))}),N.jsxs("div",{className:"pt-3 border-t border-slate-800/80 flex items-center justify-between",children:[N.jsxs("a",{href:d.html_url,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors",children:[N.jsx(Id,{className:"w-3.5 h-3.5"}),N.jsx("span",{children:"Source"})]}),d.live_url&&N.jsxs("a",{href:d.live_url,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors bg-cyan-950/60 px-2 py-1 rounded border border-cyan-800/40",children:[N.jsx(i_,{className:"w-3.5 h-3.5"}),N.jsx("span",{children:"Live Demo"})]})]})]})]},p)})})]})})},Em=JSON.parse(`[{"sha":"8950ed5","full_sha":"8950ed5da768c7bb602cc2c400006628c1ba4ad2","title":"feat: Module 5 Capstone (5.1 & 5.2), Activity 4 3D overhaul, and 3.3 text visibility fix","project":"Eat-Better-Internship","date":"2026-11-16T06:54:05Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":30,"dimensions":{"architectural":0,"feature":6,"complexity_3d_ai":7,"refactoring":0,"bugfix_stability":6,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing"},{"sha":"b9b293b","full_sha":"b9b293b1b9c51de194e41a2a14083b4e2e9f6382","title":"feat: Experiential Activity 4 - Build the Eat Better Business","project":"Eat-Better-Internship","date":"2026-11-16T05:20:15Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":41.8,"dimensions":{"architectural":0,"feature":8,"complexity_3d_ai":7,"refactoring":6,"bugfix_stability":0,"integration_api":6,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing"},{"sha":"7786d5b","full_sha":"7786d5b2889173f5596379ce45f8cd3c11895791","title":"Experiential Activity 3: Distribution Command Centre (3D warehouse, routing, receiving, al","project":"Eat-Better-Internship","date":"2026-11-14T10:47:27Z","change_type":"Incremental Iteration","technical_impact":"Standard","testing_evidence":"Not explicitly logged in commit","commit_score":15,"dimensions":{"architectural":0,"feature":0,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"General maintenance and iterative code adjustment"},{"sha":"7a6ddae","full_sha":"7a6ddaea5462b196ac598cca4615571650c696ac","title":"Activity 1: ingredient stage frames the whole rack; big readable shelf-edge name tags; jar","project":"Eat-Better-Internship","date":"2026-11-14T10:33:42Z","change_type":"Incremental Iteration","technical_impact":"Standard","testing_evidence":"Not explicitly logged in commit","commit_score":15,"dimensions":{"architectural":0,"feature":0,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"General maintenance and iterative code adjustment"},{"sha":"973e762","full_sha":"973e762f6194e7f5aab66241de721b8543112209","title":"feat: experiential activity 2 & 3","project":"Eat-Better-Internship","date":"2026-11-14T04:52:36Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":24,"dimensions":{"architectural":0,"feature":6,"complexity_3d_ai":7,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing"},{"sha":"106a053","full_sha":"106a053da8b5638b04490b8866fc6001e943fb2d","title":"Activity 1: hairnet covers only the hair so the worker's face is visible; closer prep came","project":"Eat-Better-Internship","date":"2026-11-14T04:39:11Z","change_type":"Incremental Iteration","technical_impact":"Standard","testing_evidence":"Not explicitly logged in commit","commit_score":15,"dimensions":{"architectural":0,"feature":0,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"General maintenance and iterative code adjustment"},{"sha":"6c0c6cd","full_sha":"6c0c6cd8dafa2e7827eae7163d4dee5fe0f7bda3","title":"Activity 1 upgrades: real ingredient set with SVG icons + 3D pieces, flavour rules, refere","project":"Eat-Better-Internship","date":"2026-11-14T04:31:27Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":34,"dimensions":{"architectural":0,"feature":8,"complexity_3d_ai":7,"refactoring":0,"bugfix_stability":6,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing"},{"sha":"28223e9","full_sha":"28223e97d2e006c1f45bb3cc653895132871c95d","title":"feat: experiential activities for chapters 1.1, 1.3, 2.1 & 2.3","project":"Eat-Better-Internship","date":"2026-11-13T10:02:19Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":45,"dimensions":{"architectural":6,"feature":6,"complexity_3d_ai":7,"refactoring":6,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing"},{"sha":"a8779c7","full_sha":"a8779c7944dd1b868babe7a66f5b6fa3d2b75e53","title":"docs: experiential activities spec (Activities 1-4)","project":"Eat-Better-Internship","date":"2026-11-13T10:00:30Z","change_type":"Technical Documentation","technical_impact":"Medium","testing_evidence":"Detected","commit_score":15,"dimensions":{"architectural":0,"feature":0,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":6,"documentation":6,"consistency":5},"reasoning":"Pedagogical clarity, installation guidelines, and system specs"},{"sha":"9dd977a","full_sha":"9dd977a6a9f9e471677d24f75fcbd338e5c767e7","title":"Experiential Activity 1: Eat Better Product Innovation Lab (3D lab, six quality checkpoint","project":"Eat-Better-Internship","date":"2026-11-13T09:58:14Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Detected","commit_score":33.4,"dimensions":{"architectural":0,"feature":8,"complexity_3d_ai":7,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":6,"documentation":6,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing"},{"sha":"4c618f7","full_sha":"4c618f779bdf97cad92e8e453b50fc65b02a5df2","title":"Island next-place bar, character speech bubbles, background music","project":"POA-Skippi","date":"2026-11-13T09:31:46Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":24,"dimensions":{"architectural":0,"feature":6,"complexity_3d_ai":7,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing"},{"sha":"a006107","full_sha":"a0061079188a100b95154b5ab7f80a7411400228","title":"Proper side-facing wheels for ice gola cart, freezer bike and van","project":"POA-Skippi","date":"2026-11-13T09:25:25Z","change_type":"Architectural Foundation","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":15,"dimensions":{"architectural":6,"feature":0,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Structural framework setup, state store configuration, or routing modernization"},{"sha":"e2a5fd2","full_sha":"e2a5fd2ebc822debd4f4c880770d7a2411acb2fd","title":"Complete all 13 sections, fix render loops, add Firebase hosting","project":"POA-Skippi","date":"2026-11-13T09:21:56Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":53.2,"dimensions":{"architectural":6,"feature":8,"complexity_3d_ai":7,"refactoring":0,"bugfix_stability":6,"integration_api":6,"testing_validation":0,"documentation":6,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing"},{"sha":"eae634d","full_sha":"eae634d3908a4d1f73842ccdbec2888bbb41be1c","title":"Skippi POA: 3D gamified case-study redevelopment (work in progress)","project":"POA-Skippi","date":"2026-11-13T09:11:09Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":27.9,"dimensions":{"architectural":6,"feature":0,"complexity_3d_ai":8,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":6,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing"},{"sha":"7bd5604","full_sha":"7bd560404d40771a03c1d84a483a74fc4a6b8f31","title":"Fix 1.4 Signal sorter overflow on phones (min-w-0); full-site error sweep clean at 1440 an","project":"Eat-Better-Internship","date":"2026-11-13T04:30:13Z","change_type":"Stability & Remediation","technical_impact":"Medium","testing_evidence":"Not explicitly logged in commit","commit_score":19,"dimensions":{"architectural":0,"feature":0,"complexity_3d_ai":0,"refactoring":6,"bugfix_stability":6,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Edge-case resolution or critical runtime stability patch; Bonus awarded for proactive stabilization and cleanup"},{"sha":"a758307","full_sha":"a75830747769ee445383dd882351458864344f9f","title":"Module 4: fix 4.2 K-Matrix floor animation crash; 4.3 capacity game updates","project":"Eat-Better-Internship","date":"2026-11-13T04:01:28Z","change_type":"Stability & Remediation","technical_impact":"Medium","testing_evidence":"Not explicitly logged in commit","commit_score":15,"dimensions":{"architectural":0,"feature":0,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":8,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Edge-case resolution or critical runtime stability patch"},{"sha":"e712bcd","full_sha":"e712bcd3f7df0149771c85917d95599ab502e56e","title":"Module 4 (in progress): chapters 4.1-4.3 pages with 3D game activities, Bazaar-to-Boardroo","project":"Eat-Better-Internship","date":"2026-11-12T09:48:30Z","change_type":"Architectural Foundation","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":15,"dimensions":{"architectural":6,"feature":0,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Structural framework setup, state store configuration, or routing modernization"},{"sha":"f1848bd","full_sha":"f1848bde66940596ef198d51889af2dad1b21656","title":"Module 4 groundwork: source text, shared brief, Stage3D lazy 3D activity stage, world + ch","project":"Eat-Better-Internship","date":"2026-11-12T09:20:14Z","change_type":"Incremental Iteration","technical_impact":"Standard","testing_evidence":"Not explicitly logged in commit","commit_score":15,"dimensions":{"architectural":0,"feature":0,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"General maintenance and iterative code adjustment"},{"sha":"164bd43","full_sha":"164bd43e504844fd74bea114ba1b6a5b97aedd2f","title":"fix(chapter-3-3): resolve invisible text in unit economics third card by separating orange","project":"Eat-Better-Internship","date":"2026-11-12T05:06:11Z","change_type":"Stability & Remediation","technical_impact":"Medium","testing_evidence":"Not explicitly logged in commit","commit_score":15,"dimensions":{"architectural":0,"feature":0,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":8,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Edge-case resolution or critical runtime stability patch"},{"sha":"c93bb27","full_sha":"c93bb278116085fff244da4f1e91edbadc450a58","title":"feat(module-3): add Chapter 3.4 Distribution Network & Logistics with interactive activiti","project":"Eat-Better-Internship","date":"2026-11-12T04:45:48Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":28,"dimensions":{"architectural":0,"feature":8,"complexity_3d_ai":7,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing"},{"sha":"d6ac409","full_sha":"d6ac409e255edfc2e5bcda46dc2e15355ca3e760","title":"Module 3: Value Chain Valley world, chapters 3.1 and 3.2 with activities, official image l","project":"Eat-Better-Internship","date":"2026-11-12T04:27:49Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":15,"dimensions":{"architectural":0,"feature":0,"complexity_3d_ai":7,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":6,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing"},{"sha":"d5dc2f4","full_sha":"d5dc2f4b5a7b3c609d5211c788fea5f08795788c","title":"feat(module-3): replace repeated images with bespoke photography for chapters 3.1 & 3.2","project":"Eat-Better-Internship","date":"2026-11-06T06:14:34Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":24,"dimensions":{"architectural":0,"feature":6,"complexity_3d_ai":7,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing"},{"sha":"647d5c8","full_sha":"647d5c873314f947dbe3ed932bf05b780241141f","title":"feat(module-3): add chapters 3.1 & 3.2 with interactive 3D simulations and business canvas","project":"Eat-Better-Internship","date":"2026-11-06T05:20:00Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":29.5,"dimensions":{"architectural":0,"feature":8,"complexity_3d_ai":8,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing"},{"sha":"c71cece","full_sha":"c71ceceae295c09dc19026eb302dd4f22e1b4212","title":"Module 2 wrap-up: realistic street people, proper scooter + rider, fireworks over the 2.4 ","project":"Eat-Better-Internship","date":"2026-11-06T04:18:47Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":15,"dimensions":{"architectural":0,"feature":0,"complexity_3d_ai":7,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":6,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing"},{"sha":"c2e7a99","full_sha":"c2e7a99788616e2fa54cd088dc5a7b48c08bfff0","title":"Module 2 fresh catalogue imagery + 1.1 Startup Trends news page","project":"Eat-Better-Internship","date":"2026-11-06T04:00:13Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Detected","commit_score":27,"dimensions":{"architectural":0,"feature":6,"complexity_3d_ai":7,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":6,"documentation":0,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing"},{"sha":"e1f1ecc","full_sha":"e1f1ecc015a6807d1b46c4d17561ed235ab6dd44","title":"Upgrade activity notes, rebuild Trust Journey for phones","project":"Eat-Better-Internship","date":"2026-11-05T05:14:56Z","change_type":"Architectural Foundation","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":24.7,"dimensions":{"architectural":8,"feature":0,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":0,"integration_api":6,"testing_validation":0,"documentation":6,"consistency":5},"reasoning":"Structural framework setup, state store configuration, or routing modernization"},{"sha":"5c8cb3f","full_sha":"5c8cb3f6e839dc5c233e3ab0732ec31f9deb35fe","title":"Chapter 2.4 Shark Tank India, PR & Campaigns + evidence-based activities","project":"Eat-Better-Internship","date":"2026-11-05T04:36:47Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Detected","commit_score":41.8,"dimensions":{"architectural":0,"feature":8,"complexity_3d_ai":7,"refactoring":0,"bugfix_stability":6,"integration_api":6,"testing_validation":6,"documentation":0,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing"},{"sha":"9dc64ba","full_sha":"9dc64bad69cd88a0612d111ab9413b262bc51ce0","title":"Chapter 2.3 Positioning & Target Audience + evidence-based activities","project":"Eat-Better-Internship","date":"2026-11-05T04:25:18Z","change_type":"Incremental Iteration","technical_impact":"Standard","testing_evidence":"Detected","commit_score":15,"dimensions":{"architectural":0,"feature":0,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":6,"documentation":0,"consistency":5},"reasoning":"General maintenance and iterative code adjustment"},{"sha":"1812a76","full_sha":"1812a76bb604ddcecfa4e2b38141135c04e88f4e","title":"2.1 & 2.2: consistent media layout","project":"Eat-Better-Internship","date":"2026-11-05T04:06:24Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":46.8,"dimensions":{"architectural":6,"feature":6,"complexity_3d_ai":7,"refactoring":0,"bugfix_stability":6,"integration_api":6,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing"},{"sha":"1dc5d23","full_sha":"1dc5d23728ece7c45cd3bcae2ebf86749cc3063d","title":"Assets for 2.3 and 2.4: LMS images and Eat Better's Pudina Punch Short (lossless)","project":"Eat-Better-Internship","date":"2026-11-05T03:55:16Z","change_type":"Incremental Iteration","technical_impact":"Standard","testing_evidence":"Not explicitly logged in commit","commit_score":15,"dimensions":{"architectural":0,"feature":0,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"General maintenance and iterative code adjustment"},{"sha":"a3002d4","full_sha":"a3002d4bfb76e56c8ef907f7e59cfd7979531267","title":"2.2: replace learning labs with a real game — Notification Rush","project":"Eat-Better-Internship","date":"2026-11-04T09:50:18Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":28,"dimensions":{"architectural":0,"feature":8,"complexity_3d_ai":7,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing"},{"sha":"f577ce5","full_sha":"f577ce58fa90c746d4c3773ad8754e9cb6c60eda","title":"2.1 data-first page + walkable street","project":"Eat-Better-Internship","date":"2026-11-04T09:42:36Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":24,"dimensions":{"architectural":0,"feature":6,"complexity_3d_ai":7,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing"},{"sha":"d404bd4","full_sha":"d404bd4b833c8cc7baac1cd9b0be45a921a461d8","title":"Custom Eat Better icon set replaces Sparkles; lab goal shown once","project":"Eat-Better-Internship","date":"2026-11-04T09:25:23Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":24,"dimensions":{"architectural":0,"feature":6,"complexity_3d_ai":7,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing"},{"sha":"0710441","full_sha":"07104411c9906113d02c06259cf3d97d9b77e542","title":"ci: enable Firebase webframeworks experiment for Next.js deploys","project":"Eat-Better-Internship","date":"2026-11-04T09:18:17Z","change_type":"Incremental Iteration","technical_impact":"Standard","testing_evidence":"Not explicitly logged in commit","commit_score":15,"dimensions":{"architectural":0,"feature":0,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":0,"integration_api":6,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"General maintenance and iterative code adjustment"},{"sha":"235062e","full_sha":"235062e6cd43aa665ffbe0ffaae921df78a3369e","title":"Brand Boulevard street life: real vehicles and people","project":"Eat-Better-Internship","date":"2026-11-04T09:14:41Z","change_type":"Incremental Iteration","technical_impact":"Standard","testing_evidence":"Not explicitly logged in commit","commit_score":15,"dimensions":{"architectural":0,"feature":0,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"General maintenance and iterative code adjustment"},{"sha":"da84d77","full_sha":"da84d77553b8d850f2b6990155a07f0033793533","title":"2.1 & 2.2: learnable labs (Learn -> Apply -> Check -> Create)","project":"Eat-Better-Internship","date":"2026-11-04T09:10:05Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":46,"dimensions":{"architectural":6,"feature":8,"complexity_3d_ai":7,"refactoring":0,"bugfix_stability":6,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing"},{"sha":"a900e35","full_sha":"a900e35ca252744cc69bf5f6b485c811fcf9225a","title":"feat(lms): add student mistake notebook with remedial drills, teacher cohort batch assignm","project":"Olympiad-Activities","date":"2026-11-04T07:47:28Z","change_type":"Feature Delivery","technical_impact":"Medium-High","testing_evidence":"Not explicitly logged in commit","commit_score":25.9,"dimensions":{"architectural":0,"feature":8,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":6,"integration_api":0,"testing_validation":0,"documentation":6,"consistency":5},"reasoning":"User-facing capability or interactive pedagogical mechanism"},{"sha":"d462800","full_sha":"d4628005355e2837c64bd011e987f41072300747","title":"feat(dashboard): align all official exams to assigned classes, fix dashboard links and add","project":"Olympiad-Activities","date":"2026-11-04T05:35:25Z","change_type":"Feature Delivery","technical_impact":"Medium-High","testing_evidence":"Not explicitly logged in commit","commit_score":27.5,"dimensions":{"architectural":0,"feature":10,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":6,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"User-facing capability or interactive pedagogical mechanism"},{"sha":"f19de0d","full_sha":"f19de0d81d6e56299d49687269c1e983a16a56e2","title":"Rich chapter components kit + showcase (/preview/components)","project":"Eat-Better-Internship","date":"2026-11-04T04:57:45Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":15,"dimensions":{"architectural":0,"feature":0,"complexity_3d_ai":7,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing"},{"sha":"ac7ab8a","full_sha":"ac7ab8a07fe18c1249214a1a01346f0f999c726a","title":"Module 2 world preview page (/preview/module-2)","project":"Eat-Better-Internship","date":"2026-11-04T04:54:32Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":24,"dimensions":{"architectural":0,"feature":6,"complexity_3d_ai":7,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing"},{"sha":"19a0b3d","full_sha":"19a0b3d8b394ae52827e6c867ac58343f5b67452","title":"Module 2: chapters 2.1 Brand Identity and 2.2 Digital Marketing","project":"Eat-Better-Internship","date":"2026-11-04T04:49:09Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":24,"dimensions":{"architectural":0,"feature":6,"complexity_3d_ai":7,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing"},{"sha":"268497d","full_sha":"268497dcca5dfecaec417c05538681d0b539b6f8","title":"Module 2 world 'Brand Boulevard' + LMS images for 2.1 and 2.2","project":"Eat-Better-Internship","date":"2026-11-04T04:16:31Z","change_type":"Incremental Iteration","technical_impact":"Standard","testing_evidence":"Not explicitly logged in commit","commit_score":15,"dimensions":{"architectural":0,"feature":0,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"General maintenance and iterative code adjustment"},{"sha":"b50f864","full_sha":"b50f864824d4b6417dd4f94a9b266dd6c4fc996f","title":"Chapter 2.2 videos: Eat Better Co's own Shorts and Instagram reel (lossless remux)","project":"Eat-Better-Internship","date":"2026-11-04T04:06:54Z","change_type":"Incremental Iteration","technical_impact":"Standard","testing_evidence":"Not explicitly logged in commit","commit_score":15,"dimensions":{"architectural":0,"feature":0,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":0,"integration_api":6,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"General maintenance and iterative code adjustment"},{"sha":"46188b5","full_sha":"46188b5db033b22ef6a0b4711268ca635e1bf345","title":"Chapter 1.6 QA report: picture-first and built from the real run","project":"Eat-Better-Internship","date":"2026-11-04T04:03:04Z","change_type":"Stability & Remediation","technical_impact":"Medium","testing_evidence":"Not explicitly logged in commit","commit_score":15,"dimensions":{"architectural":0,"feature":0,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":10,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Edge-case resolution or critical runtime stability patch"},{"sha":"1a4d17d","full_sha":"1a4d17d31caf575efe996ac58e1d9db536b499a7","title":"fix(ci): fix GitHub Actions workflow syntax for if conditions and secrets","project":"Eat-Better-Internship","date":"2026-11-03T11:23:02Z","change_type":"Stability & Remediation","technical_impact":"Medium","testing_evidence":"Not explicitly logged in commit","commit_score":15,"dimensions":{"architectural":0,"feature":0,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":6,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Edge-case resolution or critical runtime stability patch"},{"sha":"cf6552e","full_sha":"cf6552e42ed293ee03c973fdc702c4c83599a8b7","title":"ci: use FIREBASE_TOKEN env var and explicit project id in GitHub Actions","project":"Eat-Better-Internship","date":"2026-11-03T11:13:28Z","change_type":"Incremental Iteration","technical_impact":"Standard","testing_evidence":"Not explicitly logged in commit","commit_score":15,"dimensions":{"architectural":0,"feature":0,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":0,"integration_api":6,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"General maintenance and iterative code adjustment"},{"sha":"e20921a","full_sha":"e20921a26dd3806856f1a597a1ef73f38045ed20","title":"ci: streamline Firebase Hosting GitHub Actions workflow using FIREBASE_TOKEN","project":"Eat-Better-Internship","date":"2026-11-03T10:55:17Z","change_type":"Code Quality & Refactoring","technical_impact":"Medium-High","testing_evidence":"Not explicitly logged in commit","commit_score":16.9,"dimensions":{"architectural":0,"feature":0,"complexity_3d_ai":0,"refactoring":6,"bugfix_stability":0,"integration_api":8,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Simplification and structural decoupling without behavior regression"},{"sha":"718234a","full_sha":"718234ad5ea9f4bd373dc0900cdf4557737c37ce","title":"ci: add GitHub Actions workflow to auto-deploy to Firebase Hosting on git push","project":"Eat-Better-Internship","date":"2026-11-03T10:46:12Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":28.8,"dimensions":{"architectural":0,"feature":6,"complexity_3d_ai":7,"refactoring":0,"bugfix_stability":0,"integration_api":6,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing"},{"sha":"63f6d95","full_sha":"63f6d9515b5884b3aa0e415061fd675cd43b932a","title":"feat(chapter-1-6): redesign QA Report into interactive QA Command Center and Rubber-Stamp ","project":"Eat-Better-Internship","date":"2026-11-03T10:26:04Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":24,"dimensions":{"architectural":0,"feature":6,"complexity_3d_ai":7,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing"},{"sha":"c4f1335","full_sha":"c4f1335f4be921c7663cc23c5a0eeb7a3e4d5c1c","title":"feat: complete chapters 1.4, 1.5, 1.6 with 3D simulations, fix ChapterNotes layout and lin","project":"Eat-Better-Internship","date":"2026-11-03T09:43:57Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Detected","commit_score":45,"dimensions":{"architectural":6,"feature":6,"complexity_3d_ai":7,"refactoring":0,"bugfix_stability":6,"integration_api":0,"testing_validation":6,"documentation":0,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing"},{"sha":"b5ccca5","full_sha":"b5ccca5a912651b4f03f23207eb85d53254da471","title":"Assets for chapters 1.4-1.6: LMS source images and self-hosted 1.4 video","project":"Eat-Better-Internship","date":"2026-11-03T08:45:47Z","change_type":"Incremental Iteration","technical_impact":"Standard","testing_evidence":"Not explicitly logged in commit","commit_score":15,"dimensions":{"architectural":0,"feature":0,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":0,"integration_api":6,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"General maintenance and iterative code adjustment"},{"sha":"9365727","full_sha":"93657272764ee348fe15b70151c99e14f2c6683f","title":"feat(brand): add transparent background 600x400 covers (<300KB)","project":"Eat-Better-Internship","date":"2026-11-03T08:24:24Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":28,"dimensions":{"architectural":0,"feature":8,"complexity_3d_ai":7,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing"},{"sha":"cf88397","full_sha":"cf88397b77c91683a99eb5d1ab55c86b4b626c24","title":"feat(brand): add Eat Better X Skillizee co-branded 600x400 cover (<300KB)","project":"Eat-Better-Internship","date":"2026-11-03T08:14:43Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":28,"dimensions":{"architectural":0,"feature":8,"complexity_3d_ai":7,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing"},{"sha":"30fb56f","full_sha":"30fb56fb324cbac6a4540756e1dd10485d3d5109","title":"feat(brand): add 600x400 logo cover images (<300KB) for LMS and internship hosting","project":"Eat-Better-Internship","date":"2026-11-03T08:03:26Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":28,"dimensions":{"architectural":0,"feature":8,"complexity_3d_ai":7,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing"},{"sha":"e941b48","full_sha":"e941b48a7eeec57d00e3a2bd76bdda200b0cad2e","title":"Load static images directly from CDN and stream videos from GitHub repository","project":"Eat-Better-Internship","date":"2026-11-03T07:52:17Z","change_type":"Incremental Iteration","technical_impact":"Standard","testing_evidence":"Not explicitly logged in commit","commit_score":15,"dimensions":{"architectural":0,"feature":0,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":0,"integration_api":8,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"General maintenance and iterative code adjustment"},{"sha":"c57de40","full_sha":"c57de4054bb9e8ed126607227d1a5b1793042d7b","title":"Configure Firebase Hosting multi-site deployment alongside Vercel","project":"Eat-Better-Internship","date":"2026-11-03T07:27:42Z","change_type":"Architectural Foundation","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":18.3,"dimensions":{"architectural":6,"feature":0,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":0,"integration_api":6,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Structural framework setup, state store configuration, or routing modernization"},{"sha":"7faee24","full_sha":"7faee24c8db8c5f2a08f426660118b1be24a55f5","title":"Add chapter notes writing, download, and unsaved route protection","project":"Eat-Better-Internship","date":"2026-11-03T07:01:57Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":26.4,"dimensions":{"architectural":0,"feature":6,"complexity_3d_ai":7,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":6,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing"},{"sha":"092c043","full_sha":"092c043e7c8a914af7b4dd945483952663aa12f2","title":"Chapter 1.3: Stall Day game as its own activity section","project":"Eat-Better-Internship","date":"2026-11-03T05:22:46Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":30,"dimensions":{"architectural":0,"feature":6,"complexity_3d_ai":7,"refactoring":0,"bugfix_stability":6,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing"},{"sha":"7d1be8e","full_sha":"7d1be8ea85c78603e8bb9910349932d4d8441911","title":"fix(level-2): use plain next.config so Vercel resolves build output","project":"IdeathonPPTGuideline2026","date":"2026-11-03T04:48:29Z","change_type":"Architectural Foundation","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":33.5,"dimensions":{"architectural":6,"feature":6,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":8,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Structural framework setup, state store configuration, or routing modernization"},{"sha":"20e697c","full_sha":"20e697c08d4e1f49fe423f8e094bb2613c603fb9","title":"fix(level-2): resolve project root from config file dir for Vercel","project":"IdeathonPPTGuideline2026","date":"2026-11-03T04:46:10Z","change_type":"Architectural Foundation","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":21.5,"dimensions":{"architectural":6,"feature":0,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":8,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Structural framework setup, state store configuration, or routing modernization"},{"sha":"0bbccf9","full_sha":"0bbccf9f3fcf8608a4f99a64b84315f5315378a9","title":"feat(level-2): add generated images, replace missing ones with content","project":"IdeathonPPTGuideline2026","date":"2026-11-03T04:42:31Z","change_type":"Feature Delivery","technical_impact":"Medium-High","testing_evidence":"Not explicitly logged in commit","commit_score":17.5,"dimensions":{"architectural":0,"feature":8,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"User-facing capability or interactive pedagogical mechanism"},{"sha":"3e5cfda","full_sha":"3e5cfda5bd04ee17371d9e33de1c4ef2526bbed4","title":"Photorealistic chapter images + Vercel hardening","project":"Eat-Better-Internship","date":"2026-11-03T04:37:24Z","change_type":"Architectural Foundation","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":17.5,"dimensions":{"architectural":8,"feature":0,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Structural framework setup, state store configuration, or routing modernization"},{"sha":"e5fb3ff","full_sha":"e5fb3ff3a67b89ce63a68141950f03810c5ac7f6","title":"feat: add Ideathon Level 2 deck in level-2/ folder","project":"IdeathonPPTGuideline2026","date":"2026-11-03T04:33:38Z","change_type":"Feature Delivery","technical_impact":"Medium-High","testing_evidence":"Not explicitly logged in commit","commit_score":26.3,"dimensions":{"architectural":0,"feature":10,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":0,"integration_api":6,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"User-facing capability or interactive pedagogical mechanism"},{"sha":"116b949","full_sha":"116b9491cb1cb61d27dc738725333d1864c61e1c","title":"Chapter 1.3: Origin Story & Founders","project":"Eat-Better-Internship","date":"2026-11-02T11:24:39Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":24,"dimensions":{"architectural":0,"feature":6,"complexity_3d_ai":7,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing"},{"sha":"e1cc808","full_sha":"e1cc808553c84f3fe16fbcdcd54032e4a9866c88","title":"Chapter 1.2: Vision, Mission & Values","project":"Eat-Better-Internship","date":"2026-11-02T11:11:34Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":49.8,"dimensions":{"architectural":6,"feature":6,"complexity_3d_ai":7,"refactoring":6,"bugfix_stability":0,"integration_api":6,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing"},{"sha":"c3393d7","full_sha":"c3393d7e0ef263cc123f5067b586d3eb9dbea8e5","title":"Chapter 1.1: one-screen Stock-the-shelves with large named products and drag-and-drop","project":"Eat-Better-Internship","date":"2026-11-02T11:01:32Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":24,"dimensions":{"architectural":0,"feature":6,"complexity_3d_ai":7,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing"},{"sha":"b1594cd","full_sha":"b1594cd0d9f57d1cf99346c834984054cb8685b9","title":"Chapter 1.1: picture-led sections, live 3D route diorama, mobile + Vercel readiness","project":"Eat-Better-Internship","date":"2026-11-02T10:53:33Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":31,"dimensions":{"architectural":0,"feature":0,"complexity_3d_ai":7,"refactoring":6,"bugfix_stability":6,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing; Bonus awarded for proactive stabilization and cleanup"},{"sha":"b1eddb6","full_sha":"b1eddb6f782e73d3ddf642765bf82ca623b541d0","title":"Chapter 1.1: hover names on 3D snacks, kid-friendly word tooltips, no jumps, wider panels","project":"Eat-Better-Internship","date":"2026-11-02T10:26:16Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":36,"dimensions":{"architectural":6,"feature":6,"complexity_3d_ai":7,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing"},{"sha":"a3aef2f","full_sha":"a3aef2f539d551a57b69861e25a0b9ed4f72f7b8","title":"World: turn the kitchen table into a dining hall (revertable)","project":"Eat-Better-Internship","date":"2026-11-02T10:16:29Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":45,"dimensions":{"architectural":6,"feature":6,"complexity_3d_ai":7,"refactoring":6,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing"},{"sha":"143e0d1","full_sha":"143e0d1aa718955290e49e65615624cf479d0e81","title":"Chapter 1.1 redesign: chapter opener, page-wide 3D kitchen world, circular laddoo companio","project":"Eat-Better-Internship","date":"2026-11-02T10:10:13Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":46,"dimensions":{"architectural":6,"feature":8,"complexity_3d_ai":7,"refactoring":0,"bugfix_stability":6,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing"},{"sha":"171c8de","full_sha":"171c8dea5fa14cd3fec682aee80f277ded56dde4","title":"fix(ui): remove duplicate purple mark for review button and make completion modal action b","project":"Olympiad-Activities","date":"2026-11-02T09:26:34Z","change_type":"Stability & Remediation","technical_impact":"Medium","testing_evidence":"Not explicitly logged in commit","commit_score":15,"dimensions":{"architectural":0,"feature":0,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":6,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Edge-case resolution or critical runtime stability patch"},{"sha":"c42fffb","full_sha":"c42fffb485a39887a7632596651105c41efbb4f4","title":"feat(igko): implement interactive activities + dual MCQ answering & auto-sync","project":"Olympiad-Activities","date":"2026-11-02T08:44:08Z","change_type":"Feature Delivery","technical_impact":"Medium-High","testing_evidence":"Not explicitly logged in commit","commit_score":22.3,"dimensions":{"architectural":0,"feature":8,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":0,"integration_api":6,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"User-facing capability or interactive pedagogical mechanism"},{"sha":"ab50fc0","full_sha":"ab50fc0fc350c468ce02d7546e4a33f106ae51e4","title":"Chapter progress: laddoo-eating companion on a header track","project":"Eat-Better-Internship","date":"2026-11-02T06:35:59Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":24,"dimensions":{"architectural":0,"feature":6,"complexity_3d_ai":7,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing"},{"sha":"2b72425","full_sha":"2b724254fd829a2f20562de5478b3b0859d1acb8","title":"Eat Better Co internship: Chapter 1.1 and packaging studio","project":"Eat-Better-Internship","date":"2026-11-02T06:18:38Z","change_type":"Incremental Iteration","technical_impact":"Standard","testing_evidence":"Not explicitly logged in commit","commit_score":15,"dimensions":{"architectural":0,"feature":0,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":0,"integration_api":8,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"General maintenance and iterative code adjustment"},{"sha":"5b79297","full_sha":"5b792972dd1863b36066102366d9d3ea3776fe22","title":"Merge pull request #2 from CHIRAG-GOUR/lpg-dock-branch","project":"Ideathon-Projects","date":"2026-10-10T11:35:33Z","change_type":"Merge Coordination","technical_impact":"Low","testing_evidence":"Not explicitly logged in commit","commit_score":15,"dimensions":{"architectural":6,"feature":6,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":6,"consistency":5},"reasoning":"Adjusted for merge commit baseline"},{"sha":"678a4a5","full_sha":"678a4a547a0975125aad088b1e5595aafa0f439d","title":"feat(pennypup): fullscreen website layout, chirag-ui 2-3 light color system, remove premiu","project":"Ideathon-Projects","date":"2026-10-10T11:10:44Z","change_type":"Architectural Foundation","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":25.5,"dimensions":{"architectural":6,"feature":6,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Structural framework setup, state store configuration, or routing modernization"},{"sha":"4c3be01","full_sha":"4c3be01d1852b33d49bb2a149ce9870fa62527b3","title":"feat(pennypup): create Junior Ideathon - Penny Up savings website with chirag-ui-maker pal","project":"Ideathon-Projects","date":"2026-10-10T10:44:05Z","change_type":"Feature Delivery","technical_impact":"Medium-High","testing_evidence":"Not explicitly logged in commit","commit_score":22.3,"dimensions":{"architectural":0,"feature":8,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":0,"integration_api":6,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"User-facing capability or interactive pedagogical mechanism"},{"sha":"a37a357","full_sha":"a37a3571c404bfa22a576c15e226e754b279a237","title":"fix(wearwise): properly proportion 3D glasses with full 143mm adult frame, sculpted browli","project":"Ideathon-Projects","date":"2026-10-10T09:34:07Z","change_type":"Stability & Remediation","technical_impact":"Medium","testing_evidence":"Not explicitly logged in commit","commit_score":15,"dimensions":{"architectural":0,"feature":0,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":6,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Edge-case resolution or critical runtime stability patch"},{"sha":"e2a94c3","full_sha":"e2a94c3a3a4940cbcb83bf2bdba6084e423e6230","title":"feat(wearwise): design luxury 3D eyewear frames with contoured beveled rims, semi-transpar","project":"Ideathon-Projects","date":"2026-10-10T09:23:11Z","change_type":"Feature Delivery","technical_impact":"Medium-High","testing_evidence":"Not explicitly logged in commit","commit_score":15,"dimensions":{"architectural":0,"feature":6,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"User-facing capability or interactive pedagogical mechanism"},{"sha":"37f92be","full_sha":"37f92be15aafd2aa4e5cf079a97f10c8bbdc18ce","title":"feat(wearwise): add WearWise 3D cloth recommendation studio and Firebase hosting setup","project":"Ideathon-Projects","date":"2026-10-10T09:11:16Z","change_type":"Architectural Foundation","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":34.3,"dimensions":{"architectural":6,"feature":8,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":0,"integration_api":6,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Structural framework setup, state store configuration, or routing modernization"},{"sha":"bbbe92d","full_sha":"bbbe92df91e8dc706572c8b519c23c473b586282","title":"feat: implement options display, 4-hint limit with mark deductions, and hint engine across","project":"Olympiad-Activities","date":"2026-10-10T07:05:53Z","change_type":"Feature Delivery","technical_impact":"Medium-High","testing_evidence":"Not explicitly logged in commit","commit_score":17.5,"dimensions":{"architectural":0,"feature":8,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"User-facing capability or interactive pedagogical mechanism"},{"sha":"0434ddf","full_sha":"0434ddf70bbb9e88e7425e491734b53c3bde81cc","title":"feat(visionary-x): replace sparkle icons with theme-matching AfterExpiryIcon grocery eco m","project":"Ideathon-Projects","date":"2026-10-09T10:05:40Z","change_type":"Feature Delivery","technical_impact":"Medium-High","testing_evidence":"Not explicitly logged in commit","commit_score":15,"dimensions":{"architectural":0,"feature":6,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"User-facing capability or interactive pedagogical mechanism"},{"sha":"cf6e3fa","full_sha":"cf6e3fa0a436500ae9b5010c325971699db6daed","title":"fix(visionary-x): update Firebase Hosting deploy target to visionary-x-ideathon","project":"Ideathon-Projects","date":"2026-10-09T10:01:34Z","change_type":"Stability & Remediation","technical_impact":"Medium","testing_evidence":"Not explicitly logged in commit","commit_score":15,"dimensions":{"architectural":0,"feature":0,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":6,"integration_api":6,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Edge-case resolution or critical runtime stability patch"},{"sha":"5f2f43e","full_sha":"5f2f43e70220f5dd209a94341d7994c1abace240","title":"feat(visionary-x): add After-Expiry Reuse Guide page with interactive animations, demo sto","project":"Ideathon-Projects","date":"2026-10-09T09:28:43Z","change_type":"Feature Delivery","technical_impact":"Medium-High","testing_evidence":"Not explicitly logged in commit","commit_score":19.9,"dimensions":{"architectural":0,"feature":8,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":6,"consistency":5},"reasoning":"User-facing capability or interactive pedagogical mechanism"},{"sha":"7e5dcbd","full_sha":"7e5dcbd76d051d63f9e87e9fdd7a74398a92f860","title":"feat(igko): all 15 IGKO Science & Technology activities, answer-by-action, studio-quality ","project":"Olympiad-Activities","date":"2026-10-09T04:23:16Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Detected","commit_score":69.6,"dimensions":{"architectural":6,"feature":10,"complexity_3d_ai":6,"refactoring":6,"bugfix_stability":6,"integration_api":0,"testing_validation":6,"documentation":0,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing; Bonus awarded for proactive stabilization and cleanup"},{"sha":"367946e","full_sha":"367946e5e8bd9650a6efd0f1f7d9175c5e92d20e","title":"fix(igko): use the source paper's exact wording and spellings for Q2–Q5","project":"Olympiad-Activities","date":"2026-10-08T10:40:50Z","change_type":"Stability & Remediation","technical_impact":"Medium","testing_evidence":"Detected","commit_score":15,"dimensions":{"architectural":0,"feature":0,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":8,"integration_api":0,"testing_validation":6,"documentation":6,"consistency":5},"reasoning":"Edge-case resolution or critical runtime stability patch"},{"sha":"7fea0db","full_sha":"7fea0db6c7ea60064905bbcdfceb3eba60d413cb","title":"feat(igko): IGKO Class 6 Science & Technology interactive paper — batch 1 (Q1–Q5)","project":"Olympiad-Activities","date":"2026-10-08T10:37:09Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Detected","commit_score":54.5,"dimensions":{"architectural":6,"feature":10,"complexity_3d_ai":8,"refactoring":0,"bugfix_stability":6,"integration_api":0,"testing_validation":6,"documentation":0,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing"},{"sha":"e69c527","full_sha":"e69c52740d31718ad5e7c6b04e2bd2bc81e341c5","title":"fix(security): close self-service super-admin route via tech@skillizee.io","project":"Olympiad-Activities","date":"2026-10-08T10:15:21Z","change_type":"Feature Delivery","technical_impact":"Medium-High","testing_evidence":"Detected","commit_score":28.5,"dimensions":{"architectural":0,"feature":8,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":8,"integration_api":0,"testing_validation":6,"documentation":0,"consistency":5},"reasoning":"User-facing capability or interactive pedagogical mechanism"},{"sha":"6eb941a","full_sha":"6eb941a055ab1f4a23bda36950f3c89fe966dea9","title":"feat: bulk student upload, results analysis + Excel, checked answer sheet, shuffling, focu","project":"Olympiad-Activities","date":"2026-10-08T09:11:47Z","change_type":"Feature Delivery","technical_impact":"Medium-High","testing_evidence":"Detected","commit_score":35.3,"dimensions":{"architectural":0,"feature":10,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":6,"integration_api":6,"testing_validation":6,"documentation":0,"consistency":5},"reasoning":"User-facing capability or interactive pedagogical mechanism"},{"sha":"b6630e3","full_sha":"b6630e32ecf15ca0dfe50debbcb8fd1a471e0437","title":"fix: student exam list, class-scoped exam assignment, attempt limits, themed faculty invit","project":"Olympiad-Activities","date":"2026-10-08T06:26:37Z","change_type":"Feature Delivery","technical_impact":"Medium-High","testing_evidence":"Not explicitly logged in commit","commit_score":23.5,"dimensions":{"architectural":0,"feature":8,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":6,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"User-facing capability or interactive pedagogical mechanism"},{"sha":"b25f04a","full_sha":"b25f04a9c59a1ee36cce1172939dfc142dc4434e","title":"feat(email): 1-click email dispatch using Firebase, removed manual intermediate modal","project":"Olympiad-Activities","date":"2026-10-08T05:46:57Z","change_type":"Feature Delivery","technical_impact":"Medium-High","testing_evidence":"Not explicitly logged in commit","commit_score":18.3,"dimensions":{"architectural":0,"feature":6,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":0,"integration_api":6,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"User-facing capability or interactive pedagogical mechanism"},{"sha":"7cdd3d2","full_sha":"7cdd3d2f63acf4f5253e3bc13005961540199f7c","title":"feat(alignment): script and records to align primary dice mathematics exam to demo student","project":"Olympiad-Activities","date":"2026-10-08T05:38:31Z","change_type":"Feature Delivery","technical_impact":"Medium-High","testing_evidence":"Not explicitly logged in commit","commit_score":15,"dimensions":{"architectural":0,"feature":6,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"User-facing capability or interactive pedagogical mechanism"},{"sha":"4395d39","full_sha":"4395d39936e931f014a0af63c7a83be53159c766","title":"feat(email): use Olympiad Dashboard branding and hosted logo, remove school references","project":"Olympiad-Activities","date":"2026-10-08T05:29:53Z","change_type":"Feature Delivery","technical_impact":"Medium-High","testing_evidence":"Not explicitly logged in commit","commit_score":17.5,"dimensions":{"architectural":0,"feature":8,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"User-facing capability or interactive pedagogical mechanism"},{"sha":"75accca","full_sha":"75accca4139be7eab0836404b29a2caa169be538","title":"feat: question paper table view with class/subject filters, student paper alignment, and s","project":"Olympiad-Activities","date":"2026-10-08T05:09:43Z","change_type":"Feature Delivery","technical_impact":"Medium-High","testing_evidence":"Not explicitly logged in commit","commit_score":17.5,"dimensions":{"architectural":0,"feature":8,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"User-facing capability or interactive pedagogical mechanism"},{"sha":"5434ff7","full_sha":"5434ff77f92a53359c0dc6af88c0a1af8b1e0cff","title":"feat: align dice math exam for demo students, enable unlimited retakes, real-time firebase","project":"Olympiad-Activities","date":"2026-10-08T04:23:49Z","change_type":"Feature Delivery","technical_impact":"Medium-High","testing_evidence":"Not explicitly logged in commit","commit_score":19.9,"dimensions":{"architectural":0,"feature":6,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":0,"integration_api":8,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"User-facing capability or interactive pedagogical mechanism"},{"sha":"65cf028","full_sha":"65cf028a690c381c314fafda24fe032beca503e5","title":"feat(lifeline-hub): upgrade to LifeLine Hub v3 with enhanced character meshes, vehicle det","project":"Ideathon-Projects","date":"2026-10-07T09:46:53Z","change_type":"3D Simulation & Creative Logic","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":27.3,"dimensions":{"architectural":0,"feature":6,"complexity_3d_ai":6,"refactoring":0,"bugfix_stability":0,"integration_api":6,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Involves spatial rendering, shaders, or advanced interactive computing"},{"sha":"f03fb6d","full_sha":"f03fb6d3efed3be9c61da423ed74c1285f4167a1","title":"docs(lifeline-hub): update DEPLOYMENT_INFO.md for version 2","project":"Ideathon-Projects","date":"2026-10-07T09:21:12Z","change_type":"Technical Documentation","technical_impact":"Medium","testing_evidence":"Not explicitly logged in commit","commit_score":15,"dimensions":{"architectural":0,"feature":0,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":6,"consistency":5},"reasoning":"Pedagogical clarity, installation guidelines, and system specs"},{"sha":"24aa7d2","full_sha":"24aa7d280b4229b76fca797d11fd9dc713276f57","title":"feat(lifeline-hub): add LifeLine Hub v2 emergency platform with 3D film, web app, and andr","project":"Ideathon-Projects","date":"2026-10-07T09:20:43Z","change_type":"Feature Delivery","technical_impact":"Medium-High","testing_evidence":"Not explicitly logged in commit","commit_score":21.5,"dimensions":{"architectural":0,"feature":10,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"User-facing capability or interactive pedagogical mechanism"},{"sha":"68936f8","full_sha":"68936f86c9d4d05355070de6b1861ccf99579adc","title":"Configure GitHub Pages workflow, root mirrors, and nojekyll","project":"Minty-Finance","date":"2026-10-06T07:45:22Z","change_type":"Architectural Foundation","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":15,"dimensions":{"architectural":6,"feature":0,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":0,"consistency":5},"reasoning":"Structural framework setup, state store configuration, or routing modernization"},{"sha":"1f8e37d","full_sha":"1f8e37d206dedc86d97aca3461861e2897d9e69f","title":"Add legal docs, deletion portal, store assets and compliance updates","project":"Minty-Finance","date":"2026-10-06T07:33:53Z","change_type":"Architectural Foundation","technical_impact":"High","testing_evidence":"Not explicitly logged in commit","commit_score":31.9,"dimensions":{"architectural":6,"feature":8,"complexity_3d_ai":0,"refactoring":0,"bugfix_stability":0,"integration_api":0,"testing_validation":0,"documentation":6,"consistency":5},"reasoning":"Structural framework setup, state store configuration, or routing modernization"}]`),LM=()=>{const[a,e]=qn.useState("feat(three): implement custom procedural GLSL noise shader for planetary terrain"),[n,r]=qn.useState("POA-Skippi"),c=((f,d)=>{const p=f.toLowerCase(),m=p.startsWith("merge"),_=p.includes("bump")||p.includes("dependabot"),v=f.trim().split(" ").length<=1&&f.length<8;let x=0,S=0,T=0,w=0,y=0;/(arch|structure|setup|turbopack|vite|provider|router|zustand|store)/.test(p)&&(x=8),/(feat|add|implement|create|build|integrate|screen|view)/.test(p)&&(S=8.5),/(three|r3f|shader|glsl|pbr|theatre|groq|face-api|physics|motion|bvh|particle)/.test(p)&&(T=9.5),/(refactor|clean|simplify|decouple|optimize|perf)/.test(p)&&(w=8),/(fix|patch|resolve|repair|guard|fallback)/.test(p)&&(y=7.5),["skippi","mangalyan","solar","physics"].some(Y=>d.toLowerCase().includes(Y))&&(T=Math.max(T,7.5));const g=(x*.2+S*.2+T*.15+w*.15+y*.1+.5)*10;let D=1,L="Evaluated on structural impact, creative computing components, and domain depth.";m?(D=.25,L="Adjusted for branch coordination merge commit baseline."):_?(D=.2,L="Automated dependency upgrade adjustment."):v?(D=.3,L="Minimal message payload signals low documented verification."):T>=8&&(L="High rating: contains intensive spatial rendering, shader calculations, or ML inference logic.");const C=Math.min(99.5,Math.max(15,g*D));return{score:C.toFixed(1),impact:C>85?"High":C>65?"Medium-High":"Standard",rationale:L}})(a,n);return N.jsx("section",{id:"commit-intelligence",className:"py-16",children:N.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[N.jsxs("div",{className:"mb-10",children:[N.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2",children:[N.jsx(n_,{className:"w-4 h-4"}),N.jsx("span",{children:"Analytical Engine // Explainable Metrics"})]}),N.jsx("h2",{className:"text-3xl font-bold tracking-tight text-white flex items-center gap-3",children:"Commit Intelligence & Scoring System"}),N.jsx("p",{className:"mt-2 text-slate-400 text-sm max-w-3xl",children:"A transparent 9-dimension scoring methodology that evaluates engineering significance, architectural impact, and refactoring clarity—rejecting lines-of-code vanity metrics and gaming."})]}),N.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8",children:[N.jsxs("div",{className:"lg:col-span-7 space-y-4",children:[N.jsxs("h3",{className:"text-sm font-mono uppercase tracking-wider text-slate-400 flex items-center justify-between",children:[N.jsx("span",{children:"Verified Commit Feed (Latest Evaluated)"}),N.jsxs("span",{className:"text-cyan-400 text-xs",children:[Em.length," Sampled Commits"]})]}),N.jsx("div",{className:"space-y-3",children:Em.slice(0,6).map((f,d)=>N.jsxs("div",{className:"glass-panel p-4 rounded-xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-200",children:[N.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[N.jsxs("div",{className:"flex items-center gap-2",children:[N.jsxs("span",{className:"font-mono text-xs text-cyan-400 font-bold bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/40",children:["TIS: ",f.commit_score]}),N.jsx("span",{className:"text-xs font-mono text-slate-400",children:f.project}),N.jsxs("span",{className:"text-xs text-slate-600 font-mono",children:["[",f.sha,"]"]})]}),N.jsx("span",{className:"text-xs font-mono text-slate-500",children:f.date?f.date.slice(0,10):"Recent"})]}),N.jsx("p",{className:"text-sm font-medium text-slate-200 mb-2",children:f.title}),N.jsxs("div",{className:"text-xs text-slate-400 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/60 flex items-start gap-2",children:[N.jsx(Nd,{className:"w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5"}),N.jsxs("div",{children:[N.jsx("strong",{className:"text-slate-300 font-mono",children:"Rationale:"})," ",f.reasoning]})]})]},d))})]}),N.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[N.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-cyan-500/30 shadow-lg shadow-cyan-950/30",children:[N.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3",children:[N.jsx(wm,{className:"w-4 h-4"}),N.jsx("span",{children:"Live TIS Impact Simulator"})]}),N.jsx("p",{className:"text-xs text-slate-400 mb-4",children:"Test any commit message against Chirag's explainable 9-dimension scoring engine to see calculated TIS and rationale in real time."}),N.jsxs("div",{className:"space-y-3 mb-5",children:[N.jsxs("div",{children:[N.jsx("label",{className:"block text-xs font-mono text-slate-400 mb-1",children:"Target Repository Context"}),N.jsxs("select",{value:n,onChange:f=>r(f.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs font-mono text-slate-200 focus:outline-none focus:border-cyan-400",children:[N.jsx("option",{value:"POA-Skippi",children:"POA-Skippi (3D Shark Tank)"}),N.jsx("option",{value:"Eat-Better-Internship",children:"Eat-Better-Internship (Next.js Turbopack)"}),N.jsx("option",{value:"ZeePrep-MobileApp",children:"ZeePrep-MobileApp (React Native Expo)"}),N.jsx("option",{value:"Olympiad-Activities",children:"Olympiad-Activities (Digital Exam)"}),N.jsx("option",{value:"Mangalyan-India",children:"Mangalyan-India (Aerospace Sim)"})]})]}),N.jsxs("div",{children:[N.jsx("label",{className:"block text-xs font-mono text-slate-400 mb-1",children:"Commit Message"}),N.jsx("textarea",{rows:3,value:a,onChange:f=>e(f.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs font-mono text-slate-200 focus:outline-none focus:border-cyan-400"})]})]}),N.jsxs("div",{className:"bg-obsidian-900/90 border border-cyan-500/40 rounded-xl p-4",children:[N.jsxs("div",{className:"flex items-center justify-between mb-2",children:[N.jsx("span",{className:"text-xs font-mono text-slate-400 uppercase",children:"Simulated TIS Score"}),N.jsxs("span",{className:"text-2xl font-bold font-mono text-cyan-400",children:[c.score," ",N.jsx("span",{className:"text-xs font-normal text-slate-500",children:"/ 100"})]})]}),N.jsx("div",{className:"flex items-center gap-2 mb-2",children:N.jsxs("span",{className:"text-xs px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 font-mono text-[10px] uppercase border border-cyan-800",children:["Impact: ",c.impact]})}),N.jsx("p",{className:"text-xs text-slate-300 font-mono leading-relaxed bg-slate-950/60 p-2 rounded border border-slate-800",children:c.rationale})]})]}),N.jsxs("div",{className:"glass-panel p-5 rounded-xl border border-slate-800",children:[N.jsxs("h4",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2",children:[N.jsx(d_,{className:"w-4 h-4 text-amber-400"}),N.jsx("span",{children:"Anti-Gaming & Anti-Vanity Safeguards"})]}),N.jsxs("ul",{className:"text-xs text-slate-400 space-y-2 list-disc list-inside",children:[N.jsxs("li",{children:[N.jsx("strong",{className:"text-slate-300",children:"No Raw LOC Bias:"})," Large copy-pasted diffs are attenuated via logarithmic scaling."]}),N.jsxs("li",{children:[N.jsx("strong",{className:"text-slate-300",children:"Clean Refactor Bonus:"})," Net deletions with maintained behavior receive a 1.15× quality multiplier."]}),N.jsxs("li",{children:[N.jsx("strong",{className:"text-slate-300",children:"Bot Mitigation:"})," Automated package version bumps and trivial merges are automatically filtered."]})]})]})]})]})]})})},IM=()=>{const a=[{period:"March 2026",title:"Kinematic Foundations & Physics Motion",tech:"React, Three.js, Canvas",desc:"Engineered interactive physics coursework (`physics-motion` & `physicsmotion2`) utilizing 3D coordinate spaces and kinematic simulation.",icon:l_,badge:"Foundation"},{period:"April – May 2026",title:"Procedural GLSL Shaders & Spatial Audio",tech:"Three.js, Custom Shaders, GSAP, Leva",desc:"Built Solaris 3D (`SolarSystem3js`) and Milkyway galaxy simulations featuring procedural GLSL noise shaders, post-processing bloom, and synchronized spatial audio loops.",icon:Nd,badge:"Shader Engineering"},{period:"July 2026",title:"Edge Computer Vision & Mood Detection",tech:"@vladmandic/face-api, React, Vite, Oxlint",desc:"Implemented browser-based neural network facial landmark detection and emotional state estimation (`Mood-Mirror-2026`) operating with zero server roundtrips.",icon:s_,badge:"Edge AI"},{period:"August 2026",title:"Celestial Launch — Mangalyaan ISRO Mission",tech:"React, Three.js, Radix UI, PBR Materials",desc:"Constructed nocturnal aerospace launch simulator featuring PBR lighting, atmospheric particle smoke, and real-time telemetry towers celebrating Indian space exploration.",icon:c_,badge:"Spatial Sim"},{period:"September 2026",title:"Peak Velocity Month — ZeePrep & POA Sprints",tech:"React Native, Expo Router, Firebase, TanStack Query",desc:"Delivered 276 commits in 30 days. Architected ZeePrep mobile client with audio/video assessments, and built collaborative digital classroom platforms like StorySprint.",icon:e_,badge:"276 Commits Peak"},{period:"November 2026 (Active)",title:"POA Skippi Island & Eat Better Production",tech:"Next.js Turbopack, R3F, Zustand, jsPDF, Firebase",desc:"Launched Skippi Island 3D Shark Tank case study simulation live on Firebase (`poa-skippi.web.app`) and actively building the Eat Better Next.js spatial internship portal.",icon:Mp,badge:"Active Production"}];return N.jsx("section",{id:"timeline",className:"py-16 bg-obsidian-900/60",children:N.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[N.jsxs("div",{className:"mb-12",children:[N.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2",children:[N.jsx(Mp,{className:"w-4 h-4"}),N.jsx("span",{children:"Evolutionary Journey // Chronological Milestones"})]}),N.jsx("h2",{className:"text-3xl font-bold tracking-tight text-white",children:"Engineering Trajectory (2026)"}),N.jsx("p",{className:"mt-2 text-slate-400 text-sm max-w-2xl",children:"A chronological timeline of actual engineering milestones, new framework adoptions, and project breakthroughs."})]}),N.jsx("div",{className:"relative border-l border-slate-800 ml-4 md:ml-6 space-y-10 pl-6 md:pl-8",children:a.map((e,n)=>{const r=e.icon,o=n===a.length-1;return N.jsxs("div",{className:"relative group",children:[N.jsx("div",{className:`absolute -left-[31px] md:-left-[39px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all ${o?"bg-cyan-500 border-cyan-300 text-obsidian-950 shadow-md shadow-cyan-500/50":"bg-obsidian-900 border-slate-700 text-slate-400 group-hover:border-cyan-400 group-hover:text-cyan-300"}`,children:N.jsx(r,{className:"w-3 h-3"})}),N.jsxs("div",{className:"glass-panel p-5 rounded-2xl border border-slate-800 group-hover:border-slate-700 transition-all",children:[N.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 mb-2",children:[N.jsx("span",{className:"text-xs font-mono text-cyan-400 font-semibold",children:e.period}),N.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700",children:e.badge})]}),N.jsx("h3",{className:"text-base font-bold text-white mb-1",children:e.title}),N.jsxs("p",{className:"text-xs font-mono text-slate-500 mb-2",children:["Stack: ",e.tech]}),N.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:e.desc})]})]},n)})})]})})},NM=()=>N.jsxs("div",{className:"min-h-screen bg-obsidian-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200 relative",children:[N.jsx(h_,{}),N.jsxs("section",{className:"relative min-h-[85vh] flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-900",children:[N.jsx(yM,{}),N.jsxs("div",{className:"relative z-10 max-w-5xl mx-auto text-center space-y-6",children:[N.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/40 text-xs font-mono text-cyan-300 shadow-md shadow-cyan-950",children:[N.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),N.jsx("span",{children:"AUTONOMOUS ECOSYSTEM // CONTINUOUSLY SYNCHRONIZED"})]}),N.jsxs("h1",{className:"text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white",children:[N.jsx("span",{className:"block",children:"CHIRAG GOUR"}),N.jsx("span",{className:"block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-300 to-emerald-400 text-3xl sm:text-4xl lg:text-5xl font-mono",children:"Creative Computing & Pedagogical Systems"})]}),N.jsx("p",{className:"max-w-3xl mx-auto text-slate-300 text-base sm:text-lg font-normal leading-relaxed",children:"Architecting spatial 3D web environments, interactive educational simulations (POA Series), and reactive full-stack web & mobile platforms."}),N.jsxs("div",{className:"pt-2 flex flex-wrap justify-center gap-3 text-xs font-mono",children:[N.jsx("span",{className:"px-3 py-1 rounded-lg bg-cyan-950/60 border border-cyan-800/40 text-cyan-300",children:"Three.js & GLSL Shaders"}),N.jsx("span",{className:"px-3 py-1 rounded-lg bg-purple-950/60 border border-purple-800/40 text-purple-300",children:"Shark Tank 3D Simulations"}),N.jsx("span",{className:"px-3 py-1 rounded-lg bg-emerald-950/60 border border-emerald-800/40 text-emerald-300",children:"Next.js Turbopack & Vite"}),N.jsx("span",{className:"px-3 py-1 rounded-lg bg-amber-950/60 border border-amber-800/40 text-amber-300",children:"Expo Native Mobile"})]}),N.jsxs("div",{className:"pt-6 flex flex-wrap items-center justify-center gap-4",children:[N.jsxs("a",{href:"#projects",className:"px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-obsidian-950 font-bold text-xs font-mono uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-cyan-500/25 transition-all",children:[N.jsx("span",{children:"Explore 57 Projects"}),N.jsx(Q0,{className:"w-4 h-4"})]}),N.jsxs("a",{href:"#commit-intelligence",className:"px-6 py-3 rounded-xl glass-panel border border-slate-700 hover:border-cyan-400/50 text-slate-200 hover:text-white font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-all",children:[N.jsx(wm,{className:"w-4 h-4 text-cyan-400"}),N.jsx("span",{children:"Commit Intelligence Feed"})]})]})]})]}),N.jsxs("main",{className:"flex-1",children:[N.jsx(AM,{}),N.jsx(PM,{}),N.jsx(LM,{}),N.jsx(IM,{})]}),N.jsx("footer",{className:"border-t border-slate-900 bg-obsidian-950 py-10 px-4 sm:px-6 lg:px-8 text-xs font-mono text-slate-500",children:N.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4",children:[N.jsxs("div",{className:"flex items-center gap-2",children:[N.jsx("div",{className:"w-2 h-2 rounded-full bg-emerald-400"}),N.jsx("span",{children:"Autonomous Developer Ecosystem v2.4.0 // GitHub Actions Verified"})]}),N.jsxs("div",{className:"flex items-center gap-6",children:[N.jsxs("a",{href:"https://github.com/CHIRAG-GOUR",target:"_blank",rel:"noopener noreferrer",className:"hover:text-cyan-400 transition-colors flex items-center gap-1",children:[N.jsx(Id,{className:"w-3.5 h-3.5"}),N.jsx("span",{children:"github.com/CHIRAG-GOUR"})]}),N.jsx("span",{children:"Zero Credential Exposure Guarantee"})]})]})})]});q0.createRoot(document.getElementById("root")).render(N.jsx(H0.StrictMode,{children:N.jsx(NM,{})}));
