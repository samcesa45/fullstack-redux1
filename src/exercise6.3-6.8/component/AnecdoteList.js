import React from 'react';
import { connect } from 'react-redux';
import { increaseVoteCount } from '../reducers/anecdotesReducer';
import { setNotification } from '../reducers/notificationReducers';

const AnecdoteList = (props) => {
	// const anecdotes = useSelector((state) => state.anecdotes);
	// const filters = useSelector((state) => state.filter);
	// const anecdotesToShow = () => {
	// 	if (filters === '') return anecdotes;
	// 	return anecdotes.filter((anecdote) =>
	// 		anecdote.content.toLowerCase().includes(filters.toLowerCase())
	// 	);
	// };
	// const dispatch = useDispatch();
	// const vote = (anecdote) => {
	// 	dispatch(setNotification(`you voted ${anecdote.content} with votes `, 3));
	// 	dispatch(increaseVoteCount(anecdote));
	// };

	const vote = (anecdote) => {
		props.setNotification(`you voted ${anecdote.content}  `, 3);
		props.increaseVoteCount(anecdote);
	};
	return (
		<div>
			{props.visibleAnecdotes.map((anecdote) => (
				<div key={anecdote.id}>
					<div>{anecdote.content}</div>
					<div>has {anecdote.votes} votes</div>
					<button onClick={() => vote(anecdote)}>vote</button>
				</div>
			))}
		</div>
	);
};

const anecdotesToShow = ({ anecdotes, filter }) => {
	const anecdotesSorted = [...anecdotes].sort((a, b) => {
		return b.votes - a.votes;
	});

	if (filter === '') {
		return anecdotesSorted;
	} else {
		return anecdotesSorted.filter((e) =>
			e.content.toLowerCase().includes(filter.toLowerCase())
		);
	}
};

const mapStateToProps = (state) => {
	return { visibleAnecdotes: anecdotesToShow(state) };
};

const mapDispatchToProps = {
	setNotification,
	increaseVoteCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);
