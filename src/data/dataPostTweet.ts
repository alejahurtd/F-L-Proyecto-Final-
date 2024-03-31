// definimos la forma de los objetos, interface es nuestra plantilla

interface DataTweet {
	id: string;
	image: string;
	description: string;
	username: string;
}

// Nuestra data

const dataPostTweet: DataTweet[] = [
	{
		id: '1',
		image:
			'https://images.pexels.com/photos/11000413/pexels-photo-11000413.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
		description: 'Ready for the next marathons',
		username: '@guti_santi',
	},
	{
		id: '2',
		image: 'https://i.pinimg.com/564x/8d/e2/53/8de253777f0974e37f142cadb822593b.jpg',
		description: 'Exercise: self-love in motion',
		username: '@alejah__',
	},
	{
		id: '3',
		image: 'https://i.pinimg.com/564x/73/b2/cb/73b2cb44bafd88ef28423d8ecdf629f0.jpg',
		description: 'energy for the day',
		username: '@ana_hillton',
	},
	{
		id: '4',
		image: 'https://i.pinimg.com/564x/81/1d/ec/811dec8d7c02e6abfba458ece184d376.jpg',
		description: 'Mastering the ropes',
		username: '@juanesv08',
	},
	{
		id: '5',
		image:
			'https://images.pexels.com/photos/11000413/pexels-photo-11000413.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
		description: 'Ready for the next marathons',
		username: '@guti_santi',
	},
	{
		id: '6',
		image: 'https://i.pinimg.com/564x/8d/e2/53/8de253777f0974e37f142cadb822593b.jpg',
		description: 'Exercise: self-love in motion',
		username: '@alejah__',
	},
	{
		id: '7',
		image: 'https://i.pinimg.com/564x/73/b2/cb/73b2cb44bafd88ef28423d8ecdf629f0.jpg',
		description: 'energy for the day',
		username: '@ana_hillton',
	},
	{
		id: '8',
		image: 'https://i.pinimg.com/564x/81/1d/ec/811dec8d7c02e6abfba458ece184d376.jpg',
		description: 'Mastering the ropes',
		username: '@juanesv08',
	},
	{
		id: '9',
		image:
			'https://images.pexels.com/photos/11000413/pexels-photo-11000413.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
		description: 'Ready for the next marathons',
		username: '@guti_santi',
	},
	{
		id: '10',
		image: 'https://i.pinimg.com/564x/8d/e2/53/8de253777f0974e37f142cadb822593b.jpg',
		description: 'Exercise: self-love in motion',
		username: '@alejah__',
	},
	{
		id: '11',
		image: 'https://i.pinimg.com/564x/73/b2/cb/73b2cb44bafd88ef28423d8ecdf629f0.jpg',
		description: 'energy for the day',
		username: '@ana_hillton',
	},
	{
		id: '12',
		image: 'https://i.pinimg.com/564x/81/1d/ec/811dec8d7c02e6abfba458ece184d376.jpg',
		description: 'Mastering the ropes',
		username: '@juanesv08',
	},
];

// exportamos nuestra data
export default dataPostTweet;
