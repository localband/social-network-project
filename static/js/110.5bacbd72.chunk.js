"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[110],{6110:function(s,e,i){i.r(e),i.d(e,{default:function(){return M}});i(2791);var n=i(8281),a="Dialogs_dialogs__XPD5e",o="Dialogs_dialogsItems__1VJ6z",t="Dialogs_dialogsItemsBox__BAYre",d="Dialogs_dialogsItemsLink__h1M1s",l="Dialogs_dialogsItemsActiveLink__gHggg",r="Dialogs_messages__YjIM3",g="Dialogs_message__5j4k1",c=i(184),u=function(s){return(0,c.jsx)("div",{className:g,children:s.message})},m=i(1523),_=function(s){var e="/dialogs/"+s.id;return(0,c.jsxs)("div",{className:t,children:[(0,c.jsx)("img",{src:"https://static.probusiness.io/720x480c/n/03/d/38097027_439276526579800_2735888197547458560_n.jpg"}),(0,c.jsx)(m.OL,{to:e,className:function(s){return s.isActive?l:d},children:s.name})]})},h=i(9271),j=i(6139),f=i(704),x=i(9086),p=i(5304),v=(0,p.D)(350),D=(0,f.Z)({form:"dialogAddMessageForm"})((function(s){return(0,c.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,c.jsx)("div",{children:(0,c.jsx)(j.Z,{placeholder:"Type your message",name:"newMessageBody",validate:[p.C,v],component:x.g})}),(0,c.jsx)("div",{children:(0,c.jsx)("button",{children:"Send message"})})]})})),b=function(s){var e=s.dialogsPage,i=e.messages.map((function(s){return(0,c.jsx)(u,{message:s.message},s.id)})),n=e.dialogs.map((function(s){return(0,c.jsx)(_,{name:s.name,id:s.id},s.id)}));return s.isAuth?(0,c.jsxs)("div",{className:a,children:[(0,c.jsx)("div",{className:o,children:n}),(0,c.jsx)("div",{className:r,children:i}),(0,c.jsx)(D,{onSubmit:function(e){s.sendMessage(e.newMessageBody)}})]}):(0,c.jsx)(h.l_,{to:"/login"})},k=i(364),A=i(1548),M=(0,i(7781).qC)((0,k.$j)((function(s){return{dialogsPage:s.dialogsPage,isAuth:s.auth.isAuth}}),(function(s){return{sendMessage:function(e){s((0,n.X)(e))}}})),A.D)(b)}}]);
//# sourceMappingURL=110.5bacbd72.chunk.js.map