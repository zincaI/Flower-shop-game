import './PackagingSelector.css';

type ColorOption = {
	id: string;
	name: string;
	hex: string;
};

const WRAPPING_COLORS: ColorOption[] = [
	{ id: 'pink', name: 'Pastel Pink', hex: '#F48FB1' },
	{ id: 'yellow', name: 'Sunny Yellow', hex: '#F4C430' },
	{ id: 'mint', name: 'Sage Mint', hex: '#B2D1B2' },
	{ id: 'cream', name: 'Soft Cream', hex: '#FFF5D6' },
];

const RIBBON_COLORS: ColorOption[] = [
	{ id: 'red', name: 'Crimson Red', hex: '#DC143C' },
	{ id: 'blue', name: 'Azure Blue', hex: '#007FFF' },
	{ id: 'green', name: 'Emerald Green', hex: '#228B22' },
	{ id: 'purple', name: 'Violet Purple', hex: '#8A2BE2' },
];

type PackagingSelectorProps = {
	selectedId: string | null;
	onSelect: (id: string) => void;
};

export default function PackagingSelector({
	selectedId,
	onSelect,
}: PackagingSelectorProps) {
	return (
		<>
			<h4 className='display'>Wrapping paper</h4>
			<div className='display color-options'>
				{WRAPPING_COLORS.map((color) => (
					<div
						key={color.id}
						className={`square ${selectedId === color.id ? 'selected' : ''}`}
						style={{ backgroundColor: color.hex }}
						onClick={() => onSelect(color.id)}></div>
				))}
			</div>
			<h4 className='display'>Ribbon</h4>
			<div className='display color-options'>
				{RIBBON_COLORS.map((color) => (
					<div
						key={color.id}
						className={`square ${selectedId === color.id ? 'selected' : ''}`}
						style={{ backgroundColor: color.hex }}
						onClick={() => onSelect(color.id)}></div>
				))}
			</div>
		</>
	);
}
