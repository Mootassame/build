(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[114],{1018:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var c,a=n(217),o=n(218).a.div(c||(c=Object(a.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]))),i={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=o},1212:function(e,t,n){"use strict";var c=n(5),a={selectLoading:Object(c.a)([function(e){return e.apropos.destroy}],(function(e){return Boolean(e.loading)}))};t.a=a},1774:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(38),o=n(36),i=n(3),s=n(301),r=n(5),b=function(e){return e.apropos.view},j=Object(r.a)([b],(function(e){return e.record})),d={selectLoading:Object(r.a)([b],(function(e){return Boolean(e.loading)})),selectRecord:j,selectRaw:b},l=n(0),O=n(929),p=n(1018),u=n(1733),m=n(14),f=function(e){var t=e.record;return e.loading||!t?Object(m.jsx)(O.a,{}):Object(m.jsxs)(p.a,{children:[Boolean(t.about)&&Object(m.jsx)(u.a.Item,Object(l.a)(Object(l.a)({},p.b),{},{label:Object(i.d)("entities.apropos.fields.about"),children:t.about})),Boolean(t.objectifs)&&Object(m.jsx)(u.a.Item,Object(l.a)(Object(l.a)({},p.b),{},{label:Object(i.d)("entities.apropos.fields.objectifs"),children:t.objectifs})),Boolean(t.services)&&Object(m.jsx)(u.a.Item,Object(l.a)(Object(l.a)({},p.b),{},{label:Object(i.d)("entities.apropos.fields.services"),children:t.services})),Boolean(t.contacts)&&Object(m.jsx)(u.a.Item,Object(l.a)(Object(l.a)({},p.b),{},{label:Object(i.d)("entities.apropos.fields.contacts"),children:t.contacts})),Boolean(t.tutorial)&&Object(m.jsx)(u.a.Item,Object(l.a)(Object(l.a)({},p.b),{},{label:Object(i.d)("entities.apropos.fields.tutorial"),children:t.tutorial})),Boolean(t.publicationDesc)&&Object(m.jsx)(u.a.Item,Object(l.a)(Object(l.a)({},p.b),{},{label:Object(i.d)("entities.apropos.fields.publicationDesc"),children:t.publicationDesc})),Boolean(t.appelDesc)&&Object(m.jsx)(u.a.Item,Object(l.a)(Object(l.a)({},p.b),{},{label:Object(i.d)("entities.apropos.fields.appelDesc"),children:t.appelDesc})),Boolean(t.forumDesc)&&Object(m.jsx)(u.a.Item,Object(l.a)(Object(l.a)({},p.b),{},{label:Object(i.d)("entities.apropos.fields.forumDesc"),children:t.forumDesc})),Boolean(t.mouvementDesc)&&Object(m.jsx)(u.a.Item,Object(l.a)(Object(l.a)({},p.b),{},{label:Object(i.d)("entities.apropos.fields.mouvementDesc"),children:t.mouvementDesc})),Boolean(t.mediatequeDesc)&&Object(m.jsx)(u.a.Item,Object(l.a)(Object(l.a)({},p.b),{},{label:Object(i.d)("entities.apropos.fields.mediatequeDesc"),children:t.mediatequeDesc}))]})},x=n(1800),h=n(1073),g=n(866),v=n(243),D=n(953),y=n(245),I=n(114),B=n(125),w=n(372),C=n(211),T=n(1212),L=n(893),R=function(e){var t=Object(a.d)(),n=Object(o.h)(),c=Object(a.e)(B.a.selectPermissionToRead),s=Object(a.e)(w.a.selectPermissionToEdit),r=Object(a.e)(w.a.selectPermissionToDestroy),b=Object(a.e)(T.a.selectLoading),j=n.params.id;return Object(m.jsxs)(L.a,{children:[s&&Object(m.jsx)(I.a,{to:"/apropos/".concat(j,"/edit"),children:Object(m.jsx)(v.a,{type:"primary",icon:Object(m.jsx)(x.a,{}),children:Object(i.d)("common.edit")})}),r&&Object(m.jsx)(D.a,{title:Object(i.d)("common.areYouSure"),onConfirm:function(){t(C.a.doDestroy(j))},okText:Object(i.d)("common.yes"),cancelText:Object(i.d)("common.no"),children:Object(m.jsx)(v.a,{type:"primary",icon:Object(m.jsx)(h.a,{}),disabled:b,children:Object(i.d)("common.destroy")})}),c&&Object(m.jsx)(I.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(j)),children:Object(m.jsx)(y.a,{title:Object(i.d)("auditLog.menu"),children:Object(m.jsx)(v.a,{icon:Object(m.jsx)(g.a,{})})})})]})},k=n(880),q=n(881),P=n(875);t.default=function(e){var t=Object(a.d)(),n=Object(o.h)(),r=Object(a.e)(d.selectLoading),b=Object(a.e)(d.selectRecord);return Object(c.useEffect)((function(){t(s.a.doFind(n.params.id))}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(q.a,{items:[[Object(i.d)("dashboard.menu"),"/"],[Object(i.d)("entities.apropos.view.title")]]}),Object(m.jsxs)(k.a,{children:[Object(m.jsx)(P.a,{children:Object(i.d)("entities.apropos.view.title")}),Object(m.jsx)(R,{match:n}),Object(m.jsx)(f,{loading:r,record:b})]})]})}},875:function(e,t,n){"use strict";var c,a=n(217),o=n(218).a.h1(c||(c=Object(a.a)(["\n  margin-bottom: 36px;\n"])));t.a=o},880:function(e,t,n){"use strict";var c,a=n(217),o=n(218).a.div(c||(c=Object(a.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"])));t.a=o},881:function(e,t,n){"use strict";var c=n(952),a=(n(2),n(114)),o=n(14);t.a=function(e){var t=function(e){return e.length>1};return Object(o.jsx)(c.a,{children:e.items.map((function(e){return Object(o.jsx)(c.a.Item,{children:t(e)?Object(o.jsx)(a.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},893:function(e,t,n){"use strict";var c,a=n(217),o=n(218).a.div(c||(c=Object(a.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"])));t.a=o},929:function(e,t,n){"use strict";var c=n(894),a=(n(2),n(14));t.a=function(e){return Object(a.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(a.jsx)(c.a,{})})}}}]);