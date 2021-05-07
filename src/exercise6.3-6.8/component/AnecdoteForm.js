import React from 'react';
import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdotesReducer';
import { setNotification } from '../reducers/notificationReducers';

const AnecdoteForm = () => {
	const dispatch = useDispatch();

	const addAnecdotes = (event) => {
		event.preventDefault();
		const content = event.target.anecdote.value;

		const votes = 0;
		event.target.anecdote.value = '';

		dispatch(createAnecdote(content, votes));
		dispatch(setNotification(`you voted ${content}`, 3));
	};
	return (
		<form onSubmit={addAnecdotes}>
			<input name="anecdote" />
			<button type="submit">create</button>
		</form>
	);
};

export default AnecdoteForm;
