(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[391],{5891:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sheet-visualizer",function(){return t(1839)}])},1709:function(e,n,t){"use strict";t.d(n,{P:function(){return o}});var s=t(6042),r=t(828),i=t(5893),a=t(5055);function o(e){var n=e.onChange,t=e.value,o=e.children,l=e.style,c=(0,r.Z)((0,a.F)(),1)[0];return(0,i.jsx)("select",{onChange:n,value:t,className:"select",style:(0,s.Z)({backgroundImage:"url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24' fill='".concat(c.getText("primary").hex().replace("#","%23"),"'><path d='M0 0h24v24H0z' fill='none'/><path d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z'/></svg>\")")},l),children:o})}},3544:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var s=t(828),r=t(5893),i=t(5055);function a(e){var n=e.checked,t=e.onChange,a=e.styleOuter,o=(0,s.Z)((0,i.F)(),1)[0];return(0,r.jsx)("button",{className:"switch-wrapper",onClick:function(){return t(!n)},style:a||{},"aria-label":n?"Switch to off":"Switch to on",children:(0,r.jsx)("div",{className:"switch-inner ".concat(n?"switch-inner-on":""),style:{backgroundColor:(n?o.get("accent"):o.layer("primary",.4)).toString()}})})}},6390:function(e,n,t){"use strict";t.d(n,{k:function(){return i}});var s=t(5893),r=t(369);function i(e){var n=e.excludeMenu,t=e.children,i=e.className,a=e.style;return(0,s.jsxs)("div",{className:"default-page "+(void 0===i?"":i),style:a,children:[!(void 0!==n&&n)&&(0,s.jsx)(r.O,{}),(0,s.jsx)("div",{className:"default-content",children:t})]})}},781:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var s=t(5893);function r(e){var n=e.title,t=e.current,r=e.children,i=e.id;return(0,s.jsxs)("div",{className:t===i?"menu-panel menu-panel-visible":"menu-panel",children:[n&&(0,s.jsx)("div",{className:"menu-title",children:n}),(0,s.jsx)("div",{className:"panel-content-wrapper",children:r})]})}},369:function(e,n,t){"use strict";t.d(n,{O:function(){return c}});var s=t(5893),r=t(9583),i=t(7671),a=t(9255),o=t(2809),l=t(1163);function c(e){var n=e.children,t=e.className,c=(0,l.useRouter)();return(0,s.jsx)("div",{className:"menu-wrapper "+(void 0===t?"":t),children:(0,s.jsxs)("div",{className:"menu menu-visible",style:{justifyContent:"flex-end"},children:[a.U.hasNavigated&&(0,s.jsx)(i.s,{style:{marginBottom:"auto"},onClick:function(){c.back()},ariaLabel:"Go back",children:(0,s.jsx)(r.x_l,{className:"icon"})}),void 0===n?void 0:n,(0,s.jsx)(i.s,{ariaLabel:"Go to discord",children:(0,s.jsx)("a",{href:"https://discord.gg/Arsf65YYHq",target:"_blank",rel:"noreferrer",children:(0,s.jsx)(r.j2d,{className:"icon"})})}),(0,s.jsx)(i.s,{onClick:o.I.open,ariaLabel:"Open home menu",children:(0,s.jsx)(r.xng,{className:"icon"})})]})})}},4347:function(e,n,t){"use strict";t.d(n,{C:function(){return l}});var s=t(828),r=t(5893),i=t(2169),a=t(7294),o=new(t(5839)).ZP,l=(0,a.memo)(function(e){var n=e.chunk,t=e.rows,l=e.hasText,c=e.selected,u=e.theme,d=e.keyboardLayout,h="Genshin"===i.iC?7:5,m=(0,s.Z)((0,a.useState)("var(--primary)"),2),f=m[0],v=m[1];(0,a.useEffect)(function(){v(u.layer("primary",.2).hex())},[u]);var x=Array(h*t).fill(!1);return n.notes.forEach(function(e){x[e.index]=!0}),(0,r.jsx)("div",{className:"frame-outer ".concat(0===n.notes.length?"displayer-ball":""),style:c?{borderColor:"var(--accent)"}:{},children:0===n.notes.length?(0,r.jsx)("div",{}):(0,r.jsx)("div",{className:"displayer-frame",style:{gridTemplateColumns:"repeat(".concat(h,",1fr)")},children:x.map(function(e,n){return(0,r.jsx)("div",{className:e?"frame-note-s":"frame-note-ns",style:e?{}:{backgroundColor:f},children:e&&l?o.getNoteText(n,d,"C"):null},n)})})})},function(e,n){return e.chunk===n.chunk&&e.rows===n.rows&&e.hasText===n.hasText&&e.selected===n.selected&&e.theme===n.theme})},1839:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return H}});var s=t(828),r=t(6305),i=t(5893),a=t(7294),o=t(2169),l=t(6743),c=t(3544),u=t(5453),d=t(2881),h=t(8461),m=t(4339),f=t(7568),v=t(6042),x=t(9396),g=t(655),p=t(125),j=t(7008),y=t(9255),N=t(7671),C=t(9583),w=t(2809),k=t(781),b=t(7053),S=t(1182),Z=t(1163);function _(e){var n=e.currentSong,t=e.onSongLoaded,r=(0,s.Z)((0,j.n)(),1)[0],o=(0,Z.useRouter)(),l=(0,s.Z)((0,a.useState)(""),2),c=l[0],u=l[1],d=(0,b.ZP)(function(){u("")},{ignoreFocusable:!0,active:""!==c});return(0,i.jsxs)("div",{className:"menu-wrapper noprint",ref:d,children:[(0,i.jsxs)("div",{className:"menu menu-visible",style:{justifyContent:"flex-end"},children:[y.U.hasNavigated&&""===c&&(0,i.jsx)(N.s,{ariaLabel:"Go back",style:{marginBottom:"auto"},onClick:function(){o.back()},children:(0,i.jsx)(C.x_l,{className:"icon"})}),""!==c&&(0,i.jsx)(N.s,{ariaLabel:"Close menu",style:{marginBottom:"auto"},onClick:function(){return u("")},children:(0,i.jsx)(C.aHS,{className:"icon"})}),(0,i.jsx)(N.s,{onClick:function(){u("Songs"===c?"":"Songs")},ariaLabel:"Open songs menu",children:(0,i.jsx)(C.HcQ,{className:"icon"})}),(0,i.jsx)(N.s,{onClick:w.I.open,ariaLabel:"Open home menu",children:(0,i.jsx)(C.xng,{className:"icon"})})]}),(0,i.jsx)("div",{className:"Songs"===c?"side-menu menu-open":"side-menu",children:(0,i.jsx)(k.Z,{children:(0,i.jsx)(p.G,{songs:r,className:"noprint",exclude:["vsrg"],SongComponent:L,componentProps:{current:n,onClick:t}})})})]})}function L(e){var n=e.data,t=e.current,s=e.onClick,r=(null==t?void 0:t.id)===n.id?{backgroundColor:"rgb(124, 116, 106)"}:{};return(0,i.jsx)("div",{className:"song-row",style:(0,x.Z)((0,v.Z)({},r),{padding:"0.5rem 0.8rem"}),onClick:(0,f.Z)(function(){var e;return(0,g.__generator)(this,function(t){switch(t.label){case 0:return m.kg.showPill("Loading song..."),[4,S.v.getOneSerializedFromStorable(n)];case 1:if(!(e=t.sent()))return[2,m.kg.error("Could not load song")];return s(e),setTimeout(function(){return m.kg.hidePill()},300),[2]}})}),children:(0,i.jsx)("div",{className:"song-name",children:n.name})})}var P=t(4347),T=t(1438);t(8778);var E=t(5839),O=function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;(0,T.Z)(this,e),this.notes=[],this.delay=0,this.notes=n,this.delay=t},G=t(4995),I=t(6390),z=t(5055),B=t(1709),F={joined:50,pause:400},M=new E.ZP;function H(){var e=function(e){var n=g+e,t=document.querySelector(".frame-outer");t&&!(n<1)&&(t.getBoundingClientRect().width<50&&1===e||p(n))},n=(0,s.Z)((0,z.F)(),1)[0],t=(0,s.Z)((0,a.useState)([]),2),f=t[0],v=t[1],x=(0,s.Z)((0,a.useState)(7),2),g=x[0],p=x[1],j=(0,s.Z)((0,a.useState)(null),2),y=j[0],N=j[1],C=(0,s.Z)((0,a.useState)(!1),2),w=C[0],k=C[1],b=(0,s.Z)((0,a.useState)(""),2),Z=b[0],L=b[1],T=(0,s.Z)((0,a.useState)("Genshin"===o.iC?"Keyboard layout":"ABC"),2),E=T[0],H=T[1],R=(0,a.useCallback)(function(e,n){var t=M.getNoteText(e,n,"C");return"Genshin"===o.iC?t.toLowerCase():t.toUpperCase()},[]),A=(0,a.useCallback)(function(e,n){try{var t=S.v.parseSong(e);if(!(0,l.$9)(t))return;for(var s=(t instanceof d.M?t:t.toRecordedSong()).notes,i=[],a=0,c="",h=0;s.length>0;h++)!function(e){for(var t=new O([s.shift()]),l=t.notes.length>0?t.notes[0].time:0,u=0;u<s.length&&u<20;u++)s[u].time-t.notes[0].time-F.joined<0&&(t.notes.push(s.shift()),u--);t.delay=a,a=s.length>0?s[0].time-l:0;var d=Math.floor(t.delay/F.pause);if(i.push.apply(i,(0,r.Z)(Array(d).fill(0).map(function(){return new O}))),i.push(t),c+=d>2?" \n\n":"- ".repeat(d),t.notes.length>1){var h=t.notes.map(function(e){return R(e.index,n)}).join("");c+="Genshin"===o.iC?"[".concat(h,"] "):"".concat(h," ")}else t.notes.length>0&&(c+="".concat(R(t.notes[0].index,n)," "))}(0);L(c),v(i)}catch(e){console.error(e),m.kg.error("Error visualizing song")}u.Z.songEvent({type:"visualize"})},[R]);return(0,a.useEffect)(function(){y&&A(y,E)},[y,w,E,A]),(0,i.jsxs)(I.k,{style:{overflowY:"scroll"},excludeMenu:!0,children:[(0,i.jsx)(G.D,{text:"Sheet Visualizer"}),(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:[(0,i.jsx)(_,{onSongLoaded:N,currentSong:y}),(0,i.jsxs)("div",{className:"displayer-buttons-wrapper noprint",children:[(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[(0,i.jsx)("div",{children:"Note names"}),(0,i.jsx)(c.Z,{checked:w,onChange:k}),w&&(0,i.jsx)(B.P,{value:E,onChange:function(e){return H(e.target.value)},children:o.HI.map(function(e){return(0,i.jsx)("option",{value:e,children:e},e)})})]}),(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:["Per row: ",g,(0,i.jsx)("button",{className:"displayer-plus-minus",onClick:function(){return e(-1)},children:"-"}),(0,i.jsx)("button",{className:"displayer-plus-minus",onClick:function(){return e(1)},children:"+"})]})]}),(0,i.jsx)("h1",{className:"onprint",children:y?null==y?void 0:y.name:""}),(0,i.jsxs)("div",{style:{width:"100%"},className:"noprint",children:[(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,i.jsx)("h2",{className:"text-ellipsis",children:y?y.name:"No song selected"}),y&&(0,i.jsx)(h.J,{onClick:function(){return window.print()},style:{minWidth:"fit-content",marginLeft:"0.4rem"},children:"Print as PDF"})]}),(0,i.jsx)("div",{style:{color:"var(--background-text)"},children:"Select a song from the menu on the left. Remember that you can learn a song with the interactive practice tool in the Player"})]}),(0,i.jsx)("div",{className:"displayer-frame-wrapper",style:{gridTemplateColumns:"repeat(".concat(g,",1fr)")},children:f.map(function(e,t){return(0,i.jsx)(P.C,{keyboardLayout:E,chunk:e,rows:3,theme:n,hasText:w},t)})}),Z.trim().length>0&&(0,i.jsx)("pre",{className:"text-notation-wrapper",children:Z})]})]})}}},function(e){e.O(0,[962,774,888,179],function(){return e(e.s=5891)}),_N_E=e.O()}]);