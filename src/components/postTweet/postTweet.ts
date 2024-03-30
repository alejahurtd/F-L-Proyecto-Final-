import tweetStyles from './postTweet.css';

export enum Attribute {
	'image' = 'image',
	'description' = 'description',
	'username' = 'username',
}

class PostTweet extends HTMLElement {
	image?: string;
	description?: string;
	username?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			image: null,
			description: null,
			username: null,
		};
		return Object.keys(attrs);
	}
	attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			default:
				this[propName] = newValue;
				break;
		}
		this.render();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			// Limpiar el contenido existente en el shadowRoot, para que no se duplique el contenido
			this.shadowRoot.innerHTML = '';

			// creamos nuestro css para solo el componente.

			const css = this.ownerDocument.createElement('style');
			css.textContent = `

			.container {
				width: 35rem;
				height: 12rem;
				border-radius: 1.5rem;
				background: linear-gradient(0deg, #CBF900 0%, #CBF900 100%), linear-gradient(0deg, #CBF900 0%, #CBF900 100%), #CBF900;
				margin: 1rem;
				display:flex;
				flex-direction: column;
		}

		.tweetandimg{
			width:30rem;
			hight:8rem;
			padding-block:1rem;
			padding-inline: 3rem;
			display:flex;
			align-items:center;
			flex-direction:row;
			flex:1;
			gap:3rem;
		}

		.img{
			display: flex;
			align-items: center;


		}
		.img-container {
			width: 5rem;
			height: 5rem;
			border-radius: 50%;
			overflow: hidden;

		}
		.img-post {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		.description{
			color: #000;
			font-family: Inter;
			font-size: 1.8rem;
			font-style: normal;
			font-weight: 500;
		}
		.content-container{
			width: 35rem;
			height: 4rem;
			border-radius: 0rem 0rem 1.5rem 1.5rem;
			background: linear-gradient(0deg, rgba(47, 96, 233, 0.20) 0%, rgba(47, 96, 233, 0.20) 100%), linear-gradient(0deg, #CBF900 0%, #CBF900 100%), #CBF900;
			display: flex;
			align-items: flex-end;
			box-sizing: border-box;
			align-items:center;
			padding-inline:2rem;
		}
		.username{
			color: #181818;
			font-family: Inter;
			font-size: 1.3rem;
			font-style: normal;
			font-weight: 600;
		}


    `;
			this.shadowRoot.appendChild(css);

			this.shadowRoot.innerHTML += `
						 <style> ${tweetStyles}</style>

      <section class='container'>
				<div class="tweetandimg">
				  <div class=tweet>
					 <p class= "description"> ${this.description} </p>
					</div>
					<div class='img'>
					 <div class= "img-container">
					   <img class= "img-post" src="${this.image}" alt="Post image">
				   </div>
					</div>
				</div>
				<div class='infoUser'>
				 <p class= "username"> ${this.username} </p>
				</div>
			</section>

        `;
		}
	}
}

customElements.define('post-tweet', PostTweet);
export default PostTweet;
