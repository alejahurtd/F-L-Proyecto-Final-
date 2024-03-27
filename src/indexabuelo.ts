import abueloStyles from './indexAbuelo.css';
import './components/exportPapa';
import dataPostImage from './components/postImage/dataPostImage';
import PostImage, { Attribute } from './components/postImage/postImage';

class AppContainer extends HTMLElement {
	PostImageList: PostImage[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		dataPostImage.forEach((data) => {
			const PostImageCard = this.ownerDocument.createElement('post-image') as PostImage;
			PostImageCard.setAttribute(Attribute.image, data.image);
			PostImageCard.setAttribute(Attribute.isliked, data.isLiked);
			PostImageCard.setAttribute(Attribute.issaved, data.isSaved);
			PostImageCard.setAttribute(Attribute.likescount, data.likesCount);
			PostImageCard.setAttribute(Attribute.username, data.username);
			PostImageCard.setAttribute(Attribute.description, data.description);
			this.PostImageList.push(PostImageCard);
			console.log('list', this.PostImageList);
		});
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML += `
			<style>${abueloStyles}</style>
			<h3> Hola Mundo </h3>

			`;
		}
		const PostImageCards = this.ownerDocument.createElement('div');
		PostImageCards.className = 'container-post';
		this.PostImageList.forEach((PostImageCard) => {
			PostImageCards.appendChild(PostImageCard);
		});
		this.shadowRoot?.appendChild(PostImageCards);
	}
}

customElements.define('app-container', AppContainer);

// class AppContainer extends HTMLElement {
// 	constructor() {
// 		super();
// 		this.attachShadow({ mode: 'open' });
// 	}

// 	connectedCallback() {
// 		if (!this.shadowRoot) return;
// 		this.shadowRoot.innerHTML = `<h1>Hola, esta es la página principal</h1>`;

// 		dataPostImage.forEach((item) => {
// 			const postImageElement = document.createElement('post-image');
// 			postImageElement.setAttribute('image', item.image);
// 			postImageElement.setAttribute('isLiked', item.isLiked);
// 			postImageElement.setAttribute('isSaved', item.isSaved);
// 			postImageElement.setAttribute('likesCount', item.likesCount);
// 			postImageElement.setAttribute('username', item.username);
// 			postImageElement.setAttribute('description', item.description);

// 			this.shadowRoot!.appendChild(postImageElement);
// 		});
// 	}
// }

// customElements.define('app-container', AppContainer);
