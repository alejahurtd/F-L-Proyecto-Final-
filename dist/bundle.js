(()=>{"use strict";var t={195:(t,e,n)=>{n.d(e,{A:()=>a});var i=n(601),s=n.n(i),o=n(314),r=n.n(o)()(s());r.push([t.id,"* {\n\tfont-family: 'Inter', sans-serif;\n}\n\n.container {\n\tdisplay: flex;\n\talign-items: center;\n\twidth: 50%;\n\tborder-radius: 20px;\n\tbackground: #2f60e9;\n\tmargin: 1%;\n\tpadding: 2rem;\n}\n.img-post {\n\twidth: 100%;\n\tmax-width: 400px;\n\theight: auto;\n\tborder-radius: 8px;\n\tmargin-bottom: 1rem;\n}\n\n.icon-container {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tmargin-bottom: 1rem;\n}\n\n.icon-container img {\n\twidth: 30px;\n\theight: 30px;\n\tmargin-right: 10px;\n}\n\n.likes-count {\n\tfont-size: 1.2rem;\n\tmargin-bottom: 1rem;\n}\n\n.username {\n\tfont-weight: bold;\n\tmargin-bottom: 0.5rem;\n}\n\n.description {\n\tfont-style: italic;\n}\n",""]);const a=r},83:(t,e,n)=>{n.d(e,{A:()=>a});var i=n(601),s=n.n(i),o=n(314),r=n.n(o)()(s());r.push([t.id,"",""]);const a=r},647:(t,e,n)=>{n.d(e,{A:()=>a});var i=n(601),s=n.n(i),o=n(314),r=n.n(o)()(s());r.push([t.id,"",""]);const a=r},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,s,o){"string"==typeof t&&(t=[[null,t,void 0]]);var r={};if(i)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(r[c]=!0)}for(var d=0;d<t.length;d++){var l=[].concat(t[d]);i&&r[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),s&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=s):l[4]="".concat(s)),e.push(l))}},e}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var o={},r=[],a=0;a<t.length;a++){var c=t[a],d=i.base?c[0]+i.base:c[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var m=n(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(p);else{var h=s(p,i);i.byIndex=a,e.splice(a,0,{identifier:u,updater:h,references:1})}r.push(u)}return r}function s(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,s){var o=i(t=t||[],s=s||{});return function(t){t=t||[];for(var r=0;r<o.length;r++){var a=n(o[r]);e[a].references--}for(var c=i(t,s),d=0;d<o.length;d++){var l=n(o[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=c}}},659:t=>{var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var o=e[i]={id:i,exports:{}};return t[i](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var i=e.getElementsByTagName("script");if(i.length)for(var s=i.length-1;s>-1&&(!t||!/^http(s?):/.test(t));)t=i[s--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.nc=void 0,(()=>{var t=n(72),e=n.n(t),i=n(825),s=n.n(i),o=n(659),r=n.n(o),a=n(56),c=n.n(a),d=n(540),l=n.n(d),u=n(113),m=n.n(u),p=n(647),h={};h.styleTagTransform=m(),h.setAttributes=c(),h.insert=r().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=l(),e()(p.A,h);const f=p.A&&p.A.locals?p.A.locals:void 0;var g=n(195),v={};v.styleTagTransform=m(),v.setAttributes=c(),v.insert=r().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=l(),e()(g.A,v);const b=g.A&&g.A.locals?g.A.locals:void 0;var y;!function(t){t.image="image",t.isliked="isliked",t.issaved="issaved",t.likescount="likescount",t.username="username",t.description="description"}(y||(y={}));class w extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys({image:null,isliked:null,issaved:null,likescount:null,username:null,description:null})}attributeChangedCallback(t,e,n){this[t]=n,this.render()}connectedCallback(){this.render()}render(){if(this.shadowRoot){this.shadowRoot.innerHTML="";const t=this.ownerDocument.createElement("style");t.textContent="\n\n\t\t\t.container {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\talign-items: center;\n\t\t\t\twidth: 25%;\n\t\t\t\tborder-radius: 30px;\n\t\t\t\tbackground: #2f60e9;\n\t\t\t\tmargin: 1%;\n\t\t\t\tpadding: 2rem;\n\t\t}\n\t\t.img-container {\n\t\twidth: 20rem;\n    height: 20rem;\n    display: flex;\n    justify-content: center;\n    overflow: hidden; /* Previene que la imagen sobresalga del contenedor */\n    border-radius: 8px;\n\t\tmargin-bottom: 1rem;\n\t\t}\n\n\t\t.img-post {\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tobject-fit: cover;\n\t\t\tborder-radius: 8px;\n\t\t}\n\n\n\t\t.content-container{\n\t\t\twidth: 100%;\n\t\t\tdisplay: flex;\n      flex-direction: column;\n      align-items: flex-start;\n\n\t\t}\n\n\t\t.icon-container {\n\t\t\twidth: 2rem;\n    \theight: 1.7rem;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: flex-start;\n\t\t}\n\n\t\t.icon-container img {\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tmargin-right: 1rem;\n\t\t}\n\n\t\t.likes-count, .username, .description{\n\t\t\twidth: 100%;\n\t\t\ttext-align: left;\n\t\t\tmargin-bottom: 0.5rem;\n\t\t}\n\t\t.likes-count{\n\t\t\tfont-size: 1.2rem;\n\t\t\tcolor: #CBF900;\n\t\t}\n\t\t.username {\n\t\t\tfont-weight: bold;\n\t\t\tfont-size: 1rem;\n\t\t\tcolor: white;\n\n\t\t}\n\t\t.description {\n\n\t\t\tfont-size: 1rem;\n\t\t\tcolor: white;\n\t\t\tfont-weight: normal;\n\t\t}\n\n    ",this.shadowRoot.appendChild(t),this.shadowRoot.innerHTML+=`\n\t\t\t\t\t\t <style> ${b}</style>\n\n            <section class="container">\n\t\t\t\t\t\t\t\t<div class= "img-container">\n\t\t\t\t\t\t\t\t\t\t<img class= "img-post" src="${this.image}" alt="Post image">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t <div class= "content-container">\n\t\t\t\t\t\t\t\t \t\t<div class= "icon-container">\n\t\t\t\t\t\t\t\t\t\t\t<img class= "icon-container img" src="${this.isliked}" alt="Like icon">\n\t\t\t\t\t\t\t\t\t\t\t<img class= "icon-container img" src="${this.issaved}" alt="Save icon">\n\t\t\t\t\t\t\t\t </div>\n\n                    <h3 class= "likes-count">${this.likescount} likes</h3>\n\t\t\t\t\t\t\t\t\t\t<p\n\t\t\t\t\t\t\t\t\t\t\t<span class= "username" >${this.username} </span>: <span class= "description"> ${this.description}</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t</div>\n\n            </section>\n        `}}}customElements.define("post-image",w);var x=n(83),k={};k.styleTagTransform=m(),k.setAttributes=c(),k.insert=r().bind(null,"head"),k.domAPI=s(),k.insertStyleElement=l(),e()(x.A,k);const A=x.A&&x.A.locals?x.A.locals:void 0;var C;!function(t){t.image="image",t.description="description",t.username="username"}(C||(C={}));class E extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys({image:null,description:null,username:null})}attributeChangedCallback(t,e,n){this[t]=n,this.render()}connectedCallback(){this.render()}render(){if(this.shadowRoot){this.shadowRoot.innerHTML="";const t=this.ownerDocument.createElement("style");t.textContent="\n\n\t\t\t.container {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\talign-items: center;\n\t\t\t\twidth: 10%;\n\t\t\t\tborder-radius: 30px;\n\t\t\t\tbackground: #CBF900;\n\t\t\t\tmargin: 1%;\n\t\t\t\tpadding: 2rem;\n\t\t}\n\n    ",this.shadowRoot.appendChild(t),this.shadowRoot.innerHTML+=`\n\t\t\t\t\t\t <style> ${A}</style>\n\n            <section class="container">\n\t\t\t\t\t\t\t\t<div class= "img-container">\n\t\t\t\t\t\t\t\t\t\t<img class= "img-post" src="${this.image}" alt="Post image">\n\t\t\t\t\t\t\t\t</div>\n                    <div class= "content-container">\n                        <div class= "icon-container">\n                          <p class= "description"> ${this.description} </p>"\n                          <p class= "username"> ${this.username} </p>"\n                    </div>\n            </section>\n        `}}}customElements.define("post-tweet",E);const T=n.p+"assets/images/13c42b09bd85382f60650f26ecff8636.png",L=n.p+"assets/images/7fefe267955724a4df33b3f3d0c2e4e5.png",j=[{image:"https://images.pexels.com/photos/11000413/pexels-photo-11000413.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",isLiked:T,isSaved:L,likesCount:"950",username:"@guti_santi",description:"Ready for the next marathons"},{image:"https://i.pinimg.com/564x/8d/e2/53/8de253777f0974e37f142cadb822593b.jpg",isLiked:T,isSaved:L,likesCount:"590",username:"@alejah__",description:"Exercise: self-love in motion"},{image:"https://i.pinimg.com/564x/73/b2/cb/73b2cb44bafd88ef28423d8ecdf629f0.jpg",isLiked:T,isSaved:L,likesCount:"1300",username:"@ana_hillton",description:"energy for the day"},{image:"https://i.pinimg.com/564x/81/1d/ec/811dec8d7c02e6abfba458ece184d376.jpg",isLiked:T,isSaved:L,likesCount:"480",username:"@juanesv08",description:"Mastering the ropes"}],S=[{image:"https://images.pexels.com/photos/11000413/pexels-photo-11000413.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",description:"Ready for the next marathons",username:"@guti_santi"},{image:"https://i.pinimg.com/564x/8d/e2/53/8de253777f0974e37f142cadb822593b.jpg",description:"Exercise: self-love in motion",username:"@alejah__"},{image:"https://i.pinimg.com/564x/73/b2/cb/73b2cb44bafd88ef28423d8ecdf629f0.jpg",description:"energy for the day",username:"@ana_hillton"},{image:"https://i.pinimg.com/564x/81/1d/ec/811dec8d7c02e6abfba458ece184d376.jpg",description:"Mastering the ropes",username:"@juanesv08"}];class M extends HTMLElement{constructor(){super(),this.PostImageList=[],this.PostTweetList=[],this.attachShadow({mode:"open"}),j.forEach((t=>{const e=this.ownerDocument.createElement("post-image");e.setAttribute(y.image,t.image),e.setAttribute(y.isliked,t.isLiked),e.setAttribute(y.issaved,t.isSaved),e.setAttribute(y.likescount,t.likesCount),e.setAttribute(y.username,t.username),e.setAttribute(y.description,t.description),this.PostImageList.push(e),console.log("list",this.PostImageList)})),S.forEach((t=>{const e=this.ownerDocument.createElement("post-tweet");e.setAttribute(C.image,t.image),e.setAttribute(C.description,t.description),e.setAttribute(C.username,t.username),this.PostTweetList.push(e),console.log("list",this.PostTweetList)}))}connectedCallback(){this.render()}render(){var t,e;this.shadowRoot&&(this.shadowRoot.innerHTML+=`\n\t\t\t<style>${f}</style>\n\t\t\t<h3> Hola Mundo </h3>\n\n\t\t\t`);const n=this.ownerDocument.createElement("div");n.className="container-post",this.PostImageList.forEach((t=>{n.appendChild(t)})),null===(t=this.shadowRoot)||void 0===t||t.appendChild(n);const i=this.ownerDocument.createElement("div");i.className="container-tweet",this.PostTweetList.forEach((t=>{i.appendChild(t)})),null===(e=this.shadowRoot)||void 0===e||e.appendChild(i)}}customElements.define("app-container",M)})()})();