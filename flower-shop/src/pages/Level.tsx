import TooltipComponent from '../components/Tooltip';
import './Level.css';

export default function Level() {
	return (
		<>
			<div className='level-scene'>
				<div className='sky'></div>
				<div className='table'>
					<TooltipComponent message='Packaging. Press to adjust the ribbon and wrapping paper of the bouquet'>
						<button className='packaging'></button>
					</TooltipComponent>
					<TooltipComponent message='Mat. Press it to reveal the current state of the bouquet'>
						<button className='mat'></button>
					</TooltipComponent>
					<TooltipComponent message='Flowers. Press to select flowers for the bouquet.'>
						<button className='flowers'></button>
					</TooltipComponent>
				</div>
			</div>
		</>
	);
}
