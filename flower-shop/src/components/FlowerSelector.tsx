import daffodilImage from '../assets/flowers/daffodil.png';
import daisyImage from '../assets/flowers/daisy.png';
import hyacinthImage from '../assets/flowers/hyacinth.png';
import peoniaImage from '../assets/flowers/peonia.png';
import type { FlowerId } from '../data/bouquetAssets';

import './FlowerSelector.css';

type Flower = {
	id: number;
	name: FlowerId;
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

type FlowersSectionProps = {
	onSelectFlower: (id: FlowerId) => void;
};

export default function FlowerSelector({
	onSelectFlower,
}: FlowersSectionProps) {
	return (
		<>
			<div className='flower-options'>
				{FLOWERS.map((flower) => (
					<button
						key={flower.id}
						onClick={() => {
							onSelectFlower(flower.name);
						}}>
						<img src={flower.image} alt={flower.name} />
					</button>
				))}
			</div>
		</>
	);
}
