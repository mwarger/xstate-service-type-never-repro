import './App.css';
import { useMachine } from '@xstate/react';
import { classRegistrationMachine } from './classRegistrationMachine';

function App() {
	const [current, send] = useMachine(classRegistrationMachine, {
		services: {
			fetchParticipants: async () => {
				return 'test';
			},
		},
	});

	return <div className='App'>service type never repro</div>;
}

export default App;
