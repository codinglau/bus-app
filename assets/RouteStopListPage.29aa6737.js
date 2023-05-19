import{h as v,j as R,aS as ke,aT as Ie,l as le,aa as he,aU as Ce,a5 as be,r as M,c as m,w as O,g as G,P as we,aV as Te,s as j,a3 as re,a0 as W,ac as Pe,af as U,v as Le,ag as _e,ae as K,ah as ee,ak as ue,ad as te,aW as qe,X as Be,aX as $e,al as Ae,k as ne,a as Qe,n as Ee,C as ae,aC as Ne,I as L,J as $,K as A,G as Oe,H as Re,O as N,S as V,U as oe,F as Y,f as X,Q as De,V as se}from"./index.b7cf31e4.js";import{u as Ue,a as Ve,b as Me,Q as ce}from"./index.a7f31e3b.js";import{u as ye,a as xe,Q as je}from"./QCard.3fd4b064.js";import{m as He,p as ze,u as de,w as Fe,c as fe,Q as Ke,b as ve,a as ie,A as Ye,d as Xe}from"./format.d7776d46.js";import{g as pe,s as ge,u as We,B as Ge}from"./DesktopDrawer.vue_vue_type_style_index_0_lang.2429e990.js";import{Q as Je}from"./QPage.eed97375.js";import{u as Ze}from"./vue-i18n.runtime.esm-bundler.9ac6aaf0.js";import"./axios.5abe3e55.js";const et=[v("rect",{x:"0",y:"0",width:" 100",height:"100",fill:"none"}),v("path",{d:"M78,19H22c-6.6,0-12,5.4-12,12v31c0,6.6,5.4,12,12,12h37.2c0.4,3,1.8,5.6,3.7,7.6c2.4,2.5,5.1,4.1,9.1,4 c-1.4-2.1-2-7.2-2-10.3c0-0.4,0-0.8,0-1.3h8c6.6,0,12-5.4,12-12V31C90,24.4,84.6,19,78,19z",fill:"currentColor"}),v("circle",{cx:"30",cy:"47",r:"5",fill:"#fff"},[v("animate",{attributeName:"opacity",from:"0",to:"1",values:"0;1;1",keyTimes:"0;0.2;1",dur:"1s",repeatCount:"indefinite"})]),v("circle",{cx:"50",cy:"47",r:"5",fill:"#fff"},[v("animate",{attributeName:"opacity",from:"0",to:"1",values:"0;0;1;1",keyTimes:"0;0.2;0.4;1",dur:"1s",repeatCount:"indefinite"})]),v("circle",{cx:"70",cy:"47",r:"5",fill:"#fff"},[v("animate",{attributeName:"opacity",from:"0",to:"1",values:"0;0;1;1",keyTimes:"0;0.4;0.6;1",dur:"1s",repeatCount:"indefinite"})])];var tt=R({name:"QSpinnerComment",props:ke,setup(e){const{cSize:n,classes:l}=Ie(e);return()=>v("svg",{class:l.value,width:n.value,height:n.value,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},et)}}),nt=R({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:n,emit:l}){let p=!1,d,t,a=null,r=null,h,k;function f(){d&&d(),d=null,p=!1,a!==null&&(clearTimeout(a),a=null),r!==null&&(clearTimeout(r),r=null),t!==void 0&&t.removeEventListener("transitionend",h),h=null}function i(o,S,P){S!==void 0&&(o.style.height=`${S}px`),o.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,p=!0,d=P}function u(o,S){o.style.overflowY=null,o.style.height=null,o.style.transition=null,f(),S!==k&&l(S)}function b(o,S){let P=0;t=o,p===!0?(f(),P=o.offsetHeight===o.scrollHeight?0:void 0):(k="hide",o.style.overflowY="hidden"),i(o,P,S),a=setTimeout(()=>{a=null,o.style.height=`${o.scrollHeight}px`,h=w=>{r=null,(Object(w)!==w||w.target===o)&&u(o,"show")},o.addEventListener("transitionend",h),r=setTimeout(h,e.duration*1.1)},100)}function C(o,S){let P;t=o,p===!0?f():(k="show",o.style.overflowY="hidden",P=o.scrollHeight),i(o,P,S),a=setTimeout(()=>{a=null,o.style.height=0,h=w=>{r=null,(Object(w)!==w||w.target===o)&&u(o,"hide")},o.addEventListener("transitionend",h),r=setTimeout(h,e.duration*1.1)},100)}return le(()=>{p===!0&&f()}),()=>v(he,{css:!1,appear:e.appear,onEnter:b,onLeave:C},n.default)}});const Q=Ce({}),at=Object.keys(be);var ot=R({name:"QExpansionItem",props:{...be,...He,...ye,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...ze,"click","afterShow","afterHide"],setup(e,{slots:n,emit:l}){const{proxy:{$q:p}}=G(),d=xe(e,p),t=M(e.modelValue!==null?e.modelValue:e.defaultOpened),a=M(null),r=de(),{show:h,hide:k,toggle:f}=Fe({showing:t});let i,u;const b=m(()=>`q-expansion-item q-item-type q-expansion-item--${t.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),C=m(()=>{if(e.contentInsetLevel===void 0)return null;const c=p.lang.rtl===!0?"Right":"Left";return{["padding"+c]:e.contentInsetLevel*56+"px"}}),o=m(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),S=m(()=>{const c={};return at.forEach(B=>{c[B]=e[B]}),c}),P=m(()=>o.value===!0||e.expandIconToggle!==!0),w=m(()=>e.expandedIcon!==void 0&&t.value===!0?e.expandedIcon:e.expandIcon||p.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),g=m(()=>e.disable!==!0&&(o.value===!0||e.expandIconToggle===!0)),_=m(()=>({expanded:t.value===!0,detailsId:e.targetUid,toggle:f,show:h,hide:k})),I=m(()=>{const c=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:p.lang.label[t.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":t.value===!0?"true":"false","aria-controls":r,"aria-label":c}});O(()=>e.group,c=>{u!==void 0&&u(),c!==void 0&&z()});function x(c){o.value!==!0&&f(c),l("click",c)}function T(c){c.keyCode===13&&D(c,!0)}function D(c,B){B!==!0&&a.value!==null&&a.value.focus(),f(c),W(c)}function H(){l("afterShow")}function J(){l("afterHide")}function z(){i===void 0&&(i=de()),t.value===!0&&(Q[e.group]=i);const c=O(t,F=>{F===!0?Q[e.group]=i:Q[e.group]===i&&delete Q[e.group]}),B=O(()=>Q[e.group],(F,Se)=>{Se===i&&F!==void 0&&F!==i&&k()});u=()=>{c(),B(),Q[e.group]===i&&delete Q[e.group],u=void 0}}function Z(){const c={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},B=[v(re,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&t.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:w.value})];return g.value===!0&&(Object.assign(c,{tabindex:0,...I.value,onClick:D,onKeyup:T}),B.unshift(v("div",{ref:a,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),v(ie,c,()=>B)}function s(){let c;return n.header!==void 0?c=[].concat(n.header(_.value)):(c=[v(ie,()=>[v(ve,{lines:e.labelLines},()=>e.label||""),e.caption?v(ve,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&c[e.switchToggleSide===!0?"push":"unshift"](v(ie,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>v(re,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&c[e.switchToggleSide===!0?"unshift":"push"](Z()),c}function y(){const c={ref:"item",style:e.headerStyle,class:e.headerClass,dark:d.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return P.value===!0&&(c.clickable=!0,c.onClick=x,Object.assign(c,o.value===!0?S.value:I.value)),v(Ke,c,s)}function q(){return we(v("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:C.value,id:r},j(n.default)),[[Te,t.value]])}function E(){const c=[y(),v(nt,{duration:e.duration,onShow:H,onHide:J},q)];return e.expandSeparator===!0&&c.push(v(fe,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:d.value}),v(fe,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:d.value})),c}return e.group!==void 0&&z(),le(()=>{u!==void 0&&u()}),()=>v("div",{class:b.value},[v("div",{class:"q-expansion-item__container relative-position"},E())])}});function it(e){const n=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((l,p)=>{const d=parseFloat(l);d&&(n[p]=d)}),n}var lt=Pe({name:"touch-swipe",beforeMount(e,{value:n,arg:l,modifiers:p}){if(p.mouse!==!0&&U.has.touch!==!0)return;const d=p.mouseCapture===!0?"Capture":"",t={handler:n,sensitivity:it(l),direction:pe(p),noop:Le,mouseStart(a){ge(a,t)&&_e(a)&&(K(t,"temp",[[document,"mousemove","move",`notPassive${d}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(a,!0))},touchStart(a){if(ge(a,t)){const r=a.target;K(t,"temp",[[r,"touchmove","move","notPassiveCapture"],[r,"touchcancel","end","notPassiveCapture"],[r,"touchend","end","notPassiveCapture"]]),t.start(a)}},start(a,r){U.is.firefox===!0&&ee(e,!0);const h=ue(a);t.event={x:h.left,y:h.top,time:Date.now(),mouse:r===!0,dir:!1}},move(a){if(t.event===void 0)return;if(t.event.dir!==!1){W(a);return}const r=Date.now()-t.event.time;if(r===0)return;const h=ue(a),k=h.left-t.event.x,f=Math.abs(k),i=h.top-t.event.y,u=Math.abs(i);if(t.event.mouse!==!0){if(f<t.sensitivity[1]&&u<t.sensitivity[1]){t.end(a);return}}else if(window.getSelection().toString()!==""){t.end(a);return}else if(f<t.sensitivity[2]&&u<t.sensitivity[2])return;const b=f/r,C=u/r;t.direction.vertical===!0&&f<u&&f<100&&C>t.sensitivity[0]&&(t.event.dir=i<0?"up":"down"),t.direction.horizontal===!0&&f>u&&u<100&&b>t.sensitivity[0]&&(t.event.dir=k<0?"left":"right"),t.direction.up===!0&&f<u&&i<0&&f<100&&C>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&f<u&&i>0&&f<100&&C>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&f>u&&k<0&&u<100&&b>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&f>u&&k>0&&u<100&&b>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(W(a),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Ye(),t.styleCleanup=o=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const S=()=>{document.body.classList.remove("no-pointer-events--children")};o===!0?setTimeout(S,50):S()}),t.handler({evt:a,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:r,distance:{x:f,y:u}})):t.end(a)},end(a){t.event!==void 0&&(te(t,"temp"),U.is.firefox===!0&&ee(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),a!==void 0&&t.event.dir!==!1&&W(a),t.event=void 0)}};if(e.__qtouchswipe=t,p.mouse===!0){const a=p.mouseCapture===!0||p.mousecapture===!0?"Capture":"";K(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}U.has.touch===!0&&K(t,"main",[[e,"touchstart","touchStart",`passive${p.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const l=e.__qtouchswipe;l!==void 0&&(n.oldValue!==n.value&&(typeof n.value!="function"&&l.end(),l.handler=n.value),l.direction=pe(n.modifiers))},beforeUnmount(e){const n=e.__qtouchswipe;n!==void 0&&(te(n,"main"),te(n,"temp"),U.is.firefox===!0&&ee(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchswipe)}});function rt(){const e=new Map;return{getCache:function(n,l){return e[n]===void 0?e[n]=l:e[n]},getCacheWithFn:function(n,l){return e[n]===void 0?e[n]=l():e[n]}}}const ut={name:{required:!0},disable:Boolean},me={setup(e,{slots:n}){return()=>v("div",{class:"q-panel scroll",role:"tabpanel"},j(n.default))}},st={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},ct=["update:modelValue","beforeTransition","transition"];function dt(){const{props:e,emit:n,proxy:l}=G(),{getCacheWithFn:p}=rt();let d,t;const a=M(null),r=M(null);function h(s){const y=e.vertical===!0?"up":"left";T((l.$q.lang.rtl===!0?-1:1)*(s.direction===y?1:-1))}const k=m(()=>[[lt,h,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),f=m(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),i=m(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),u=m(()=>`--q-transition-duration: ${e.transitionDuration}ms`),b=m(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),C=m(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),o=m(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);O(()=>e.modelValue,(s,y)=>{const q=g(s)===!0?_(s):-1;t!==!0&&x(q===-1?0:q<_(y)?-1:1),a.value!==q&&(a.value=q,n("beforeTransition",s,y),Be(()=>{n("transition",s,y)}))});function S(){T(1)}function P(){T(-1)}function w(s){n("update:modelValue",s)}function g(s){return s!=null&&s!==""}function _(s){return d.findIndex(y=>y.props.name===s&&y.props.disable!==""&&y.props.disable!==!0)}function I(){return d.filter(s=>s.props.disable!==""&&s.props.disable!==!0)}function x(s){const y=s!==0&&e.animated===!0&&a.value!==-1?"q-transition--"+(s===-1?f.value:i.value):null;r.value!==y&&(r.value=y)}function T(s,y=a.value){let q=y+s;for(;q>-1&&q<d.length;){const E=d[q];if(E!==void 0&&E.props.disable!==""&&E.props.disable!==!0){x(s),t=!0,n("update:modelValue",E.props.name),setTimeout(()=>{t=!1});return}q+=s}e.infinite===!0&&d.length!==0&&y!==-1&&y!==d.length&&T(s,s===-1?d.length:-1)}function D(){const s=_(e.modelValue);return a.value!==s&&(a.value=s),!0}function H(){const s=g(e.modelValue)===!0&&D()&&d[a.value];return e.keepAlive===!0?[v($e,C.value,[v(o.value===!0?p(b.value,()=>({...me,name:b.value})):me,{key:b.value,style:u.value},()=>s)])]:[v("div",{class:"q-panel scroll",style:u.value,key:b.value,role:"tabpanel"},[s])]}function J(){if(d.length!==0)return e.animated===!0?[v(he,{name:r.value},H)]:H()}function z(s){return d=qe(j(s.default,[])).filter(y=>y.props!==null&&y.props.slot===void 0&&g(y.props.name)===!0),d.length}function Z(){return d}return Object.assign(l,{next:S,previous:P,goTo:w}),{panelIndex:a,panelDirectives:k,updatePanelsList:z,updatePanelIndex:D,getPanelContent:J,getEnabledPanels:I,getPanels:Z,isValidPanelName:g,keepAliveProps:C,needsUniqueKeepAliveWrapper:o,goToPanelByOffset:T,goToPanel:w,nextPanel:S,previousPanel:P}}var ft=R({name:"QTabPanel",props:ut,setup(e,{slots:n}){return()=>v("div",{class:"q-tab-panel",role:"tabpanel"},j(n.default))}}),vt=R({name:"QTabPanels",props:{...st,...ye},emits:ct,setup(e,{slots:n}){const l=G(),p=xe(e,l.proxy.$q),{updatePanelsList:d,getPanelContent:t,panelDirectives:a}=dt(),r=m(()=>"q-tab-panels q-panel-parent"+(p.value===!0?" q-tab-panels--dark q-dark":""));return()=>(d(n),Ae("div",{class:r.value},t(),"pan",e.swipeable,()=>a.value))}});const pt={position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,validator:e=>e.length===2},expand:Boolean};function gt(){const{props:e,proxy:{$q:n}}=G(),l=Qe(Ee,ne);if(l===ne)return console.error("QPageSticky needs to be child of QLayout"),ne;const p=m(()=>{const i=e.position;return{top:i.indexOf("top")>-1,right:i.indexOf("right")>-1,bottom:i.indexOf("bottom")>-1,left:i.indexOf("left")>-1,vertical:i==="top"||i==="bottom",horizontal:i==="left"||i==="right"}}),d=m(()=>l.header.offset),t=m(()=>l.right.offset),a=m(()=>l.footer.offset),r=m(()=>l.left.offset),h=m(()=>{let i=0,u=0;const b=p.value,C=n.lang.rtl===!0?-1:1;b.top===!0&&d.value!==0?u=`${d.value}px`:b.bottom===!0&&a.value!==0&&(u=`${-a.value}px`),b.left===!0&&r.value!==0?i=`${C*r.value}px`:b.right===!0&&t.value!==0&&(i=`${-C*t.value}px`);const o={transform:`translate(${i}, ${u})`};return e.offset&&(o.margin=`${e.offset[1]}px ${e.offset[0]}px`),b.vertical===!0?(r.value!==0&&(o[n.lang.rtl===!0?"right":"left"]=`${r.value}px`),t.value!==0&&(o[n.lang.rtl===!0?"left":"right"]=`${t.value}px`)):b.horizontal===!0&&(d.value!==0&&(o.top=`${d.value}px`),a.value!==0&&(o.bottom=`${a.value}px`)),o}),k=m(()=>`q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand===!0?"expand":"shrink"}`);function f(i){const u=j(i.default);return v("div",{class:k.value,style:h.value},e.expand===!0?u:[v("div",u)])}return{$layout:l,getStickyContent:f}}var mt=R({name:"QPageSticky",props:pt,setup(e,{slots:n}){const{getStickyContent:l}=gt();return()=>l(n)}});const ht={key:1,class:"row q-gutter-sm justify-center"},Tt={__name:"RouteStopListPage",props:{lang:{type:String,required:!0},companyId:{type:String,required:!0},routeId:{type:String,required:!0},direction:{type:String,default:"outbound",validate:e=>["OUTBOUND","INBOUND"].includes(e.toUpperCase())}},setup(e){const n=e,l=We();Oe(),Re(),Ze();const{fetchApi:p,loadingBusRoute:d,loadingRouteStopList:t,loadingStopEtaList:a}=Ue(["loadingBusRoute","loadingRouteStopList","loadingStopEtaList"]),r=Ve(),h=ae({routeId:"",origin:{en:"",tc:""},destination:{en:"",tc:""}});async function k(){p(r.getBusRoute,{companyId:n.companyId,routeId:n.routeId},{config:{loadingScope:"loadingBusRoute"},onSuccess(g){h.routeId=g.route,h.origin.en=g.orig_en,h.origin.tc=g.orig_tc,h.destination.en=g.dest_en,h.destination.tc=g.dest_tc}})}const f=ae({value:"outbound",options:[{value:"outbound",label:"page.routeStopList.header.outbound",disable:!0},{value:"inbound",label:"page.routeStopList.header.inbound",disable:!0}],filteredOptions:[]}),i=ae({inbound:[],outbound:[]});m(()=>i.inbound.map(g=>({...g,name:g[n.lang]}))),m(()=>i.inbound.length===0),m(()=>i.outbound.map(g=>({...g,name:g[n.lang]}))),m(()=>i.outbound.length===0);function u(g,_){w(),C.value=null,p(r.getBusRouteStopList,{companyId:g,routeId:_},{config:{loadingScope:"loadingRouteStopList"},onSuccess(I){for(const x in I)I[x].length>0?f.options.find(T=>T.value===x).disable=!1:f.options.find(T=>T.value===x).disable=!0,i[x]=I[x]}})}let b=null;const C=M(null);function o(g,_){w(),p(r.getBusStopEtaList,{companyId:n.companyId,routeId:n.routeId,stopId:g,direction:_},{config:{loadingScope:"loadingStopEtaList"},onSuccess(I){const x=i[_].find(T=>T.stop===g);!x||(x.etaList=I.slice(),P())}})}const S=m(()=>l.screen.gt.sm?"\u5237\u65B0\u5230\u7AD9\u6642\u9593":"");function P(){b&&clearInterval(b),b=setInterval(()=>{C.value&&o()},3e4)}function w(){b&&clearInterval(b)}return O(()=>n.routeId,g=>{k(),u(n.companyId,g)}),O(()=>n.direction,g=>{g&&(g.toUpperCase()==="OUTBOUND"?f.value=0:g.toUpperCase()==="INBOUND"&&(f.value=1))}),Ne(()=>{k(),u(n.companyId,n.routeId)}),le(()=>{w()}),(g,_)=>(L(),$(Je,null,{default:A(()=>[N(t)?(L(),$(N(Ge).RouteStopListSkeleton,{key:0})):(L(),$(vt,{key:1,swipeable:"","keep-alive":"",animated:"",modelValue:f.value,"onUpdate:modelValue":_[0]||(_[0]=I=>f.value=I)},{default:A(()=>[(L(!0),V(Y,null,oe(f.options,I=>(L(),$(ft,{key:I.value,name:I.value,disable:I.disable,class:"no-padding"},{default:A(()=>[X(Xe,{separator:""},{default:A(()=>[(L(!0),V(Y,null,oe(i[I.value],x=>(L(),$(ot,{key:x.stop,label:x[e.lang],icon:"keyboard_double_arrow_down",group:"inbound","expand-icon":"zoom_out_map","expanded-icon":"zoom_in_map",onShow:()=>o(x.stop,I.value)},{default:A(()=>[X(je,null,{default:A(()=>[X(Me,{class:"text-center"},{default:A(()=>[N(a)?(L(),$(tt,{key:0,color:"secondary",size:"3em"})):x.etaList&&x.etaList.length?(L(),V("div",ht,[(L(!0),V(Y,null,oe(x.etaList,T=>(L(),$(ce,{square:"",key:T,label:T,color:"secondary","text-color":"white"},null,8,["label"]))),128))])):(L(),$(ce,{key:2,square:"",icon:"warning",color:"transparent","text-color":"secondary",label:"No bus ETA available."}))]),_:2},1024)]),_:2},1024)]),_:2},1032,["label","onShow"]))),128))]),_:2},1024)]),_:2},1032,["name","disable"]))),128))]),_:1},8,["modelValue"])),N(t)?se("",!0):(L(),V(Y,{key:2},[C.value?(L(),$(mt,{key:0,position:"bottom-right",offset:[18,88]},{default:A(()=>[X(De,{fab:"",dense:"",icon:"refresh",color:"secondary",label:N(S),loading:N(a),onClick:o},null,8,["label","loading"])]),_:1})):se("",!0)],64))]),_:1}))}};export{Tt as default};