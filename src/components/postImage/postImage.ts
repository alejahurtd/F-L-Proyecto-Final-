import postStyles from './postImage.css';

// Empieza nuestro "diccionario" para los nombres de los atributos HTML que el componente puede recibir.
// Recomendación de Anne, es mejor manejarlos sin mayusculas, (apesar que en la data esten con mayusculas) porque aveces ts no las lee y marca error

export enum Attribute {
	'image' = 'image',
	'isLiked' = 'isLiked',
	'isSaved' = 'isSaved',
	'likescount' = 'likescount',
	'username' = 'username',
	'description' = 'description',
}

class PostImage extends HTMLElement {
	image?: string;
	isLiked?: boolean;
	isSaved?: boolean;
	likescount?: string;
	username?: string;
	description?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			image: null,
			isLiked: null,
			isSaved: null,
			likescount: null,
			username: null,
			description: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			case Attribute.isLiked:
				this.isLiked = newValue === 'true';
				break;
			case Attribute.isSaved:
				this.isSaved = newValue === 'true';
				break;
		}
		this.render();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML += `
						 <style> ${postStyles}</style>  `;

			const section = this.ownerDocument.createElement('section');
			section.className = 'container';

			const imgContainer = this.ownerDocument.createElement('div');
			imgContainer.className = 'imgContainer';
			section.appendChild(imgContainer);

			const img = this.ownerDocument.createElement('img');
			img.className = 'img';
			img.src = this.image;
			imgContainer.appendChild(img);

			const userContent = this.ownerDocument.createElement('div');
			userContent.className = 'userContent';

			const iconContainer = this.ownerDocument.createElement('div');
			iconContainer.className = 'iconContainer';
			userContent.appendChild(iconContainer);

			const likes = this.ownerDocument.createElement('p');
			likes.className = 'likes';
			likes.textContent = `${this.likescount} likes`;
			userContent.appendChild(likes);

			const paragraph = this.ownerDocument.createElement('p');
			const usernameSpan = this.ownerDocument.createElement('span');
			usernameSpan.className = 'username';
			usernameSpan.textContent = this.username;

			const descriptionSpan = this.ownerDocument.createElement('span');
			descriptionSpan.className = 'description';
			descriptionSpan.textContent = this.description;

			paragraph.appendChild(usernameSpan);
			paragraph.appendChild(this.ownerDocument.createTextNode(': '));
			paragraph.appendChild(descriptionSpan);

			userContent.appendChild(paragraph);

			section.appendChild(userContent);
			this.shadowRoot?.appendChild(section);
		}
	}
}

customElements.define('post-image', PostImage);
export default PostImage;
