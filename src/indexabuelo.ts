import abueloStyles from './indexAbuelo.css';

import './components/exportPapa';

import dataPostImage from './components/postImage/dataPostImage';
import PostImage, { Attribute as PostImageAttribute } from './components/postImage/postImage';

import dataPostTweet from './components/postTweet/dataPostTweet';
import PostTweet, { Attribute as PostTweetAttribute } from './components/postTweet/postTweet';

class AppContainer extends HTMLElement {
	PostImageList: PostImage[] = [];
	PostTweetList: PostTweet[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		dataPostImage.forEach((data) => {
			//Bucle que recorre cada elemento en dataPostImage

			const PostImageCard = this.ownerDocument.createElement('post-image') as PostImage;

			// creamos nuestra tarjeta con la info especifica que necesita mostrar
			PostImageCard.setAttribute(PostImageAttribute.image, data.image);
			PostImageCard.setAttribute(PostImageAttribute.isliked, data.isLiked);
			PostImageCard.setAttribute(PostImageAttribute.issaved, data.isSaved);
			PostImageCard.setAttribute(PostImageAttribute.likescount, data.likesCount);
			PostImageCard.setAttribute(PostImageAttribute.username, data.username);
			PostImageCard.setAttribute(PostImageAttribute.description, data.description);

			// Añade el elemento PostImage a la lista PostImageList
			this.PostImageList.push(PostImageCard);
			console.log('list', this.PostImageList);
		});

		dataPostTweet.forEach((data) => {
			//Bucle que recorre cada elemento en dataPostImage

			const PostTweetCard = this.ownerDocument.createElement('post-tweet') as PostTweet;

			// creamos nuestra tarjeta con la info especifica que necesita mostrar
			PostTweetCard.setAttribute(PostTweetAttribute.image, data.image);
			PostTweetCard.setAttribute(PostTweetAttribute.description, data.description);
			PostTweetCard.setAttribute(PostTweetAttribute.username, data.username);

			// Añade el elemento PostTweet a la lista PostTweetList
			this.PostTweetList.push(PostTweetCard);
			console.log('list', this.PostTweetList);
		});
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML += `
            <style>${abueloStyles}</style>
        </style><h3> Hola Mundo </h3>

        `;
		}
		const container = this.ownerDocument.createElement('div');
		container.className = 'card-container';

		const PostImageCards = this.ownerDocument.createElement('div');
		PostImageCards.className = 'container-post';
		this.PostImageList.forEach((PostImageCard) => {
			PostImageCards.appendChild(PostImageCard);
		});
		this.shadowRoot?.appendChild(PostImageCards);

		const PostTweetCards = this.ownerDocument.createElement('div');
		PostTweetCards.className = 'container-tweet';
		this.PostTweetList.forEach((PostTweetCard) => {
			PostTweetCards.appendChild(PostTweetCard);
		});
		this.shadowRoot?.appendChild(PostTweetCards);
	}
}

customElements.define('app-container', AppContainer);
