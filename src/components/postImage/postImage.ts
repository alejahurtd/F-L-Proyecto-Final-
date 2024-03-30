import postStyles from './postImage.css';

// Empieza nuestro "diccionario" para los nombres de los atributos HTML que el componente puede recibir. Recomendación de Anne,
// es mejor manejarlos sin mayusculas, (apesar que en la data esten con mayusculas) porque aveces ts no las lee y marca error

export enum Attribute {
	'image' = 'image',
	'isliked' = 'isliked',
	'issaved' = 'issaved',
	'likescount' = 'likescount',
	'username' = 'username',
	'description' = 'description',
}

// Recordar que los ? frente a la propiedad es porque es opcional

class PostImage extends HTMLElement {
	image?: string;
	isliked?: string;
	issaved?: string;
	likescount?: string;
	username?: string;
	description?: string;

	// iniciamos nuestro componente

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	// El método observedAttributes le dice al navegador qué información de mi componente debe mantener bajo vigilancia
	// Si alguno de los detalles cambia, el navegador lo notará y podrá actuar en consecuencia. Es decir, es nuestra lista de chequeo

	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			image: null,
			isliked: null,
			issaved: null,
			likescount: null,
			username: null,
			description: null,
		};
		return Object.keys(attrs);
	}

	// El metodo attributeChanged... se activa cada vez que cambia uno de los atributos de observedAttributes

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
				width: 25rem;
				height: 35rem;
				border-radius: 1.5rem;
				background: #2f60e9;
				margin: 1rem;
				padding-top: 1rem;
				padding-inline:1.5rem;
		}
		.img-container {
		width: 25rem;
    display: flex;
    justify-content: center;
    overflow: hidden;
    border-radius:.5rem;
		padding-block:1rem;

		}

		.img-post {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 1rem;
		}


		.content-container{
			width: 100%;
			display: flex;
      flex-direction: column;
      align-items: flex-start;


		}

		.icon-container {
			width: 2.8rem;
			height: 1.5rem;
			display: flex;
			justify-content: flex-start;

		}

		.icon-container img {
			width: 100%;
			height: 100%;
			padding-left:.4rem;
		}

		.likes-count, .username, .description{
			text-align: left;

		}
		.likes-count{
			color: #CBF900;
			font-family: Inter;
			font-size: 1rem;
			font-style: normal;
			font-weight: 600;
			padding-left:.4rem;
		}
		.username {
			color: #FFF;
			font-family: Inter;
			font-size: 1rem;
			font-style: normal;
			font-weight: 700;
			padding-left:.5rem;
			margin-top:-.3rem;
			padding-bottom:1rem;

		}
		.description {
			color: #FFF;
			font-family: Inter;
			font-size: 1rem;
			font-style: normal;
			font-weight: 400;
		}

    `;

			this.shadowRoot.appendChild(css); // añade el elemento de estilo al Shadow DOM del postImage.

			//esctrcutura de nuestro componente

			this.shadowRoot.innerHTML += `
						 <style> ${postStyles}</style>

            <section class="container">
								<div class= "img-container">
										<img class= "img-post" src="${this.image}" alt="Post image">
								</div>
								 <div class= "content-container">
								 		<div class= "icon-container">
											<img class= "icon-container img" src="${this.isliked}" alt="Like icon">
											<img class= "icon-container img" src="${this.issaved}" alt="Save icon">
								 </div>
								 <h3 class= "likes-count">${this.likescount} likes</h3>
										<p
											<span class= "username" >${this.username} </span>: <span class= "description"> ${this.description}</span>
											</p>



            </section>
        `;
		}
	}
}

customElements.define('post-image', PostImage);
export default PostImage;
