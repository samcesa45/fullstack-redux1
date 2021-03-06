import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { anecdotesInit } from './reducers/anecdotesReducer';
import AnecdoteForm from './component/AnecdoteForm';
import AnecdoteList from './component/AnecdoteList';
import Filter from './component/Filter';
import Notification from './component/Notification';

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(anecdotesInit());
	}, [dispatch]);
	return (
		<div>
			<Notification />
			<h1>Anecdotes</h1>
			<Filter />
			<AnecdoteList />
			<br />
			<AnecdoteForm />
		</div>
	);
};

export default App;
