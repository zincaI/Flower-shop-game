import Button from './Button';
import Card from './Card';

function StartMenu() {
	return (
		<div>
			<h1>Welcome to the Flower Shop Game!</h1>
			<p>Click the button below to start your flower shop adventure.</p>
			<Card>
				<Button>Start Game</Button>
				<Button>Stats</Button>
			</Card>
		</div>
	);
}

export default StartMenu;
