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
				display: flex;
				flex-direction: column;
				align-items: center;
				width: 10%;
				border-radius: 30px;
				background: #CBF900;
				margin: 1%;
				padding: 2rem;
		}

    `;
			this.shadowRoot.appendChild(css);

			this.shadowRoot.innerHTML += `
						 <style> ${tweetStyles}</style>

            <section class="container">
								<div class= "img-container">
										<img class= "img-post" src="${this.image}" alt="Post image">
								</div>
                    <div class= "content-container">
                        <div class= "icon-container">
                          <p class= "description"> ${this.description} </p>"
                          <p class= "username"> ${this.username} </p>"
                    </div>
            </section>
        `;
		}
	}
}

customElements.define('post-tweet', PostTweet);
export default PostTweet;
