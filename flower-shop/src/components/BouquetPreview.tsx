import {
	FLOWER_SELECTION,
	RIBBON_COLORS,
	WRAPPER_COLORS,
	type BouquetSelection,
} from '../data/bouquetAssets';

import './BouquetPreview.css';

type BouquetSelectionProps = {
	selection: BouquetSelection;
};

export default function BouquetPreview({ selection }: BouquetSelectionProps) {
	const paperLayer =
		selection.wrapper ? WRAPPER_COLORS[selection.wrapper] : null;
	const ribbonLayer = selection.ribbon ? RIBBON_COLORS[selection.ribbon] : null;
	const flowerLayer =
		selection.flower ? FLOWER_SELECTION[selection.flower] : null;

	return (
		<div className='bouquet-composite' role='img' aria-label='Bouquet preview'>
			{paperLayer && (
				<img className='bouquet-layer' src={paperLayer} alt='' />
			)}
			{ribbonLayer && (
				<img className='bouquet-layer' src={ribbonLayer} alt='' />
			)}
			{flowerLayer && (
				<img className='bouquet-layer' src={flowerLayer} alt='' />
			)}
		</div>
	);
}
