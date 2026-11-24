import hyacinthImage from '../assets/bouquets/hyacinths_bouquet.png';
import redRibbonImage from '../assets/ribbons/red_ribbon.png';
import yellowWrapperImage from '../assets/wrapping_papers/yellow_wrapping_paper.png';

export type FlowerId = 'hyacinth';
export type RibbonId = 'red';
export type WrapperId = 'yellow';

export type BouquetSelection = {
	flower: FlowerId;
	ribbon: RibbonId;
	wrapper: WrapperId;
};

export const FLOWER_SELECTION: Record<FlowerId, string> = {
	hyacinth: hyacinthImage,
};

export const RIBBON_COLORS: Record<RibbonId, string> = {
	red: redRibbonImage,
};

export const WRAPPER_COLORS: Record<WrapperId, string> = {
	yellow: yellowWrapperImage,
};
