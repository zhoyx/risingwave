(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[939],{92560:function(n,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/materialized_views",function(){return i(57139)}])},30287:function(n,e,i){"use strict";i.d(e,{KB:function(){return Relations},Yr:function(){return T},vk:function(){return v},vP:function(){return w},sW:function(){return _}});var r=i(85893),t=i(47741),l=i(66479),c=i(39653),s=i(50471),a=i(40639),o=i(36696),d=i(63679),u=i(9008),h=i.n(u),m=i(41664),x=i.n(m),j=i(67294),p=i(44527);function extractColumnInfo(n){var e,i,r,t;return"columnDesc"in n?"".concat(null===(e=n.columnDesc)||void 0===e?void 0:e.name," (").concat(null===(r=n.columnDesc)||void 0===r?void 0:null===(i=r.columnType)||void 0===i?void 0:i.typeName,")"):"".concat(n.name," (").concat(null===(t=n.dataType)||void 0===t?void 0:t.typeName,")")}let f=(0,d.ZP)(()=>i.e(171).then(i.t.bind(i,55171,23))),v={name:"Depends",width:1,content:n=>(0,r.jsx)(x(),{href:"/streaming_graph/?id=".concat(n.id),children:(0,r.jsx)(t.zx,{size:"sm","aria-label":"view dependents",colorScheme:"blue",variant:"link",children:"D"})})},w={name:"Primary Key",width:1,content:n=>n.pk.map(n=>n.columnIndex).map(e=>n.columns[e]).map(n=>extractColumnInfo(n)).join(", ")},T={name:"Connector",width:3,content:n=>{var e;return null!==(e=n.properties.connector)&&void 0!==e?e:"unknown"}},_=[v,{name:"Fragments",width:1,content:n=>(0,r.jsx)(x(),{href:"/streaming_plan/?id=".concat(n.id),children:(0,r.jsx)(t.zx,{size:"sm","aria-label":"view fragments",colorScheme:"blue",variant:"link",children:"F"})})}];function Relations(n,e,i){let d=(0,l.pm)(),[u,m]=(0,j.useState)([]);(0,j.useEffect)(()=>((async function(){try{m(await e())}catch(n){d({title:"Error Occurred",description:n.toString(),status:"error",duration:5e3,isClosable:!0}),console.error(n)}})(),()=>{}),[d,e]);let{isOpen:x,onOpen:v,onClose:w}=(0,c.qY)(),[T,_]=(0,j.useState)(),openRelationCatalog=n=>{n&&(_(n),v())},z=(0,r.jsxs)(s.u_,{isOpen:x,onClose:w,size:"3xl",children:[(0,r.jsx)(s.ZA,{}),(0,r.jsxs)(s.hz,{children:[(0,r.jsxs)(s.xB,{children:["Catalog of ",null==T?void 0:T.id," - ",null==T?void 0:T.name]}),(0,r.jsx)(s.ol,{}),(0,r.jsx)(s.fe,{children:x&&T&&(0,r.jsx)(f,{src:T,collapsed:1,name:null,displayDataTypes:!1})}),(0,r.jsx)(s.mz,{children:(0,r.jsx)(t.zx,{colorScheme:"blue",mr:3,onClick:w,children:"Close"})})]})]}),C=(0,r.jsxs)(a.xu,{p:3,children:[(0,r.jsx)(p.Z,{children:n}),(0,r.jsx)(o.xJ,{children:(0,r.jsxs)(o.iA,{variant:"simple",size:"sm",maxWidth:"full",children:[(0,r.jsx)(o.hr,{children:(0,r.jsxs)(o.Tr,{children:[(0,r.jsx)(o.Th,{width:3,children:"Id"}),(0,r.jsx)(o.Th,{width:5,children:"Name"}),(0,r.jsx)(o.Th,{width:3,children:"Owner"}),i.map(n=>(0,r.jsx)(o.Th,{width:n.width,children:n.name},n.name)),(0,r.jsx)(o.Th,{children:"Visible Columns"})]})}),(0,r.jsx)(o.p3,{children:u.map(n=>(0,r.jsxs)(o.Tr,{children:[(0,r.jsx)(o.Td,{children:(0,r.jsx)(t.zx,{size:"sm","aria-label":"view catalog",colorScheme:"blue",variant:"link",onClick:()=>openRelationCatalog(n),children:n.id})}),(0,r.jsx)(o.Td,{children:n.name}),(0,r.jsx)(o.Td,{children:n.owner}),i.map(e=>(0,r.jsx)(o.Td,{children:e.content(n)},e.name)),(0,r.jsx)(o.Td,{overflowWrap:"normal",children:n.columns.filter(n=>!("isHidden"in n)||!n.isHidden).map(n=>extractColumnInfo(n)).join(", ")})]},n.id))})]})})]});return(0,r.jsxs)(j.Fragment,{children:[(0,r.jsx)(h(),{children:(0,r.jsx)("title",{children:n})}),z,C]})}},57139:function(n,e,i){"use strict";i.r(e),i.d(e,{default:function(){return MaterializedViews}});var r=i(30287),t=i(35413);function MaterializedViews(){return(0,r.KB)("Materialized Views",t.BA,[...r.sW,r.vP])}}},function(n){n.O(0,[662,184,476,155,383,413,774,888,179],function(){return n(n.s=92560)}),_N_E=n.O()}]);