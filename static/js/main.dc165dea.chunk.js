(this.webpackJsonpchatapp=this.webpackJsonpchatapp||[]).push([[0],{113:function(e,a){},116:function(e,a,t){},159:function(e,a,t){},160:function(e,a,t){},161:function(e,a,t){},162:function(e,a,t){},163:function(e,a,t){},164:function(e,a,t){"use strict";t.r(a);var n,c=t(0),r=t.n(c),l=t(61),s=t.n(l),m=t(19),o=t(1),i=t(8),u=(t(73),function(){var e=Object(c.useState)(""),a=Object(i.a)(e,2),t=a[0],n=a[1],l=Object(c.useState)(""),s=Object(i.a)(l,2),o=s[0],u=s[1];return r.a.createElement("div",{className:"joinOuterContainer"},r.a.createElement("div",{className:"joinInnerContainer"},r.a.createElement("h1",{className:"heading"},"Join"),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Name",className:"joinInput",type:"text",onChange:function(e){return n(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Room",className:"joinInput",type:"text",onChange:function(e){return u(e.target.value)}})),r.a.createElement(m.b,{onClick:function(e){return t&&o?null:e.preventDefault()},to:"/chat?name=".concat(t,"&room=").concat(o)},r.a.createElement("button",{className:"button mt-20",type:"submit"},"Sign In"))))}),A=t(67),E=t(63),p=t.n(E),f=t(64),g=t.n(f),d=t(20),h=t.n(d),v=(t(116),function(e){var a=e.users;return r.a.createElement("div",{className:"textContainer"},r.a.createElement("div",null,r.a.createElement("h1",null,"Realtime Chat Application ",r.a.createElement("span",{role:"img","aria-label":"emoji"},"\ud83d\udcac")),r.a.createElement("h2",null,"Created with React, Express, Node and Socket.IO ",r.a.createElement("span",{role:"img","aria-label":"emoji"},"\u2764\ufe0f")),r.a.createElement("h2",null,"Try it out right now! ",r.a.createElement("span",{role:"img","aria-label":"emoji"},"\u2b05\ufe0f"))),a?r.a.createElement("div",null,r.a.createElement("h1",null,"People currently chatting:"),r.a.createElement("div",{className:"activeContainer"},r.a.createElement("h2",null,a.map((function(e){var a=e.name;return r.a.createElement("div",{key:a,className:"activeItem"},a,r.a.createElement("img",{alt:"Online Icon",src:h.a}))}))))):null)}),N=t(65),b=t.n(N),j=(t(159),t(33)),C=t.n(j),O=function(e){var a=e.message,t=a.user,n=a.text,c=!1,l=e.name.trim().toLowerCase();return t===l&&(c=!0),c?r.a.createElement("div",{className:"messageContainer justifyEnd"},r.a.createElement("p",{className:"sentText pr-10"},l),r.a.createElement("div",{className:"messageBox backgroundBlue"},r.a.createElement("p",{className:"messageText"},C.a.emojify(n)))):r.a.createElement("div",{className:"messageContainer justifyStart"},r.a.createElement("div",{className:"messageBox backgroundLigh"},r.a.createElement("p",{className:"messageText colorDark"},C.a.emojify(n))),r.a.createElement("p",{className:"sentText pl-10"},t))},I=(t(160),function(e){var a=e.messages,t=e.name;return r.a.createElement(b.a,{className:"messages"},a.map((function(e,a){return r.a.createElement("div",{key:a},r.a.createElement(O,{message:e,name:t}))})))}),S=(t(161),t(66)),x=t.n(S),y=function(e){var a=e.room,t=e.name;return r.a.createElement("div",{className:"infoBar"},r.a.createElement("div",{className:"leftInnerContainer"},r.a.createElement("img",{className:"onlineIcon",src:h.a,alt:""}),r.a.createElement("h3",null," ",a," and ",t)),r.a.createElement("div",{className:"rightInnerContainer"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:x.a,alt:""}))))},k=(t(162),function(e){var a=e.message,t=e.setMessage,n=e.sendMessage;return r.a.createElement("form",{className:"form"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Type a message....",value:a,onChange:function(e){return t(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?n(e):null}}),r.a.createElement("button",{className:"sendButton",onClick:function(e){return n(e)}},"Send"))}),R=(t(163),function(e){var a=e.location,t=Object(c.useState)(""),l=Object(i.a)(t,2),s=l[0],m=l[1],o=Object(c.useState)(""),u=Object(i.a)(o,2),E=u[0],f=u[1],d=Object(c.useState)(""),h=Object(i.a)(d,2),N=h[0],b=h[1],j=Object(c.useState)(""),C=Object(i.a)(j,2),O=C[0],S=C[1],x=Object(c.useState)([]),R=Object(i.a)(x,2),w=R[0],B=R[1],M="https://nokuchat-application.herokuapp.com/";Object(c.useEffect)((function(){var e=p.a.parse(a.search),t=e.name,c=e.room;n=g()(M),f(c),m(t),n.emit("join",{name:t,room:c},(function(e){e&&alert(e)}))}),[M,a.search]),Object(c.useEffect)((function(){n.on("message",(function(e){B((function(a){return[].concat(Object(A.a)(a),[e])}))})),n.on("roomData",(function(e){var a=e.users;b(a)}))}),[]);return r.a.createElement("div",{className:"outerContainer"},r.a.createElement("div",{className:"container"},r.a.createElement(y,{room:E}),r.a.createElement(I,{messages:w,name:s}),r.a.createElement(k,{message:O,setMessage:S,sendMessage:function(e){e.preventDefault(),O&&n.emit("sendMessage",O,(function(){return S("")}))}})),r.a.createElement(v,{users:N}))}),w=function(){return r.a.createElement(m.a,null,r.a.createElement(o.a,{path:"/",exact:!0,component:u}),r.a.createElement(o.a,{path:"/chat",exact:!0,component:R}))};s.a.render(r.a.createElement(w,null),document.querySelector("#root"))},20:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII="},66:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII="},68:function(e,a,t){e.exports=t(164)},73:function(e,a,t){}},[[68,1,2]]]);
//# sourceMappingURL=main.dc165dea.chunk.js.map