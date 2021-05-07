const anecdotesAtStart = [
	'But it works in my machine...',
	'If it hurts, do it more often',
	'Any fool can write code that a computer can understand. Good programmers write code that humans can understand',
	'The first 90 percent of the code accounts for the 90 percent of the development time...The remaining 10 percent of the code accoun time ',
	'Adding manpower to the late software project makes it later?',
];

const getId = () => (100000 * Math.random()).toFixed(0);
const asObject = (anecdote) => {
	return {
		content: anecdote,
		id: getId(),
		votes: 0,
	};
};
const initialState = anecdotesAtStart.map(asObject);
console.log(initialState);

export const increaseVoteCount = (id) => {
	return {
		type: 'VOTE_INCREASE',
		data: {
			id,
		},
	};
};

export const createAnecdote = (content, votes) => {
	return {
		type: 'NEW_ANECDOTES',
		data: {
			content,
			votes,
			id: getId(),
		},
	};
};
const anecdotesReducer = (state = initialState, action) => {
	console.log('state now: ', state);
	console.log('action ', action);
	switch (action.type) {
		case 'NEW_ANECDOTES':
			return [...state, action.data];

		case 'VOTE_INCREASE':
			const { id } = action.data;
			const copy = state.find((anecdote) => anecdote.id === id);
			const increaseCount = {
				...copy,
				votes: copy.votes + 1,
			};
			return state
				.sort((a, b) => b.votes - a.votes)
				.map((anecdote) => (anecdote.id !== id ? anecdote : increaseCount));

		default:
			return state;
	}
};

export default anecdotesReducer;
