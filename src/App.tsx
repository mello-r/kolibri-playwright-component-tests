import './App.css';
import { KolButton } from '@public-ui/react';
import { StatusBadgeWithKol } from './components/StatusBadgeWithKol';
import { StatusBadgeWithoutKol } from './components/StatusBadgeWithoutKol';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>Hello Vite + React + KoliBri!</p>
				<p className="flex gap-4">
					<KolButton
						_label="Primary"
						_on={{
							onClick: () => {
								console.log('Clicked primary');
							},
						}}
						_variant="primary"
					/>
					<KolButton
						_label="Secondary"
						_on={{
							onClick: () => {
								console.log('Clicked secondary');
							},
						}}
						_variant="secondary"
					/>
					<KolButton
						_hideLabel
						_label="Danger"
						_icons="codicon codicon-trash"
						_on={{
							onClick: () => {
								console.log('Clicked danger');
							},
						}}
						_variant="danger"
					/>
				</p>
				<p>
					<StatusBadgeWithKol />
					<StatusBadgeWithoutKol />
				</p>
			</header>
		</div>
	);
}

export default App;
