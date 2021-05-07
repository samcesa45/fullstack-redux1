import React from 'react';
import ReactDOM from 'react-dom';
import counterReducer from './excercise6/reducers/counterReducer';
import { createStore } from 'redux';

const store = createStore(counterReducer);

// console.log(store.getState());
const App = () => {
	const good = () => {
		store.dispatch({ type: 'GOOD' });
	};

	return (
		<div>
			<button onClick={good}>Good</button>
			<button onClick={() => store.dispatch({ type: 'OK' })}>Ok</button>
			<button onClick={() => store.dispatch({ type: 'BAD' })}>Bad</button>
			<button onClick={() => store.dispatch({ type: 'ZERO' })}>
				reset stats
			</button>
			<div>good {store.getState().good}</div>
			<div>ok {store.getState().ok}</div>
			<div>bad {store.getState().bad}</div>
		</div>
	);
};

const renderApp = () => {
	ReactDOM.render(<App />, document.getElementById('root'));
};

renderApp();
store.subscribe(renderApp);
