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
			//Bucle que recorre cada elemento en dataPostImage

			const PostImageCard = this.ownerDocument.createElement('post-image') as PostImage;

			// creamos nuestra tarjeta con la info especifica que necesita mostrar
			PostImageCard.setAttribute(Attribute.image, data.image);
			PostImageCard.setAttribute(Attribute.isliked, data.isLiked);
			PostImageCard.setAttribute(Attribute.issaved, data.isSaved);
			PostImageCard.setAttribute(Attribute.likescount, data.likesCount);
			PostImageCard.setAttribute(Attribute.username, data.username);
			PostImageCard.setAttribute(Attribute.description, data.description);

			// Añade el elemento PostImage a la lista PostImageList
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
