(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[78],{1048:function(e,n,t){"use strict";var r=t(0),a=t(2),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]},name:"close",theme:"outlined"},c=t(42),o=function(e,n){return a.createElement(c.a,Object(r.a)(Object(r.a)({},e),{},{ref:n,icon:i}))};o.displayName="CloseOutlined";n.a=a.forwardRef(o)},1139:function(e,n,t){"use strict";var r=t(369),a={status:["active","invited","empty-permissions"],roles:Object.keys(r.a.values),fonction:["Journaliste","Citoyen","Chercheur"],region:["tunis","ariana","gafsa","kasserine","beja","sousse","monastir"],pays:["tunisie","algeria","maroc","mauritanie","turquie"]};n.a=a},1190:function(e,n,t){"use strict";var r=t(5),a=function(e){return e.user.form},i=Object(r.a)([a],(function(e){return e.user})),c={selectInitLoading:Object(r.a)([a],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:Object(r.a)([a],(function(e){return Boolean(e.saveLoading)})),selectUser:i,selectRaw:a};n.a=c},1787:function(e,n,t){"use strict";t.r(n);var r=t(22),a=t(2),i=t(38),c=t(36),o=t(3),l=t(7),s=t(129),u=t(1190),d=t(880),m=t(881),f=t(929),p=t(0),b=t(967),v=t(969),j=t(1048),O=t(950),h=t(951),g=t(1733),x=t(245),y=t(243),E=t(873),N=t(904),C=t(1139),S=t(939),w=t(895),q=t(43),k=t(901),M=t(875),P=t(14),R=q.e().shape({roles:N.a.stringArray(Object(o.d)("user.fields.roles"))}),B=function(e){var n=Object(i.d)(),t=Object(i.e)(u.a.selectSaveLoading),c=Object(a.useState)((function(){return e.user||{}})),l=Object(r.a)(c,1)[0],d=Object(E.c)({resolver:Object(k.yupResolver)(R),mode:"all",defaultValues:l}),m=function(t){var r=Object(p.a)({id:e.user.id},t);delete r.email,n(s.a.doUpdate(r))};return Object(P.jsx)(w.a,{children:Object(P.jsx)(E.a,Object(p.a)(Object(p.a)({},d),{},{children:Object(P.jsxs)("form",{onSubmit:d.handleSubmit(m),children:[Object(P.jsxs)(O.a,{gutter:24,children:[Object(P.jsx)(h.a,{span:16,children:Object(P.jsx)(M.a,{children:Object(o.d)("user.edit.title")})}),Object(P.jsx)(h.a,{span:8,style:{textAlign:"end",paddingLeft:"100px",paddingRight:"0px"},children:Object(P.jsxs)(g.a.Item,Object(p.a)(Object(p.a)({className:"form-buttons"},w.c),{},{children:[Object(P.jsx)(x.a,{title:Object(o.d)("common.save"),children:Object(P.jsx)(y.a,{loading:t,type:"primary",onClick:d.handleSubmit(m),icon:Object(P.jsx)(b.a,{})})}),Object(P.jsx)(x.a,{title:Object(o.d)("common.reset"),children:Object(P.jsx)(y.a,{disabled:t,onClick:function(){Object.keys(l).forEach((function(e){d.setValue(e,l[e])}))},icon:Object(P.jsx)(v.a,{})})}),e.onCancel&&Object(P.jsx)(x.a,{title:Object(o.d)("common.cancel"),children:Object(P.jsx)(y.a,{disabled:t,onClick:function(){return e.onCancel()},icon:Object(P.jsx)(j.a,{})})})]}))})]}),Object(P.jsx)(O.a,{gutter:24,children:Object(P.jsx)(h.a,{span:24,children:Object(P.jsxs)("fieldset",{children:[Object(P.jsxs)("legend",{children:["\xa0 \xa0",Object(o.d)("common.informations")]}),Object(P.jsx)(g.a.Item,Object(p.a)(Object(p.a)({},w.b),{},{label:Object(o.d)("user.fields.email"),children:Object(P.jsx)("strong",{children:e.user.email})})),Object(P.jsx)(S.a,{name:"roles",label:Object(o.d)("user.fields.roles"),options:C.a.roles.map((function(e){return{value:e,label:Object(o.d)("roles.".concat(e,".label"))}})),mode:"multiple",layout:w.b})]})})})]})}))})};n.default=function(e){var n=Object(i.d)(),t=Object(a.useState)(!1),p=Object(r.a)(t,2),b=p[0],v=p[1],j=Object(i.e)(u.a.selectInitLoading),O=Object(i.e)(u.a.selectSaveLoading),h=Object(i.e)(u.a.selectUser),g=Object(c.h)();return Object(a.useEffect)((function(){n(s.a.doInit(g.params.id)),v(!0)}),[n,g.params.id]),Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(m.a,{header:!0,items:[[Object(o.d)("dashboard.menu"),"/"],[Object(o.d)("user.menu"),"/user"],[Object(o.d)("user.edit.title")]]}),Object(P.jsxs)(d.a,{children:[j&&Object(P.jsx)(f.a,{}),b&&!j&&Object(P.jsx)(B,{user:h,saveLoading:O,onCancel:function(){return Object(l.b)().push("/user")}})]})]})}},875:function(e,n,t){"use strict";var r,a=t(217),i=t(218).a.h1(r||(r=Object(a.a)(["\n  margin-bottom: 36px;\n"])));n.a=i},876:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(11),a=t(12),i=function(){function e(){Object(r.a)(this,e)}return Object(a.a)(e,null,[{key:"errorMessage",value:function(e,n,t,r){var a,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(i)return i;if(!r&&!t[e])return null;var c=n[e];return(null===c||void 0===c||null===(a=c[0])||void 0===a?void 0:a.message)||(null===c||void 0===c?void 0:c.message)||c||null}}]),e}()},880:function(e,n,t){"use strict";var r,a=t(217),i=t(218).a.div(r||(r=Object(a.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"])));n.a=i},881:function(e,n,t){"use strict";var r=t(952),a=(t(2),t(114)),i=t(14);n.a=function(e){var n=function(e){return e.length>1};return Object(i.jsx)(r.a,{children:e.items.map((function(e){return Object(i.jsx)(r.a.Item,{children:n(e)?Object(i.jsx)(a.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},883:function(e,n,t){var r=t(882),a=t(884),i=t(885),c=Math.max,o=Math.min;e.exports=function(e,n,t){var l,s,u,d,m,f,p=0,b=!1,v=!1,j=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function O(n){var t=l,r=s;return l=s=void 0,p=n,d=e.apply(r,t)}function h(e){return p=e,m=setTimeout(x,n),b?O(e):d}function g(e){var t=e-f;return void 0===f||t>=n||t<0||v&&e-p>=u}function x(){var e=a();if(g(e))return y(e);m=setTimeout(x,function(e){var t=n-(e-f);return v?o(t,u-(e-p)):t}(e))}function y(e){return m=void 0,j&&l?O(e):(l=s=void 0,d)}function E(){var e=a(),t=g(e);if(l=arguments,s=this,f=e,t){if(void 0===m)return h(f);if(v)return clearTimeout(m),m=setTimeout(x,n),O(f)}return void 0===m&&(m=setTimeout(x,n)),d}return n=i(n)||0,r(t)&&(b=!!t.leading,u=(v="maxWait"in t)?c(i(t.maxWait)||0,n):u,j="trailing"in t?!!t.trailing:j),E.cancel=function(){void 0!==m&&clearTimeout(m),p=0,l=f=s=m=void 0},E.flush=function(){return void 0===m?d:y(a())},E}},884:function(e,n,t){var r=t(925);e.exports=function(){return r.Date.now()}},885:function(e,n,t){var r=t(886),a=t(882),i=t(888),c=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return NaN;if(a(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=a(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var t=o.test(e);return t||l.test(e)?s(e.slice(2),t?2:8):c.test(e)?NaN:+e}},886:function(e,n,t){var r=t(887),a=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(a,""):e}},887:function(e,n){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},888:function(e,n,t){var r=t(927),a=t(928);e.exports=function(e){return"symbol"==typeof e||a(e)&&"[object Symbol]"==r(e)}},894:function(e,n,t){"use strict";var r=t(15),a=t.n(r),i=t(20),c=t.n(i),o=t(79),l=t.n(o),s=t(107),u=t.n(s),d=t(108),m=t.n(d),f=t(109),p=t.n(f),b=t(2),v=t(17),j=t.n(v),O=t(160),h=t(883),g=t.n(h),x=t(161),y=t(151),E=t(39),N=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},C=(Object(y.a)("small","default","large"),null);var S=function(e){m()(t,e);var n=p()(t);function t(e){var r;l()(this,t),(r=n.call(this,e)).debouncifyUpdateSpinning=function(e){var n=(e||r.props).delay;n&&(r.cancelExistingSpin(),r.updateSpinning=g()(r.originalUpdateSpinning,n))},r.updateSpinning=function(){var e=r.props.spinning;r.state.spinning!==e&&r.setState({spinning:e})},r.renderSpin=function(e){var n,t=e.getPrefixCls,i=e.direction,o=r.props,l=o.prefixCls,s=o.className,u=o.size,d=o.tip,m=o.wrapperClassName,f=o.style,p=N(o,["prefixCls","className","size","tip","wrapperClassName","style"]),v=r.state.spinning,h=t("spin",l),g=j()(h,(n={},c()(n,"".concat(h,"-sm"),"small"===u),c()(n,"".concat(h,"-lg"),"large"===u),c()(n,"".concat(h,"-spinning"),v),c()(n,"".concat(h,"-show-text"),!!d),c()(n,"".concat(h,"-rtl"),"rtl"===i),n),s),x=Object(O.default)(p,["spinning","delay","indicator"]),y=b.createElement("div",a()({},x,{style:f,className:g}),function(e,n){var t=n.indicator,r="".concat(e,"-dot");return null===t?null:Object(E.b)(t)?Object(E.a)(t,{className:j()(t.props.className,r)}):Object(E.b)(C)?Object(E.a)(C,{className:j()(C.props.className,r)}):b.createElement("span",{className:j()(r,"".concat(e,"-dot-spin"))},b.createElement("i",{className:"".concat(e,"-dot-item")}),b.createElement("i",{className:"".concat(e,"-dot-item")}),b.createElement("i",{className:"".concat(e,"-dot-item")}),b.createElement("i",{className:"".concat(e,"-dot-item")}))}(h,r.props),d?b.createElement("div",{className:"".concat(h,"-text")},d):null);if(r.isNestedPattern()){var S=j()("".concat(h,"-container"),c()({},"".concat(h,"-blur"),v));return b.createElement("div",a()({},x,{className:j()("".concat(h,"-nested-loading"),m)}),v&&b.createElement("div",{key:"loading"},y),b.createElement("div",{className:S,key:"container"},r.props.children))}return y};var i=e.spinning,o=function(e,n){return!!e&&!!n&&!isNaN(Number(n))}(i,e.delay);return r.state={spinning:i&&!o},r.originalUpdateSpinning=r.updateSpinning,r.debouncifyUpdateSpinning(e),r}return u()(t,[{key:"componentDidMount",value:function(){this.updateSpinning()}},{key:"componentDidUpdate",value:function(){this.debouncifyUpdateSpinning(),this.updateSpinning()}},{key:"componentWillUnmount",value:function(){this.cancelExistingSpin()}},{key:"cancelExistingSpin",value:function(){var e=this.updateSpinning;e&&e.cancel&&e.cancel()}},{key:"isNestedPattern",value:function(){return!(!this.props||"undefined"===typeof this.props.children)}},{key:"render",value:function(){return b.createElement(x.a,null,this.renderSpin)}}],[{key:"setDefaultIndicator",value:function(e){C=e}}]),t}(b.Component);S.defaultProps={spinning:!0,size:"default",wrapperClassName:""},n.a=S},895:function(e,n,t){"use strict";t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return o}));var r,a=t(217),i=t(218).a.div(r||(r=Object(a.a)(["\n  // padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-form-item-with-help {\n    margin-bottom: 24px;\n  }\n\n  .form-buttons {\n    .ant-btn {\n      margin-top: 8px;\n      margin-right: 8px;\n    }\n  }\n"]))),c={labelCol:{xs:{span:24},sm:{span:24},md:{span:6},lg:{span:4}},wrapperCol:{xs:{span:24},sm:{span:24},md:{span:18},lg:{span:12}}},o={wrapperCol:{md:{span:18,offset:6},lg:{span:12,offset:4}}};n.a=i},904:function(e,n,t){"use strict";var r=t(19),a=t(43),i=t(3),c=t(53),o=t.n(c),l={generic:function(e){return a.c().label(e)},string:function(e,n){n=n||{};var t=a.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},boolean:function(e,n){return a.b().default(!1).label(e)},relationToOne:function(e,n){n=n||{};var t=a.c().nullable(!0).label(e).transform((function(e,n){return n?n.id:null}));return n.required&&(t=t.required()),t},stringArray:function(e,n){n=n||{};var t=a.a().compact().ensure().of(a.h().transform((function(e,n){return""===n?null:e})).trim()).label(e);return n.required&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},relationToMany:function(e,n){n=n||{};var t=a.a().nullable(!0).label(e).transform((function(e,n){return n&&n.length?n.map((function(e){return e.id})):[]}));return n.required&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},integer:function(e,n){n=n||{};var t=a.d().transform((function(e,n){return""===n?null:e})).integer().nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},images:function(e,n){n=n||{};var t=a.a().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},files:function(e,n){n=n||{};var t=a.a().compact().ensure().nullable(!0).label(e);return(n.required||n.min)&&(t=t.required()),n.min||0===n.min?t=t.min(n.min):n.required&&(t=t.min(1)),n.max&&(t=t.max(n.max)),t},enumerator:function(e,n){n=n||{};var t=a.h().transform((function(e,n){return""===n?null:e})).label(e).nullable(!0).oneOf([null].concat(Object(r.a)(n.options||[])));return n.required&&(t=t.required(Object(i.d)("validation.string.selected"))),t},email:function(e,n){n=n||{};var t=a.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e).email();return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),n.matches&&(t=t.matches(n.matches)),t},decimal:function(e,n){n=n||{};var t=a.d().transform((function(e,n){return""===n?null:e})).nullable(!0).label(e);return n.required&&(t=t.required()),(n.min||0===n.min)&&(t=t.min(n.min)),n.max&&(t=t.max(n.max)),t},datetime:function(e,n){n=n||{};var t=a.c().nullable(!0).label(e).transform((function(e,n){return e?o()(n,"YYYY-MM-DD HH:mm").toISOString():null}));return n.required&&(t=t.required()),t},date:function(e,n){n=n||{};var t=a.c().nullable(!0).label(e).test("is-date",Object(i.d)("validation.mixed.default"),(function(e){return!e||o()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?o()(e).format("YYYY-MM-DD"):null}));return n.required&&(t=t.required()),t}};n.a=l},929:function(e,n,t){"use strict";var r=t(894),a=(t(2),t(14));n.a=function(e){return Object(a.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(a.jsx)(r.a,{})})}},939:function(e,n,t){"use strict";var r=t(0),a=t(1733),i=t(903),c=t(2),o=t(876),l=t(873),s=t(14),u=function(e){var n=e.label,t=e.name,u=e.hint,d=e.layout,m=e.size,f=e.placeholder,p=e.options,b=e.mode,v=e.autoFocus,j=e.required,O=e.externalErrorMessage,h=e.optionFilterProp,g=Object(l.d)(),x=g.register,y=g.errors,E=g.formState,N=E.touched,C=E.isSubmitted,S=g.setValue,w=g.watch,q=o.a.errorMessage(t,y,N,C,O),k=w(t);return Object(c.useEffect)((function(){x({name:t})}),[x,t]),Object(s.jsx)(a.a.Item,Object(r.a)(Object(r.a)({},d),{},{label:n,validateStatus:q?"error":"success",required:j,help:q||u,children:Object(s.jsx)(i.a,{id:t,onChange:function(n){S(t,n,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n)},onBlur:function(n){e.onBlur&&e.onBlur(n)},value:k,size:m||void 0,placeholder:f||void 0,autoFocus:v||!1,mode:b||void 0,optionFilterProp:h||"children",allowClear:!0,style:{width:"100%"},children:p.map((function(e){return Object(s.jsx)(i.a.Option,{value:e.value,title:e.title,children:e.label},e.value)}))})}))};u.defaultProps={layout:null,required:!1},n.a=u},950:function(e,n,t){"use strict";var r=t(1221);n.a=r.a},951:function(e,n,t){"use strict";var r=t(1184);n.a=r.a},952:function(e,n,t){"use strict";var r=t(15),a=t.n(r),i=t(20),c=t.n(i),o=t(339),l=t.n(o),s=t(2),u=t(17),d=t.n(u),m=t(83),f=t(892),p=t.n(f),b=t(348),v=t(161),j=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},O=function(e){var n,t,r=e.prefixCls,i=e.separator,c=void 0===i?"/":i,o=e.children,l=e.overlay,u=e.dropdownProps,d=j(e,["prefixCls","separator","children","overlay","dropdownProps"]),m=(0,s.useContext(v.b).getPrefixCls)("breadcrumb",r);return n="href"in d?s.createElement("a",a()({className:"".concat(m,"-link")},d),o):s.createElement("span",a()({className:"".concat(m,"-link")},d),o),t=n,n=l?s.createElement(b.a,a()({overlay:l,placement:"bottomCenter"},u),s.createElement("span",{className:"".concat(m,"-overlay-link")},t,s.createElement(p.a,null))):t,o?s.createElement("span",null,n,c&&""!==c&&s.createElement("span",{className:"".concat(m,"-separator")},c)):null};O.__ANT_BREADCRUMB_ITEM=!0;var h=O,g=function(e){var n=e.children,t=(0,s.useContext(v.b).getPrefixCls)("breadcrumb");return s.createElement("span",{className:"".concat(t,"-separator")},n||"/")};g.__ANT_BREADCRUMB_SEPARATOR=!0;var x=g,y=t(849),E=t(82),N=t(39),C=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t};function S(e,n,t,r){var a=t.indexOf(e)===t.length-1,i=function(e,n){if(!e.breadcrumbName)return null;var t=Object.keys(n).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(t,")"),"g"),(function(e,t){return n[t]||e}))}(e,n);return a?s.createElement("span",null,i):s.createElement("a",{href:"#/".concat(r.join("/"))},i)}var w=function(e,n){return e=(e||"").replace(/^\//,""),Object.keys(n).forEach((function(t){e=e.replace(":".concat(t),n[t])})),e},q=function(e){var n,t=e.prefixCls,r=e.separator,i=void 0===r?"/":r,o=e.style,u=e.className,f=e.routes,p=e.children,b=e.itemRender,j=void 0===b?S:b,O=e.params,g=void 0===O?{}:O,x=C(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),q=s.useContext(v.b),k=q.getPrefixCls,M=q.direction,P=k("breadcrumb",t);if(f&&f.length>0){var R=[];n=f.map((function(e){var n,t=w(e.path,g);return t&&R.push(t),e.children&&e.children.length&&(n=s.createElement(y.a,null,e.children.map((function(e){return s.createElement(y.a.Item,{key:e.path||e.breadcrumbName},j(e,g,f,function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2?arguments[2]:void 0,r=l()(e),a=w(n,t);return a&&r.push(a),r}(R,e.path,g)))})))),s.createElement(h,{overlay:n,separator:i,key:t||e.breadcrumbName},j(e,g,f,R))}))}else p&&(n=Object(m.a)(p).map((function(e,n){return e?(Object(E.a)(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Object(N.a)(e,{separator:i,key:n})):e})));var B=d()(P,c()({},"".concat(P,"-rtl"),"rtl"===M),u);return s.createElement("div",a()({className:B,style:o},x),n)};q.Item=h,q.Separator=x;var k=q;n.a=k},967:function(e,n,t){"use strict";var r=t(0),a=t(2),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"}}]},name:"save",theme:"outlined"},c=t(42),o=function(e,n){return a.createElement(c.a,Object(r.a)(Object(r.a)({},e),{},{ref:n,icon:i}))};o.displayName="SaveOutlined";n.a=a.forwardRef(o)},969:function(e,n,t){"use strict";var r=t(0),a=t(2),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.4 124C290.5 124.3 112 303 112 523.9c0 128 60.2 242 153.8 315.2l-37.5 48c-4.1 5.3-.3 13 6.3 12.9l167-.8c5.2 0 9-4.9 7.7-9.9L369.8 727a8 8 0 00-14.1-3L315 776.1c-10.2-8-20-16.7-29.3-26a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-7.5 7.5-15.3 14.5-23.4 21.2a7.93 7.93 0 00-1.2 11.1l39.4 50.5c2.8 3.5 7.9 4.1 11.4 1.3C854.5 760.8 912 649.1 912 523.9c0-221.1-179.4-400.2-400.6-399.9z"}}]},name:"undo",theme:"outlined"},c=t(42),o=function(e,n){return a.createElement(c.a,Object(r.a)(Object(r.a)({},e),{},{ref:n,icon:i}))};o.displayName="UndoOutlined";n.a=a.forwardRef(o)}}]);