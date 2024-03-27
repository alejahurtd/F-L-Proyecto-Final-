interface DataPost {
	image: string;
	isLiked: string;
	isSaved: string;
	likesCount: string;
	username: string;
	description: string;
}

import heartIcon from '../../assets/heart icon.png';
import saveIcon from '../../assets/save icon.png';

const dataPostImage: DataPost[] = [
	{
		image: 'https://images.unsplash.com/photo-1568454537842-d933259bb258',
		isLiked: heartIcon,
		isSaved: saveIcon,
		likesCount: '950',
		username: '@val0931',
		description: 'I gave it all',
	},
	{
		image: 'https://images.unsplash.com/photo-1568454537842-d933259bb258',
		isLiked: heartIcon,
		isSaved: saveIcon,
		likesCount: '590',
		username: '@alejah__',
		description: 'Sweat today, smile tomorrow',
	},
	{
		image: 'https://images.unsplash.com/photo-1568454537842-d933259bb258',
		isLiked: heartIcon,
		isSaved: saveIcon,
		likesCount: '1300',
		username: '@guti_santi',
		description: 'Sweat, smile, repeat.',
	},
	{
		image: 'https://images.unsplash.com/photo-1568454537842-d933259bb258',
		isLiked: heartIcon,
		isSaved: saveIcon,
		likesCount: '480',
		username: '@juanesv08',
		description: 'Exercise: self-love in motion.',
	},
];

export default dataPostImage;
