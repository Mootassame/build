(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[81,5],{1024:function(e,t,n){"use strict";var a=n(15),r=n.n(a),i=n(79),o=n.n(i),l=n(107),u=n.n(l),c=n(108),s=n.n(c),d=n(109),f=n.n(d),p=n(20),m=n.n(p),v=n(2),b=n(17),h=n.n(b),g=n(160),x=n(342),y=n.n(x),j=n(151),O=n(39),w=Object(j.a)("text","input");function C(e){return!!(e.prefix||e.suffix||e.allowClear)}function z(e){return!(!e.addonBefore&&!e.addonAfter)}var S=function(e){s()(n,e);var t=f()(n);function n(){var e;return o()(this,n),(e=t.apply(this,arguments)).containerRef=v.createRef(),e.onInputMouseUp=function(t){var n;if(null===(n=e.containerRef.current)||void 0===n?void 0:n.contains(t.target)){var a=e.props.triggerFocus;null===a||void 0===a||a()}},e}return u()(n,[{key:"renderClearIcon",value:function(e){var t=this.props,n=t.allowClear,a=t.value,r=t.disabled,i=t.readOnly,o=t.handleReset;if(!n)return null;var l=!r&&!i&&a,u="".concat(e,"-clear-icon");return v.createElement(y.a,{onClick:o,className:h()(m()({},"".concat(u,"-hidden"),!l),u),role:"button"})}},{key:"renderSuffix",value:function(e){var t=this.props,n=t.suffix,a=t.allowClear;return n||a?v.createElement("span",{className:"".concat(e,"-suffix")},this.renderClearIcon(e),n):null}},{key:"renderLabeledIcon",value:function(e,t){var n,a=this.props,r=a.focused,i=a.value,o=a.prefix,l=a.className,u=a.size,c=a.suffix,s=a.disabled,d=a.allowClear,f=a.direction,p=a.style,b=a.readOnly,g=a.bordered,x=this.renderSuffix(e);if(!C(this.props))return Object(O.a)(t,{value:i});var y=o?v.createElement("span",{className:"".concat(e,"-prefix")},o):null,j=h()("".concat(e,"-affix-wrapper"),(n={},m()(n,"".concat(e,"-affix-wrapper-focused"),r),m()(n,"".concat(e,"-affix-wrapper-disabled"),s),m()(n,"".concat(e,"-affix-wrapper-sm"),"small"===u),m()(n,"".concat(e,"-affix-wrapper-lg"),"large"===u),m()(n,"".concat(e,"-affix-wrapper-input-with-clear-btn"),c&&d&&i),m()(n,"".concat(e,"-affix-wrapper-rtl"),"rtl"===f),m()(n,"".concat(e,"-affix-wrapper-readonly"),b),m()(n,"".concat(e,"-affix-wrapper-borderless"),!g),m()(n,"".concat(l),!z(this.props)&&l),n));return v.createElement("span",{ref:this.containerRef,className:j,style:p,onMouseUp:this.onInputMouseUp},y,Object(O.a)(t,{style:null,value:i,className:P(e,g,u,s)}),x)}},{key:"renderInputWithLabel",value:function(e,t){var n,a=this.props,r=a.addonBefore,i=a.addonAfter,o=a.style,l=a.size,u=a.className,c=a.direction;if(!z(this.props))return t;var s="".concat(e,"-group"),d="".concat(s,"-addon"),f=r?v.createElement("span",{className:d},r):null,p=i?v.createElement("span",{className:d},i):null,b=h()("".concat(e,"-wrapper"),s,m()({},"".concat(s,"-rtl"),"rtl"===c)),g=h()("".concat(e,"-group-wrapper"),(n={},m()(n,"".concat(e,"-group-wrapper-sm"),"small"===l),m()(n,"".concat(e,"-group-wrapper-lg"),"large"===l),m()(n,"".concat(e,"-group-wrapper-rtl"),"rtl"===c),n),u);return v.createElement("span",{className:g,style:o},v.createElement("span",{className:b},f,Object(O.a)(t,{style:null}),p))}},{key:"renderTextAreaWithClearIcon",value:function(e,t){var n,a=this.props,r=a.value,i=a.allowClear,o=a.className,l=a.style,u=a.direction,c=a.bordered;if(!i)return Object(O.a)(t,{value:r});var s=h()("".concat(e,"-affix-wrapper"),"".concat(e,"-affix-wrapper-textarea-with-clear-btn"),(n={},m()(n,"".concat(e,"-affix-wrapper-rtl"),"rtl"===u),m()(n,"".concat(e,"-affix-wrapper-borderless"),!c),m()(n,"".concat(o),!z(this.props)&&o),n));return v.createElement("span",{className:s,style:l},Object(O.a)(t,{style:null,value:r}),this.renderClearIcon(e))}},{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.inputType,a=e.element;return n===w[0]?this.renderTextAreaWithClearIcon(t,a):this.renderInputWithLabel(t,this.renderLabeledIcon(t,a))}}]),n}(v.Component),A=S,E=n(161),N=n(242),k=n(82);function I(e){return"undefined"===typeof e||null===e?"":e}function T(e,t,n){if(n){var a=t;if("click"===t.type){(a=Object.create(t)).target=e,a.currentTarget=e;var r=e.value;return e.value="",n(a),void(e.value=r)}n(a)}}function P(e,t,n,a,r){var i;return h()(e,(i={},m()(i,"".concat(e,"-sm"),"small"===n),m()(i,"".concat(e,"-lg"),"large"===n),m()(i,"".concat(e,"-disabled"),a),m()(i,"".concat(e,"-rtl"),"rtl"===r),m()(i,"".concat(e,"-borderless"),!t),i))}function R(e,t){if(e){e.focus(t);var n=(t||{}).cursor;if(n){var a=e.value.length;switch(n){case"start":e.setSelectionRange(0,0);break;case"end":e.setSelectionRange(a,a);break;default:e.setSelectionRange(0,a)}}}}var F=function(e){s()(n,e);var t=f()(n);function n(e){var a;o()(this,n),(a=t.call(this,e)).direction="ltr",a.focus=function(e){R(a.input,e)},a.saveClearableInput=function(e){a.clearableInput=e},a.saveInput=function(e){a.input=e},a.onFocus=function(e){var t=a.props.onFocus;a.setState({focused:!0},a.clearPasswordValueAttribute),t&&t(e)},a.onBlur=function(e){var t=a.props.onBlur;a.setState({focused:!1},a.clearPasswordValueAttribute),t&&t(e)},a.handleReset=function(e){a.setValue("",(function(){a.focus()})),T(a.input,e,a.props.onChange)},a.renderInput=function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=a.props,l=o.className,u=o.addonBefore,c=o.addonAfter,s=o.size,d=o.disabled,f=Object(g.default)(a.props,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","size","inputType","bordered"]);return v.createElement("input",r()({autoComplete:i.autoComplete},f,{onChange:a.handleChange,onFocus:a.onFocus,onBlur:a.onBlur,onKeyDown:a.handleKeyDown,className:h()(P(e,n,s||t,d,a.direction),m()({},l,l&&!u&&!c)),ref:a.saveInput}))},a.clearPasswordValueAttribute=function(){a.removePasswordTimeout=setTimeout((function(){a.input&&"password"===a.input.getAttribute("type")&&a.input.hasAttribute("value")&&a.input.removeAttribute("value")}))},a.handleChange=function(e){a.setValue(e.target.value,a.clearPasswordValueAttribute),T(a.input,e,a.props.onChange)},a.handleKeyDown=function(e){var t=a.props,n=t.onPressEnter,r=t.onKeyDown;13===e.keyCode&&n&&n(e),r&&r(e)},a.renderComponent=function(e){var t=e.getPrefixCls,n=e.direction,i=e.input,o=a.state,l=o.value,u=o.focused,c=a.props,s=c.prefixCls,d=c.bordered,f=void 0===d||d,p=t("input",s);return a.direction=n,v.createElement(N.b.Consumer,null,(function(e){return v.createElement(A,r()({size:e},a.props,{prefixCls:p,inputType:"input",value:I(l),element:a.renderInput(p,e,f,i),handleReset:a.handleReset,ref:a.saveClearableInput,direction:n,focused:u,triggerFocus:a.focus,bordered:f}))}))};var i="undefined"===typeof e.value?e.defaultValue:e.value;return a.state={value:i,focused:!1,prevValue:e.value},a}return u()(n,[{key:"componentDidMount",value:function(){this.clearPasswordValueAttribute()}},{key:"componentDidUpdate",value:function(){}},{key:"getSnapshotBeforeUpdate",value:function(e){return C(e)!==C(this.props)&&Object(k.a)(this.input!==document.activeElement,"Input","When Input is focused, dynamic add or remove prefix / suffix will make it lose focus caused by dom structure change. Read more: https://ant.design/components/input/#FAQ"),null}},{key:"componentWillUnmount",value:function(){this.removePasswordTimeout&&clearTimeout(this.removePasswordTimeout)}},{key:"blur",value:function(){this.input.blur()}},{key:"setSelectionRange",value:function(e,t,n){this.input.setSelectionRange(e,t,n)}},{key:"select",value:function(){this.input.select()}},{key:"setValue",value:function(e,t){void 0===this.props.value?this.setState({value:e},t):null===t||void 0===t||t()}},{key:"render",value:function(){return v.createElement(E.a,null,this.renderComponent)}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=t.prevValue,a={prevValue:e.value};return void 0===e.value&&n===e.value||(a.value=e.value),a}}]),n}(v.Component);F.defaultProps={type:"text"};var q=F,M=function(e){return v.createElement(E.a,null,(function(t){var n,a=t.getPrefixCls,r=t.direction,i=e.prefixCls,o=e.className,l=void 0===o?"":o,u=a("input-group",i),c=h()(u,(n={},m()(n,"".concat(u,"-lg"),"large"===e.size),m()(n,"".concat(u,"-sm"),"small"===e.size),m()(n,"".concat(u,"-compact"),e.compact),m()(n,"".concat(u,"-rtl"),"rtl"===r),n),l);return v.createElement("span",{className:c,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},e.children)}))},V=n(75),D=n(964),B=n.n(D),L=n(243),_=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},U=v.forwardRef((function(e,t){var n,a,i=e.prefixCls,o=e.inputPrefixCls,l=e.className,u=e.size,c=e.suffix,s=e.enterButton,d=void 0!==s&&s,f=e.addonAfter,p=e.loading,b=e.disabled,g=e.onSearch,x=e.onChange,y=_(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange"]),j=v.useContext(E.b),w=j.getPrefixCls,C=j.direction,z=v.useContext(N.b),S=u||z,A=v.useRef(null),k=function(e){var t;document.activeElement===(null===(t=A.current)||void 0===t?void 0:t.input)&&e.preventDefault()},I=function(e){var t;g&&g(null===(t=A.current)||void 0===t?void 0:t.input.value,e)},T=w("input-search",i),P=w("input",o),R="boolean"===typeof d||"undefined"===typeof d?v.createElement(B.a,null):null,F="".concat(T,"-button"),M=d||{},D=M.type&&!0===M.type.__ANT_BUTTON;a=D||"button"===M.type?Object(O.a)(M,r()({onMouseDown:k,onClick:I,key:"enterButton"},D?{className:F,size:S}:{})):v.createElement(L.a,{className:F,type:d?"primary":void 0,size:S,disabled:b,key:"enterButton",onMouseDown:k,onClick:I,loading:p,icon:R},d),f&&(a=[a,Object(O.a)(f,{key:"addonAfter"})]);var U=h()(T,(n={},m()(n,"".concat(T,"-rtl"),"rtl"===C),m()(n,"".concat(T,"-").concat(S),!!S),m()(n,"".concat(T,"-with-button"),!!d),n),l);return v.createElement(q,r()({ref:Object(V.a)(A,t),onPressEnter:I},y,{size:S,prefixCls:P,addonAfter:a,suffix:c,onChange:function(e){e&&e.target&&"click"===e.type&&g&&g(e.target.value,e),x&&x(e)},className:U,disabled:b}))}));U.displayName="Search";var Y=U,K=n(150),W=n.n(K),Z=n(339),G=n.n(Z),H=n(37),Q=n.n(H),J=n(943),X=n(877),$=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},ee=v.forwardRef((function(e,t){var n,a=e.prefixCls,i=e.bordered,o=void 0===i||i,l=e.showCount,u=void 0!==l&&l,c=e.maxLength,s=e.className,d=e.style,f=e.size,p=$(e,["prefixCls","bordered","showCount","maxLength","className","style","size"]),b=v.useContext(E.b),x=b.getPrefixCls,y=b.direction,j=v.useContext(N.b),O=v.useRef(),w=v.useRef(null),C=Object(X.a)(p.defaultValue,{value:p.value}),z=Q()(C,2),S=z[0],k=z[1],P=v.useRef(p.value);v.useEffect((function(){void 0===p.value&&P.current===p.value||(k(p.value),P.current=p.value)}),[p.value,P.current]);var F=function(e,t){void 0===p.value&&(k(e),null===t||void 0===t||t())},q=x("input",a);v.useImperativeHandle(t,(function(){var e;return{resizableTextArea:null===(e=O.current)||void 0===e?void 0:e.resizableTextArea,focus:function(e){var t,n;R(null===(n=null===(t=O.current)||void 0===t?void 0:t.resizableTextArea)||void 0===n?void 0:n.textArea,e)},blur:function(){var e;return null===(e=O.current)||void 0===e?void 0:e.blur()}}}));var M=v.createElement(J.a,r()({},Object(g.default)(p,["allowClear"]),{maxLength:c,className:h()((n={},m()(n,"".concat(q,"-borderless"),!o),m()(n,s,s&&!u),m()(n,"".concat(q,"-sm"),"small"===j||"small"===f),m()(n,"".concat(q,"-lg"),"large"===j||"large"===f),n)),style:u?null:d,prefixCls:q,onChange:function(e){F(e.target.value),T(O.current,e,p.onChange)},ref:O})),V=I(S),D=Number(c)>0;V=D?G()(V).slice(0,c).join(""):V;var B=v.createElement(A,r()({},p,{prefixCls:q,direction:y,inputType:"text",value:V,element:M,handleReset:function(e){F("",(function(){var e;null===(e=O.current)||void 0===e||e.focus()})),T(O.current,e,p.onChange)},ref:w,bordered:o}));if(u){var L=G()(V).length,_="";return _="object"===W()(u)?u.formatter({count:L,maxLength:c}):"".concat(L).concat(D?" / ".concat(c):""),v.createElement("div",{className:h()("".concat(q,"-textarea"),m()({},"".concat(q,"-textarea-rtl"),"rtl"===y),"".concat(q,"-textarea-show-count"),s),style:d,"data-count":_},B)}return B})),te=n(900),ne=n.n(te),ae=n(940),re=n.n(ae),ie=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},oe={click:"onClick",hover:"onMouseOver"},le=v.forwardRef((function(e,t){var n=Object(v.useState)(!1),a=Q()(n,2),i=a[0],o=a[1],l=function(){e.disabled||o(!i)},u=function(n){var a=n.getPrefixCls,o=e.className,u=e.prefixCls,c=e.inputPrefixCls,s=e.size,d=e.visibilityToggle,f=ie(e,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),p=a("input",c),b=a("input-password",u),x=d&&function(t){var n,a=e.action,r=e.iconRender,o=oe[a]||"",u=(void 0===r?function(){return null}:r)(i),c=(n={},m()(n,o,l),m()(n,"className","".concat(t,"-icon")),m()(n,"key","passwordIcon"),m()(n,"onMouseDown",(function(e){e.preventDefault()})),m()(n,"onMouseUp",(function(e){e.preventDefault()})),n);return v.cloneElement(v.isValidElement(u)?u:v.createElement("span",null,u),c)}(b),y=h()(b,o,m()({},"".concat(b,"-").concat(s),!!s)),j=r()(r()({},Object(g.default)(f,["suffix","iconRender"])),{type:i?"text":"password",className:y,prefixCls:p,suffix:x});return s&&(j.size=s),v.createElement(q,r()({ref:t},j))};return v.createElement(E.a,null,u)}));le.defaultProps={action:"click",visibilityToggle:!0,iconRender:function(e){return e?v.createElement(ne.a,null):v.createElement(re.a,null)}},le.displayName="Password";var ue=le;q.Group=M,q.Search=Y,q.TextArea=ee,q.Password=ue;t.a=q},1083:function(e,t,n){"use strict";var a,r=n(217),i=n(218).a.div(a||(a=Object(r.a)(["\n  width: 500px;\n  height: 100%;\n  min-height: 100%;\n  overflow-y: auto;\n  z-index: 1;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 56px 40px;\n  position: relative;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: white;\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    color: white;\n  }\n\n  .ant-checkbox-wrapper {\n    color: white;\n  }\n\n  @media only screen and (max-width: 767px) {\n    width: 100%;\n  }\n"])));t.a=i},1084:function(e,t,n){"use strict";var a,r=n(217),i=n(218).a.div(a||(a=Object(r.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 48px;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  color: white;\n\n  h1 {\n    margin-bottom: 0;\n  }\n"])));t.a=i},1085:function(e,t,n){"use strict";var a,r=n(217),i=n(218).a.div(a||(a=Object(r.a)(["\n  width: 100%;\n  min-height: 100vh;\n  height: 100vh;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n  background-size: cover;\n\n  &:before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.5);\n    position: absolute;\n    z-index: 1;\n    top: 0;\n  }\n"])));t.a=i},1097:function(e,t,n){"use strict";var a,r=n(217),i=n(218).a.div(a||(a=Object(r.a)(["\n  margin-top: 36px;\n  text-align: center;\n"])));t.a=i},1224:function(e,t,n){"use strict";var a=n(5),r=function(e){return e.tenant.form},i=Object(a.a)([r],(function(e){return e.record})),o={selectInitLoading:Object(a.a)([r],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:Object(a.a)([r],(function(e){return Boolean(e.saveLoading)})),selectRecord:i,selectRaw:r};t.a=o},1775:function(e,t,n){"use strict";n.r(t);var a=n(22),r=n(2),i=n(38),o=n(3),l=n(27),u=n(31),c=n(1083),s=n(1084),d=n(1097),f=n(1085),p=n(0),m=n(131),v=n(1224),b=n(898),h=n(873),g=n(243),x=n(904),y=n(43),j=n(40);var O=n(35),w=n(901),C=n(14),z=y.e().shape({name:x.a.string(Object(o.d)("tenant.fields.tenantName"),{required:!0,max:50}),url:x.a.string(Object(o.d)("tenant.fields.tenantUrl"),{required:!0,max:50}).matches(/^[a-z0-9][-a-zA-Z0-9]*$/,Object(o.d)("tenant.validation.url"))}),S=y.e().shape({name:x.a.string(Object(o.d)("tenant.fields.tenantName"),{required:!0,max:50})}),A=O.a.isEnabled?z:S;var E=function(e){var t=Object(i.d)(),n=Object(r.useState)({name:""}),l=Object(a.a)(n,1)[0],c=Object(h.c)({resolver:Object(w.yupResolver)(A),mode:"onSubmit",defaultValues:l}),s=Object(i.e)(v.a.selectSaveLoading),d=Object(i.e)(u.a.selectInvitedTenants);return Object(C.jsx)(h.a,Object(p.a)(Object(p.a)({},c),{},{children:Object(C.jsxs)("form",{onSubmit:c.handleSubmit((function(e){t(m.a.doCreate(e))})),children:[Object(C.jsx)(b.a,{name:"name",placeholder:Object(o.d)("tenant.fields.tenantName"),autoComplete:"name",size:"large",layout:null,onChange:function(e){return c.setValue("url",e.toString().normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-"))},autoFocus:!0}),O.a.isEnabled&&Object(C.jsx)(b.a,{name:"url",placeholder:Object(o.d)("tenant.fields.tenantUrl"),size:"large",layout:null,addonAfter:Object(C.jsxs)("span",{style:{fontWeight:"bold"},children:[".",j.a.frontendUrl.host]})}),Object(C.jsx)(g.a,{style:{marginTop:"16px"},type:"primary",htmlType:"submit",block:!0,size:"large",loading:s,children:Object(o.d)("tenant.create.button")}),Boolean(d.length)&&Object(C.jsx)(g.a,{style:{marginTop:"16px"},htmlType:"button",block:!0,size:"large",onClick:e.onViewToggle,children:Object(o.d)("tenant.invitation.view")})]})}))},N=n(123),k=n(371),I=n(939),T=y.e().shape({id:x.a.string(Object(o.d)("tenant.fields.tenantId"))});var P=function(e){var t=Object(i.d)(),n=Object(i.e)(k.a.selectLoading),l=Object(i.e)(u.a.selectInvitedTenants),c=Object(i.e)(u.a.selectCurrentUser),s=Object(r.useState)({id:l[0].id}),d=Object(a.a)(s,1)[0],f=Object(h.c)({resolver:Object(w.yupResolver)(T),mode:"onSubmit",defaultValues:d});return Object(C.jsx)(h.a,Object(p.a)(Object(p.a)({},f),{},{children:Object(C.jsxs)("form",{onSubmit:f.handleSubmit((function(e){var n=e.id,a=c.tenants.find((function(e){return e.tenant.id===n}));t(N.a.doAccept(a.invitationToken))})),children:[Object(C.jsx)(I.a,{name:"id",placeholder:Object(o.d)("tenant.fields.tenantId"),size:"large",options:l.map((function(e){return{value:e.id,label:e.name}})),layout:null}),Object(C.jsx)(g.a,{style:{marginTop:"16px"},type:"primary",htmlType:"submit",block:!0,size:"large",loading:n,children:Object(o.d)("tenant.invitation.accept")}),Object(C.jsx)(g.a,{style:{marginTop:"16px"},htmlType:"button",block:!0,size:"large",onClick:e.onViewToggle,children:Object(o.d)("tenant.new.title")})]})}))},R=n(936);t.default=function(){var e=Object(r.useState)("form"),t=Object(a.a)(e,2),n=t[0],p=t[1],m=Object(i.d)(),v=Object(i.e)(u.a.selectInvitedTenants),b=Object(i.e)(u.a.selectBackgroundImageUrl),h=Object(i.e)(u.a.selectLogoUrl);Object(r.useEffect)((function(){p(v.length?"select":"form")}),[v]);var g=function(){p((function(e){return"form"===e?"select":"form"}))};return Object(C.jsx)(f.a,{style:{backgroundImage:"url(".concat(b||"/images/tenant.jpg",")")},children:Object(C.jsxs)(c.a,{children:[Object(C.jsx)(s.a,{children:h?Object(C.jsx)("img",{src:h,width:"240px",alt:Object(o.d)("app.title")}):Object(C.jsx)("h1",{children:Object(o.d)("app.title")})}),"form"===n?Object(C.jsx)(E,{onViewToggle:g}):Object(C.jsx)(P,{onViewToggle:g}),Object(C.jsx)(d.a,{children:Object(C.jsx)(R.a,{onClick:function(){m(l.a.doSignout())},children:Object(o.d)("auth.signout")})})]})})}},876:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(11),r=n(12),i=function(){function e(){Object(a.a)(this,e)}return Object(r.a)(e,null,[{key:"errorMessage",value:function(e,t,n,a){var r,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(i)return i;if(!a&&!n[e])return null;var o=t[e];return(null===o||void 0===o||null===(r=o[0])||void 0===r?void 0:r.message)||(null===o||void 0===o?void 0:o.message)||o||null}}]),e}()},898:function(e,t,n){"use strict";var a=n(0),r=n(1733),i=n(1024),o=n(873),l=n(2),u=n(876),c=n(14),s=function(e){var t=e.label,n=e.name,s=e.hint,d=e.layout,f=e.size,p=e.type,m=e.placeholder,v=e.autoFocus,b=e.autoComplete,h=e.prefix,g=e.externalErrorMessage,x=e.required,y=e.addonAfter,j=Object(o.d)(),O=j.setValue,w=j.watch,C=j.register,z=j.errors,S=j.formState,A=S.touched,E=S.isSubmitted;Object(l.useEffect)((function(){C({name:n})}),[C,n]);var N=u.a.errorMessage(n,z,A,E,g);return Object(c.jsx)(r.a.Item,Object(a.a)(Object(a.a)({},d),{},{label:t,required:x,validateStatus:N?"error":"success",help:N||s,children:Object(c.jsx)(i.a,{id:n,name:n,type:p,value:w(n),onChange:function(t){O(n,t.target.value,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(t.target.value)},onBlur:function(t){e.onBlur&&e.onBlur(t)},size:f||void 0,placeholder:m||void 0,autoFocus:v||!1,autoComplete:b||void 0,prefix:h||void 0,addonAfter:y||void 0,style:{width:"100%"}})}))};s.defaultProps={layout:null,type:"text",required:!1},t.a=s},900:function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(a=n(937))&&a.__esModule?a:{default:a};t.default=r,e.exports=r},904:function(e,t,n){"use strict";var a=n(19),r=n(43),i=n(3),o=n(53),l=n.n(o),u={generic:function(e){return r.c().label(e)},string:function(e,t){t=t||{};var n=r.h().transform((function(e,t){return""===t?null:e})).nullable(!0).trim().label(e);return t.required&&(n=n.required()),(t.min||0===t.min)&&(n=n.min(t.min)),t.max&&(n=n.max(t.max)),t.matches&&(n=n.matches(t.matches)),n},boolean:function(e,t){return r.b().default(!1).label(e)},relationToOne:function(e,t){t=t||{};var n=r.c().nullable(!0).label(e).transform((function(e,t){return t?t.id:null}));return t.required&&(n=n.required()),n},stringArray:function(e,t){t=t||{};var n=r.a().compact().ensure().of(r.h().transform((function(e,t){return""===t?null:e})).trim()).label(e);return t.required&&(n=n.required()),t.min||0===t.min?n=n.min(t.min):t.required&&(n=n.min(1)),t.max&&(n=n.max(t.max)),n},relationToMany:function(e,t){t=t||{};var n=r.a().nullable(!0).label(e).transform((function(e,t){return t&&t.length?t.map((function(e){return e.id})):[]}));return t.required&&(n=n.required()),t.min||0===t.min?n=n.min(t.min):t.required&&(n=n.min(1)),t.max&&(n=n.max(t.max)),n},integer:function(e,t){t=t||{};var n=r.d().transform((function(e,t){return""===t?null:e})).integer().nullable(!0).label(e);return t.required&&(n=n.required()),(t.min||0===t.min)&&(n=n.min(t.min)),t.max&&(n=n.max(t.max)),n},images:function(e,t){t=t||{};var n=r.a().nullable(!0).label(e);return(t.required||t.min)&&(n=n.required()),t.min||0===t.min?n=n.min(t.min):t.required&&(n=n.min(1)),t.max&&(n=n.max(t.max)),n},files:function(e,t){t=t||{};var n=r.a().compact().ensure().nullable(!0).label(e);return(t.required||t.min)&&(n=n.required()),t.min||0===t.min?n=n.min(t.min):t.required&&(n=n.min(1)),t.max&&(n=n.max(t.max)),n},enumerator:function(e,t){t=t||{};var n=r.h().transform((function(e,t){return""===t?null:e})).label(e).nullable(!0).oneOf([null].concat(Object(a.a)(t.options||[])));return t.required&&(n=n.required(Object(i.d)("validation.string.selected"))),n},email:function(e,t){t=t||{};var n=r.h().transform((function(e,t){return""===t?null:e})).nullable(!0).trim().label(e).email();return t.required&&(n=n.required()),(t.min||0===t.min)&&(n=n.min(t.min)),t.max&&(n=n.max(t.max)),t.matches&&(n=n.matches(t.matches)),n},decimal:function(e,t){t=t||{};var n=r.d().transform((function(e,t){return""===t?null:e})).nullable(!0).label(e);return t.required&&(n=n.required()),(t.min||0===t.min)&&(n=n.min(t.min)),t.max&&(n=n.max(t.max)),n},datetime:function(e,t){t=t||{};var n=r.c().nullable(!0).label(e).transform((function(e,t){return e?l()(t,"YYYY-MM-DD HH:mm").toISOString():null}));return t.required&&(n=n.required()),n},date:function(e,t){t=t||{};var n=r.c().nullable(!0).label(e).test("is-date",Object(i.d)("validation.mixed.default"),(function(e){return!e||l()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?l()(e).format("YYYY-MM-DD"):null}));return t.required&&(n=n.required()),n}};t.a=u},936:function(e,t,n){"use strict";var a,r=n(217),i=n(218).a.button(a||(a=Object(r.a)(["\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  color: var(--link-color);\n  text-decoration: none;\n  display: inline;\n  margin: 0;\n  padding: 0;\n\n  &:hover {\n    text-decoration: none;\n  }\n  &:focus {\n    text-decoration: none;\n  }\n"])));t.a=i},937:function(e,t,n){"use strict";var a=n(74),r=n(50);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(72)),o=a(n(2)),l=r(n(938)),u=r(n(81)),c=function(e,t){return o.createElement(u.default,(0,i.default)((0,i.default)({},e),{},{ref:t,icon:l.default}))};c.displayName="EyeOutlined";var s=o.forwardRef(c);t.default=s},938:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"}},939:function(e,t,n){"use strict";var a=n(0),r=n(1733),i=n(903),o=n(2),l=n(876),u=n(873),c=n(14),s=function(e){var t=e.label,n=e.name,s=e.hint,d=e.layout,f=e.size,p=e.placeholder,m=e.options,v=e.mode,b=e.autoFocus,h=e.required,g=e.externalErrorMessage,x=e.optionFilterProp,y=Object(u.d)(),j=y.register,O=y.errors,w=y.formState,C=w.touched,z=w.isSubmitted,S=y.setValue,A=y.watch,E=l.a.errorMessage(n,O,C,z,g),N=A(n);return Object(o.useEffect)((function(){j({name:n})}),[j,n]),Object(c.jsx)(r.a.Item,Object(a.a)(Object(a.a)({},d),{},{label:t,validateStatus:E?"error":"success",required:h,help:E||s,children:Object(c.jsx)(i.a,{id:n,onChange:function(t){S(n,t,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(t)},onBlur:function(t){e.onBlur&&e.onBlur(t)},value:N,size:f||void 0,placeholder:p||void 0,autoFocus:b||!1,mode:v||void 0,optionFilterProp:x||"children",allowClear:!0,style:{width:"100%"},children:m.map((function(e){return Object(c.jsx)(i.a.Option,{value:e.value,title:e.title,children:e.label},e.value)}))})}))};s.defaultProps={layout:null,required:!1},t.a=s},940:function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(a=n(941))&&a.__esModule?a:{default:a};t.default=r,e.exports=r},941:function(e,t,n){"use strict";var a=n(74),r=n(50);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(72)),o=a(n(2)),l=r(n(942)),u=r(n(81)),c=function(e,t){return o.createElement(u.default,(0,i.default)((0,i.default)({},e),{},{ref:t,icon:l.default}))};c.displayName="EyeInvisibleOutlined";var s=o.forwardRef(c);t.default=s},942:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"}},943:function(e,t,n){"use strict";var a,r=n(18),i=n(11),o=n(12),l=n(24),u=n(25),c=n(2),s=n(0),d=n(21),f=n(341),p=n(248),m=n(17),v=n.n(m),b="\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n",h=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break"],g={};function x(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(t&&g[n])return g[n];var a=window.getComputedStyle(e),r=a.getPropertyValue("box-sizing")||a.getPropertyValue("-moz-box-sizing")||a.getPropertyValue("-webkit-box-sizing"),i=parseFloat(a.getPropertyValue("padding-bottom"))+parseFloat(a.getPropertyValue("padding-top")),o=parseFloat(a.getPropertyValue("border-bottom-width"))+parseFloat(a.getPropertyValue("border-top-width")),l=h.map((function(e){return"".concat(e,":").concat(a.getPropertyValue(e))})).join(";"),u={sizingStyle:l,paddingSize:i,borderSize:o,boxSizing:r};return t&&n&&(g[n]=u),u}var y,j=n(117),O=n.n(j);!function(e){e[e.NONE=0]="NONE",e[e.RESIZING=1]="RESIZING",e[e.RESIZED=2]="RESIZED"}(y||(y={}));var w=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e)).nextFrameActionId=void 0,o.resizeFrameId=void 0,o.textArea=void 0,o.saveTextArea=function(e){o.textArea=e},o.handleResize=function(e){var t=o.state.resizeStatus,n=o.props,a=n.autoSize,r=n.onResize;t===y.NONE&&("function"===typeof r&&r(e),a&&o.resizeOnNextFrame())},o.resizeOnNextFrame=function(){cancelAnimationFrame(o.nextFrameActionId),o.nextFrameActionId=requestAnimationFrame(o.resizeTextarea)},o.resizeTextarea=function(){var e=o.props.autoSize;if(e&&o.textArea){var t=e.minRows,n=e.maxRows,r=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;a||((a=document.createElement("textarea")).setAttribute("tab-index","-1"),a.setAttribute("aria-hidden","true"),document.body.appendChild(a)),e.getAttribute("wrap")?a.setAttribute("wrap",e.getAttribute("wrap")):a.removeAttribute("wrap");var i=x(e,t),o=i.paddingSize,l=i.borderSize,u=i.boxSizing,c=i.sizingStyle;a.setAttribute("style","".concat(c,";").concat(b)),a.value=e.value||e.placeholder||"";var s,d=Number.MIN_SAFE_INTEGER,f=Number.MAX_SAFE_INTEGER,p=a.scrollHeight;if("border-box"===u?p+=l:"content-box"===u&&(p-=o),null!==n||null!==r){a.value=" ";var m=a.scrollHeight-o;null!==n&&(d=m*n,"border-box"===u&&(d=d+o+l),p=Math.max(d,p)),null!==r&&(f=m*r,"border-box"===u&&(f=f+o+l),s=p>f?"":"hidden",p=Math.min(f,p))}return{height:p,minHeight:d,maxHeight:f,overflowY:s,resize:"none"}}(o.textArea,!1,t,n);o.setState({textareaStyles:r,resizeStatus:y.RESIZING},(function(){cancelAnimationFrame(o.resizeFrameId),o.resizeFrameId=requestAnimationFrame((function(){o.setState({resizeStatus:y.RESIZED},(function(){o.resizeFrameId=requestAnimationFrame((function(){o.setState({resizeStatus:y.NONE}),o.fixFirefoxAutoScroll()}))}))}))}))}},o.renderTextArea=function(){var e=o.props,t=e.prefixCls,n=void 0===t?"rc-textarea":t,a=e.autoSize,i=e.onResize,l=e.className,u=e.disabled,m=o.state,b=m.textareaStyles,h=m.resizeStatus,g=Object(p.a)(o.props,["prefixCls","onPressEnter","autoSize","defaultValue","onResize"]),x=v()(n,l,Object(d.a)({},"".concat(n,"-disabled"),u));"value"in g&&(g.value=g.value||"");var j=Object(s.a)(Object(s.a)(Object(s.a)({},o.props.style),b),h===y.RESIZING?{overflowX:"hidden",overflowY:"hidden"}:null);return c.createElement(f.a,{onResize:o.handleResize,disabled:!(a||i)},c.createElement("textarea",Object(r.a)({},g,{className:x,style:j,ref:o.saveTextArea})))},o.state={textareaStyles:{},resizeStatus:y.NONE},o}return Object(o.a)(n,[{key:"componentDidUpdate",value:function(e){e.value===this.props.value&&O()(e.autoSize,this.props.autoSize)||this.resizeTextarea()}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.nextFrameActionId),cancelAnimationFrame(this.resizeFrameId)}},{key:"fixFirefoxAutoScroll",value:function(){try{if(document.activeElement===this.textArea){var e=this.textArea.selectionStart,t=this.textArea.selectionEnd;this.textArea.setSelectionRange(e,t)}}catch(n){}}},{key:"render",value:function(){return this.renderTextArea()}}]),n}(c.Component),C=w,z=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;Object(i.a)(this,n),(a=t.call(this,e)).resizableTextArea=void 0,a.focus=function(){a.resizableTextArea.textArea.focus()},a.saveTextArea=function(e){a.resizableTextArea=e},a.handleChange=function(e){var t=a.props.onChange;a.setValue(e.target.value,(function(){a.resizableTextArea.resizeTextarea()})),t&&t(e)},a.handleKeyDown=function(e){var t=a.props,n=t.onPressEnter,r=t.onKeyDown;13===e.keyCode&&n&&n(e),r&&r(e)};var r="undefined"===typeof e.value||null===e.value?e.defaultValue:e.value;return a.state={value:r},a}return Object(o.a)(n,[{key:"setValue",value:function(e,t){"value"in this.props||this.setState({value:e},t)}},{key:"blur",value:function(){this.resizableTextArea.textArea.blur()}},{key:"render",value:function(){return c.createElement(C,Object(r.a)({},this.props,{value:this.state.value,onKeyDown:this.handleKeyDown,onChange:this.handleChange,ref:this.saveTextArea}))}}],[{key:"getDerivedStateFromProps",value:function(e){return"value"in e?{value:e.value}:null}}]),n}(c.Component);t.a=z}}]);