import './Button.css';

function Button({ ...props }) {
	return (
		<button
			className='open-button open-button--hover open-button--active'
			{...props}
		/>
	);
}

export default Button;
