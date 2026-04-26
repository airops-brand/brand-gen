(()=>{var b5=Object.create;var $d=Object.defineProperty;var v5=Object.getOwnPropertyDescriptor;var x5=Object.getOwnPropertyNames;var C5=Object.getPrototypeOf,S5=Object.prototype.hasOwnProperty;var Je=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var w5=(t,e,n,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of x5(e))!S5.call(t,a)&&a!==n&&$d(t,a,{get:()=>e[a],enumerable:!(l=v5(e,a))||l.enumerable});return t};var Nn=(t,e,n)=>(n=t!=null?b5(C5(t)):{},w5(e||!t||!t.__esModule?$d(n,"default",{value:t,enumerable:!0}):n,t));var l_=Je(K=>{"use strict";var mu=Symbol.for("react.transitional.element"),E5=Symbol.for("react.portal"),T5=Symbol.for("react.fragment"),k5=Symbol.for("react.strict_mode"),M5=Symbol.for("react.profiler"),A5=Symbol.for("react.consumer"),z5=Symbol.for("react.context"),L5=Symbol.for("react.forward_ref"),N5=Symbol.for("react.suspense"),O5=Symbol.for("react.memo"),Id=Symbol.for("react.lazy"),D5=Symbol.for("react.activity"),Vd=Symbol.iterator;function B5(t){return t===null||typeof t!="object"?null:(t=Vd&&t[Vd]||t["@@iterator"],typeof t=="function"?t:null)}var Fd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pd=Object.assign,t_={};function ql(t,e,n){this.props=t,this.context=e,this.refs=t_,this.updater=n||Fd}ql.prototype.isReactComponent={};ql.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ql.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function e_(){}e_.prototype=ql.prototype;function hu(t,e,n){this.props=t,this.context=e,this.refs=t_,this.updater=n||Fd}var yu=hu.prototype=new e_;yu.constructor=hu;Pd(yu,ql.prototype);yu.isPureReactComponent=!0;var Kd=Array.isArray;function fu(){}var bt={H:null,A:null,T:null,S:null},n_=Object.prototype.hasOwnProperty;function gu(t,e,n){var l=n.ref;return{$$typeof:mu,type:t,key:e,ref:l!==void 0?l:null,props:n}}function Y5(t,e){return gu(t.type,e,t.props)}function pu(t){return typeof t=="object"&&t!==null&&t.$$typeof===mu}function H5(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Jd=/\/+/g;function _u(t,e){return typeof t=="object"&&t!==null&&t.key!=null?H5(""+t.key):e.toString(36)}function U5(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(fu,fu):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function Ql(t,e,n,l,a){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var i=!1;if(t===null)i=!0;else switch(o){case"bigint":case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case mu:case E5:i=!0;break;case Id:return i=t._init,Ql(i(t._payload),e,n,l,a)}}if(i)return a=a(t),i=l===""?"."+_u(t,0):l,Kd(a)?(n="",i!=null&&(n=i.replace(Jd,"$&/")+"/"),Ql(a,e,n,"",function(h){return h})):a!=null&&(pu(a)&&(a=Y5(a,n+(a.key==null||t&&t.key===a.key?"":(""+a.key).replace(Jd,"$&/")+"/")+i)),e.push(a)),1;i=0;var s=l===""?".":l+":";if(Kd(t))for(var u=0;u<t.length;u++)l=t[u],o=s+_u(l,u),i+=Ql(l,e,n,o,a);else if(u=B5(t),typeof u=="function")for(t=u.call(t),u=0;!(l=t.next()).done;)l=l.value,o=s+_u(l,u++),i+=Ql(l,e,n,o,a);else if(o==="object"){if(typeof t.then=="function")return Ql(U5(t),e,n,l,a);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return i}function _i(t,e,n){if(t==null)return t;var l=[],a=0;return Ql(t,l,"","",function(o){return e.call(n,o,a++)}),l}function R5(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Wd=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},j5={map:_i,forEach:function(t,e,n){_i(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return _i(t,function(){e++}),e},toArray:function(t){return _i(t,function(e){return e})||[]},only:function(t){if(!pu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};K.Activity=D5;K.Children=j5;K.Component=ql;K.Fragment=T5;K.Profiler=M5;K.PureComponent=hu;K.StrictMode=k5;K.Suspense=N5;K.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=bt;K.__COMPILER_RUNTIME={__proto__:null,c:function(t){return bt.H.useMemoCache(t)}};K.cache=function(t){return function(){return t.apply(null,arguments)}};K.cacheSignal=function(){return null};K.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var l=Pd({},t.props),a=t.key;if(e!=null)for(o in e.key!==void 0&&(a=""+e.key),e)!n_.call(e,o)||o==="key"||o==="__self"||o==="__source"||o==="ref"&&e.ref===void 0||(l[o]=e[o]);var o=arguments.length-2;if(o===1)l.children=n;else if(1<o){for(var i=Array(o),s=0;s<o;s++)i[s]=arguments[s+2];l.children=i}return gu(t.type,a,l)};K.createContext=function(t){return t={$$typeof:z5,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:A5,_context:t},t};K.createElement=function(t,e,n){var l,a={},o=null;if(e!=null)for(l in e.key!==void 0&&(o=""+e.key),e)n_.call(e,l)&&l!=="key"&&l!=="__self"&&l!=="__source"&&(a[l]=e[l]);var i=arguments.length-2;if(i===1)a.children=n;else if(1<i){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+2];a.children=s}if(t&&t.defaultProps)for(l in i=t.defaultProps,i)a[l]===void 0&&(a[l]=i[l]);return gu(t,o,a)};K.createRef=function(){return{current:null}};K.forwardRef=function(t){return{$$typeof:L5,render:t}};K.isValidElement=pu;K.lazy=function(t){return{$$typeof:Id,_payload:{_status:-1,_result:t},_init:R5}};K.memo=function(t,e){return{$$typeof:O5,type:t,compare:e===void 0?null:e}};K.startTransition=function(t){var e=bt.T,n={};bt.T=n;try{var l=t(),a=bt.S;a!==null&&a(n,l),typeof l=="object"&&l!==null&&typeof l.then=="function"&&l.then(fu,Wd)}catch(o){Wd(o)}finally{e!==null&&n.types!==null&&(e.types=n.types),bt.T=e}};K.unstable_useCacheRefresh=function(){return bt.H.useCacheRefresh()};K.use=function(t){return bt.H.use(t)};K.useActionState=function(t,e,n){return bt.H.useActionState(t,e,n)};K.useCallback=function(t,e){return bt.H.useCallback(t,e)};K.useContext=function(t){return bt.H.useContext(t)};K.useDebugValue=function(){};K.useDeferredValue=function(t,e){return bt.H.useDeferredValue(t,e)};K.useEffect=function(t,e){return bt.H.useEffect(t,e)};K.useEffectEvent=function(t){return bt.H.useEffectEvent(t)};K.useId=function(){return bt.H.useId()};K.useImperativeHandle=function(t,e,n){return bt.H.useImperativeHandle(t,e,n)};K.useInsertionEffect=function(t,e){return bt.H.useInsertionEffect(t,e)};K.useLayoutEffect=function(t,e){return bt.H.useLayoutEffect(t,e)};K.useMemo=function(t,e){return bt.H.useMemo(t,e)};K.useOptimistic=function(t,e){return bt.H.useOptimistic(t,e)};K.useReducer=function(t,e,n){return bt.H.useReducer(t,e,n)};K.useRef=function(t){return bt.H.useRef(t)};K.useState=function(t){return bt.H.useState(t)};K.useSyncExternalStore=function(t,e,n){return bt.H.useSyncExternalStore(t,e,n)};K.useTransition=function(){return bt.H.useTransition()};K.version="19.2.4"});var Zl=Je((hg,a_)=>{"use strict";a_.exports=l_()});var m_=Je(St=>{"use strict";function Cu(t,e){var n=t.length;t.push(e);t:for(;0<n;){var l=n-1>>>1,a=t[l];if(0<fi(a,e))t[l]=e,t[n]=a,n=l;else break t}}function We(t){return t.length===0?null:t[0]}function hi(t){if(t.length===0)return null;var e=t[0],n=t.pop();if(n!==e){t[0]=n;t:for(var l=0,a=t.length,o=a>>>1;l<o;){var i=2*(l+1)-1,s=t[i],u=i+1,h=t[u];if(0>fi(s,n))u<a&&0>fi(h,s)?(t[l]=h,t[u]=n,l=u):(t[l]=s,t[i]=n,l=i);else if(u<a&&0>fi(h,n))t[l]=h,t[u]=n,l=u;else break t}}return e}function fi(t,e){var n=t.sortIndex-e.sortIndex;return n!==0?n:t.id-e.id}St.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(o_=performance,St.unstable_now=function(){return o_.now()}):(bu=Date,i_=bu.now(),St.unstable_now=function(){return bu.now()-i_});var o_,bu,i_,rn=[],On=[],X5=1,ze=null,Ft=3,Su=!1,Ka=!1,Ja=!1,wu=!1,c_=typeof setTimeout=="function"?setTimeout:null,r_=typeof clearTimeout=="function"?clearTimeout:null,s_=typeof setImmediate<"u"?setImmediate:null;function mi(t){for(var e=We(On);e!==null;){if(e.callback===null)hi(On);else if(e.startTime<=t)hi(On),e.sortIndex=e.expirationTime,Cu(rn,e);else break;e=We(On)}}function Eu(t){if(Ja=!1,mi(t),!Ka)if(We(rn)!==null)Ka=!0,$l||($l=!0,Gl());else{var e=We(On);e!==null&&Tu(Eu,e.startTime-t)}}var $l=!1,Wa=-1,d_=5,__=-1;function f_(){return wu?!0:!(St.unstable_now()-__<d_)}function vu(){if(wu=!1,$l){var t=St.unstable_now();__=t;var e=!0;try{t:{Ka=!1,Ja&&(Ja=!1,r_(Wa),Wa=-1),Su=!0;var n=Ft;try{e:{for(mi(t),ze=We(rn);ze!==null&&!(ze.expirationTime>t&&f_());){var l=ze.callback;if(typeof l=="function"){ze.callback=null,Ft=ze.priorityLevel;var a=l(ze.expirationTime<=t);if(t=St.unstable_now(),typeof a=="function"){ze.callback=a,mi(t),e=!0;break e}ze===We(rn)&&hi(rn),mi(t)}else hi(rn);ze=We(rn)}if(ze!==null)e=!0;else{var o=We(On);o!==null&&Tu(Eu,o.startTime-t),e=!1}}break t}finally{ze=null,Ft=n,Su=!1}e=void 0}}finally{e?Gl():$l=!1}}}var Gl;typeof s_=="function"?Gl=function(){s_(vu)}:typeof MessageChannel<"u"?(xu=new MessageChannel,u_=xu.port2,xu.port1.onmessage=vu,Gl=function(){u_.postMessage(null)}):Gl=function(){c_(vu,0)};var xu,u_;function Tu(t,e){Wa=c_(function(){t(St.unstable_now())},e)}St.unstable_IdlePriority=5;St.unstable_ImmediatePriority=1;St.unstable_LowPriority=4;St.unstable_NormalPriority=3;St.unstable_Profiling=null;St.unstable_UserBlockingPriority=2;St.unstable_cancelCallback=function(t){t.callback=null};St.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):d_=0<t?Math.floor(1e3/t):5};St.unstable_getCurrentPriorityLevel=function(){return Ft};St.unstable_next=function(t){switch(Ft){case 1:case 2:case 3:var e=3;break;default:e=Ft}var n=Ft;Ft=e;try{return t()}finally{Ft=n}};St.unstable_requestPaint=function(){wu=!0};St.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var n=Ft;Ft=t;try{return e()}finally{Ft=n}};St.unstable_scheduleCallback=function(t,e,n){var l=St.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?l+n:l):n=l,t){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return a=n+a,t={id:X5++,callback:e,priorityLevel:t,startTime:n,expirationTime:a,sortIndex:-1},n>l?(t.sortIndex=n,Cu(On,t),We(rn)===null&&t===We(On)&&(Ja?(r_(Wa),Wa=-1):Ja=!0,Tu(Eu,n-l))):(t.sortIndex=a,Cu(rn,t),Ka||Su||(Ka=!0,$l||($l=!0,Gl()))),t};St.unstable_shouldYield=f_;St.unstable_wrapCallback=function(t){var e=Ft;return function(){var n=Ft;Ft=e;try{return t.apply(this,arguments)}finally{Ft=n}}}});var y_=Je((gg,h_)=>{"use strict";h_.exports=m_()});var p_=Je(ee=>{"use strict";var Q5=Zl();function g_(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Dn(){}var te={d:{f:Dn,r:function(){throw Error(g_(522))},D:Dn,C:Dn,L:Dn,m:Dn,X:Dn,S:Dn,M:Dn},p:0,findDOMNode:null},q5=Symbol.for("react.portal");function Z5(t,e,n){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:q5,key:l==null?null:""+l,children:t,containerInfo:e,implementation:n}}var Ia=Q5.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function yi(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}ee.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=te;ee.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(g_(299));return Z5(t,e,null,n)};ee.flushSync=function(t){var e=Ia.T,n=te.p;try{if(Ia.T=null,te.p=2,t)return t()}finally{Ia.T=e,te.p=n,te.d.f()}};ee.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,te.d.C(t,e))};ee.prefetchDNS=function(t){typeof t=="string"&&te.d.D(t)};ee.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var n=e.as,l=yi(n,e.crossOrigin),a=typeof e.integrity=="string"?e.integrity:void 0,o=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;n==="style"?te.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:l,integrity:a,fetchPriority:o}):n==="script"&&te.d.X(t,{crossOrigin:l,integrity:a,fetchPriority:o,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};ee.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var n=yi(e.as,e.crossOrigin);te.d.M(t,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&te.d.M(t)};ee.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var n=e.as,l=yi(n,e.crossOrigin);te.d.L(t,n,{crossOrigin:l,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};ee.preloadModule=function(t,e){if(typeof t=="string")if(e){var n=yi(e.as,e.crossOrigin);te.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else te.d.m(t)};ee.requestFormReset=function(t){te.d.r(t)};ee.unstable_batchedUpdates=function(t,e){return t(e)};ee.useFormState=function(t,e,n){return Ia.H.useFormState(t,e,n)};ee.useFormStatus=function(){return Ia.H.useHostTransitionStatus()};ee.version="19.2.4"});var ku=Je((bg,v_)=>{"use strict";function b_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b_)}catch(t){console.error(t)}}b_(),v_.exports=p_()});var Om=Je(Xs=>{"use strict";var Qt=y_(),Vf=Zl(),G5=ku();function w(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Kf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Uo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Jf(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wf(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function x_(t){if(Uo(t)!==t)throw Error(w(188))}function $5(t){var e=t.alternate;if(!e){if(e=Uo(t),e===null)throw Error(w(188));return e!==t?null:t}for(var n=t,l=e;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(l=a.return,l!==null){n=l;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return x_(a),t;if(o===l)return x_(a),e;o=o.sibling}throw Error(w(188))}if(n.return!==l.return)n=a,l=o;else{for(var i=!1,s=a.child;s;){if(s===n){i=!0,n=a,l=o;break}if(s===l){i=!0,l=a,n=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===n){i=!0,n=o,l=a;break}if(s===l){i=!0,l=o,n=a;break}s=s.sibling}if(!i)throw Error(w(189))}}if(n.alternate!==l)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?t:e}function If(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=If(t),e!==null)return e;t=t.sibling}return null}var Ct=Object.assign,V5=Symbol.for("react.element"),gi=Symbol.for("react.transitional.element"),oo=Symbol.for("react.portal"),Fl=Symbol.for("react.fragment"),Ff=Symbol.for("react.strict_mode"),sc=Symbol.for("react.profiler"),Pf=Symbol.for("react.consumer"),pn=Symbol.for("react.context"),nr=Symbol.for("react.forward_ref"),uc=Symbol.for("react.suspense"),cc=Symbol.for("react.suspense_list"),lr=Symbol.for("react.memo"),Bn=Symbol.for("react.lazy"),rc=Symbol.for("react.activity"),K5=Symbol.for("react.memo_cache_sentinel"),C_=Symbol.iterator;function Fa(t){return t===null||typeof t!="object"?null:(t=C_&&t[C_]||t["@@iterator"],typeof t=="function"?t:null)}var J5=Symbol.for("react.client.reference");function dc(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===J5?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Fl:return"Fragment";case sc:return"Profiler";case Ff:return"StrictMode";case uc:return"Suspense";case cc:return"SuspenseList";case rc:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case oo:return"Portal";case pn:return t.displayName||"Context";case Pf:return(t._context.displayName||"Context")+".Consumer";case nr:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case lr:return e=t.displayName||null,e!==null?e:dc(t.type)||"Memo";case Bn:e=t._payload,t=t._init;try{return dc(t(e))}catch{}}return null}var io=Array.isArray,Q=Vf.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ct=G5.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,gl={pending:!1,data:null,method:null,action:null},_c=[],Pl=-1;function en(t){return{current:t}}function $t(t){0>Pl||(t.current=_c[Pl],_c[Pl]=null,Pl--)}function pt(t,e){Pl++,_c[Pl]=t.current,t.current=e}var tn=en(null),wo=en(null),$n=en(null),Wi=en(null);function Ii(t,e){switch(pt($n,e),pt(wo,t),pt(tn,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?zf(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=zf(e),t=bm(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}$t(tn),pt(tn,t)}function ga(){$t(tn),$t(wo),$t($n)}function fc(t){t.memoizedState!==null&&pt(Wi,t);var e=tn.current,n=bm(e,t.type);e!==n&&(pt(wo,t),pt(tn,n))}function Fi(t){wo.current===t&&($t(tn),$t(wo)),Wi.current===t&&($t(Wi),Bo._currentValue=gl)}var Mu,S_;function fl(t){if(Mu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Mu=e&&e[1]||"",S_=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Mu+t+S_}var Au=!1;function zu(t,e){if(!t||Au)return"";Au=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var v=function(){throw Error()};if(Object.defineProperty(v.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(v,[])}catch(b){var p=b}Reflect.construct(t,[],v)}else{try{v.call()}catch(b){p=b}t.call(v.prototype)}}else{try{throw Error()}catch(b){p=b}(v=t())&&typeof v.catch=="function"&&v.catch(function(){})}}catch(b){if(b&&p&&typeof b.stack=="string")return[b.stack,p.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=l.DetermineComponentFrameRoot(),i=o[0],s=o[1];if(i&&s){var u=i.split(`
`),h=s.split(`
`);for(a=l=0;l<u.length&&!u[l].includes("DetermineComponentFrameRoot");)l++;for(;a<h.length&&!h[a].includes("DetermineComponentFrameRoot");)a++;if(l===u.length||a===h.length)for(l=u.length-1,a=h.length-1;1<=l&&0<=a&&u[l]!==h[a];)a--;for(;1<=l&&0<=a;l--,a--)if(u[l]!==h[a]){if(l!==1||a!==1)do if(l--,a--,0>a||u[l]!==h[a]){var y=`
`+u[l].replace(" at new "," at ");return t.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",t.displayName)),y}while(1<=l&&0<=a);break}}}finally{Au=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?fl(n):""}function W5(t,e){switch(t.tag){case 26:case 27:case 5:return fl(t.type);case 16:return fl("Lazy");case 13:return t.child!==e&&e!==null?fl("Suspense Fallback"):fl("Suspense");case 19:return fl("SuspenseList");case 0:case 15:return zu(t.type,!1);case 11:return zu(t.type.render,!1);case 1:return zu(t.type,!0);case 31:return fl("Activity");default:return""}}function w_(t){try{var e="",n=null;do e+=W5(t,n),n=t,t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var mc=Object.prototype.hasOwnProperty,ar=Qt.unstable_scheduleCallback,Lu=Qt.unstable_cancelCallback,I5=Qt.unstable_shouldYield,F5=Qt.unstable_requestPaint,xe=Qt.unstable_now,P5=Qt.unstable_getCurrentPriorityLevel,t1=Qt.unstable_ImmediatePriority,e1=Qt.unstable_UserBlockingPriority,Pi=Qt.unstable_NormalPriority,t2=Qt.unstable_LowPriority,n1=Qt.unstable_IdlePriority,e2=Qt.log,n2=Qt.unstable_setDisableYieldValue,Ro=null,Ce=null;function Xn(t){if(typeof e2=="function"&&n2(t),Ce&&typeof Ce.setStrictMode=="function")try{Ce.setStrictMode(Ro,t)}catch{}}var Se=Math.clz32?Math.clz32:o2,l2=Math.log,a2=Math.LN2;function o2(t){return t>>>=0,t===0?32:31-(l2(t)/a2|0)|0}var pi=256,bi=262144,vi=4194304;function ml(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Es(t,e,n){var l=t.pendingLanes;if(l===0)return 0;var a=0,o=t.suspendedLanes,i=t.pingedLanes;t=t.warmLanes;var s=l&134217727;return s!==0?(l=s&~o,l!==0?a=ml(l):(i&=s,i!==0?a=ml(i):n||(n=s&~t,n!==0&&(a=ml(n))))):(s=l&~o,s!==0?a=ml(s):i!==0?a=ml(i):n||(n=l&~t,n!==0&&(a=ml(n)))),a===0?0:e!==0&&e!==a&&(e&o)===0&&(o=a&-a,n=e&-e,o>=n||o===32&&(n&4194048)!==0)?e:a}function jo(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function i2(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function l1(){var t=vi;return vi<<=1,(vi&62914560)===0&&(vi=4194304),t}function Nu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Xo(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function s2(t,e,n,l,a,o){var i=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var s=t.entanglements,u=t.expirationTimes,h=t.hiddenUpdates;for(n=i&~n;0<n;){var y=31-Se(n),v=1<<y;s[y]=0,u[y]=-1;var p=h[y];if(p!==null)for(h[y]=null,y=0;y<p.length;y++){var b=p[y];b!==null&&(b.lane&=-536870913)}n&=~v}l!==0&&a1(t,l,0),o!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=o&~(i&~e))}function a1(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var l=31-Se(e);t.entangledLanes|=e,t.entanglements[l]=t.entanglements[l]|1073741824|n&261930}function o1(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var l=31-Se(n),a=1<<l;a&e|t[l]&e&&(t[l]|=e),n&=~a}}function i1(t,e){var n=e&-e;return n=(n&42)!==0?1:or(n),(n&(t.suspendedLanes|e))!==0?0:n}function or(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ir(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function s1(){var t=ct.p;return t!==0?t:(t=window.event,t===void 0?32:zm(t.type))}function E_(t,e){var n=ct.p;try{return ct.p=t,e()}finally{ct.p=n}}var ol=Math.random().toString(36).slice(2),Kt="__reactFiber$"+ol,de="__reactProps$"+ol,Ma="__reactContainer$"+ol,hc="__reactEvents$"+ol,u2="__reactListeners$"+ol,c2="__reactHandles$"+ol,T_="__reactResources$"+ol,Qo="__reactMarker$"+ol;function sr(t){delete t[Kt],delete t[de],delete t[hc],delete t[u2],delete t[c2]}function ta(t){var e=t[Kt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ma]||n[Kt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Bf(t);t!==null;){if(n=t[Kt])return n;t=Bf(t)}return e}t=n,n=t.parentNode}return null}function Aa(t){if(t=t[Kt]||t[Ma]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function so(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(w(33))}function ra(t){var e=t[T_];return e||(e=t[T_]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Gt(t){t[Qo]=!0}var u1=new Set,c1={};function kl(t,e){pa(t,e),pa(t+"Capture",e)}function pa(t,e){for(c1[t]=e,t=0;t<e.length;t++)u1.add(e[t])}var r2=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),k_={},M_={};function d2(t){return mc.call(M_,t)?!0:mc.call(k_,t)?!1:r2.test(t)?M_[t]=!0:(k_[t]=!0,!1)}function Bi(t,e,n){if(d2(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function xi(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function dn(t,e,n,l){if(l===null)t.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+l)}}function Ne(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function r1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function _2(t,e,n){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var a=l.get,o=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(i){n=""+i,o.call(this,i)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(i){n=""+i},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function yc(t){if(!t._valueTracker){var e=r1(t)?"checked":"value";t._valueTracker=_2(t,e,""+t[e])}}function d1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),l="";return t&&(l=r1(t)?t.checked?"true":"false":t.value),t=l,t!==n?(e.setValue(t),!0):!1}function ts(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var f2=/[\n"\\]/g;function Be(t){return t.replace(f2,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function gc(t,e,n,l,a,o,i,s){t.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?t.type=i:t.removeAttribute("type"),e!=null?i==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Ne(e)):t.value!==""+Ne(e)&&(t.value=""+Ne(e)):i!=="submit"&&i!=="reset"||t.removeAttribute("value"),e!=null?pc(t,i,Ne(e)):n!=null?pc(t,i,Ne(n)):l!=null&&t.removeAttribute("value"),a==null&&o!=null&&(t.defaultChecked=!!o),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.name=""+Ne(s):t.removeAttribute("name")}function _1(t,e,n,l,a,o,i,s){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.type=o),e!=null||n!=null){if(!(o!=="submit"&&o!=="reset"||e!=null)){yc(t);return}n=n!=null?""+Ne(n):"",e=e!=null?""+Ne(e):n,s||e===t.value||(t.value=e),t.defaultValue=e}l=l??a,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=s?t.checked:!!l,t.defaultChecked=!!l,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.name=i),yc(t)}function pc(t,e,n){e==="number"&&ts(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function da(t,e,n,l){if(t=t.options,e){e={};for(var a=0;a<n.length;a++)e["$"+n[a]]=!0;for(n=0;n<t.length;n++)a=e.hasOwnProperty("$"+t[n].value),t[n].selected!==a&&(t[n].selected=a),a&&l&&(t[n].defaultSelected=!0)}else{for(n=""+Ne(n),e=null,a=0;a<t.length;a++){if(t[a].value===n){t[a].selected=!0,l&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function f1(t,e,n){if(e!=null&&(e=""+Ne(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Ne(n):""}function m1(t,e,n,l){if(e==null){if(l!=null){if(n!=null)throw Error(w(92));if(io(l)){if(1<l.length)throw Error(w(93));l=l[0]}n=l}n==null&&(n=""),e=n}n=Ne(e),t.defaultValue=n,l=t.textContent,l===n&&l!==""&&l!==null&&(t.value=l),yc(t)}function ba(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var m2=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function A_(t,e,n){var l=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":l?t.setProperty(e,n):typeof n!="number"||n===0||m2.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function h1(t,e,n){if(e!=null&&typeof e!="object")throw Error(w(62));if(t=t.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var a in e)l=e[a],e.hasOwnProperty(a)&&n[a]!==l&&A_(t,a,l)}else for(var o in e)e.hasOwnProperty(o)&&A_(t,o,e[o])}function ur(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var h2=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),y2=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yi(t){return y2.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function bn(){}var bc=null;function cr(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ea=null,_a=null;function z_(t){var e=Aa(t);if(e&&(t=e.stateNode)){var n=t[de]||null;t:switch(t=e.stateNode,e.type){case"input":if(gc(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Be(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var l=n[e];if(l!==t&&l.form===t.form){var a=l[de]||null;if(!a)throw Error(w(90));gc(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<n.length;e++)l=n[e],l.form===t.form&&d1(l)}break t;case"textarea":f1(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&da(t,!!n.multiple,e,!1)}}}var Ou=!1;function y1(t,e,n){if(Ou)return t(e,n);Ou=!0;try{var l=t(e);return l}finally{if(Ou=!1,(ea!==null||_a!==null)&&(Hs(),ea&&(e=ea,t=_a,_a=ea=null,z_(e),t)))for(e=0;e<t.length;e++)z_(t[e])}}function Eo(t,e){var n=t.stateNode;if(n===null)return null;var l=n[de]||null;if(l===null)return null;n=l[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(w(231,e,typeof n));return n}var wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vc=!1;if(wn)try{Vl={},Object.defineProperty(Vl,"passive",{get:function(){vc=!0}}),window.addEventListener("test",Vl,Vl),window.removeEventListener("test",Vl,Vl)}catch{vc=!1}var Vl,Qn=null,rr=null,Hi=null;function g1(){if(Hi)return Hi;var t,e=rr,n=e.length,l,a="value"in Qn?Qn.value:Qn.textContent,o=a.length;for(t=0;t<n&&e[t]===a[t];t++);var i=n-t;for(l=1;l<=i&&e[n-l]===a[o-l];l++);return Hi=a.slice(t,1<l?1-l:void 0)}function Ui(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ci(){return!0}function L_(){return!1}function _e(t){function e(n,l,a,o,i){this._reactName=n,this._targetInst=a,this.type=l,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(n=t[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ci:L_,this.isPropagationStopped=L_,this}return Ct(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ci)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ci)},persist:function(){},isPersistent:Ci}),e}var Ml={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ts=_e(Ml),qo=Ct({},Ml,{view:0,detail:0}),g2=_e(qo),Du,Bu,Pa,ks=Ct({},qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dr,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Pa&&(Pa&&t.type==="mousemove"?(Du=t.screenX-Pa.screenX,Bu=t.screenY-Pa.screenY):Bu=Du=0,Pa=t),Du)},movementY:function(t){return"movementY"in t?t.movementY:Bu}}),N_=_e(ks),p2=Ct({},ks,{dataTransfer:0}),b2=_e(p2),v2=Ct({},qo,{relatedTarget:0}),Yu=_e(v2),x2=Ct({},Ml,{animationName:0,elapsedTime:0,pseudoElement:0}),C2=_e(x2),S2=Ct({},Ml,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),w2=_e(S2),E2=Ct({},Ml,{data:0}),O_=_e(E2),T2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},k2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},M2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function A2(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=M2[t])?!!e[t]:!1}function dr(){return A2}var z2=Ct({},qo,{key:function(t){if(t.key){var e=T2[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ui(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?k2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dr,charCode:function(t){return t.type==="keypress"?Ui(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ui(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),L2=_e(z2),N2=Ct({},ks,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),D_=_e(N2),O2=Ct({},qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dr}),D2=_e(O2),B2=Ct({},Ml,{propertyName:0,elapsedTime:0,pseudoElement:0}),Y2=_e(B2),H2=Ct({},ks,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),U2=_e(H2),R2=Ct({},Ml,{newState:0,oldState:0}),j2=_e(R2),X2=[9,13,27,32],_r=wn&&"CompositionEvent"in window,ro=null;wn&&"documentMode"in document&&(ro=document.documentMode);var Q2=wn&&"TextEvent"in window&&!ro,p1=wn&&(!_r||ro&&8<ro&&11>=ro),B_=" ",Y_=!1;function b1(t,e){switch(t){case"keyup":return X2.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function v1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var na=!1;function q2(t,e){switch(t){case"compositionend":return v1(e);case"keypress":return e.which!==32?null:(Y_=!0,B_);case"textInput":return t=e.data,t===B_&&Y_?null:t;default:return null}}function Z2(t,e){if(na)return t==="compositionend"||!_r&&b1(t,e)?(t=g1(),Hi=rr=Qn=null,na=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return p1&&e.locale!=="ko"?null:e.data;default:return null}}var G2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function H_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!G2[t.type]:e==="textarea"}function x1(t,e,n,l){ea?_a?_a.push(l):_a=[l]:ea=l,e=ps(e,"onChange"),0<e.length&&(n=new Ts("onChange","change",null,n,l),t.push({event:n,listeners:e}))}var _o=null,To=null;function $2(t){ym(t,0)}function Ms(t){var e=so(t);if(d1(e))return t}function U_(t,e){if(t==="change")return e}var C1=!1;wn&&(wn?(wi="oninput"in document,wi||(Hu=document.createElement("div"),Hu.setAttribute("oninput","return;"),wi=typeof Hu.oninput=="function"),Si=wi):Si=!1,C1=Si&&(!document.documentMode||9<document.documentMode));var Si,wi,Hu;function R_(){_o&&(_o.detachEvent("onpropertychange",S1),To=_o=null)}function S1(t){if(t.propertyName==="value"&&Ms(To)){var e=[];x1(e,To,t,cr(t)),y1($2,e)}}function V2(t,e,n){t==="focusin"?(R_(),_o=e,To=n,_o.attachEvent("onpropertychange",S1)):t==="focusout"&&R_()}function K2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ms(To)}function J2(t,e){if(t==="click")return Ms(e)}function W2(t,e){if(t==="input"||t==="change")return Ms(e)}function I2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ee=typeof Object.is=="function"?Object.is:I2;function ko(t,e){if(Ee(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),l=Object.keys(e);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var a=n[l];if(!mc.call(e,a)||!Ee(t[a],e[a]))return!1}return!0}function j_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function X_(t,e){var n=j_(t);t=0;for(var l;n;){if(n.nodeType===3){if(l=t+n.textContent.length,t<=e&&l>=e)return{node:n,offset:e-t};t=l}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=j_(n)}}function w1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?w1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function E1(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=ts(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ts(t.document)}return e}function fr(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var F2=wn&&"documentMode"in document&&11>=document.documentMode,la=null,xc=null,fo=null,Cc=!1;function Q_(t,e,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cc||la==null||la!==ts(l)||(l=la,"selectionStart"in l&&fr(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),fo&&ko(fo,l)||(fo=l,l=ps(xc,"onSelect"),0<l.length&&(e=new Ts("onSelect","select",null,e,n),t.push({event:e,listeners:l}),e.target=la)))}function _l(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var aa={animationend:_l("Animation","AnimationEnd"),animationiteration:_l("Animation","AnimationIteration"),animationstart:_l("Animation","AnimationStart"),transitionrun:_l("Transition","TransitionRun"),transitionstart:_l("Transition","TransitionStart"),transitioncancel:_l("Transition","TransitionCancel"),transitionend:_l("Transition","TransitionEnd")},Uu={},T1={};wn&&(T1=document.createElement("div").style,"AnimationEvent"in window||(delete aa.animationend.animation,delete aa.animationiteration.animation,delete aa.animationstart.animation),"TransitionEvent"in window||delete aa.transitionend.transition);function Al(t){if(Uu[t])return Uu[t];if(!aa[t])return t;var e=aa[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in T1)return Uu[t]=e[n];return t}var k1=Al("animationend"),M1=Al("animationiteration"),A1=Al("animationstart"),P2=Al("transitionrun"),th=Al("transitionstart"),eh=Al("transitioncancel"),z1=Al("transitionend"),L1=new Map,Sc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Sc.push("scrollEnd");function Ze(t,e){L1.set(t,e),kl(e,[t])}var es=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Le=[],oa=0,mr=0;function As(){for(var t=oa,e=mr=oa=0;e<t;){var n=Le[e];Le[e++]=null;var l=Le[e];Le[e++]=null;var a=Le[e];Le[e++]=null;var o=Le[e];if(Le[e++]=null,l!==null&&a!==null){var i=l.pending;i===null?a.next=a:(a.next=i.next,i.next=a),l.pending=a}o!==0&&N1(n,a,o)}}function zs(t,e,n,l){Le[oa++]=t,Le[oa++]=e,Le[oa++]=n,Le[oa++]=l,mr|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function hr(t,e,n,l){return zs(t,e,n,l),ns(t)}function zl(t,e){return zs(t,null,null,e),ns(t)}function N1(t,e,n){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n);for(var a=!1,o=t.return;o!==null;)o.childLanes|=n,l=o.alternate,l!==null&&(l.childLanes|=n),o.tag===22&&(t=o.stateNode,t===null||t._visibility&1||(a=!0)),t=o,o=o.return;return t.tag===3?(o=t.stateNode,a&&e!==null&&(a=31-Se(n),t=o.hiddenUpdates,l=t[a],l===null?t[a]=[e]:l.push(e),e.lane=n|536870912),o):null}function ns(t){if(50<Co)throw Co=0,Zc=null,Error(w(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ia={};function nh(t,e,n,l){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function be(t,e,n,l){return new nh(t,e,n,l)}function yr(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xn(t,e){var n=t.alternate;return n===null?(n=be(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function O1(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Ri(t,e,n,l,a,o){var i=0;if(l=t,typeof t=="function")yr(t)&&(i=1);else if(typeof t=="string")i=oy(t,n,tn.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case rc:return t=be(31,n,e,a),t.elementType=rc,t.lanes=o,t;case Fl:return pl(n.children,a,o,e);case Ff:i=8,a|=24;break;case sc:return t=be(12,n,e,a|2),t.elementType=sc,t.lanes=o,t;case uc:return t=be(13,n,e,a),t.elementType=uc,t.lanes=o,t;case cc:return t=be(19,n,e,a),t.elementType=cc,t.lanes=o,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case pn:i=10;break t;case Pf:i=9;break t;case nr:i=11;break t;case lr:i=14;break t;case Bn:i=16,l=null;break t}i=29,n=Error(w(130,t===null?"null":typeof t,"")),l=null}return e=be(i,n,e,a),e.elementType=t,e.type=l,e.lanes=o,e}function pl(t,e,n,l){return t=be(7,t,l,e),t.lanes=n,t}function Ru(t,e,n){return t=be(6,t,null,e),t.lanes=n,t}function D1(t){var e=be(18,null,null,0);return e.stateNode=t,e}function ju(t,e,n){return e=be(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var q_=new WeakMap;function Ye(t,e){if(typeof t=="object"&&t!==null){var n=q_.get(t);return n!==void 0?n:(e={value:t,source:e,stack:w_(e)},q_.set(t,e),e)}return{value:t,source:e,stack:w_(e)}}var sa=[],ua=0,ls=null,Mo=0,Oe=[],De=0,el=null,Ie=1,Fe="";function yn(t,e){sa[ua++]=Mo,sa[ua++]=ls,ls=t,Mo=e}function B1(t,e,n){Oe[De++]=Ie,Oe[De++]=Fe,Oe[De++]=el,el=t;var l=Ie;t=Fe;var a=32-Se(l)-1;l&=~(1<<a),n+=1;var o=32-Se(e)+a;if(30<o){var i=a-a%5;o=(l&(1<<i)-1).toString(32),l>>=i,a-=i,Ie=1<<32-Se(e)+a|n<<a|l,Fe=o+t}else Ie=1<<o|n<<a|l,Fe=t}function gr(t){t.return!==null&&(yn(t,1),B1(t,1,0))}function pr(t){for(;t===ls;)ls=sa[--ua],sa[ua]=null,Mo=sa[--ua],sa[ua]=null;for(;t===el;)el=Oe[--De],Oe[De]=null,Fe=Oe[--De],Oe[De]=null,Ie=Oe[--De],Oe[De]=null}function Y1(t,e){Oe[De++]=Ie,Oe[De++]=Fe,Oe[De++]=el,Ie=e.id,Fe=e.overflow,el=t}var Jt=null,xt=null,it=!1,Vn=null,He=!1,wc=Error(w(519));function nl(t){var e=Error(w(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ao(Ye(e,t)),wc}function Z_(t){var e=t.stateNode,n=t.type,l=t.memoizedProps;switch(e[Kt]=t,e[de]=l,n){case"dialog":tt("cancel",e),tt("close",e);break;case"iframe":case"object":case"embed":tt("load",e);break;case"video":case"audio":for(n=0;n<Oo.length;n++)tt(Oo[n],e);break;case"source":tt("error",e);break;case"img":case"image":case"link":tt("error",e),tt("load",e);break;case"details":tt("toggle",e);break;case"input":tt("invalid",e),_1(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":tt("invalid",e);break;case"textarea":tt("invalid",e),m1(e,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||l.suppressHydrationWarning===!0||pm(e.textContent,n)?(l.popover!=null&&(tt("beforetoggle",e),tt("toggle",e)),l.onScroll!=null&&tt("scroll",e),l.onScrollEnd!=null&&tt("scrollend",e),l.onClick!=null&&(e.onclick=bn),e=!0):e=!1,e||nl(t,!0)}function G_(t){for(Jt=t.return;Jt;)switch(Jt.tag){case 5:case 31:case 13:He=!1;return;case 27:case 3:He=!0;return;default:Jt=Jt.return}}function Kl(t){if(t!==Jt)return!1;if(!it)return G_(t),it=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Jc(t.type,t.memoizedProps)),n=!n),n&&xt&&nl(t),G_(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));xt=Df(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));xt=Df(t)}else e===27?(e=xt,il(t.type)?(t=Pc,Pc=null,xt=t):xt=e):xt=Jt?Re(t.stateNode.nextSibling):null;return!0}function Cl(){xt=Jt=null,it=!1}function Xu(){var t=Vn;return t!==null&&(ce===null?ce=t:ce.push.apply(ce,t),Vn=null),t}function Ao(t){Vn===null?Vn=[t]:Vn.push(t)}var Ec=en(null),Ll=null,vn=null;function Hn(t,e,n){pt(Ec,e._currentValue),e._currentValue=n}function Cn(t){t._currentValue=Ec.current,$t(Ec)}function Tc(t,e,n){for(;t!==null;){var l=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),t===n)break;t=t.return}}function kc(t,e,n,l){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var o=a.dependencies;if(o!==null){var i=a.child;o=o.firstContext;t:for(;o!==null;){var s=o;o=a;for(var u=0;u<e.length;u++)if(s.context===e[u]){o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Tc(o.return,n,t),l||(i=null);break t}o=s.next}}else if(a.tag===18){if(i=a.return,i===null)throw Error(w(341));i.lanes|=n,o=i.alternate,o!==null&&(o.lanes|=n),Tc(i,n,t),i=null}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}}function za(t,e,n,l){t=null;for(var a=e,o=!1;a!==null;){if(!o){if((a.flags&524288)!==0)o=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var i=a.alternate;if(i===null)throw Error(w(387));if(i=i.memoizedProps,i!==null){var s=a.type;Ee(a.pendingProps.value,i.value)||(t!==null?t.push(s):t=[s])}}else if(a===Wi.current){if(i=a.alternate,i===null)throw Error(w(387));i.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(Bo):t=[Bo])}a=a.return}t!==null&&kc(e,t,n,l),e.flags|=262144}function as(t){for(t=t.firstContext;t!==null;){if(!Ee(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Sl(t){Ll=t,vn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Wt(t){return H1(Ll,t)}function Ei(t,e){return Ll===null&&Sl(t),H1(t,e)}function H1(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},vn===null){if(t===null)throw Error(w(308));vn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else vn=vn.next=e;return n}var lh=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,l){t.push(l)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},ah=Qt.unstable_scheduleCallback,oh=Qt.unstable_NormalPriority,Ut={$$typeof:pn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function br(){return{controller:new lh,data:new Map,refCount:0}}function Zo(t){t.refCount--,t.refCount===0&&ah(oh,function(){t.controller.abort()})}var mo=null,Mc=0,va=0,fa=null;function ih(t,e){if(mo===null){var n=mo=[];Mc=0,va=Zr(),fa={status:"pending",value:void 0,then:function(l){n.push(l)}}}return Mc++,e.then($_,$_),e}function $_(){if(--Mc===0&&mo!==null){fa!==null&&(fa.status="fulfilled");var t=mo;mo=null,va=0,fa=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function sh(t,e){var n=[],l={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return t.then(function(){l.status="fulfilled",l.value=e;for(var a=0;a<n.length;a++)(0,n[a])(e)},function(a){for(l.status="rejected",l.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),l}var V_=Q.S;Q.S=function(t,e){I0=xe(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&ih(t,e),V_!==null&&V_(t,e)};var bl=en(null);function vr(){var t=bl.current;return t!==null?t:yt.pooledCache}function ji(t,e){e===null?pt(bl,bl.current):pt(bl,e.pool)}function U1(){var t=vr();return t===null?null:{parent:Ut._currentValue,pool:t}}var La=Error(w(460)),xr=Error(w(474)),Ls=Error(w(542)),os={then:function(){}};function K_(t){return t=t.status,t==="fulfilled"||t==="rejected"}function R1(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(bn,bn),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,W_(t),t;default:if(typeof e.status=="string")e.then(bn,bn);else{if(t=yt,t!==null&&100<t.shellSuspendCounter)throw Error(w(482));t=e,t.status="pending",t.then(function(l){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=l}},function(l){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,W_(t),t}throw vl=e,La}}function hl(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(vl=n,La):n}}var vl=null;function J_(){if(vl===null)throw Error(w(459));var t=vl;return vl=null,t}function W_(t){if(t===La||t===Ls)throw Error(w(483))}var ma=null,zo=0;function Ti(t){var e=zo;return zo+=1,ma===null&&(ma=[]),R1(ma,t,e)}function to(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function ki(t,e){throw e.$$typeof===V5?Error(w(525)):(t=Object.prototype.toString.call(e),Error(w(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function j1(t){function e(f,_){if(t){var g=f.deletions;g===null?(f.deletions=[_],f.flags|=16):g.push(_)}}function n(f,_){if(!t)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function l(f){for(var _=new Map;f!==null;)f.key!==null?_.set(f.key,f):_.set(f.index,f),f=f.sibling;return _}function a(f,_){return f=xn(f,_),f.index=0,f.sibling=null,f}function o(f,_,g){return f.index=g,t?(g=f.alternate,g!==null?(g=g.index,g<_?(f.flags|=67108866,_):g):(f.flags|=67108866,_)):(f.flags|=1048576,_)}function i(f){return t&&f.alternate===null&&(f.flags|=67108866),f}function s(f,_,g,C){return _===null||_.tag!==6?(_=Ru(g,f.mode,C),_.return=f,_):(_=a(_,g),_.return=f,_)}function u(f,_,g,C){var B=g.type;return B===Fl?y(f,_,g.props.children,C,g.key):_!==null&&(_.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Bn&&hl(B)===_.type)?(_=a(_,g.props),to(_,g),_.return=f,_):(_=Ri(g.type,g.key,g.props,null,f.mode,C),to(_,g),_.return=f,_)}function h(f,_,g,C){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=ju(g,f.mode,C),_.return=f,_):(_=a(_,g.children||[]),_.return=f,_)}function y(f,_,g,C,B){return _===null||_.tag!==7?(_=pl(g,f.mode,C,B),_.return=f,_):(_=a(_,g),_.return=f,_)}function v(f,_,g){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return _=Ru(""+_,f.mode,g),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case gi:return g=Ri(_.type,_.key,_.props,null,f.mode,g),to(g,_),g.return=f,g;case oo:return _=ju(_,f.mode,g),_.return=f,_;case Bn:return _=hl(_),v(f,_,g)}if(io(_)||Fa(_))return _=pl(_,f.mode,g,null),_.return=f,_;if(typeof _.then=="function")return v(f,Ti(_),g);if(_.$$typeof===pn)return v(f,Ei(f,_),g);ki(f,_)}return null}function p(f,_,g,C){var B=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return B!==null?null:s(f,_,""+g,C);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case gi:return g.key===B?u(f,_,g,C):null;case oo:return g.key===B?h(f,_,g,C):null;case Bn:return g=hl(g),p(f,_,g,C)}if(io(g)||Fa(g))return B!==null?null:y(f,_,g,C,null);if(typeof g.then=="function")return p(f,_,Ti(g),C);if(g.$$typeof===pn)return p(f,_,Ei(f,g),C);ki(f,g)}return null}function b(f,_,g,C,B){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return f=f.get(g)||null,s(_,f,""+C,B);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case gi:return f=f.get(C.key===null?g:C.key)||null,u(_,f,C,B);case oo:return f=f.get(C.key===null?g:C.key)||null,h(_,f,C,B);case Bn:return C=hl(C),b(f,_,g,C,B)}if(io(C)||Fa(C))return f=f.get(g)||null,y(_,f,C,B,null);if(typeof C.then=="function")return b(f,_,g,Ti(C),B);if(C.$$typeof===pn)return b(f,_,g,Ei(_,C),B);ki(_,C)}return null}function T(f,_,g,C){for(var B=null,X=null,N=_,H=_=0,G=null;N!==null&&H<g.length;H++){N.index>H?(G=N,N=null):G=N.sibling;var I=p(f,N,g[H],C);if(I===null){N===null&&(N=G);break}t&&N&&I.alternate===null&&e(f,N),_=o(I,_,H),X===null?B=I:X.sibling=I,X=I,N=G}if(H===g.length)return n(f,N),it&&yn(f,H),B;if(N===null){for(;H<g.length;H++)N=v(f,g[H],C),N!==null&&(_=o(N,_,H),X===null?B=N:X.sibling=N,X=N);return it&&yn(f,H),B}for(N=l(N);H<g.length;H++)G=b(N,f,H,g[H],C),G!==null&&(t&&G.alternate!==null&&N.delete(G.key===null?H:G.key),_=o(G,_,H),X===null?B=G:X.sibling=G,X=G);return t&&N.forEach(function(ke){return e(f,ke)}),it&&yn(f,H),B}function O(f,_,g,C){if(g==null)throw Error(w(151));for(var B=null,X=null,N=_,H=_=0,G=null,I=g.next();N!==null&&!I.done;H++,I=g.next()){N.index>H?(G=N,N=null):G=N.sibling;var ke=p(f,N,I.value,C);if(ke===null){N===null&&(N=G);break}t&&N&&ke.alternate===null&&e(f,N),_=o(ke,_,H),X===null?B=ke:X.sibling=ke,X=ke,N=G}if(I.done)return n(f,N),it&&yn(f,H),B;if(N===null){for(;!I.done;H++,I=g.next())I=v(f,I.value,C),I!==null&&(_=o(I,_,H),X===null?B=I:X.sibling=I,X=I);return it&&yn(f,H),B}for(N=l(N);!I.done;H++,I=g.next())I=b(N,f,H,I.value,C),I!==null&&(t&&I.alternate!==null&&N.delete(I.key===null?H:I.key),_=o(I,_,H),X===null?B=I:X.sibling=I,X=I);return t&&N.forEach(function(D){return e(f,D)}),it&&yn(f,H),B}function L(f,_,g,C){if(typeof g=="object"&&g!==null&&g.type===Fl&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case gi:t:{for(var B=g.key;_!==null;){if(_.key===B){if(B=g.type,B===Fl){if(_.tag===7){n(f,_.sibling),C=a(_,g.props.children),C.return=f,f=C;break t}}else if(_.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Bn&&hl(B)===_.type){n(f,_.sibling),C=a(_,g.props),to(C,g),C.return=f,f=C;break t}n(f,_);break}else e(f,_);_=_.sibling}g.type===Fl?(C=pl(g.props.children,f.mode,C,g.key),C.return=f,f=C):(C=Ri(g.type,g.key,g.props,null,f.mode,C),to(C,g),C.return=f,f=C)}return i(f);case oo:t:{for(B=g.key;_!==null;){if(_.key===B)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(f,_.sibling),C=a(_,g.children||[]),C.return=f,f=C;break t}else{n(f,_);break}else e(f,_);_=_.sibling}C=ju(g,f.mode,C),C.return=f,f=C}return i(f);case Bn:return g=hl(g),L(f,_,g,C)}if(io(g))return T(f,_,g,C);if(Fa(g)){if(B=Fa(g),typeof B!="function")throw Error(w(150));return g=B.call(g),O(f,_,g,C)}if(typeof g.then=="function")return L(f,_,Ti(g),C);if(g.$$typeof===pn)return L(f,_,Ei(f,g),C);ki(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,_!==null&&_.tag===6?(n(f,_.sibling),C=a(_,g),C.return=f,f=C):(n(f,_),C=Ru(g,f.mode,C),C.return=f,f=C),i(f)):n(f,_)}return function(f,_,g,C){try{zo=0;var B=L(f,_,g,C);return ma=null,B}catch(N){if(N===La||N===Ls)throw N;var X=be(29,N,null,f.mode);return X.lanes=C,X.return=f,X}}}var wl=j1(!0),X1=j1(!1),Yn=!1;function Cr(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ac(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Kn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Jn(t,e,n){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(ut&2)!==0){var a=l.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),l.pending=e,e=ns(t),N1(t,null,n),e}return zs(t,l,e,n),ns(t)}function ho(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var l=e.lanes;l&=t.pendingLanes,n|=l,e.lanes=n,o1(t,n)}}function Qu(t,e){var n=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var a=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};o===null?a=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?a=o=e:o=o.next=e}else a=o=e;n={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:l.shared,callbacks:l.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var zc=!1;function yo(){if(zc){var t=fa;if(t!==null)throw t}}function go(t,e,n,l){zc=!1;var a=t.updateQueue;Yn=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var u=s,h=u.next;u.next=null,i===null?o=h:i.next=h,i=u;var y=t.alternate;y!==null&&(y=y.updateQueue,s=y.lastBaseUpdate,s!==i&&(s===null?y.firstBaseUpdate=h:s.next=h,y.lastBaseUpdate=u))}if(o!==null){var v=a.baseState;i=0,y=h=u=null,s=o;do{var p=s.lane&-536870913,b=p!==s.lane;if(b?(at&p)===p:(l&p)===p){p!==0&&p===va&&(zc=!0),y!==null&&(y=y.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});t:{var T=t,O=s;p=e;var L=n;switch(O.tag){case 1:if(T=O.payload,typeof T=="function"){v=T.call(L,v,p);break t}v=T;break t;case 3:T.flags=T.flags&-65537|128;case 0:if(T=O.payload,p=typeof T=="function"?T.call(L,v,p):T,p==null)break t;v=Ct({},v,p);break t;case 2:Yn=!0}}p=s.callback,p!==null&&(t.flags|=64,b&&(t.flags|=8192),b=a.callbacks,b===null?a.callbacks=[p]:b.push(p))}else b={lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},y===null?(h=y=b,u=v):y=y.next=b,i|=p;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;b=s,s=b.next,b.next=null,a.lastBaseUpdate=b,a.shared.pending=null}}while(!0);y===null&&(u=v),a.baseState=u,a.firstBaseUpdate=h,a.lastBaseUpdate=y,o===null&&(a.shared.lanes=0),al|=i,t.lanes=i,t.memoizedState=v}}function Q1(t,e){if(typeof t!="function")throw Error(w(191,t));t.call(e)}function q1(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)Q1(n[t],e)}var xa=en(null),is=en(0);function I_(t,e){t=Mn,pt(is,t),pt(xa,e),Mn=t|e.baseLanes}function Lc(){pt(is,Mn),pt(xa,xa.current)}function Sr(){Mn=is.current,$t(xa),$t(is)}var Te=en(null),Ue=null;function Un(t){var e=t.alternate;pt(Lt,Lt.current&1),pt(Te,t),Ue===null&&(e===null||xa.current!==null||e.memoizedState!==null)&&(Ue=t)}function Nc(t){pt(Lt,Lt.current),pt(Te,t),Ue===null&&(Ue=t)}function Z1(t){t.tag===22?(pt(Lt,Lt.current),pt(Te,t),Ue===null&&(Ue=t)):Rn(t)}function Rn(){pt(Lt,Lt.current),pt(Te,Te.current)}function pe(t){$t(Te),Ue===t&&(Ue=null),$t(Lt)}var Lt=en(0);function ss(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Ic(n)||Fc(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var En=0,W=null,mt=null,Yt=null,us=!1,ha=!1,El=!1,cs=0,Lo=0,ya=null,uh=0;function At(){throw Error(w(321))}function wr(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ee(t[n],e[n]))return!1;return!0}function Er(t,e,n,l,a,o){return En=o,W=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Q.H=t===null||t.memoizedState===null?x0:Yr,El=!1,o=n(l,a),El=!1,ha&&(o=$1(e,n,l,a)),G1(t),o}function G1(t){Q.H=No;var e=mt!==null&&mt.next!==null;if(En=0,Yt=mt=W=null,us=!1,Lo=0,ya=null,e)throw Error(w(300));t===null||Rt||(t=t.dependencies,t!==null&&as(t)&&(Rt=!0))}function $1(t,e,n,l){W=t;var a=0;do{if(ha&&(ya=null),Lo=0,ha=!1,25<=a)throw Error(w(301));if(a+=1,Yt=mt=null,t.updateQueue!=null){var o=t.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}Q.H=C0,o=e(n,l)}while(ha);return o}function ch(){var t=Q.H,e=t.useState()[0];return e=typeof e.then=="function"?Go(e):e,t=t.useState()[0],(mt!==null?mt.memoizedState:null)!==t&&(W.flags|=1024),e}function Tr(){var t=cs!==0;return cs=0,t}function kr(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Mr(t){if(us){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}us=!1}En=0,Yt=mt=W=null,ha=!1,Lo=cs=0,ya=null}function ne(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Yt===null?W.memoizedState=Yt=t:Yt=Yt.next=t,Yt}function Nt(){if(mt===null){var t=W.alternate;t=t!==null?t.memoizedState:null}else t=mt.next;var e=Yt===null?W.memoizedState:Yt.next;if(e!==null)Yt=e,mt=t;else{if(t===null)throw W.alternate===null?Error(w(467)):Error(w(310));mt=t,t={memoizedState:mt.memoizedState,baseState:mt.baseState,baseQueue:mt.baseQueue,queue:mt.queue,next:null},Yt===null?W.memoizedState=Yt=t:Yt=Yt.next=t}return Yt}function Ns(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Go(t){var e=Lo;return Lo+=1,ya===null&&(ya=[]),t=R1(ya,t,e),e=W,(Yt===null?e.memoizedState:Yt.next)===null&&(e=e.alternate,Q.H=e===null||e.memoizedState===null?x0:Yr),t}function Os(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Go(t);if(t.$$typeof===pn)return Wt(t)}throw Error(w(438,String(t)))}function Ar(t){var e=null,n=W.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var l=W.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=Ns(),W.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),l=0;l<t;l++)n[l]=K5;return e.index++,n}function Tn(t,e){return typeof e=="function"?e(t):e}function Xi(t){var e=Nt();return zr(e,mt,t)}function zr(t,e,n){var l=t.queue;if(l===null)throw Error(w(311));l.lastRenderedReducer=n;var a=t.baseQueue,o=l.pending;if(o!==null){if(a!==null){var i=a.next;a.next=o.next,o.next=i}e.baseQueue=a=o,l.pending=null}if(o=t.baseState,a===null)t.memoizedState=o;else{e=a.next;var s=i=null,u=null,h=e,y=!1;do{var v=h.lane&-536870913;if(v!==h.lane?(at&v)===v:(En&v)===v){var p=h.revertLane;if(p===0)u!==null&&(u=u.next={lane:0,revertLane:0,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),v===va&&(y=!0);else if((En&p)===p){h=h.next,p===va&&(y=!0);continue}else v={lane:0,revertLane:h.revertLane,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},u===null?(s=u=v,i=o):u=u.next=v,W.lanes|=p,al|=p;v=h.action,El&&n(o,v),o=h.hasEagerState?h.eagerState:n(o,v)}else p={lane:v,revertLane:h.revertLane,gesture:h.gesture,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},u===null?(s=u=p,i=o):u=u.next=p,W.lanes|=v,al|=v;h=h.next}while(h!==null&&h!==e);if(u===null?i=o:u.next=s,!Ee(o,t.memoizedState)&&(Rt=!0,y&&(n=fa,n!==null)))throw n;t.memoizedState=o,t.baseState=i,t.baseQueue=u,l.lastRenderedState=o}return a===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function qu(t){var e=Nt(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var l=n.dispatch,a=n.pending,o=e.memoizedState;if(a!==null){n.pending=null;var i=a=a.next;do o=t(o,i.action),i=i.next;while(i!==a);Ee(o,e.memoizedState)||(Rt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,l]}function V1(t,e,n){var l=W,a=Nt(),o=it;if(o){if(n===void 0)throw Error(w(407));n=n()}else n=e();var i=!Ee((mt||a).memoizedState,n);if(i&&(a.memoizedState=n,Rt=!0),a=a.queue,Lr(W1.bind(null,l,a,t),[t]),a.getSnapshot!==e||i||Yt!==null&&Yt.memoizedState.tag&1){if(l.flags|=2048,Ca(9,{destroy:void 0},J1.bind(null,l,a,n,e),null),yt===null)throw Error(w(349));o||(En&127)!==0||K1(l,e,n)}return n}function K1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=W.updateQueue,e===null?(e=Ns(),W.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function J1(t,e,n,l){e.value=n,e.getSnapshot=l,I1(e)&&F1(t)}function W1(t,e,n){return n(function(){I1(e)&&F1(t)})}function I1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ee(t,n)}catch{return!0}}function F1(t){var e=zl(t,2);e!==null&&re(e,t,2)}function Oc(t){var e=ne();if(typeof t=="function"){var n=t;if(t=n(),El){Xn(!0);try{n()}finally{Xn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:t},e}function P1(t,e,n,l){return t.baseState=n,zr(t,mt,typeof l=="function"?l:Tn)}function rh(t,e,n,l,a){if(Bs(t))throw Error(w(485));if(t=e.action,t!==null){var o={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){o.listeners.push(i)}};Q.T!==null?n(!0):o.isTransition=!1,l(o),n=e.pending,n===null?(o.next=e.pending=o,t0(e,o)):(o.next=n.next,e.pending=n.next=o)}}function t0(t,e){var n=e.action,l=e.payload,a=t.state;if(e.isTransition){var o=Q.T,i={};Q.T=i;try{var s=n(a,l),u=Q.S;u!==null&&u(i,s),F_(t,e,s)}catch(h){Dc(t,e,h)}finally{o!==null&&i.types!==null&&(o.types=i.types),Q.T=o}}else try{o=n(a,l),F_(t,e,o)}catch(h){Dc(t,e,h)}}function F_(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){P_(t,e,l)},function(l){return Dc(t,e,l)}):P_(t,e,n)}function P_(t,e,n){e.status="fulfilled",e.value=n,e0(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,t0(t,n)))}function Dc(t,e,n){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=n,e0(e),e=e.next;while(e!==l)}t.action=null}function e0(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function n0(t,e){return e}function tf(t,e){if(it){var n=yt.formState;if(n!==null){t:{var l=W;if(it){if(xt){e:{for(var a=xt,o=He;a.nodeType!==8;){if(!o){a=null;break e}if(a=Re(a.nextSibling),a===null){a=null;break e}}o=a.data,a=o==="F!"||o==="F"?a:null}if(a){xt=Re(a.nextSibling),l=a.data==="F!";break t}}nl(l)}l=!1}l&&(e=n[0])}}return n=ne(),n.memoizedState=n.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n0,lastRenderedState:e},n.queue=l,n=p0.bind(null,W,l),l.dispatch=n,l=Oc(!1),o=Br.bind(null,W,!1,l.queue),l=ne(),a={state:e,dispatch:null,action:t,pending:null},l.queue=a,n=rh.bind(null,W,a,o,n),a.dispatch=n,l.memoizedState=t,[e,n,!1]}function ef(t){var e=Nt();return l0(e,mt,t)}function l0(t,e,n){if(e=zr(t,e,n0)[0],t=Xi(Tn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=Go(e)}catch(i){throw i===La?Ls:i}else l=e;e=Nt();var a=e.queue,o=a.dispatch;return n!==e.memoizedState&&(W.flags|=2048,Ca(9,{destroy:void 0},dh.bind(null,a,n),null)),[l,o,t]}function dh(t,e){t.action=e}function nf(t){var e=Nt(),n=mt;if(n!==null)return l0(e,n,t);Nt(),e=e.memoizedState,n=Nt();var l=n.queue.dispatch;return n.memoizedState=t,[e,l,!1]}function Ca(t,e,n,l){return t={tag:t,create:n,deps:l,inst:e,next:null},e=W.updateQueue,e===null&&(e=Ns(),W.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(l=n.next,n.next=t,t.next=l,e.lastEffect=t),t}function a0(){return Nt().memoizedState}function Qi(t,e,n,l){var a=ne();W.flags|=t,a.memoizedState=Ca(1|e,{destroy:void 0},n,l===void 0?null:l)}function Ds(t,e,n,l){var a=Nt();l=l===void 0?null:l;var o=a.memoizedState.inst;mt!==null&&l!==null&&wr(l,mt.memoizedState.deps)?a.memoizedState=Ca(e,o,n,l):(W.flags|=t,a.memoizedState=Ca(1|e,o,n,l))}function lf(t,e){Qi(8390656,8,t,e)}function Lr(t,e){Ds(2048,8,t,e)}function _h(t){W.flags|=4;var e=W.updateQueue;if(e===null)e=Ns(),W.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function o0(t){var e=Nt().memoizedState;return _h({ref:e,nextImpl:t}),function(){if((ut&2)!==0)throw Error(w(440));return e.impl.apply(void 0,arguments)}}function i0(t,e){return Ds(4,2,t,e)}function s0(t,e){return Ds(4,4,t,e)}function u0(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function c0(t,e,n){n=n!=null?n.concat([t]):null,Ds(4,4,u0.bind(null,e,t),n)}function Nr(){}function r0(t,e){var n=Nt();e=e===void 0?null:e;var l=n.memoizedState;return e!==null&&wr(e,l[1])?l[0]:(n.memoizedState=[t,e],t)}function d0(t,e){var n=Nt();e=e===void 0?null:e;var l=n.memoizedState;if(e!==null&&wr(e,l[1]))return l[0];if(l=t(),El){Xn(!0);try{t()}finally{Xn(!1)}}return n.memoizedState=[l,e],l}function Or(t,e,n){return n===void 0||(En&1073741824)!==0&&(at&261930)===0?t.memoizedState=e:(t.memoizedState=n,t=P0(),W.lanes|=t,al|=t,n)}function _0(t,e,n,l){return Ee(n,e)?n:xa.current!==null?(t=Or(t,n,l),Ee(t,e)||(Rt=!0),t):(En&42)===0||(En&1073741824)!==0&&(at&261930)===0?(Rt=!0,t.memoizedState=n):(t=P0(),W.lanes|=t,al|=t,e)}function f0(t,e,n,l,a){var o=ct.p;ct.p=o!==0&&8>o?o:8;var i=Q.T,s={};Q.T=s,Br(t,!1,e,n);try{var u=a(),h=Q.S;if(h!==null&&h(s,u),u!==null&&typeof u=="object"&&typeof u.then=="function"){var y=sh(u,l);po(t,e,y,we(t))}else po(t,e,l,we(t))}catch(v){po(t,e,{then:function(){},status:"rejected",reason:v},we())}finally{ct.p=o,i!==null&&s.types!==null&&(i.types=s.types),Q.T=i}}function fh(){}function Bc(t,e,n,l){if(t.tag!==5)throw Error(w(476));var a=m0(t).queue;f0(t,a,e,gl,n===null?fh:function(){return h0(t),n(l)})}function m0(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:gl,baseState:gl,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:gl},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function h0(t){var e=m0(t);e.next===null&&(e=t.alternate.memoizedState),po(t,e.next.queue,{},we())}function Dr(){return Wt(Bo)}function y0(){return Nt().memoizedState}function g0(){return Nt().memoizedState}function mh(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=we();t=Kn(n);var l=Jn(e,t,n);l!==null&&(re(l,e,n),ho(l,e,n)),e={cache:br()},t.payload=e;return}e=e.return}}function hh(t,e,n){var l=we();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Bs(t)?b0(e,n):(n=hr(t,e,n,l),n!==null&&(re(n,t,l),v0(n,e,l)))}function p0(t,e,n){var l=we();po(t,e,n,l)}function po(t,e,n,l){var a={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bs(t))b0(e,a);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var i=e.lastRenderedState,s=o(i,n);if(a.hasEagerState=!0,a.eagerState=s,Ee(s,i))return zs(t,e,a,0),yt===null&&As(),!1}catch{}if(n=hr(t,e,a,l),n!==null)return re(n,t,l),v0(n,e,l),!0}return!1}function Br(t,e,n,l){if(l={lane:2,revertLane:Zr(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Bs(t)){if(e)throw Error(w(479))}else e=hr(t,n,l,2),e!==null&&re(e,t,2)}function Bs(t){var e=t.alternate;return t===W||e!==null&&e===W}function b0(t,e){ha=us=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function v0(t,e,n){if((n&4194048)!==0){var l=e.lanes;l&=t.pendingLanes,n|=l,e.lanes=n,o1(t,n)}}var No={readContext:Wt,use:Os,useCallback:At,useContext:At,useEffect:At,useImperativeHandle:At,useLayoutEffect:At,useInsertionEffect:At,useMemo:At,useReducer:At,useRef:At,useState:At,useDebugValue:At,useDeferredValue:At,useTransition:At,useSyncExternalStore:At,useId:At,useHostTransitionStatus:At,useFormState:At,useActionState:At,useOptimistic:At,useMemoCache:At,useCacheRefresh:At};No.useEffectEvent=At;var x0={readContext:Wt,use:Os,useCallback:function(t,e){return ne().memoizedState=[t,e===void 0?null:e],t},useContext:Wt,useEffect:lf,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Qi(4194308,4,u0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Qi(4194308,4,t,e)},useInsertionEffect:function(t,e){Qi(4,2,t,e)},useMemo:function(t,e){var n=ne();e=e===void 0?null:e;var l=t();if(El){Xn(!0);try{t()}finally{Xn(!1)}}return n.memoizedState=[l,e],l},useReducer:function(t,e,n){var l=ne();if(n!==void 0){var a=n(e);if(El){Xn(!0);try{n(e)}finally{Xn(!1)}}}else a=e;return l.memoizedState=l.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},l.queue=t,t=t.dispatch=hh.bind(null,W,t),[l.memoizedState,t]},useRef:function(t){var e=ne();return t={current:t},e.memoizedState=t},useState:function(t){t=Oc(t);var e=t.queue,n=p0.bind(null,W,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:Nr,useDeferredValue:function(t,e){var n=ne();return Or(n,t,e)},useTransition:function(){var t=Oc(!1);return t=f0.bind(null,W,t.queue,!0,!1),ne().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var l=W,a=ne();if(it){if(n===void 0)throw Error(w(407));n=n()}else{if(n=e(),yt===null)throw Error(w(349));(at&127)!==0||K1(l,e,n)}a.memoizedState=n;var o={value:n,getSnapshot:e};return a.queue=o,lf(W1.bind(null,l,o,t),[t]),l.flags|=2048,Ca(9,{destroy:void 0},J1.bind(null,l,o,n,e),null),n},useId:function(){var t=ne(),e=yt.identifierPrefix;if(it){var n=Fe,l=Ie;n=(l&~(1<<32-Se(l)-1)).toString(32)+n,e="_"+e+"R_"+n,n=cs++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=uh++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Dr,useFormState:tf,useActionState:tf,useOptimistic:function(t){var e=ne();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=Br.bind(null,W,!0,n),n.dispatch=e,[t,e]},useMemoCache:Ar,useCacheRefresh:function(){return ne().memoizedState=mh.bind(null,W)},useEffectEvent:function(t){var e=ne(),n={impl:t};return e.memoizedState=n,function(){if((ut&2)!==0)throw Error(w(440));return n.impl.apply(void 0,arguments)}}},Yr={readContext:Wt,use:Os,useCallback:r0,useContext:Wt,useEffect:Lr,useImperativeHandle:c0,useInsertionEffect:i0,useLayoutEffect:s0,useMemo:d0,useReducer:Xi,useRef:a0,useState:function(){return Xi(Tn)},useDebugValue:Nr,useDeferredValue:function(t,e){var n=Nt();return _0(n,mt.memoizedState,t,e)},useTransition:function(){var t=Xi(Tn)[0],e=Nt().memoizedState;return[typeof t=="boolean"?t:Go(t),e]},useSyncExternalStore:V1,useId:y0,useHostTransitionStatus:Dr,useFormState:ef,useActionState:ef,useOptimistic:function(t,e){var n=Nt();return P1(n,mt,t,e)},useMemoCache:Ar,useCacheRefresh:g0};Yr.useEffectEvent=o0;var C0={readContext:Wt,use:Os,useCallback:r0,useContext:Wt,useEffect:Lr,useImperativeHandle:c0,useInsertionEffect:i0,useLayoutEffect:s0,useMemo:d0,useReducer:qu,useRef:a0,useState:function(){return qu(Tn)},useDebugValue:Nr,useDeferredValue:function(t,e){var n=Nt();return mt===null?Or(n,t,e):_0(n,mt.memoizedState,t,e)},useTransition:function(){var t=qu(Tn)[0],e=Nt().memoizedState;return[typeof t=="boolean"?t:Go(t),e]},useSyncExternalStore:V1,useId:y0,useHostTransitionStatus:Dr,useFormState:nf,useActionState:nf,useOptimistic:function(t,e){var n=Nt();return mt!==null?P1(n,mt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:Ar,useCacheRefresh:g0};C0.useEffectEvent=o0;function Zu(t,e,n,l){e=t.memoizedState,n=n(l,e),n=n==null?e:Ct({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Yc={enqueueSetState:function(t,e,n){t=t._reactInternals;var l=we(),a=Kn(l);a.payload=e,n!=null&&(a.callback=n),e=Jn(t,a,l),e!==null&&(re(e,t,l),ho(e,t,l))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var l=we(),a=Kn(l);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=Jn(t,a,l),e!==null&&(re(e,t,l),ho(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=we(),l=Kn(n);l.tag=2,e!=null&&(l.callback=e),e=Jn(t,l,n),e!==null&&(re(e,t,n),ho(e,t,n))}};function af(t,e,n,l,a,o,i){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,o,i):e.prototype&&e.prototype.isPureReactComponent?!ko(n,l)||!ko(a,o):!0}function of(t,e,n,l){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,l),e.state!==t&&Yc.enqueueReplaceState(e,e.state,null)}function Tl(t,e){var n=e;if("ref"in e){n={};for(var l in e)l!=="ref"&&(n[l]=e[l])}if(t=t.defaultProps){n===e&&(n=Ct({},n));for(var a in t)n[a]===void 0&&(n[a]=t[a])}return n}function S0(t){es(t)}function w0(t){console.error(t)}function E0(t){es(t)}function rs(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function sf(t,e,n){try{var l=t.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Hc(t,e,n){return n=Kn(n),n.tag=3,n.payload={element:null},n.callback=function(){rs(t,e)},n}function T0(t){return t=Kn(t),t.tag=3,t}function k0(t,e,n,l){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var o=l.value;t.payload=function(){return a(o)},t.callback=function(){sf(e,n,l)}}var i=n.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){sf(e,n,l),typeof a!="function"&&(Wn===null?Wn=new Set([this]):Wn.add(this));var s=l.stack;this.componentDidCatch(l.value,{componentStack:s!==null?s:""})})}function yh(t,e,n,l,a){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=n.alternate,e!==null&&za(e,n,a,!0),n=Te.current,n!==null){switch(n.tag){case 31:case 13:return Ue===null?hs():n.alternate===null&&zt===0&&(zt=3),n.flags&=-257,n.flags|=65536,n.lanes=a,l===os?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([l]):e.add(l),ec(t,l,a)),!1;case 22:return n.flags|=65536,l===os?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([l]):n.add(l)),ec(t,l,a)),!1}throw Error(w(435,n.tag))}return ec(t,l,a),hs(),!1}if(it)return e=Te.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=a,l!==wc&&(t=Error(w(422),{cause:l}),Ao(Ye(t,n)))):(l!==wc&&(e=Error(w(423),{cause:l}),Ao(Ye(e,n))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,l=Ye(l,n),a=Hc(t.stateNode,l,a),Qu(t,a),zt!==4&&(zt=2)),!1;var o=Error(w(520),{cause:l});if(o=Ye(o,n),xo===null?xo=[o]:xo.push(o),zt!==4&&(zt=2),e===null)return!0;l=Ye(l,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=a&-a,n.lanes|=t,t=Hc(n.stateNode,l,t),Qu(n,t),!1;case 1:if(e=n.type,o=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(Wn===null||!Wn.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=T0(a),k0(a,t,n,l),Qu(n,a),!1}n=n.return}while(n!==null);return!1}var Hr=Error(w(461)),Rt=!1;function Vt(t,e,n,l){e.child=t===null?X1(e,null,n,l):wl(e,t.child,n,l)}function uf(t,e,n,l,a){n=n.render;var o=e.ref;if("ref"in l){var i={};for(var s in l)s!=="ref"&&(i[s]=l[s])}else i=l;return Sl(e),l=Er(t,e,n,i,o,a),s=Tr(),t!==null&&!Rt?(kr(t,e,a),kn(t,e,a)):(it&&s&&gr(e),e.flags|=1,Vt(t,e,l,a),e.child)}function cf(t,e,n,l,a){if(t===null){var o=n.type;return typeof o=="function"&&!yr(o)&&o.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=o,M0(t,e,o,l,a)):(t=Ri(n.type,null,l,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!Ur(t,a)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:ko,n(i,l)&&t.ref===e.ref)return kn(t,e,a)}return e.flags|=1,t=xn(o,l),t.ref=e.ref,t.return=e,e.child=t}function M0(t,e,n,l,a){if(t!==null){var o=t.memoizedProps;if(ko(o,l)&&t.ref===e.ref)if(Rt=!1,e.pendingProps=l=o,Ur(t,a))(t.flags&131072)!==0&&(Rt=!0);else return e.lanes=t.lanes,kn(t,e,a)}return Uc(t,e,n,l,a)}function A0(t,e,n,l){var a=l.children,o=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((e.flags&128)!==0){if(o=o!==null?o.baseLanes|n:n,t!==null){for(l=e.child=t.child,a=0;l!==null;)a=a|l.lanes|l.childLanes,l=l.sibling;l=a&~o}else l=0,e.child=null;return rf(t,e,o,n,l)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&ji(e,o!==null?o.cachePool:null),o!==null?I_(e,o):Lc(),Z1(e);else return l=e.lanes=536870912,rf(t,e,o!==null?o.baseLanes|n:n,n,l)}else o!==null?(ji(e,o.cachePool),I_(e,o),Rn(e),e.memoizedState=null):(t!==null&&ji(e,null),Lc(),Rn(e));return Vt(t,e,a,n),e.child}function uo(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function rf(t,e,n,l,a){var o=vr();return o=o===null?null:{parent:Ut._currentValue,pool:o},e.memoizedState={baseLanes:n,cachePool:o},t!==null&&ji(e,null),Lc(),Z1(e),t!==null&&za(t,e,l,!0),e.childLanes=a,null}function qi(t,e){return e=ds({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function df(t,e,n){return wl(e,t.child,null,n),t=qi(e,e.pendingProps),t.flags|=2,pe(e),e.memoizedState=null,t}function gh(t,e,n){var l=e.pendingProps,a=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(it){if(l.mode==="hidden")return t=qi(e,l),e.lanes=536870912,uo(null,t);if(Nc(e),(t=xt)?(t=xm(t,He),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:el!==null?{id:Ie,overflow:Fe}:null,retryLane:536870912,hydrationErrors:null},n=D1(t),n.return=e,e.child=n,Jt=e,xt=null)):t=null,t===null)throw nl(e);return e.lanes=536870912,null}return qi(e,l)}var o=t.memoizedState;if(o!==null){var i=o.dehydrated;if(Nc(e),a)if(e.flags&256)e.flags&=-257,e=df(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(w(558));else if(Rt||za(t,e,n,!1),a=(n&t.childLanes)!==0,Rt||a){if(l=yt,l!==null&&(i=i1(l,n),i!==0&&i!==o.retryLane))throw o.retryLane=i,zl(t,i),re(l,t,i),Hr;hs(),e=df(t,e,n)}else t=o.treeContext,xt=Re(i.nextSibling),Jt=e,it=!0,Vn=null,He=!1,t!==null&&Y1(e,t),e=qi(e,l),e.flags|=4096;return e}return t=xn(t.child,{mode:l.mode,children:l.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Zi(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(w(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function Uc(t,e,n,l,a){return Sl(e),n=Er(t,e,n,l,void 0,a),l=Tr(),t!==null&&!Rt?(kr(t,e,a),kn(t,e,a)):(it&&l&&gr(e),e.flags|=1,Vt(t,e,n,a),e.child)}function _f(t,e,n,l,a,o){return Sl(e),e.updateQueue=null,n=$1(e,l,n,a),G1(t),l=Tr(),t!==null&&!Rt?(kr(t,e,o),kn(t,e,o)):(it&&l&&gr(e),e.flags|=1,Vt(t,e,n,o),e.child)}function ff(t,e,n,l,a){if(Sl(e),e.stateNode===null){var o=ia,i=n.contextType;typeof i=="object"&&i!==null&&(o=Wt(i)),o=new n(l,o),e.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Yc,e.stateNode=o,o._reactInternals=e,o=e.stateNode,o.props=l,o.state=e.memoizedState,o.refs={},Cr(e),i=n.contextType,o.context=typeof i=="object"&&i!==null?Wt(i):ia,o.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Zu(e,n,i,l),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(i=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),i!==o.state&&Yc.enqueueReplaceState(o,o.state,null),go(e,l,o,a),yo(),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(t===null){o=e.stateNode;var s=e.memoizedProps,u=Tl(n,s);o.props=u;var h=o.context,y=n.contextType;i=ia,typeof y=="object"&&y!==null&&(i=Wt(y));var v=n.getDerivedStateFromProps;y=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function",s=e.pendingProps!==s,y||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s||h!==i)&&of(e,o,l,i),Yn=!1;var p=e.memoizedState;o.state=p,go(e,l,o,a),yo(),h=e.memoizedState,s||p!==h||Yn?(typeof v=="function"&&(Zu(e,n,v,l),h=e.memoizedState),(u=Yn||af(e,n,u,l,p,h,i))?(y||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=h),o.props=l,o.state=h,o.context=i,l=u):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{o=e.stateNode,Ac(t,e),i=e.memoizedProps,y=Tl(n,i),o.props=y,v=e.pendingProps,p=o.context,h=n.contextType,u=ia,typeof h=="object"&&h!==null&&(u=Wt(h)),s=n.getDerivedStateFromProps,(h=typeof s=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==v||p!==u)&&of(e,o,l,u),Yn=!1,p=e.memoizedState,o.state=p,go(e,l,o,a),yo();var b=e.memoizedState;i!==v||p!==b||Yn||t!==null&&t.dependencies!==null&&as(t.dependencies)?(typeof s=="function"&&(Zu(e,n,s,l),b=e.memoizedState),(y=Yn||af(e,n,y,l,p,b,u)||t!==null&&t.dependencies!==null&&as(t.dependencies))?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(l,b,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(l,b,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||i===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=b),o.props=l,o.state=b,o.context=u,l=y):(typeof o.componentDidUpdate!="function"||i===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),l=!1)}return o=l,Zi(t,e),l=(e.flags&128)!==0,o||l?(o=e.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:o.render(),e.flags|=1,t!==null&&l?(e.child=wl(e,t.child,null,a),e.child=wl(e,null,n,a)):Vt(t,e,n,a),e.memoizedState=o.state,t=e.child):t=kn(t,e,a),t}function mf(t,e,n,l){return Cl(),e.flags|=256,Vt(t,e,n,l),e.child}var Gu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $u(t){return{baseLanes:t,cachePool:U1()}}function Vu(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=ve),t}function z0(t,e,n){var l=e.pendingProps,a=!1,o=(e.flags&128)!==0,i;if((i=o)||(i=t!==null&&t.memoizedState===null?!1:(Lt.current&2)!==0),i&&(a=!0,e.flags&=-129),i=(e.flags&32)!==0,e.flags&=-33,t===null){if(it){if(a?Un(e):Rn(e),(t=xt)?(t=xm(t,He),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:el!==null?{id:Ie,overflow:Fe}:null,retryLane:536870912,hydrationErrors:null},n=D1(t),n.return=e,e.child=n,Jt=e,xt=null)):t=null,t===null)throw nl(e);return Fc(t)?e.lanes=32:e.lanes=536870912,null}var s=l.children;return l=l.fallback,a?(Rn(e),a=e.mode,s=ds({mode:"hidden",children:s},a),l=pl(l,a,n,null),s.return=e,l.return=e,s.sibling=l,e.child=s,l=e.child,l.memoizedState=$u(n),l.childLanes=Vu(t,i,n),e.memoizedState=Gu,uo(null,l)):(Un(e),Rc(e,s))}var u=t.memoizedState;if(u!==null&&(s=u.dehydrated,s!==null)){if(o)e.flags&256?(Un(e),e.flags&=-257,e=Ku(t,e,n)):e.memoizedState!==null?(Rn(e),e.child=t.child,e.flags|=128,e=null):(Rn(e),s=l.fallback,a=e.mode,l=ds({mode:"visible",children:l.children},a),s=pl(s,a,n,null),s.flags|=2,l.return=e,s.return=e,l.sibling=s,e.child=l,wl(e,t.child,null,n),l=e.child,l.memoizedState=$u(n),l.childLanes=Vu(t,i,n),e.memoizedState=Gu,e=uo(null,l));else if(Un(e),Fc(s)){if(i=s.nextSibling&&s.nextSibling.dataset,i)var h=i.dgst;i=h,l=Error(w(419)),l.stack="",l.digest=i,Ao({value:l,source:null,stack:null}),e=Ku(t,e,n)}else if(Rt||za(t,e,n,!1),i=(n&t.childLanes)!==0,Rt||i){if(i=yt,i!==null&&(l=i1(i,n),l!==0&&l!==u.retryLane))throw u.retryLane=l,zl(t,l),re(i,t,l),Hr;Ic(s)||hs(),e=Ku(t,e,n)}else Ic(s)?(e.flags|=192,e.child=t.child,e=null):(t=u.treeContext,xt=Re(s.nextSibling),Jt=e,it=!0,Vn=null,He=!1,t!==null&&Y1(e,t),e=Rc(e,l.children),e.flags|=4096);return e}return a?(Rn(e),s=l.fallback,a=e.mode,u=t.child,h=u.sibling,l=xn(u,{mode:"hidden",children:l.children}),l.subtreeFlags=u.subtreeFlags&65011712,h!==null?s=xn(h,s):(s=pl(s,a,n,null),s.flags|=2),s.return=e,l.return=e,l.sibling=s,e.child=l,uo(null,l),l=e.child,s=t.child.memoizedState,s===null?s=$u(n):(a=s.cachePool,a!==null?(u=Ut._currentValue,a=a.parent!==u?{parent:u,pool:u}:a):a=U1(),s={baseLanes:s.baseLanes|n,cachePool:a}),l.memoizedState=s,l.childLanes=Vu(t,i,n),e.memoizedState=Gu,uo(t.child,l)):(Un(e),n=t.child,t=n.sibling,n=xn(n,{mode:"visible",children:l.children}),n.return=e,n.sibling=null,t!==null&&(i=e.deletions,i===null?(e.deletions=[t],e.flags|=16):i.push(t)),e.child=n,e.memoizedState=null,n)}function Rc(t,e){return e=ds({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function ds(t,e){return t=be(22,t,null,e),t.lanes=0,t}function Ku(t,e,n){return wl(e,t.child,null,n),t=Rc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hf(t,e,n){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e),Tc(t.return,e,n)}function Ju(t,e,n,l,a,o){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:a,treeForkCount:o}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=n,i.tailMode=a,i.treeForkCount=o)}function L0(t,e,n){var l=e.pendingProps,a=l.revealOrder,o=l.tail;l=l.children;var i=Lt.current,s=(i&2)!==0;if(s?(i=i&1|2,e.flags|=128):i&=1,pt(Lt,i),Vt(t,e,l,n),l=it?Mo:0,!s&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hf(t,n,e);else if(t.tag===19)hf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(a){case"forwards":for(n=e.child,a=null;n!==null;)t=n.alternate,t!==null&&ss(t)===null&&(a=n),n=n.sibling;n=a,n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null),Ju(e,!1,a,n,o,l);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&ss(t)===null){e.child=a;break}t=a.sibling,a.sibling=n,n=a,a=t}Ju(e,!0,n,null,o,l);break;case"together":Ju(e,!1,null,null,void 0,l);break;default:e.memoizedState=null}return e.child}function kn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),al|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(za(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(w(153));if(e.child!==null){for(t=e.child,n=xn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=xn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ur(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&as(t)))}function ph(t,e,n){switch(e.tag){case 3:Ii(e,e.stateNode.containerInfo),Hn(e,Ut,t.memoizedState.cache),Cl();break;case 27:case 5:fc(e);break;case 4:Ii(e,e.stateNode.containerInfo);break;case 10:Hn(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Nc(e),null;break;case 13:var l=e.memoizedState;if(l!==null)return l.dehydrated!==null?(Un(e),e.flags|=128,null):(n&e.child.childLanes)!==0?z0(t,e,n):(Un(e),t=kn(t,e,n),t!==null?t.sibling:null);Un(e);break;case 19:var a=(t.flags&128)!==0;if(l=(n&e.childLanes)!==0,l||(za(t,e,n,!1),l=(n&e.childLanes)!==0),a){if(l)return L0(t,e,n);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),pt(Lt,Lt.current),l)break;return null;case 22:return e.lanes=0,A0(t,e,n,e.pendingProps);case 24:Hn(e,Ut,t.memoizedState.cache)}return kn(t,e,n)}function N0(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Rt=!0;else{if(!Ur(t,n)&&(e.flags&128)===0)return Rt=!1,ph(t,e,n);Rt=(t.flags&131072)!==0}else Rt=!1,it&&(e.flags&1048576)!==0&&B1(e,Mo,e.index);switch(e.lanes=0,e.tag){case 16:t:{var l=e.pendingProps;if(t=hl(e.elementType),e.type=t,typeof t=="function")yr(t)?(l=Tl(t,l),e.tag=1,e=ff(null,e,t,l,n)):(e.tag=0,e=Uc(null,e,t,l,n));else{if(t!=null){var a=t.$$typeof;if(a===nr){e.tag=11,e=uf(null,e,t,l,n);break t}else if(a===lr){e.tag=14,e=cf(null,e,t,l,n);break t}}throw e=dc(t)||t,Error(w(306,e,""))}}return e;case 0:return Uc(t,e,e.type,e.pendingProps,n);case 1:return l=e.type,a=Tl(l,e.pendingProps),ff(t,e,l,a,n);case 3:t:{if(Ii(e,e.stateNode.containerInfo),t===null)throw Error(w(387));l=e.pendingProps;var o=e.memoizedState;a=o.element,Ac(t,e),go(e,l,null,n);var i=e.memoizedState;if(l=i.cache,Hn(e,Ut,l),l!==o.cache&&kc(e,[Ut],n,!0),yo(),l=i.element,o.isDehydrated)if(o={element:l,isDehydrated:!1,cache:i.cache},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){e=mf(t,e,l,n);break t}else if(l!==a){a=Ye(Error(w(424)),e),Ao(a),e=mf(t,e,l,n);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,xt=Re(t.firstChild),Jt=e,it=!0,Vn=null,He=!0,n=X1(e,null,l,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cl(),l===a){e=kn(t,e,n);break t}Vt(t,e,l,n)}e=e.child}return e;case 26:return Zi(t,e),t===null?(n=Hf(e.type,null,e.pendingProps,null))?e.memoizedState=n:it||(n=e.type,t=e.pendingProps,l=bs($n.current).createElement(n),l[Kt]=e,l[de]=t,It(l,n,t),Gt(l),e.stateNode=l):e.memoizedState=Hf(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return fc(e),t===null&&it&&(l=e.stateNode=Cm(e.type,e.pendingProps,$n.current),Jt=e,He=!0,a=xt,il(e.type)?(Pc=a,xt=Re(l.firstChild)):xt=a),Vt(t,e,e.pendingProps.children,n),Zi(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&it&&((a=l=xt)&&(l=$h(l,e.type,e.pendingProps,He),l!==null?(e.stateNode=l,Jt=e,xt=Re(l.firstChild),He=!1,a=!0):a=!1),a||nl(e)),fc(e),a=e.type,o=e.pendingProps,i=t!==null?t.memoizedProps:null,l=o.children,Jc(a,o)?l=null:i!==null&&Jc(a,i)&&(e.flags|=32),e.memoizedState!==null&&(a=Er(t,e,ch,null,null,n),Bo._currentValue=a),Zi(t,e),Vt(t,e,l,n),e.child;case 6:return t===null&&it&&((t=n=xt)&&(n=Vh(n,e.pendingProps,He),n!==null?(e.stateNode=n,Jt=e,xt=null,t=!0):t=!1),t||nl(e)),null;case 13:return z0(t,e,n);case 4:return Ii(e,e.stateNode.containerInfo),l=e.pendingProps,t===null?e.child=wl(e,null,l,n):Vt(t,e,l,n),e.child;case 11:return uf(t,e,e.type,e.pendingProps,n);case 7:return Vt(t,e,e.pendingProps,n),e.child;case 8:return Vt(t,e,e.pendingProps.children,n),e.child;case 12:return Vt(t,e,e.pendingProps.children,n),e.child;case 10:return l=e.pendingProps,Hn(e,e.type,l.value),Vt(t,e,l.children,n),e.child;case 9:return a=e.type._context,l=e.pendingProps.children,Sl(e),a=Wt(a),l=l(a),e.flags|=1,Vt(t,e,l,n),e.child;case 14:return cf(t,e,e.type,e.pendingProps,n);case 15:return M0(t,e,e.type,e.pendingProps,n);case 19:return L0(t,e,n);case 31:return gh(t,e,n);case 22:return A0(t,e,n,e.pendingProps);case 24:return Sl(e),l=Wt(Ut),t===null?(a=vr(),a===null&&(a=yt,o=br(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),e.memoizedState={parent:l,cache:a},Cr(e),Hn(e,Ut,a)):((t.lanes&n)!==0&&(Ac(t,e),go(e,null,null,n),yo()),a=t.memoizedState,o=e.memoizedState,a.parent!==l?(a={parent:l,cache:l},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),Hn(e,Ut,l)):(l=o.cache,Hn(e,Ut,l),l!==a.cache&&kc(e,[Ut],n,!0))),Vt(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(w(156,e.tag))}function _n(t){t.flags|=4}function Wu(t,e,n,l,a){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(a&335544128)===a)if(t.stateNode.complete)t.flags|=8192;else if(nm())t.flags|=8192;else throw vl=os,xr}else t.flags&=-16777217}function yf(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Em(e))if(nm())t.flags|=8192;else throw vl=os,xr}function Mi(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?l1():536870912,t.lanes|=e,Sa|=e)}function eo(t,e){if(!it)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,l=0;if(e)for(var a=t.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags&65011712,l|=a.flags&65011712,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=l,t.childLanes=n,e}function bh(t,e,n){var l=e.pendingProps;switch(pr(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vt(e),null;case 1:return vt(e),null;case 3:return n=e.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Cn(Ut),ga(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Kl(e)?_n(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Xu())),vt(e),null;case 26:var a=e.type,o=e.memoizedState;return t===null?(_n(e),o!==null?(vt(e),yf(e,o)):(vt(e),Wu(e,a,null,l,n))):o?o!==t.memoizedState?(_n(e),vt(e),yf(e,o)):(vt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==l&&_n(e),vt(e),Wu(e,a,t,l,n)),null;case 27:if(Fi(e),n=$n.current,a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&_n(e);else{if(!l){if(e.stateNode===null)throw Error(w(166));return vt(e),null}t=tn.current,Kl(e)?Z_(e,t):(t=Cm(a,l,n),e.stateNode=t,_n(e))}return vt(e),null;case 5:if(Fi(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&_n(e);else{if(!l){if(e.stateNode===null)throw Error(w(166));return vt(e),null}if(o=tn.current,Kl(e))Z_(e,o);else{var i=bs($n.current);switch(o){case 1:o=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:o=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":o=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":o=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":o=i.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof l.is=="string"?i.createElement("select",{is:l.is}):i.createElement("select"),l.multiple?o.multiple=!0:l.size&&(o.size=l.size);break;default:o=typeof l.is=="string"?i.createElement(a,{is:l.is}):i.createElement(a)}}o[Kt]=e,o[de]=l;t:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)o.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=o;t:switch(It(o,a,l),a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&_n(e)}}return vt(e),Wu(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==l&&_n(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(w(166));if(t=$n.current,Kl(e)){if(t=e.stateNode,n=e.memoizedProps,l=null,a=Jt,a!==null)switch(a.tag){case 27:case 5:l=a.memoizedProps}t[Kt]=e,t=!!(t.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||pm(t.nodeValue,n)),t||nl(e,!0)}else t=bs(t).createTextNode(l),t[Kt]=e,e.stateNode=t}return vt(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(l=Kl(e),n!==null){if(t===null){if(!l)throw Error(w(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(557));t[Kt]=e}else Cl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;vt(e),t=!1}else n=Xu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(pe(e),e):(pe(e),null);if((e.flags&128)!==0)throw Error(w(558))}return vt(e),null;case 13:if(l=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=Kl(e),l!==null&&l.dehydrated!==null){if(t===null){if(!a)throw Error(w(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(w(317));a[Kt]=e}else Cl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;vt(e),a=!1}else a=Xu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(pe(e),e):(pe(e),null)}return pe(e),(e.flags&128)!==0?(e.lanes=n,e):(n=l!==null,t=t!==null&&t.memoizedState!==null,n&&(l=e.child,a=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(a=l.alternate.memoizedState.cachePool.pool),o=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(o=l.memoizedState.cachePool.pool),o!==a&&(l.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),Mi(e,e.updateQueue),vt(e),null);case 4:return ga(),t===null&&Gr(e.stateNode.containerInfo),vt(e),null;case 10:return Cn(e.type),vt(e),null;case 19:if($t(Lt),l=e.memoizedState,l===null)return vt(e),null;if(a=(e.flags&128)!==0,o=l.rendering,o===null)if(a)eo(l,!1);else{if(zt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=ss(t),o!==null){for(e.flags|=128,eo(l,!1),t=o.updateQueue,e.updateQueue=t,Mi(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)O1(n,t),n=n.sibling;return pt(Lt,Lt.current&1|2),it&&yn(e,l.treeForkCount),e.child}t=t.sibling}l.tail!==null&&xe()>fs&&(e.flags|=128,a=!0,eo(l,!1),e.lanes=4194304)}else{if(!a)if(t=ss(o),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,Mi(e,t),eo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!it)return vt(e),null}else 2*xe()-l.renderingStartTime>fs&&n!==536870912&&(e.flags|=128,a=!0,eo(l,!1),e.lanes=4194304);l.isBackwards?(o.sibling=e.child,e.child=o):(t=l.last,t!==null?t.sibling=o:e.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=xe(),t.sibling=null,n=Lt.current,pt(Lt,a?n&1|2:n&1),it&&yn(e,l.treeForkCount),t):(vt(e),null);case 22:case 23:return pe(e),Sr(),l=e.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(n&536870912)!==0&&(e.flags&128)===0&&(vt(e),e.subtreeFlags&6&&(e.flags|=8192)):vt(e),n=e.updateQueue,n!==null&&Mi(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==n&&(e.flags|=2048),t!==null&&$t(bl),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Cn(Ut),vt(e),null;case 25:return null;case 30:return null}throw Error(w(156,e.tag))}function vh(t,e){switch(pr(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Cn(Ut),ga(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Fi(e),null;case 31:if(e.memoizedState!==null){if(pe(e),e.alternate===null)throw Error(w(340));Cl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(pe(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(w(340));Cl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return $t(Lt),null;case 4:return ga(),null;case 10:return Cn(e.type),null;case 22:case 23:return pe(e),Sr(),t!==null&&$t(bl),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Cn(Ut),null;case 25:return null;default:return null}}function O0(t,e){switch(pr(e),e.tag){case 3:Cn(Ut),ga();break;case 26:case 27:case 5:Fi(e);break;case 4:ga();break;case 31:e.memoizedState!==null&&pe(e);break;case 13:pe(e);break;case 19:$t(Lt);break;case 10:Cn(e.type);break;case 22:case 23:pe(e),Sr(),t!==null&&$t(bl);break;case 24:Cn(Ut)}}function $o(t,e){try{var n=e.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var a=l.next;n=a;do{if((n.tag&t)===t){l=void 0;var o=n.create,i=n.inst;l=o(),i.destroy=l}n=n.next}while(n!==a)}}catch(s){_t(e,e.return,s)}}function ll(t,e,n){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var o=a.next;l=o;do{if((l.tag&t)===t){var i=l.inst,s=i.destroy;if(s!==void 0){i.destroy=void 0,a=e;var u=n,h=s;try{h()}catch(y){_t(a,u,y)}}}l=l.next}while(l!==o)}}catch(y){_t(e,e.return,y)}}function D0(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{q1(e,n)}catch(l){_t(t,t.return,l)}}}function B0(t,e,n){n.props=Tl(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(l){_t(t,e,l)}}function bo(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof n=="function"?t.refCleanup=n(l):n.current=l}}catch(a){_t(t,e,a)}}function Pe(t,e){var n=t.ref,l=t.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(a){_t(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){_t(t,e,a)}else n.current=null}function Y0(t){var e=t.type,n=t.memoizedProps,l=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break t;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(a){_t(t,t.return,a)}}function Iu(t,e,n){try{var l=t.stateNode;jh(l,t.type,n,e),l[de]=e}catch(a){_t(t,t.return,a)}}function H0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&il(t.type)||t.tag===4}function Fu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||H0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&il(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jc(t,e,n){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=bn));else if(l!==4&&(l===27&&il(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(jc(t,e,n),t=t.sibling;t!==null;)jc(t,e,n),t=t.sibling}function _s(t,e,n){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(l!==4&&(l===27&&il(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(_s(t,e,n),t=t.sibling;t!==null;)_s(t,e,n),t=t.sibling}function U0(t){var e=t.stateNode,n=t.memoizedProps;try{for(var l=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);It(e,l,n),e[Kt]=t,e[de]=n}catch(o){_t(t,t.return,o)}}var gn=!1,Ht=!1,Pu=!1,gf=typeof WeakSet=="function"?WeakSet:Set,Zt=null;function xh(t,e){if(t=t.containerInfo,Vc=Ss,t=E1(t),fr(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var a=l.anchorOffset,o=l.focusNode;l=l.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break t}var i=0,s=-1,u=-1,h=0,y=0,v=t,p=null;e:for(;;){for(var b;v!==n||a!==0&&v.nodeType!==3||(s=i+a),v!==o||l!==0&&v.nodeType!==3||(u=i+l),v.nodeType===3&&(i+=v.nodeValue.length),(b=v.firstChild)!==null;)p=v,v=b;for(;;){if(v===t)break e;if(p===n&&++h===a&&(s=i),p===o&&++y===l&&(u=i),(b=v.nextSibling)!==null)break;v=p,p=v.parentNode}v=b}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kc={focusedElem:t,selectionRange:n},Ss=!1,Zt=e;Zt!==null;)if(e=Zt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Zt=t;else for(;Zt!==null;){switch(e=Zt,o=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)a=t[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&o!==null){t=void 0,n=e,a=o.memoizedProps,o=o.memoizedState,l=n.stateNode;try{var T=Tl(n.type,a);t=l.getSnapshotBeforeUpdate(T,o),l.__reactInternalSnapshotBeforeUpdate=t}catch(O){_t(n,n.return,O)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)Wc(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Wc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(w(163))}if(t=e.sibling,t!==null){t.return=e.return,Zt=t;break}Zt=e.return}}function R0(t,e,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:mn(t,n),l&4&&$o(5,n);break;case 1:if(mn(t,n),l&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(i){_t(n,n.return,i)}else{var a=Tl(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(i){_t(n,n.return,i)}}l&64&&D0(n),l&512&&bo(n,n.return);break;case 3:if(mn(t,n),l&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{q1(t,e)}catch(i){_t(n,n.return,i)}}break;case 27:e===null&&l&4&&U0(n);case 26:case 5:mn(t,n),e===null&&l&4&&Y0(n),l&512&&bo(n,n.return);break;case 12:mn(t,n);break;case 31:mn(t,n),l&4&&Q0(t,n);break;case 13:mn(t,n),l&4&&q0(t,n),l&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=zh.bind(null,n),Kh(t,n))));break;case 22:if(l=n.memoizedState!==null||gn,!l){e=e!==null&&e.memoizedState!==null||Ht,a=gn;var o=Ht;gn=l,(Ht=e)&&!o?hn(t,n,(n.subtreeFlags&8772)!==0):mn(t,n),gn=a,Ht=o}break;case 30:break;default:mn(t,n)}}function j0(t){var e=t.alternate;e!==null&&(t.alternate=null,j0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&sr(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var wt=null,ue=!1;function fn(t,e,n){for(n=n.child;n!==null;)X0(t,e,n),n=n.sibling}function X0(t,e,n){if(Ce&&typeof Ce.onCommitFiberUnmount=="function")try{Ce.onCommitFiberUnmount(Ro,n)}catch{}switch(n.tag){case 26:Ht||Pe(n,e),fn(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ht||Pe(n,e);var l=wt,a=ue;il(n.type)&&(wt=n.stateNode,ue=!1),fn(t,e,n),So(n.stateNode),wt=l,ue=a;break;case 5:Ht||Pe(n,e);case 6:if(l=wt,a=ue,wt=null,fn(t,e,n),wt=l,ue=a,wt!==null)if(ue)try{(wt.nodeType===9?wt.body:wt.nodeName==="HTML"?wt.ownerDocument.body:wt).removeChild(n.stateNode)}catch(o){_t(n,e,o)}else try{wt.removeChild(n.stateNode)}catch(o){_t(n,e,o)}break;case 18:wt!==null&&(ue?(t=wt,Nf(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),ka(t)):Nf(wt,n.stateNode));break;case 4:l=wt,a=ue,wt=n.stateNode.containerInfo,ue=!0,fn(t,e,n),wt=l,ue=a;break;case 0:case 11:case 14:case 15:ll(2,n,e),Ht||ll(4,n,e),fn(t,e,n);break;case 1:Ht||(Pe(n,e),l=n.stateNode,typeof l.componentWillUnmount=="function"&&B0(n,e,l)),fn(t,e,n);break;case 21:fn(t,e,n);break;case 22:Ht=(l=Ht)||n.memoizedState!==null,fn(t,e,n),Ht=l;break;default:fn(t,e,n)}}function Q0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ka(t)}catch(n){_t(e,e.return,n)}}}function q0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ka(t)}catch(n){_t(e,e.return,n)}}function Ch(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new gf),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new gf),e;default:throw Error(w(435,t.tag))}}function Ai(t,e){var n=Ch(t);e.forEach(function(l){if(!n.has(l)){n.add(l);var a=Lh.bind(null,t,l);l.then(a,a)}})}function ie(t,e){var n=e.deletions;if(n!==null)for(var l=0;l<n.length;l++){var a=n[l],o=t,i=e,s=i;t:for(;s!==null;){switch(s.tag){case 27:if(il(s.type)){wt=s.stateNode,ue=!1;break t}break;case 5:wt=s.stateNode,ue=!1;break t;case 3:case 4:wt=s.stateNode.containerInfo,ue=!0;break t}s=s.return}if(wt===null)throw Error(w(160));X0(o,i,a),wt=null,ue=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Z0(e,t),e=e.sibling}var qe=null;function Z0(t,e){var n=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ie(e,t),se(t),l&4&&(ll(3,t,t.return),$o(3,t),ll(5,t,t.return));break;case 1:ie(e,t),se(t),l&512&&(Ht||n===null||Pe(n,n.return)),l&64&&gn&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var a=qe;if(ie(e,t),se(t),l&512&&(Ht||n===null||Pe(n,n.return)),l&4){var o=n!==null?n.memoizedState:null;if(l=t.memoizedState,n===null)if(l===null)if(t.stateNode===null){t:{l=t.type,n=t.memoizedProps,a=a.ownerDocument||a;e:switch(l){case"title":o=a.getElementsByTagName("title")[0],(!o||o[Qo]||o[Kt]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=a.createElement(l),a.head.insertBefore(o,a.querySelector("head > title"))),It(o,l,n),o[Kt]=t,Gt(o),l=o;break t;case"link":var i=Rf("link","href",a).get(l+(n.href||""));if(i){for(var s=0;s<i.length;s++)if(o=i[s],o.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&o.getAttribute("rel")===(n.rel==null?null:n.rel)&&o.getAttribute("title")===(n.title==null?null:n.title)&&o.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){i.splice(s,1);break e}}o=a.createElement(l),It(o,l,n),a.head.appendChild(o);break;case"meta":if(i=Rf("meta","content",a).get(l+(n.content||""))){for(s=0;s<i.length;s++)if(o=i[s],o.getAttribute("content")===(n.content==null?null:""+n.content)&&o.getAttribute("name")===(n.name==null?null:n.name)&&o.getAttribute("property")===(n.property==null?null:n.property)&&o.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute("charset")===(n.charSet==null?null:n.charSet)){i.splice(s,1);break e}}o=a.createElement(l),It(o,l,n),a.head.appendChild(o);break;default:throw Error(w(468,l))}o[Kt]=t,Gt(o),l=o}t.stateNode=l}else jf(a,t.type,t.stateNode);else t.stateNode=Uf(a,l,t.memoizedProps);else o!==l?(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,l===null?jf(a,t.type,t.stateNode):Uf(a,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Iu(t,t.memoizedProps,n.memoizedProps)}break;case 27:ie(e,t),se(t),l&512&&(Ht||n===null||Pe(n,n.return)),n!==null&&l&4&&Iu(t,t.memoizedProps,n.memoizedProps);break;case 5:if(ie(e,t),se(t),l&512&&(Ht||n===null||Pe(n,n.return)),t.flags&32){a=t.stateNode;try{ba(a,"")}catch(T){_t(t,t.return,T)}}l&4&&t.stateNode!=null&&(a=t.memoizedProps,Iu(t,a,n!==null?n.memoizedProps:a)),l&1024&&(Pu=!0);break;case 6:if(ie(e,t),se(t),l&4){if(t.stateNode===null)throw Error(w(162));l=t.memoizedProps,n=t.stateNode;try{n.nodeValue=l}catch(T){_t(t,t.return,T)}}break;case 3:if(Vi=null,a=qe,qe=vs(e.containerInfo),ie(e,t),qe=a,se(t),l&4&&n!==null&&n.memoizedState.isDehydrated)try{ka(e.containerInfo)}catch(T){_t(t,t.return,T)}Pu&&(Pu=!1,G0(t));break;case 4:l=qe,qe=vs(t.stateNode.containerInfo),ie(e,t),se(t),qe=l;break;case 12:ie(e,t),se(t);break;case 31:ie(e,t),se(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ai(t,l)));break;case 13:ie(e,t),se(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ys=xe()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ai(t,l)));break;case 22:a=t.memoizedState!==null;var u=n!==null&&n.memoizedState!==null,h=gn,y=Ht;if(gn=h||a,Ht=y||u,ie(e,t),Ht=y,gn=h,se(t),l&8192)t:for(e=t.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,a&&(n===null||u||gn||Ht||yl(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){u=n=e;try{if(o=u.stateNode,a)i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{s=u.stateNode;var v=u.memoizedProps.style,p=v!=null&&v.hasOwnProperty("display")?v.display:null;s.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(T){_t(u,u.return,T)}}}else if(e.tag===6){if(n===null){u=e;try{u.stateNode.nodeValue=a?"":u.memoizedProps}catch(T){_t(u,u.return,T)}}}else if(e.tag===18){if(n===null){u=e;try{var b=u.stateNode;a?Of(b,!0):Of(u.stateNode,!1)}catch(T){_t(u,u.return,T)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}l&4&&(l=t.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,Ai(t,n))));break;case 19:ie(e,t),se(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ai(t,l)));break;case 30:break;case 21:break;default:ie(e,t),se(t)}}function se(t){var e=t.flags;if(e&2){try{for(var n,l=t.return;l!==null;){if(H0(l)){n=l;break}l=l.return}if(n==null)throw Error(w(160));switch(n.tag){case 27:var a=n.stateNode,o=Fu(t);_s(t,o,a);break;case 5:var i=n.stateNode;n.flags&32&&(ba(i,""),n.flags&=-33);var s=Fu(t);_s(t,s,i);break;case 3:case 4:var u=n.stateNode.containerInfo,h=Fu(t);jc(t,h,u);break;default:throw Error(w(161))}}catch(y){_t(t,t.return,y)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function G0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;G0(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function mn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)R0(t,e.alternate,e),e=e.sibling}function yl(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:ll(4,e,e.return),yl(e);break;case 1:Pe(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&B0(e,e.return,n),yl(e);break;case 27:So(e.stateNode);case 26:case 5:Pe(e,e.return),yl(e);break;case 22:e.memoizedState===null&&yl(e);break;case 30:yl(e);break;default:yl(e)}t=t.sibling}}function hn(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var l=e.alternate,a=t,o=e,i=o.flags;switch(o.tag){case 0:case 11:case 15:hn(a,o,n),$o(4,o);break;case 1:if(hn(a,o,n),l=o,a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(h){_t(l,l.return,h)}if(l=o,a=l.updateQueue,a!==null){var s=l.stateNode;try{var u=a.shared.hiddenCallbacks;if(u!==null)for(a.shared.hiddenCallbacks=null,a=0;a<u.length;a++)Q1(u[a],s)}catch(h){_t(l,l.return,h)}}n&&i&64&&D0(o),bo(o,o.return);break;case 27:U0(o);case 26:case 5:hn(a,o,n),n&&l===null&&i&4&&Y0(o),bo(o,o.return);break;case 12:hn(a,o,n);break;case 31:hn(a,o,n),n&&i&4&&Q0(a,o);break;case 13:hn(a,o,n),n&&i&4&&q0(a,o);break;case 22:o.memoizedState===null&&hn(a,o,n),bo(o,o.return);break;case 30:break;default:hn(a,o,n)}e=e.sibling}}function Rr(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Zo(n))}function jr(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Zo(t))}function Qe(t,e,n,l){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)$0(t,e,n,l),e=e.sibling}function $0(t,e,n,l){var a=e.flags;switch(e.tag){case 0:case 11:case 15:Qe(t,e,n,l),a&2048&&$o(9,e);break;case 1:Qe(t,e,n,l);break;case 3:Qe(t,e,n,l),a&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Zo(t)));break;case 12:if(a&2048){Qe(t,e,n,l),t=e.stateNode;try{var o=e.memoizedProps,i=o.id,s=o.onPostCommit;typeof s=="function"&&s(i,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(u){_t(e,e.return,u)}}else Qe(t,e,n,l);break;case 31:Qe(t,e,n,l);break;case 13:Qe(t,e,n,l);break;case 23:break;case 22:o=e.stateNode,i=e.alternate,e.memoizedState!==null?o._visibility&2?Qe(t,e,n,l):vo(t,e):o._visibility&2?Qe(t,e,n,l):(o._visibility|=2,Wl(t,e,n,l,(e.subtreeFlags&10256)!==0||!1)),a&2048&&Rr(i,e);break;case 24:Qe(t,e,n,l),a&2048&&jr(e.alternate,e);break;default:Qe(t,e,n,l)}}function Wl(t,e,n,l,a){for(a=a&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var o=t,i=e,s=n,u=l,h=i.flags;switch(i.tag){case 0:case 11:case 15:Wl(o,i,s,u,a),$o(8,i);break;case 23:break;case 22:var y=i.stateNode;i.memoizedState!==null?y._visibility&2?Wl(o,i,s,u,a):vo(o,i):(y._visibility|=2,Wl(o,i,s,u,a)),a&&h&2048&&Rr(i.alternate,i);break;case 24:Wl(o,i,s,u,a),a&&h&2048&&jr(i.alternate,i);break;default:Wl(o,i,s,u,a)}e=e.sibling}}function vo(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,l=e,a=l.flags;switch(l.tag){case 22:vo(n,l),a&2048&&Rr(l.alternate,l);break;case 24:vo(n,l),a&2048&&jr(l.alternate,l);break;default:vo(n,l)}e=e.sibling}}var co=8192;function Jl(t,e,n){if(t.subtreeFlags&co)for(t=t.child;t!==null;)V0(t,e,n),t=t.sibling}function V0(t,e,n){switch(t.tag){case 26:Jl(t,e,n),t.flags&co&&t.memoizedState!==null&&iy(n,qe,t.memoizedState,t.memoizedProps);break;case 5:Jl(t,e,n);break;case 3:case 4:var l=qe;qe=vs(t.stateNode.containerInfo),Jl(t,e,n),qe=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=co,co=16777216,Jl(t,e,n),co=l):Jl(t,e,n));break;default:Jl(t,e,n)}}function K0(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function no(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var l=e[n];Zt=l,W0(l,t)}K0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)J0(t),t=t.sibling}function J0(t){switch(t.tag){case 0:case 11:case 15:no(t),t.flags&2048&&ll(9,t,t.return);break;case 3:no(t);break;case 12:no(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Gi(t)):no(t);break;default:no(t)}}function Gi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var l=e[n];Zt=l,W0(l,t)}K0(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:ll(8,e,e.return),Gi(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,Gi(e));break;default:Gi(e)}t=t.sibling}}function W0(t,e){for(;Zt!==null;){var n=Zt;switch(n.tag){case 0:case 11:case 15:ll(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Zo(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,Zt=l;else t:for(n=t;Zt!==null;){l=Zt;var a=l.sibling,o=l.return;if(j0(l),l===n){Zt=null;break t}if(a!==null){a.return=o,Zt=a;break t}Zt=o}}}var Sh={getCacheForType:function(t){var e=Wt(Ut),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return Wt(Ut).controller.signal}},wh=typeof WeakMap=="function"?WeakMap:Map,ut=0,yt=null,et=null,at=0,dt=0,ge=null,qn=!1,Na=!1,Xr=!1,Mn=0,zt=0,al=0,xl=0,Qr=0,ve=0,Sa=0,xo=null,ce=null,Xc=!1,Ys=0,I0=0,fs=1/0,ms=null,Wn=null,Xt=0,In=null,wa=null,Sn=0,Qc=0,qc=null,F0=null,Co=0,Zc=null;function we(){return(ut&2)!==0&&at!==0?at&-at:Q.T!==null?Zr():s1()}function P0(){if(ve===0)if((at&536870912)===0||it){var t=bi;bi<<=1,(bi&3932160)===0&&(bi=262144),ve=t}else ve=536870912;return t=Te.current,t!==null&&(t.flags|=32),ve}function re(t,e,n){(t===yt&&(dt===2||dt===9)||t.cancelPendingCommit!==null)&&(Ea(t,0),Zn(t,at,ve,!1)),Xo(t,n),((ut&2)===0||t!==yt)&&(t===yt&&((ut&2)===0&&(xl|=n),zt===4&&Zn(t,at,ve,!1)),nn(t))}function tm(t,e,n){if((ut&6)!==0)throw Error(w(327));var l=!n&&(e&127)===0&&(e&t.expiredLanes)===0||jo(t,e),a=l?kh(t,e):tc(t,e,!0),o=l;do{if(a===0){Na&&!l&&Zn(t,e,0,!1);break}else{if(n=t.current.alternate,o&&!Eh(n)){a=tc(t,e,!1),o=!1;continue}if(a===2){if(o=e,t.errorRecoveryDisabledLanes&o)var i=0;else i=t.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){e=i;t:{var s=t;a=xo;var u=s.current.memoizedState.isDehydrated;if(u&&(Ea(s,i).flags|=256),i=tc(s,i,!1),i!==2){if(Xr&&!u){s.errorRecoveryDisabledLanes|=o,xl|=o,a=4;break t}o=ce,ce=a,o!==null&&(ce===null?ce=o:ce.push.apply(ce,o))}a=i}if(o=!1,a!==2)continue}}if(a===1){Ea(t,0),Zn(t,e,0,!0);break}t:{switch(l=t,o=a,o){case 0:case 1:throw Error(w(345));case 4:if((e&4194048)!==e)break;case 6:Zn(l,e,ve,!qn);break t;case 2:ce=null;break;case 3:case 5:break;default:throw Error(w(329))}if((e&62914560)===e&&(a=Ys+300-xe(),10<a)){if(Zn(l,e,ve,!qn),Es(l,0,!0)!==0)break t;Sn=e,l.timeoutHandle=vm(pf.bind(null,l,n,ce,ms,Xc,e,ve,xl,Sa,qn,o,"Throttled",-0,0),a);break t}pf(l,n,ce,ms,Xc,e,ve,xl,Sa,qn,o,null,-0,0)}}break}while(!0);nn(t)}function pf(t,e,n,l,a,o,i,s,u,h,y,v,p,b){if(t.timeoutHandle=-1,v=e.subtreeFlags,v&8192||(v&16785408)===16785408){v={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:bn},V0(e,o,v);var T=(o&62914560)===o?Ys-xe():(o&4194048)===o?I0-xe():0;if(T=sy(v,T),T!==null){Sn=o,t.cancelPendingCommit=T(vf.bind(null,t,e,o,n,l,a,i,s,u,y,v,null,p,b)),Zn(t,o,i,!h);return}}vf(t,e,o,n,l,a,i,s,u)}function Eh(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var a=n[l],o=a.getSnapshot;a=a.value;try{if(!Ee(o(),a))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zn(t,e,n,l){e&=~Qr,e&=~xl,t.suspendedLanes|=e,t.pingedLanes&=~e,l&&(t.warmLanes|=e),l=t.expirationTimes;for(var a=e;0<a;){var o=31-Se(a),i=1<<o;l[o]=-1,a&=~i}n!==0&&a1(t,n,e)}function Hs(){return(ut&6)===0?(Vo(0,!1),!1):!0}function qr(){if(et!==null){if(dt===0)var t=et.return;else t=et,vn=Ll=null,Mr(t),ma=null,zo=0,t=et;for(;t!==null;)O0(t.alternate,t),t=t.return;et=null}}function Ea(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,qh(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Sn=0,qr(),yt=t,et=n=xn(t.current,null),at=e,dt=0,ge=null,qn=!1,Na=jo(t,e),Xr=!1,Sa=ve=Qr=xl=al=zt=0,ce=xo=null,Xc=!1,(e&8)!==0&&(e|=e&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=e;0<l;){var a=31-Se(l),o=1<<a;e|=t[a],l&=~o}return Mn=e,As(),n}function em(t,e){W=null,Q.H=No,e===La||e===Ls?(e=J_(),dt=3):e===xr?(e=J_(),dt=4):dt=e===Hr?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ge=e,et===null&&(zt=1,rs(t,Ye(e,t.current)))}function nm(){var t=Te.current;return t===null?!0:(at&4194048)===at?Ue===null:(at&62914560)===at||(at&536870912)!==0?t===Ue:!1}function lm(){var t=Q.H;return Q.H=No,t===null?No:t}function am(){var t=Q.A;return Q.A=Sh,t}function hs(){zt=4,qn||(at&4194048)!==at&&Te.current!==null||(Na=!0),(al&134217727)===0&&(xl&134217727)===0||yt===null||Zn(yt,at,ve,!1)}function tc(t,e,n){var l=ut;ut|=2;var a=lm(),o=am();(yt!==t||at!==e)&&(ms=null,Ea(t,e)),e=!1;var i=zt;t:do try{if(dt!==0&&et!==null){var s=et,u=ge;switch(dt){case 8:qr(),i=6;break t;case 3:case 2:case 9:case 6:Te.current===null&&(e=!0);var h=dt;if(dt=0,ge=null,ca(t,s,u,h),n&&Na){i=0;break t}break;default:h=dt,dt=0,ge=null,ca(t,s,u,h)}}Th(),i=zt;break}catch(y){em(t,y)}while(!0);return e&&t.shellSuspendCounter++,vn=Ll=null,ut=l,Q.H=a,Q.A=o,et===null&&(yt=null,at=0,As()),i}function Th(){for(;et!==null;)om(et)}function kh(t,e){var n=ut;ut|=2;var l=lm(),a=am();yt!==t||at!==e?(ms=null,fs=xe()+500,Ea(t,e)):Na=jo(t,e);t:do try{if(dt!==0&&et!==null){e=et;var o=ge;e:switch(dt){case 1:dt=0,ge=null,ca(t,e,o,1);break;case 2:case 9:if(K_(o)){dt=0,ge=null,bf(e);break}e=function(){dt!==2&&dt!==9||yt!==t||(dt=7),nn(t)},o.then(e,e);break t;case 3:dt=7;break t;case 4:dt=5;break t;case 7:K_(o)?(dt=0,ge=null,bf(e)):(dt=0,ge=null,ca(t,e,o,7));break;case 5:var i=null;switch(et.tag){case 26:i=et.memoizedState;case 5:case 27:var s=et;if(i?Em(i):s.stateNode.complete){dt=0,ge=null;var u=s.sibling;if(u!==null)et=u;else{var h=s.return;h!==null?(et=h,Us(h)):et=null}break e}}dt=0,ge=null,ca(t,e,o,5);break;case 6:dt=0,ge=null,ca(t,e,o,6);break;case 8:qr(),zt=6;break t;default:throw Error(w(462))}}Mh();break}catch(y){em(t,y)}while(!0);return vn=Ll=null,Q.H=l,Q.A=a,ut=n,et!==null?0:(yt=null,at=0,As(),zt)}function Mh(){for(;et!==null&&!I5();)om(et)}function om(t){var e=N0(t.alternate,t,Mn);t.memoizedProps=t.pendingProps,e===null?Us(t):et=e}function bf(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=_f(n,e,e.pendingProps,e.type,void 0,at);break;case 11:e=_f(n,e,e.pendingProps,e.type.render,e.ref,at);break;case 5:Mr(e);default:O0(n,e),e=et=O1(e,Mn),e=N0(n,e,Mn)}t.memoizedProps=t.pendingProps,e===null?Us(t):et=e}function ca(t,e,n,l){vn=Ll=null,Mr(e),ma=null,zo=0;var a=e.return;try{if(yh(t,a,e,n,at)){zt=1,rs(t,Ye(n,t.current)),et=null;return}}catch(o){if(a!==null)throw et=a,o;zt=1,rs(t,Ye(n,t.current)),et=null;return}e.flags&32768?(it||l===1?t=!0:Na||(at&536870912)!==0?t=!1:(qn=t=!0,(l===2||l===9||l===3||l===6)&&(l=Te.current,l!==null&&l.tag===13&&(l.flags|=16384))),im(e,t)):Us(e)}function Us(t){var e=t;do{if((e.flags&32768)!==0){im(e,qn);return}t=e.return;var n=bh(e.alternate,e,Mn);if(n!==null){et=n;return}if(e=e.sibling,e!==null){et=e;return}et=e=t}while(e!==null);zt===0&&(zt=5)}function im(t,e){do{var n=vh(t.alternate,t);if(n!==null){n.flags&=32767,et=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){et=t;return}et=t=n}while(t!==null);zt=6,et=null}function vf(t,e,n,l,a,o,i,s,u){t.cancelPendingCommit=null;do Rs();while(Xt!==0);if((ut&6)!==0)throw Error(w(327));if(e!==null){if(e===t.current)throw Error(w(177));if(o=e.lanes|e.childLanes,o|=mr,s2(t,n,o,i,s,u),t===yt&&(et=yt=null,at=0),wa=e,In=t,Sn=n,Qc=o,qc=a,F0=l,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Nh(Pi,function(){return dm(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=Q.T,Q.T=null,a=ct.p,ct.p=2,i=ut,ut|=4;try{xh(t,e,n)}finally{ut=i,ct.p=a,Q.T=l}}Xt=1,sm(),um(),cm()}}function sm(){if(Xt===1){Xt=0;var t=In,e=wa,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=Q.T,Q.T=null;var l=ct.p;ct.p=2;var a=ut;ut|=4;try{Z0(e,t);var o=Kc,i=E1(t.containerInfo),s=o.focusedElem,u=o.selectionRange;if(i!==s&&s&&s.ownerDocument&&w1(s.ownerDocument.documentElement,s)){if(u!==null&&fr(s)){var h=u.start,y=u.end;if(y===void 0&&(y=h),"selectionStart"in s)s.selectionStart=h,s.selectionEnd=Math.min(y,s.value.length);else{var v=s.ownerDocument||document,p=v&&v.defaultView||window;if(p.getSelection){var b=p.getSelection(),T=s.textContent.length,O=Math.min(u.start,T),L=u.end===void 0?O:Math.min(u.end,T);!b.extend&&O>L&&(i=L,L=O,O=i);var f=X_(s,O),_=X_(s,L);if(f&&_&&(b.rangeCount!==1||b.anchorNode!==f.node||b.anchorOffset!==f.offset||b.focusNode!==_.node||b.focusOffset!==_.offset)){var g=v.createRange();g.setStart(f.node,f.offset),b.removeAllRanges(),O>L?(b.addRange(g),b.extend(_.node,_.offset)):(g.setEnd(_.node,_.offset),b.addRange(g))}}}}for(v=[],b=s;b=b.parentNode;)b.nodeType===1&&v.push({element:b,left:b.scrollLeft,top:b.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<v.length;s++){var C=v[s];C.element.scrollLeft=C.left,C.element.scrollTop=C.top}}Ss=!!Vc,Kc=Vc=null}finally{ut=a,ct.p=l,Q.T=n}}t.current=e,Xt=2}}function um(){if(Xt===2){Xt=0;var t=In,e=wa,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=Q.T,Q.T=null;var l=ct.p;ct.p=2;var a=ut;ut|=4;try{R0(t,e.alternate,e)}finally{ut=a,ct.p=l,Q.T=n}}Xt=3}}function cm(){if(Xt===4||Xt===3){Xt=0,F5();var t=In,e=wa,n=Sn,l=F0;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Xt=5:(Xt=0,wa=In=null,rm(t,t.pendingLanes));var a=t.pendingLanes;if(a===0&&(Wn=null),ir(n),e=e.stateNode,Ce&&typeof Ce.onCommitFiberRoot=="function")try{Ce.onCommitFiberRoot(Ro,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=Q.T,a=ct.p,ct.p=2,Q.T=null;try{for(var o=t.onRecoverableError,i=0;i<l.length;i++){var s=l[i];o(s.value,{componentStack:s.stack})}}finally{Q.T=e,ct.p=a}}(Sn&3)!==0&&Rs(),nn(t),a=t.pendingLanes,(n&261930)!==0&&(a&42)!==0?t===Zc?Co++:(Co=0,Zc=t):Co=0,Vo(0,!1)}}function rm(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Zo(e)))}function Rs(){return sm(),um(),cm(),dm()}function dm(){if(Xt!==5)return!1;var t=In,e=Qc;Qc=0;var n=ir(Sn),l=Q.T,a=ct.p;try{ct.p=32>n?32:n,Q.T=null,n=qc,qc=null;var o=In,i=Sn;if(Xt=0,wa=In=null,Sn=0,(ut&6)!==0)throw Error(w(331));var s=ut;if(ut|=4,J0(o.current),$0(o,o.current,i,n),ut=s,Vo(0,!1),Ce&&typeof Ce.onPostCommitFiberRoot=="function")try{Ce.onPostCommitFiberRoot(Ro,o)}catch{}return!0}finally{ct.p=a,Q.T=l,rm(t,e)}}function xf(t,e,n){e=Ye(n,e),e=Hc(t.stateNode,e,2),t=Jn(t,e,2),t!==null&&(Xo(t,2),nn(t))}function _t(t,e,n){if(t.tag===3)xf(t,t,n);else for(;e!==null;){if(e.tag===3){xf(e,t,n);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Wn===null||!Wn.has(l))){t=Ye(n,t),n=T0(2),l=Jn(e,n,2),l!==null&&(k0(n,l,e,t),Xo(l,2),nn(l));break}}e=e.return}}function ec(t,e,n){var l=t.pingCache;if(l===null){l=t.pingCache=new wh;var a=new Set;l.set(e,a)}else a=l.get(e),a===void 0&&(a=new Set,l.set(e,a));a.has(n)||(Xr=!0,a.add(n),t=Ah.bind(null,t,e,n),e.then(t,t))}function Ah(t,e,n){var l=t.pingCache;l!==null&&l.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,yt===t&&(at&n)===n&&(zt===4||zt===3&&(at&62914560)===at&&300>xe()-Ys?(ut&2)===0&&Ea(t,0):Qr|=n,Sa===at&&(Sa=0)),nn(t)}function _m(t,e){e===0&&(e=l1()),t=zl(t,e),t!==null&&(Xo(t,e),nn(t))}function zh(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),_m(t,n)}function Lh(t,e){var n=0;switch(t.tag){case 31:case 13:var l=t.stateNode,a=t.memoizedState;a!==null&&(n=a.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(w(314))}l!==null&&l.delete(e),_m(t,n)}function Nh(t,e){return ar(t,e)}var ys=null,Il=null,Gc=!1,gs=!1,nc=!1,Gn=0;function nn(t){t!==Il&&t.next===null&&(Il===null?ys=Il=t:Il=Il.next=t),gs=!0,Gc||(Gc=!0,Dh())}function Vo(t,e){if(!nc&&gs){nc=!0;do for(var n=!1,l=ys;l!==null;){if(!e)if(t!==0){var a=l.pendingLanes;if(a===0)var o=0;else{var i=l.suspendedLanes,s=l.pingedLanes;o=(1<<31-Se(42|t)+1)-1,o&=a&~(i&~s),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(n=!0,Cf(l,o))}else o=at,o=Es(l,l===yt?o:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(o&3)===0||jo(l,o)||(n=!0,Cf(l,o));l=l.next}while(n);nc=!1}}function Oh(){fm()}function fm(){gs=Gc=!1;var t=0;Gn!==0&&Qh()&&(t=Gn);for(var e=xe(),n=null,l=ys;l!==null;){var a=l.next,o=mm(l,e);o===0?(l.next=null,n===null?ys=a:n.next=a,a===null&&(Il=n)):(n=l,(t!==0||(o&3)!==0)&&(gs=!0)),l=a}Xt!==0&&Xt!==5||Vo(t,!1),Gn!==0&&(Gn=0)}function mm(t,e){for(var n=t.suspendedLanes,l=t.pingedLanes,a=t.expirationTimes,o=t.pendingLanes&-62914561;0<o;){var i=31-Se(o),s=1<<i,u=a[i];u===-1?((s&n)===0||(s&l)!==0)&&(a[i]=i2(s,e)):u<=e&&(t.expiredLanes|=s),o&=~s}if(e=yt,n=at,n=Es(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,n===0||t===e&&(dt===2||dt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Lu(l),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||jo(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(l!==null&&Lu(l),ir(n)){case 2:case 8:n=e1;break;case 32:n=Pi;break;case 268435456:n=n1;break;default:n=Pi}return l=hm.bind(null,t),n=ar(n,l),t.callbackPriority=e,t.callbackNode=n,e}return l!==null&&l!==null&&Lu(l),t.callbackPriority=2,t.callbackNode=null,2}function hm(t,e){if(Xt!==0&&Xt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(Rs()&&t.callbackNode!==n)return null;var l=at;return l=Es(t,t===yt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(tm(t,l,e),mm(t,xe()),t.callbackNode!=null&&t.callbackNode===n?hm.bind(null,t):null)}function Cf(t,e){if(Rs())return null;tm(t,e,!0)}function Dh(){Zh(function(){(ut&6)!==0?ar(t1,Oh):fm()})}function Zr(){if(Gn===0){var t=va;t===0&&(t=pi,pi<<=1,(pi&261888)===0&&(pi=256)),Gn=t}return Gn}function Sf(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Yi(""+t)}function wf(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function Bh(t,e,n,l,a){if(e==="submit"&&n&&n.stateNode===a){var o=Sf((a[de]||null).action),i=l.submitter;i&&(e=(e=i[de]||null)?Sf(e.formAction):i.getAttribute("formAction"),e!==null&&(o=e,i=null));var s=new Ts("action","action",null,l,a);t.push({event:s,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Gn!==0){var u=i?wf(a,i):new FormData(a);Bc(n,{pending:!0,data:u,method:a.method,action:o},null,u)}}else typeof o=="function"&&(s.preventDefault(),u=i?wf(a,i):new FormData(a),Bc(n,{pending:!0,data:u,method:a.method,action:o},o,u))},currentTarget:a}]})}}for(zi=0;zi<Sc.length;zi++)Li=Sc[zi],Ef=Li.toLowerCase(),Tf=Li[0].toUpperCase()+Li.slice(1),Ze(Ef,"on"+Tf);var Li,Ef,Tf,zi;Ze(k1,"onAnimationEnd");Ze(M1,"onAnimationIteration");Ze(A1,"onAnimationStart");Ze("dblclick","onDoubleClick");Ze("focusin","onFocus");Ze("focusout","onBlur");Ze(P2,"onTransitionRun");Ze(th,"onTransitionStart");Ze(eh,"onTransitionCancel");Ze(z1,"onTransitionEnd");pa("onMouseEnter",["mouseout","mouseover"]);pa("onMouseLeave",["mouseout","mouseover"]);pa("onPointerEnter",["pointerout","pointerover"]);pa("onPointerLeave",["pointerout","pointerover"]);kl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kl("onBeforeInput",["compositionend","keypress","textInput","paste"]);kl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Oo));function ym(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var l=t[n],a=l.event;l=l.listeners;t:{var o=void 0;if(e)for(var i=l.length-1;0<=i;i--){var s=l[i],u=s.instance,h=s.currentTarget;if(s=s.listener,u!==o&&a.isPropagationStopped())break t;o=s,a.currentTarget=h;try{o(a)}catch(y){es(y)}a.currentTarget=null,o=u}else for(i=0;i<l.length;i++){if(s=l[i],u=s.instance,h=s.currentTarget,s=s.listener,u!==o&&a.isPropagationStopped())break t;o=s,a.currentTarget=h;try{o(a)}catch(y){es(y)}a.currentTarget=null,o=u}}}}function tt(t,e){var n=e[hc];n===void 0&&(n=e[hc]=new Set);var l=t+"__bubble";n.has(l)||(gm(e,t,2,!1),n.add(l))}function lc(t,e,n){var l=0;e&&(l|=4),gm(n,t,l,e)}var Ni="_reactListening"+Math.random().toString(36).slice(2);function Gr(t){if(!t[Ni]){t[Ni]=!0,u1.forEach(function(n){n!=="selectionchange"&&(Yh.has(n)||lc(n,!1,t),lc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ni]||(e[Ni]=!0,lc("selectionchange",!1,e))}}function gm(t,e,n,l){switch(zm(e)){case 2:var a=ry;break;case 8:a=dy;break;default:a=Jr}n=a.bind(null,e,n,t),a=void 0,!vc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),l?a!==void 0?t.addEventListener(e,n,{capture:!0,passive:a}):t.addEventListener(e,n,!0):a!==void 0?t.addEventListener(e,n,{passive:a}):t.addEventListener(e,n,!1)}function ac(t,e,n,l,a){var o=l;if((e&1)===0&&(e&2)===0&&l!==null)t:for(;;){if(l===null)return;var i=l.tag;if(i===3||i===4){var s=l.stateNode.containerInfo;if(s===a)break;if(i===4)for(i=l.return;i!==null;){var u=i.tag;if((u===3||u===4)&&i.stateNode.containerInfo===a)return;i=i.return}for(;s!==null;){if(i=ta(s),i===null)return;if(u=i.tag,u===5||u===6||u===26||u===27){l=o=i;continue t}s=s.parentNode}}l=l.return}y1(function(){var h=o,y=cr(n),v=[];t:{var p=L1.get(t);if(p!==void 0){var b=Ts,T=t;switch(t){case"keypress":if(Ui(n)===0)break t;case"keydown":case"keyup":b=L2;break;case"focusin":T="focus",b=Yu;break;case"focusout":T="blur",b=Yu;break;case"beforeblur":case"afterblur":b=Yu;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=N_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=b2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=D2;break;case k1:case M1:case A1:b=C2;break;case z1:b=Y2;break;case"scroll":case"scrollend":b=g2;break;case"wheel":b=U2;break;case"copy":case"cut":case"paste":b=w2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=D_;break;case"toggle":case"beforetoggle":b=j2}var O=(e&4)!==0,L=!O&&(t==="scroll"||t==="scrollend"),f=O?p!==null?p+"Capture":null:p;O=[];for(var _=h,g;_!==null;){var C=_;if(g=C.stateNode,C=C.tag,C!==5&&C!==26&&C!==27||g===null||f===null||(C=Eo(_,f),C!=null&&O.push(Do(_,C,g))),L)break;_=_.return}0<O.length&&(p=new b(p,T,null,n,y),v.push({event:p,listeners:O}))}}if((e&7)===0){t:{if(p=t==="mouseover"||t==="pointerover",b=t==="mouseout"||t==="pointerout",p&&n!==bc&&(T=n.relatedTarget||n.fromElement)&&(ta(T)||T[Ma]))break t;if((b||p)&&(p=y.window===y?y:(p=y.ownerDocument)?p.defaultView||p.parentWindow:window,b?(T=n.relatedTarget||n.toElement,b=h,T=T?ta(T):null,T!==null&&(L=Uo(T),O=T.tag,T!==L||O!==5&&O!==27&&O!==6)&&(T=null)):(b=null,T=h),b!==T)){if(O=N_,C="onMouseLeave",f="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(O=D_,C="onPointerLeave",f="onPointerEnter",_="pointer"),L=b==null?p:so(b),g=T==null?p:so(T),p=new O(C,_+"leave",b,n,y),p.target=L,p.relatedTarget=g,C=null,ta(y)===h&&(O=new O(f,_+"enter",T,n,y),O.target=g,O.relatedTarget=L,C=O),L=C,b&&T)e:{for(O=Hh,f=b,_=T,g=0,C=f;C;C=O(C))g++;C=0;for(var B=_;B;B=O(B))C++;for(;0<g-C;)f=O(f),g--;for(;0<C-g;)_=O(_),C--;for(;g--;){if(f===_||_!==null&&f===_.alternate){O=f;break e}f=O(f),_=O(_)}O=null}else O=null;b!==null&&kf(v,p,b,O,!1),T!==null&&L!==null&&kf(v,L,T,O,!0)}}t:{if(p=h?so(h):window,b=p.nodeName&&p.nodeName.toLowerCase(),b==="select"||b==="input"&&p.type==="file")var X=U_;else if(H_(p))if(C1)X=W2;else{X=K2;var N=V2}else b=p.nodeName,!b||b.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?h&&ur(h.elementType)&&(X=U_):X=J2;if(X&&(X=X(t,h))){x1(v,X,n,y);break t}N&&N(t,p,h),t==="focusout"&&h&&p.type==="number"&&h.memoizedProps.value!=null&&pc(p,"number",p.value)}switch(N=h?so(h):window,t){case"focusin":(H_(N)||N.contentEditable==="true")&&(la=N,xc=h,fo=null);break;case"focusout":fo=xc=la=null;break;case"mousedown":Cc=!0;break;case"contextmenu":case"mouseup":case"dragend":Cc=!1,Q_(v,n,y);break;case"selectionchange":if(F2)break;case"keydown":case"keyup":Q_(v,n,y)}var H;if(_r)t:{switch(t){case"compositionstart":var G="onCompositionStart";break t;case"compositionend":G="onCompositionEnd";break t;case"compositionupdate":G="onCompositionUpdate";break t}G=void 0}else na?b1(t,n)&&(G="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(G="onCompositionStart");G&&(p1&&n.locale!=="ko"&&(na||G!=="onCompositionStart"?G==="onCompositionEnd"&&na&&(H=g1()):(Qn=y,rr="value"in Qn?Qn.value:Qn.textContent,na=!0)),N=ps(h,G),0<N.length&&(G=new O_(G,t,null,n,y),v.push({event:G,listeners:N}),H?G.data=H:(H=v1(n),H!==null&&(G.data=H)))),(H=Q2?q2(t,n):Z2(t,n))&&(G=ps(h,"onBeforeInput"),0<G.length&&(N=new O_("onBeforeInput","beforeinput",null,n,y),v.push({event:N,listeners:G}),N.data=H)),Bh(v,t,h,n,y)}ym(v,e)})}function Do(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ps(t,e){for(var n=e+"Capture",l=[];t!==null;){var a=t,o=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||o===null||(a=Eo(t,n),a!=null&&l.unshift(Do(t,a,o)),a=Eo(t,e),a!=null&&l.push(Do(t,a,o))),t.tag===3)return l;t=t.return}return[]}function Hh(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function kf(t,e,n,l,a){for(var o=e._reactName,i=[];n!==null&&n!==l;){var s=n,u=s.alternate,h=s.stateNode;if(s=s.tag,u!==null&&u===l)break;s!==5&&s!==26&&s!==27||h===null||(u=h,a?(h=Eo(n,o),h!=null&&i.unshift(Do(n,h,u))):a||(h=Eo(n,o),h!=null&&i.push(Do(n,h,u)))),n=n.return}i.length!==0&&t.push({event:e,listeners:i})}var Uh=/\r\n?/g,Rh=/\u0000|\uFFFD/g;function Mf(t){return(typeof t=="string"?t:""+t).replace(Uh,`
`).replace(Rh,"")}function pm(t,e){return e=Mf(e),Mf(t)===e}function ft(t,e,n,l,a,o){switch(n){case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||ba(t,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&ba(t,""+l);break;case"className":xi(t,"class",l);break;case"tabIndex":xi(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":xi(t,n,l);break;case"style":h1(t,l,o);break;case"data":if(e!=="object"){xi(t,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(n);break}l=Yi(""+l),t.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(n==="formAction"?(e!=="input"&&ft(t,e,"name",a.name,a,null),ft(t,e,"formEncType",a.formEncType,a,null),ft(t,e,"formMethod",a.formMethod,a,null),ft(t,e,"formTarget",a.formTarget,a,null)):(ft(t,e,"encType",a.encType,a,null),ft(t,e,"method",a.method,a,null),ft(t,e,"target",a.target,a,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(n);break}l=Yi(""+l),t.setAttribute(n,l);break;case"onClick":l!=null&&(t.onclick=bn);break;case"onScroll":l!=null&&tt("scroll",t);break;case"onScrollEnd":l!=null&&tt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(w(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(w(60));t.innerHTML=n}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}n=Yi(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(n,""+l):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":l===!0?t.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(n,l):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(n,l):t.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(n):t.setAttribute(n,l);break;case"popover":tt("beforetoggle",t),tt("toggle",t),Bi(t,"popover",l);break;case"xlinkActuate":dn(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":dn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":dn(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":dn(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":dn(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":dn(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":dn(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":dn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":dn(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Bi(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=h2.get(n)||n,Bi(t,n,l))}}function $c(t,e,n,l,a,o){switch(n){case"style":h1(t,l,o);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(w(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(w(60));t.innerHTML=n}}break;case"children":typeof l=="string"?ba(t,l):(typeof l=="number"||typeof l=="bigint")&&ba(t,""+l);break;case"onScroll":l!=null&&tt("scroll",t);break;case"onScrollEnd":l!=null&&tt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=bn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!c1.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),e=n.slice(2,a?n.length-7:void 0),o=t[de]||null,o=o!=null?o[n]:null,typeof o=="function"&&t.removeEventListener(e,o,a),typeof l=="function")){typeof o!="function"&&o!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,l,a);break t}n in t?t[n]=l:l===!0?t.setAttribute(n,""):Bi(t,n,l)}}}function It(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":tt("error",t),tt("load",t);var l=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var i=n[o];if(i!=null)switch(o){case"src":l=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(w(137,e));default:ft(t,e,o,i,n,null)}}a&&ft(t,e,"srcSet",n.srcSet,n,null),l&&ft(t,e,"src",n.src,n,null);return;case"input":tt("invalid",t);var s=o=i=a=null,u=null,h=null;for(l in n)if(n.hasOwnProperty(l)){var y=n[l];if(y!=null)switch(l){case"name":a=y;break;case"type":i=y;break;case"checked":u=y;break;case"defaultChecked":h=y;break;case"value":o=y;break;case"defaultValue":s=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(w(137,e));break;default:ft(t,e,l,y,n,null)}}_1(t,o,s,u,h,i,a,!1);return;case"select":tt("invalid",t),l=i=o=null;for(a in n)if(n.hasOwnProperty(a)&&(s=n[a],s!=null))switch(a){case"value":o=s;break;case"defaultValue":i=s;break;case"multiple":l=s;default:ft(t,e,a,s,n,null)}e=o,n=i,t.multiple=!!l,e!=null?da(t,!!l,e,!1):n!=null&&da(t,!!l,n,!0);return;case"textarea":tt("invalid",t),o=a=l=null;for(i in n)if(n.hasOwnProperty(i)&&(s=n[i],s!=null))switch(i){case"value":l=s;break;case"defaultValue":a=s;break;case"children":o=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(w(91));break;default:ft(t,e,i,s,n,null)}m1(t,l,a,o);return;case"option":for(u in n)n.hasOwnProperty(u)&&(l=n[u],l!=null)&&(u==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":ft(t,e,u,l,n,null));return;case"dialog":tt("beforetoggle",t),tt("toggle",t),tt("cancel",t),tt("close",t);break;case"iframe":case"object":tt("load",t);break;case"video":case"audio":for(l=0;l<Oo.length;l++)tt(Oo[l],t);break;case"image":tt("error",t),tt("load",t);break;case"details":tt("toggle",t);break;case"embed":case"source":case"link":tt("error",t),tt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in n)if(n.hasOwnProperty(h)&&(l=n[h],l!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(w(137,e));default:ft(t,e,h,l,n,null)}return;default:if(ur(e)){for(y in n)n.hasOwnProperty(y)&&(l=n[y],l!==void 0&&$c(t,e,y,l,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(l=n[s],l!=null&&ft(t,e,s,l,n,null))}function jh(t,e,n,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,o=null,i=null,s=null,u=null,h=null,y=null;for(b in n){var v=n[b];if(n.hasOwnProperty(b)&&v!=null)switch(b){case"checked":break;case"value":break;case"defaultValue":u=v;default:l.hasOwnProperty(b)||ft(t,e,b,null,l,v)}}for(var p in l){var b=l[p];if(v=n[p],l.hasOwnProperty(p)&&(b!=null||v!=null))switch(p){case"type":o=b;break;case"name":a=b;break;case"checked":h=b;break;case"defaultChecked":y=b;break;case"value":i=b;break;case"defaultValue":s=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(w(137,e));break;default:b!==v&&ft(t,e,p,b,l,v)}}gc(t,i,s,u,h,y,o,a);return;case"select":b=i=s=p=null;for(o in n)if(u=n[o],n.hasOwnProperty(o)&&u!=null)switch(o){case"value":break;case"multiple":b=u;default:l.hasOwnProperty(o)||ft(t,e,o,null,l,u)}for(a in l)if(o=l[a],u=n[a],l.hasOwnProperty(a)&&(o!=null||u!=null))switch(a){case"value":p=o;break;case"defaultValue":s=o;break;case"multiple":i=o;default:o!==u&&ft(t,e,a,o,l,u)}e=s,n=i,l=b,p!=null?da(t,!!n,p,!1):!!l!=!!n&&(e!=null?da(t,!!n,e,!0):da(t,!!n,n?[]:"",!1));return;case"textarea":b=p=null;for(s in n)if(a=n[s],n.hasOwnProperty(s)&&a!=null&&!l.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:ft(t,e,s,null,l,a)}for(i in l)if(a=l[i],o=n[i],l.hasOwnProperty(i)&&(a!=null||o!=null))switch(i){case"value":p=a;break;case"defaultValue":b=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(w(91));break;default:a!==o&&ft(t,e,i,a,l,o)}f1(t,p,b);return;case"option":for(var T in n)p=n[T],n.hasOwnProperty(T)&&p!=null&&!l.hasOwnProperty(T)&&(T==="selected"?t.selected=!1:ft(t,e,T,null,l,p));for(u in l)p=l[u],b=n[u],l.hasOwnProperty(u)&&p!==b&&(p!=null||b!=null)&&(u==="selected"?t.selected=p&&typeof p!="function"&&typeof p!="symbol":ft(t,e,u,p,l,b));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var O in n)p=n[O],n.hasOwnProperty(O)&&p!=null&&!l.hasOwnProperty(O)&&ft(t,e,O,null,l,p);for(h in l)if(p=l[h],b=n[h],l.hasOwnProperty(h)&&p!==b&&(p!=null||b!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(w(137,e));break;default:ft(t,e,h,p,l,b)}return;default:if(ur(e)){for(var L in n)p=n[L],n.hasOwnProperty(L)&&p!==void 0&&!l.hasOwnProperty(L)&&$c(t,e,L,void 0,l,p);for(y in l)p=l[y],b=n[y],!l.hasOwnProperty(y)||p===b||p===void 0&&b===void 0||$c(t,e,y,p,l,b);return}}for(var f in n)p=n[f],n.hasOwnProperty(f)&&p!=null&&!l.hasOwnProperty(f)&&ft(t,e,f,null,l,p);for(v in l)p=l[v],b=n[v],!l.hasOwnProperty(v)||p===b||p==null&&b==null||ft(t,e,v,p,l,b)}function Af(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Xh(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var a=n[l],o=a.transferSize,i=a.initiatorType,s=a.duration;if(o&&s&&Af(i)){for(i=0,s=a.responseEnd,l+=1;l<n.length;l++){var u=n[l],h=u.startTime;if(h>s)break;var y=u.transferSize,v=u.initiatorType;y&&Af(v)&&(u=u.responseEnd,i+=y*(u<s?1:(s-h)/(u-h)))}if(--l,e+=8*(o+i)/(a.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Vc=null,Kc=null;function bs(t){return t.nodeType===9?t:t.ownerDocument}function zf(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bm(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Jc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var oc=null;function Qh(){var t=window.event;return t&&t.type==="popstate"?t===oc?!1:(oc=t,!0):(oc=null,!1)}var vm=typeof setTimeout=="function"?setTimeout:void 0,qh=typeof clearTimeout=="function"?clearTimeout:void 0,Lf=typeof Promise=="function"?Promise:void 0,Zh=typeof queueMicrotask=="function"?queueMicrotask:typeof Lf<"u"?function(t){return Lf.resolve(null).then(t).catch(Gh)}:vm;function Gh(t){setTimeout(function(){throw t})}function il(t){return t==="head"}function Nf(t,e){var n=e,l=0;do{var a=n.nextSibling;if(t.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(l===0){t.removeChild(a),ka(e);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")So(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,So(n);for(var o=n.firstChild;o;){var i=o.nextSibling,s=o.nodeName;o[Qo]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&o.rel.toLowerCase()==="stylesheet"||n.removeChild(o),o=i}}else n==="body"&&So(t.ownerDocument.body);n=a}while(n);ka(e)}function Of(t,e){var n=t;t=0;do{var l=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=l}while(n)}function Wc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Wc(n),sr(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function $h(t,e,n,l){for(;t.nodeType===1;){var a=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Qo])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(o=t.getAttribute("rel"),o==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(o!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(o=t.getAttribute("src"),(o!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&o&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var o=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===o)return t}else return t;if(t=Re(t.nextSibling),t===null)break}return null}function Vh(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Re(t.nextSibling),t===null))return null;return t}function xm(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Re(t.nextSibling),t===null))return null;return t}function Ic(t){return t.data==="$?"||t.data==="$~"}function Fc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Kh(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var l=function(){e(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Re(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Pc=null;function Df(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return Re(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function Bf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function Cm(t,e,n){switch(e=bs(n),t){case"html":if(t=e.documentElement,!t)throw Error(w(452));return t;case"head":if(t=e.head,!t)throw Error(w(453));return t;case"body":if(t=e.body,!t)throw Error(w(454));return t;default:throw Error(w(451))}}function So(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);sr(t)}var je=new Map,Yf=new Set;function vs(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var An=ct.d;ct.d={f:Jh,r:Wh,D:Ih,C:Fh,L:Ph,m:ty,X:ny,S:ey,M:ly};function Jh(){var t=An.f(),e=Hs();return t||e}function Wh(t){var e=Aa(t);e!==null&&e.tag===5&&e.type==="form"?h0(e):An.r(t)}var Oa=typeof document>"u"?null:document;function Sm(t,e,n){var l=Oa;if(l&&typeof e=="string"&&e){var a=Be(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Yf.has(a)||(Yf.add(a),t={rel:t,crossOrigin:n,href:e},l.querySelector(a)===null&&(e=l.createElement("link"),It(e,"link",t),Gt(e),l.head.appendChild(e)))}}function Ih(t){An.D(t),Sm("dns-prefetch",t,null)}function Fh(t,e){An.C(t,e),Sm("preconnect",t,e)}function Ph(t,e,n){An.L(t,e,n);var l=Oa;if(l&&t&&e){var a='link[rel="preload"][as="'+Be(e)+'"]';e==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Be(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Be(n.imageSizes)+'"]')):a+='[href="'+Be(t)+'"]';var o=a;switch(e){case"style":o=Ta(t);break;case"script":o=Da(t)}je.has(o)||(t=Ct({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),je.set(o,t),l.querySelector(a)!==null||e==="style"&&l.querySelector(Ko(o))||e==="script"&&l.querySelector(Jo(o))||(e=l.createElement("link"),It(e,"link",t),Gt(e),l.head.appendChild(e)))}}function ty(t,e){An.m(t,e);var n=Oa;if(n&&t){var l=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+Be(l)+'"][href="'+Be(t)+'"]',o=a;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Da(t)}if(!je.has(o)&&(t=Ct({rel:"modulepreload",href:t},e),je.set(o,t),n.querySelector(a)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Jo(o)))return}l=n.createElement("link"),It(l,"link",t),Gt(l),n.head.appendChild(l)}}}function ey(t,e,n){An.S(t,e,n);var l=Oa;if(l&&t){var a=ra(l).hoistableStyles,o=Ta(t);e=e||"default";var i=a.get(o);if(!i){var s={loading:0,preload:null};if(i=l.querySelector(Ko(o)))s.loading=5;else{t=Ct({rel:"stylesheet",href:t,"data-precedence":e},n),(n=je.get(o))&&$r(t,n);var u=i=l.createElement("link");Gt(u),It(u,"link",t),u._p=new Promise(function(h,y){u.onload=h,u.onerror=y}),u.addEventListener("load",function(){s.loading|=1}),u.addEventListener("error",function(){s.loading|=2}),s.loading|=4,$i(i,e,l)}i={type:"stylesheet",instance:i,count:1,state:s},a.set(o,i)}}}function ny(t,e){An.X(t,e);var n=Oa;if(n&&t){var l=ra(n).hoistableScripts,a=Da(t),o=l.get(a);o||(o=n.querySelector(Jo(a)),o||(t=Ct({src:t,async:!0},e),(e=je.get(a))&&Vr(t,e),o=n.createElement("script"),Gt(o),It(o,"link",t),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},l.set(a,o))}}function ly(t,e){An.M(t,e);var n=Oa;if(n&&t){var l=ra(n).hoistableScripts,a=Da(t),o=l.get(a);o||(o=n.querySelector(Jo(a)),o||(t=Ct({src:t,async:!0,type:"module"},e),(e=je.get(a))&&Vr(t,e),o=n.createElement("script"),Gt(o),It(o,"link",t),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},l.set(a,o))}}function Hf(t,e,n,l){var a=(a=$n.current)?vs(a):null;if(!a)throw Error(w(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Ta(n.href),n=ra(a).hoistableStyles,l=n.get(e),l||(l={type:"style",instance:null,count:0,state:null},n.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Ta(n.href);var o=ra(a).hoistableStyles,i=o.get(t);if(i||(a=a.ownerDocument||a,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(t,i),(o=a.querySelector(Ko(t)))&&!o._p&&(i.instance=o,i.state.loading=5),je.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},je.set(t,n),o||ay(a,t,n,i.state))),e&&l===null)throw Error(w(528,""));return i}if(e&&l!==null)throw Error(w(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Da(n),n=ra(a).hoistableScripts,l=n.get(e),l||(l={type:"script",instance:null,count:0,state:null},n.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(w(444,t))}}function Ta(t){return'href="'+Be(t)+'"'}function Ko(t){return'link[rel="stylesheet"]['+t+"]"}function wm(t){return Ct({},t,{"data-precedence":t.precedence,precedence:null})}function ay(t,e,n,l){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=t.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2}),It(e,"link",n),Gt(e),t.head.appendChild(e))}function Da(t){return'[src="'+Be(t)+'"]'}function Jo(t){return"script[async]"+t}function Uf(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var l=t.querySelector('style[data-href~="'+Be(n.href)+'"]');if(l)return e.instance=l,Gt(l),l;var a=Ct({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Gt(l),It(l,"style",a),$i(l,n.precedence,t),e.instance=l;case"stylesheet":a=Ta(n.href);var o=t.querySelector(Ko(a));if(o)return e.state.loading|=4,e.instance=o,Gt(o),o;l=wm(n),(a=je.get(a))&&$r(l,a),o=(t.ownerDocument||t).createElement("link"),Gt(o);var i=o;return i._p=new Promise(function(s,u){i.onload=s,i.onerror=u}),It(o,"link",l),e.state.loading|=4,$i(o,n.precedence,t),e.instance=o;case"script":return o=Da(n.src),(a=t.querySelector(Jo(o)))?(e.instance=a,Gt(a),a):(l=n,(a=je.get(o))&&(l=Ct({},n),Vr(l,a)),t=t.ownerDocument||t,a=t.createElement("script"),Gt(a),It(a,"link",l),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(w(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,$i(l,n.precedence,t));return e.instance}function $i(t,e,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=l.length?l[l.length-1]:null,o=a,i=0;i<l.length;i++){var s=l[i];if(s.dataset.precedence===e)o=s;else if(o!==a)break}o?o.parentNode.insertBefore(t,o.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function $r(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Vr(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Vi=null;function Rf(t,e,n){if(Vi===null){var l=new Map,a=Vi=new Map;a.set(n,l)}else a=Vi,l=a.get(n),l||(l=new Map,a.set(n,l));if(l.has(t))return l;for(l.set(t,null),n=n.getElementsByTagName(t),a=0;a<n.length;a++){var o=n[a];if(!(o[Qo]||o[Kt]||t==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var i=o.getAttribute(e)||"";i=t+i;var s=l.get(i);s?s.push(o):l.set(i,[o])}}return l}function jf(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function oy(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Em(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function iy(t,e,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=Ta(l.href),o=e.querySelector(Ko(a));if(o){e=o._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=xs.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=o,Gt(o);return}o=e.ownerDocument||e,l=wm(l),(a=je.get(a))&&$r(l,a),o=o.createElement("link"),Gt(o);var i=o;i._p=new Promise(function(s,u){i.onload=s,i.onerror=u}),It(o,"link",l),n.instance=o}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(t.count++,n=xs.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var ic=0;function sy(t,e){return t.stylesheets&&t.count===0&&Ki(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var l=setTimeout(function(){if(t.stylesheets&&Ki(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4+e);0<t.imgBytes&&ic===0&&(ic=62500*Xh());var a=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Ki(t,t.stylesheets),t.unsuspend)){var o=t.unsuspend;t.unsuspend=null,o()}},(t.imgBytes>ic?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(a)}}:null}function xs(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ki(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Cs=null;function Ki(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Cs=new Map,e.forEach(uy,t),Cs=null,xs.call(t))}function uy(t,e){if(!(e.state.loading&4)){var n=Cs.get(t);if(n)var l=n.get(null);else{n=new Map,Cs.set(t,n);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<a.length;o++){var i=a[o];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(n.set(i.dataset.precedence,i),l=i)}l&&n.set(null,l)}a=e.instance,i=a.getAttribute("data-precedence"),o=n.get(i)||l,o===l&&n.set(null,a),n.set(i,a),this.count++,l=xs.bind(this),a.addEventListener("load",l),a.addEventListener("error",l),o?o.parentNode.insertBefore(a,o.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var Bo={$$typeof:pn,Provider:null,Consumer:null,_currentValue:gl,_currentValue2:gl,_threadCount:0};function cy(t,e,n,l,a,o,i,s,u){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Nu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nu(0),this.hiddenUpdates=Nu(null),this.identifierPrefix=l,this.onUncaughtError=a,this.onCaughtError=o,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function Tm(t,e,n,l,a,o,i,s,u,h,y,v){return t=new cy(t,e,n,i,u,h,y,v,s),e=1,o===!0&&(e|=24),o=be(3,null,null,e),t.current=o,o.stateNode=t,e=br(),e.refCount++,t.pooledCache=e,e.refCount++,o.memoizedState={element:l,isDehydrated:n,cache:e},Cr(o),t}function km(t){return t?(t=ia,t):ia}function Mm(t,e,n,l,a,o){a=km(a),l.context===null?l.context=a:l.pendingContext=a,l=Kn(e),l.payload={element:n},o=o===void 0?null:o,o!==null&&(l.callback=o),n=Jn(t,l,e),n!==null&&(re(n,t,e),ho(n,t,e))}function Xf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Kr(t,e){Xf(t,e),(t=t.alternate)&&Xf(t,e)}function Am(t){if(t.tag===13||t.tag===31){var e=zl(t,67108864);e!==null&&re(e,t,67108864),Kr(t,67108864)}}function Qf(t){if(t.tag===13||t.tag===31){var e=we();e=or(e);var n=zl(t,e);n!==null&&re(n,t,e),Kr(t,e)}}var Ss=!0;function ry(t,e,n,l){var a=Q.T;Q.T=null;var o=ct.p;try{ct.p=2,Jr(t,e,n,l)}finally{ct.p=o,Q.T=a}}function dy(t,e,n,l){var a=Q.T;Q.T=null;var o=ct.p;try{ct.p=8,Jr(t,e,n,l)}finally{ct.p=o,Q.T=a}}function Jr(t,e,n,l){if(Ss){var a=tr(l);if(a===null)ac(t,e,l,ws,n),qf(t,l);else if(fy(a,t,e,n,l))l.stopPropagation();else if(qf(t,l),e&4&&-1<_y.indexOf(t)){for(;a!==null;){var o=Aa(a);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var i=ml(o.pendingLanes);if(i!==0){var s=o;for(s.pendingLanes|=2,s.entangledLanes|=2;i;){var u=1<<31-Se(i);s.entanglements[1]|=u,i&=~u}nn(o),(ut&6)===0&&(fs=xe()+500,Vo(0,!1))}}break;case 31:case 13:s=zl(o,2),s!==null&&re(s,o,2),Hs(),Kr(o,2)}if(o=tr(l),o===null&&ac(t,e,l,ws,n),o===a)break;a=o}a!==null&&l.stopPropagation()}else ac(t,e,l,null,n)}}function tr(t){return t=cr(t),Wr(t)}var ws=null;function Wr(t){if(ws=null,t=ta(t),t!==null){var e=Uo(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=Jf(e),t!==null)return t;t=null}else if(n===31){if(t=Wf(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return ws=t,null}function zm(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(P5()){case t1:return 2;case e1:return 8;case Pi:case t2:return 32;case n1:return 268435456;default:return 32}default:return 32}}var er=!1,Fn=null,Pn=null,tl=null,Yo=new Map,Ho=new Map,jn=[],_y="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function qf(t,e){switch(t){case"focusin":case"focusout":Fn=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":tl=null;break;case"pointerover":case"pointerout":Yo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(e.pointerId)}}function lo(t,e,n,l,a,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:l,nativeEvent:o,targetContainers:[a]},e!==null&&(e=Aa(e),e!==null&&Am(e)),t):(t.eventSystemFlags|=l,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function fy(t,e,n,l,a){switch(e){case"focusin":return Fn=lo(Fn,t,e,n,l,a),!0;case"dragenter":return Pn=lo(Pn,t,e,n,l,a),!0;case"mouseover":return tl=lo(tl,t,e,n,l,a),!0;case"pointerover":var o=a.pointerId;return Yo.set(o,lo(Yo.get(o)||null,t,e,n,l,a)),!0;case"gotpointercapture":return o=a.pointerId,Ho.set(o,lo(Ho.get(o)||null,t,e,n,l,a)),!0}return!1}function Lm(t){var e=ta(t.target);if(e!==null){var n=Uo(e);if(n!==null){if(e=n.tag,e===13){if(e=Jf(n),e!==null){t.blockedOn=e,E_(t.priority,function(){Qf(n)});return}}else if(e===31){if(e=Wf(n),e!==null){t.blockedOn=e,E_(t.priority,function(){Qf(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ji(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=tr(t.nativeEvent);if(n===null){n=t.nativeEvent;var l=new n.constructor(n.type,n);bc=l,n.target.dispatchEvent(l),bc=null}else return e=Aa(n),e!==null&&Am(e),t.blockedOn=n,!1;e.shift()}return!0}function Zf(t,e,n){Ji(t)&&n.delete(e)}function my(){er=!1,Fn!==null&&Ji(Fn)&&(Fn=null),Pn!==null&&Ji(Pn)&&(Pn=null),tl!==null&&Ji(tl)&&(tl=null),Yo.forEach(Zf),Ho.forEach(Zf)}function Oi(t,e){t.blockedOn===e&&(t.blockedOn=null,er||(er=!0,Qt.unstable_scheduleCallback(Qt.unstable_NormalPriority,my)))}var Di=null;function Gf(t){Di!==t&&(Di=t,Qt.unstable_scheduleCallback(Qt.unstable_NormalPriority,function(){Di===t&&(Di=null);for(var e=0;e<t.length;e+=3){var n=t[e],l=t[e+1],a=t[e+2];if(typeof l!="function"){if(Wr(l||n)===null)continue;break}var o=Aa(n);o!==null&&(t.splice(e,3),e-=3,Bc(o,{pending:!0,data:a,method:n.method,action:l},l,a))}}))}function ka(t){function e(u){return Oi(u,t)}Fn!==null&&Oi(Fn,t),Pn!==null&&Oi(Pn,t),tl!==null&&Oi(tl,t),Yo.forEach(e),Ho.forEach(e);for(var n=0;n<jn.length;n++){var l=jn[n];l.blockedOn===t&&(l.blockedOn=null)}for(;0<jn.length&&(n=jn[0],n.blockedOn===null);)Lm(n),n.blockedOn===null&&jn.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var a=n[l],o=n[l+1],i=a[de]||null;if(typeof o=="function")i||Gf(n);else if(i){var s=null;if(o&&o.hasAttribute("formAction")){if(a=o,i=o[de]||null)s=i.formAction;else if(Wr(a)!==null)continue}else s=i.action;typeof s=="function"?n[l+1]=s:(n.splice(l,3),l-=3),Gf(n)}}}function Nm(){function t(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(i){return a=i})},focusReset:"manual",scroll:"manual"})}function e(){a!==null&&(a(),a=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,a=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),a!==null&&(a(),a=null)}}}function Ir(t){this._internalRoot=t}js.prototype.render=Ir.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(w(409));var n=e.current,l=we();Mm(n,l,t,e,null,null)};js.prototype.unmount=Ir.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Mm(t.current,2,null,t,null,null),Hs(),e[Ma]=null}};function js(t){this._internalRoot=t}js.prototype.unstable_scheduleHydration=function(t){if(t){var e=s1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<jn.length&&e!==0&&e<jn[n].priority;n++);jn.splice(n,0,t),n===0&&Lm(t)}};var $f=Vf.version;if($f!=="19.2.4")throw Error(w(527,$f,"19.2.4"));ct.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(w(188)):(t=Object.keys(t).join(","),Error(w(268,t)));return t=$5(e),t=t!==null?If(t):null,t=t===null?null:t.stateNode,t};var hy={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:Q,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(ao=__REACT_DEVTOOLS_GLOBAL_HOOK__,!ao.isDisabled&&ao.supportsFiber))try{Ro=ao.inject(hy),Ce=ao}catch{}var ao;Xs.createRoot=function(t,e){if(!Kf(t))throw Error(w(299));var n=!1,l="",a=S0,o=w0,i=E0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(o=e.onCaughtError),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Tm(t,1,!1,null,null,n,l,null,a,o,i,Nm),t[Ma]=e.current,Gr(t),new Ir(e)};Xs.hydrateRoot=function(t,e,n){if(!Kf(t))throw Error(w(299));var l=!1,a="",o=S0,i=w0,s=E0,u=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(i=n.onCaughtError),n.onRecoverableError!==void 0&&(s=n.onRecoverableError),n.formState!==void 0&&(u=n.formState)),e=Tm(t,1,!0,e,n??null,l,a,u,o,i,s,Nm),e.context=km(null),n=e.current,l=we(),l=or(l),a=Kn(l),a.callback=null,Jn(n,a,l),n=l,e.current.lanes=n,Xo(e,n),nn(e),t[Ma]=e.current,Gr(t),new js(e)};Xs.version="19.2.4"});var Ym=Je((xg,Bm)=>{"use strict";function Dm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dm)}catch(t){console.error(t)}}Dm(),Bm.exports=Om()});var Um=Je(Qs=>{"use strict";var yy=Symbol.for("react.transitional.element"),gy=Symbol.for("react.fragment");function Hm(t,e,n){var l=null;if(n!==void 0&&(l=""+n),e.key!==void 0&&(l=""+e.key),"key"in e){n={};for(var a in e)a!=="key"&&(n[a]=e[a])}else n=e;return e=n.ref,{$$typeof:yy,type:t,key:l,ref:e!==void 0?e:null,props:n}}Qs.Fragment=gy;Qs.jsx=Hm;Qs.jsxs=Hm});var qs=Je((Sg,Rm)=>{"use strict";Rm.exports=Um()});var n5=Nn(Zl()),l5=Nn(Ym());var E=Nn(Zl(),1),sd=Nn(ku(),1),kt=Nn(Zl(),1),M=Nn(qs(),1),Et=Nn(qs(),1),m=Nn(qs(),1),py=`svg[fill=none] {
  fill: none !important;
}

@keyframes styles-module__popupEnter___AuQDN {
  from {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
}
@keyframes styles-module__popupExit___JJKQX {
  from {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
}
@keyframes styles-module__shake___jdbWe {
  0%, 100% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(0);
  }
  20% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-3px);
  }
  40% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(3px);
  }
  60% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-2px);
  }
  80% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(2px);
  }
}
.styles-module__popup___IhzrD {
  position: fixed;
  transform: translateX(-50%);
  width: 280px;
  padding: 0.75rem 1rem 14px;
  background: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  cursor: default;
  z-index: 100001;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  will-change: transform, opacity;
  opacity: 0;
}
.styles-module__popup___IhzrD.styles-module__enter___L7U7N {
  animation: styles-module__popupEnter___AuQDN 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w {
  opacity: 1;
  transform: translateX(-50%) scale(1) translateY(0);
}
.styles-module__popup___IhzrD.styles-module__exit___5eGjE {
  animation: styles-module__popupExit___JJKQX 0.15s ease-in forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w.styles-module__shake___jdbWe {
  animation: styles-module__shake___jdbWe 0.25s ease-out;
}

.styles-module__header___wWsSi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5625rem;
}

.styles-module__element___fTV2z {
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.styles-module__headerToggle___WpW0b {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex: 1;
  min-width: 0;
  text-align: left;
}
.styles-module__headerToggle___WpW0b .styles-module__element___fTV2z {
  flex: 1;
}

.styles-module__chevron___ZZJlR {
  color: rgba(255, 255, 255, 0.5);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}
.styles-module__chevron___ZZJlR.styles-module__expanded___2Hxgv {
  transform: rotate(90deg);
}

.styles-module__stylesWrapper___pnHgy {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.styles-module__stylesWrapper___pnHgy.styles-module__expanded___2Hxgv {
  grid-template-rows: 1fr;
}

.styles-module__stylesInner___YYZe2 {
  overflow: hidden;
}

.styles-module__stylesBlock___VfQKn {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.375rem;
  padding: 0.5rem 0.625rem;
  margin-bottom: 0.5rem;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.6875rem;
  line-height: 1.5;
}

.styles-module__styleLine___1YQiD {
  color: rgba(255, 255, 255, 0.85);
  word-break: break-word;
}

.styles-module__styleProperty___84L1i {
  color: #c792ea;
}

.styles-module__styleValue___q51-h {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__timestamp___Dtpsv {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.35);
  font-variant-numeric: tabular-nums;
  margin-left: 0.5rem;
  flex-shrink: 0;
}

.styles-module__quote___mcMmQ {
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.25rem;
  line-height: 1.45;
}

.styles-module__textarea___jrSae {
  width: 100%;
  padding: 0.5rem 0.625rem;
  font-size: 0.8125rem;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
}
.styles-module__textarea___jrSae:focus {
  border-color: #3c82f7;
}
.styles-module__textarea___jrSae.styles-module__green___99l3h:focus {
  border-color: #34c759;
}
.styles-module__textarea___jrSae::placeholder {
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__textarea___jrSae::-webkit-scrollbar {
  width: 6px;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-track {
  background: transparent;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.styles-module__actions___D6x3f {
  display: flex;
  justify-content: flex-end;
  gap: 0.375rem;
  margin-top: 0.5rem;
}

.styles-module__cancel___hRjnL,
.styles-module__submit___K-mIR {
  padding: 0.4rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}

.styles-module__cancel___hRjnL {
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__cancel___hRjnL:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}

.styles-module__submit___K-mIR {
  color: white;
}
.styles-module__submit___K-mIR:hover:not(:disabled) {
  filter: brightness(0.9);
}
.styles-module__submit___K-mIR:disabled {
  cursor: not-allowed;
}

.styles-module__deleteWrapper___oSjdo {
  margin-right: auto;
}

.styles-module__deleteButton___4VuAE {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease;
}
.styles-module__deleteButton___4VuAE:hover {
  background: rgba(255, 59, 48, 0.25);
  color: #ff3b30;
}
.styles-module__deleteButton___4VuAE:active {
  transform: scale(0.92);
}

.styles-module__light___6AaSQ.styles-module__popup___IhzrD {
  background: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___6AaSQ .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.6);
}
.styles-module__light___6AaSQ .styles-module__timestamp___Dtpsv {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__chevron___ZZJlR {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__stylesBlock___VfQKn {
  background: rgba(0, 0, 0, 0.03);
}
.styles-module__light___6AaSQ .styles-module__styleLine___1YQiD {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__styleProperty___84L1i {
  color: #7c3aed;
}
.styles-module__light___6AaSQ .styles-module__styleValue___q51-h {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__quote___mcMmQ {
  color: rgba(0, 0, 0, 0.55);
  background: rgba(0, 0, 0, 0.04);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae {
  background: rgba(0, 0, 0, 0.03);
  color: #1a1a1a;
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE:hover {
  background: rgba(255, 59, 48, 0.15);
  color: #ff3b30;
}`,by={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",popupEnter:"styles-module__popupEnter___AuQDN",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",popupExit:"styles-module__popupExit___JJKQX",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",green:"styles-module__green___99l3h",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-popup-css-styles",t.textContent=py,document.head.appendChild(t))}var gt=by,vy=({size:t=16})=>(0,M.jsx)("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",children:(0,M.jsx)("path",{d:"M4 4l8 8M12 4l-8 8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),xy=({size:t=16})=>(0,M.jsx)("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",children:(0,M.jsx)("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})});var Cy=({size:t=24,style:e={}})=>(0,M.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:e,children:[(0,M.jsxs)("g",{clipPath:"url(#clip0_list_sparkle)",children:[(0,M.jsx)("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,M.jsx)("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,M.jsx)("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,M.jsx)("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),(0,M.jsx)("defs",{children:(0,M.jsx)("clipPath",{id:"clip0_list_sparkle",children:(0,M.jsx)("rect",{width:"24",height:"24",fill:"white"})})})]}),Wo=({size:t=20})=>(0,M.jsxs)("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:[(0,M.jsx)("circle",{cx:"10",cy:"10.5",r:"5.25",stroke:"currentColor",strokeWidth:"1.25"}),(0,M.jsx)("path",{d:"M8.5 8.75C8.5 7.92 9.17 7.25 10 7.25C10.83 7.25 11.5 7.92 11.5 8.75C11.5 9.58 10.83 10.25 10 10.25V11",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,M.jsx)("circle",{cx:"10",cy:"13",r:"0.75",fill:"currentColor"})]}),jm=({size:t=14})=>(0,M.jsxs)("svg",{width:t,height:t,viewBox:"0 0 14 14",fill:"none",children:[(0,M.jsx)("style",{children:`
      @keyframes checkDraw {
        0% {
          stroke-dashoffset: 12;
        }
        100% {
          stroke-dashoffset: 0;
        }
      }
      @keyframes checkBounce {
        0% {
          transform: scale(0.5);
          opacity: 0;
        }
        50% {
          transform: scale(1.12);
          opacity: 1;
        }
        75% {
          transform: scale(0.95);
        }
        100% {
          transform: scale(1);
        }
      }
      .check-path-animated {
        stroke-dasharray: 12;
        stroke-dashoffset: 0;
        transform-origin: center;
        animation: checkDraw 0.18s ease-out, checkBounce 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
    `}),(0,M.jsx)("path",{className:"check-path-animated",d:"M3.9375 7L6.125 9.1875L10.5 4.8125",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]});var Sy=({size:t=24,copied:e=!1})=>(0,M.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[(0,M.jsx)("style",{children:`
      .copy-icon, .check-icon {
        transition: opacity 0.2s ease, transform 0.2s ease;
      }
    `}),(0,M.jsxs)("g",{className:"copy-icon",style:{opacity:e?0:1,transform:e?"scale(0.8)":"scale(1)",transformOrigin:"center"},children:[(0,M.jsx)("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),(0,M.jsx)("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),(0,M.jsxs)("g",{className:"check-icon",style:{opacity:e?1:0,transform:e?"scale(1)":"scale(0.8)",transformOrigin:"center"},children:[(0,M.jsx)("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"#22c55e",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,M.jsx)("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"#22c55e",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),wy=({size:t=24,state:e="idle"})=>{let n=e==="idle",l=e==="sent",a=e==="failed";return(0,M.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[(0,M.jsx)("style",{children:`
        .send-arrow-icon, .send-check-icon, .send-error-icon {
          transition: opacity 0.15s ease, transform 0.15s ease;
        }
      `}),(0,M.jsx)("g",{className:"send-arrow-icon",style:{opacity:n?1:e==="sending"?.5:0,transform:n?"scale(1)":"scale(0.8)",transformOrigin:"center"},children:(0,M.jsx)("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,M.jsxs)("g",{className:"send-check-icon",style:{opacity:l?1:0,transform:l?"scale(1)":"scale(0.8)",transformOrigin:"center"},children:[(0,M.jsx)("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"#22c55e",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,M.jsx)("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"#22c55e",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,M.jsxs)("g",{className:"send-error-icon",style:{opacity:a?1:0,transform:a?"scale(1)":"scale(0.8)",transformOrigin:"center"},children:[(0,M.jsx)("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"#ef4444",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,M.jsx)("path",{d:"M12 8V12",stroke:"#ef4444",strokeWidth:"1.5",strokeLinecap:"round"}),(0,M.jsx)("circle",{cx:"12",cy:"15",r:"0.5",fill:"#ef4444",stroke:"#ef4444",strokeWidth:"1"})]})]})};var Ey=({size:t=24,isOpen:e=!0})=>(0,M.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[(0,M.jsx)("style",{children:`
      .eye-open, .eye-closed {
        transition: opacity 0.2s ease;
      }
    `}),(0,M.jsxs)("g",{className:"eye-open",style:{opacity:e?1:0},children:[(0,M.jsx)("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,M.jsx)("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,M.jsxs)("g",{className:"eye-closed",style:{opacity:e?0:1},children:[(0,M.jsx)("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),(0,M.jsx)("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),Ty=({size:t=24,isPaused:e=!1})=>(0,M.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[(0,M.jsx)("style",{children:`
      .pause-bar, .play-triangle {
        transition: opacity 0.15s ease;
      }
    `}),(0,M.jsx)("path",{className:"pause-bar",d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",style:{opacity:e?0:1}}),(0,M.jsx)("path",{className:"pause-bar",d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",style:{opacity:e?0:1}}),(0,M.jsx)("path",{className:"play-triangle",d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5",style:{opacity:e?1:0}})]});var ky=({size:t=16})=>(0,M.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[(0,M.jsx)("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,M.jsx)("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]});var My=({size:t=16})=>(0,M.jsx)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:(0,M.jsx)("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})});var Fr=({size:t=16})=>(0,M.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[(0,M.jsxs)("g",{clipPath:"url(#clip0_2_53)",children:[(0,M.jsx)("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,M.jsx)("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,M.jsx)("defs",{children:(0,M.jsx)("clipPath",{id:"clip0_2_53",children:(0,M.jsx)("rect",{width:"24",height:"24",fill:"white"})})})]}),Ay=({size:t=24})=>(0,M.jsx)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:(0,M.jsx)("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),zy=({size:t=16})=>(0,M.jsxs)("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:[(0,M.jsx)("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,M.jsx)("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,M.jsx)("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,M.jsx)("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,M.jsx)("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,M.jsx)("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,M.jsx)("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,M.jsx)("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,M.jsx)("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),Ly=({size:t=16})=>(0,M.jsx)("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:(0,M.jsx)("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),Xm=({size:t=16})=>(0,M.jsx)("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,M.jsx)("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),Ny=({size:t=24})=>(0,M.jsx)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,M.jsx)("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Oy=({size:t=16})=>(0,M.jsx)("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,M.jsx)("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})});var Im=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],Pr=Im.flatMap(t=>[`:not([${t}])`,`:not([${t}] *)`]).join(""),ud="feedback-freeze-styles",td="__agentation_freeze";function Dy(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:e=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};let t=window;return t[td]||(t[td]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),t[td]}var nt=Dy();typeof window<"u"&&!nt.installed&&(nt.origSetTimeout=window.setTimeout.bind(window),nt.origSetInterval=window.setInterval.bind(window),nt.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(t,e,...n)=>typeof t=="string"?nt.origSetTimeout(t,e):nt.origSetTimeout((...l)=>{nt.frozen?nt.frozenTimeoutQueue.push(()=>t(...l)):t(...l)},e,...n),window.setInterval=(t,e,...n)=>typeof t=="string"?nt.origSetInterval(t,e):nt.origSetInterval((...l)=>{nt.frozen||t(...l)},e,...n),window.requestAnimationFrame=t=>nt.origRAF(e=>{nt.frozen?nt.frozenRAFQueue.push(t):t(e)}),nt.installed=!0);var st=nt.origSetTimeout,By=nt.origSetInterval;function Yy(t){return t?Im.some(e=>!!t.closest?.(`[${e}]`)):!1}function Hy(){if(typeof document>"u"||nt.frozen)return;nt.frozen=!0,nt.frozenTimeoutQueue=[],nt.frozenRAFQueue=[];let t=document.getElementById(ud);t||(t=document.createElement("style"),t.id=ud),t.textContent=`
    *${Pr},
    *${Pr}::before,
    *${Pr}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(t),nt.pausedAnimations=[];try{document.getAnimations().forEach(e=>{if(e.playState!=="running")return;let n=e.effect?.target;Yy(n)||(e.pause(),nt.pausedAnimations.push(e))})}catch{}document.querySelectorAll("video").forEach(e=>{e.paused||(e.dataset.wasPaused="false",e.pause())})}function Qm(){if(typeof document>"u"||!nt.frozen)return;nt.frozen=!1;let t=nt.frozenTimeoutQueue;nt.frozenTimeoutQueue=[];for(let n of t)nt.origSetTimeout(()=>{if(nt.frozen){nt.frozenTimeoutQueue.push(n);return}try{n()}catch(l){console.warn("[agentation] Error replaying queued timeout:",l)}},0);let e=nt.frozenRAFQueue;nt.frozenRAFQueue=[];for(let n of e)nt.origRAF(l=>{if(nt.frozen){nt.frozenRAFQueue.push(n);return}n(l)});for(let n of nt.pausedAnimations)try{n.play()}catch(l){console.warn("[agentation] Error resuming animation:",l)}nt.pausedAnimations=[],document.getElementById(ud)?.remove(),document.querySelectorAll("video").forEach(n=>{n.dataset.wasPaused==="false"&&(n.play().catch(()=>{}),delete n.dataset.wasPaused)})}var qm=(0,kt.forwardRef)(function({element:e,timestamp:n,selectedText:l,placeholder:a="What should change?",initialValue:o="",submitLabel:i="Add",onSubmit:s,onCancel:u,onDelete:h,style:y,accentColor:v="#3c82f7",isExiting:p=!1,lightMode:b=!1,computedStyles:T},O){let[L,f]=(0,kt.useState)(o),[_,g]=(0,kt.useState)(!1),[C,B]=(0,kt.useState)("initial"),[X,N]=(0,kt.useState)(!1),[H,G]=(0,kt.useState)(!1),I=(0,kt.useRef)(null),ke=(0,kt.useRef)(null),D=(0,kt.useRef)(null),le=(0,kt.useRef)(null);(0,kt.useEffect)(()=>{p&&C!=="exit"&&B("exit")},[p,C]),(0,kt.useEffect)(()=>{st(()=>{B("enter")},0);let jt=st(()=>{B("entered")},200),Bl=st(()=>{let Ge=I.current;Ge&&(Ge.focus(),Ge.selectionStart=Ge.selectionEnd=Ge.value.length,Ge.scrollTop=Ge.scrollHeight)},50);return()=>{clearTimeout(jt),clearTimeout(Bl),D.current&&clearTimeout(D.current),le.current&&clearTimeout(le.current)}},[]);let Ol=(0,kt.useCallback)(()=>{le.current&&clearTimeout(le.current),g(!0),le.current=st(()=>{g(!1),I.current?.focus()},250)},[]);(0,kt.useImperativeHandle)(O,()=>({shake:Ol}),[Ol]);let Dl=(0,kt.useCallback)(()=>{B("exit"),D.current=st(()=>{u()},150)},[u]),me=(0,kt.useCallback)(()=>{L.trim()&&s(L.trim())},[L,s]),Ua=(0,kt.useCallback)(jt=>{jt.nativeEvent.isComposing||(jt.key==="Enter"&&!jt.shiftKey&&(jt.preventDefault(),me()),jt.key==="Escape"&&Dl())},[me,Dl]),dd=[gt.popup,b?gt.light:"",C==="enter"?gt.enter:"",C==="entered"?gt.entered:"",C==="exit"?gt.exit:"",_?gt.shake:""].filter(Boolean).join(" ");return(0,Et.jsxs)("div",{ref:ke,className:dd,"data-annotation-popup":!0,style:y,onClick:jt=>jt.stopPropagation(),children:[(0,Et.jsxs)("div",{className:gt.header,children:[T&&Object.keys(T).length>0?(0,Et.jsxs)("button",{className:gt.headerToggle,onClick:()=>{let jt=H;G(!H),jt&&st(()=>I.current?.focus(),0)},type:"button",children:[(0,Et.jsx)("svg",{className:`${gt.chevron} ${H?gt.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Et.jsx)("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,Et.jsx)("span",{className:gt.element,children:e})]}):(0,Et.jsx)("span",{className:gt.element,children:e}),n&&(0,Et.jsx)("span",{className:gt.timestamp,children:n})]}),T&&Object.keys(T).length>0&&(0,Et.jsx)("div",{className:`${gt.stylesWrapper} ${H?gt.expanded:""}`,children:(0,Et.jsx)("div",{className:gt.stylesInner,children:(0,Et.jsx)("div",{className:gt.stylesBlock,children:Object.entries(T).map(([jt,Bl])=>(0,Et.jsxs)("div",{className:gt.styleLine,children:[(0,Et.jsx)("span",{className:gt.styleProperty,children:jt.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",(0,Et.jsx)("span",{className:gt.styleValue,children:Bl}),";"]},jt))})})}),l&&(0,Et.jsxs)("div",{className:gt.quote,children:["\u201C",l.slice(0,80),l.length>80?"...":"","\u201D"]}),(0,Et.jsx)("textarea",{ref:I,className:gt.textarea,style:{borderColor:X?v:void 0},placeholder:a,value:L,onChange:jt=>f(jt.target.value),onFocus:()=>N(!0),onBlur:()=>N(!1),rows:2,onKeyDown:Ua}),(0,Et.jsxs)("div",{className:gt.actions,children:[h&&(0,Et.jsx)("div",{className:gt.deleteWrapper,children:(0,Et.jsx)("button",{className:gt.deleteButton,onClick:h,type:"button",children:(0,Et.jsx)(Ny,{size:22})})}),(0,Et.jsx)("button",{className:gt.cancel,onClick:Dl,children:"Cancel"}),(0,Et.jsx)("button",{className:gt.submit,style:{backgroundColor:v,opacity:L.trim()?1:.4},onClick:me,disabled:!L.trim(),children:i})]})]})});function Ha(t){if(t.parentElement)return t.parentElement;let e=t.getRootNode();return e instanceof ShadowRoot?e.host:null}function fe(t,e){let n=t;for(;n;){if(n.matches(e))return n;n=Ha(n)}return null}function Uy(t,e=4){let n=[],l=t,a=0;for(;l&&a<e;){let o=l.tagName.toLowerCase();if(o==="html"||o==="body")break;let i=o;if(l.id)i=`#${l.id}`;else if(l.className&&typeof l.className=="string"){let u=l.className.split(/\s+/).find(h=>h.length>2&&!h.match(/^[a-z]{1,2}$/)&&!h.match(/[A-Z0-9]{5,}/));u&&(i=`.${u.split("_")[0]}`)}let s=Ha(l);!l.parentElement&&s&&(i=`\u27E8shadow\u27E9 ${i}`),n.unshift(i),l=s,a++}return n.join(" > ")}function Ws(t){let e=Uy(t);if(t.dataset.element)return{name:t.dataset.element,path:e};let n=t.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(n)){let l=fe(t,"svg");if(l){let a=Ha(l);if(a instanceof HTMLElement)return{name:`graphic in ${Ws(a).name}`,path:e}}return{name:"graphic element",path:e}}if(n==="svg"){let l=Ha(t);if(l?.tagName.toLowerCase()==="button"){let a=l.textContent?.trim();return{name:a?`icon in "${a}" button`:"button icon",path:e}}return{name:"icon",path:e}}if(n==="button"){let l=t.textContent?.trim(),a=t.getAttribute("aria-label");return a?{name:`button [${a}]`,path:e}:{name:l?`button "${l.slice(0,25)}"`:"button",path:e}}if(n==="a"){let l=t.textContent?.trim(),a=t.getAttribute("href");return l?{name:`link "${l.slice(0,25)}"`,path:e}:a?{name:`link to ${a.slice(0,30)}`,path:e}:{name:"link",path:e}}if(n==="input"){let l=t.getAttribute("type")||"text",a=t.getAttribute("placeholder"),o=t.getAttribute("name");return a?{name:`input "${a}"`,path:e}:o?{name:`input [${o}]`,path:e}:{name:`${l} input`,path:e}}if(["h1","h2","h3","h4","h5","h6"].includes(n)){let l=t.textContent?.trim();return{name:l?`${n} "${l.slice(0,35)}"`:n,path:e}}if(n==="p"){let l=t.textContent?.trim();return l?{name:`paragraph: "${l.slice(0,40)}${l.length>40?"...":""}"`,path:e}:{name:"paragraph",path:e}}if(n==="span"||n==="label"){let l=t.textContent?.trim();return l&&l.length<40?{name:`"${l}"`,path:e}:{name:n,path:e}}if(n==="li"){let l=t.textContent?.trim();return l&&l.length<40?{name:`list item: "${l.slice(0,35)}"`,path:e}:{name:"list item",path:e}}if(n==="blockquote")return{name:"blockquote",path:e};if(n==="code"){let l=t.textContent?.trim();return l&&l.length<30?{name:`code: \`${l}\``,path:e}:{name:"code",path:e}}if(n==="pre")return{name:"code block",path:e};if(n==="img"){let l=t.getAttribute("alt");return{name:l?`image "${l.slice(0,30)}"`:"image",path:e}}if(n==="video")return{name:"video",path:e};if(["div","section","article","nav","header","footer","aside","main"].includes(n)){let l=t.className,a=t.getAttribute("role"),o=t.getAttribute("aria-label");if(o)return{name:`${n} [${o}]`,path:e};if(a)return{name:`${a}`,path:e};if(typeof l=="string"&&l){let i=l.split(/[\s_-]+/).map(s=>s.replace(/[A-Z0-9]{5,}.*$/,"")).filter(s=>s.length>2&&!/^[a-z]{1,2}$/.test(s)).slice(0,2);if(i.length>0)return{name:i.join(" "),path:e}}return{name:n==="div"?"container":n,path:e}}return{name:n,path:e}}function Io(t){let e=[],n=t.textContent?.trim();n&&n.length<100&&e.push(n);let l=t.previousElementSibling;if(l){let o=l.textContent?.trim();o&&o.length<50&&e.unshift(`[before: "${o.slice(0,40)}"]`)}let a=t.nextElementSibling;if(a){let o=a.textContent?.trim();o&&o.length<50&&e.push(`[after: "${o.slice(0,40)}"]`)}return e.join(" ")}function Zs(t){let e=Ha(t);if(!e)return"";let a=(t.getRootNode()instanceof ShadowRoot&&t.parentElement?Array.from(t.parentElement.children):Array.from(e.children)).filter(y=>y!==t&&y instanceof HTMLElement);if(a.length===0)return"";let o=a.slice(0,4).map(y=>{let v=y.tagName.toLowerCase(),p=y.className,b="";if(typeof p=="string"&&p){let T=p.split(/\s+/).map(O=>O.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(O=>O.length>2&&!/^[a-z]{1,2}$/.test(O));T&&(b=`.${T}`)}if(v==="button"||v==="a"){let T=y.textContent?.trim().slice(0,15);if(T)return`${v}${b} "${T}"`}return`${v}${b}`}),s=e.tagName.toLowerCase();if(typeof e.className=="string"&&e.className){let y=e.className.split(/\s+/).map(v=>v.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(v=>v.length>2&&!/^[a-z]{1,2}$/.test(v));y&&(s=`.${y}`)}let u=e.children.length,h=u>o.length+1?` (${u} total in ${s})`:"";return o.join(", ")+h}function Fo(t){let e=t.className;return typeof e!="string"||!e?"":e.split(/\s+/).filter(l=>l.length>0).map(l=>{let a=l.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return a?a[1]:l}).filter((l,a,o)=>o.indexOf(l)===a).join(", ")}var Fm=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),Ry=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),jy=new Set(["input","textarea","select"]),Xy=new Set(["img","video","canvas","svg"]),Qy=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function Gs(t){if(typeof window>"u")return{};let e=window.getComputedStyle(t),n={},l=t.tagName.toLowerCase(),a;Ry.has(l)?a=["color","fontSize","fontWeight","fontFamily","lineHeight"]:l==="button"||l==="a"&&t.getAttribute("role")==="button"?a=["backgroundColor","color","padding","borderRadius","fontSize"]:jy.has(l)?a=["backgroundColor","color","padding","borderRadius","fontSize"]:Xy.has(l)?a=["width","height","objectFit","borderRadius"]:Qy.has(l)?a=["display","padding","margin","gap","backgroundColor"]:a=["color","fontSize","margin","padding","backgroundColor"];for(let o of a){let i=o.replace(/([A-Z])/g,"-$1").toLowerCase(),s=e.getPropertyValue(i);s&&!Fm.has(s)&&(n[o]=s)}return n}var qy=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function $s(t){if(typeof window>"u")return"";let e=window.getComputedStyle(t),n=[];for(let l of qy){let a=l.replace(/([A-Z])/g,"-$1").toLowerCase(),o=e.getPropertyValue(a);o&&!Fm.has(o)&&n.push(`${a}: ${o}`)}return n.join("; ")}function Zy(t){if(!t)return;let e={},n=t.split(";").map(l=>l.trim()).filter(Boolean);for(let l of n){let a=l.indexOf(":");if(a>0){let o=l.slice(0,a).trim(),i=l.slice(a+1).trim();o&&i&&(e[o]=i)}}return Object.keys(e).length>0?e:void 0}function Vs(t){let e=[],n=t.getAttribute("role"),l=t.getAttribute("aria-label"),a=t.getAttribute("aria-describedby"),o=t.getAttribute("tabindex"),i=t.getAttribute("aria-hidden");return n&&e.push(`role="${n}"`),l&&e.push(`aria-label="${l}"`),a&&e.push(`aria-describedby="${a}"`),o&&e.push(`tabindex=${o}`),i==="true"&&e.push("aria-hidden"),t.matches("a, button, input, select, textarea, [tabindex]")&&e.push("focusable"),e.join(", ")}function Ks(t){let e=[],n=t;for(;n&&n.tagName.toLowerCase()!=="html";){let l=n.tagName.toLowerCase(),a=l;if(n.id)a=`${l}#${n.id}`;else if(n.className&&typeof n.className=="string"){let i=n.className.split(/\s+/).map(s=>s.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(s=>s.length>2);i&&(a=`${l}.${i}`)}let o=Ha(n);!n.parentElement&&o&&(a=`\u27E8shadow\u27E9 ${a}`),e.unshift(a),n=o}return e.join(" > ")}var cd="feedback-annotations-",Pm=7;function Is(t){return`${cd}${t}`}function ed(t){if(typeof window>"u")return[];try{let e=localStorage.getItem(Is(t));if(!e)return[];let n=JSON.parse(e),l=Date.now()-Pm*24*60*60*1e3;return n.filter(a=>!a.timestamp||a.timestamp>l)}catch{return[]}}function t5(t,e){if(!(typeof window>"u"))try{localStorage.setItem(Is(t),JSON.stringify(e))}catch{}}function Gy(){let t=new Map;if(typeof window>"u")return t;try{let e=Date.now()-Pm*24*60*60*1e3;for(let n=0;n<localStorage.length;n++){let l=localStorage.key(n);if(l?.startsWith(cd)){let a=l.slice(cd.length),o=localStorage.getItem(l);if(o){let s=JSON.parse(o).filter(u=>!u.timestamp||u.timestamp>e);s.length>0&&t.set(a,s)}}}}catch{}return t}function Po(t,e,n){let l=e.map(a=>({...a,_syncedTo:n}));t5(t,l)}var $y="agentation-session-";function rd(t){return`${$y}${t}`}function Vy(t){if(typeof window>"u")return null;try{return localStorage.getItem(rd(t))}catch{return null}}function nd(t,e){if(!(typeof window>"u"))try{localStorage.setItem(rd(t),e)}catch{}}function Ky(t){if(!(typeof window>"u"))try{localStorage.removeItem(rd(t))}catch{}}async function ld(t,e){let n=await fetch(`${t}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:e})});if(!n.ok)throw new Error(`Failed to create session: ${n.status}`);return n.json()}async function Zm(t,e){let n=await fetch(`${t}/sessions/${e}`);if(!n.ok)throw new Error(`Failed to get session: ${n.status}`);return n.json()}async function Js(t,e,n){let l=await fetch(`${t}/sessions/${e}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!l.ok)throw new Error(`Failed to sync annotation: ${l.status}`);return l.json()}async function Jy(t,e,n){let l=await fetch(`${t}/annotations/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!l.ok)throw new Error(`Failed to update annotation: ${l.status}`);return l.json()}async function Gm(t,e){let n=await fetch(`${t}/annotations/${e}`,{method:"DELETE"});if(!n.ok)throw new Error(`Failed to delete annotation: ${n.status}`)}var rt={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},$m=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),Vm=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],Wy=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function Iy(t){let e=t?.mode??"filtered",n=$m;if(t?.skipExact){let l=t.skipExact instanceof Set?t.skipExact:new Set(t.skipExact);n=new Set([...$m,...l])}return{maxComponents:t?.maxComponents??6,maxDepth:t?.maxDepth??30,mode:e,skipExact:n,skipPatterns:t?.skipPatterns?[...Vm,...t.skipPatterns]:Vm,userPatterns:t?.userPatterns??Wy,filter:t?.filter}}function Fy(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function Py(t,e=10){let n=new Set,l=t,a=0;for(;l&&a<e;)l.className&&typeof l.className=="string"&&l.className.split(/\s+/).forEach(o=>{if(o.length>1){let i=o.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();i.length>1&&n.add(i)}}),l=l.parentElement,a++;return n}function tg(t,e){let n=Fy(t);for(let l of e){if(l===n)return!0;let a=n.split("-").filter(i=>i.length>2),o=l.split("-").filter(i=>i.length>2);for(let i of a)for(let s of o)if(i===s||i.includes(s)||s.includes(i))return!0}return!1}function eg(t,e,n,l){if(n.filter)return n.filter(t,e);switch(n.mode){case"all":return!0;case"filtered":return!(n.skipExact.has(t)||n.skipPatterns.some(a=>a.test(t)));case"smart":return n.skipExact.has(t)||n.skipPatterns.some(a=>a.test(t))?!1:!!(l&&tg(t,l)||n.userPatterns.some(a=>a.test(t)));default:return!0}}var Ba=null,ng=new WeakMap;function ad(t){return Object.keys(t).some(e=>e.startsWith("__reactFiber$")||e.startsWith("__reactInternalInstance$")||e.startsWith("__reactProps$"))}function lg(){if(Ba!==null)return Ba;if(typeof document>"u")return!1;if(document.body&&ad(document.body))return Ba=!0,!0;let t=["#root","#app","#__next","[data-reactroot]"];for(let e of t){let n=document.querySelector(e);if(n&&ad(n))return Ba=!0,!0}if(document.body){for(let e of document.body.children)if(ad(e))return Ba=!0,!0}return Ba=!1,!1}var ti={map:ng};function ag(t){return Object.keys(t).find(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$"))||null}function og(t){let e=ag(t);return e?t[e]:null}function Nl(t){return t?t.displayName?t.displayName:t.name?t.name:null:null}function ig(t){let{tag:e,type:n,elementType:l}=t;if(e===rt.HostComponent||e===rt.HostText||e===rt.HostHoistable||e===rt.HostSingleton||e===rt.Fragment||e===rt.Mode||e===rt.Profiler||e===rt.DehydratedFragment||e===rt.HostRoot||e===rt.HostPortal||e===rt.ScopeComponent||e===rt.OffscreenComponent||e===rt.LegacyHiddenComponent||e===rt.CacheComponent||e===rt.TracingMarkerComponent||e===rt.Throw||e===rt.ViewTransitionComponent||e===rt.ActivityComponent)return null;if(e===rt.ForwardRef){let a=l;if(a?.render){let o=Nl(a.render);if(o)return o}return a?.displayName?a.displayName:Nl(n)}if(e===rt.MemoComponent||e===rt.SimpleMemoComponent){let a=l;if(a?.type){let o=Nl(a.type);if(o)return o}return a?.displayName?a.displayName:Nl(n)}if(e===rt.ContextProvider){let a=n;return a?._context?.displayName?`${a._context.displayName}.Provider`:null}if(e===rt.ContextConsumer){let a=n;return a?.displayName?`${a.displayName}.Consumer`:null}if(e===rt.LazyComponent){let a=l;return a?._status===1&&a._result?Nl(a._result):null}return e===rt.SuspenseComponent||e===rt.SuspenseListComponent?null:e===rt.IncompleteClassComponent||e===rt.IncompleteFunctionComponent||e===rt.FunctionComponent||e===rt.ClassComponent||e===rt.IndeterminateComponent?Nl(n):null}function sg(t){return t.length<=2||t.length<=3&&t===t.toLowerCase()}function ug(t,e){let n=Iy(e),l=n.mode==="all";if(l){let u=ti.map.get(t);if(u!==void 0)return u}if(!lg()){let u={path:null,components:[]};return l&&ti.map.set(t,u),u}let a=n.mode==="smart"?Py(t):void 0,o=[];try{let u=og(t),h=0;for(;u&&h<n.maxDepth&&o.length<n.maxComponents;){let y=ig(u);y&&!sg(y)&&eg(y,h,n,a)&&o.push(y),u=u.return,h++}}catch{let u={path:null,components:[]};return l&&ti.map.set(t,u),u}if(o.length===0){let u={path:null,components:[]};return l&&ti.map.set(t,u),u}let s={path:o.slice().reverse().map(u=>`<${u}>`).join(" "),components:o};return l&&ti.map.set(t,s),s}var cg=`svg[fill=none] {
  fill: none !important;
}

@keyframes styles-module__toolbarEnter___u8RRu {
  from {
    opacity: 0;
    transform: scale(0.5) rotate(90deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
@keyframes styles-module__badgeEnter___mVQLj {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleIn___c-r1K {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleOut___Wctwz {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.85);
  }
}
@keyframes styles-module__slideUp___kgD36 {
  from {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__slideDown___zcdje {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
}
@keyframes styles-module__markerIn___5FaAP {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes styles-module__markerOut___GU5jX {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
}
@keyframes styles-module__fadeIn___b9qmf {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__fadeOut___6Ut6- {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__tooltipIn___0N31w {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(2px) scale(0.891);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(0.909);
  }
}
@keyframes styles-module__hoverHighlightIn___6WYHY {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__hoverTooltipIn___FYGQx {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__settingsPanelIn___MGfO8 {
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.95);
    filter: blur(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0px);
  }
}
@keyframes styles-module__settingsPanelOut___Zfymi {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0px);
  }
  to {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
    filter: blur(5px);
  }
}
.styles-module__toolbar___wNsdK {
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  width: 297px;
  z-index: 100000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: none;
  transition: left 0s, top 0s, right 0s, bottom 0s;
}

.styles-module__toolbarContainer___dIhma {
  user-select: none;
  margin-left: auto;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  color: #fff;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
  cursor: grab;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toolbarContainer___dIhma.styles-module__dragging___xrolZ {
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  cursor: grabbing;
}
.styles-module__toolbarContainer___dIhma.styles-module__entrance___sgHd8 {
  animation: styles-module__toolbarEnter___u8RRu 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn {
  width: 44px;
  height: 44px;
  border-radius: 22px;
  padding: 0;
  cursor: pointer;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn svg {
  margin-top: -1px;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #2a2a2a;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:active {
  transform: scale(0.95);
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx {
  height: 44px;
  border-radius: 1.5rem;
  padding: 0.375rem;
  width: 257px;
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx.styles-module__serverConnected___Gfbou {
  width: 297px;
}

.styles-module__toggleContent___0yfyP {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.1s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toggleContent___0yfyP.styles-module__visible___KHwEW {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.styles-module__toggleContent___0yfyP.styles-module__hidden___Ae8H4 {
  opacity: 0;
  pointer-events: none;
}

.styles-module__controlsContent___9GJWU {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  transition: filter 0.8s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1), transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW {
  opacity: 1;
  filter: blur(0px);
  transform: scale(1);
  visibility: visible;
  pointer-events: auto;
}
.styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
  pointer-events: none;
  opacity: 0;
  filter: blur(10px);
  transform: scale(0.4);
}

.styles-module__badge___2XsgF {
  position: absolute;
  top: -13px;
  right: -13px;
  user-select: none;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background: #3c82f7;
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.2s ease;
  transform: scale(1);
}
.styles-module__badge___2XsgF.styles-module__fadeOut___6Ut6- {
  opacity: 0;
  transform: scale(0);
  pointer-events: none;
}
.styles-module__badge___2XsgF.styles-module__entrance___sgHd8 {
  animation: styles-module__badgeEnter___mVQLj 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) 0.4s both;
}

.styles-module__controlButton___8Q0jc {
  position: relative;
  cursor: pointer !important;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease, opacity 0.2s ease;
}
.styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
.styles-module__controlButton___8Q0jc:active:not(:disabled) {
  transform: scale(0.92);
}
.styles-module__controlButton___8Q0jc:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.styles-module__controlButton___8Q0jc[data-active=true] {
  color: #3c82f7;
  background: rgba(60, 130, 247, 0.25);
}
.styles-module__controlButton___8Q0jc[data-error=true] {
  color: #ff3b30;
  background: rgba(255, 59, 48, 0.25);
}
.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  background: rgba(255, 59, 48, 0.25);
  color: #ff3b30;
}
.styles-module__controlButton___8Q0jc[data-no-hover=true], .styles-module__controlButton___8Q0jc.styles-module__statusShowing___te6iu {
  cursor: default !important;
  pointer-events: none;
  background: transparent !important;
}
.styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: #34c759;
  background: transparent;
  cursor: default;
}
.styles-module__controlButton___8Q0jc[data-failed=true] {
  color: #ff3b30;
  background: rgba(255, 59, 48, 0.25);
}

.styles-module__buttonBadge___NeFWb {
  position: absolute;
  top: 0px;
  right: 0px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background: #3c82f7;
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px #1a1a1a, 0 1px 3px rgba(0, 0, 0, 0.2);
  pointer-events: none;
}
.styles-module__buttonBadge___NeFWb.styles-module__light___r6n4Y {
  box-shadow: 0 0 0 2px #fff, 0 1px 3px rgba(0, 0, 0, 0.2);
}

@keyframes styles-module__mcpIndicatorPulseConnected___EDodZ {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(52, 199, 89, 0.5);
  }
  50% {
    box-shadow: 0 0 0 5px rgba(52, 199, 89, 0);
  }
}
@keyframes styles-module__mcpIndicatorPulseConnecting___cCYte {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(245, 166, 35, 0.5);
  }
  50% {
    box-shadow: 0 0 0 5px rgba(245, 166, 35, 0);
  }
}
.styles-module__mcpIndicator___zGJeL {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  pointer-events: none;
  transition: background 0.3s ease, opacity 0.15s ease, transform 0.15s ease;
  opacity: 1;
  transform: scale(1);
}
.styles-module__mcpIndicator___zGJeL.styles-module__connected___7c28g {
  background: #34c759;
  animation: styles-module__mcpIndicatorPulseConnected___EDodZ 2.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__connecting___uo-CW {
  background: #f5a623;
  animation: styles-module__mcpIndicatorPulseConnecting___cCYte 1.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__hidden___Ae8H4 {
  opacity: 0;
  transform: scale(0);
  animation: none;
}

@keyframes styles-module__connectionPulse___-Zycw {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.9);
  }
}
.styles-module__connectionIndicatorWrapper___L-e-3 {
  width: 8px;
  height: 34px;
  margin-left: 6px;
  margin-right: 6px;
}

.styles-module__connectionIndicator___afk9p {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease, background 0.3s ease;
  cursor: default;
}

.styles-module__connectionIndicatorVisible___C-i5B {
  opacity: 1;
}

.styles-module__connectionIndicatorConnected___IY8pR {
  background: #34c759;
  animation: styles-module__connectionPulse___-Zycw 2.5s ease-in-out infinite;
}

.styles-module__connectionIndicatorDisconnected___kmpaZ {
  background: #ff3b30;
  animation: none;
}

.styles-module__connectionIndicatorConnecting___QmSLH {
  background: #f59e0b;
  animation: styles-module__connectionPulse___-Zycw 1s ease-in-out infinite;
}

.styles-module__buttonWrapper___rBcdv {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) scale(1);
  transition-delay: 0.85s;
}
.styles-module__buttonWrapper___rBcdv:has(.styles-module__controlButton___8Q0jc:disabled):hover .styles-module__buttonTooltip___Burd9 {
  opacity: 0;
  visibility: hidden;
}

.styles-module__sendButtonWrapper___UUxG6 {
  width: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  margin-left: -0.375rem;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s cubic-bezier(0.19, 1, 0.22, 1), margin 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6 .styles-module__controlButton___8Q0jc {
  transform: scale(0.8);
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU {
  width: 34px;
  opacity: 1;
  overflow: visible;
  pointer-events: auto;
  margin-left: 0;
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU .styles-module__controlButton___8Q0jc {
  transform: scale(1);
}

.styles-module__buttonTooltip___Burd9 {
  position: absolute;
  bottom: calc(100% + 14px);
  left: 50%;
  transform: translateX(-50%) scale(0.95);
  padding: 6px 10px;
  background: #1a1a1a;
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 100001;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: opacity 0.135s ease, transform 0.135s ease, visibility 0.135s ease;
}
.styles-module__buttonTooltip___Burd9::after {
  content: "";
  position: absolute;
  top: calc(100% - 4px);
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background: #1a1a1a;
  border-radius: 0 0 2px 0;
}

.styles-module__shortcut___lEAQk {
  margin-left: 4px;
  opacity: 0.5;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9 {
  bottom: auto;
  top: calc(100% + 14px);
  transform: translateX(-50%) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9::after {
  top: -4px;
  bottom: auto;
  border-radius: 2px 0 0 0;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-50%) scale(1);
}

.styles-module__tooltipsHidden___VtLJG .styles-module__buttonTooltip___Burd9 {
  opacity: 0 !important;
  visibility: hidden !important;
  transition: none !important;
}

.styles-module__tooltipVisible___0jcCv,
.styles-module__tooltipsHidden___VtLJG .styles-module__tooltipVisible___0jcCv {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateX(-50%) scale(1) !important;
  transition-delay: 0s !important;
}

.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(-12px) scale(0.95);
}
.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9::after {
  left: 16px;
}
.styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9::after {
  left: auto;
  right: 8px;
}
.styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__divider___c--s1 {
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 0.125rem;
}

.styles-module__overlay___Q1O9y {
  position: fixed;
  inset: 0;
  z-index: 99997;
  pointer-events: none;
}
.styles-module__overlay___Q1O9y > * {
  pointer-events: auto;
}

.styles-module__hoverHighlight___ogakW {
  position: fixed;
  border: 2px solid rgba(60, 130, 247, 0.5);
  border-radius: 4px;
  pointer-events: none !important;
  background: rgba(60, 130, 247, 0.04);
  box-sizing: border-box;
  will-change: opacity;
  contain: layout style;
}
.styles-module__hoverHighlight___ogakW.styles-module__enter___WFIki {
  animation: styles-module__hoverHighlightIn___6WYHY 0.12s ease-out forwards;
}

.styles-module__multiSelectOutline___cSJ-m {
  position: fixed;
  border: 2px dashed rgba(52, 199, 89, 0.6);
  border-radius: 4px;
  pointer-events: none !important;
  background: rgba(52, 199, 89, 0.05);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__singleSelectOutline___QhX-O {
  position: fixed;
  border: 2px solid rgba(60, 130, 247, 0.6);
  border-radius: 4px;
  pointer-events: none !important;
  background: rgba(60, 130, 247, 0.05);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__hoverTooltip___bvLk7 {
  position: fixed;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #fff;
  background: rgba(0, 0, 0, 0.85);
  padding: 0.35rem 0.6rem;
  border-radius: 0.375rem;
  pointer-events: none !important;
  white-space: nowrap;
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.styles-module__hoverTooltip___bvLk7.styles-module__enter___WFIki {
  animation: styles-module__hoverTooltipIn___FYGQx 0.1s ease-out forwards;
}

.styles-module__hoverReactPath___gx1IJ {
  font-size: 0.625rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__hoverElementName___QMLMl {
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markersLayer___-25j1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__markersLayer___-25j1 > * {
  pointer-events: auto;
}

.styles-module__fixedMarkersLayer___ffyX6 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__fixedMarkersLayer___ffyX6 > * {
  pointer-events: auto;
}

.styles-module__marker___6sQrs {
  position: absolute;
  width: 22px;
  height: 22px;
  background: #3c82f7;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___6sQrs:hover {
  z-index: 2;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___6sQrs.styles-module__enter___WFIki {
  animation: styles-module__markerIn___5FaAP 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___6sQrs.styles-module__exit___fyOJ0 {
  animation: styles-module__markerOut___GU5jX 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs.styles-module__clearing___FQ--7 {
  animation: styles-module__markerOut___GU5jX 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___6sQrs.styles-module__pending___2IHLC {
  position: fixed;
  background: #3c82f7;
}
.styles-module__marker___6sQrs.styles-module__fixed___dBMHC {
  position: fixed;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz {
  background: #34c759;
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz.styles-module__pending___2IHLC {
  background: #34c759;
}
.styles-module__marker___6sQrs.styles-module__hovered___ZgXIy {
  background: #ff3b30;
}

.styles-module__renumber___nCTxD {
  display: block;
  animation: styles-module__renumberRoll___Wgbq3 0.2s ease-out;
}

@keyframes styles-module__renumberRoll___Wgbq3 {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__markerTooltip___aLJID {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___aLJID.styles-module__enter___WFIki {
  animation: styles-module__tooltipIn___0N31w 0.1s ease-out forwards;
}

.styles-module__markerQuote___FHmrz {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___QkrrS {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

.styles-module__markerHint___2iF-6 {
  display: block;
  font-size: 0.625rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.375rem;
  white-space: nowrap;
}

.styles-module__settingsPanel___OxX3Y {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 1rem;
  padding: 13px 0 16px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y::before, .styles-module__settingsPanel___OxX3Y::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___OxX3Y::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY,
.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz,
.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa,
.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax,
.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr,
.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp,
.styles-module__settingsPanel___OxX3Y .styles-module__helpIcon___xQg56,
.styles-module__settingsPanel___OxX3Y .styles-module__themeToggle___2rUjA {
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__enter___WFIki {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__exit___fyOJ0 {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.6);
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf .styles-module__settingsOption___UNa12 {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf .styles-module__settingsOption___UNa12:hover {
  background: rgba(255, 255, 255, 0.1);
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf .styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf .styles-module__toggleLabel___Xm8Aa {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__settingsPanelContainer___Xksv8 {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 1rem;
}
.styles-module__settingsPanelContainer___Xksv8.styles-module__transitioning___qxzCk {
  overflow-x: clip;
  overflow-y: visible;
}

.styles-module__settingsPage___6YfHH {
  min-width: 100%;
  flex-shrink: 0;
  transition: transform 0.35s cubic-bezier(0.32, 0.72, 0, 1), opacity 0.2s ease-out;
  opacity: 1;
}

.styles-module__settingsPage___6YfHH.styles-module__slideLeft___Ps01J {
  transform: translateX(-100%);
  opacity: 0;
}

.styles-module__automationsPage___uvCq6 {
  position: absolute;
  top: 0;
  left: 100%;
  width: 100%;
  height: 100%;
  padding: 3px 1rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.35s cubic-bezier(0.32, 0.72, 0, 1), opacity 0.25s ease-out 0.1s;
  opacity: 0;
}

.styles-module__automationsPage___uvCq6.styles-module__slideIn___4-qXe {
  transform: translateX(-100%);
  opacity: 1;
}

.styles-module__settingsNavLink___wCzJt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(255, 255, 255, 0.9);
}
.styles-module__settingsNavLink___wCzJt.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__settingsNavLink___wCzJt.styles-module__light___r6n4Y:hover {
  color: rgba(0, 0, 0, 0.8);
}
.styles-module__settingsNavLink___wCzJt svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover svg {
  color: #fff;
}
.styles-module__settingsNavLink___wCzJt.styles-module__light___r6n4Y svg {
  color: rgba(0, 0, 0, 0.25);
}
.styles-module__settingsNavLink___wCzJt.styles-module__light___r6n4Y:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___ZWwhj {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__mcpNavIndicator___cl9pO {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connected___7c28g {
  background: #34c759;
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connecting___uo-CW {
  background: #f5a623;
  animation: styles-module__mcpPulse___uNggr 1.5s ease-in-out infinite;
}

.styles-module__settingsBackButton___bIe2j {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 0 12px 0;
  margin: -6px 0 0.5rem 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 0;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j:hover svg {
  opacity: 1;
}
.styles-module__settingsBackButton___bIe2j.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___InP0r {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
.styles-module__automationHeader___InP0r .styles-module__helpIcon___xQg56 svg {
  transform: none;
}
.styles-module__automationHeader___InP0r.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___NKlmo {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
.styles-module__automationDescription___NKlmo.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___8xv-x {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___8xv-x:hover {
  color: #fff;
}
.styles-module__learnMoreLink___8xv-x.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
.styles-module__learnMoreLink___8xv-x.styles-module__light___r6n4Y:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendRow___UblX5 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.styles-module__autoSendLabel___icDc2 {
  font-size: 0.6875rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: #66b8ff;
}
.styles-module__autoSendLabel___icDc2.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__autoSendLabel___icDc2.styles-module__light___r6n4Y.styles-module__active___-zoN6 {
  color: #3c82f7;
}

.styles-module__webhookUrlInput___2375C {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  cursor: text !important;
  user-select: text;
  transition: border-color 0.15s ease, background 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__webhookUrlInput___2375C.styles-module__light___r6n4Y {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__webhookUrlInput___2375C.styles-module__light___r6n4Y::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
.styles-module__webhookUrlInput___2375C.styles-module__light___r6n4Y:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__settingsHeader___pwDY9 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  margin-bottom: 0.5rem;
  padding-bottom: 9px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.styles-module__settingsBrand___0gJeM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
}

.styles-module__settingsBrandSlash___uTG18 {
  color: rgba(255, 255, 255, 0.5);
}

.styles-module__settingsVersion___TUcFq {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__settingsSection___m-YM2 + .styles-module__settingsSection___m-YM2 {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__settingsSection___m-YM2.styles-module__settingsSectionExtraPadding___jdhFV {
  padding-top: calc(0.5rem + 4px);
}

.styles-module__settingsSectionGrow___h-5HZ {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___3sdhc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___3sdhc.styles-module__settingsRowMarginTop___zA0Sp {
  margin-top: 8px;
}

.styles-module__dropdownContainer___BVnxe {
  position: relative;
}

.styles-module__dropdownButton___16NPz {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownButton___16NPz:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownButton___16NPz svg {
  opacity: 0.6;
}

.styles-module__cycleButton___FMKfw {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
.styles-module__cycleButton___FMKfw.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___FMKfw:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.2);
}
.styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__settingsRowDisabled___EgS0V .styles-module__toggleSwitch___l4Ygm {
  opacity: 0.4;
  cursor: not-allowed;
}

@keyframes styles-module__cycleTextIn___Q6zJf {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__cycleButtonText___fD1LR {
  display: inline-block;
  animation: styles-module__cycleTextIn___Q6zJf 0.2s ease-out;
}

.styles-module__cycleDots___LWuoQ {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___nPgLY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: #fff;
  transform: scale(1);
}
.styles-module__cycleDot___nPgLY.styles-module__light___r6n4Y {
  background: rgba(0, 0, 0, 0.2);
}
.styles-module__cycleDot___nPgLY.styles-module__light___r6n4Y.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__dropdownMenu___k73ER {
  position: absolute;
  right: 0;
  top: calc(100% + 0.25rem);
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 0.25rem;
  min-width: 120px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 10;
  animation: styles-module__scaleIn___c-r1K 0.15s ease-out;
}

.styles-module__dropdownItem___ylsLj {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.625rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownItem___ylsLj:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownItem___ylsLj.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-weight: 600;
}

.styles-module__settingsLabel___8UjfX {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 0.125rem;
}
.styles-module__settingsLabel___8UjfX.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__settingsLabelMarker___ewdtV {
  padding-top: 3px;
  margin-bottom: 10px;
}

.styles-module__settingsOptions___LyrBA {
  display: flex;
  gap: 0.25rem;
}

.styles-module__settingsOption___UNa12 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__settingsOption___UNa12:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(60, 130, 247, 0.15);
  color: #3c82f7;
}

.styles-module__sliderContainer___ducXj {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.styles-module__slider___GLdxp {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
.styles-module__slider___GLdxp::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp:hover::-webkit-slider-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
.styles-module__slider___GLdxp:hover::-moz-range-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.styles-module__sliderLabels___FhLDB {
  display: flex;
  justify-content: space-between;
}

.styles-module__sliderLabel___U8sPr {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__sliderLabel___U8sPr:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(255, 255, 255, 0.9);
}

.styles-module__colorOptions___iHCNX {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.375rem;
  margin-bottom: 1px;
}

.styles-module__colorOption___IodiY {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}
.styles-module__colorOption___IodiY:hover {
  transform: scale(1.15);
}
.styles-module__colorOption___IodiY.styles-module__selected___OwRqP {
  transform: scale(0.83);
}

.styles-module__colorOptionRing___U2xpo {
  display: flex;
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: border-color 0.3s ease;
}
.styles-module__settingsToggle___fBrFn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}
.styles-module__settingsToggle___fBrFn + .styles-module__settingsToggle___fBrFn {
  margin-top: calc(0.5rem + 6px);
}
.styles-module__settingsToggle___fBrFn input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__settingsToggle___fBrFn.styles-module__settingsToggleMarginBottom___MZUyF {
  margin-bottom: calc(0.5rem + 6px);
}

.styles-module__customCheckbox___U39ax {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.25s ease, border-color 0.25s ease;
}
.styles-module__customCheckbox___U39ax svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
input[type=checkbox]:checked + .styles-module__customCheckbox___U39ax {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
.styles-module__customCheckbox___U39ax.styles-module__light___r6n4Y {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
.styles-module__customCheckbox___U39ax.styles-module__light___r6n4Y.styles-module__checked___mnZLo {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
.styles-module__customCheckbox___U39ax.styles-module__light___r6n4Y.styles-module__checked___mnZLo svg {
  color: #fff;
}

.styles-module__toggleLabel___Xm8Aa {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.styles-module__toggleLabel___Xm8Aa.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__toggleSwitch___l4Ygm {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
  transition: opacity 0.15s ease;
}
.styles-module__toggleSwitch___l4Ygm input {
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn {
  background: #3c82f7;
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn::before {
  transform: translateX(8px);
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw {
  opacity: 0.4;
  pointer-events: none;
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw .styles-module__toggleSlider___wprIn {
  cursor: not-allowed;
}

.styles-module__toggleSlider___wprIn {
  position: absolute;
  cursor: pointer;
  inset: 0;
  border-radius: 16px;
  background: #484848;
}
.styles-module__light___r6n4Y .styles-module__toggleSlider___wprIn {
  background: #dddddd;
}
.styles-module__toggleSlider___wprIn::before {
  content: "";
  position: absolute;
  height: 12px;
  width: 12px;
  left: 2px;
  bottom: 2px;
  background: white;
  border-radius: 50%;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

@keyframes styles-module__mcpPulse___uNggr {
  0% {
    box-shadow: 0 0 0 0 rgba(52, 199, 89, 0.5);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(52, 199, 89, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(52, 199, 89, 0);
  }
}
@keyframes styles-module__mcpPulseError___fov9B {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 59, 48, 0.5);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(255, 59, 48, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 59, 48, 0);
  }
}
.styles-module__mcpStatusDot___ibgkc {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connecting___uo-CW {
  background: #f5a623;
  animation: styles-module__mcpPulse___uNggr 1.5s infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connected___7c28g {
  background: #34c759;
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__disconnected___cHPxR {
  background: #ff3b30;
  animation: styles-module__mcpPulseError___fov9B 2s infinite;
}

.styles-module__helpIcon___xQg56 {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: help;
  margin-left: 0;
}
.styles-module__helpIcon___xQg56 svg {
  display: block;
  transform: translateY(1px);
  color: rgba(255, 255, 255, 0.2);
  transition: color 0.15s ease;
}
.styles-module__helpIcon___xQg56:hover svg {
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__helpIcon___xQg56.styles-module__helpIconNudgeDown___0cqpM svg {
  transform: translateY(1px);
}
.styles-module__helpIcon___xQg56.styles-module__helpIconNoNudge___abogC svg {
  transform: translateY(0.5px);
}
.styles-module__helpIcon___xQg56.styles-module__helpIconNudge1-5___DM2TQ svg {
  transform: translateY(1.5px);
}
.styles-module__helpIcon___xQg56.styles-module__helpIconNudge2___TfWgC svg {
  transform: translateY(2px);
}

.styles-module__dragSelection___kZLq2 {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid rgba(52, 199, 89, 0.6);
  border-radius: 4px;
  background: rgba(52, 199, 89, 0.08);
  pointer-events: none;
  z-index: 99997;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__dragCount___KM90j {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #34c759;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  min-width: 1.5rem;
  text-align: center;
}

.styles-module__highlightsContainer___-0xzG {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__selectedElementHighlight___fyVlI {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid rgba(52, 199, 89, 0.5);
  border-radius: 4px;
  background: rgba(52, 199, 89, 0.06);
  pointer-events: none;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__light___r6n4Y.styles-module__toolbarContainer___dIhma {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
.styles-module__light___r6n4Y.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #f5f5f5;
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc[data-active=true] {
  color: #3c82f7;
  background: rgba(60, 130, 247, 0.15);
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc[data-error=true] {
  color: #ff3b30;
  background: rgba(255, 59, 48, 0.15);
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  background: rgba(255, 59, 48, 0.15);
  color: #ff3b30;
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: #34c759;
  background: transparent;
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc[data-failed=true] {
  color: #ff3b30;
  background: rgba(255, 59, 48, 0.15);
}
.styles-module__light___r6n4Y.styles-module__buttonTooltip___Burd9 {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
.styles-module__light___r6n4Y.styles-module__buttonTooltip___Burd9::after {
  background: #fff;
}
.styles-module__light___r6n4Y.styles-module__divider___c--s1 {
  background: rgba(0, 0, 0, 0.1);
}
.styles-module__light___r6n4Y.styles-module__markerTooltip___aLJID {
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___r6n4Y.styles-module__markerTooltip___aLJID .styles-module__markerQuote___FHmrz {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___r6n4Y.styles-module__markerTooltip___aLJID .styles-module__markerNote___QkrrS {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__light___r6n4Y.styles-module__markerTooltip___aLJID .styles-module__markerHint___2iF-6 {
  color: rgba(0, 0, 0, 0.35);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y::before {
  background: linear-gradient(to right, #fff 0%, transparent 100%);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y::after {
  background: linear-gradient(to left, #fff 0%, transparent 100%);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9 {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18 {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2 {
  border-top-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY {
  background: rgba(0, 0, 0, 0.2);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo svg {
  color: #fff;
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr:hover {
  color: rgba(0, 0, 0, 0.7);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(0, 0, 0, 0.9);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp {
  background: rgba(0, 0, 0, 0.1);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp::-webkit-slider-thumb {
  background: #1a1a1a;
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp::-moz-range-thumb {
  background: #1a1a1a;
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__helpIcon___xQg56 svg {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__helpIcon___xQg56:hover svg {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__themeToggle___2rUjA {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: 0.5rem;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__themeToggle___2rUjA:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}
.styles-module__light___r6n4Y .styles-module__themeToggle___2rUjA {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___r6n4Y .styles-module__themeToggle___2rUjA:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.7);
}

.styles-module__themeIconWrapper___LsJIM {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
}

.styles-module__themeIcon___lCCmo {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: styles-module__themeIconIn___TU6ML 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes styles-module__themeIconIn___TU6ML {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(-30deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}`,rg={toolbar:"styles-module__toolbar___wNsdK",toolbarContainer:"styles-module__toolbarContainer___dIhma",dragging:"styles-module__dragging___xrolZ",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",controlsContent:"styles-module__controlsContent___9GJWU",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",light:"styles-module__light___r6n4Y",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",helpIcon:"styles-module__helpIcon___xQg56",themeToggle:"styles-module__themeToggle___2rUjA",dark:"styles-module__dark___ILIQf",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",transitioning:"styles-module__transitioning___qxzCk",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",helpIconNudgeDown:"styles-module__helpIconNudgeDown___0cqpM",helpIconNoNudge:"styles-module__helpIconNoNudge___abogC","helpIconNudge1-5":"styles-module__helpIconNudge1-5___DM2TQ",helpIconNudge2:"styles-module__helpIconNudge2___TfWgC",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",themeIconWrapper:"styles-module__themeIconWrapper___LsJIM",themeIcon:"styles-module__themeIcon___lCCmo",themeIconIn:"styles-module__themeIconIn___TU6ML",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje",settingsPanelIn:"styles-module__settingsPanelIn___MGfO8",settingsPanelOut:"styles-module__settingsPanelOut___Zfymi"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-page-toolbar-css-styles",t.textContent=cg,document.head.appendChild(t))}var r=rg;function od(t,e="filtered"){let{name:n,path:l}=Ws(t);if(e==="off")return{name:n,elementName:n,path:l,reactComponents:null};let a=ug(t,{mode:e});return{name:a.path?`${a.path} ${n}`:n,elementName:n,path:l,reactComponents:a.path}}var Km=!1,Jm={outputDetail:"standard",autoClearAfterCopy:!1,annotationColor:"#3c82f7",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},ln=t=>{if(!t||!t.trim())return!1;try{let e=new URL(t.trim());return e.protocol==="http:"||e.protocol==="https:"}catch{return!1}},dg={compact:"off",standard:"filtered",detailed:"smart",forensic:"all"},ei=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}],_g=[{value:"#AF52DE",label:"Purple"},{value:"#3c82f7",label:"Blue"},{value:"#5AC8FA",label:"Cyan"},{value:"#34C759",label:"Green"},{value:"#FFD60A",label:"Yellow"},{value:"#FF9500",label:"Orange"},{value:"#FF3B30",label:"Red"}];function Ya(t,e){let n=document.elementFromPoint(t,e);if(!n)return null;for(;n?.shadowRoot;){let l=n.shadowRoot.elementFromPoint(t,e);if(!l||l===n)break;n=l}return n}function id(t){let e=t;for(;e&&e!==document.body;){let l=window.getComputedStyle(e).position;if(l==="fixed"||l==="sticky")return!0;e=e.parentElement}return!1}function Wm(t,e,n="standard",l="filtered"){if(t.length===0)return"";let a=typeof window<"u"?`${window.innerWidth}\xD7${window.innerHeight}`:"unknown",o=`## Page Feedback: ${e}
`;return n==="forensic"?(o+=`
**Environment:**
`,o+=`- Viewport: ${a}
`,typeof window<"u"&&(o+=`- URL: ${window.location.href}
`,o+=`- User Agent: ${navigator.userAgent}
`,o+=`- Timestamp: ${new Date().toISOString()}
`,o+=`- Device Pixel Ratio: ${window.devicePixelRatio}
`),o+=`
---
`):n!=="compact"&&(o+=`**Viewport:** ${a}
`),o+=`
`,t.forEach((i,s)=>{n==="compact"?(o+=`${s+1}. **${i.element}**: ${i.comment}`,i.selectedText&&(o+=` (re: "${i.selectedText.slice(0,30)}${i.selectedText.length>30?"...":""}")`),o+=`
`):n==="forensic"?(o+=`### ${s+1}. ${i.element}
`,i.isMultiSelect&&i.fullPath&&(o+=`*Forensic data shown for first element of selection*
`),i.fullPath&&(o+=`**Full DOM Path:** ${i.fullPath}
`),i.cssClasses&&(o+=`**CSS Classes:** ${i.cssClasses}
`),i.boundingBox&&(o+=`**Position:** x:${Math.round(i.boundingBox.x)}, y:${Math.round(i.boundingBox.y)} (${Math.round(i.boundingBox.width)}\xD7${Math.round(i.boundingBox.height)}px)
`),o+=`**Annotation at:** ${i.x.toFixed(1)}% from left, ${Math.round(i.y)}px from top
`,i.selectedText&&(o+=`**Selected text:** "${i.selectedText}"
`),i.nearbyText&&!i.selectedText&&(o+=`**Context:** ${i.nearbyText.slice(0,100)}
`),i.computedStyles&&(o+=`**Computed Styles:** ${i.computedStyles}
`),i.accessibility&&(o+=`**Accessibility:** ${i.accessibility}
`),i.nearbyElements&&(o+=`**Nearby Elements:** ${i.nearbyElements}
`),i.reactComponents&&(o+=`**React:** ${i.reactComponents}
`),o+=`**Feedback:** ${i.comment}

`):(o+=`### ${s+1}. ${i.element}
`,o+=`**Location:** ${i.elementPath}
`,i.reactComponents&&(o+=`**React:** ${i.reactComponents}
`),n==="detailed"&&(i.cssClasses&&(o+=`**Classes:** ${i.cssClasses}
`),i.boundingBox&&(o+=`**Position:** ${Math.round(i.boundingBox.x)}px, ${Math.round(i.boundingBox.y)}px (${Math.round(i.boundingBox.width)}\xD7${Math.round(i.boundingBox.height)}px)
`)),i.selectedText&&(o+=`**Selected text:** "${i.selectedText}"
`),n==="detailed"&&i.nearbyText&&!i.selectedText&&(o+=`**Context:** ${i.nearbyText.slice(0,100)}
`),o+=`**Feedback:** ${i.comment}

`)}),o.trim()}function e5({demoAnnotations:t,demoDelay:e=1e3,enableDemoMode:n=!1,onAnnotationAdd:l,onAnnotationDelete:a,onAnnotationUpdate:o,onAnnotationsClear:i,onCopy:s,onSubmit:u,copyToClipboard:h=!0,endpoint:y,sessionId:v,onSessionCreated:p,webhookUrl:b}={}){let[T,O]=(0,E.useState)(!1),[L,f]=(0,E.useState)([]),[_,g]=(0,E.useState)(!0),[C,B]=(0,E.useState)(!1),[X,N]=(0,E.useState)(!1),[H,G]=(0,E.useState)(null),[I,ke]=(0,E.useState)({x:0,y:0}),[D,le]=(0,E.useState)(null),[Ol,Dl]=(0,E.useState)(!1),[me,Ua]=(0,E.useState)("idle"),[dd,jt]=(0,E.useState)(!1),[Bl,Ge]=(0,E.useState)(!1),[ni,Fs]=(0,E.useState)(null),[Ps,sl]=(0,E.useState)(null),[_d,Ra]=(0,E.useState)([]),[fd,md]=(0,E.useState)(null),[li,hd]=(0,E.useState)(null),[P,ja]=(0,E.useState)(null),[tu,an]=(0,E.useState)(null),[yd,ul]=(0,E.useState)([]),[cl,gd]=(0,E.useState)(0),[pd,bd]=(0,E.useState)(!1),[Ot,a5]=(0,E.useState)(!1),[Xe,vd]=(0,E.useState)(!1),[Xa,xd]=(0,E.useState)(!1),[o5,Cd]=(0,E.useState)(!1),[eu,nu]=(0,E.useState)("main"),[Sd,wd]=(0,E.useState)(!1),[i5,lu]=(0,E.useState)(!1),[Dt,Yl]=(0,E.useState)([]),$e=(0,E.useRef)({cmd:!1,shift:!1}),ae=()=>{lu(!0)},s5=()=>{lu(!1)},Qa=({content:c,children:d})=>{let[S,k]=(0,E.useState)(!1),[x,A]=(0,E.useState)(!1),[Y,R]=(0,E.useState)(!1),[J,$]=(0,E.useState)({top:0,right:0}),j=(0,E.useRef)(null),q=(0,E.useRef)(null),V=(0,E.useRef)(null),Z=()=>{if(j.current){let Mt=j.current.getBoundingClientRect();$({top:Mt.top+Mt.height/2,right:window.innerWidth-Mt.left+8})}},U=()=>{k(!0),R(!0),V.current&&(clearTimeout(V.current),V.current=null),Z(),q.current=st(()=>{A(!0)},500)},Me=()=>{k(!1),q.current&&(clearTimeout(q.current),q.current=null),A(!1),V.current=st(()=>{R(!1)},150)};return(0,E.useEffect)(()=>()=>{q.current&&clearTimeout(q.current),V.current&&clearTimeout(V.current)},[]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("span",{ref:j,onMouseEnter:U,onMouseLeave:Me,children:d}),Y&&(0,sd.createPortal)((0,m.jsx)("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:J.top,right:J.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:x&&!Sd?1:0,transition:"opacity 0.15s ease"},children:c}),document.body)]})},[z,zn]=(0,E.useState)(Jm),[F,Ed]=(0,E.useState)(!0),[Td,kd]=(0,E.useState)(!1),Hl=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.hostname==="0.0.0.0"||window.location.hostname.endsWith(".local")),on=Hl&&z.reactEnabled?dg[z.outputDetail]:"off",[he,au]=(0,E.useState)(v??null),Md=(0,E.useRef)(!1),[Pt,rl]=(0,E.useState)(y?"connecting":"disconnected"),[Tt,ou]=(0,E.useState)(null),[sn,Ad]=(0,E.useState)(!1),[Ul,zd]=(0,E.useState)(null),[u5,c5]=(0,E.useState)(0),iu=(0,E.useRef)(!1),[Ld,qa]=(0,E.useState)(new Set),[Nd,ai]=(0,E.useState)(new Set),[Za,oi]=(0,E.useState)(!1),[r5,Rl]=(0,E.useState)(!1),[un,Od]=(0,E.useState)(!1),jl=(0,E.useRef)(null),Ve=(0,E.useRef)(null),Ga=(0,E.useRef)(null),$a=(0,E.useRef)(null),ii=(0,E.useRef)(!1),Dd=(0,E.useRef)(0),si=(0,E.useRef)(null),Bd=(0,E.useRef)(null),su=8,d5=50,Yd=(0,E.useRef)(null),Hd=(0,E.useRef)(null),Va=(0,E.useRef)(null),ht=typeof window<"u"?window.location.pathname:"/";(0,E.useEffect)(()=>{if(Xa)Cd(!0);else{lu(!1),nu("main");let c=st(()=>Cd(!1),0);return()=>clearTimeout(c)}},[Xa]),(0,E.useEffect)(()=>{wd(!0);let c=st(()=>wd(!1),350);return()=>clearTimeout(c)},[eu]);let Ud=T&&_;(0,E.useEffect)(()=>{if(Ud){N(!1),B(!0),qa(new Set);let c=st(()=>{qa(d=>{let S=new Set(d);return L.forEach(k=>S.add(k.id)),S})},350);return()=>clearTimeout(c)}else if(C){N(!0);let c=st(()=>{B(!1),N(!1)},250);return()=>clearTimeout(c)}},[Ud]),(0,E.useEffect)(()=>{a5(!0),gd(window.scrollY);let c=ed(ht);f(c),Km||(kd(!0),Km=!0,st(()=>kd(!1),750));try{let d=localStorage.getItem("feedback-toolbar-settings");d&&zn({...Jm,...JSON.parse(d)})}catch{}try{let d=localStorage.getItem("feedback-toolbar-theme");d!==null&&Ed(d==="dark")}catch{}try{let d=localStorage.getItem("feedback-toolbar-position");if(d){let S=JSON.parse(d);typeof S.x=="number"&&typeof S.y=="number"&&ou(S)}}catch{}},[ht]),(0,E.useEffect)(()=>{Ot&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(z))},[z,Ot]),(0,E.useEffect)(()=>{Ot&&localStorage.setItem("feedback-toolbar-theme",F?"dark":"light")},[F,Ot]);let Rd=(0,E.useRef)(!1);(0,E.useEffect)(()=>{let c=Rd.current;Rd.current=sn,c&&!sn&&Tt&&Ot&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(Tt))},[sn,Tt,Ot]),(0,E.useEffect)(()=>{if(!y||!Ot||Md.current)return;Md.current=!0,rl("connecting"),(async()=>{try{let d=Vy(ht),S=v||d,k=!1;if(S)try{let x=await Zm(y,S);au(x.id),rl("connected"),nd(ht,x.id),k=!0;let A=ed(ht),Y=new Set(x.annotations.map(J=>J.id)),R=A.filter(J=>!Y.has(J.id));if(R.length>0){let $=`${typeof window<"u"?window.location.origin:""}${ht}`,q=(await Promise.allSettled(R.map(Z=>Js(y,x.id,{...Z,sessionId:x.id,url:$})))).map((Z,U)=>Z.status==="fulfilled"?Z.value:(console.warn("[Agentation] Failed to sync annotation:",Z.reason),R[U])),V=[...x.annotations,...q];f(V),Po(ht,V,x.id)}else f(x.annotations),Po(ht,x.annotations,x.id)}catch(x){console.warn("[Agentation] Could not join session, creating new:",x),Ky(ht)}if(!k){let x=typeof window<"u"?window.location.href:"/",A=await ld(y,x);au(A.id),rl("connected"),nd(ht,A.id),p?.(A.id);let Y=Gy(),R=typeof window<"u"?window.location.origin:"",J=[];for(let[$,j]of Y){let q=j.filter(U=>!U._syncedTo);if(q.length===0)continue;let V=`${R}${$}`,Z=$===ht;J.push((async()=>{try{let U=Z?A:await ld(y,V),Mt=(await Promise.allSettled(q.map(ye=>Js(y,U.id,{...ye,sessionId:U.id,url:V})))).map((ye,oe)=>ye.status==="fulfilled"?ye.value:(console.warn("[Agentation] Failed to sync annotation:",ye.reason),q[oe]));if(Po($,Mt,U.id),Z){let ye=new Set(q.map(oe=>oe.id));f(oe=>{let Ae=oe.filter(ot=>!ye.has(ot.id));return[...Mt,...Ae]})}}catch(U){console.warn(`[Agentation] Failed to sync annotations for ${$}:`,U)}})())}await Promise.allSettled(J)}}catch(d){rl("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",d)}})()},[y,v,Ot,p,ht]),(0,E.useEffect)(()=>{if(!y||!Ot)return;let c=async()=>{try{(await fetch(`${y}/health`)).ok?rl("connected"):rl("disconnected")}catch{rl("disconnected")}};c();let d=By(c,1e4);return()=>clearInterval(d)},[y,Ot]),(0,E.useEffect)(()=>{if(!y||!Ot||!he)return;let c=new EventSource(`${y}/sessions/${he}/events`),d=["resolved","dismissed"],S=k=>{try{let x=JSON.parse(k.data);if(d.includes(x.payload?.status)){let A=x.payload.id;ai(Y=>new Set(Y).add(A)),st(()=>{f(Y=>Y.filter(R=>R.id!==A)),ai(Y=>{let R=new Set(Y);return R.delete(A),R})},150)}}catch{}};return c.addEventListener("annotation.updated",S),()=>{c.removeEventListener("annotation.updated",S),c.close()}},[y,Ot,he]),(0,E.useEffect)(()=>{if(!y||!Ot)return;let c=Bd.current==="disconnected",d=Pt==="connected";Bd.current=Pt,c&&d&&(async()=>{try{let k=ed(ht);if(k.length===0)return;let A=`${typeof window<"u"?window.location.origin:""}${ht}`,Y=he,R=[];if(Y)try{R=(await Zm(y,Y)).annotations}catch{Y=null}Y||(Y=(await ld(y,A)).id,au(Y),nd(ht,Y));let J=new Set(R.map(j=>j.id)),$=k.filter(j=>!J.has(j.id));if($.length>0){let q=(await Promise.allSettled($.map(Z=>Js(y,Y,{...Z,sessionId:Y,url:A})))).map((Z,U)=>Z.status==="fulfilled"?Z.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",Z.reason),$[U])),V=[...R,...q];f(V),Po(ht,V,Y)}}catch(k){console.warn("[Agentation] Failed to sync on reconnect:",k)}})()},[Pt,y,Ot,he,ht]),(0,E.useEffect)(()=>{if(!n||!Ot||!t||t.length===0||L.length>0)return;let c=[];return c.push(st(()=>{O(!0)},e-200)),t.forEach((d,S)=>{let k=e+S*300;c.push(st(()=>{let x=document.querySelector(d.selector);if(!x)return;let A=x.getBoundingClientRect(),{name:Y,path:R}=Ws(x),J={id:`demo-${Date.now()}-${S}`,x:(A.left+A.width/2)/window.innerWidth*100,y:A.top+A.height/2+window.scrollY,comment:d.comment,element:Y,elementPath:R,timestamp:Date.now(),selectedText:d.selectedText,boundingBox:{x:A.left,y:A.top+window.scrollY,width:A.width,height:A.height},nearbyText:Io(x),cssClasses:Fo(x)};f($=>[...$,J])},k))}),()=>{c.forEach(clearTimeout)}},[n,Ot,t,e]),(0,E.useEffect)(()=>{let c=()=>{gd(window.scrollY),bd(!0),Va.current&&clearTimeout(Va.current),Va.current=st(()=>{bd(!1)},150)};return window.addEventListener("scroll",c,{passive:!0}),()=>{window.removeEventListener("scroll",c),Va.current&&clearTimeout(Va.current)}},[]),(0,E.useEffect)(()=>{Ot&&L.length>0?he?Po(ht,L,he):t5(ht,L):Ot&&L.length===0&&localStorage.removeItem(Is(ht))},[L,ht,Ot,he]);let jd=(0,E.useCallback)(()=>{Xe||(Hy(),vd(!0))},[Xe]),ui=(0,E.useCallback)(()=>{Xe&&(Qm(),vd(!1))},[Xe]),uu=(0,E.useCallback)(()=>{Xe?ui():jd()},[Xe,jd,ui]),Xd=(0,E.useCallback)(()=>{if(Dt.length===0)return;let c=Dt[0],d=c.element,S=Dt.length>1,k=Dt.map(x=>x.element.getBoundingClientRect());if(S){let x={left:Math.min(...k.map(U=>U.left)),top:Math.min(...k.map(U=>U.top)),right:Math.max(...k.map(U=>U.right)),bottom:Math.max(...k.map(U=>U.bottom))},A=Dt.slice(0,5).map(U=>U.name).join(", "),Y=Dt.length>5?` +${Dt.length-5} more`:"",R=k.map(U=>({x:U.left,y:U.top+window.scrollY,width:U.width,height:U.height})),$=Dt[Dt.length-1].element,j=k[k.length-1],q=j.left+j.width/2,V=j.top+j.height/2,Z=id($);le({x:q/window.innerWidth*100,y:Z?V:V+window.scrollY,clientY:V,element:`${Dt.length} elements: ${A}${Y}`,elementPath:"multi-select",boundingBox:{x:x.left,y:x.top+window.scrollY,width:x.right-x.left,height:x.bottom-x.top},isMultiSelect:!0,isFixed:Z,elementBoundingBoxes:R,multiSelectElements:Dt.map(U=>U.element),targetElement:$,fullPath:Ks(d),accessibility:Vs(d),computedStyles:$s(d),computedStylesObj:Gs(d),nearbyElements:Zs(d),cssClasses:Fo(d),nearbyText:Io(d)})}else{let x=k[0],A=id(d);le({x:x.left/window.innerWidth*100,y:A?x.top:x.top+window.scrollY,clientY:x.top,element:c.name,elementPath:c.path,boundingBox:{x:x.left,y:A?x.top:x.top+window.scrollY,width:x.width,height:x.height},isFixed:A,fullPath:Ks(d),accessibility:Vs(d),computedStyles:$s(d),computedStylesObj:Gs(d),nearbyElements:Zs(d),cssClasses:Fo(d),nearbyText:Io(d),reactComponents:c.reactComponents})}Yl([]),G(null)},[Dt]);(0,E.useEffect)(()=>{T||(le(null),ja(null),an(null),ul([]),G(null),xd(!1),Yl([]),$e.current={cmd:!1,shift:!1},Xe&&ui())},[T,Xe,ui]),(0,E.useEffect)(()=>()=>{Qm()},[]),(0,E.useEffect)(()=>{if(!T)return;let c=document.createElement("style");return c.id="feedback-cursor-styles",c.textContent=`
      body * {
        cursor: crosshair !important;
      }
      body p, body span, body h1, body h2, body h3, body h4, body h5, body h6,
      body li, body td, body th, body label, body blockquote, body figcaption,
      body caption, body legend, body dt, body dd, body pre, body code,
      body em, body strong, body b, body i, body u, body s, body a,
      body time, body address, body cite, body q, body abbr, body dfn,
      body mark, body small, body sub, body sup, body [contenteditable],
      body p *, body span *, body h1 *, body h2 *, body h3 *, body h4 *,
      body h5 *, body h6 *, body li *, body a *, body label *, body pre *,
      body code *, body blockquote *, body [contenteditable] * {
        cursor: text !important;
      }
      [data-feedback-toolbar], [data-feedback-toolbar] * {
        cursor: default !important;
      }
      [data-feedback-toolbar] textarea,
      [data-feedback-toolbar] input[type="text"],
      [data-feedback-toolbar] input[type="url"] {
        cursor: text !important;
      }
      [data-feedback-toolbar] button,
      [data-feedback-toolbar] button *,
      [data-feedback-toolbar] label,
      [data-feedback-toolbar] label *,
      [data-feedback-toolbar] a,
      [data-feedback-toolbar] a *,
      [data-feedback-toolbar] [role="button"],
      [data-feedback-toolbar] [role="button"] * {
        cursor: pointer !important;
      }
      [data-annotation-marker], [data-annotation-marker] * {
        cursor: pointer !important;
      }
    `,document.head.appendChild(c),()=>{let d=document.getElementById("feedback-cursor-styles");d&&d.remove()}},[T]),(0,E.useEffect)(()=>{if(!T||D)return;let c=d=>{let S=d.composedPath()[0]||d.target;if(fe(S,"[data-feedback-toolbar]")){G(null);return}let k=Ya(d.clientX,d.clientY);if(!k||fe(k,"[data-feedback-toolbar]")){G(null);return}let{name:x,elementName:A,path:Y,reactComponents:R}=od(k,on),J=k.getBoundingClientRect();G({element:x,elementName:A,elementPath:Y,rect:J,reactComponents:R}),ke({x:d.clientX,y:d.clientY})};return document.addEventListener("mousemove",c),()=>document.removeEventListener("mousemove",c)},[T,D,on]),(0,E.useEffect)(()=>{if(!T)return;let c=d=>{if(ii.current){ii.current=!1;return}let S=d.composedPath()[0]||d.target;if(fe(S,"[data-feedback-toolbar]")||fe(S,"[data-annotation-popup]")||fe(S,"[data-annotation-marker]"))return;if(d.metaKey&&d.shiftKey&&!D&&!P){d.preventDefault(),d.stopPropagation();let Mt=Ya(d.clientX,d.clientY);if(!Mt)return;let ye=Mt.getBoundingClientRect(),{name:oe,path:Ae,reactComponents:ot}=od(Mt,on),lt=Dt.findIndex(qt=>qt.element===Mt);lt>=0?Yl(qt=>qt.filter((Bt,Ln)=>Ln!==lt)):Yl(qt=>[...qt,{element:Mt,rect:ye,name:oe,path:Ae,reactComponents:ot??void 0}]);return}let k=fe(S,"button, a, input, select, textarea, [role='button'], [onclick]");if(z.blockInteractions&&k&&(d.preventDefault(),d.stopPropagation()),D){if(k&&!z.blockInteractions)return;d.preventDefault(),Yd.current?.shake();return}if(P){if(k&&!z.blockInteractions)return;d.preventDefault(),Hd.current?.shake();return}d.preventDefault();let x=Ya(d.clientX,d.clientY);if(!x)return;let{name:A,path:Y,reactComponents:R}=od(x,on),J=x.getBoundingClientRect(),$=d.clientX/window.innerWidth*100,j=id(x),q=j?d.clientY:d.clientY+window.scrollY,V=window.getSelection(),Z;V&&V.toString().trim().length>0&&(Z=V.toString().trim().slice(0,500));let U=Gs(x),Me=$s(x);le({x:$,y:q,clientY:d.clientY,element:A,elementPath:Y,selectedText:Z,boundingBox:{x:J.left,y:j?J.top:J.top+window.scrollY,width:J.width,height:J.height},nearbyText:Io(x),cssClasses:Fo(x),isFixed:j,fullPath:Ks(x),accessibility:Vs(x),computedStyles:Me,computedStylesObj:U,nearbyElements:Zs(x),reactComponents:R??void 0,targetElement:x}),G(null)};return document.addEventListener("click",c,!0),()=>document.removeEventListener("click",c,!0)},[T,D,P,z.blockInteractions,on,Dt]),(0,E.useEffect)(()=>{if(!T)return;let c=k=>{k.key==="Meta"&&($e.current.cmd=!0),k.key==="Shift"&&($e.current.shift=!0)},d=k=>{let x=$e.current.cmd&&$e.current.shift;k.key==="Meta"&&($e.current.cmd=!1),k.key==="Shift"&&($e.current.shift=!1);let A=$e.current.cmd&&$e.current.shift;x&&!A&&Dt.length>0&&Xd()},S=()=>{$e.current={cmd:!1,shift:!1},Yl([])};return document.addEventListener("keydown",c),document.addEventListener("keyup",d),window.addEventListener("blur",S),()=>{document.removeEventListener("keydown",c),document.removeEventListener("keyup",d),window.removeEventListener("blur",S)}},[T,Dt,Xd]),(0,E.useEffect)(()=>{if(!T||D)return;let c=d=>{let S=d.composedPath()[0]||d.target;fe(S,"[data-feedback-toolbar]")||fe(S,"[data-annotation-marker]")||fe(S,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(S.tagName)||S.isContentEditable||(jl.current={x:d.clientX,y:d.clientY})};return document.addEventListener("mousedown",c),()=>document.removeEventListener("mousedown",c)},[T,D]),(0,E.useEffect)(()=>{if(!T||D)return;let c=d=>{if(!jl.current)return;let S=d.clientX-jl.current.x,k=d.clientY-jl.current.y,x=S*S+k*k,A=su*su;if(!un&&x>=A&&(Ve.current=jl.current,Od(!0)),(un||x>=A)&&Ve.current){if(Ga.current){let ot=Math.min(Ve.current.x,d.clientX),lt=Math.min(Ve.current.y,d.clientY),qt=Math.abs(d.clientX-Ve.current.x),Bt=Math.abs(d.clientY-Ve.current.y);Ga.current.style.transform=`translate(${ot}px, ${lt}px)`,Ga.current.style.width=`${qt}px`,Ga.current.style.height=`${Bt}px`}let Y=Date.now();if(Y-Dd.current<d5)return;Dd.current=Y;let R=Ve.current.x,J=Ve.current.y,$=Math.min(R,d.clientX),j=Math.min(J,d.clientY),q=Math.max(R,d.clientX),V=Math.max(J,d.clientY),Z=($+q)/2,U=(j+V)/2,Me=new Set,Mt=[[$,j],[q,j],[$,V],[q,V],[Z,U],[Z,j],[Z,V],[$,U],[q,U]];for(let[ot,lt]of Mt){let qt=document.elementsFromPoint(ot,lt);for(let Bt of qt)Bt instanceof HTMLElement&&Me.add(Bt)}let ye=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(let ot of ye)if(ot instanceof HTMLElement){let lt=ot.getBoundingClientRect(),qt=lt.left+lt.width/2,Bt=lt.top+lt.height/2,Ln=qt>=$&&qt<=q&&Bt>=j&&Bt<=V,cn=Math.min(lt.right,q)-Math.max(lt.left,$),Zd=Math.min(lt.bottom,V)-Math.max(lt.top,j),g5=cn>0&&Zd>0?cn*Zd:0,Gd=lt.width*lt.height,p5=Gd>0?g5/Gd:0;(Ln||p5>.5)&&Me.add(ot)}let oe=[],Ae=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(let ot of Me){if(fe(ot,"[data-feedback-toolbar]")||fe(ot,"[data-annotation-marker]"))continue;let lt=ot.getBoundingClientRect();if(!(lt.width>window.innerWidth*.8&&lt.height>window.innerHeight*.5)&&!(lt.width<10||lt.height<10)&&lt.left<q&&lt.right>$&&lt.top<V&&lt.bottom>j){let qt=ot.tagName,Bt=Ae.has(qt);if(!Bt&&(qt==="DIV"||qt==="SPAN")){let Ln=ot.textContent&&ot.textContent.trim().length>0,cn=ot.onclick!==null||ot.getAttribute("role")==="button"||ot.getAttribute("role")==="link"||ot.classList.contains("clickable")||ot.hasAttribute("data-clickable");(Ln||cn)&&!ot.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(Bt=!0)}if(Bt){let Ln=!1;for(let cn of oe)if(cn.left<=lt.left&&cn.right>=lt.right&&cn.top<=lt.top&&cn.bottom>=lt.bottom){Ln=!0;break}Ln||oe.push(lt)}}}if($a.current){let ot=$a.current;for(;ot.children.length>oe.length;)ot.removeChild(ot.lastChild);oe.forEach((lt,qt)=>{let Bt=ot.children[qt];Bt||(Bt=document.createElement("div"),Bt.className=r.selectedElementHighlight,ot.appendChild(Bt)),Bt.style.transform=`translate(${lt.left}px, ${lt.top}px)`,Bt.style.width=`${lt.width}px`,Bt.style.height=`${lt.height}px`})}}};return document.addEventListener("mousemove",c,{passive:!0}),()=>document.removeEventListener("mousemove",c)},[T,D,un,su]),(0,E.useEffect)(()=>{if(!T)return;let c=d=>{let S=un,k=Ve.current;if(un&&k){ii.current=!0;let x=Math.min(k.x,d.clientX),A=Math.min(k.y,d.clientY),Y=Math.max(k.x,d.clientX),R=Math.max(k.y,d.clientY),J=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(Z=>{if(!(Z instanceof HTMLElement)||fe(Z,"[data-feedback-toolbar]")||fe(Z,"[data-annotation-marker]"))return;let U=Z.getBoundingClientRect();U.width>window.innerWidth*.8&&U.height>window.innerHeight*.5||U.width<10||U.height<10||U.left<Y&&U.right>x&&U.top<R&&U.bottom>A&&J.push({element:Z,rect:U})});let j=J.filter(({element:Z})=>!J.some(({element:U})=>U!==Z&&Z.contains(U))),q=d.clientX/window.innerWidth*100,V=d.clientY+window.scrollY;if(j.length>0){let Z=j.reduce((Ae,{rect:ot})=>({left:Math.min(Ae.left,ot.left),top:Math.min(Ae.top,ot.top),right:Math.max(Ae.right,ot.right),bottom:Math.max(Ae.bottom,ot.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),U=j.slice(0,5).map(({element:Ae})=>Ws(Ae).name).join(", "),Me=j.length>5?` +${j.length-5} more`:"",Mt=j[0].element,ye=Gs(Mt),oe=$s(Mt);le({x:q,y:V,clientY:d.clientY,element:`${j.length} elements: ${U}${Me}`,elementPath:"multi-select",boundingBox:{x:Z.left,y:Z.top+window.scrollY,width:Z.right-Z.left,height:Z.bottom-Z.top},isMultiSelect:!0,fullPath:Ks(Mt),accessibility:Vs(Mt),computedStyles:oe,computedStylesObj:ye,nearbyElements:Zs(Mt),cssClasses:Fo(Mt),nearbyText:Io(Mt)})}else{let Z=Math.abs(Y-x),U=Math.abs(R-A);Z>20&&U>20&&le({x:q,y:V,clientY:d.clientY,element:"Area selection",elementPath:`region at (${Math.round(x)}, ${Math.round(A)})`,boundingBox:{x,y:A+window.scrollY,width:Z,height:U},isMultiSelect:!0})}G(null)}else S&&(ii.current=!0);jl.current=null,Ve.current=null,Od(!1),$a.current&&($a.current.innerHTML="")};return document.addEventListener("mouseup",c),()=>document.removeEventListener("mouseup",c)},[T,un]);let Ke=(0,E.useCallback)(async(c,d,S)=>{let k=z.webhookUrl||b;if(!k||!z.webhooksEnabled&&!S)return!1;try{return(await fetch(k,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:c,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...d})})).ok}catch(x){return console.warn("[Agentation] Webhook failed:",x),!1}},[b,z.webhookUrl,z.webhooksEnabled]),_5=(0,E.useCallback)(c=>{if(!D)return;let d={id:Date.now().toString(),x:D.x,y:D.y,comment:c,element:D.element,elementPath:D.elementPath,timestamp:Date.now(),selectedText:D.selectedText,boundingBox:D.boundingBox,nearbyText:D.nearbyText,cssClasses:D.cssClasses,isMultiSelect:D.isMultiSelect,isFixed:D.isFixed,fullPath:D.fullPath,accessibility:D.accessibility,computedStyles:D.computedStyles,nearbyElements:D.nearbyElements,reactComponents:D.reactComponents,elementBoundingBoxes:D.elementBoundingBoxes,...y&&he?{sessionId:he,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};f(S=>[...S,d]),si.current=d.id,st(()=>{si.current=null},300),st(()=>{qa(S=>new Set(S).add(d.id))},250),l?.(d),Ke("annotation.add",{annotation:d}),oi(!0),st(()=>{le(null),oi(!1)},150),window.getSelection()?.removeAllRanges(),y&&he&&Js(y,he,d).then(S=>{S.id!==d.id&&(f(k=>k.map(x=>x.id===d.id?{...x,id:S.id}:x)),qa(k=>{let x=new Set(k);return x.delete(d.id),x.add(S.id),x}))}).catch(S=>{console.warn("[Agentation] Failed to sync annotation:",S)})},[D,l,Ke,y,he]),f5=(0,E.useCallback)(()=>{oi(!0),st(()=>{le(null),oi(!1)},150)},[]),cu=(0,E.useCallback)(c=>{let d=L.findIndex(k=>k.id===c),S=L[d];P?.id===c&&(Rl(!0),st(()=>{ja(null),an(null),ul([]),Rl(!1)},150)),md(c),ai(k=>new Set(k).add(c)),S&&(a?.(S),Ke("annotation.delete",{annotation:S})),y&&Gm(y,c).catch(k=>{console.warn("[Agentation] Failed to delete annotation from server:",k)}),st(()=>{f(k=>k.filter(x=>x.id!==c)),ai(k=>{let x=new Set(k);return x.delete(c),x}),md(null),d<L.length-1&&(hd(d),st(()=>hd(null),200))},150)},[L,P,a,Ke,y]),ci=(0,E.useCallback)(c=>{if(ja(c),Fs(null),sl(null),Ra([]),c.elementBoundingBoxes?.length){let d=[];for(let S of c.elementBoundingBoxes){let k=S.x+S.width/2,x=S.y+S.height/2-window.scrollY,A=Ya(k,x);A&&d.push(A)}ul(d),an(null)}else if(c.boundingBox){let d=c.boundingBox,S=d.x+d.width/2,k=c.isFixed?d.y+d.height/2:d.y+d.height/2-window.scrollY,x=Ya(S,k);if(x){let A=x.getBoundingClientRect(),Y=A.width/d.width,R=A.height/d.height;Y<.5||R<.5?an(null):an(x)}else an(null);ul([])}else an(null),ul([])},[]),ri=(0,E.useCallback)(c=>{if(!c){Fs(null),sl(null),Ra([]);return}if(Fs(c.id),c.elementBoundingBoxes?.length){let d=[];for(let S of c.elementBoundingBoxes){let k=S.x+S.width/2,x=S.y+S.height/2-window.scrollY,Y=document.elementsFromPoint(k,x).find(R=>!R.closest("[data-annotation-marker]")&&!R.closest("[data-agentation-root]"));Y&&d.push(Y)}Ra(d),sl(null)}else if(c.boundingBox){let d=c.boundingBox,S=d.x+d.width/2,k=c.isFixed?d.y+d.height/2:d.y+d.height/2-window.scrollY,x=Ya(S,k);if(x){let A=x.getBoundingClientRect(),Y=A.width/d.width,R=A.height/d.height;Y<.5||R<.5?sl(null):sl(x)}else sl(null);Ra([])}else sl(null),Ra([])},[]),m5=(0,E.useCallback)(c=>{if(!P)return;let d={...P,comment:c};f(S=>S.map(k=>k.id===P.id?d:k)),o?.(d),Ke("annotation.update",{annotation:d}),y&&Jy(y,P.id,{comment:c}).catch(S=>{console.warn("[Agentation] Failed to update annotation on server:",S)}),Rl(!0),st(()=>{ja(null),an(null),ul([]),Rl(!1)},150)},[P,o,Ke,y]),h5=(0,E.useCallback)(()=>{Rl(!0),st(()=>{ja(null),an(null),ul([]),Rl(!1)},150)},[]),dl=(0,E.useCallback)(()=>{let c=L.length;if(c===0)return;i?.(L),Ke("annotations.clear",{annotations:L}),y&&Promise.all(L.map(S=>Gm(y,S.id).catch(k=>{console.warn("[Agentation] Failed to delete annotation from server:",k)}))),Ge(!0),jt(!0);let d=c*30+200;st(()=>{f([]),qa(new Set),localStorage.removeItem(Is(ht)),Ge(!1)},d),st(()=>jt(!1),1500)},[ht,L,i,Ke,y]),ru=(0,E.useCallback)(async()=>{let c=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:ht,d=Wm(L,c,z.outputDetail,on);if(d){if(h)try{await navigator.clipboard.writeText(d)}catch{}s?.(d),Dl(!0),st(()=>Dl(!1),2e3),z.autoClearAfterCopy&&st(()=>dl(),500)}},[L,ht,z.outputDetail,on,z.autoClearAfterCopy,dl,h,s]),du=(0,E.useCallback)(async()=>{let c=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:ht,d=Wm(L,c,z.outputDetail,on);if(!d)return;u&&u(d,L),Ua("sending"),await new Promise(k=>st(k,150));let S=await Ke("submit",{output:d,annotations:L},!0);Ua(S?"sent":"failed"),st(()=>Ua("idle"),2500),S&&z.autoClearAfterCopy&&st(()=>dl(),500)},[u,Ke,L,ht,z.outputDetail,on,z.autoClearAfterCopy,dl]);(0,E.useEffect)(()=>{if(!Ul)return;let c=10,d=k=>{let x=k.clientX-Ul.x,A=k.clientY-Ul.y,Y=Math.sqrt(x*x+A*A);if(!sn&&Y>c&&Ad(!0),sn||Y>c){let R=Ul.toolbarX+x,J=Ul.toolbarY+A,$=20,j=297,q=44,Z=j-(T?Pt==="connected"?297:257:44),U=$-Z,Me=window.innerWidth-$-j;R=Math.max(U,Math.min(Me,R)),J=Math.max($,Math.min(window.innerHeight-q-$,J)),ou({x:R,y:J})}},S=()=>{sn&&(iu.current=!0),Ad(!1),zd(null)};return document.addEventListener("mousemove",d),document.addEventListener("mouseup",S),()=>{document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",S)}},[Ul,sn,T,Pt]);let y5=(0,E.useCallback)(c=>{if(c.target.closest("button")||c.target.closest(`.${r.settingsPanel}`))return;let d=c.currentTarget.parentElement;if(!d)return;let S=d.getBoundingClientRect(),k=Tt?.x??S.left,x=Tt?.y??S.top,A=(Math.random()-.5)*10;c5(A),zd({x:c.clientX,y:c.clientY,toolbarX:k,toolbarY:x})},[Tt]);if((0,E.useEffect)(()=>{if(!Tt)return;let c=()=>{let x=Tt.x,A=Tt.y,J=20-(297-(T?Pt==="connected"?297:257:44)),$=window.innerWidth-20-297;x=Math.max(J,Math.min($,x)),A=Math.max(20,Math.min(window.innerHeight-44-20,A)),(x!==Tt.x||A!==Tt.y)&&ou({x,y:A})};return c(),window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)},[Tt,T,Pt]),(0,E.useEffect)(()=>{let c=d=>{let S=d.target,k=S.tagName==="INPUT"||S.tagName==="TEXTAREA"||S.isContentEditable;if(d.key==="Escape"){if(Dt.length>0){Yl([]);return}D||T&&(ae(),O(!1))}if((d.metaKey||d.ctrlKey)&&d.shiftKey&&(d.key==="f"||d.key==="F")){d.preventDefault(),ae(),O(x=>!x);return}if(!(k||d.metaKey||d.ctrlKey)&&((d.key==="p"||d.key==="P")&&(d.preventDefault(),ae(),uu()),(d.key==="h"||d.key==="H")&&L.length>0&&(d.preventDefault(),ae(),g(x=>!x)),(d.key==="c"||d.key==="C")&&L.length>0&&(d.preventDefault(),ae(),ru()),(d.key==="x"||d.key==="X")&&L.length>0&&(d.preventDefault(),ae(),dl()),d.key==="s"||d.key==="S")){let x=ln(z.webhookUrl)||ln(b||"");L.length>0&&x&&me==="idle"&&(d.preventDefault(),ae(),du())}};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[T,D,L.length,z.webhookUrl,b,me,du,uu,ru,dl,Dt]),!Ot)return null;let Xl=L.length>0,di=L.filter(c=>!Nd.has(c.id)),Qd=L.filter(c=>Nd.has(c.id)),qd=c=>{let A=c.x/100*window.innerWidth,Y=typeof c.y=="string"?parseFloat(c.y):c.y,R={};window.innerHeight-Y-22-10<80&&(R.top="auto",R.bottom="calc(100% + 10px)");let $=A-200/2,j=10;if($<j){let q=j-$;R.left=`calc(50% + ${q}px)`}else if($+200>window.innerWidth-j){let q=$+200-(window.innerWidth-j);R.left=`calc(50% - ${q}px)`}return R};return(0,sd.createPortal)((0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:r.toolbar,"data-feedback-toolbar":!0,style:Tt?{left:Tt.x,top:Tt.y,right:"auto",bottom:"auto"}:void 0,children:(0,m.jsxs)("div",{className:`${r.toolbarContainer} ${F?"":r.light} ${T?r.expanded:r.collapsed} ${Td?r.entrance:""} ${sn?r.dragging:""} ${!z.webhooksEnabled&&(ln(z.webhookUrl)||ln(b||""))?r.serverConnected:""}`,onClick:T?void 0:c=>{if(iu.current){iu.current=!1,c.preventDefault();return}O(!0)},onMouseDown:y5,role:T?void 0:"button",tabIndex:T?-1:0,title:T?void 0:"Start feedback mode",style:{...sn&&{transform:`scale(1.05) rotate(${u5}deg)`,cursor:"grabbing"}},children:[(0,m.jsxs)("div",{className:`${r.toggleContent} ${T?r.hidden:r.visible}`,children:[(0,m.jsx)(Cy,{size:24}),Xl&&(0,m.jsx)("span",{className:`${r.badge} ${T?r.fadeOut:""} ${Td?r.entrance:""}`,style:{backgroundColor:z.annotationColor},children:L.length})]}),(0,m.jsxs)("div",{className:`${r.controlsContent} ${T?r.visible:r.hidden} ${Tt&&Tt.y<100?r.tooltipBelow:""} ${i5||Xa?r.tooltipsHidden:""}`,onMouseLeave:s5,children:[(0,m.jsxs)("div",{className:`${r.buttonWrapper} ${Tt&&Tt.x<120?r.buttonWrapperAlignLeft:""}`,children:[(0,m.jsx)("button",{className:`${r.controlButton} ${F?"":r.light}`,onClick:c=>{c.stopPropagation(),ae(),uu()},"data-active":Xe,children:(0,m.jsx)(Ty,{size:24,isPaused:Xe})}),(0,m.jsxs)("span",{className:r.buttonTooltip,children:[Xe?"Resume animations":"Pause animations",(0,m.jsx)("span",{className:r.shortcut,children:"P"})]})]}),(0,m.jsxs)("div",{className:r.buttonWrapper,children:[(0,m.jsx)("button",{className:`${r.controlButton} ${F?"":r.light}`,onClick:c=>{c.stopPropagation(),ae(),g(!_)},disabled:!Xl,children:(0,m.jsx)(Ey,{size:24,isOpen:_})}),(0,m.jsxs)("span",{className:r.buttonTooltip,children:[_?"Hide markers":"Show markers",(0,m.jsx)("span",{className:r.shortcut,children:"H"})]})]}),(0,m.jsxs)("div",{className:r.buttonWrapper,children:[(0,m.jsx)("button",{className:`${r.controlButton} ${F?"":r.light} ${Ol?r.statusShowing:""}`,onClick:c=>{c.stopPropagation(),ae(),ru()},disabled:!Xl,"data-active":Ol,children:(0,m.jsx)(Sy,{size:24,copied:Ol})}),(0,m.jsxs)("span",{className:r.buttonTooltip,children:["Copy feedback",(0,m.jsx)("span",{className:r.shortcut,children:"C"})]})]}),(0,m.jsxs)("div",{className:`${r.buttonWrapper} ${r.sendButtonWrapper} ${!z.webhooksEnabled&&(ln(z.webhookUrl)||ln(b||""))?r.sendButtonVisible:""}`,children:[(0,m.jsxs)("button",{className:`${r.controlButton} ${F?"":r.light} ${me==="sent"||me==="failed"?r.statusShowing:""}`,onClick:c=>{c.stopPropagation(),ae(),du()},disabled:!Xl||!ln(z.webhookUrl)&&!ln(b||"")||me==="sending","data-no-hover":me==="sent"||me==="failed",tabIndex:ln(z.webhookUrl)||ln(b||"")?0:-1,children:[(0,m.jsx)(wy,{size:24,state:me}),Xl&&me==="idle"&&(0,m.jsx)("span",{className:`${r.buttonBadge} ${F?"":r.light}`,style:{backgroundColor:z.annotationColor},children:L.length})]}),(0,m.jsxs)("span",{className:r.buttonTooltip,children:["Send Annotations",(0,m.jsx)("span",{className:r.shortcut,children:"S"})]})]}),(0,m.jsxs)("div",{className:r.buttonWrapper,children:[(0,m.jsx)("button",{className:`${r.controlButton} ${F?"":r.light}`,onClick:c=>{c.stopPropagation(),ae(),dl()},disabled:!Xl,"data-danger":!0,children:(0,m.jsx)(My,{size:24})}),(0,m.jsxs)("span",{className:r.buttonTooltip,children:["Clear all",(0,m.jsx)("span",{className:r.shortcut,children:"X"})]})]}),(0,m.jsxs)("div",{className:r.buttonWrapper,children:[(0,m.jsx)("button",{className:`${r.controlButton} ${F?"":r.light}`,onClick:c=>{c.stopPropagation(),ae(),xd(!Xa)},children:(0,m.jsx)(ky,{size:24})}),y&&Pt!=="disconnected"&&(0,m.jsx)("span",{className:`${r.mcpIndicator} ${F?"":r.light} ${r[Pt]} ${Xa?r.hidden:""}`,title:Pt==="connected"?"MCP Connected":"MCP Connecting..."}),(0,m.jsx)("span",{className:r.buttonTooltip,children:"Settings"})]}),(0,m.jsx)("div",{className:`${r.divider} ${F?"":r.light}`}),(0,m.jsxs)("div",{className:`${r.buttonWrapper} ${Tt&&typeof window<"u"&&Tt.x>window.innerWidth-120?r.buttonWrapperAlignRight:""}`,children:[(0,m.jsx)("button",{className:`${r.controlButton} ${F?"":r.light}`,onClick:c=>{c.stopPropagation(),ae(),O(!1)},children:(0,m.jsx)(Ay,{size:24})}),(0,m.jsxs)("span",{className:r.buttonTooltip,children:["Exit",(0,m.jsx)("span",{className:r.shortcut,children:"Esc"})]})]})]}),(0,m.jsx)("div",{className:`${r.settingsPanel} ${F?r.dark:r.light} ${o5?r.enter:r.exit}`,onClick:c=>c.stopPropagation(),style:Tt&&Tt.y<230?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,children:(0,m.jsxs)("div",{className:`${r.settingsPanelContainer} ${Sd?r.transitioning:""}`,children:[(0,m.jsxs)("div",{className:`${r.settingsPage} ${eu==="automations"?r.slideLeft:""}`,children:[(0,m.jsxs)("div",{className:r.settingsHeader,children:[(0,m.jsxs)("span",{className:r.settingsBrand,children:[(0,m.jsx)("span",{className:r.settingsBrandSlash,style:{color:z.annotationColor,transition:"color 0.2s ease"},children:"/"}),"agentation"]}),(0,m.jsxs)("span",{className:r.settingsVersion,children:["v","2.2.1"]}),(0,m.jsx)("button",{className:r.themeToggle,onClick:()=>Ed(!F),title:F?"Switch to light mode":"Switch to dark mode",children:(0,m.jsx)("span",{className:r.themeIconWrapper,children:(0,m.jsx)("span",{className:r.themeIcon,children:F?(0,m.jsx)(zy,{size:20}):(0,m.jsx)(Ly,{size:20})},F?"sun":"moon")})})]}),(0,m.jsxs)("div",{className:r.settingsSection,children:[(0,m.jsxs)("div",{className:r.settingsRow,children:[(0,m.jsxs)("div",{className:`${r.settingsLabel} ${F?"":r.light}`,children:["Output Detail",(0,m.jsx)(Qa,{content:"Controls how much detail is included in the copied output",children:(0,m.jsx)("span",{className:r.helpIcon,children:(0,m.jsx)(Wo,{size:20})})})]}),(0,m.jsxs)("button",{className:`${r.cycleButton} ${F?"":r.light}`,onClick:()=>{let d=(ei.findIndex(S=>S.value===z.outputDetail)+1)%ei.length;zn(S=>({...S,outputDetail:ei[d].value}))},children:[(0,m.jsx)("span",{className:r.cycleButtonText,children:ei.find(c=>c.value===z.outputDetail)?.label},z.outputDetail),(0,m.jsx)("span",{className:r.cycleDots,children:ei.map((c,d)=>(0,m.jsx)("span",{className:`${r.cycleDot} ${F?"":r.light} ${z.outputDetail===c.value?r.active:""}`},c.value))})]})]}),(0,m.jsxs)("div",{className:`${r.settingsRow} ${r.settingsRowMarginTop} ${Hl?"":r.settingsRowDisabled}`,children:[(0,m.jsxs)("div",{className:`${r.settingsLabel} ${F?"":r.light}`,children:["React Components",(0,m.jsx)(Qa,{content:Hl?"Include React component names in annotations":"Disabled \u2014 production builds minify component names, making detection unreliable. Use on localhost in development mode.",children:(0,m.jsx)("span",{className:r.helpIcon,children:(0,m.jsx)(Wo,{size:20})})})]}),(0,m.jsxs)("label",{className:`${r.toggleSwitch} ${Hl?"":r.disabled}`,children:[(0,m.jsx)("input",{type:"checkbox",checked:Hl&&z.reactEnabled,disabled:!Hl,onChange:()=>zn(c=>({...c,reactEnabled:!c.reactEnabled}))}),(0,m.jsx)("span",{className:r.toggleSlider})]})]})]}),(0,m.jsxs)("div",{className:r.settingsSection,children:[(0,m.jsx)("div",{className:`${r.settingsLabel} ${r.settingsLabelMarker} ${F?"":r.light}`,children:"Marker Colour"}),(0,m.jsx)("div",{className:r.colorOptions,children:_g.map(c=>(0,m.jsx)("div",{role:"button",onClick:()=>zn(d=>({...d,annotationColor:c.value})),style:{borderColor:z.annotationColor===c.value?c.value:"transparent"},className:`${r.colorOptionRing} ${z.annotationColor===c.value?r.selected:""}`,children:(0,m.jsx)("div",{className:`${r.colorOption} ${z.annotationColor===c.value?r.selected:""}`,style:{backgroundColor:c.value},title:c.label})},c.value))})]}),(0,m.jsxs)("div",{className:r.settingsSection,children:[(0,m.jsxs)("label",{className:r.settingsToggle,children:[(0,m.jsx)("input",{type:"checkbox",id:"autoClearAfterCopy",checked:z.autoClearAfterCopy,onChange:c=>zn(d=>({...d,autoClearAfterCopy:c.target.checked}))}),(0,m.jsx)("label",{className:`${r.customCheckbox} ${z.autoClearAfterCopy?r.checked:""}`,htmlFor:"autoClearAfterCopy",children:z.autoClearAfterCopy&&(0,m.jsx)(jm,{size:14})}),(0,m.jsxs)("span",{className:`${r.toggleLabel} ${F?"":r.light}`,children:["Clear on copy/send",(0,m.jsx)(Qa,{content:"Automatically clear annotations after copying",children:(0,m.jsx)("span",{className:`${r.helpIcon} ${r.helpIconNudge2}`,children:(0,m.jsx)(Wo,{size:20})})})]})]}),(0,m.jsxs)("label",{className:`${r.settingsToggle} ${r.settingsToggleMarginBottom}`,children:[(0,m.jsx)("input",{type:"checkbox",id:"blockInteractions",checked:z.blockInteractions,onChange:c=>zn(d=>({...d,blockInteractions:c.target.checked}))}),(0,m.jsx)("label",{className:`${r.customCheckbox} ${z.blockInteractions?r.checked:""}`,htmlFor:"blockInteractions",children:z.blockInteractions&&(0,m.jsx)(jm,{size:14})}),(0,m.jsx)("span",{className:`${r.toggleLabel} ${F?"":r.light}`,children:"Block page interactions"})]})]}),(0,m.jsx)("div",{className:`${r.settingsSection} ${r.settingsSectionExtraPadding}`,children:(0,m.jsxs)("button",{className:`${r.settingsNavLink} ${F?"":r.light}`,onClick:()=>nu("automations"),children:[(0,m.jsx)("span",{children:"Manage MCP & Webhooks"}),(0,m.jsxs)("span",{className:r.settingsNavLinkRight,children:[y&&Pt!=="disconnected"&&(0,m.jsx)("span",{className:`${r.mcpNavIndicator} ${r[Pt]}`}),(0,m.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,m.jsx)("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})})]}),(0,m.jsxs)("div",{className:`${r.settingsPage} ${r.automationsPage} ${eu==="automations"?r.slideIn:""}`,children:[(0,m.jsxs)("button",{className:`${r.settingsBackButton} ${F?"":r.light}`,onClick:()=>nu("main"),children:[(0,m.jsx)(Oy,{size:16}),(0,m.jsx)("span",{children:"Manage MCP & Webhooks"})]}),(0,m.jsxs)("div",{className:r.settingsSection,children:[(0,m.jsxs)("div",{className:r.settingsRow,children:[(0,m.jsxs)("span",{className:`${r.automationHeader} ${F?"":r.light}`,children:["MCP Connection",(0,m.jsx)(Qa,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time.",children:(0,m.jsx)("span",{className:`${r.helpIcon} ${r.helpIconNudgeDown}`,children:(0,m.jsx)(Wo,{size:20})})})]}),y&&(0,m.jsx)("div",{className:`${r.mcpStatusDot} ${r[Pt]}`,title:Pt==="connected"?"Connected":Pt==="connecting"?"Connecting...":"Disconnected"})]}),(0,m.jsxs)("p",{className:`${r.automationDescription} ${F?"":r.light}`,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",(0,m.jsx)("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:`${r.learnMoreLink} ${F?"":r.light}`,children:"Learn more"})]})]}),(0,m.jsxs)("div",{className:`${r.settingsSection} ${r.settingsSectionGrow}`,children:[(0,m.jsxs)("div",{className:r.settingsRow,children:[(0,m.jsxs)("span",{className:`${r.automationHeader} ${F?"":r.light}`,children:["Webhooks",(0,m.jsx)(Qa,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations.",children:(0,m.jsx)("span",{className:`${r.helpIcon} ${r.helpIconNoNudge}`,children:(0,m.jsx)(Wo,{size:20})})})]}),(0,m.jsxs)("div",{className:r.autoSendRow,children:[(0,m.jsx)("span",{className:`${r.autoSendLabel} ${F?"":r.light} ${z.webhooksEnabled?r.active:""}`,children:"Auto-Send"}),(0,m.jsxs)("label",{className:`${r.toggleSwitch} ${z.webhookUrl?"":r.disabled}`,children:[(0,m.jsx)("input",{type:"checkbox",checked:z.webhooksEnabled,disabled:!z.webhookUrl,onChange:()=>zn(c=>({...c,webhooksEnabled:!c.webhooksEnabled}))}),(0,m.jsx)("span",{className:r.toggleSlider})]})]})]}),(0,m.jsx)("p",{className:`${r.automationDescription} ${F?"":r.light}`,children:"The webhook URL will receive live annotation changes and annotation data."}),(0,m.jsx)("textarea",{className:`${r.webhookUrlInput} ${F?"":r.light}`,placeholder:"Webhook URL",value:z.webhookUrl,style:{"--marker-color":z.annotationColor},onChange:c=>zn(d=>({...d,webhookUrl:c.target.value}))})]})]})]})})]})}),(0,m.jsxs)("div",{className:r.markersLayer,"data-feedback-toolbar":!0,children:[C&&di.filter(c=>!c.isFixed).map((c,d)=>{let S=!X&&ni===c.id,k=fd===c.id,x=(S||k)&&!P,A=c.isMultiSelect,Y=A?"#34C759":z.annotationColor,R=L.findIndex(q=>q.id===c.id),J=!Ld.has(c.id),$=X?r.exit:Bl?r.clearing:J?r.enter:"",j=x&&z.markerClickBehavior==="delete";return(0,m.jsxs)("div",{className:`${r.marker} ${A?r.multiSelect:""} ${$} ${j?r.hovered:""}`,"data-annotation-marker":!0,style:{left:`${c.x}%`,top:c.y,backgroundColor:j?void 0:Y,animationDelay:X?`${(di.length-1-d)*20}ms`:`${d*20}ms`},onMouseEnter:()=>!X&&c.id!==si.current&&ri(c),onMouseLeave:()=>ri(null),onClick:q=>{q.stopPropagation(),X||(z.markerClickBehavior==="delete"?cu(c.id):ci(c))},onContextMenu:q=>{z.markerClickBehavior==="delete"&&(q.preventDefault(),q.stopPropagation(),X||ci(c))},children:[x?j?(0,m.jsx)(Fr,{size:A?18:16}):(0,m.jsx)(Xm,{size:16}):(0,m.jsx)("span",{className:li!==null&&R>=li?r.renumber:void 0,children:R+1}),S&&!P&&(0,m.jsxs)("div",{className:`${r.markerTooltip} ${F?"":r.light} ${r.enter}`,style:qd(c),children:[(0,m.jsxs)("span",{className:r.markerQuote,children:[c.element,c.selectedText&&` "${c.selectedText.slice(0,30)}${c.selectedText.length>30?"...":""}"`]}),(0,m.jsx)("span",{className:r.markerNote,children:c.comment})]})]},c.id)}),C&&!X&&Qd.filter(c=>!c.isFixed).map(c=>{let d=c.isMultiSelect;return(0,m.jsx)("div",{className:`${r.marker} ${r.hovered} ${d?r.multiSelect:""} ${r.exit}`,"data-annotation-marker":!0,style:{left:`${c.x}%`,top:c.y},children:(0,m.jsx)(Fr,{size:d?12:10})},c.id)})]}),(0,m.jsxs)("div",{className:r.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[C&&di.filter(c=>c.isFixed).map((c,d)=>{let S=di.filter(V=>V.isFixed),k=!X&&ni===c.id,x=fd===c.id,A=(k||x)&&!P,Y=c.isMultiSelect,R=Y?"#34C759":z.annotationColor,J=L.findIndex(V=>V.id===c.id),$=!Ld.has(c.id),j=X?r.exit:Bl?r.clearing:$?r.enter:"",q=A&&z.markerClickBehavior==="delete";return(0,m.jsxs)("div",{className:`${r.marker} ${r.fixed} ${Y?r.multiSelect:""} ${j} ${q?r.hovered:""}`,"data-annotation-marker":!0,style:{left:`${c.x}%`,top:c.y,backgroundColor:q?void 0:R,animationDelay:X?`${(S.length-1-d)*20}ms`:`${d*20}ms`},onMouseEnter:()=>!X&&c.id!==si.current&&ri(c),onMouseLeave:()=>ri(null),onClick:V=>{V.stopPropagation(),X||(z.markerClickBehavior==="delete"?cu(c.id):ci(c))},onContextMenu:V=>{z.markerClickBehavior==="delete"&&(V.preventDefault(),V.stopPropagation(),X||ci(c))},children:[A?q?(0,m.jsx)(Fr,{size:Y?18:16}):(0,m.jsx)(Xm,{size:16}):(0,m.jsx)("span",{className:li!==null&&J>=li?r.renumber:void 0,children:J+1}),k&&!P&&(0,m.jsxs)("div",{className:`${r.markerTooltip} ${F?"":r.light} ${r.enter}`,style:qd(c),children:[(0,m.jsxs)("span",{className:r.markerQuote,children:[c.element,c.selectedText&&` "${c.selectedText.slice(0,30)}${c.selectedText.length>30?"...":""}"`]}),(0,m.jsx)("span",{className:r.markerNote,children:c.comment})]})]},c.id)}),C&&!X&&Qd.filter(c=>c.isFixed).map(c=>{let d=c.isMultiSelect;return(0,m.jsx)("div",{className:`${r.marker} ${r.fixed} ${r.hovered} ${d?r.multiSelect:""} ${r.exit}`,"data-annotation-marker":!0,style:{left:`${c.x}%`,top:c.y},children:(0,m.jsx)(vy,{size:d?12:10})},c.id)})]}),T&&(0,m.jsxs)("div",{className:r.overlay,"data-feedback-toolbar":!0,style:D||P?{zIndex:99999}:void 0,children:[H?.rect&&!D&&!pd&&!un&&(0,m.jsx)("div",{className:`${r.hoverHighlight} ${r.enter}`,style:{left:H.rect.left,top:H.rect.top,width:H.rect.width,height:H.rect.height,borderColor:`${z.annotationColor}80`,backgroundColor:`${z.annotationColor}0A`}}),Dt.filter(c=>document.contains(c.element)).map((c,d)=>{let S=c.element.getBoundingClientRect(),k=Dt.length>1;return(0,m.jsx)("div",{className:k?r.multiSelectOutline:r.singleSelectOutline,style:{position:"fixed",left:S.left,top:S.top,width:S.width,height:S.height,...k?{}:{borderColor:`${z.annotationColor}99`,backgroundColor:`${z.annotationColor}0D`}}},d)}),ni&&!D&&(()=>{let c=L.find(x=>x.id===ni);if(!c?.boundingBox)return null;if(c.elementBoundingBoxes?.length)return _d.length>0?_d.filter(x=>document.contains(x)).map((x,A)=>{let Y=x.getBoundingClientRect();return(0,m.jsx)("div",{className:`${r.multiSelectOutline} ${r.enter}`,style:{left:Y.left,top:Y.top,width:Y.width,height:Y.height}},`hover-outline-live-${A}`)}):c.elementBoundingBoxes.map((x,A)=>(0,m.jsx)("div",{className:`${r.multiSelectOutline} ${r.enter}`,style:{left:x.x,top:x.y-cl,width:x.width,height:x.height}},`hover-outline-${A}`));let d=Ps&&document.contains(Ps)?Ps.getBoundingClientRect():null,S=d?{x:d.left,y:d.top,width:d.width,height:d.height}:{x:c.boundingBox.x,y:c.isFixed?c.boundingBox.y:c.boundingBox.y-cl,width:c.boundingBox.width,height:c.boundingBox.height},k=c.isMultiSelect;return(0,m.jsx)("div",{className:`${k?r.multiSelectOutline:r.singleSelectOutline} ${r.enter}`,style:{left:S.x,top:S.y,width:S.width,height:S.height,...k?{}:{borderColor:`${z.annotationColor}99`,backgroundColor:`${z.annotationColor}0D`}}})})(),H&&!D&&!pd&&!un&&(0,m.jsxs)("div",{className:`${r.hoverTooltip} ${r.enter}`,style:{left:Math.max(8,Math.min(I.x,window.innerWidth-100)),top:Math.max(I.y-(H.reactComponents?48:32),8)},children:[H.reactComponents&&(0,m.jsx)("div",{className:r.hoverReactPath,children:H.reactComponents}),(0,m.jsx)("div",{className:r.hoverElementName,children:H.elementName})]}),D&&(0,m.jsxs)(m.Fragment,{children:[D.multiSelectElements?.length?D.multiSelectElements.filter(c=>document.contains(c)).map((c,d)=>{let S=c.getBoundingClientRect();return(0,m.jsx)("div",{className:`${r.multiSelectOutline} ${Za?r.exit:r.enter}`,style:{left:S.left,top:S.top,width:S.width,height:S.height}},`pending-multi-${d}`)}):D.targetElement&&document.contains(D.targetElement)?(()=>{let c=D.targetElement.getBoundingClientRect();return(0,m.jsx)("div",{className:`${r.singleSelectOutline} ${Za?r.exit:r.enter}`,style:{left:c.left,top:c.top,width:c.width,height:c.height,borderColor:`${z.annotationColor}99`,backgroundColor:`${z.annotationColor}0D`}})})():D.boundingBox&&(0,m.jsx)("div",{className:`${D.isMultiSelect?r.multiSelectOutline:r.singleSelectOutline} ${Za?r.exit:r.enter}`,style:{left:D.boundingBox.x,top:D.boundingBox.y-cl,width:D.boundingBox.width,height:D.boundingBox.height,...D.isMultiSelect?{}:{borderColor:`${z.annotationColor}99`,backgroundColor:`${z.annotationColor}0D`}}}),(()=>{let c=D.x,d=D.isFixed?D.y:D.y-cl;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:`${r.marker} ${r.pending} ${D.isMultiSelect?r.multiSelect:""} ${Za?r.exit:r.enter}`,style:{left:`${c}%`,top:d,backgroundColor:D.isMultiSelect?"#34C759":z.annotationColor},children:(0,m.jsx)(xy,{size:12})}),(0,m.jsx)(qm,{ref:Yd,element:D.element,selectedText:D.selectedText,computedStyles:D.computedStylesObj,placeholder:D.element==="Area selection"?"What should change in this area?":D.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:_5,onCancel:f5,isExiting:Za,lightMode:!F,accentColor:D.isMultiSelect?"#34C759":z.annotationColor,style:{left:Math.max(160,Math.min(window.innerWidth-160,c/100*window.innerWidth)),...d>window.innerHeight-290?{bottom:window.innerHeight-d+20}:{top:d+20}}})]})})()]}),P&&(0,m.jsxs)(m.Fragment,{children:[P.elementBoundingBoxes?.length?yd.length>0?yd.filter(c=>document.contains(c)).map((c,d)=>{let S=c.getBoundingClientRect();return(0,m.jsx)("div",{className:`${r.multiSelectOutline} ${r.enter}`,style:{left:S.left,top:S.top,width:S.width,height:S.height}},`edit-multi-live-${d}`)}):P.elementBoundingBoxes.map((c,d)=>(0,m.jsx)("div",{className:`${r.multiSelectOutline} ${r.enter}`,style:{left:c.x,top:c.y-cl,width:c.width,height:c.height}},`edit-multi-${d}`)):(()=>{let c=tu&&document.contains(tu)?tu.getBoundingClientRect():null,d=c?{x:c.left,y:c.top,width:c.width,height:c.height}:P.boundingBox?{x:P.boundingBox.x,y:P.isFixed?P.boundingBox.y:P.boundingBox.y-cl,width:P.boundingBox.width,height:P.boundingBox.height}:null;return d?(0,m.jsx)("div",{className:`${P.isMultiSelect?r.multiSelectOutline:r.singleSelectOutline} ${r.enter}`,style:{left:d.x,top:d.y,width:d.width,height:d.height,...P.isMultiSelect?{}:{borderColor:`${z.annotationColor}99`,backgroundColor:`${z.annotationColor}0D`}}}):null})(),(0,m.jsx)(qm,{ref:Hd,element:P.element,selectedText:P.selectedText,computedStyles:Zy(P.computedStyles),placeholder:"Edit your feedback...",initialValue:P.comment,submitLabel:"Save",onSubmit:m5,onCancel:h5,onDelete:()=>cu(P.id),isExiting:r5,lightMode:!F,accentColor:P.isMultiSelect?"#34C759":z.annotationColor,style:(()=>{let c=P.isFixed?P.y:P.y-cl;return{left:Math.max(160,Math.min(window.innerWidth-160,P.x/100*window.innerWidth)),...c>window.innerHeight-290?{bottom:window.innerHeight-c+20}:{top:c+20}}})()})]}),un&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{ref:Ga,className:r.dragSelection}),(0,m.jsx)("div",{ref:$a,className:r.highlightsContainer})]})]})]}),document.body)}window.addEventListener("DOMContentLoaded",()=>{let t=document.createElement("div");t.id="agentation-root",document.body.appendChild(t),(0,l5.createRoot)(t).render(n5.default.createElement(e5,{endpoint:"http://localhost:4747"}))});})();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
