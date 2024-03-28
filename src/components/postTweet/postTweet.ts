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

				width: 45rem;
				height: 17.1rem;
				border-radius: 2.1875rem;
				border-radius: 2.1875rem;
				background: linear-gradient(0deg, #CBF900 0%, #CBF900 100%), linear-gradient(0deg, #CBF900 0%, #CBF900 100%), #CBF900;
				margin: 1%;
				padding-top: 2rem;
		}

		.img{
			display: flex;
			align-items: center;

			padding-inline:2rem;
		}
		.img-container {
			width: 10rem;
			height: 10rem;
			border-radius: 50%;
			overflow: hidden;

		}
		.img-post {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		.container-description{
			padding-inline: 2rem;
			display:flex;
			flex-direction:row;
			margin-bottom:1rem;
		}
		.description{
			color: #000;
			font-family: Inter;
			font-size: 2rem;
			font-style: normal;
			font-weight: 500;
		}
		.content-container{
			width: 45rem;
			height: 6rem;
			border-radius: 0rem 0rem 2.1875rem 2.1875rem;
			background: linear-gradient(0deg, rgba(47, 96, 233, 0.20) 0%, rgba(47, 96, 233, 0.20) 100%), linear-gradient(0deg, #CBF900 0%, #CBF900 100%), #CBF900;
			display: flex;
			box-sizing: border-box;
			align-items:center;
			padding-inline:2rem;
		}
		.username{
			width: 9.733rem;
			height: 2.39063rem;
			color: #181818;
			font-family: Inter;
			font-size: 1.875rem;
			font-style: normal;
			font-weight: 600;
		}


    `;
			this.shadowRoot.appendChild(css);

			this.shadowRoot.innerHTML += `
						 <style> ${tweetStyles}</style>

            <section class="container">
						<div class="container-description">
						<p class= "description"> ${this.description} </p>"
						<div class= "img">
						<div class= "img-container">
						<img class= "img-post" src="${this.image}" alt="Post image">
						</div>
						</div>

						</div>
            <div class= "content-container">
                      <p class= "username"> ${this.username} </p>"
                    </div>
            </section>
        `;
		}
	}
}

customElements.define('post-tweet', PostTweet);
export default PostTweet;
