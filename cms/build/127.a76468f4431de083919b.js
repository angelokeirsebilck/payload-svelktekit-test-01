"use strict";(self.webpackChunkpayload_template_ts_blog=self.webpackChunkpayload_template_ts_blog||[]).push([[127],{89127:(e,a,t)=>{t.r(a),t.d(a,{default:()=>I});var l=t(67294),s=t(16550),i=t(26793),n=t(9980),r=t(28630),o=t(75091),d=t(47489),c=t(40684),m=t(2143),v=t(49546),u=t(28584),p=t(26644),f=t(4983),E=t(46268),_=t(5590),b=t(55532),$=t(37276),Z=t(92305),g=t(50854),h=t(8742),N=t(28019),w=t(40829),S=t(45074),y=t(8792),P=t(11750),k=t(24531),L=t(34088),U=t(9684),R=t(69850),A=t(28960);t(88446);const C="global-edit",D=e=>{var a,t,s,r,o,d,c,m,D,F,T,I,x,M,O,G;const{admin:{dateFormat:H}}=(0,n.Z)(),{publishedDoc:K}=(0,S.x)(),{t:V,i18n:j}=(0,i.$)("general"),{global:q,data:z,onSave:B,permissions:J,action:Q,apiURL:W,initialState:X,isLoading:Y}=e,{fields:ee,preview:ae,versions:te,label:le,admin:{description:se,hideAPIURL:ie}={}}=q,ne=null===(a=null==J?void 0:J.update)||void 0===a?void 0:a.permission;return l.createElement("div",{className:C},Y&&l.createElement(w.Z,null),!Y&&l.createElement(U.R.Provider,{value:"update"},l.createElement(p.Z,{className:`${C}__form`,method:"post",action:Q,onSuccess:B,disabled:!ne,initialState:X},l.createElement("div",{className:`${C}__main`},l.createElement($.Z,{title:(0,A.i)(le,j),description:(0,A.i)(le,j),keywords:`${(0,A.i)(le,j)}, Payload, CMS`}),l.createElement(u.Z,null),!((null===(t=q.versions)||void 0===t?void 0:t.drafts)&&(null===(r=null===(s=q.versions)||void 0===s?void 0:s.drafts)||void 0===r?void 0:r.autosave))&&l.createElement(g.Z,null),l.createElement(R.T,{className:`${C}__edit`},l.createElement("header",{className:`${C}__header`},l.createElement("h1",null,V("editLabel",{label:(0,A.i)(le,j)})),se&&l.createElement("div",{className:`${C}__sub-header`},l.createElement(N.Z,{description:se}))),l.createElement(_.Z,{readOnly:!ne,permissions:J.fields,filter:e=>!e.admin.position||e.admin.position&&"sidebar"!==e.admin.position,fieldTypes:Z.Z,fieldSchema:ee}))),l.createElement("div",{className:`${C}__sidebar-wrap`},l.createElement("div",{className:`${C}__sidebar`},l.createElement("div",{className:`${C}__sidebar-sticky-wrap`},l.createElement("div",{className:`${C}__document-actions${(null===(o=q.versions)||void 0===o?void 0:o.drafts)&&!(null===(c=null===(d=q.versions)||void 0===d?void 0:d.drafts)||void 0===c?void 0:c.autosave)||ae?` ${C}__document-actions--has-2`:""}`},ae&&(!(null===(m=q.versions)||void 0===m?void 0:m.drafts)||(null===(F=null===(D=q.versions)||void 0===D?void 0:D.drafts)||void 0===F?void 0:F.autosave))&&l.createElement(f.Z,{generatePreviewURL:ae,data:z}),ne&&l.createElement(l.Fragment,null,(null===(T=q.versions)||void 0===T?void 0:T.drafts)&&l.createElement(l.Fragment,null,!q.versions.drafts.autosave&&l.createElement(y.Z,null),l.createElement(P.Z,null)),!(null===(I=q.versions)||void 0===I?void 0:I.drafts)&&l.createElement(E.Z,{buttonId:"action-save"},V("save")))),l.createElement("div",{className:`${C}__sidebar-fields`},ae&&(null===(x=q.versions)||void 0===x?void 0:x.drafts)&&!(null===(O=null===(M=q.versions)||void 0===M?void 0:M.drafts)||void 0===O?void 0:O.autosave)&&l.createElement(f.Z,{generatePreviewURL:ae,data:z}),(null===(G=q.versions)||void 0===G?void 0:G.drafts)&&l.createElement(l.Fragment,null,l.createElement(k.Z,null),q.versions.drafts.autosave&&ne&&l.createElement(L.Z,{publishedDocUpdatedAt:(null==K?void 0:K.updatedAt)||(null==z?void 0:z.createdAt),global:q})),l.createElement(_.Z,{readOnly:!ne,permissions:J.fields,filter:e=>"sidebar"===e.admin.position,fieldTypes:Z.Z,fieldSchema:ee})),l.createElement("ul",{className:`${C}__meta`},te&&l.createElement("li",null,l.createElement("div",{className:`${C}__label`},V("version:versions")),l.createElement(h.Z,{global:q})),z&&!ie&&l.createElement("li",{className:`${C}__api-url`},l.createElement("span",{className:`${C}__label`},"API URL"," ",l.createElement(b.Z,{value:W})),l.createElement("a",{href:W,target:"_blank",rel:"noopener noreferrer"},W)),z.updatedAt&&l.createElement("li",null,l.createElement("div",{className:`${C}__label`},V("lastModified")),l.createElement("div",null,(0,v.default)(new Date(z.updatedAt),H))))))))))};var F=t(19826),T=t(91455);const I=e=>{var a;const{state:t}=(0,s.TH)(),v=(0,c.bU)(),{setStepNav:u}=(0,o.FP)(),{user:p}=(0,r.a)(),[f,E]=(0,l.useState)(),{getVersions:_,preferencesKey:b,docPermissions:$,getDocPermissions:Z}=(0,S.x)(),{getPreference:g}=(0,T.G)(),{t:h}=(0,i.$)(),{serverURL:N,routes:{api:w}}=(0,n.Z)(),{global:y}=e,{slug:P,label:k,fields:L,admin:{components:{views:{Edit:U}={}}={}}={}}=y,R=(0,l.useCallback)((async e=>{_(),Z();const a=await(0,F.Z)({fieldSchema:L,data:e.result,operation:"update",user:p,locale:v,t:h});E(a)}),[_,L,p,v,h,Z]),[{data:A}]=(0,d.Z)(`${N}${w}/globals/${P}`,{initialParams:{"fallback-locale":"null",depth:0,draft:"true"}}),C=(null==t?void 0:t.data)||A;return(0,l.useEffect)((()=>{u([{label:k}])}),[u,k]),(0,l.useEffect)((()=>{(async()=>{const e=await(0,F.Z)({fieldSchema:L,data:C,user:p,operation:"update",locale:v,t:h});await g(b),E(e)})()}),[C,L,p,v,g,b,h]),l.createElement(m.Z,{DefaultComponent:D,CustomComponent:U,componentProps:{isLoading:!f||!$,data:C,permissions:$,initialState:f,global:y,onSave:R,apiURL:`${N}${w}/globals/${P}${(null===(a=y.versions)||void 0===a?void 0:a.drafts)?"?draft=true":""}`,action:`${N}${w}/globals/${P}?locale=${v}&depth=0&fallback-locale=null`}})}}}]);