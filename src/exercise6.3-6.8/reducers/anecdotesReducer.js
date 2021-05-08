// const getId = () => (100000 * Math.random()).toFixed(0);
// const asObject = (anecdote) => {
// 	return {
// 		content: anecdote,
// 		id: getId(),
// 		votes: 0,
// 	};
// };
// const initialState = anecdotesAtStart.map(asObject);
// console.log(initialState);

export const increaseVoteCount = (id) => {
	return {
		type: 'VOTE_INCREASE',
		id,
	};
};

export const createAnecdote = (data) => {
	return {
		type: 'NEW_ANECDOTES',
		data,
	};
};

export const anecdotesInit = (data) => {
	return {
		type: 'ANECDOTE_INIT',
		data,
	};
};
const anecdotesReducer = (state = [], action) => {
	console.log('state now: ', state);
	console.log('action ', action);
	switch (action.type) {
		case 'NEW_ANECDOTES':
			return [...state, action.data];
		case 'ANECDOTE_INIT':
			return action.data;

		case 'VOTE_INCREASE':
			const id = action.id;
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
