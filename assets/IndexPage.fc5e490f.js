import{j as n,ax as i,ay as u,c as m,h as d,s as p,I as c,J as f,K as l,G as g,f as r,S as h,U as _,F as b,Q as v,a8 as Q}from"./index.b7cf31e4.js";import{Q as k}from"./QCard.3fd4b064.js";import{Q as y}from"./QPage.eed97375.js";var C=n({name:"QCardActions",props:{...i,vertical:Boolean},setup(e,{slots:t}){const s=u(e),a=m(()=>`q-card__actions ${s.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>d("div",{class:a.value},p(t.default))}});const P={__name:"IndexPage",setup(e){const t=g(),s=[{label:"page.home.byRoute",icon:"fa-solid fa-route",to:{name:"bus.routeList",params:{lang:t.params.lang,method:"route",companyId:"kmb"}}},{label:"page.home.byStop",icon:"fa-solid fa-location-dot",to:null}];return(a,B)=>(c(),f(y,{padding:"",class:"row items-stretch"},{default:l(()=>[r(k,{flat:"",class:"col bg-transparent"},{default:l(()=>[r(C,{class:"full-height",vertical:a.$q.screen.lt.md},{default:l(()=>[(c(),h(b,null,_(s,o=>r(v,Q({stack:"",stretch:"",key:o.label},o,{label:a.$t(o.label),class:"col",color:"white","text-color":"primary",padding:"md",size:"2rem"}),null,16,["label"])),64))]),_:1},8,["vertical"])]),_:1})]),_:1}))}};export{P as default};