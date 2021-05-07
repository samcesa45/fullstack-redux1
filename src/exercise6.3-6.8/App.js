import React from 'react';
import AnecdoteForm from './component/AnecdoteForm';
import AnecdoteList from './component/AnecdoteList';
import Filter from './component/Filter';
import Notification from './component/Notification';

const App = () => {
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
