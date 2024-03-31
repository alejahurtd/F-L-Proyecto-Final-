(()=>{"use strict";var e={559:(e,t,n)=>{n.d(t,{A:()=>r});var i=n(601),s=n.n(i),o=n(314),a=n.n(o)()(s());a.push([e.id,"* {\n\tpadding: 0;\n\tmargin: 0;\n}\n.menu-bar {\n\twidth: auto;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 2rem;\n\tpadding-inline: 10rem;\n\tbackground-color: #181818;\n}\n\n.logo img,\n.icons img {\n\theight: 3rem; /* Ajusta el tamaño de los iconos y logo */\n}\n\n.search-box {\n\tflex-grow: 1; /* Hace que el input de búsqueda ocupe el espacio disponible */\n\tdisplay: flex;\n\tjustify-content: center; /* Centra el input de búsqueda */\n}\n\n.search-box input {\n\twidth: 50%; /* Ajusta esto según qué tan grande quieres el campo de búsqueda */\n\tpadding: 5px 10px; /* Añade un poco de padding interior para que el texto no esté justo en el borde */\n}\n\n.icons {\n\tdisplay: flex;\n\tjustify-content: space-between; /* Espacia los iconos equitativamente */\n\twidth: 120px; /* Ajusta este valor basado en el tamaño de tus iconos y el espacio que quieres entre ellos */\n}\n",""]);const r=a},195:(e,t,n)=>{n.d(t,{A:()=>r});var i=n(601),s=n.n(i),o=n(314),a=n.n(o)()(s());a.push([e.id,".container {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\twidth: 38rem;\n\theight: 38rem;\n\tborder-radius: 1.5rem;\n\tbackground: #2f60e9;\n\tmargin: 1%;\n}\n\n.imgContainer {\n\twidth: 90%;\n\theight: 85%;\n\tdisplay: flex;\n\tjustify-content: center;\n\toverflow: hidden;\n\tborder-radius: 0.5rem;\n\tpadding-block: 1rem;\n}\n\n.img {\n\twidth: 100%;\n\theight: 100%;\n\tobject-fit: cover;\n\tborder-radius: 1rem;\n}\n\n.userContent {\n\twidth: 100%;\n\theight: 15%;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: flex-start;\n\tpadding-top: 2rem;\n}\n\n.iconContainer {\n\theight: 30%;\n\tdisplay: flex;\n\tjustify-content: flex-start;\n}\n\n.icon {\n\twidth: 100%;\n\theight: 100%;\n\tpadding-left: 2rem;\n\tmargin-top: -1.5rem;\n}\n\n.likes {\n\tcolor: #cbf900;\n\tfont-family: Inter;\n\tfont-size: 1rem;\n\tfont-style: normal;\n\tfont-weight: 600;\n\tpadding-left: 2rem;\n\tmargin-top: -1rem;\n}\n\n.likes,\n.username,\n.description {\n\ttext-align: left;\n}\n\n.username {\n\tcolor: #fff;\n\tfont-family: Inter;\n\tfont-size: 1.2rem;\n\tfont-style: normal;\n\tfont-weight: 700;\n\tpadding-left: 2rem;\n\tmargin-top: -0.5rem;\n}\n\n.description {\n\tcolor: #fff;\n\tfont-family: Inter;\n\tfont-size: 1.2rem;\n\tfont-style: normal;\n\tfont-weight: 400;\n}\n",""]);const r=a},83:(e,t,n)=>{n.d(t,{A:()=>r});var i=n(601),s=n.n(i),o=n(314),a=n.n(o)()(s());a.push([e.id,".container {\n\twidth: 30rem;\n\theight: 12rem;\n\tborder-radius: 1.5rem;\n\tbackground: linear-gradient(0deg, #cbf900 0%, #cbf900 100%), linear-gradient(0deg, #cbf900 0%, #cbf900 100%), #cbf900;\n\tmargin: 2%;\n}\n\n.tweetandimg {\n\theight: 40%;\n\tpadding-block: 2rem;\n\tpadding-inline: 3rem;\n\tdisplay: flex;\n\talign-items: center;\n\tflex-direction: row;\n}\n.tweet {\n\twidth: 80%;\n}\n\n.description {\n\tfont-family: Inter;\n\tfont-size: 1.5rem;\n\tfont-style: normal;\n\tfont-weight: 500;\n\tcolor: #181818;\n}\n\n.img {\n\twidth: 20%;\n\tdisplay: flex;\n\tjustify-content: center;\n\tbox-sizing: content-box;\n}\n\n.img-container {\n\twidth: 4.03388rem;\n\theight: 4.45694rem;\n\tborder-radius: 50%;\n\toverflow: hidden;\n}\n.img-post {\n\twidth: 100%;\n\theight: 100%;\n\tobject-fit: cover;\n}\n\n.infoUser {\n\theight: 30%;\n\tborder-radius: 0rem 0rem 1.5rem 1.5rem;\n\tbackground: linear-gradient(0deg, rgba(47, 96, 233, 0.2) 0%, rgba(47, 96, 233, 0.2) 100%),\n\t\tlinear-gradient(0deg, #cbf900 0%, #cbf900 100%), #cbf900;\n\tdisplay: flex;\n\talign-items: flex-end;\n\tbox-sizing: border-box;\n\talign-items: center;\n\tpadding-inline: 2rem;\n}\n.username {\n\tcolor: #181818;\n\tfont-family: Inter;\n\tfont-size: 1rem;\n\tfont-style: normal;\n\tfont-weight: 600;\n}\n",""]);const r=a},647:(e,t,n)=>{n.d(t,{A:()=>r});var i=n(601),s=n.n(i),o=n(314),a=n.n(o)()(s());a.push([e.id,"* {\n\tpadding: 0;\n\tmargin: 0;\n\tbackground-color: #181818;\n}\n\n.container {\n\tdisplay: grid;\n\tgrid-template-columns: 1.3fr 1fr;\n\tgrid-template-rows: auto auto;\n}\n.container-post {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: end;\n\tmargin-right: 3rem;\n\tbox-sizing: border-box;\n}\n.container-tweet {\n\tdisplay: flex;\n\tflex-direction: column;\n\tbox-sizing: border-box;\n}\n",""]);const r=a},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,s,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var r=0;r<this.length;r++){var c=this[r][0];null!=c&&(a[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);i&&a[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),s&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=s):l[4]="".concat(s)),t.push(l))}},t}},601:e=>{e.exports=function(e){return e[1]}}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var o=t[i]={id:i,exports:{}};return e[i](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var s=i.length-1;s>-1&&(!e||!/^http(s?):/.test(e));)e=i[s--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e,t=n(647),i=n(195);!function(e){e.image="image",e.isLiked="isLiked",e.isSaved="isSaved",e.likescount="likescount",e.username="username",e.description="description"}(e||(e={}));class s extends HTMLElement{constructor(){super(),this.changeLike=()=>{this.isLiked=!this.isLiked,console.log("isLiked:",this.isLiked),this.render()},this.changeSaved=()=>{this.isSaved=!this.isSaved,console.log("isSaved:",this.isSaved),this.render()},this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys({image:null,isLiked:null,isSaved:null,likescount:null,username:null,description:null})}attributeChangedCallback(t,n,i){switch(t){case e.isLiked:this.isLiked="true"===i;break;case e.isSaved:this.isSaved="true"===i}this.render()}connectedCallback(){this.render()}render(){var e;let t="../../assets/emptyHeart.png";this.isLiked&&(t="../../assest/heart.png");let n="../../assest/emptySave.png";if(this.isSaved&&(n="../../assest/save.png"),this.shadowRoot){this.shadowRoot.innerHTML="",this.shadowRoot.innerHTML+=`\n\t\t\t\t\t\t <style> ${i.A}</style>\n\n        `;const s=this.ownerDocument.createElement("section");s.className="container";const o=this.ownerDocument.createElement("div");o.className="imgContainer",s.appendChild(o);const a=this.ownerDocument.createElement("img");a.className="img",a.textContent=this.image||"",a.alt="Post image",o.appendChild(a);const r=this.ownerDocument.createElement("div");r.className="userContent";const c=this.ownerDocument.createElement("div");c.className="iconContainer",r.appendChild(c);const d=this.ownerDocument.createElement("img");d.className="icon",d.id=t||"likeBtn",d.addEventListener("click",(()=>{console.log("likeBtn clicked!",d.id)})),c.appendChild(d);const l=this.ownerDocument.createElement("img");l.className="icon",l.id=n||"",l.addEventListener("click",(()=>{console.log("saveBtn clicked",l.id)})),c.appendChild(l);const m=this.ownerDocument.createElement("p");m.className="likes",m.textContent=`${this.likescount} likes`||"",r.appendChild(m);const p=this.ownerDocument.createElement("p"),h=this.ownerDocument.createElement("span");h.className="username",h.textContent=this.username||"";const g=this.ownerDocument.createElement("span");g.className="description",g.textContent=this.description||"",p.appendChild(h),p.appendChild(this.ownerDocument.createTextNode(": ")),p.appendChild(g),r.appendChild(p),s.appendChild(r),null===(e=this.shadowRoot)||void 0===e||e.appendChild(s)}}}customElements.define("post-image",s);var o,a=n(83);!function(e){e.image="image",e.description="description",e.username="username"}(o||(o={}));class r extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys({image:null,description:null,username:null})}attributeChangedCallback(e,t,n){this[e]=n,this.render()}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML="",this.shadowRoot.innerHTML+=`\n\t\t\t\t\t\t <style> ${a.A}</style>\n      <section class="container">\n\t\t\t\t<div class="tweetandimg">\n\t\t\t\t  <div class=tweet>\n\t\t\t\t\t <p class= "description"> ${this.description} </p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="img">\n\t\t\t\t\t <div class= "img-container">\n\t\t\t\t\t   <img class= "img-post" src="${this.image}" alt="Post image">\n\t\t\t\t   </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class='infoUser'>\n\t\t\t\t <p class= "username"> ${this.username} </p>\n\t\t\t\t</div>\n\t\t\t</section>\n\n        `)}}customElements.define("post-tweet",r);var c=n(559);const d=n.p+"f450e5c2e01a158d6011adc7e4cf416e.png",l=n.p+"03d9e4e5609a75e81a6ad18845dd26f9.png",m=n.p+"15e1038488b41760e203e22f5bd84610.png",p=n.p+"689225dd223debf8fcfd8c571a84c868.png";class h extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){if(this.shadowRoot){this.shadowRoot.innerHTML="";const e=document.createElement("style");e.textContent="\n                .menu-bar {\n                    display: flex;\n                    justify-content: space-between;\n                    align-items: center;\n                    padding: 20px;\n                }\n\n                .icons img {\n                    height: 40px;\n                    margin-right: 10px\n                }\n\n                .logo img{\n                    height: 35px;\n                }\n\n                .search-box {\n                    flex-grow: 1;\n                    height: 40px;\n                    display: flex;\n                    justify-content: center;\n                }\n\n                .search-box-input {\n                    width: 30%;\n                    padding: 5px 10px;\n                    text-align: center;\n                    background-color: #2F60E9;\n                    color: white;\n                    border-radius: 20px;\n                    border: none;\n                    outline:none;\n                }\n\n\n                .icons {\n                    display: flex;\n                    justify-content: space-between;\n                    margin-right: 35px;\n                    width: 100px;\n                }\n\n                .search-box-input::placeholder {\n                    color: white;\n                }\n            ",this.shadowRoot.appendChild(e),this.shadowRoot.innerHTML+=`\n              <style>${c.A}</style>\n              <nav class="menu-bar">\n                  <div class="logo">\n                  <img src="${d}" alt="logo">\n                  </div>\n                  <div class="search-box">\n                      <input type="text" class="search-box-input"  placeholder="Search...">\n                  </div>\n                  <div class="icons">\n                    <img src="${l}" alt="Icono home">\n                    <img src="${m}" alt="Icono home">\n                    <img src="${p}" alt="Icono profile">\n                  </div>\n\n              </nav>\n          `}}}customElements.define("menu-bar",h);const g=[{id:"1",image:"https://images.pexels.com/photos/11000413/pexels-photo-11000413.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",isLiked:!0,isSaved:!0,likesCount:"950",username:"@guti_santi",description:"Ready for the next marathons"},{id:"2",image:"https://i.pinimg.com/564x/8d/e2/53/8de253777f0974e37f142cadb822593b.jpg",isLiked:!0,isSaved:!1,likesCount:"590",username:"@alejah__",description:"Exercise: self-love in motion"},{id:"3",image:"https://i.pinimg.com/564x/73/b2/cb/73b2cb44bafd88ef28423d8ecdf629f0.jpg",isLiked:!0,isSaved:!0,likesCount:"1300",username:"@ana_hillton",description:"energy for the day"},{id:"4",image:"https://i.pinimg.com/564x/81/1d/ec/811dec8d7c02e6abfba458ece184d376.jpg",isLiked:!0,isSaved:!1,likesCount:"480",username:"@juanesv08",description:"Mastering the ropes"}],u=[{id:"1",image:"https://images.pexels.com/photos/11000413/pexels-photo-11000413.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",description:"Ready for the next marathons",username:"@guti_santi"},{id:"2",image:"https://i.pinimg.com/564x/8d/e2/53/8de253777f0974e37f142cadb822593b.jpg",description:"Exercise: self-love in motion",username:"@alejah__"},{id:"3",image:"https://i.pinimg.com/564x/73/b2/cb/73b2cb44bafd88ef28423d8ecdf629f0.jpg",description:"energy for the day",username:"@ana_hillton"},{id:"4",image:"https://i.pinimg.com/564x/81/1d/ec/811dec8d7c02e6abfba458ece184d376.jpg",description:"Mastering the ropes",username:"@juanesv08"},{id:"5",image:"https://images.pexels.com/photos/11000413/pexels-photo-11000413.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",description:"Ready for the next marathons",username:"@guti_santi"},{id:"6",image:"https://i.pinimg.com/564x/8d/e2/53/8de253777f0974e37f142cadb822593b.jpg",description:"Exercise: self-love in motion",username:"@alejah__"},{id:"7",image:"https://i.pinimg.com/564x/73/b2/cb/73b2cb44bafd88ef28423d8ecdf629f0.jpg",description:"energy for the day",username:"@ana_hillton"},{id:"8",image:"https://i.pinimg.com/564x/81/1d/ec/811dec8d7c02e6abfba458ece184d376.jpg",description:"Mastering the ropes",username:"@juanesv08"},{id:"9",image:"https://images.pexels.com/photos/11000413/pexels-photo-11000413.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",description:"Ready for the next marathons",username:"@guti_santi"},{id:"10",image:"https://i.pinimg.com/564x/8d/e2/53/8de253777f0974e37f142cadb822593b.jpg",description:"Exercise: self-love in motion",username:"@alejah__"},{id:"11",image:"https://i.pinimg.com/564x/73/b2/cb/73b2cb44bafd88ef28423d8ecdf629f0.jpg",description:"energy for the day",username:"@ana_hillton"},{id:"12",image:"https://i.pinimg.com/564x/81/1d/ec/811dec8d7c02e6abfba458ece184d376.jpg",description:"Mastering the ropes",username:"@juanesv08"}];class f extends HTMLElement{constructor(){super(),this.PostImageList=[],this.PostTweetList=[],this.attachShadow({mode:"open"}),g.forEach((t=>{const n=this.ownerDocument.createElement("post-image");n.setAttribute(e.image,t.image),n.setAttribute(e.isLiked,t.isLiked?"true":"false"),n.setAttribute(e.isSaved,t.isSaved?"true":"false"),n.setAttribute(e.likescount,t.likesCount),n.setAttribute(e.username,t.username),n.setAttribute(e.description,t.description),this.PostImageList.push(n),console.log("list",this.PostImageList)})),u.forEach((e=>{const t=this.ownerDocument.createElement("post-tweet");t.setAttribute(o.image,e.image),t.setAttribute(o.description,e.description),t.setAttribute(o.username,e.username),this.PostTweetList.push(t),console.log("list",this.PostTweetList)}))}connectedCallback(){this.render()}render(){var e;this.shadowRoot&&(this.shadowRoot.innerHTML+=`\n            <style>${t.A}</style>\n        `);const n=this.ownerDocument.createElement("menu-bar");n.className="menubar";const i=this.ownerDocument.createElement("section");i.className="container";const s=this.ownerDocument.createElement("div");s.className="container-post",this.PostImageList.forEach((e=>{s.appendChild(e)})),i.appendChild(s);const o=this.ownerDocument.createElement("div");o.className="container-tweet",this.PostTweetList.forEach((e=>{o.appendChild(e)})),this.ownerDocument.createElement("creat-post").className="creatPost",i.appendChild(o),this.shadowRoot.appendChild(n),null===(e=this.shadowRoot)||void 0===e||e.appendChild(i)}}customElements.define("app-container",f)})()})();