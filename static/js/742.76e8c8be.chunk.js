"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[742],{3742:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,a,i,o,s,c=t(2791),d=t(9434),l=function(n){return n.contacts.contacts},u=function(n){return n.contacts.isLoading},p=function(n){return n.contacts.error},x=t(8167),m=t(7793),h=function(n){return n.filter.filter},f=t(168),b=t(6444),g=b.ZP.ul(r||(r=(0,f.Z)(["\nmax-width: 500px;\npadding: 0;\n\n& li {\n  position: relative;\n  display:flex;\n  flex-wrap: wrap;\n  align-items: baseline;\n  justify-content: space-between;\n  background-color: #dadbe3;\n  padding: 15px;\n  padding-right: 24px;\n      overflow: hidden;\n  &:nth-child(even) {\n  background-color: transparent;\n}\n  & div {\n  display:flex;\n  flex-wrap: wrap;\n  & p {\n    margin-left: 10px;\n  }\n  & p+p {\n  margin-left: 5px;\n  }\n}\n  & button {\n    top: 0;\n    right: 0;\n    position: absolute;\n    border: none;\n    background: transparent;\n    padding: 3px;\n    cursor: pointer;\n  }\n}\n"]))),v=t(6036),j=t(6355),w=t(184),k=function(){var n=(0,d.I0)(),e=(0,d.v9)(h),t=(0,d.v9)(l),r=function(){var n=e.toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))}();return(0,w.jsx)(g,{children:r.map((function(e){return(0,w.jsxs)("li",{children:[(0,w.jsxs)("div",{children:[(0,w.jsx)(j.DNl,{size:"18"}),(0,w.jsxs)("p",{children:[" ",e.name,":"]}),(0,w.jsx)("p",{children:e.number})]}),(0,w.jsx)("button",{onClick:function(){return t=e.id,void n((0,x.ku)(t));var t},children:(0,w.jsx)(v.bqj,{size:"24"})})]},e.id)}))})},y=t(9439),Z=b.ZP.form(a||(a=(0,f.Z)(["\n  & div {\n  display: flex;\n  flex-direction: column;\n\n  padding: 10px 20px;\n  border: solid 1px black;\n  max-width: 400px;\n  }\n"]))),C=b.ZP.button(i||(i=(0,f.Z)(["\n    width: 100px;\n    padding: 5px 10px;\n    border: 1px solid black;\n    border-radius: 5px;\n    transition:  background-color 0.1s ease;\n  &:hover {\n    background-color: lightgrey;\n    \n  } &:active {\n    background-color: lightblue;\n    }\n"]))),N=b.ZP.input(o||(o=(0,f.Z)(["\n    max-width: 300px;\n    margin-bottom: 22px;\n    margin-top: 5px;\n    padding: 7px 10px;\n    border: 1px solid black;\n    background-color: transparent;\n"]))),P=t(1686),z=t.n(P),A=function(){var n=(0,c.useState)(""),e=(0,y.Z)(n,2),t=e[0],r=e[1],a=(0,c.useState)(""),i=(0,y.Z)(a,2),o=i[0],s=i[1],u=(0,d.I0)(),p=(0,d.v9)(l),m=function(n){var e=n.target;switch(e.name){case"name":r(e.value);break;case"number":s(e.value)}};return(0,w.jsx)(Z,{onSubmit:function(n){n.preventDefault(),t.trim()||o.trim()?function(n){var e=n.name,t=n.number;p.find((function(n){return n.name.toLowerCase()===e.toLowerCase()}))?z().Notify.info("".concat(e," is already in contcts")):(u((0,x.w$)({name:e,number:t})),z().Notify.success("Contact added successfully"))}({name:t,number:o}):z().Notify.failure("Empty input!")},children:(0,w.jsxs)("div",{children:[(0,w.jsx)("label",{htmlFor:"name",children:"Name"}),(0,w.jsx)(N,{id:"name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:m,value:t}),(0,w.jsx)("label",{htmlFor:"tel",children:"Number"}),(0,w.jsx)(N,{id:"tel",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:m,value:o}),(0,w.jsx)(C,{type:"submit",children:"Add contact"})]})})},F=t(1220),L=b.ZP.label(s||(s=(0,f.Z)(["\nfont-style: italic;\n"]))),I=function(){var n=(0,d.I0)();return(0,w.jsxs)("div",{children:[(0,w.jsx)(L,{style:{marginRight:"14px"},htmlFor:"filter",children:"Find contacts by name"}),(0,w.jsx)(N,{type:"text",name:"input",id:"filter",onChange:function(e){var t=e.currentTarget;n((0,F.xO)(t.value))}})]})},$=t(1552),_=function(){var n=(0,d.I0)(),e=(0,d.v9)(u),t=(0,d.v9)(p);return(0,c.useEffect)((function(){n((0,x.m$)())}),[n]),(0,w.jsx)($.$,{children:(0,w.jsxs)($.w,{children:[(0,w.jsx)("h2",{children:"Phonebook"}),(0,w.jsx)(A,{}),(0,w.jsx)("h2",{children:"Contacts"}),(0,w.jsx)(I,{}),e&&!t?(0,w.jsx)(k,{}):(0,w.jsx)(m.a,{})]})})}}}]);
//# sourceMappingURL=742.76e8c8be.chunk.js.map