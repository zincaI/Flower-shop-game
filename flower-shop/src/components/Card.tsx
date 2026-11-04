import './Card.css';

function Card({ ...props }) {
	return (
		<div className='flex flex-col items-center gap-y-4 mt-20 card'>
			{props.children}
		</div>
	);
}

export default Card;
