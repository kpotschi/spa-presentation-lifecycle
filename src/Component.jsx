import { useEffect } from 'react';

const Component = ({ bgColor }) => {
	useEffect(() => {
		console.log('I run all the time.');
	});

	useEffect(() => {
		console.log('Component mounted!');
	}, []);

	useEffect(() => {
		console.log('Background color changed!');
	}, [bgColor]);

	useEffect(() => {
		return () => {
			console.log('Component unmounted :(');
		};
	}, []);

	return <h2 style={{ backgroundColor: bgColor }}>I am a Component</h2>;
};

export default Component;
