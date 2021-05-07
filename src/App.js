import React from 'react';
import './App.css';
import NewNote from './component/NewNote';
import Notes from './component/Note';
import VisibilityFilter from './component/VisibilityFilter';
const App = () => {
	return (
		<div>
			<NewNote />
			<VisibilityFilter />
			<Notes />
		</div>
	);
};

export default App;
