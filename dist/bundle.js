(() => {
	'use strict';
	var t = {
			195: (t, n, e) => {
				e.d(n, { A: () => a });
				var i = e(601),
					s = e.n(i),
					r = e(314),
					o = e.n(r)()(s());
				o.push([
					t.id,
					"* {\n\tfont-family: 'Inter', sans-serif;\n}\n\n.container {\n\tdisplay: flex;\n\talign-items: center;\n\twidth: 50%;\n\tborder-radius: 20px;\n\tbackground: #2f60e9;\n\tmargin: 1%;\n\tpadding: 2rem;\n}\n.img-post {\n\twidth: 100%;\n\tmax-width: 400px;\n\theight: auto;\n\tborder-radius: 8px;\n\tmargin-bottom: 1rem;\n}\n\n.icon-container {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tmargin-bottom: 1rem;\n}\n\n.icon-container img {\n\twidth: 30px;\n\theight: 30px;\n\tmargin-right: 10px;\n}\n\n.likes-count {\n\tfont-size: 1.2rem;\n\tmargin-bottom: 1rem;\n}\n\n.username {\n\tfont-weight: bold;\n\tmargin-bottom: 0.5rem;\n}\n\n.description {\n\tfont-style: italic;\n}\n",
					'',
				]);
				const a = o;
			},
			83: (t, n, e) => {
				e.d(n, { A: () => a });
				var i = e(601),
					s = e.n(i),
					r = e(314),
					o = e.n(r)()(s());
				o.push([t.id, '.img-post {\n\tdisplay: flex;\n\tjustify-content: end;\n}\n', '']);
				const a = o;
			},
			647: (t, n, e) => {
				e.d(n, { A: () => a });
				var i = e(601),
					s = e.n(i),
					r = e(314),
					o = e.n(r)()(s());
				o.push([
					t.id,
					'* {\n\tpadding-inline: 2rem;\n\tbackground: #181818;\n}\n\n.container-post {\n\tdisplay: flex;\n\talign-items: flex-start;\n}\n.container-tweet {\n\tdisplay: flex;\n\talign-items: flex-end;\n}\n',
					'',
				]);
				const a = o;
			},
			314: (t) => {
				t.exports = function (t) {
					var n = [];
					return (
						(n.toString = function () {
							return this.map(function (n) {
								var e = '',
									i = void 0 !== n[5];
								return (
									n[4] && (e += '@supports ('.concat(n[4], ') {')),
									n[2] && (e += '@media '.concat(n[2], ' {')),
									i && (e += '@layer'.concat(n[5].length > 0 ? ' '.concat(n[5]) : '', ' {')),
									(e += t(n)),
									i && (e += '}'),
									n[2] && (e += '}'),
									n[4] && (e += '}'),
									e
								);
							}).join('');
						}),
						(n.i = function (t, e, i, s, r) {
							'string' == typeof t && (t = [[null, t, void 0]]);
							var o = {};
							if (i)
								for (var a = 0; a < this.length; a++) {
									var c = this[a][0];
									null != c && (o[c] = !0);
								}
							for (var d = 0; d < t.length; d++) {
								var l = [].concat(t[d]);
								(i && o[l[0]]) ||
									(void 0 !== r &&
										(void 0 === l[5] ||
											(l[1] = '@layer'.concat(l[5].length > 0 ? ' '.concat(l[5]) : '', ' {').concat(l[1], '}')),
										(l[5] = r)),
									e && (l[2] ? ((l[1] = '@media '.concat(l[2], ' {').concat(l[1], '}')), (l[2] = e)) : (l[2] = e)),
									s &&
										(l[4]
											? ((l[1] = '@supports ('.concat(l[4], ') {').concat(l[1], '}')), (l[4] = s))
											: (l[4] = ''.concat(s))),
									n.push(l));
							}
						}),
						n
					);
				};
			},
			601: (t) => {
				t.exports = function (t) {
					return t[1];
				};
			},
			72: (t) => {
				var n = [];
				function e(t) {
					for (var e = -1, i = 0; i < n.length; i++)
						if (n[i].identifier === t) {
							e = i;
							break;
						}
					return e;
				}
				function i(t, i) {
					for (var r = {}, o = [], a = 0; a < t.length; a++) {
						var c = t[a],
							d = i.base ? c[0] + i.base : c[0],
							l = r[d] || 0,
							m = ''.concat(d, ' ').concat(l);
						r[d] = l + 1;
						var p = e(m),
							u = { css: c[1], media: c[2], sourceMap: c[3], supports: c[4], layer: c[5] };
						if (-1 !== p) n[p].references++, n[p].updater(u);
						else {
							var h = s(u, i);
							(i.byIndex = a), n.splice(a, 0, { identifier: m, updater: h, references: 1 });
						}
						o.push(m);
					}
					return o;
				}
				function s(t, n) {
					var e = n.domAPI(n);
					return (
						e.update(t),
						function (n) {
							if (n) {
								if (
									n.css === t.css &&
									n.media === t.media &&
									n.sourceMap === t.sourceMap &&
									n.supports === t.supports &&
									n.layer === t.layer
								)
									return;
								e.update((t = n));
							} else e.remove();
						}
					);
				}
				t.exports = function (t, s) {
					var r = i((t = t || []), (s = s || {}));
					return function (t) {
						t = t || [];
						for (var o = 0; o < r.length; o++) {
							var a = e(r[o]);
							n[a].references--;
						}
						for (var c = i(t, s), d = 0; d < r.length; d++) {
							var l = e(r[d]);
							0 === n[l].references && (n[l].updater(), n.splice(l, 1));
						}
						r = c;
					};
				};
			},
			659: (t) => {
				var n = {};
				t.exports = function (t, e) {
					var i = (function (t) {
						if (void 0 === n[t]) {
							var e = document.querySelector(t);
							if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement)
								try {
									e = e.contentDocument.head;
								} catch (t) {
									e = null;
								}
							n[t] = e;
						}
						return n[t];
					})(t);
					if (!i)
						throw new Error(
							"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
						);
					i.appendChild(e);
				};
			},
			540: (t) => {
				t.exports = function (t) {
					var n = document.createElement('style');
					return t.setAttributes(n, t.attributes), t.insert(n, t.options), n;
				};
			},
			56: (t, n, e) => {
				t.exports = function (t) {
					var n = e.nc;
					n && t.setAttribute('nonce', n);
				};
			},
			825: (t) => {
				t.exports = function (t) {
					if ('undefined' == typeof document) return { update: function () {}, remove: function () {} };
					var n = t.insertStyleElement(t);
					return {
						update: function (e) {
							!(function (t, n, e) {
								var i = '';
								e.supports && (i += '@supports ('.concat(e.supports, ') {')),
									e.media && (i += '@media '.concat(e.media, ' {'));
								var s = void 0 !== e.layer;
								s && (i += '@layer'.concat(e.layer.length > 0 ? ' '.concat(e.layer) : '', ' {')),
									(i += e.css),
									s && (i += '}'),
									e.media && (i += '}'),
									e.supports && (i += '}');
								var r = e.sourceMap;
								r &&
									'undefined' != typeof btoa &&
									(i += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
										btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
										' */'
									)),
									n.styleTagTransform(i, t, n.options);
							})(n, t, e);
						},
						remove: function () {
							!(function (t) {
								if (null === t.parentNode) return !1;
								t.parentNode.removeChild(t);
							})(n);
						},
					};
				};
			},
			113: (t) => {
				t.exports = function (t, n) {
					if (n.styleSheet) n.styleSheet.cssText = t;
					else {
						for (; n.firstChild; ) n.removeChild(n.firstChild);
						n.appendChild(document.createTextNode(t));
					}
				};
			},
		},
		n = {};
	function e(i) {
		var s = n[i];
		if (void 0 !== s) return s.exports;
		var r = (n[i] = { id: i, exports: {} });
		return t[i](r, r.exports, e), r.exports;
	}
	(e.n = (t) => {
		var n = t && t.__esModule ? () => t.default : () => t;
		return e.d(n, { a: n }), n;
	}),
		(e.d = (t, n) => {
			for (var i in n) e.o(n, i) && !e.o(t, i) && Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
		}),
		(e.g = (function () {
			if ('object' == typeof globalThis) return globalThis;
			try {
				return this || new Function('return this')();
			} catch (t) {
				if ('object' == typeof window) return window;
			}
		})()),
		(e.o = (t, n) => Object.prototype.hasOwnProperty.call(t, n)),
		(() => {
			var t;
			e.g.importScripts && (t = e.g.location + '');
			var n = e.g.document;
			if (!t && n && (n.currentScript && (t = n.currentScript.src), !t)) {
				var i = n.getElementsByTagName('script');
				if (i.length) for (var s = i.length - 1; s > -1 && (!t || !/^http(s?):/.test(t)); ) t = i[s--].src;
			}
			if (!t) throw new Error('Automatic publicPath is not supported in this browser');
			(t = t
				.replace(/#.*$/, '')
				.replace(/\?.*$/, '')
				.replace(/\/[^\/]+$/, '/')),
				(e.p = t);
		})(),
		(e.nc = void 0),
		(() => {
			var t = e(72),
				n = e.n(t),
				i = e(825),
				s = e.n(i),
				r = e(659),
				o = e.n(r),
				a = e(56),
				c = e.n(a),
				d = e(540),
				l = e.n(d),
				m = e(113),
				p = e.n(m),
				u = e(647),
				h = {};
			(h.styleTagTransform = p()),
				(h.setAttributes = c()),
				(h.insert = o().bind(null, 'head')),
				(h.domAPI = s()),
				(h.insertStyleElement = l()),
				n()(u.A, h);
			const f = u.A && u.A.locals ? u.A.locals : void 0;
			var g = e(195),
				v = {};
			(v.styleTagTransform = p()),
				(v.setAttributes = c()),
				(v.insert = o().bind(null, 'head')),
				(v.domAPI = s()),
				(v.insertStyleElement = l()),
				n()(g.A, v);
			const b = g.A && g.A.locals ? g.A.locals : void 0;
			var y;
			!(function (t) {
				(t.image = 'image'),
					(t.isliked = 'isliked'),
					(t.issaved = 'issaved'),
					(t.likescount = 'likescount'),
					(t.username = 'username'),
					(t.description = 'description');
			})(y || (y = {}));
			class w extends HTMLElement {
				constructor() {
					super(), this.attachShadow({ mode: 'open' });
				}
				static get observedAttributes() {
					return Object.keys({
						image: null,
						isliked: null,
						issaved: null,
						likescount: null,
						username: null,
						description: null,
					});
				}
				attributeChangedCallback(t, n, e) {
					(this[t] = e), this.render();
				}
				connectedCallback() {
					this.render();
				}
				render() {
					if (this.shadowRoot) {
						this.shadowRoot.innerHTML = '';
						const t = this.ownerDocument.createElement('style');
						(t.textContent =
							'\n\n\t\t\t.container {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\talign-items: center;\n\t\t\t\twidth: 25rem;\n\t\t\t\theight: 35rem;\n\t\t\t\tborder-radius: 1.5rem;\n\t\t\t\tbackground: #2f60e9;\n\t\t\t\tmargin: 1rem;\n\t\t\t\tpadding-top: 1rem;\n\t\t\t\tpadding-inline:1.5rem;\n\t\t}\n\t\t.img-container {\n\t\twidth: 25rem;\n    display: flex;\n    justify-content: center;\n    overflow: hidden;\n    border-radius:.5rem;\n\t\tpadding-block:1rem;\n\n\t\t}\n\n\t\t.img-post {\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tobject-fit: cover;\n\t\t\tborder-radius: 1rem;\n\t\t}\n\n\n\t\t.content-container{\n\t\t\twidth: 100%;\n\t\t\tdisplay: flex;\n      flex-direction: column;\n      align-items: flex-start;\n\n\n\t\t}\n\n\t\t.icon-container {\n\t\t\twidth: 2.8rem;\n\t\t\theight: 1.5rem;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: flex-start;\n\n\t\t}\n\n\t\t.icon-container img {\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tpadding-left:.4rem;\n\t\t}\n\n\t\t.likes-count, .username, .description{\n\t\t\ttext-align: left;\n\n\t\t}\n\t\t.likes-count{\n\t\t\tcolor: #CBF900;\n\t\t\tfont-family: Inter;\n\t\t\tfont-size: 1rem;\n\t\t\tfont-style: normal;\n\t\t\tfont-weight: 600;\n\t\t\tpadding-left:.4rem;\n\t\t}\n\t\t.username {\n\t\t\tcolor: #FFF;\n\t\t\tfont-family: Inter;\n\t\t\tfont-size: 1rem;\n\t\t\tfont-style: normal;\n\t\t\tfont-weight: 700;\n\t\t\tpadding-left:.5rem;\n\t\t\tmargin-top:-.3rem;\n\t\t\tpadding-bottom:1rem;\n\n\t\t}\n\t\t.description {\n\t\t\tcolor: #FFF;\n\t\t\tfont-family: Inter;\n\t\t\tfont-size: 1rem;\n\t\t\tfont-style: normal;\n\t\t\tfont-weight: 400;\n\t\t}\n\n    '),
							this.shadowRoot.appendChild(t),
							(this.shadowRoot.innerHTML += `\n\t\t\t\t\t\t <style> ${b}</style>\n\n            <section class="container">\n\t\t\t\t\t\t\t\t<div class= "img-container">\n\t\t\t\t\t\t\t\t\t\t<img class= "img-post" src="${this.image}" alt="Post image">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t <div class= "content-container">\n\t\t\t\t\t\t\t\t \t\t<div class= "icon-container">\n\t\t\t\t\t\t\t\t\t\t\t<img class= "icon-container img" src="${this.isliked}" alt="Like icon">\n\t\t\t\t\t\t\t\t\t\t\t<img class= "icon-container img" src="${this.issaved}" alt="Save icon">\n\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t <h3 class= "likes-count">${this.likescount} likes</h3>\n\t\t\t\t\t\t\t\t\t\t<p\n\t\t\t\t\t\t\t\t\t\t\t<span class= "username" >${this.username} </span>: <span class= "description"> ${this.description}</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\n\n\n            </section>\n        `);
					}
				}
			}
			customElements.define('post-image', w);
			var x = e(83),
				k = {};
			(k.styleTagTransform = p()),
				(k.setAttributes = c()),
				(k.insert = o().bind(null, 'head')),
				(k.domAPI = s()),
				(k.insertStyleElement = l()),
				n()(x.A, k);
			const C = x.A && x.A.locals ? x.A.locals : void 0;
			var A;
			!(function (t) {
				(t.image = 'image'), (t.description = 'description'), (t.username = 'username');
			})(A || (A = {}));
			class E extends HTMLElement {
				constructor() {
					super(), this.attachShadow({ mode: 'open' });
				}
				static get observedAttributes() {
					return Object.keys({ image: null, description: null, username: null });
				}
				attributeChangedCallback(t, n, e) {
					(this[t] = e), this.render();
				}
				connectedCallback() {
					this.render();
				}
				render() {
					if (this.shadowRoot) {
						this.shadowRoot.innerHTML = '';
						const t = this.ownerDocument.createElement('style');
						(t.textContent =
							'\n\n\t\t\t.container {\n\t\t\t\twidth: 35rem;\n\t\t\t\theight: 12rem;\n\t\t\t\tborder-radius: 1.5rem;\n\t\t\t\tbackground: linear-gradient(0deg, #CBF900 0%, #CBF900 100%), linear-gradient(0deg, #CBF900 0%, #CBF900 100%), #CBF900;\n\t\t\t\tmargin: 1rem;\n\t\t\t\tdisplay:flex;\n\t\t\t\tflex-direction: column;\n\t\t}\n\n\t\t.tweetandimg{\n\t\t\twidth:30rem;\n\t\t\thight:8rem;\n\t\t\tpadding-block:1rem;\n\t\t\tpadding-inline: 3rem;\n\t\t\tdisplay:flex;\n\t\t\talign-items:center;\n\t\t\tflex-direction:row;\n\t\t\tflex:1;\n\t\t\tgap:3rem;\n\t\t}\n\n\t\t.img{\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\n\n\t\t}\n\t\t.img-container {\n\t\t\twidth: 5rem;\n\t\t\theight: 5rem;\n\t\t\tborder-radius: 50%;\n\t\t\toverflow: hidden;\n\n\t\t}\n\t\t.img-post {\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tobject-fit: cover;\n\t\t}\n\n\t\t.description{\n\t\t\tcolor: #000;\n\t\t\tfont-family: Inter;\n\t\t\tfont-size: 1.8rem;\n\t\t\tfont-style: normal;\n\t\t\tfont-weight: 500;\n\t\t}\n\t\t.content-container{\n\t\t\twidth: 35rem;\n\t\t\theight: 4rem;\n\t\t\tborder-radius: 0rem 0rem 1.5rem 1.5rem;\n\t\t\tbackground: linear-gradient(0deg, rgba(47, 96, 233, 0.20) 0%, rgba(47, 96, 233, 0.20) 100%), linear-gradient(0deg, #CBF900 0%, #CBF900 100%), #CBF900;\n\t\t\tdisplay: flex;\n\t\t\talign-items: flex-end;\n\t\t\tbox-sizing: border-box;\n\t\t\talign-items:center;\n\t\t\tpadding-inline:2rem;\n\t\t}\n\t\t.username{\n\t\t\tcolor: #181818;\n\t\t\tfont-family: Inter;\n\t\t\tfont-size: 1.3rem;\n\t\t\tfont-style: normal;\n\t\t\tfont-weight: 600;\n\t\t}\n\n\n    '),
							this.shadowRoot.appendChild(t),
							(this.shadowRoot.innerHTML += `\n\t\t\t\t\t\t <style> ${C}</style>\n\n      <section class='container'>\n\t\t\t\t<div class="tweetandimg">\n\t\t\t\t  <div class=tweet>\n\t\t\t\t\t <p class= "description"> ${this.description} </p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='img'>\n\t\t\t\t\t <div class= "img-container">\n\t\t\t\t\t   <img class= "img-post" src="${this.image}" alt="Post image">\n\t\t\t\t   </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class='infoUser'>\n\t\t\t\t <p class= "username"> ${this.username} </p>\n\t\t\t\t</div>\n\t\t\t</section>\n\n        `);
					}
				}
			}
			customElements.define('post-tweet', E);
			const T = e.p + 'assets/images/13c42b09bd85382f60650f26ecff8636.png',
				j = e.p + 'assets/images/7fefe267955724a4df33b3f3d0c2e4e5.png',
				L = [
					{
						image:
							'https://images.pexels.com/photos/11000413/pexels-photo-11000413.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
						isLiked: T,
						isSaved: j,
						likesCount: '950',
						username: '@guti_santi',
						description: 'Ready for the next marathons',
					},
					{
						image: 'https://i.pinimg.com/564x/8d/e2/53/8de253777f0974e37f142cadb822593b.jpg',
						isLiked: T,
						isSaved: j,
						likesCount: '590',
						username: '@alejah__',
						description: 'Exercise: self-love in motion',
					},
					{
						image: 'https://i.pinimg.com/564x/73/b2/cb/73b2cb44bafd88ef28423d8ecdf629f0.jpg',
						isLiked: T,
						isSaved: j,
						likesCount: '1300',
						username: '@ana_hillton',
						description: 'energy for the day',
					},
					{
						image: 'https://i.pinimg.com/564x/81/1d/ec/811dec8d7c02e6abfba458ece184d376.jpg',
						isLiked: T,
						isSaved: j,
						likesCount: '480',
						username: '@juanesv08',
						description: 'Mastering the ropes',
					},
				],
				S = [
					{
						image:
							'https://images.pexels.com/photos/11000413/pexels-photo-11000413.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
						description: 'Ready for the next marathons',
						username: '@guti_santi',
					},
					{
						image: 'https://i.pinimg.com/564x/8d/e2/53/8de253777f0974e37f142cadb822593b.jpg',
						description: 'Exercise: self-love in motion',
						username: '@alejah__',
					},
					{
						image: 'https://i.pinimg.com/564x/73/b2/cb/73b2cb44bafd88ef28423d8ecdf629f0.jpg',
						description: 'energy for the day',
						username: '@ana_hillton',
					},
					{
						image: 'https://i.pinimg.com/564x/81/1d/ec/811dec8d7c02e6abfba458ece184d376.jpg',
						description: 'Mastering the ropes',
						username: '@juanesv08',
					},
				];
			class M extends HTMLElement {
				constructor() {
					super(),
						(this.PostImageList = []),
						(this.PostTweetList = []),
						this.attachShadow({ mode: 'open' }),
						L.forEach((t) => {
							const n = this.ownerDocument.createElement('post-image');
							n.setAttribute(y.image, t.image),
								n.setAttribute(y.isliked, t.isLiked),
								n.setAttribute(y.issaved, t.isSaved),
								n.setAttribute(y.likescount, t.likesCount),
								n.setAttribute(y.username, t.username),
								n.setAttribute(y.description, t.description),
								this.PostImageList.push(n),
								console.log('list', this.PostImageList);
						}),
						S.forEach((t) => {
							const n = this.ownerDocument.createElement('post-tweet');
							n.setAttribute(A.image, t.image),
								n.setAttribute(A.description, t.description),
								n.setAttribute(A.username, t.username),
								this.PostTweetList.push(n),
								console.log('list', this.PostTweetList);
						});
				}
				connectedCallback() {
					this.render();
				}
				render() {
					var t, n;
					this.shadowRoot &&
						(this.shadowRoot.innerHTML += `\n            <style>${f}</style>\n        </style><h3> Hola Mundo </h3>\n\n        `),
						(this.ownerDocument.createElement('div').className = 'card-container');
					const e = this.ownerDocument.createElement('div');
					(e.className = 'container-post'),
						this.PostImageList.forEach((t) => {
							e.appendChild(t);
						}),
						null === (t = this.shadowRoot) || void 0 === t || t.appendChild(e);
					const i = this.ownerDocument.createElement('div');
					(i.className = 'container-tweet'),
						this.PostTweetList.forEach((t) => {
							i.appendChild(t);
						}),
						null === (n = this.shadowRoot) || void 0 === n || n.appendChild(i);
				}
			}
			customElements.define('app-container', M);
		})();
})();
