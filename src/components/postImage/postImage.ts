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

	changeLike = () => {
		this.isLiked = !this.isLiked;
		console.log('isLiked:', this.isLiked);
		this.render();
	};

	changeSaved = () => {
		this.isSaved = !this.isSaved;
		console.log('isSaved:', this.isSaved);
		this.render();
	};

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
		let heart = '../../assets/emptyHeart.png';
		if (this.isLiked) {
			heart = '../../assest/heart.png';
		}

		let save = '../../assest/emptySave.png';
		if (this.isSaved) {
			save = '../../assest/save.png';
		}

		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = '';

			this.shadowRoot.innerHTML += `
						 <style> ${postStyles}</style>

        `;

			const section = this.ownerDocument.createElement('section');
			section.className = 'container';

			const imgContainer = this.ownerDocument.createElement('div');
			imgContainer.className = 'imgContainer';
			section.appendChild(imgContainer);

			const img = this.ownerDocument.createElement('img');
			img.className = 'img';
			img.src = this.image || '';
			img.alt = 'Post image';
			imgContainer.appendChild(img);

			const userContent = this.ownerDocument.createElement('div');
			userContent.className = 'userContent';

			const iconContainer = this.ownerDocument.createElement('div');
			iconContainer.className = 'iconContainer';
			userContent.appendChild(iconContainer);

			const likeBtn = this.ownerDocument.createElement('img');
			likeBtn.className = 'icon';
			likeBtn.id = heart || 'likeBtn';
			likeBtn.addEventListener('click', () => {
				console.log('likeBtn clicked!', likeBtn.id);
			});
			iconContainer.appendChild(likeBtn);

			const saveBtn = this.ownerDocument.createElement('img');
			saveBtn.className = 'icon';
			saveBtn.id = save || '';
			saveBtn.addEventListener('click', () => {
				console.log('saveBtn clicked', saveBtn.id);
			});
			iconContainer.appendChild(saveBtn);

			const likes = this.ownerDocument.createElement('p');
			likes.className = 'likes';
			likes.textContent = `${this.likescount} likes` || '';
			userContent.appendChild(likes);

			const paragraph = this.ownerDocument.createElement('p');
			const usernameSpan = this.ownerDocument.createElement('span');
			usernameSpan.className = 'username';
			usernameSpan.textContent = this.username || '';

			const descriptionSpan = this.ownerDocument.createElement('span');
			descriptionSpan.className = 'description';
			descriptionSpan.textContent = this.description || '';

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
