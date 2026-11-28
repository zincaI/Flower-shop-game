import Modal from '../components/Modal';
import PackagingSelector from '../components/PackagingSelector';
import TooltipComponent from '../components/Tooltip';
import './Level.css';
import { useState } from 'react';
import FLowerSelector from '../components/FlowerSelector';
import BouquetPreview from '../components/BouquetPreview';
import useBouquet from '../context/useBouquet';

type ActiveStation = 'packaging' | 'mat' | 'flowers' | null;

const MODAL_CONFIG = {
	packaging: {
		title: 'Packaging',
		description: 'Adjust the ribbon and wrapping paper of the bouquet.',
	},
	mat: {
		title: 'Current Bouquet',
		description: 'Inspect your bouquet arrangement so far.',
	},
	flowers: {
		title: 'Select Flowers',
		description: 'Choose flowers to add to the bouquet.',
	},
} as const;

export default function Level() {
	const [activeStation, setActiveStation] = useState<ActiveStation>(null);
	const { bouquet, selectFlower, selectWrapper, selectRibbon } = useBouquet();

	return (
		<>
			<div className='level-scene'>
				<div className='sky'></div>
				<div className='table'>
					<TooltipComponent message='Packaging. Press to adjust the ribbon and wrapping paper of the bouquet'>
						<button
							className='packaging button'
							onClick={() => setActiveStation('packaging')}></button>
					</TooltipComponent>
					<TooltipComponent message='Mat. Press it to reveal the current state of the bouquet'>
						<button
							className='mat button'
							onClick={() => {
								setActiveStation('mat');
							}}></button>
					</TooltipComponent>
					<TooltipComponent message='Flowers. Press to select flowers for the bouquet.'>
						<button
							className='flowers button'
							onClick={() => {
								setActiveStation('flowers');
							}}></button>
					</TooltipComponent>
				</div>
			</div>
			<div>
				<Modal
					open={!!activeStation}
					onOpenChange={(open) => !open && setActiveStation(null)}
					title={activeStation ? MODAL_CONFIG[activeStation].title : undefined}
					description={
						activeStation ? MODAL_CONFIG[activeStation].description : undefined
					}>
					{activeStation === 'packaging' && (
						<PackagingSelector
							onSelectWrapper={selectWrapper}
							onSelectRibbon={selectRibbon}
						/>
					)}
					{activeStation === 'mat' && (
						<BouquetPreview
							selection={{
								flower: bouquet.flower,
								ribbon: bouquet.ribbon,
								wrapper: bouquet.wrapper,
							}}
						/>
					)}
					{activeStation === 'flowers' && (
						<FLowerSelector onSelectFlower={selectFlower} />
					)}
				</Modal>
			</div>
		</>
	);
}
