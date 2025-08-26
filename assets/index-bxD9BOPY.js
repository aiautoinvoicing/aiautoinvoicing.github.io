import{L as $t,r as I,j as lt}from"./index-DAQUCMOF.js";function or(t){if(t.sheet)return t.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===t)return document.styleSheets[r]}function sr(t){var r=document.createElement("style");return r.setAttribute("data-emotion",t.key),t.nonce!==void 0&&r.setAttribute("nonce",t.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var ir=function(){function t(e){var n=this;this._insertTag=function(a){var o;n.tags.length===0?n.insertionPoint?o=n.insertionPoint.nextSibling:n.prepend?o=n.container.firstChild:o=n.before:o=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(a,o),n.tags.push(a)},this.isSpeedy=e.speedy===void 0?!0:e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var r=t.prototype;return r.hydrate=function(n){n.forEach(this._insertTag)},r.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(sr(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var o=or(a);try{o.insertRule(n,o.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(n));this.ctr++},r.flush=function(){this.tags.forEach(function(n){var a;return(a=n.parentNode)==null?void 0:a.removeChild(n)}),this.tags=[],this.ctr=0},t}(),_="-ms-",tt="-moz-",w="-webkit-",jt="comm",ht="rule",gt="decl",cr="@import",Ft="@keyframes",fr="@layer",lr=Math.abs,rt=String.fromCharCode,ur=Object.assign;function dr(t,r){return T(t,0)^45?(((r<<2^T(t,0))<<2^T(t,1))<<2^T(t,2))<<2^T(t,3):0}function Xt(t){return t.trim()}function mr(t,r){return(t=r.exec(t))?t[0]:t}function S(t,r,e){return t.replace(r,e)}function ut(t,r){return t.indexOf(r)}function T(t,r){return t.charCodeAt(r)|0}function D(t,r,e){return t.slice(r,e)}function z(t){return t.length}function bt(t){return t.length}function G(t,r){return r.push(t),t}function pr(t,r){return t.map(r).join("")}var et=1,X=1,Lt=0,k=0,A=0,L="";function nt(t,r,e,n,a,o,s){return{value:t,root:r,parent:e,type:n,props:a,children:o,line:et,column:X,length:s,return:""}}function V(t,r){return ur(nt("",null,null,"",null,null,0),t,{length:-t.length},r)}function yr(){return A}function hr(){return A=k>0?T(L,--k):0,X--,A===10&&(X=1,et--),A}function M(){return A=k<Lt?T(L,k++):0,X++,A===10&&(X=1,et++),A}function j(){return T(L,k)}function K(){return k}function U(t,r){return D(L,t,r)}function B(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Vt(t){return et=X=1,Lt=z(L=t),k=0,[]}function Dt(t){return L="",t}function Z(t){return Xt(U(k-1,dt(t===91?t+2:t===40?t+1:t)))}function gr(t){for(;(A=j())&&A<33;)M();return B(t)>2||B(A)>3?"":" "}function br(t,r){for(;--r&&M()&&!(A<48||A>102||A>57&&A<65||A>70&&A<97););return U(t,K()+(r<6&&j()==32&&M()==32))}function dt(t){for(;M();)switch(A){case t:return k;case 34:case 39:t!==34&&t!==39&&dt(A);break;case 40:t===41&&dt(t);break;case 92:M();break}return k}function vr(t,r){for(;M()&&t+A!==57;)if(t+A===84&&j()===47)break;return"/*"+U(r,k-1)+"*"+rt(t===47?t:M())}function xr(t){for(;!B(j());)M();return U(t,k)}function wr(t){return Dt(Q("",null,null,null,[""],t=Vt(t),0,[0],t))}function Q(t,r,e,n,a,o,s,l,d){for(var m=0,p=0,y=s,x=0,O=0,h=0,u=1,c=1,v=1,g=0,b="",N=a,f=o,E=n,R=b;c;)switch(h=g,g=M()){case 40:if(h!=108&&T(R,y-1)==58){ut(R+=S(Z(g),"&","&\f"),"&\f")!=-1&&(v=-1);break}case 34:case 39:case 91:R+=Z(g);break;case 9:case 10:case 13:case 32:R+=gr(h);break;case 92:R+=br(K()-1,7);continue;case 47:switch(j()){case 42:case 47:G(Sr(vr(M(),K()),r,e),d);break;default:R+="/"}break;case 123*u:l[m++]=z(R)*v;case 125*u:case 59:case 0:switch(g){case 0:case 125:c=0;case 59+p:v==-1&&(R=S(R,/\f/g,"")),O>0&&z(R)-y&&G(O>32?Ot(R+";",n,e,y-1):Ot(S(R," ","")+";",n,e,y-2),d);break;case 59:R+=";";default:if(G(E=Ct(R,r,e,m,p,a,l,b,N=[],f=[],y),o),g===123)if(p===0)Q(R,r,E,E,N,o,y,l,f);else switch(x===99&&T(R,3)===110?100:x){case 100:case 108:case 109:case 115:Q(t,E,E,n&&G(Ct(t,E,E,0,0,a,l,b,a,N=[],y),f),a,f,y,l,n?N:f);break;default:Q(R,E,E,E,[""],f,0,l,f)}}m=p=O=0,u=v=1,b=R="",y=s;break;case 58:y=1+z(R),O=h;default:if(u<1){if(g==123)--u;else if(g==125&&u++==0&&hr()==125)continue}switch(R+=rt(g),g*u){case 38:v=p>0?1:(R+="\f",-1);break;case 44:l[m++]=(z(R)-1)*v,v=1;break;case 64:j()===45&&(R+=Z(M())),x=j(),p=y=z(b=R+=xr(K())),g++;break;case 45:h===45&&z(R)==2&&(u=0)}}return o}function Ct(t,r,e,n,a,o,s,l,d,m,p){for(var y=a-1,x=a===0?o:[""],O=bt(x),h=0,u=0,c=0;h<n;++h)for(var v=0,g=D(t,y+1,y=lr(u=s[h])),b=t;v<O;++v)(b=Xt(u>0?x[v]+" "+g:S(g,/&\f/g,x[v])))&&(d[c++]=b);return nt(t,r,e,a===0?ht:l,d,m,p)}function Sr(t,r,e){return nt(t,r,e,jt,rt(yr()),D(t,2,-2),0)}function Ot(t,r,e,n){return nt(t,r,e,gt,D(t,0,n),D(t,n+1,-1),n)}function F(t,r){for(var e="",n=bt(t),a=0;a<n;a++)e+=r(t[a],a,t,r)||"";return e}function $r(t,r,e,n){switch(t.type){case fr:if(t.children.length)break;case cr:case gt:return t.return=t.return||t.value;case jt:return"";case Ft:return t.return=t.value+"{"+F(t.children,n)+"}";case ht:t.value=t.props.join(",")}return z(e=F(t.children,n))?t.return=t.value+"{"+e+"}":""}function Cr(t){var r=bt(t);return function(e,n,a,o){for(var s="",l=0;l<r;l++)s+=t[l](e,n,a,o)||"";return s}}function Or(t){return function(r){r.root||(r=r.return)&&t(r)}}function Rr(t){var r=Object.create(null);return function(e){return r[e]===void 0&&(r[e]=t(e)),r[e]}}var Ir=function(r,e,n){for(var a=0,o=0;a=o,o=j(),a===38&&o===12&&(e[n]=1),!B(o);)M();return U(r,k)},Er=function(r,e){var n=-1,a=44;do switch(B(a)){case 0:a===38&&j()===12&&(e[n]=1),r[n]+=Ir(k-1,e,n);break;case 2:r[n]+=Z(a);break;case 4:if(a===44){r[++n]=j()===58?"&\f":"",e[n]=r[n].length;break}default:r[n]+=rt(a)}while(a=M());return r},Ar=function(r,e){return Dt(Er(Vt(r),e))},Rt=new WeakMap,Pr=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var e=r.value,n=r.parent,a=r.column===n.column&&r.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(r.props.length===1&&e.charCodeAt(0)!==58&&!Rt.get(n))&&!a){Rt.set(r,!0);for(var o=[],s=Ar(e,o),l=n.props,d=0,m=0;d<s.length;d++)for(var p=0;p<l.length;p++,m++)r.props[m]=o[d]?s[d].replace(/&\f/g,l[p]):l[p]+" "+s[d]}}},Nr=function(r){if(r.type==="decl"){var e=r.value;e.charCodeAt(0)===108&&e.charCodeAt(2)===98&&(r.return="",r.value="")}};function Bt(t,r){switch(dr(t,r)){case 5103:return w+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return w+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return w+t+tt+t+_+t+t;case 6828:case 4268:return w+t+_+t+t;case 6165:return w+t+_+"flex-"+t+t;case 5187:return w+t+S(t,/(\w+).+(:[^]+)/,w+"box-$1$2"+_+"flex-$1$2")+t;case 5443:return w+t+_+"flex-item-"+S(t,/flex-|-self/,"")+t;case 4675:return w+t+_+"flex-line-pack"+S(t,/align-content|flex-|-self/,"")+t;case 5548:return w+t+_+S(t,"shrink","negative")+t;case 5292:return w+t+_+S(t,"basis","preferred-size")+t;case 6060:return w+"box-"+S(t,"-grow","")+w+t+_+S(t,"grow","positive")+t;case 4554:return w+S(t,/([^-])(transform)/g,"$1"+w+"$2")+t;case 6187:return S(S(S(t,/(zoom-|grab)/,w+"$1"),/(image-set)/,w+"$1"),t,"")+t;case 5495:case 3959:return S(t,/(image-set\([^]*)/,w+"$1$`$1");case 4968:return S(S(t,/(.+:)(flex-)?(.*)/,w+"box-pack:$3"+_+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+w+t+t;case 4095:case 3583:case 4068:case 2532:return S(t,/(.+)-inline(.+)/,w+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(z(t)-1-r>6)switch(T(t,r+1)){case 109:if(T(t,r+4)!==45)break;case 102:return S(t,/(.+:)(.+)-([^]+)/,"$1"+w+"$2-$3$1"+tt+(T(t,r+3)==108?"$3":"$2-$3"))+t;case 115:return~ut(t,"stretch")?Bt(S(t,"stretch","fill-available"),r)+t:t}break;case 4949:if(T(t,r+1)!==115)break;case 6444:switch(T(t,z(t)-3-(~ut(t,"!important")&&10))){case 107:return S(t,":",":"+w)+t;case 101:return S(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+w+(T(t,14)===45?"inline-":"")+"box$3$1"+w+"$2$3$1"+_+"$2box$3")+t}break;case 5936:switch(T(t,r+11)){case 114:return w+t+_+S(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return w+t+_+S(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return w+t+_+S(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return w+t+_+t+t}return t}var Tr=function(r,e,n,a){if(r.length>-1&&!r.return)switch(r.type){case gt:r.return=Bt(r.value,r.length);break;case Ft:return F([V(r,{value:S(r.value,"@","@"+w)})],a);case ht:if(r.length)return pr(r.props,function(o){switch(mr(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return F([V(r,{props:[S(o,/:(read-\w+)/,":"+tt+"$1")]})],a);case"::placeholder":return F([V(r,{props:[S(o,/:(plac\w+)/,":"+w+"input-$1")]}),V(r,{props:[S(o,/:(plac\w+)/,":"+tt+"$1")]}),V(r,{props:[S(o,/:(plac\w+)/,_+"input-$1")]})],a)}return""})}},_r=[Tr],kr=function(r){var e=r.key;if(e==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(u){var c=u.getAttribute("data-emotion");c.indexOf(" ")!==-1&&(document.head.appendChild(u),u.setAttribute("data-s",""))})}var a=r.stylisPlugins||_r,o={},s,l=[];s=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+e+' "]'),function(u){for(var c=u.getAttribute("data-emotion").split(" "),v=1;v<c.length;v++)o[c[v]]=!0;l.push(u)});var d,m=[Pr,Nr];{var p,y=[$r,Or(function(u){p.insert(u)})],x=Cr(m.concat(a,y)),O=function(c){return F(wr(c),x)};d=function(c,v,g,b){p=g,O(c?c+"{"+v.styles+"}":v.styles),b&&(h.inserted[v.name]=!0)}}var h={key:e,sheet:new ir({key:e,container:s,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:o,registered:{},insert:d};return h.sheet.hydrate(l),h},ot={exports:{}},$={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var It;function Mr(){if(It)return $;It=1;var t=typeof Symbol=="function"&&Symbol.for,r=t?Symbol.for("react.element"):60103,e=t?Symbol.for("react.portal"):60106,n=t?Symbol.for("react.fragment"):60107,a=t?Symbol.for("react.strict_mode"):60108,o=t?Symbol.for("react.profiler"):60114,s=t?Symbol.for("react.provider"):60109,l=t?Symbol.for("react.context"):60110,d=t?Symbol.for("react.async_mode"):60111,m=t?Symbol.for("react.concurrent_mode"):60111,p=t?Symbol.for("react.forward_ref"):60112,y=t?Symbol.for("react.suspense"):60113,x=t?Symbol.for("react.suspense_list"):60120,O=t?Symbol.for("react.memo"):60115,h=t?Symbol.for("react.lazy"):60116,u=t?Symbol.for("react.block"):60121,c=t?Symbol.for("react.fundamental"):60117,v=t?Symbol.for("react.responder"):60118,g=t?Symbol.for("react.scope"):60119;function b(f){if(typeof f=="object"&&f!==null){var E=f.$$typeof;switch(E){case r:switch(f=f.type,f){case d:case m:case n:case o:case a:case y:return f;default:switch(f=f&&f.$$typeof,f){case l:case p:case h:case O:case s:return f;default:return E}}case e:return E}}}function N(f){return b(f)===m}return $.AsyncMode=d,$.ConcurrentMode=m,$.ContextConsumer=l,$.ContextProvider=s,$.Element=r,$.ForwardRef=p,$.Fragment=n,$.Lazy=h,$.Memo=O,$.Portal=e,$.Profiler=o,$.StrictMode=a,$.Suspense=y,$.isAsyncMode=function(f){return N(f)||b(f)===d},$.isConcurrentMode=N,$.isContextConsumer=function(f){return b(f)===l},$.isContextProvider=function(f){return b(f)===s},$.isElement=function(f){return typeof f=="object"&&f!==null&&f.$$typeof===r},$.isForwardRef=function(f){return b(f)===p},$.isFragment=function(f){return b(f)===n},$.isLazy=function(f){return b(f)===h},$.isMemo=function(f){return b(f)===O},$.isPortal=function(f){return b(f)===e},$.isProfiler=function(f){return b(f)===o},$.isStrictMode=function(f){return b(f)===a},$.isSuspense=function(f){return b(f)===y},$.isValidElementType=function(f){return typeof f=="string"||typeof f=="function"||f===n||f===m||f===o||f===a||f===y||f===x||typeof f=="object"&&f!==null&&(f.$$typeof===h||f.$$typeof===O||f.$$typeof===s||f.$$typeof===l||f.$$typeof===p||f.$$typeof===c||f.$$typeof===v||f.$$typeof===g||f.$$typeof===u)},$.typeOf=b,$}var Et;function zr(){return Et||(Et=1,ot.exports=Mr()),ot.exports}var st,At;function Yr(){if(At)return st;At=1;var t=zr(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},e={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o={};o[t.ForwardRef]=n,o[t.Memo]=a;function s(h){return t.isMemo(h)?a:o[h.$$typeof]||r}var l=Object.defineProperty,d=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,x=Object.prototype;function O(h,u,c){if(typeof u!="string"){if(x){var v=y(u);v&&v!==x&&O(h,v,c)}var g=d(u);m&&(g=g.concat(m(u)));for(var b=s(h),N=s(u),f=0;f<g.length;++f){var E=g[f];if(!e[E]&&!(c&&c[E])&&!(N&&N[E])&&!(b&&b[E])){var R=p(u,E);try{l(h,E,R)}catch{}}}}return h}return st=O,st}Yr();var jr=!0;function Wt(t,r,e){var n="";return e.split(" ").forEach(function(a){t[a]!==void 0?r.push(t[a]+";"):a&&(n+=a+" ")}),n}var vt=function(r,e,n){var a=r.key+"-"+e.name;(n===!1||jr===!1)&&r.registered[a]===void 0&&(r.registered[a]=e.styles)},qt=function(r,e,n){vt(r,e,n);var a=r.key+"-"+e.name;if(r.inserted[e.name]===void 0){var o=e;do r.insert(e===o?"."+a:"",o,r.sheet,!0),o=o.next;while(o!==void 0)}};function Fr(t){for(var r=0,e,n=0,a=t.length;a>=4;++n,a-=4)e=t.charCodeAt(n)&255|(t.charCodeAt(++n)&255)<<8|(t.charCodeAt(++n)&255)<<16|(t.charCodeAt(++n)&255)<<24,e=(e&65535)*1540483477+((e>>>16)*59797<<16),e^=e>>>24,r=(e&65535)*1540483477+((e>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(a){case 3:r^=(t.charCodeAt(n+2)&255)<<16;case 2:r^=(t.charCodeAt(n+1)&255)<<8;case 1:r^=t.charCodeAt(n)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var Xr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Lr=/[A-Z]|^ms/g,Vr=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ut=function(r){return r.charCodeAt(1)===45},Pt=function(r){return r!=null&&typeof r!="boolean"},it=Rr(function(t){return Ut(t)?t:t.replace(Lr,"-$&").toLowerCase()}),Nt=function(r,e){switch(r){case"animation":case"animationName":if(typeof e=="string")return e.replace(Vr,function(n,a,o){return Y={name:a,styles:o,next:Y},a})}return Xr[r]!==1&&!Ut(r)&&typeof e=="number"&&e!==0?e+"px":e};function W(t,r,e){if(e==null)return"";var n=e;if(n.__emotion_styles!==void 0)return n;switch(typeof e){case"boolean":return"";case"object":{var a=e;if(a.anim===1)return Y={name:a.name,styles:a.styles,next:Y},a.name;var o=e;if(o.styles!==void 0){var s=o.next;if(s!==void 0)for(;s!==void 0;)Y={name:s.name,styles:s.styles,next:Y},s=s.next;var l=o.styles+";";return l}return Dr(t,r,e)}case"function":{if(t!==void 0){var d=Y,m=e(t);return Y=d,W(t,r,m)}break}}var p=e;if(r==null)return p;var y=r[p];return y!==void 0?y:p}function Dr(t,r,e){var n="";if(Array.isArray(e))for(var a=0;a<e.length;a++)n+=W(t,r,e[a])+";";else for(var o in e){var s=e[o];if(typeof s!="object"){var l=s;r!=null&&r[l]!==void 0?n+=o+"{"+r[l]+"}":Pt(l)&&(n+=it(o)+":"+Nt(o,l)+";")}else if(Array.isArray(s)&&typeof s[0]=="string"&&(r==null||r[s[0]]===void 0))for(var d=0;d<s.length;d++)Pt(s[d])&&(n+=it(o)+":"+Nt(o,s[d])+";");else{var m=W(t,r,s);switch(o){case"animation":case"animationName":{n+=it(o)+":"+m+";";break}default:n+=o+"{"+m+"}"}}}return n}var Tt=/label:\s*([^\s;{]+)\s*(;|$)/g,Y;function xt(t,r,e){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var n=!0,a="";Y=void 0;var o=t[0];if(o==null||o.raw===void 0)n=!1,a+=W(e,r,o);else{var s=o;a+=s[0]}for(var l=1;l<t.length;l++)if(a+=W(e,r,t[l]),n){var d=o;a+=d[l]}Tt.lastIndex=0;for(var m="",p;(p=Tt.exec(a))!==null;)m+="-"+p[1];var y=Fr(a)+m;return{name:y,styles:a,next:Y}}var Br=function(r){return r()},Wr=$t.useInsertionEffect?$t.useInsertionEffect:!1,Gt=Wr||Br,Ht=I.createContext(typeof HTMLElement<"u"?kr({key:"css"}):null);Ht.Provider;var Jt=function(r){return I.forwardRef(function(e,n){var a=I.useContext(Ht);return r(e,a,n)})},Kt=I.createContext({}),at={}.hasOwnProperty,mt="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Zt=function(r,e){var n={};for(var a in e)at.call(e,a)&&(n[a]=e[a]);return n[mt]=r,n},qr=function(r){var e=r.cache,n=r.serialized,a=r.isStringTag;return vt(e,n,a),Gt(function(){return qt(e,n,a)}),null},Ur=Jt(function(t,r,e){var n=t.css;typeof n=="string"&&r.registered[n]!==void 0&&(n=r.registered[n]);var a=t[mt],o=[n],s="";typeof t.className=="string"?s=Wt(r.registered,o,t.className):t.className!=null&&(s=t.className+" ");var l=xt(o,void 0,I.useContext(Kt));s+=r.key+"-"+l.name;var d={};for(var m in t)at.call(t,m)&&m!=="css"&&m!==mt&&(d[m]=t[m]);return d.className=s,e&&(d.ref=e),I.createElement(I.Fragment,null,I.createElement(qr,{cache:r,serialized:l,isStringTag:typeof a=="string"}),I.createElement(a,d))}),Qt=Ur,Gr=lt.Fragment,P=function(r,e,n){return at.call(e,"css")?lt.jsx(Qt,Zt(r,e),n):lt.jsx(r,e,n)},_t=function(r,e){var n=arguments;if(e==null||!at.call(e,"css"))return I.createElement.apply(void 0,n);var a=n.length,o=new Array(a);o[0]=Qt,o[1]=Zt(r,e);for(var s=2;s<a;s++)o[s]=n[s];return I.createElement.apply(null,o)};(function(t){var r;r||(r=t.JSX||(t.JSX={}))})(_t||(_t={}));function tr(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];return xt(r)}function i(){var t=tr.apply(void 0,arguments),r="animation-"+t.name;return{name:r,styles:"@keyframes "+r+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var Hr=function t(r){for(var e=r.length,n=0,a="";n<e;n++){var o=r[n];if(o!=null){var s=void 0;switch(typeof o){case"boolean":break;case"object":{if(Array.isArray(o))s=t(o);else{s="";for(var l in o)o[l]&&l&&(s&&(s+=" "),s+=l)}break}default:s=o}s&&(a&&(a+=" "),a+=s)}}return a};function Jr(t,r,e){var n=[],a=Wt(t,n,e);return n.length<2?e:a+r(n)}var Kr=function(r){var e=r.cache,n=r.serializedArr;return Gt(function(){for(var a=0;a<n.length;a++)qt(e,n[a],!1)}),null},ct=Jt(function(t,r){var e=[],n=function(){for(var d=arguments.length,m=new Array(d),p=0;p<d;p++)m[p]=arguments[p];var y=xt(m,r.registered);return e.push(y),vt(r,y,!1),r.key+"-"+y.name},a=function(){for(var d=arguments.length,m=new Array(d),p=0;p<d;p++)m[p]=arguments[p];return Jr(r.registered,n,Hr(m))},o={css:n,cx:a,theme:I.useContext(Kt)},s=t.children(o);return I.createElement(I.Fragment,null,I.createElement(Kr,{cache:r,serializedArr:e}),s)}),Zr=Object.defineProperty,Qr=(t,r,e)=>r in t?Zr(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,H=(t,r,e)=>Qr(t,typeof r!="symbol"?r+"":r,e),pt=new Map,J=new WeakMap,kt=0,te=void 0;function re(t){return t?(J.has(t)||(kt+=1,J.set(t,kt.toString())),J.get(t)):"0"}function ee(t){return Object.keys(t).sort().filter(r=>t[r]!==void 0).map(r=>`${r}_${r==="root"?re(t.root):t[r]}`).toString()}function ne(t){const r=ee(t);let e=pt.get(r);if(!e){const n=new Map;let a;const o=new IntersectionObserver(s=>{s.forEach(l=>{var d;const m=l.isIntersecting&&a.some(p=>l.intersectionRatio>=p);t.trackVisibility&&typeof l.isVisible>"u"&&(l.isVisible=m),(d=n.get(l.target))==null||d.forEach(p=>{p(m,l)})})},t);a=o.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),e={id:r,observer:o,elements:n},pt.set(r,e)}return e}function rr(t,r,e={},n=te){if(typeof window.IntersectionObserver>"u"&&n!==void 0){const d=t.getBoundingClientRect();return r(n,{isIntersecting:n,target:t,intersectionRatio:typeof e.threshold=="number"?e.threshold:0,time:0,boundingClientRect:d,intersectionRect:d,rootBounds:d}),()=>{}}const{id:a,observer:o,elements:s}=ne(e),l=s.get(t)||[];return s.has(t)||s.set(t,l),l.push(r),o.observe(t),function(){l.splice(l.indexOf(r),1),l.length===0&&(s.delete(t),o.unobserve(t)),s.size===0&&(o.disconnect(),pt.delete(a))}}function ae(t){return typeof t.children!="function"}var Mt=class extends I.Component{constructor(t){super(t),H(this,"node",null),H(this,"_unobserveCb",null),H(this,"handleNode",r=>{this.node&&(this.unobserve(),!r&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=r||null,this.observeNode()}),H(this,"handleChange",(r,e)=>{r&&this.props.triggerOnce&&this.unobserve(),ae(this.props)||this.setState({inView:r,entry:e}),this.props.onChange&&this.props.onChange(r,e)}),this.state={inView:!!t.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:r,rootMargin:e,trackVisibility:n,delay:a,fallbackInView:o}=this.props;this._unobserveCb=rr(this.node,this.handleChange,{threshold:t,root:r,rootMargin:e,trackVisibility:n,delay:a},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:t}=this.props;if(typeof t=="function"){const{inView:O,entry:h}=this.state;return t({inView:O,entry:h,ref:this.handleNode})}const{as:r,triggerOnce:e,threshold:n,root:a,rootMargin:o,onChange:s,skip:l,trackVisibility:d,delay:m,initialInView:p,fallbackInView:y,...x}=this.props;return I.createElement(r||"div",{ref:this.handleNode,...x},t)}};function er({threshold:t,delay:r,trackVisibility:e,rootMargin:n,root:a,triggerOnce:o,skip:s,initialInView:l,fallbackInView:d,onChange:m}={}){var p;const[y,x]=I.useState(null),O=I.useRef(m),[h,u]=I.useState({inView:!!l,entry:void 0});O.current=m,I.useEffect(()=>{if(s||!y)return;let b;return b=rr(y,(N,f)=>{u({inView:N,entry:f}),O.current&&O.current(N,f),f.isIntersecting&&o&&b&&(b(),b=void 0)},{root:a,rootMargin:n,threshold:t,trackVisibility:e,delay:r},d),()=>{b&&b()}},[Array.isArray(t)?t.toString():t,y,a,n,o,s,e,d,r]);const c=(p=h.entry)==null?void 0:p.target,v=I.useRef(void 0);!y&&c&&!o&&!s&&v.current!==c&&(v.current=c,u({inView:!!l,entry:void 0}));const g=[x,h.inView,h.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}var ft={exports:{}},C={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zt;function oe(){if(zt)return C;zt=1;var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),e=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),s=Symbol.for("react.context"),l=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),O=Symbol.for("react.offscreen"),h;h=Symbol.for("react.module.reference");function u(c){if(typeof c=="object"&&c!==null){var v=c.$$typeof;switch(v){case t:switch(c=c.type,c){case e:case a:case n:case m:case p:return c;default:switch(c=c&&c.$$typeof,c){case l:case s:case d:case x:case y:case o:return c;default:return v}}case r:return v}}}return C.ContextConsumer=s,C.ContextProvider=o,C.Element=t,C.ForwardRef=d,C.Fragment=e,C.Lazy=x,C.Memo=y,C.Portal=r,C.Profiler=a,C.StrictMode=n,C.Suspense=m,C.SuspenseList=p,C.isAsyncMode=function(){return!1},C.isConcurrentMode=function(){return!1},C.isContextConsumer=function(c){return u(c)===s},C.isContextProvider=function(c){return u(c)===o},C.isElement=function(c){return typeof c=="object"&&c!==null&&c.$$typeof===t},C.isForwardRef=function(c){return u(c)===d},C.isFragment=function(c){return u(c)===e},C.isLazy=function(c){return u(c)===x},C.isMemo=function(c){return u(c)===y},C.isPortal=function(c){return u(c)===r},C.isProfiler=function(c){return u(c)===a},C.isStrictMode=function(c){return u(c)===n},C.isSuspense=function(c){return u(c)===m},C.isSuspenseList=function(c){return u(c)===p},C.isValidElementType=function(c){return typeof c=="string"||typeof c=="function"||c===e||c===a||c===n||c===m||c===p||c===O||typeof c=="object"&&c!==null&&(c.$$typeof===x||c.$$typeof===y||c.$$typeof===o||c.$$typeof===s||c.$$typeof===d||c.$$typeof===h||c.getModuleId!==void 0)},C.typeOf=u,C}var Yt;function se(){return Yt||(Yt=1,ft.exports=oe()),ft.exports}var ie=se();i`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;i`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;i`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;i`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;i`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;i`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;i`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;i`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;i`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;i`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;i`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;i`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;i`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const ce=i`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,fe=i`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,le=i`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ue=i`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,de=i`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,wt=i`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,me=i`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,pe=i`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ye=i`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,he=i`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ge=i`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,be=i`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ve=i`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function xe({duration:t=1e3,delay:r=0,timingFunction:e="ease",keyframes:n=wt,iterationCount:a=1}){return tr`
    animation-duration: ${t}ms;
    animation-timing-function: ${e};
    animation-delay: ${r}ms;
    animation-name: ${n};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${a};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function we(t){return t==null}function Se(t){return typeof t=="string"||typeof t=="number"||typeof t=="boolean"}function nr(t,r){return e=>e?t():r()}function q(t){return nr(t,()=>null)}function yt(t){return q(()=>({opacity:0}))(t)}const St=t=>{const{cascade:r=!1,damping:e=.5,delay:n=0,duration:a=1e3,fraction:o=0,keyframes:s=wt,triggerOnce:l=!1,className:d,style:m,childClassName:p,childStyle:y,children:x,onVisibilityChange:O}=t,h=I.useMemo(()=>xe({keyframes:s,duration:a}),[a,s]);return we(x)?null:Se(x)?P(Ce,{...t,animationStyles:h,children:String(x)}):ie.isFragment(x)?P(ar,{...t,animationStyles:h}):P(Gr,{children:I.Children.map(x,(u,c)=>{if(!I.isValidElement(u))return null;const v=n+(r?c*a*e:0);switch(u.type){case"ol":case"ul":return P(ct,{children:({cx:g})=>P(u.type,{...u.props,className:g(d,u.props.className),style:Object.assign({},m,u.props.style),children:P(St,{...t,children:u.props.children})})});case"li":return P(Mt,{threshold:o,triggerOnce:l,onChange:O,children:({inView:g,ref:b})=>P(ct,{children:({cx:N})=>P(u.type,{...u.props,ref:b,className:N(p,u.props.className),css:q(()=>h)(g),style:Object.assign({},y,u.props.style,yt(!g),{animationDelay:v+"ms"})})})});default:return P(Mt,{threshold:o,triggerOnce:l,onChange:O,children:({inView:g,ref:b})=>P("div",{ref:b,className:d,css:q(()=>h)(g),style:Object.assign({},m,yt(!g),{animationDelay:v+"ms"}),children:P(ct,{children:({cx:N})=>P(u.type,{...u.props,className:N(p,u.props.className),style:Object.assign({},y,u.props.style)})})})})}})})},$e={display:"inline-block",whiteSpace:"pre"},Ce=t=>{const{animationStyles:r,cascade:e=!1,damping:n=.5,delay:a=0,duration:o=1e3,fraction:s=0,triggerOnce:l=!1,className:d,style:m,children:p,onVisibilityChange:y}=t,{ref:x,inView:O}=er({triggerOnce:l,threshold:s,onChange:y});return nr(()=>P("div",{ref:x,className:d,style:Object.assign({},m,$e),children:p.split("").map((h,u)=>P("span",{css:q(()=>r)(O),style:{animationDelay:a+u*o*n+"ms"},children:h},u))}),()=>P(ar,{...t,children:p}))(e)},ar=t=>{const{animationStyles:r,fraction:e=0,triggerOnce:n=!1,className:a,style:o,children:s,onVisibilityChange:l}=t,{ref:d,inView:m}=er({triggerOnce:n,threshold:e,onChange:l});return P("div",{ref:d,className:a,css:q(()=>r)(m),style:Object.assign({},o,yt(!m)),children:s})};i`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;i`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;i`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;i`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;i`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;i`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;i`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;i`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;i`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;i`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const Oe=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Re=i`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Ie=i`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Ee=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Ae=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Pe=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Ne=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Te=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,_e=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,ke=i`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Me=i`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,ze=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Ye=i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function je(t,r,e){switch(e){case"bottom-left":return r?Re:fe;case"bottom-right":return r?Ie:le;case"down":return t?r?Ae:de:r?Ee:ue;case"left":return t?r?Ne:me:r?Pe:wt;case"right":return t?r?_e:ye:r?Te:pe;case"top-left":return r?ke:he;case"top-right":return r?Me:ge;case"up":return t?r?Ye:ve:r?ze:be;default:return r?Oe:ce}}const Je=t=>{const{big:r=!1,direction:e,reverse:n=!1,...a}=t,o=I.useMemo(()=>je(r,n,e),[r,e,n]);return P(St,{keyframes:o,...a})};i`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;i`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;i`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;i`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;i`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;i`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;i`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;i`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;i`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;i`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;i`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;i`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;i`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;i`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;i`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;i`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;i`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;i`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;i`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;const Fe=i`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Xe=i`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Le=i`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Ve=i`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,De=i`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,Be=i`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,We=i`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,qe=i`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;function Ue(t,r){switch(r){case"down":return t?De:Fe;case"right":return t?We:Le;case"up":return t?qe:Ve;case"left":default:return t?Be:Xe}}const Ke=t=>{const{direction:r,reverse:e=!1,...n}=t,a=I.useMemo(()=>Ue(e,r),[r,e]);return P(St,{keyframes:a,...n})};i`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;i`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;i`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;i`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;i`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;i`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;i`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;i`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;i`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;i`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;export{Je as F,Ke as S};
