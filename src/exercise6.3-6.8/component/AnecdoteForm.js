import React from 'react';
import { useDispatch } from 'react-redux';
import { service } from '../services/anecdotes';
import { createAnecdote } from '../reducers/anecdotesReducer';
import { setNotification } from '../reducers/notificationReducers';

const AnecdoteForm = () => {
	const dispatch = useDispatch();

	const addAnecdotes = async (event) => {
		event.preventDefault();
		const content = event.target.anecdote.value;

		const votes = 0;
		event.target.anecdote.value = '';
		const newAnecdotes = {
			content,
			votes,
		};
		const anecdotes = await service.create(newAnecdotes);

		dispatch(createAnecdote(anecdotes));
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
