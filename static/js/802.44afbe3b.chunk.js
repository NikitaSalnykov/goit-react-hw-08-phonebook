"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[802],{9802:function(n,e,t){t.r(e),t.d(e,{default:function(){return cn}});var r,a,i,o,s=t(2791),c=t(9434),d=t(9682),l=t(8167),u=t(7793),p=function(n){return n.filter.filter},m=function(n){return n.filter.filterOptions},x=t(493),f=t(4852),h=t(653),v=t(9900),Z=t(3044),g=t(3400),j=t(501),b=t(7247),w=t(184),y=function(){var n=(0,c.I0)(),e=(0,c.v9)(p),t=(0,c.v9)(m),r=(0,c.v9)(d.K2),a=function(){var n=e.toLowerCase(),a=r.filter((function(e){return e.name.toLowerCase().includes(n)}));switch(t){case"new":return a.reverse();case"old":default:return a;case"z-a":return a.slice().sort((function(n,e){return e.name.localeCompare(n.name)}));case"a-z":return a.slice().sort((function(n,e){return n.name.localeCompare(e.name)}))}}();return(0,w.jsx)(x.Z,{children:a.map((function(e){return(0,w.jsxs)(f.ZP,{secondaryAction:(0,w.jsx)(g.Z,{edge:"end","aria-label":"delete",onClick:function(){return t=e.id,void n((0,l.ku)(t));var t},children:(0,w.jsx)(b.Z,{})}),children:[(0,w.jsx)(h.Z,{children:(0,w.jsx)(Z.Z,{children:(0,w.jsx)(j.Z,{})})}),(0,w.jsxs)("div",{children:[(0,w.jsx)(v.Z,{style:{marginRight:"20px"},primary:"".concat(e.name,":")}),(0,w.jsx)(v.Z,{style:{marginRight:"20px"},secondary:"tel. ".concat(e.number)})]})]},e.id)}))})},C=t(9439),k=t(7658),N=t(168),P=t(7691),z=P.ZP.form(r||(r=(0,N.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  width: 300px;\n  & div {\n    width: 300px;\n  }\n"]))),A=(P.ZP.button(a||(a=(0,N.Z)(["\n  width: 100px;\n  padding: 5px 10px;\n  border: 1px solid black;\n  border-radius: 5px;\n  transition: background-color 0.1s ease;\n  &:hover {\n    background-color: lightgrey;\n  }\n  &:active {\n    background-color: lightblue;\n  }\n"]))),t(6151)),I=t(1686),L=t.n(I),M=function(){var n=(0,s.useState)(""),e=(0,C.Z)(n,2),t=e[0],r=e[1],a=(0,s.useState)(""),i=(0,C.Z)(a,2),o=i[0],u=i[1],p=(0,c.I0)(),m=(0,c.v9)(d.K2),x=function(n){var e=n.target;switch(e.name){case"name":r(e.value);break;case"number":u(e.value)}};return(0,w.jsxs)(z,{onSubmit:function(n){n.preventDefault(),t.trim()||o.trim()?function(n){var e=n.name,t=n.number;m.find((function(n){return n.name.toLowerCase()===e.toLowerCase()}))?L().Notify.info("".concat(e," is already in contcts")):(p((0,l.w$)({name:e,number:t})),L().Notify.success("Contact added successfully"))}({name:t,number:o}):L().Notify.failure("Empty input!")},children:[(0,w.jsx)(k.Z,{id:"name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:x,value:t,variant:"outlined",label:"Name"}),(0,w.jsx)(k.Z,{id:"tel",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:x,value:o,variant:"outlined",label:"Number"}),(0,w.jsx)(A.Z,{style:{marginTop:"10px"},variant:"contained",type:"submit",children:"Add to contacts"})]})},E=t(1220),F=P.ZP.div(i||(i=(0,N.Z)(["\n  display: flex;\n  align-items: self-end;\n  margin-bottom: 20px;\n"]))),S=P.ZP.div(o||(o=(0,N.Z)(["\n  & select {\n    padding: 5px 10px;\n\n  }\n"]))),V=t(3061),_=t(7462),K=t(3366),O=t(9278),R=t(4419),$=t(9916),q=t(6147),H=t(2930),T=t(9059),B=t(7078),D=t(1046),J=t(1797),G=["className","children","classes","IconComponent","input","inputProps","variant"],Q=["root"],U=(0,w.jsx)(B.Z,{}),W=s.forwardRef((function(n,e){var t=(0,D.Z)({name:"MuiNativeSelect",props:n}),r=t.className,a=t.children,i=t.classes,o=void 0===i?{}:i,c=t.IconComponent,d=void 0===c?T.Z:c,l=t.input,u=void 0===l?U:l,p=t.inputProps,m=(0,K.Z)(t,G),x=(0,H.Z)(),f=(0,q.Z)({props:t,muiFormControl:x,states:["variant"]}),h=function(n){var e=n.classes;return(0,R.Z)({root:["root"]},J.f,e)}((0,_.Z)({},t,{classes:o})),v=(0,K.Z)(o,Q);return(0,w.jsx)(s.Fragment,{children:s.cloneElement(u,(0,_.Z)({inputComponent:$.ZP,inputProps:(0,_.Z)({children:a,classes:v,IconComponent:d,variant:f.variant,type:void 0},p,u?u.props.inputProps:{}),ref:e},m,{className:(0,O.Z)(h.root,u.props.className,r)}))})}));W.muiName="Select";var X,Y,nn=W,en=function(){var n=(0,c.I0)();return(0,w.jsxs)(F,{children:[(0,w.jsx)("label",{style:{marginRight:"14px"},htmlFor:"filter",children:(0,w.jsx)(V.FKI,{size:20})}),(0,w.jsx)(k.Z,{id:"filter",type:"text",name:"input",required:!0,onChange:function(e){var t=e.currentTarget;n((0,E.xO)(t.value))},variant:"standard"}),(0,w.jsx)(S,{style:{marginLeft:"20px"},children:(0,w.jsxs)(nn,{defaultValue:"new contacts",onChange:function(e){var t=e.currentTarget;n((0,E.MN)(t.value))},children:[(0,w.jsx)("option",{value:"new",children:"New"}),(0,w.jsx)("option",{value:"a-z",children:"A-Z"}),(0,w.jsx)("option",{value:"z-a",children:"Z-A"}),(0,w.jsx)("option",{value:"old",children:"Old"})]})})]})},tn=t(1552),rn=P.ZP.div(X||(X=(0,N.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 20px;\n  @media screen and (min-width: 375px) {\n  }\n  @media screen and (min-width: 768px) {\n  }\n  @media screen and (min-width: 1200px) {\n    flex-direction: row;\n    justify-content: space-around;\n    gap: 0;\n  }\n"]))),an=P.ZP.div(Y||(Y=(0,N.Z)(["\n  padding: 0;\n\n  @media screen and (min-width: 375px) {\n  }\n  @media screen and (min-width: 768px) {\n    width: 460px;\n  }\n  @media screen and (min-width: 1200px) {\n    width: 560px;\n    flex-direction: row;\n    justify-content: space-around;\n    gap: 0;\n  }\n\n  & li {\n    border-radius: 10px;\n    background-color: #add8e678;\n    padding: 15px;\n    padding-right: 24px;\n    overflow: hidden;\n    &:nth-child(even) {\n      background-color: transparent;\n    }\n    & span {\n      overflow: hidden;\n    }\n  }\n"]))),on=t(6249),sn=t(7689),cn=function(){var n=(0,c.I0)(),e=(0,c.v9)(d.Vc),t=(0,c.v9)(d.by),r=(0,c.v9)((function(n){return n.auth.isLoggedIn})),a=(0,sn.s0)();return(0,s.useEffect)((function(){!r&&a(on._.HOME)}),[r,a]),(0,s.useEffect)((function(){n((0,l.m$)())}),[n]),(0,w.jsx)(tn.$,{children:(0,w.jsx)(tn.w,{children:(0,w.jsxs)(rn,{children:[(0,w.jsxs)("div",{children:[(0,w.jsx)("h2",{children:"Phonebook"}),(0,w.jsx)(M,{})]}),(0,w.jsxs)(an,{children:[(0,w.jsx)("h2",{style:{marginBottom:"10px"},children:"Contacts"}),(0,w.jsx)(en,{}),e&&!t?(0,w.jsx)(y,{}):(0,w.jsx)(u.a,{})]})]})})})}},9682:function(n,e,t){t.d(e,{K2:function(){return r},Vc:function(){return a},by:function(){return i}});var r=function(n){return n.contacts.contacts},a=function(n){return n.contacts.isLoading},i=function(n){return n.contacts.error}},7247:function(n,e,t){var r=t(4836);e.Z=void 0;var a=r(t(5649)),i=t(184),o=(0,a.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");e.Z=o}}]);
//# sourceMappingURL=802.44afbe3b.chunk.js.map