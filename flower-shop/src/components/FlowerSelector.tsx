import daffodilImage from '../assets/flowers/daffodil.png';
import daisyImage from '../assets/flowers/daisy.png';
import hyacinthImage from '../assets/flowers/hyacinth.png';
import peoniaImage from '../assets/flowers/peonia.png';

import './FlowerSelector.css';

type Flower = {
	id: number;
	name: string;
	image: string;
};

const FLOWERS: Flower[] = [
	{ id: 1, name: 'daffodil', image: daffodilImage },
	{ id: 2, name: 'daisy', image: daisyImage },
	{ id: 3, name: 'hyacinth', image: hyacinthImage },
	{
		id: 4,
		name: 'peonia',
		image: peoniaImage,
	},
];

export default function FlowerSelector() {
	return (
		<>
			<div className='flower-options'>
				{FLOWERS.map((flower) => (
					<div key={flower.id}>
						<img src={flower.image} alt={flower.name} />
					</div>
				))}
			</div>
		</>
	);
}
