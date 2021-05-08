import React, { useEffect } from 'react';
import './App.css';
import { service } from './services/notes';
import { initializeNotes } from './reducers/noteReducer';
import NewNote from './component/NewNote';
import Notes from './component/Note';
import VisibilityFilter from './component/VisibilityFilter';
import { useDispatch } from 'react-redux';
const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		service.getAll().then((notes) => dispatch(initializeNotes(notes)));
	}, [dispatch]);
	return (
		<div>
			<NewNote />
			<VisibilityFilter />
			<Notes />
		</div>
	);
};

export default App;
