import React from 'react';
import { connect } from 'react-redux';
import { createAnecdote } from '../reducers/anecdotesReducer';
import { setNotification } from '../reducers/notificationReducers';

const AnecdoteForm = () => {
	const addAnecdotes = async (event) => {
		event.preventDefault();
		const content = event.target.anecdote.value;
		event.target.anecdote.value = '';

		createAnecdote(content);
		setNotification(`you voted ${content}`, 3);
	};
	return (
		<form onSubmit={addAnecdotes}>
			<input name="anecdote" />
			<button type="submit">create</button>
		</form>
	);
};

const mapDispatchToProps = {
	createAnecdote,
	setNotification,
};

export default connect(null, mapDispatchToProps)(AnecdoteForm);
