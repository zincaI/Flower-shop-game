import { Dialog } from 'radix-ui';
import { Cross2Icon } from '@radix-ui/react-icons';
import './Modal.css';

type ModalProps = {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	title?: string;
	description?: string;
	children?: React.ReactNode;
};

export default function Modal({
	open,
	onOpenChange,
	title,
	description,
	children,
}: ModalProps) {
	return (
		<Dialog.Root open={open} onOpenChange={onOpenChange}>
			<Dialog.Portal>
				<Dialog.Overlay className='modal-overlay' />
				<Dialog.Content className='modal'>
					<Dialog.Title>{title}</Dialog.Title>
					<Dialog.Description>{description}</Dialog.Description>
					<div>{children}</div>
					<Dialog.Close asChild>
						<button type='button' aria-label='Close'>
							<Cross2Icon />
						</button>
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
