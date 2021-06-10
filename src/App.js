import { useState } from 'react';
import Component from './Component';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
	const [toggle, setToggle] = useState(false);
	const [bgColor, setBGColor] = useState('yellow');

	return (
		<div className='App'>
			<h1>Lifecycle</h1>
			<Button variant='primary' onClick={() => setToggle(!toggle)}>
				Show Component
			</Button>
			<Button
				variant='secondary'
				onClick={() => setBGColor(bgColor === 'yellow' ? 'red' : 'yellow')}
			>
				Change BG Color
			</Button>
			{toggle && <Component bgColor={bgColor} />}
		</div>
	);
}

export default App;
