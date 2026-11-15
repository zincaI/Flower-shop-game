import { Tooltip } from 'radix-ui';
import './Tooltip.css';

type TooltipProps = {
	message: string;
	children: React.ReactNode;
};

export default function TooltipComponent({ message, children }: TooltipProps) {
	return (
		<Tooltip.Provider>
			<Tooltip.Root>
				<Tooltip.Trigger asChild>
					<div>{children}</div>
				</Tooltip.Trigger>
				<Tooltip.Portal>
					<Tooltip.Content className='game-tooltip'>{message}</Tooltip.Content>
				</Tooltip.Portal>
			</Tooltip.Root>
		</Tooltip.Provider>
	);
}
