(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[103],{1018:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var a,r=n(217),c=n(218).a.div(a||(a=Object(r.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]))),i={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=c},1076:function(e,t,n){"use strict";var a=n(5),r=n(31),c=n(47),i=n(116),s=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.artisteRead)})),o=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.artisteEdit)})),l=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.artisteCreate)})),d=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.artisteImport)})),j={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:l,selectPermissionToDestroy:Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.artisteDestroy)})),selectPermissionToImport:d};t.a=j},1092:function(e,t,n){"use strict";var a=n(5),r=n(31),c=n(47),i=n(116),s=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.domaineRead)})),o=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.domaineEdit)})),l=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.domaineCreate)})),d=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.domaineImport)})),j={selectPermissionToRead:s,selectPermissionToEdit:o,selectPermissionToCreate:l,selectPermissionToDestroy:Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new c.a(e,t).match(i.a.values.domaineDestroy)})),selectPermissionToImport:d};t.a=j},1205:function(e,t,n){"use strict";var a=n(5),r={selectLoading:Object(a.a)([function(e){return e.domaine.destroy}],(function(e){return Boolean(e.loading)}))};t.a=r},1251:function(e,t,n){"use strict";n(2);var a=n(114),r=n(38),c=n(1076),i=n(14);t.a=function(e){var t=Object(r.e)(c.a.selectPermissionToRead),n=function(){var t=e.value;return t?Array.isArray(t)?t:[t]:[]};return n().length?Object(i.jsx)(i.Fragment,{children:n().map((function(e){return n=e,t?Object(i.jsx)("div",{children:Object(i.jsx)(a.a,{to:"/artiste/".concat(n.id),children:n.nom})},n.id):Object(i.jsx)("div",{children:n.nom},n.id);var n}))}):null}},1768:function(e,t,n){"use strict";n.r(t);var a=n(950),r=n(951),c=n(2),i=n(38),s=n(36),o=n(3),l=n(292),d=n(5),j=function(e){return e.domaine.view},u=Object(d.a)([j],(function(e){return e.record})),b={selectLoading:Object(d.a)([j],(function(e){return Boolean(e.loading)})),selectRecord:u,selectRaw:j},m=n(0),O=n(929),f=n(1018),p=n(1733),x=n(1251),h=n(14),v=function(e){var t=e.record;return e.loading||!t?Object(h.jsx)(O.a,{}):Object(h.jsx)(f.a,{children:Object(h.jsxs)("fieldset",{children:[Object(h.jsx)("legend",{children:Object(o.d)("common.informations")}),Boolean(t.title)&&Object(h.jsx)(p.a.Item,Object(m.a)(Object(m.a)({},f.b),{},{label:Object(o.d)("entities.domaine.fields.title"),children:t.title})),Boolean(t.description)&&Object(h.jsx)(p.a.Item,Object(m.a)(Object(m.a)({},f.b),{},{label:Object(o.d)("entities.domaine.fields.description"),children:t.description})),Boolean(t.reprorts)&&Boolean(t.reprorts.length)&&Object(h.jsx)(p.a.Item,Object(m.a)(Object(m.a)({},f.b),{},{label:Object(o.d)("entities.domaine.fields.reprorts"),children:Object(h.jsx)(x.a,{value:t.reprorts})}))]})})},g=n(866),C=n(245),T=n(243),w=n(953),y=n(114),P=n(125),I=n(1092),U=n(206),R=n(1205),B=n(893),D=function(e){var t=Object(i.d)(),n=Object(s.h)(),a=Object(i.e)(P.a.selectPermissionToRead),r=Object(i.e)(I.a.selectPermissionToEdit),c=Object(i.e)(I.a.selectPermissionToDestroy),l=Object(i.e)(R.a.selectLoading),d=n.params.id;return Object(h.jsxs)(B.a,{children:[r&&Object(h.jsx)(y.a,{to:"/domaine/".concat(d,"/edit"),children:Object(h.jsx)(C.a,{title:Object(o.d)("common.edit"),children:Object(h.jsx)(T.a,{type:"primary",children:Object(h.jsx)("i",{className:"fa-regular fa-pen-to-square"})})})}),c&&Object(h.jsx)(w.a,{title:Object(o.d)("common.areYouSure"),onConfirm:function(){t(U.a.doDestroy(d))},okText:Object(o.d)("common.yes"),cancelText:Object(o.d)("common.no"),children:Object(h.jsx)(C.a,{title:Object(o.d)("common.destroy"),children:Object(h.jsx)(T.a,{type:"primary",disabled:l,children:Object(h.jsx)("i",{className:"fa-regular fa-trash-can"})})})}),a&&Object(h.jsx)(y.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(d)),children:Object(h.jsx)(C.a,{title:Object(o.d)("auditLog.menu"),children:Object(h.jsx)(T.a,{icon:Object(h.jsx)(g.a,{})})})})]})},E=n(880),L=n(881),k=n(875);t.default=function(e){var t=Object(i.d)(),n=Object(s.h)(),d=Object(i.e)(b.selectLoading),j=Object(i.e)(b.selectRecord);return Object(c.useEffect)((function(){t(l.a.doFind(n.params.id))}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(L.a,{items:[[Object(o.d)("dashboard.menu"),"/"],[Object(o.d)("entities.domaine.menu"),"/domaine"],[Object(o.d)("entities.domaine.view.title")]]}),Object(h.jsxs)(E.a,{children:[Object(h.jsxs)(a.a,{children:[Object(h.jsx)(r.a,{span:16,children:Object(h.jsx)(k.a,{children:Object(o.d)("entities.domaine.view.title")})}),Object(h.jsx)(r.a,{span:8,style:{textAlign:"end"},children:Object(h.jsx)(D,{match:n})})]}),Object(h.jsx)(v,{loading:d,record:j})]})]})}},875:function(e,t,n){"use strict";var a,r=n(217),c=n(218).a.h1(a||(a=Object(r.a)(["\n  margin-bottom: 36px;\n"])));t.a=c},880:function(e,t,n){"use strict";var a,r=n(217),c=n(218).a.div(a||(a=Object(r.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"])));t.a=c},881:function(e,t,n){"use strict";var a=n(952),r=(n(2),n(114)),c=n(14);t.a=function(e){var t=function(e){return e.length>1};return Object(c.jsx)(a.a,{children:e.items.map((function(e){return Object(c.jsx)(a.a.Item,{children:t(e)?Object(c.jsx)(r.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},893:function(e,t,n){"use strict";var a,r=n(217),c=n(218).a.div(a||(a=Object(r.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"])));t.a=c},929:function(e,t,n){"use strict";var a=n(894),r=(n(2),n(14));t.a=function(e){return Object(r.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(r.jsx)(a.a,{})})}}}]);