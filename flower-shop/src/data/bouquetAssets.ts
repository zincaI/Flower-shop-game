import hyacinthImage from '../assets/bouquets/hyacinths_bouquet.png';
import daffodilImage from '../assets/bouquets/daffodils_bouquet.png';
import daisyImage from '../assets/bouquets/daisies_bouquet.png';
import peonie from '../assets/bouquets/peonies_bouquet.png';

import redRibbonImage from '../assets/ribbons/red_ribbon.png';
import blueRibbonImage from '../assets/ribbons/blue_ribbon.png';
import greenRibbonImage from '../assets/ribbons/green_ribbon.png';
import yellowRibbonImage from '../assets/ribbons/yellow_ribbon.png';

import yellowWrapperImage from '../assets/wrapping_papers/yellow_wrapping_paper.png';
import pinkWrapperImage from '../assets/wrapping_papers/pink_wrapping_paper.png';
import redWrapperImage from '../assets/wrapping_papers/red_wrapping_paper.png';
import blueWrapperImage from '../assets/wrapping_papers/blue_wrapping_paper.png';

export type FlowerId = 'hyacinth' | 'daffodil' | 'daisy' | 'peonia';
export type RibbonId = 'red' | 'green' | 'blue' | 'yellow';
export type WrapperId = 'yellow' | 'pink' | 'blue' | 'red';

export type BouquetSelection = {
	flower: FlowerId | null;
	ribbon: RibbonId | null;
	wrapper: WrapperId | null;
};

export const FLOWER_SELECTION: Record<FlowerId, string> = {
	hyacinth: hyacinthImage,
	daffodil: daffodilImage,
	daisy: daisyImage,
	peonie: peonie,
};

export const WRAPPER_COLORS: Record<WrapperId, string> = {
	yellow: yellowWrapperImage,
	pink: pinkWrapperImage,
	red: redWrapperImage,
	blue: blueWrapperImage,
};

export const RIBBON_COLORS: Record<RibbonId, string> = {
	red: redRibbonImage,
	green: greenRibbonImage,
	yellow: yellowRibbonImage,
	blue: blueRibbonImage,
};
