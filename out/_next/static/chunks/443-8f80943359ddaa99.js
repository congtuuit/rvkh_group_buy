"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[443],{3663:function(e,t,n){n.d(t,{VS:function(){return o},Yv:function(){return l},Yx:function(){return r},sK:function(){return i}});var o=e=>{let t={top:{originY:1},bottom:{originY:0},left:{originX:1},right:{originX:0},"top-start":{originX:0,originY:1},"top-end":{originX:1,originY:1},"bottom-start":{originX:0,originY:0},"bottom-end":{originX:1,originY:0},"right-start":{originX:0,originY:0},"right-end":{originX:0,originY:1},"left-start":{originX:1,originY:0},"left-end":{originX:1,originY:1}};return(null==t?void 0:t[e])||{}},r=e=>({top:"top",bottom:"bottom",left:"left",right:"right","top-start":"top start","top-end":"top end","bottom-start":"bottom start","bottom-end":"bottom end","left-start":"left top","left-end":"left bottom","right-start":"right top","right-end":"right bottom"})[e],l=(e,t)=>{if(t.includes("-")){let[n]=t.split("-");if(n.includes(e))return!1}return!0},i=(e,t)=>{if(t.includes("-")){let[,n]=t.split("-");return"".concat(e,"-").concat(n)}return e}},9232:function(e,t,n){n.d(t,{v:function(){return i}});var o=n(3222),r=n(2068),l=n(1616),i=(0,r.tv)({slots:{base:["z-0","relative","bg-transparent","before:content-['']","before:hidden","before:z-[-1]","before:absolute","before:rotate-45","before:w-2.5","before:h-2.5","before:rounded-sm","data-[arrow=true]:before:block","data-[placement=top]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]","data-[placement=top]:before:left-1/2","data-[placement=top]:before:-translate-x-1/2","data-[placement=top-start]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]","data-[placement=top-start]:before:left-3","data-[placement=top-end]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]","data-[placement=top-end]:before:right-3","data-[placement=bottom]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]","data-[placement=bottom]:before:left-1/2","data-[placement=bottom]:before:-translate-x-1/2","data-[placement=bottom-start]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]","data-[placement=bottom-start]:before:left-3","data-[placement=bottom-end]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]","data-[placement=bottom-end]:before:right-3","data-[placement=left]:before:-right-[calc(theme(spacing.5)/4_-_2px)]","data-[placement=left]:before:top-1/2","data-[placement=left]:before:-translate-y-1/2","data-[placement=left-start]:before:-right-[calc(theme(spacing.5)/4_-_3px)]","data-[placement=left-start]:before:top-1/4","data-[placement=left-end]:before:-right-[calc(theme(spacing.5)/4_-_3px)]","data-[placement=left-end]:before:bottom-1/4","data-[placement=right]:before:-left-[calc(theme(spacing.5)/4_-_2px)]","data-[placement=right]:before:top-1/2","data-[placement=right]:before:-translate-y-1/2","data-[placement=right-start]:before:-left-[calc(theme(spacing.5)/4_-_3px)]","data-[placement=right-start]:before:top-1/4","data-[placement=right-end]:before:-left-[calc(theme(spacing.5)/4_-_3px)]","data-[placement=right-end]:before:bottom-1/4",...l.Dh],content:["z-10","px-2.5","py-1","w-full","inline-flex","flex-col","items-center","justify-center","box-border","subpixel-antialiased","outline-none","box-border"],trigger:["z-10"],backdrop:["hidden"],arrow:[]},variants:{size:{sm:{content:"text-tiny"},md:{content:"text-small"},lg:{content:"text-medium"}},color:{default:{base:"before:bg-content1 before:shadow-small",content:"bg-content1"},foreground:{base:"before:bg-foreground",content:o.J.solid.foreground},primary:{base:"before:bg-primary",content:o.J.solid.primary},secondary:{base:"before:bg-secondary",content:o.J.solid.secondary},success:{base:"before:bg-success",content:o.J.solid.success},warning:{base:"before:bg-warning",content:o.J.solid.warning},danger:{base:"before:bg-danger",content:o.J.solid.danger}},radius:{none:{content:"rounded-none"},sm:{content:"rounded-small"},md:{content:"rounded-medium"},lg:{content:"rounded-large"},full:{content:"rounded-full"}},shadow:{sm:{content:"shadow-small"},md:{content:"shadow-medium"},lg:{content:"shadow-large"}},backdrop:{transparent:{},opaque:{backdrop:"bg-overlay/50 backdrop-opacity-disabled"},blur:{backdrop:"backdrop-blur-sm backdrop-saturate-150 bg-overlay/30"}},triggerScaleOnOpen:{true:{trigger:["aria-expanded:scale-[0.97]","aria-expanded:opacity-70","subpixel-antialiased"]},false:{}},disableAnimation:{true:{base:"animate-none"}},isTriggerDisabled:{true:{trigger:"opacity-disabled pointer-events-none"},false:{}}},defaultVariants:{color:"default",radius:"lg",size:"md",shadow:"md",backdrop:"transparent",triggerScaleOnOpen:!0},compoundVariants:[{backdrop:["opaque","blur"],class:{backdrop:"block w-full h-full fixed inset-0 -z-30"}}]})},4292:function(e,t,n){n.d(t,{O:function(){return l},v:function(){return r}});var o=n(2265);let r=new WeakMap;function l(e){let{triggerRef:t,isOpen:n,onClose:l}=e;(0,o.useEffect)(()=>{if(!n||null===l)return;let e=e=>{let n=e.target;if(!t.current||n instanceof Node&&!n.contains(t.current))return;let o=l||r.get(t.current);o&&o()};return window.addEventListener("scroll",e,!0),()=>{window.removeEventListener("scroll",e,!0)}},[n,l,t])}},7235:function(e,t,n){n.d(t,{I:function(){return u}});var o=n(8953),r=n(2265),l=n(3624),i=n(3244);function s(e,t){if(e.button>0)return!1;if(e.target){let t=e.target.ownerDocument;if(!t||!t.documentElement.contains(e.target)||e.target.closest("[data-react-aria-top-layer]"))return!1}return t.current&&!t.current.contains(e.target)}var a=n(739);let c=[];function u(e,t){let{onClose:n,shouldCloseOnBlur:u,isOpen:d,isDismissable:f=!1,isKeyboardDismissDisabled:p=!1,shouldCloseOnInteractOutside:h}=e;(0,r.useEffect)(()=>(d&&c.push(t),()=>{let e=c.indexOf(t);e>=0&&c.splice(e,1)}),[d,t]);let g=()=>{c[c.length-1]===t&&n&&n()};!function(e){let{ref:t,onInteractOutside:n,isDisabled:o,onInteractOutsideStart:a}=e,c=(0,r.useRef)({isPointerDown:!1,ignoreEmulatedMouseEvents:!1}),u=(0,l.i)(e=>{n&&s(e,t)&&(a&&a(e),c.current.isPointerDown=!0)}),d=(0,l.i)(e=>{n&&n(e)});(0,r.useEffect)(()=>{let e=c.current;if(o)return;let n=t.current,r=(0,i.r)(n);if("undefined"!=typeof PointerEvent){let n=n=>{e.isPointerDown&&s(n,t)&&d(n),e.isPointerDown=!1};return r.addEventListener("pointerdown",u,!0),r.addEventListener("pointerup",n,!0),()=>{r.removeEventListener("pointerdown",u,!0),r.removeEventListener("pointerup",n,!0)}}{let n=n=>{e.ignoreEmulatedMouseEvents?e.ignoreEmulatedMouseEvents=!1:e.isPointerDown&&s(n,t)&&d(n),e.isPointerDown=!1},o=n=>{e.ignoreEmulatedMouseEvents=!0,e.isPointerDown&&s(n,t)&&d(n),e.isPointerDown=!1};return r.addEventListener("mousedown",u,!0),r.addEventListener("mouseup",n,!0),r.addEventListener("touchstart",u,!0),r.addEventListener("touchend",o,!0),()=>{r.removeEventListener("mousedown",u,!0),r.removeEventListener("mouseup",n,!0),r.removeEventListener("touchstart",u,!0),r.removeEventListener("touchend",o,!0)}}},[t,o,u,d])}({ref:t,onInteractOutside:f&&d?e=>{(!h||h(e.target))&&(c[c.length-1]===t&&(e.stopPropagation(),e.preventDefault()),g())}:null,onInteractOutsideStart:e=>{(!h||h(e.target))&&c[c.length-1]===t&&(e.stopPropagation(),e.preventDefault())}});let{focusWithinProps:m}=(0,a.L)({isDisabled:!u,onBlurWithin:e=>{!(!e.relatedTarget||(0,o.cW)(e.relatedTarget))&&(!h||h(e.relatedTarget))&&n()}});return{overlayProps:{onKeyDown:e=>{"Escape"!==e.key||p||e.nativeEvent.isComposing||(e.stopPropagation(),e.preventDefault(),g())},...m},underlayProps:{onPointerDown:e=>{e.target===e.currentTarget&&e.preventDefault()}}}}},451:function(e,t,n){n.d(t,{t:function(){return k}});var o=n(2306);function r(e,t=-1/0,n=1/0){return Math.min(Math.max(e,t),n)}let l={top:"top",bottom:"top",left:"left",right:"left"},i={top:"bottom",bottom:"top",left:"right",right:"left"},s={top:"left",left:"top"},a={top:"height",left:"width"},c={width:"totalWidth",height:"totalHeight"},u={},d="undefined"!=typeof document&&window.visualViewport;function f(e){let t=0,n=0,r=0,l=0,i=0,s=0,a={},c=(null==d?void 0:d.scale)>1;if("BODY"===e.tagName){var u,f;let o=document.documentElement;r=o.clientWidth,l=o.clientHeight,t=null!==(u=null==d?void 0:d.width)&&void 0!==u?u:r,n=null!==(f=null==d?void 0:d.height)&&void 0!==f?f:l,a.top=o.scrollTop||e.scrollTop,a.left=o.scrollLeft||e.scrollLeft,d&&(i=d.offsetTop,s=d.offsetLeft)}else({width:t,height:n,top:i,left:s}=b(e)),a.top=e.scrollTop,a.left=e.scrollLeft,r=t,l=n;return(0,o.Pf)()&&("BODY"===e.tagName||"HTML"===e.tagName)&&c&&(a.top=0,a.left=0,i=d.pageTop,s=d.pageLeft),{width:t,height:n,totalWidth:r,totalHeight:l,scroll:a,top:i,left:s}}function p(e,t,n,o,r,i,s){let c=r.scroll[e],u=o[a[e]],d=o.scroll[l[e]]+i,f=u+o.scroll[l[e]]-i,p=t-c+s[e]-o[l[e]],h=t-c+n+s[e]-o[l[e]];return p<d?d-p:h>f?Math.max(f-h,d-p):0}function h(e){if(u[e])return u[e];let[t,n]=e.split(" "),o=l[t]||"right",r=s[o];l[n]||(n="center");let i=a[o],c=a[r];return u[e]={placement:t,crossPlacement:n,axis:o,crossAxis:r,size:i,crossSize:c},u[e]}function g(e,t,n,o,l,s,a,u,d,f){let{placement:p,crossPlacement:h,axis:g,crossAxis:m,size:b,crossSize:y}=o,v={};v[m]=e[m],"center"===h?v[m]+=(e[y]-n[y])/2:h!==m&&(v[m]+=e[y]-n[y]),v[m]+=s;let w=e[m]-n[y]+d+f,S=e[m]+e[y]-d-f;if(v[m]=r(v[m],w,S),p===g){let n=u?a[b]:t[c[b]];v[i[g]]=Math.floor(n-e[g]+l)}else v[g]=Math.floor(e[g]+e[b]+l);return v}function m(e,t,n,o,r,l){let{placement:s,axis:a,size:c}=l;return s===a?Math.max(0,n[a]-e[a]-e.scroll[a]+t[a]-o[a]-o[i[a]]-r):Math.max(0,e[c]+e[a]+e.scroll[a]-t[a]-n[a]-n[c]-o[a]-o[i[a]]-r)}function b(e){let{top:t,left:n,width:o,height:r}=e.getBoundingClientRect(),{scrollTop:l,scrollLeft:i,clientTop:s,clientLeft:a}=document.documentElement;return{top:t+l-s,left:n+i-a,width:o,height:r}}function y(e,t){let n,o=window.getComputedStyle(e);if("fixed"===o.position){let{top:t,left:o,width:r,height:l}=e.getBoundingClientRect();n={top:t,left:o,width:r,height:l}}else{n=b(e);let o=b(t),r=window.getComputedStyle(t);o.top+=(parseInt(r.borderTopWidth,10)||0)-t.scrollTop,o.left+=(parseInt(r.borderLeftWidth,10)||0)-t.scrollLeft,n.top-=o.top,n.left-=o.left}return n.top-=parseInt(o.marginTop,10)||0,n.left-=parseInt(o.marginLeft,10)||0,n}function v(e){let t=window.getComputedStyle(e);return"none"!==t.transform||/transform|perspective/.test(t.willChange)||"none"!==t.filter||"paint"===t.contain||"backdropFilter"in t&&"none"!==t.backdropFilter||"WebkitBackdropFilter"in t&&"none"!==t.WebkitBackdropFilter}var w=n(4292),S=n(2265),K=n(7594),x=n(2258);let E="undefined"!=typeof document&&window.visualViewport;function k(e){let{direction:t}=(0,x.j)(),{arrowSize:n=0,targetRef:o,overlayRef:l,scrollRef:s=l,placement:a="bottom",containerPadding:u=12,shouldFlip:d=!0,boundaryElement:k="undefined"!=typeof document?document.body:null,offset:C=0,crossOffset:I=0,shouldUpdatePosition:L=!0,isOpen:M=!0,onClose:O,maxHeight:P,arrowBoundaryOffset:T=0}=e,[F,z]=(0,S.useState)({position:{},arrowOffsetLeft:void 0,arrowOffsetTop:void 0,maxHeight:void 0,placement:void 0}),_=[L,a,l.current,o.current,s.current,u,d,k,C,I,M,t,P,T,n],D=(0,S.useRef)(null==E?void 0:E.scale);(0,S.useEffect)(()=>{M&&(D.current=null==E?void 0:E.scale)},[M]);let B=(0,S.useCallback)(()=>{var e,w;if(!1===L||!M||!l.current||!o.current||!s.current||!k||(null==E?void 0:E.scale)!==D.current)return;let S=l.current;!P&&l.current&&(S.style.top="0px",S.style.bottom="",S.style.maxHeight=(null!==(w=null===(e=window.visualViewport)||void 0===e?void 0:e.height)&&void 0!==w?w:window.innerHeight)+"px");let K=function(e){let t,{placement:n,targetNode:o,overlayNode:l,scrollNode:s,padding:a,shouldFlip:u,boundaryElement:d,offset:w,crossOffset:S,maxHeight:K,arrowSize:x=0,arrowBoundaryOffset:E=0}=e,k=l instanceof HTMLElement?function(e){let t=e.offsetParent;if(t&&t===document.body&&"static"===window.getComputedStyle(t).position&&!v(t)&&(t=document.documentElement),null==t)for(t=e.parentElement;t&&!v(t);)t=t.parentElement;return t||document.documentElement}(l):document.documentElement,C=k===document.documentElement,I=window.getComputedStyle(k).position,L=C?b(o):y(o,k);if(!C){let{marginTop:e,marginLeft:t}=window.getComputedStyle(o);L.top+=parseInt(e,10)||0,L.left+=parseInt(t,10)||0}let M=b(l),O={top:parseInt((t=window.getComputedStyle(l)).marginTop,10)||0,bottom:parseInt(t.marginBottom,10)||0,left:parseInt(t.marginLeft,10)||0,right:parseInt(t.marginRight,10)||0};M.width+=O.left+O.right,M.height+=O.top+O.bottom;let P={top:s.scrollTop,left:s.scrollLeft,width:s.scrollWidth,height:s.scrollHeight},T=f(d),F=f(k),z="BODY"===d.tagName?b(k):y(k,d);return"HTML"===k.tagName&&"BODY"===d.tagName&&(F.scroll.top=0,F.scroll.left=0),function(e,t,n,o,l,s,a,u,d,f,b,y,v,w,S,K){let x=h(e),{size:E,crossAxis:k,crossSize:C,placement:I,crossPlacement:L}=x,M=g(t,u,n,x,b,y,f,v,S,K),O=b,P=m(u,f,t,l,s+b,x);if(a&&o[E]>P){let e=h(`${i[I]} ${L}`),o=g(t,u,n,e,b,y,f,v,S,K);m(u,f,t,l,s+b,e)>P&&(x=e,M=o,O=b)}let T="bottom";"top"===x.axis?"top"===x.placement?T="top":"bottom"===x.placement&&(T="bottom"):"top"===x.crossAxis&&("top"===x.crossPlacement?T="bottom":"bottom"===x.crossPlacement&&(T="top"));let F=p(k,M[k],n[C],u,d,s,f);M[k]+=F;let z=function(e,t,n,o,r,l,i,s){let a=o?n.height:t[c.height],u=null!=e.top?n.top+e.top:n.top+(a-e.bottom-i),d="top"!==s?Math.max(0,t.height+t.top+t.scroll.top-u-(r.top+r.bottom+l)):Math.max(0,u+i-(t.top+t.scroll.top)-(r.top+r.bottom+l));return Math.min(t.height-2*l,d)}(M,u,f,v,l,s,n.height,T);w&&w<z&&(z=w),n.height=Math.min(n.height,z),F=p(k,(M=g(t,u,n,x,O,y,f,v,S,K))[k],n[C],u,d,s,f),M[k]+=F;let _={},D=t[k]+.5*t[C]-M[k],B=S/2+K,N=n[C]-S/2-K,R=r(D,t[k]-M[k]+S/2,t[k]+t[C]-M[k]-S/2);return _[k]=r(R,B,N),{position:M,maxHeight:z,arrowOffsetLeft:_.left,arrowOffsetTop:_.top,placement:x.placement}}(n,L,M,P,O,a,u,T,F,z,w,S,!!I&&"static"!==I,K,x,E)}({placement:"rtl"===t?a.replace("start","right").replace("end","left"):a.replace("start","left").replace("end","right"),overlayNode:l.current,targetNode:o.current,scrollNode:s.current,padding:u,shouldFlip:d,boundaryElement:k,offset:C,crossOffset:I,maxHeight:P,arrowSize:n,arrowBoundaryOffset:T});S.style.top="",S.style.bottom="",Object.keys(K.position).forEach(e=>S.style[e]=K.position[e]+"px"),S.style.maxHeight=null!=K.maxHeight?K.maxHeight+"px":void 0,z(K)},_);(0,K.b)(B,_),(0,K.b)(()=>(window.addEventListener("resize",B,!1),()=>{window.removeEventListener("resize",B,!1)}),[B]),function(e){let{ref:t,box:n,onResize:o}=e;(0,S.useEffect)(()=>{let e=null==t?void 0:t.current;if(e){if(!(void 0!==window.ResizeObserver))return window.addEventListener("resize",o,!1),()=>{window.removeEventListener("resize",o,!1)};{let t=new window.ResizeObserver(e=>{e.length&&o()});return t.observe(e,{box:n}),()=>{e&&t.unobserve(e)}}}},[o,t,n])}({ref:l,onResize:B});let N=(0,S.useRef)(!1);(0,K.b)(()=>{let e;let t=()=>{N.current=!0,clearTimeout(e),e=setTimeout(()=>{N.current=!1},500),B()},n=()=>{N.current&&t()};return null==E||E.addEventListener("resize",t),null==E||E.addEventListener("scroll",n),()=>{null==E||E.removeEventListener("resize",t),null==E||E.removeEventListener("scroll",n)}},[B]);let R=(0,S.useCallback)(()=>{N.current||O()},[O,N]);return(0,w.O)({triggerRef:o,isOpen:M,onClose:O&&R}),{overlayProps:{style:{position:"absolute",zIndex:1e5,...F.position,maxHeight:F.maxHeight}},placement:F.placement,arrowProps:{"aria-hidden":"true",role:"presentation",style:{left:F.arrowOffsetLeft,top:F.arrowOffsetTop}},updatePosition:B}}},739:function(e,t,n){n.d(t,{L:function(){return s}});var o=n(2265),r=n(7594),l=n(3624);class i{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(e,t){this.nativeEvent=t,this.target=t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=e}}function s(e){let t,n,{isDisabled:s,onBlurWithin:a,onFocusWithin:c,onFocusWithinChange:u}=e,d=(0,o.useRef)({isFocusWithin:!1}),f=(0,o.useCallback)(e=>{d.current.isFocusWithin&&!e.currentTarget.contains(e.relatedTarget)&&(d.current.isFocusWithin=!1,a&&a(e),u&&u(!1))},[a,u,d]),p=(t=(0,o.useRef)({isFocused:!1,observer:null}),(0,r.b)(()=>{let e=t.current;return()=>{e.observer&&(e.observer.disconnect(),e.observer=null)}},[]),n=(0,l.i)(e=>{null==f||f(e)}),(0,o.useCallback)(e=>{if(e.target instanceof HTMLButtonElement||e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLSelectElement){t.current.isFocused=!0;let o=e.target;o.addEventListener("focusout",e=>{t.current.isFocused=!1,o.disabled&&n(new i("blur",e)),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)},{once:!0}),t.current.observer=new MutationObserver(()=>{if(t.current.isFocused&&o.disabled){var e;null===(e=t.current.observer)||void 0===e||e.disconnect();let n=o===document.activeElement?null:document.activeElement;o.dispatchEvent(new FocusEvent("blur",{relatedTarget:n})),o.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:n}))}}),t.current.observer.observe(o,{attributes:!0,attributeFilter:["disabled"]})}},[n])),h=(0,o.useCallback)(e=>{d.current.isFocusWithin||document.activeElement!==e.target||(c&&c(e),u&&u(!0),d.current.isFocusWithin=!0,p(e))},[c,u,p]);return s?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:h,onBlur:f}}}},3624:function(e,t,n){n.d(t,{i:function(){return l}});var o=n(7594),r=n(2265);function l(e){let t=(0,r.useRef)(null);return(0,o.b)(()=>{t.current=e},[e]),(0,r.useCallback)((...e)=>{let n=t.current;return null==n?void 0:n(...e)},[])}},2897:function(e,t,n){function o(e,t){return"function"==typeof t.getChildren?t.getChildren(e.key):e.childNodes}function r(e){return l(e,0)}function l(e,t){if(t<0)return;let n=0;for(let o of e){if(n===t)return o;n++}}function i(e){let t;for(let n of e)t=n;return t}function s(e,t,n){if(t.parentKey===n.parentKey)return t.index-n.index;let o=[...a(e,t),t],r=[...a(e,n),n],l=o.slice(0,r.length).findIndex((e,t)=>e!==r[t]);return -1!==l?(t=o[l],n=r[l],t.index-n.index):o.findIndex(e=>e===n)>=0?1:(r.findIndex(e=>e===t),-1)}function a(e,t){let n=[];for(;(null==t?void 0:t.parentKey)!=null;)n.unshift(t=e.getItem(t.parentKey));return n}n.d(t,{Em:function(){return l},_P:function(){return o},eg:function(){return s},l8:function(){return r},s:function(){return i}})},4921:function(e,t,n){n.d(t,{K:function(){return s}});var o=n(2265);class r{build(e,t){return this.context=t,l(()=>this.iterateCollection(e))}*iterateCollection(e){let{children:t,items:n}=e;if("function"==typeof t){if(!n)throw Error("props.children was a function but props.items is missing");for(let n of e.items)yield*this.getFullNode({value:n},{renderer:t})}else{let e=[];o.Children.forEach(t,t=>{e.push(t)});let n=0;for(let t of e)for(let e of this.getFullNode({element:t,index:n},{}))n++,yield e}}getKey(e,t,n,o){if(null!=e.key)return e.key;if("cell"===t.type&&null!=t.key)return`${o}${t.key}`;let r=t.value;if(null!=r){var l;let e=null!==(l=r.key)&&void 0!==l?l:r.id;if(null==e)throw Error("No key found for item");return e}return o?`${o}.${t.index}`:`$.${t.index}`}getChildState(e,t){return{renderer:t.renderer||e.renderer}}*getFullNode(e,t,n,r){let s=e.element;if(!s&&e.value&&t&&t.renderer){let n=this.cache.get(e.value);if(n&&(!n.shouldInvalidate||!n.shouldInvalidate(this.context))){n.index=e.index,n.parentKey=r?r.key:null,yield n;return}s=t.renderer(e.value)}if(o.isValidElement(s)){let o=s.type;if("function"!=typeof o&&"function"!=typeof o.getCollectionNode){let e="function"==typeof s.type?s.type.name:s.type;throw Error(`Unknown element <${e}> in collection.`)}let l=o.getCollectionNode(s.props,this.context),a=e.index,c=l.next();for(;!c.done&&c.value;){let o=c.value;e.index=a;let u=o.key;u||(u=o.element?null:this.getKey(s,e,t,n));let d=[...this.getFullNode({...o,key:u,index:a,wrapper:function(e,t){return e&&t?n=>e(t(n)):e||t||void 0}(e.wrapper,o.wrapper)},this.getChildState(t,o),n?`${n}${s.key}`:s.key,r)];for(let t of d){if(t.value=o.value||e.value,t.value&&this.cache.set(t.value,t),e.type&&t.type!==e.type)throw Error(`Unsupported type <${i(t.type)}> in <${i(r.type)}>. Only <${i(e.type)}> is supported.`);a++,yield t}c=l.next(d)}return}if(null==e.key)return;let a=this,c={type:e.type,props:e.props,key:e.key,parentKey:r?r.key:null,value:e.value,level:r?r.level+1:0,index:e.index,rendered:e.rendered,textValue:e.textValue,"aria-label":e["aria-label"],wrapper:e.wrapper,shouldInvalidate:e.shouldInvalidate,hasChildNodes:e.hasChildNodes,childNodes:l(function*(){if(!e.hasChildNodes)return;let n=0;for(let o of e.childNodes())for(let e of(null!=o.key&&(o.key=`${c.key}${o.key}`),o.index=n,a.getFullNode(o,a.getChildState(t,o),c.key,c)))n++,yield e})};yield c}constructor(){this.cache=new WeakMap}}function l(e){let t=[],n=null;return{*[Symbol.iterator](){for(let e of t)yield e;for(let o of(n||(n=e()),n))t.push(o),yield o}}}function i(e){return e[0].toUpperCase()+e.slice(1)}function s(e,t,n){let l=(0,o.useMemo)(()=>new r,[]),{children:i,items:s,collection:a}=e;return(0,o.useMemo)(()=>a||t(l.build({children:i,items:s},n)),[l,i,s,a,n,t])}},9259:function(e,t,n){n.d(t,{d:function(){return l}});var o=n(2265),r=n(1821);function l(e){let[t,n]=(0,r.z)(e.isOpen,e.defaultOpen||!1,e.onOpenChange),l=(0,o.useCallback)(()=>{n(!0)},[n]),i=(0,o.useCallback)(()=>{n(!1)},[n]),s=(0,o.useCallback)(()=>{n(!t)},[n,t]);return{isOpen:t,setOpen:n,open:l,close:i,toggle:s}}},1980:function(e,t,n){n.d(t,{Y:function(){return o}});class o extends Set{constructor(e,t,n){super(e),e instanceof o?(this.anchorKey=t||e.anchorKey,this.currentKey=n||e.currentKey):(this.anchorKey=t,this.currentKey=n)}}},2490:function(e,t,n){n.d(t,{Z:function(){return l}});var o=n(1980),r=n(2897);class l{get selectionMode(){return this.state.selectionMode}get disallowEmptySelection(){return this.state.disallowEmptySelection}get selectionBehavior(){return this.state.selectionBehavior}setSelectionBehavior(e){this.state.setSelectionBehavior(e)}get isFocused(){return this.state.isFocused}setFocused(e){this.state.setFocused(e)}get focusedKey(){return this.state.focusedKey}get childFocusStrategy(){return this.state.childFocusStrategy}setFocusedKey(e,t){(null==e||this.collection.getItem(e))&&this.state.setFocusedKey(e,t)}get selectedKeys(){return"all"===this.state.selectedKeys?new Set(this.getSelectAllKeys()):this.state.selectedKeys}get rawSelection(){return this.state.selectedKeys}isSelected(e){return"none"!==this.state.selectionMode&&(e=this.getKey(e),"all"===this.state.selectedKeys?this.canSelectItem(e):this.state.selectedKeys.has(e))}get isEmpty(){return"all"!==this.state.selectedKeys&&0===this.state.selectedKeys.size}get isSelectAll(){if(this.isEmpty)return!1;if("all"===this.state.selectedKeys)return!0;if(null!=this._isSelectAll)return this._isSelectAll;let e=this.getSelectAllKeys(),t=this.state.selectedKeys;return this._isSelectAll=e.every(e=>t.has(e)),this._isSelectAll}get firstSelectedKey(){let e=null;for(let t of this.state.selectedKeys){let n=this.collection.getItem(t);(!e||n&&0>(0,r.eg)(this.collection,n,e))&&(e=n)}return null==e?void 0:e.key}get lastSelectedKey(){let e=null;for(let t of this.state.selectedKeys){let n=this.collection.getItem(t);(!e||n&&(0,r.eg)(this.collection,n,e)>0)&&(e=n)}return null==e?void 0:e.key}get disabledKeys(){return this.state.disabledKeys}get disabledBehavior(){return this.state.disabledBehavior}extendSelection(e){let t;if("none"!==this.selectionMode){if("single"===this.selectionMode){this.replaceSelection(e);return}if(e=this.getKey(e),"all"===this.state.selectedKeys)t=new o.Y([e],e,e);else{let n=this.state.selectedKeys,r=n.anchorKey||e;for(let l of(t=new o.Y(n,r,e),this.getKeyRange(r,n.currentKey||e)))t.delete(l);for(let n of this.getKeyRange(e,r))this.canSelectItem(n)&&t.add(n)}this.state.setSelectedKeys(t)}}getKeyRange(e,t){let n=this.collection.getItem(e),o=this.collection.getItem(t);return n&&o?0>=(0,r.eg)(this.collection,n,o)?this.getKeyRangeInternal(e,t):this.getKeyRangeInternal(t,e):[]}getKeyRangeInternal(e,t){let n=[],o=e;for(;o;){let e=this.collection.getItem(o);if((e&&"item"===e.type||"cell"===e.type&&this.allowsCellSelection)&&n.push(o),o===t)return n;o=this.collection.getKeyAfter(o)}return[]}getKey(e){let t=this.collection.getItem(e);if(!t||"cell"===t.type&&this.allowsCellSelection)return e;for(;"item"!==t.type&&null!=t.parentKey;)t=this.collection.getItem(t.parentKey);return t&&"item"===t.type?t.key:null}toggleSelection(e){if("none"===this.selectionMode)return;if("single"===this.selectionMode&&!this.isSelected(e)){this.replaceSelection(e);return}if(null==(e=this.getKey(e)))return;let t=new o.Y("all"===this.state.selectedKeys?this.getSelectAllKeys():this.state.selectedKeys);t.has(e)?t.delete(e):this.canSelectItem(e)&&(t.add(e),t.anchorKey=e,t.currentKey=e),this.disallowEmptySelection&&0===t.size||this.state.setSelectedKeys(t)}replaceSelection(e){if("none"===this.selectionMode||null==(e=this.getKey(e)))return;let t=this.canSelectItem(e)?new o.Y([e],e,e):new o.Y;this.state.setSelectedKeys(t)}setSelectedKeys(e){if("none"===this.selectionMode)return;let t=new o.Y;for(let n of e)if(null!=(n=this.getKey(n))&&(t.add(n),"single"===this.selectionMode))break;this.state.setSelectedKeys(t)}getSelectAllKeys(){let e=[],t=n=>{for(;null!=n;){if(this.canSelectItem(n)){let o=this.collection.getItem(n);"item"===o.type&&e.push(n),o.hasChildNodes&&(this.allowsCellSelection||"item"!==o.type)&&t((0,r.l8)((0,r._P)(o,this.collection)).key)}n=this.collection.getKeyAfter(n)}};return t(this.collection.getFirstKey()),e}selectAll(){this.isSelectAll||"multiple"!==this.selectionMode||this.state.setSelectedKeys("all")}clearSelection(){!this.disallowEmptySelection&&("all"===this.state.selectedKeys||this.state.selectedKeys.size>0)&&this.state.setSelectedKeys(new o.Y)}toggleSelectAll(){this.isSelectAll?this.clearSelection():this.selectAll()}select(e,t){"none"!==this.selectionMode&&("single"===this.selectionMode?this.isSelected(e)&&!this.disallowEmptySelection?this.toggleSelection(e):this.replaceSelection(e):"toggle"===this.selectionBehavior||t&&("touch"===t.pointerType||"virtual"===t.pointerType)?this.toggleSelection(e):this.replaceSelection(e))}isSelectionEqual(e){if(e===this.state.selectedKeys)return!0;let t=this.selectedKeys;if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;for(let n of t)if(!e.has(n))return!1;return!0}canSelectItem(e){var t;if("none"===this.state.selectionMode||this.state.disabledKeys.has(e))return!1;let n=this.collection.getItem(e);return!!n&&(null==n||null===(t=n.props)||void 0===t||!t.isDisabled)&&("cell"!==n.type||!!this.allowsCellSelection)}isDisabled(e){var t,n;return"all"===this.state.disabledBehavior&&(this.state.disabledKeys.has(e)||!!(null===(n=this.collection.getItem(e))||void 0===n?void 0:null===(t=n.props)||void 0===t?void 0:t.isDisabled))}isLink(e){var t,n;return!!(null===(n=this.collection.getItem(e))||void 0===n?void 0:null===(t=n.props)||void 0===t?void 0:t.href)}getItemProps(e){var t;return null===(t=this.collection.getItem(e))||void 0===t?void 0:t.props}constructor(e,t,n){var o;this.collection=e,this.state=t,this.allowsCellSelection=null!==(o=null==n?void 0:n.allowsCellSelection)&&void 0!==o&&o,this._isSelectAll=null}}},5125:function(e,t,n){n.d(t,{q:function(){return i}});var o=n(1980),r=n(1821),l=n(2265);function i(e){let{selectionMode:t="none",disallowEmptySelection:n,allowDuplicateSelectionEvents:i,selectionBehavior:a="toggle",disabledBehavior:c="all"}=e,u=(0,l.useRef)(!1),[,d]=(0,l.useState)(!1),f=(0,l.useRef)(null),p=(0,l.useRef)(null),[,h]=(0,l.useState)(null),g=(0,l.useMemo)(()=>s(e.selectedKeys),[e.selectedKeys]),m=(0,l.useMemo)(()=>s(e.defaultSelectedKeys,new o.Y),[e.defaultSelectedKeys]),[b,y]=(0,r.z)(g,m,e.onSelectionChange),v=(0,l.useMemo)(()=>e.disabledKeys?new Set(e.disabledKeys):new Set,[e.disabledKeys]),[w,S]=(0,l.useState)(a);"replace"===a&&"toggle"===w&&"object"==typeof b&&0===b.size&&S("replace");let K=(0,l.useRef)(a);return(0,l.useEffect)(()=>{a!==K.current&&(S(a),K.current=a)},[a]),{selectionMode:t,disallowEmptySelection:n,selectionBehavior:w,setSelectionBehavior:S,get isFocused(){return u.current},setFocused(e){u.current=e,d(e)},get focusedKey(){return f.current},get childFocusStrategy(){return p.current},setFocusedKey(e,t="first"){f.current=e,p.current=t,h(e)},selectedKeys:b,setSelectedKeys(e){(i||!function(e,t){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}(e,b))&&y(e)},disabledKeys:v,disabledBehavior:c}}function s(e,t){return e?"all"===e?"all":new o.Y(e):t}}}]);