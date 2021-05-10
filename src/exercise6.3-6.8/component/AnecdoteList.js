import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseVoteCount } from '../reducers/anecdotesReducer';
import { setNotification } from '../reducers/notificationReducers';

const AnecdoteList = () => {
	const anecdotes = useSelector((state) => state.anecdotes);
	const filters = useSelector((state) => state.filter);
	const anecdotesToShow = () => {
		if (filters === '') return anecdotes;
		return anecdotes.filter((anecdote) =>
			anecdote.content.toLowerCase().includes(filters.toLowerCase())
		);
	};
	const dispatch = useDispatch();
	const vote = (anecdote) => {
		dispatch(setNotification(`you voted ${anecdote.content} with votes `, 3));
		dispatch(increaseVoteCount(anecdote));
	};
	return (
		<div>
			{anecdotesToShow().map((anecdote) => (
				<div key={anecdote.id}>
					<div>{anecdote.content}</div>
					<div>has {anecdote.votes} votes</div>
					<button onClick={() => vote(anecdote)}>vote</button>
				</div>
			))}
		</div>
	);
};

export default AnecdoteList;
