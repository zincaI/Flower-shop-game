import type { RibbonId, WrapperId } from '../data/bouquetAssets';
import './PackagingSelector.css';

type ColorOption = {
	id: string;
	hex: string;
};

const WRAPPING_COLORS: ColorOption[] = [
	{ id: 'pink', hex: '#F0ABE1' },
	{ id: 'yellow', hex: '#E4A53E' },
	{ id: 'red', hex: '#B92B20' },
	{ id: 'blue', hex: '#180DBC' },
];

const RIBBON_COLORS: ColorOption[] = [
	{ id: 'red', hex: '#B92B20' },
	{ id: 'blue', hex: '#180DBC' },
	{ id: 'green', hex: '#3C6B21' },
	{ id: 'yellow', hex: '#E4A53E' },
];

type PackagingSelectorProps = {
	onSelectWrapper: (id: WrapperId) => void;
	onSelectRibbon: (id: RibbonId) => void;
};

export default function PackagingSelector({
	onSelectWrapper,
	onSelectRibbon,
}: PackagingSelectorProps) {
	return (
		<>
			<h4 className='display'>Wrapping paper</h4>
			<div className='display color-options'>
				{WRAPPING_COLORS.map((color) => (
					<button
						key={color.id}
						className={`square`}
						style={{ backgroundColor: color.hex }}
						onClick={() => onSelectWrapper(color.id as WrapperId)}></button>
				))}
			</div>
			<h4 className='display'>Ribbon</h4>
			<div className='display color-options'>
				{RIBBON_COLORS.map((color) => (
					<button
						key={color.id}
						className={`square`}
						style={{ backgroundColor: color.hex }}
						onClick={() => onSelectRibbon(color.id as RibbonId)}></button>
				))}
			</div>
		</>
	);
}
