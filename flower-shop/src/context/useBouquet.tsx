import { useState } from 'react';
import type {
	FlowerId,
	WrapperId,
	RibbonId,
	BouquetSelection,
} from '../data/bouquetAssets';

export default function useBouquet() {
	const [bouquet, setBouquet] = useState<BouquetSelection>({
		flower: null,
		ribbon: null,
		wrapper: null,
	});

	function selectFlower(flower: FlowerId) {
		setBouquet((current) => ({ ...current, flower }));
	}

	function selectRibbon(ribbon: RibbonId) {
		setBouquet((current) => ({ ...current, ribbon }));
	}

	function selectWrapper(wrapper: WrapperId) {
		setBouquet((current) => ({ ...current, wrapper }));
	}

	return { bouquet, selectFlower, selectWrapper, selectRibbon };
}
