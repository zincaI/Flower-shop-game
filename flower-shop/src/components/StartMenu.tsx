import { useNavigate } from 'react-router';
import Button from './Button';

function StartMenu() {
	const navigate = useNavigate();
	return (
		<div>
			<h1>Welcome to the Flower Shop Game!</h1>
			<p>Click the button below to start your flower shop adventure.</p>
			<div className='button-container'>
				<Button
					onClick={() => {
						navigate('/level');
					}}>
					Start Game
				</Button>
				<Button>Stats</Button>
			</div>
		</div>
	);
}

export default StartMenu;
