(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[593],{1231:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/theme",function(){return t(9337)}])},6390:function(e,r,t){"use strict";t.d(r,{k:function(){return o}});var n=t(5893),a=t(369);function o(e){var r=e.excludeMenu,t=e.children,o=e.className,c=e.style;return(0,n.jsxs)("div",{className:"default-page "+(void 0===o?"":o),style:c,children:[!(void 0!==r&&r)&&(0,n.jsx)(a.O,{}),(0,n.jsx)("div",{className:"default-content",children:t})]})}},369:function(e,r,t){"use strict";t.d(r,{O:function(){return s}});var n=t(5893),a=t(9583),o=t(7671),c=t(9255),i=t(2809),l=t(1163);function s(e){var r=e.children,t=e.className,s=(0,l.useRouter)();return(0,n.jsx)("div",{className:"menu-wrapper "+(void 0===t?"":t),children:(0,n.jsxs)("div",{className:"menu menu-visible",style:{justifyContent:"flex-end"},children:[c.U.hasNavigated&&(0,n.jsx)(o.s,{style:{marginBottom:"auto"},onClick:function(){s.back()},ariaLabel:"Go back",children:(0,n.jsx)(a.x_l,{className:"icon"})}),void 0===r?void 0:r,(0,n.jsx)(o.s,{ariaLabel:"Go to discord",children:(0,n.jsx)("a",{href:"https://discord.gg/Arsf65YYHq",target:"_blank",rel:"noreferrer",children:(0,n.jsx)(a.j2d,{className:"icon"})})}),(0,n.jsx)(o.s,{onClick:i.I.open,ariaLabel:"Open home menu",children:(0,n.jsx)(a.xng,{className:"icon"})})]})})}},9337:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return Z}});var n=t(7568),a=t(6042),o=t(9396),c=t(828),i=t(655),l=t(5893),s=t(7294),u=t(3564),f=t(8461),d=t(1446),h=t(7447),m=t(2926),p=t(750),v=t(6743),g=t(6767),x=t.n(g),b=t(5651),k=t(2169),_=t(9583);function w(e){var r=e.name,t=e.value,n=e.onChange,a=e.isModified,o=e.setSelectedProp,i=e.isSelected,d=e.handlePropReset,h=e.canReset,m=function(e){w(x()(e))},p=(0,c.Z)((0,s.useState)(x()(t)),2),g=p[0],w=p[1];return(0,s.useEffect)(function(){w(x()(t))},[t]),(0,l.jsxs)("div",{className:"theme-row ".concat(i?"selected":""),style:i?{backgroundColor:g.toString(),color:g.isDark()?k.kx.text.light:k.kx.text.dark}:{},children:[(0,l.jsx)("div",{children:(0,v.kC)(r.split("_").join(" "))}),(0,l.jsxs)("div",{className:"color-input-wrapper",children:[h&&a&&(0,l.jsx)(f.J,{onClick:function(){return d(r)},toggled:a,className:"theme-reset",children:"RESET"}),i?(0,l.jsxs)("div",{className:"color-picker",children:[(0,l.jsx)(b.L_,{onChange:m,color:g.hexa()}),(0,l.jsxs)("div",{className:"color-picker-row",children:[(0,l.jsx)("div",{className:"color-picker-input",style:{backgroundColor:g.toString(),color:g.isDark()?k.kx.text.light:k.kx.text.dark},children:(0,l.jsx)(b.ZE,{prefixed:!0,alpha:!0,onChange:m,color:1===g.alpha()?g.hex():g.hexa(),style:{color:g.isDark()?k.kx.text.light:k.kx.text.dark}})}),(0,l.jsx)("button",{className:"color-picker-check",onClick:function(){w(x()(t)),n(r,t),o("")},style:{backgroundColor:g.toString(),color:g.isDark()?k.kx.text.light:k.kx.text.dark},children:(0,l.jsx)(_.aHS,{size:16})}),(0,l.jsx)("button",{className:"color-picker-check",onClick:function(){n(r,1===g.alpha()?g.hex():g.hexa()),o("")},style:{backgroundColor:g.toString(),color:g.isDark()?k.kx.text.light:k.kx.text.dark},children:(0,l.jsx)(_.l_A,{size:16})})]})]}):(0,l.jsx)("div",{onClick:function(){return o(r)},className:"color-preview",style:{backgroundColor:u.f6.get(r).toString(),color:u.f6.getText(r).toString()},children:"Text"})]})]})}var y=t(3465),j=t.n(y),C=t(2132),N=t(4339);function E(e){var r=e.theme,t=e.onClick,n=e.onDelete,o=e.current,i=e.downloadable,s=r.other.backgroundImageMain||r.other.backgroundImageComposer;return(0,l.jsxs)("div",{className:"theme-preview",onClick:function(){t&&t(r)},style:(0,a.Z)({backgroundColor:r.data.background.value,color:r.data.background.text},o?{outline:"solid 0.2rem var(--accent)"}:{boxShadow:"0px 0px 10px 0px rgba(0,0,0,0.4)"}),children:[(0,l.jsx)("div",{className:"theme-preview-bg",style:{backgroundImage:"url(".concat(s,")"),zIndex:1}}),(0,l.jsxs)("div",{className:"theme-preview-row",style:{backgroundColor:x()(r.data.background.value).fade(.3).toString(),zIndex:2,textShadow:s?"0px 0px 10px rgba(0,0,0,0.4)":"none"},children:[(0,l.jsx)("div",{className:"text-ellipsis",style:{zIndex:2,padding:"0.4rem 0.2rem"},children:r.other.name}),(0,l.jsxs)("div",{style:{display:"flex",marginLeft:"0.2rem",zIndex:2,padding:"0.4rem 0.2rem"},children:[i&&(0,l.jsx)(_.aBF,{color:r.data.background.text,onClick:function(e){e.stopPropagation(),N.kg.success('The theme "'.concat(r.other.name,'" was downloaded')),C.bV.downloadTheme(r,"".concat(r.other.name||k.iC,".theme"))},size:18,cursor:"pointer"}),n&&(0,l.jsx)(_.Xm5,{onClick:function(e){e.stopPropagation(),n(r)},size:18,style:{marginLeft:"0.5rem"},color:"var(--red)",cursor:"pointer"})]})]}),(0,l.jsx)("div",{className:"theme-preview-colors",style:{zIndex:2},children:Object.entries(r.data).map(function(e){var r=(0,c.Z)(e,2),t=r[0],n=r[1];return(0,l.jsx)("div",{style:{backgroundColor:n.value,color:n.text}},t)})})]})}function I(e){var r=e.name,t=e.onChange,n=e.disabled,a=e.value,o=e.onLeave;return(0,l.jsxs)("div",{className:"theme-row",children:[(0,l.jsx)("div",{children:r}),(0,l.jsx)("input",{className:"theme-input",style:{width:"9rem"},placeholder:"Write here",disabled:n,value:a,onPointerDown:function(){n&&N.kg.warn("Create a new theme first")},onBlur:function(){o&&o()},onChange:function(e){return t(e.target.value)}})]})}var M=t(5055),S=t(6880),T=t(4995),z=t(6390),O=t(3707),L=t(5352),Z=function(){var e=(0,c.Z)((0,M.F)(),1)[0],r=(0,O.ih)(L.N.themes),t=(0,c.Z)((0,s.useState)(""),2),v=t[0],g=t[1],x=(0,c.Z)((0,s.useState)("player"),2),b=x[0],k=x[1];function y(e,r){return Z.apply(this,arguments)}function Z(){return(Z=(0,n.Z)(function(e,r){var t;return(0,i.__generator)(this,function(n){switch(n.label){case 0:if(u.f6.isEditable())return[3,3];if(r===u.f6.get(e).toString())return[2];return[4,(0,p.cJ)("Creating a new theme from this default theme, write the name:")];case 1:if(null===(t=n.sent()))return[2];return[4,function(e){return P.apply(this,arguments)}(t)];case 2:n.sent(),n.label=3;case 3:return u.f6.set(e,r),[4,u.f6.save()];case 4:return n.sent(),[2]}})})).apply(this,arguments)}function D(e){return R.apply(this,arguments)}function R(){return(R=(0,n.Z)(function(e){return(0,i.__generator)(this,function(r){switch(r.label){case 0:return u.f6.reset(e),[4,u.f6.save()];case 1:return r.sent(),[2]}})})).apply(this,arguments)}function H(){return(H=(0,n.Z)(function(e){var r,t,n,a,o,c,l;return(0,i.__generator)(this,function(i){switch(i.label){case 0:r=!0,t=!1,n=void 0,i.label=1;case 1:i.trys.push([1,8,9,10]),a=e[Symbol.iterator](),i.label=2;case 2:if(r=(o=a.next()).done)return[3,7];c=o.value.data,i.label=3;case 3:return i.trys.push([3,5,,6]),[4,C.bV.importAndLog(c)];case 4:return i.sent(),[3,6];case 5:return i.sent(),B(),[3,6];case 6:return r=!0,[3,2];case 7:return[3,10];case 8:return l=i.sent(),t=!0,n=l,[3,10];case 9:try{r||null==a.return||a.return()}finally{if(t)throw n}return[7];case 10:return[2]}})})).apply(this,arguments)}var B=(0,s.useCallback)(function(e){e&&console.error(e),N.kg.error("There was an error importing this theme, is it the correct file?",4e3)},[]);function P(){return(P=(0,n.Z)(function(e){var r;return(0,i.__generator)(this,function(t){switch(t.label){case 0:return(r=new u.Yu(e)).state=j()(u.f6.state),r.state.other.name=e,r.state.editable=!0,[4,F(r)];case 1:return t.sent(),[2]}})})).apply(this,arguments)}function A(){return(A=(0,n.Z)(function(){var e;return(0,i.__generator)(this,function(r){switch(r.label){case 0:return[4,(0,p.cJ)("How do you want to name the theme?")];case 1:if(!(null!=(e=r.sent())))return[3,3];return[4,F(new u.Yu(e))];case 2:r.sent(),r.label=3;case 3:return[2]}})})).apply(this,arguments)}function F(e){return Y.apply(this,arguments)}function Y(){return(Y=(0,n.Z)(function(e){var r,t;return(0,i.__generator)(this,function(n){switch(n.label){case 0:return r=e.serialize(),[4,L.N.addTheme(r)];case 1:return t=n.sent(),r.id=t,u.f6.loadFromJson(r,t),u.f6.save(),[2,t]}})})).apply(this,arguments)}function q(e){return J.apply(this,arguments)}function J(){return(J=(0,n.Z)(function(e){return(0,i.__generator)(this,function(r){switch(r.label){case 0:return[4,(0,p.jH)("Are you sure you want to delete the theme ".concat(e.other.name,"?"))];case 1:if(!r.sent())return[3,3];return u.f6.getId()===e.id&&u.f6.wipe(),[4,L.N.removeThemeById(e.id)];case 2:r.sent(),r.label=3;case 3:return[2]}})})).apply(this,arguments)}return(0,l.jsxs)(z.k,{children:[(0,l.jsx)(T.D,{text:"Themes"}),(0,l.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,l.jsx)(d.G,{onPick:function(e){return H.apply(this,arguments)},as:"json",onError:B,children:(0,l.jsx)(f.J,{style:{margin:"0.25rem"},children:"Import Theme"})}),(0,l.jsx)("div",{style:{marginLeft:"1rem"},children:u.f6.getOther("name")})]}),(0,l.jsx)("div",{style:{marginTop:"2.2rem"}}),e.toArray().map(function(r){return(0,s.createElement)(w,(0,o.Z)((0,a.Z)({},r),{key:r.name,isSelected:v===r.name,canReset:u.f6.isEditable(),isModified:!e.isDefault(r.name),onChange:y,setSelectedProp:g,handlePropReset:D}))}),(0,l.jsx)(I,{name:"Background image (URL)",value:e.getOther("backgroundImageMain"),disabled:!u.f6.isEditable(),onChange:function(e){return u.f6.setBackground(e,"Main")}}),(0,l.jsx)(I,{name:"Composer Background image (URL)",value:e.getOther("backgroundImageComposer"),disabled:!u.f6.isEditable(),onChange:function(e){return u.f6.setBackground(e,"Composer")}}),(0,l.jsx)(I,{name:"Theme name",value:e.getOther("name"),disabled:!u.f6.isEditable(),onChange:function(e){return u.f6.setOther("name",e)},onLeave:function(){return u.f6.save()}}),(0,l.jsxs)("div",{style:{textAlign:"center",marginTop:"1rem"},children:[(0,l.jsx)("span",{style:{color:"var(--red)"},children:"Warning"}),": GIF backgrounds and opaque (transparent) colors could reduce performance"]}),(0,l.jsx)("div",{style:{fontSize:"1.5rem",marginTop:"2rem"},children:"Your Themes"}),(0,l.jsxs)("div",{className:"theme-preview-wrapper",children:[r.map(function(e){return(0,l.jsx)(E,{onDelete:q,current:e.id===u.f6.getId(),theme:e,downloadable:!0,onClick:function(e){u.f6.loadFromTheme(e),u.f6.save()}},e.id)}),(0,l.jsxs)("button",{className:"new-theme",onClick:function(){return A.apply(this,arguments)},children:[(0,l.jsx)(_.wEH,{size:30}),"New theme"]})]}),(0,l.jsx)("div",{style:{fontSize:"1.5rem",marginTop:"2rem"},children:"Default Themes"}),(0,l.jsx)("div",{className:"theme-preview-wrapper",children:u.kG.map(function(e){return(0,l.jsx)(E,{theme:e,current:e.id===u.f6.getId(),onClick:function(e){u.f6.loadFromTheme(e),u.f6.save()}},e.id)})}),(0,l.jsx)("div",{style:{fontSize:"1.5rem",marginTop:"2rem"},children:"Preview"}),(0,l.jsxs)("div",{className:"theme-app-preview",children:[(0,l.jsx)(f.J,{className:"box-shadow",toggled:!0,style:{position:"absolute",right:0,top:0,zIndex:90},onClick:function(){return k("composer"===b?"player":"composer")},children:"composer"===b?"View player":"View composer"}),"player"===b&&(0,l.jsx)(S.Z,{page:"Main",children:(0,l.jsx)(h.default,{})}),"composer"===b&&(0,l.jsx)(S.Z,{page:"Composer",children:(0,l.jsx)(m.default,{inPreview:!0})})]})]})}},5651:function(e,r,t){"use strict";t.d(r,{L_:function(){return A},ZE:function(){return J},gW:function(){return R}});var n=t(7294);function a(){return(a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function o(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r.indexOf(t=o[n])>=0||(a[t]=e[t]);return a}function c(e){var r=(0,n.useRef)(e),t=(0,n.useRef)(function(e){r.current&&r.current(e)});return r.current=e,t.current}var i=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=1),e>t?t:e<r?r:e},l=function(e){return"touches"in e},s=function(e){return e&&e.ownerDocument.defaultView||self},u=function(e,r,t){var n=e.getBoundingClientRect(),a=l(r)?function(e,r){for(var t=0;t<e.length;t++)if(e[t].identifier===r)return e[t];return e[0]}(r.touches,t):r;return{left:i((a.pageX-(n.left+s(e).pageXOffset))/n.width),top:i((a.pageY-(n.top+s(e).pageYOffset))/n.height)}},f=function(e){l(e)||e.preventDefault()},d=n.memo(function(e){var r=e.onMove,t=e.onKey,i=o(e,["onMove","onKey"]),d=(0,n.useRef)(null),h=c(r),m=c(t),p=(0,n.useRef)(null),v=(0,n.useRef)(!1),g=(0,n.useMemo)(function(){var e=function(e){f(e),(l(e)?e.touches.length>0:e.buttons>0)&&d.current?h(u(d.current,e,p.current)):t(!1)},r=function(){return t(!1)};function t(t){var n=v.current,a=s(d.current),o=t?a.addEventListener:a.removeEventListener;o(n?"touchmove":"mousemove",e),o(n?"touchend":"mouseup",r)}return[function(e){var r=e.nativeEvent,n=d.current;if(n&&(f(r),(!v.current||l(r))&&n)){if(l(r)){v.current=!0;var a=r.changedTouches||[];a.length&&(p.current=a[0].identifier)}n.focus(),h(u(n,r,p.current)),t(!0)}},function(e){var r=e.which||e.keyCode;r<37||r>40||(e.preventDefault(),m({left:39===r?.05:37===r?-.05:0,top:40===r?.05:38===r?-.05:0}))},t]},[m,h]),x=g[0],b=g[1],k=g[2];return(0,n.useEffect)(function(){return k},[k]),n.createElement("div",a({},i,{onTouchStart:x,onMouseDown:x,className:"react-colorful__interactive",ref:d,onKeyDown:b,tabIndex:0,role:"slider"}))}),h=function(e){return e.filter(Boolean).join(" ")},m=function(e){var r=e.color,t=e.left,a=e.top,o=h(["react-colorful__pointer",e.className]);return n.createElement("div",{className:o,style:{top:100*(void 0===a?.5:a)+"%",left:100*t+"%"}},n.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:r}}))},p=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=Math.pow(10,r)),Math.round(t*e)/t},v=function(e){return C(g(e))},g=function(e){return"#"===e[0]&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:4===e.length?p(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:8===e.length?p(parseInt(e.substring(6,8),16)/255,2):1}},x=function(e){return j(w(e))},b=function(e){var r=e.s,t=e.v,n=e.a,a=(200-r)*t/100;return{h:p(e.h),s:p(a>0&&a<200?r*t/100/(a<=100?a:200-a)*100:0),l:p(a/2),a:p(n,2)}},k=function(e){var r=b(e);return"hsl("+r.h+", "+r.s+"%, "+r.l+"%)"},_=function(e){var r=b(e);return"hsla("+r.h+", "+r.s+"%, "+r.l+"%, "+r.a+")"},w=function(e){var r=e.h,t=e.s,n=e.v,a=e.a;r=r/360*6,t/=100,n/=100;var o=Math.floor(r),c=n*(1-t),i=n*(1-(r-o)*t),l=n*(1-(1-r+o)*t),s=o%6;return{r:p(255*[n,i,c,c,l,n][s]),g:p(255*[l,n,n,i,c,c][s]),b:p(255*[c,c,l,n,n,i][s]),a:p(a,2)}},y=function(e){var r=e.toString(16);return r.length<2?"0"+r:r},j=function(e){var r=e.r,t=e.g,n=e.b,a=e.a,o=a<1?y(p(255*a)):"";return"#"+y(r)+y(t)+y(n)+o},C=function(e){var r=e.r,t=e.g,n=e.b,a=e.a,o=Math.max(r,t,n),c=o-Math.min(r,t,n),i=c?o===r?(t-n)/c:o===t?2+(n-r)/c:4+(r-t)/c:0;return{h:p(60*(i<0?i+6:i)),s:p(o?c/o*100:0),v:p(o/255*100),a:a}},N=n.memo(function(e){var r=e.hue,t=e.onChange,a=h(["react-colorful__hue",e.className]);return n.createElement("div",{className:a},n.createElement(d,{onMove:function(e){t({h:360*e.left})},onKey:function(e){t({h:i(r+360*e.left,0,360)})},"aria-label":"Hue","aria-valuenow":p(r),"aria-valuemax":"360","aria-valuemin":"0"},n.createElement(m,{className:"react-colorful__hue-pointer",left:r/360,color:k({h:r,s:100,v:100,a:1})})))}),E=n.memo(function(e){var r=e.hsva,t=e.onChange,a={backgroundColor:k({h:r.h,s:100,v:100,a:1})};return n.createElement("div",{className:"react-colorful__saturation",style:a},n.createElement(d,{onMove:function(e){t({s:100*e.left,v:100-100*e.top})},onKey:function(e){t({s:i(r.s+100*e.left,0,100),v:i(r.v-100*e.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+p(r.s)+"%, Brightness "+p(r.v)+"%"},n.createElement(m,{className:"react-colorful__saturation-pointer",top:1-r.v/100,left:r.s/100,color:k(r)})))}),I=function(e,r){if(e===r)return!0;for(var t in e)if(e[t]!==r[t])return!1;return!0},M=function(e,r){return e.toLowerCase()===r.toLowerCase()||I(g(e),g(r))};function S(e,r,t){var a=c(t),o=(0,n.useState)(function(){return e.toHsva(r)}),i=o[0],l=o[1],s=(0,n.useRef)({color:r,hsva:i});return(0,n.useEffect)(function(){if(!e.equal(r,s.current.color)){var t=e.toHsva(r);s.current={hsva:t,color:r},l(t)}},[r,e]),(0,n.useEffect)(function(){var r;I(i,s.current.hsva)||e.equal(r=e.fromHsva(i),s.current.color)||(s.current={hsva:i,color:r},a(r))},[i,e,a]),[i,(0,n.useCallback)(function(e){l(function(r){return Object.assign({},r,e)})},[])]}var T,z="undefined"!=typeof window?n.useLayoutEffect:n.useEffect,O=new Map,L=function(e){z(function(){var r=e.current?e.current.ownerDocument:document;if(void 0!==r&&!O.has(r)){var n=r.createElement("style");n.innerHTML='.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}',O.set(r,n);var a=T||t.nc;a&&n.setAttribute("nonce",a),r.head.appendChild(n)}},[])},Z=function(e){var r=e.className,t=e.colorModel,c=e.color,i=void 0===c?t.defaultColor:c,l=e.onChange,s=o(e,["className","colorModel","color","onChange"]),u=(0,n.useRef)(null);L(u);var f=S(t,i,l),d=f[0],m=f[1],p=h(["react-colorful",r]);return n.createElement("div",a({},s,{ref:u,className:p}),n.createElement(E,{hsva:d,onChange:m}),n.createElement(N,{hue:d.h,onChange:m,className:"react-colorful__last-control"}))},D={defaultColor:"000",toHsva:v,fromHsva:function(e){return x({h:e.h,s:e.s,v:e.v,a:1})},equal:M},R=function(e){return n.createElement(Z,a({},e,{colorModel:D}))},H=function(e){var r=e.className,t=e.hsva,a=e.onChange,o={backgroundImage:"linear-gradient(90deg, "+_(Object.assign({},t,{a:0}))+", "+_(Object.assign({},t,{a:1}))+")"},c=h(["react-colorful__alpha",r]),l=p(100*t.a);return n.createElement("div",{className:c},n.createElement("div",{className:"react-colorful__alpha-gradient",style:o}),n.createElement(d,{onMove:function(e){a({a:e.left})},onKey:function(e){a({a:i(t.a+e.left)})},"aria-label":"Alpha","aria-valuetext":l+"%","aria-valuenow":l,"aria-valuemin":"0","aria-valuemax":"100"},n.createElement(m,{className:"react-colorful__alpha-pointer",left:t.a,color:_(t)})))},B=function(e){var r=e.className,t=e.colorModel,c=e.color,i=void 0===c?t.defaultColor:c,l=e.onChange,s=o(e,["className","colorModel","color","onChange"]),u=(0,n.useRef)(null);L(u);var f=S(t,i,l),d=f[0],m=f[1],p=h(["react-colorful",r]);return n.createElement("div",a({},s,{ref:u,className:p}),n.createElement(E,{hsva:d,onChange:m}),n.createElement(N,{hue:d.h,onChange:m}),n.createElement(H,{hsva:d,onChange:m,className:"react-colorful__last-control"}))},P={defaultColor:"0001",toHsva:v,fromHsva:x,equal:M},A=function(e){return n.createElement(B,a({},e,{colorModel:P}))},F=/^#?([0-9A-F]{3,8})$/i,Y=function(e){var r=e.color,t=void 0===r?"":r,i=e.onChange,l=e.onBlur,s=e.escape,u=e.validate,f=e.format,d=e.process,h=o(e,["color","onChange","onBlur","escape","validate","format","process"]),m=(0,n.useState)(function(){return s(t)}),p=m[0],v=m[1],g=c(i),x=c(l),b=(0,n.useCallback)(function(e){var r=s(e.target.value);v(r),u(r)&&g(d?d(r):r)},[s,d,u,g]),k=(0,n.useCallback)(function(e){u(e.target.value)||v(s(t)),x(e)},[t,s,u,x]);return(0,n.useEffect)(function(){v(s(t))},[t,s]),n.createElement("input",a({},h,{value:f?f(p):p,spellCheck:"false",onChange:b,onBlur:k}))},q=function(e){return"#"+e},J=function(e){var r=e.prefixed,t=e.alpha,c=o(e,["prefixed","alpha"]),i=(0,n.useCallback)(function(e){return e.replace(/([^0-9A-F]+)/gi,"").substring(0,t?8:6)},[t]),l=(0,n.useCallback)(function(e){var r,n;return 3===(n=(r=F.exec(e))?r[1].length:0)||6===n||!!t&&4===n||!!t&&8===n},[t]);return n.createElement(Y,a({},c,{escape:i,format:r?q:void 0,process:q,validate:l}))}}},function(e){e.O(0,[228,980,937,907,874,749,962,208,826,511,447,926,774,888,179],function(){return e(e.s=1231)}),_N_E=e.O()}]);