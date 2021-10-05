var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,n=(t,s,a)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,o=(e,t)=>{for(var s in t||(t={}))r.call(t,s)&&n(e,s,t[s]);if(a)for(var s of a(t))l.call(t,s)&&n(e,s,t[s]);return e},i=(e,a)=>t(e,s(a));import{r as c,a as d,o as p,i as u,b as y,c as v,d as m,u as _,t as g,e as b,n as f,f as x,p as h,g as w,h as k,j as A,F as T,k as O,l as S,m as j,q as E,s as M,v as z}from"./vendor.1c90335f.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const s of e)if("childList"===s.type)for(const e of s.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var I=(e,t)=>{for(const[s,a]of t)e[s]=a;return e};const N=["data-element"],P=[(e=>(h("data-v-ff9134a6"),e=e(),w(),e))((()=>m("div",{class:"sg-element__icon"},[m("div",{class:"sg-element__icon-spark"}),m("div",{class:"sg-element__icon-core"})],-1)))],B={key:0,class:"sg-element__title"};var D=I({props:{item:Object,className:String},setup(e){const t=c(null);let s=d({isMoving:!1});p((function(){u(t.value).draggable({inertia:!0,autoScroll:!0,listeners:{move:a,end:r}})}));const a=e=>{var t=e.target,a=(parseFloat(t.getAttribute("data-x"))||0)+e.dx,r=(parseFloat(t.getAttribute("data-y"))||0)+e.dy;t.style.transform="translate("+a+"px, "+r+"px)",t.setAttribute("data-x",a),t.setAttribute("data-y",r),s.isMoving=!0};function r(){t.value.style.transform="translate(0px, 0px)",t.value.setAttribute("data-x",0),t.value.setAttribute("data-y",0),s.isMoving=!1,s.isMoving=!1}return(a,r)=>(y(),v("div",{class:f(`${e.className} sg-element`),style:x({"--primary":e.item.colors.primary,"--secondary":e.item.colors.secondary})},[m("div",{ref:(e,s)=>{s.orb=e,t.value=e},"data-element":e.item.id,class:"sg-element__orb"},P,8,N),_(s).isMoving?b("",!0):(y(),v("div",B,g(e.item.label),1))],6))}},[["__scopeId","data-v-ff9134a6"]]);const F=["data-element"],C=[(e=>(h("data-v-4ee58c7f"),e=e(),w(),e))((()=>m("div",{class:"sg-source__icon"},[m("div",{class:"sg-source__icon-core"})],-1)))],L={key:0,class:"sg-source__title"};var q=I({props:{item:Object,className:String},setup(e){const t=c(null);let s=d({isMoving:!1});p((function(){u(t.value).draggable({inertia:!0,autoScroll:!0,listeners:{move:a,end:r}})}));const a=e=>{var t=e.target,a=(parseFloat(t.getAttribute("data-x"))||0)+e.dx,r=(parseFloat(t.getAttribute("data-y"))||0)+e.dy;t.style.transform="translate("+a+"px, "+r+"px)",t.setAttribute("data-x",a),t.setAttribute("data-y",r),s.isMoving=!0};function r(){t.value.style.transform="translate(0px, 0px)",t.value.setAttribute("data-x",0),t.value.setAttribute("data-y",0),s.isMoving=!1,s.isMoving=!1}return(a,r)=>(y(),v("div",{class:f(`${e.className} sg-source`),style:x({"--primary":e.item.colors.primary,"--secondary":e.item.colors.secondary})},[m("div",{ref:(e,s)=>{s.orb=e,t.value=e},"data-element":e.item.id,class:"sg-source__orb"},C,8,F),_(s).isMoving?b("",!0):(y(),v("div",L,g(e.item.label),1))],6))}},[["__scopeId","data-v-4ee58c7f"]]);const R=e=>(h("data-v-530794ca"),e=e(),w(),e),$={class:"spell-menu"},K={class:"spell-menu__bar"},G={key:0,class:"spell-menu__wrapper"},H=R((()=>m("div",{class:"spell-menu__title"},"Элементы",-1))),J={class:"spell-menu__container"},Q={key:1,class:"spell-menu__wrapper"},U=R((()=>m("div",{class:"spell-menu__title"},"Источники силы",-1))),V={class:"spell-menu__container"},W={key:2,class:"spell-menu__wrapper"},X=[R((()=>m("div",{class:"spell-menu__title"},"Базы",-1))),R((()=>m("div",{class:"spell-menu__container"},null,-1)))],Y={key:3,class:"spell-menu__wrapper"},Z=[R((()=>m("div",{class:"spell-menu__title"},"Формы",-1))),R((()=>m("div",{class:"spell-menu__container"},null,-1)))];var ee=I({setup(e){const t=k(),s=A((()=>t.state.elements)),a=A((()=>t.state.sources));let r=d({activeTab:0});return(e,t)=>(y(),v("div",$,[m("div",K,[m("div",{class:f(["spell-menu__bar-item",{active:0===_(r).activeTab}]),onClick:t[0]||(t[0]=e=>_(r).activeTab=0)}," Элементы ",2),m("div",{class:f(["spell-menu__bar-item",{active:1===_(r).activeTab}]),onClick:t[1]||(t[1]=e=>_(r).activeTab=1)}," Источники ",2),m("div",{class:f(["spell-menu__bar-item",{active:2===_(r).activeTab}]),onClick:t[2]||(t[2]=e=>_(r).activeTab=2)}," Базы ",2),m("div",{class:f(["spell-menu__bar-item",{active:3===_(r).activeTab}]),onClick:t[3]||(t[3]=e=>_(r).activeTab=3)}," Формы ",2)]),0===_(r).activeTab?(y(),v("div",G,[H,m("div",J,[(y(!0),v(T,null,O(_(s),(e=>(y(),S(D,{className:"spell-menu__item",item:e,key:e.id},null,8,["item"])))),128))])])):b("",!0),1===_(r).activeTab?(y(),v("div",Q,[U,m("div",V,[(y(!0),v(T,null,O(_(a),(e=>(y(),S(q,{className:"spell-menu__item",item:e,key:e.id},null,8,["item"])))),128))])])):b("",!0),2===_(r).activeTab?(y(),v("div",W,X)):b("",!0),3===_(r).activeTab?(y(),v("div",Y,Z)):b("",!0)]))}},[["__scopeId","data-v-530794ca"]]);const te=[j('<div class="sg-source__orbit" data-v-4bf5b4de></div><div class="sg-source__orbit" data-v-4bf5b4de></div><div class="sg-source__orbit" data-v-4bf5b4de></div><div class="sg-source__orbit" data-v-4bf5b4de></div><div class="sg-source__orbit" data-v-4bf5b4de></div><div class="sg-source__orbit" data-v-4bf5b4de></div><div class="sg-source__core" data-v-4bf5b4de></div>',7)];var se=I({props:{source:Object},setup:e=>(t,s)=>(y(),v("div",{class:"sg-source",style:x({"--primary":e.source.colors.primary,"--secondary":e.source.colors.secondary})},te,4))},[["__scopeId","data-v-4bf5b4de"]]);const ae=e=>(h("data-v-17b8b772"),e=e(),w(),e),re={class:"sg-base-rectangle"},le={class:"sg-shape"},ne={viewBox:"0 0 66 75",xmlns:"http://www.w3.org/2000/svg"},oe=ae((()=>m("line",{stroke:"#000",id:"bottom",y2:"56.19054",x2:"7.64329",y1:"56.19054",x1:"57.3046",fill:"transparent"},null,-1))),ie=ae((()=>m("line",{stroke:"#000",id:"left",y2:"7.10303",x2:"31.62739",y1:"52.45008",x1:"6.40888",fill:"transparent"},null,-1))),ce=ae((()=>m("line",{stroke:"#000",id:"right",y2:"6.96996",x2:"35.15579",y1:"52.79588",x1:"59.51894",fill:"transparent"},null,-1))),de=["fill"],pe=["fill"],ue=["fill"],ye=[ae((()=>m("line",{stroke:"#000",id:"left_synergy_1",y2:"5.60928",x2:"29.96236",y1:"16.51821",x1:"7.74418",fill:"transparent"},null,-1))),ae((()=>m("line",{stroke:"#000",id:"left_synergy_2",y2:"52.17487",x2:"4.41656",y1:"21.83808",x1:"4.41656",fill:"transparent"},null,-1))),ae((()=>m("ellipse",{id:"left_synergy_apex",ry:"3.41656",rx:"3.41656",cy:"18.08279",cx:"4.54796",stroke:"#000",fill:"transparent"},null,-1)))],ve=[ae((()=>m("line",{stroke:"#000",id:"right_synergy_1",y2:"5.48875",x2:"36.69186",y1:"16.88917",x1:"58.77375",fill:"transparent"},null,-1))),ae((()=>m("line",{stroke:"#000",id:"right_synergy_2",y2:"22.36126",x2:"61.97241",y1:"52.76498",x1:"61.97241",fill:"transparent"},null,-1))),ae((()=>m("ellipse",{id:"right_synergy_apex",ry:"3.41656",rx:"3.41656",cy:"18.477",cx:"61.70959",stroke:"#000",fill:"transparent"},null,-1)))],me=[ae((()=>m("line",{stroke:"#000",id:"bottom_synergy_1",y2:"58.26159",x2:"58.12161",y1:"69.68313",x1:"36.46006",fill:"transparent"},null,-1))),ae((()=>m("line",{stroke:"#000",id:"bottom_synergy_2",y2:"69.52565",x2:"30.35658",y1:"57.76771",x1:"7.25691",fill:"transparent"},null,-1))),ae((()=>m("ellipse",{id:"bottom_synergy_apex",ry:"3.41656",rx:"3.41656",cy:"71.03942",cx:"33.5887",stroke:"#000",fill:"transparent"},null,-1)))],_e={class:"sg-source__wrapper"},ge=ae((()=>m("svg",{viewBox:"0 0 100 100"},[m("path",{id:"curve-path",d:"M 0, 50 a 50,50 0 1,0 100,0 a 50,50 0 1,0 -100,0",fill:"transparent"}),m("text",null,[m("textPath",{"xlink:href":"#curve-path",startOffset:"0"}," onetwothreeonetwothreeonetwothreeonetwothreeonetwothreeonetwothreeonetwothreeonetwothreeonetwothreeonetwothreeonetwothreeonetwothreeonetwothreeonetwothreeonetwothreeonetwothreeonetwothreeonetwothree ")])],-1)));var be=I({setup(e){const t=k(),s=c(null),a=c(null),r=c(null),l=c(null),n=A((()=>t.state.base));function o(e){t.dispatch("dropElement",{apex:e.target.id,element:e.relatedTarget.dataset.element})}function i(e){t.dispatch("dropSource",{source:e.target.id,element:e.relatedTarget.dataset.element})}return p((()=>{u(s.value).dropzone({accept:".sg-element__orb",ondrop:o}),u(a.value).dropzone({accept:".sg-element__orb",ondrop:o}),u(r.value).dropzone({accept:".sg-element__orb",ondrop:o}),u(l.value).dropzone({accept:".sg-source__orb",ondrop:i}),t.dispatch("setActiveBase",{type:"triangle",apexes:[{id:"top_apex"},{id:"right_apex"},{id:"left_apex"}],synergies:[{id:"left_synergy_apex",parents:["top_apex","left_apex"]},{id:"right_synergy_apex",parents:["top_apex","right_apex"]},{id:"bottom_synergy_apex",parents:["left_apex","right_apex"]}],sources:[{id:"sourceDropzone"}]})})),(e,t)=>{var o,i,c,d,p,u,g,x,h,w,k,A,T,O,j,E,M,z,I;return y(),v("div",re,[m("div",le,[(y(),v("svg",ne,[oe,ie,ce,m("ellipse",{ref:(e,t)=>{t.topApex=e,s.value=e},id:"top_apex",ry:"3.41656",rx:"3.41656",cy:"4.41656",cx:"33.32589",stroke:"#000",fill:(null==(c=null==(i=null==(o=_(n).apexes)?void 0:o.top_apex)?void 0:i.element)?void 0:c.colors.primary)||"transparent"},null,8,de),m("ellipse",{ref:(e,t)=>{t.leftApex=e,r.value=e},id:"left_apex",ry:"3.41656",rx:"3.41656",cy:"55.53351",cx:"4.41656",stroke:"#000",fill:(null==(u=null==(p=null==(d=_(n).apexes)?void 0:d.left_apex)?void 0:p.element)?void 0:u.colors.primary)||"transparent"},null,8,pe),m("ellipse",{ref:(e,t)=>{t.rightApex=e,a.value=e},id:"right_apex",ry:"3.41656",rx:"3.41656",cy:"56.05913",cx:"60.92116",stroke:"#000",fill:(null==(h=null==(x=null==(g=_(n).apexes)?void 0:g.right_apex)?void 0:x.element)?void 0:h.colors.primary)||"transparent"},null,8,ue),m("g",{class:f(["synergy left",{appear:null==(k=null==(w=_(n).synergies)?void 0:w.left_synergy_apex)?void 0:k.element}])},ye,2),m("g",{class:f(["synergy right",{appear:null==(T=null==(A=_(n).synergies)?void 0:A.right_synergy_apex)?void 0:T.element}])},ve,2),m("g",{class:f(["synergy bottom",{appear:null==(j=null==(O=_(n).synergies)?void 0:O.bottom_synergy_apex)?void 0:j.element}])},me,2)]))]),m("div",_e,[m("div",{class:"sg-source__dropzone",id:"sourceDropzone",ref:(e,t)=>{t.sourceDropzone=e,l.value=e}},[(null==(M=null==(E=_(n).sources)?void 0:E.sourceDropzone)?void 0:M.element)?(y(),S(se,{key:0,source:null==(I=null==(z=_(n).sources)?void 0:z.sourceDropzone)?void 0:I.element},null,8,["source"])):b("",!0)],512),ge])])}}},[["__scopeId","data-v-17b8b772"]]);const fe={class:"spell-canvas"};var xe=I({setup:e=>(e,t)=>(y(),v("div",{class:"spell-canvas__wrapper",ref:(e,t)=>{t.root=e}},[m("div",fe,[E(be)])],512))},[["__scopeId","data-v-218238ae"]]);const he={class:"container-fluid sg-wrapper"},we={class:"row"},ke={class:"col-8"},Ae={class:"col-4"};var Te=I({setup:e=>(e,t)=>(y(),v("section",he,[m("div",we,[m("div",ke,[E(xe)]),m("div",Ae,[E(ee)])])]))},[["__scopeId","data-v-6ad16ed0"]]);const Oe={setup:e=>(e,t)=>(y(),S(Te))};var Se=M({state:{elements:[...[{id:"light",label:"Свет",colors:{primary:"#fff952",secondary:"#fffdbd"}},{id:"dark",label:"Тьма",colors:{primary:"#3c0078",secondary:"#290052"}},{id:"fire",label:"Огонь",colors:{primary:"#e34f00",secondary:"#e38400"}},{id:"water",label:"Вода",colors:{primary:"#006bbd",secondary:"#7ac5ff"}},{id:"air",label:"Ветер",colors:{primary:"#e0feff",secondary:"#edfeff"}},{id:"earth",label:"Земля",colors:{primary:"#914b00",secondary:"#784e22"}},{id:"electricity",label:"Молния",colors:{primary:"#ffd000",secondary:"#bdfdff"}}]],sources:[...[{id:"mana",label:"Мана",colors:{primary:"#0037c2",secondary:"#9ebaff"}},{id:"divine",label:"Божественная",colors:{primary:"#ffcb1f",secondary:"#ffedb3"}},{id:"demonic",label:"Демоническая",colors:{primary:"#780016",secondary:"#4a1d25"}},{id:"astral",label:"Астральная",colors:{primary:"#00c6d4",secondary:"#d885ff"}}]],bases:[{name:"Rectangle",type:"rectangle"},{name:"Rhombus",type:"rhombus"},{name:"Pentagon",type:"pentagon"}],base:{type:"",source:null,apexes:{},synergies:{},sources:{}}},mutations:{addElement(e,t){e.elements.push(t)},resetActiveBase(e){e.base={type:"",apexes:{},synergies:{},sources:{}}},setElementToApex(e,{apex:t,element:s}){let a=e.elements.find((e=>e.id===s));e.base.apexes[t].element=a},setElementToSynergy(e,{synergy:t,element:s}){e.base.synergies[t].element=s},setElementToSource(e,{source:t,element:s}){let a=e.sources.find((e=>e.id===s));e.base.sources[t].element=a}},getters:{getSynergy:e=>e=>!1},actions:{setActiveBase({commit:e,state:t},s){e("resetActiveBase"),t.base.type=s.type,t.base.apexes=s.apexes.reduce(((e,t)=>i(o({},e),{[t.id]:i(o({},t),{element:null})})),{}),t.base.synergies=s.synergies.reduce(((e,t)=>i(o({},e),{[t.id]:i(o({},t),{element:null})})),{}),t.base.sources=s.sources.reduce(((e,t)=>i(o({},e),{[t.id]:i(o({},t),{element:null})})),{})},dropElement({commit:e,dispatch:t},{apex:s,element:a}){e("setElementToApex",{apex:s,element:a}),t("digestSynergies")},dropSource({commit:e,dispatch:t},{source:s,element:a}){e("setElementToSource",{source:s,element:a})},digestSynergies({commit:e,state:t}){Object.keys(t.base.synergies).forEach((s=>{var a,r;let l=t.base.synergies[s].parents,n=[t.base.apexes[l[0]],t.base.apexes[l[1]]];(null==(a=n[0])?void 0:a.element)&&(null==(r=n[1])?void 0:r.element)&&e("setElementToSynergy",{synergy:s,element:"red"})}))}}});const je=z(Oe);je.use(Se),je.mount("#app");
