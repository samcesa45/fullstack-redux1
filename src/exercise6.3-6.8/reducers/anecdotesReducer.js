import { service } from '../services/anecdotes';
// {
//   "anecdotes": [
//     {
//       "id": 1,
//       "content": "But it works in my machine...",
//       "votes": 0
//     },
//     {
//       "id": 2,
//       "content": "If it hurts, do it more often",
//       "votes": 0
//     },
//     {
//       "id": 3,
//       "content": "Any fool can write code that a computer can understand. Good programmers write code that humans can understand",
//       "votes": 0
//     },
//     {
//       "id": 4,
//       "content": "The first 90 percent of the code accounts for the 90 percent of the development time...The remaining 10 percent of the code accoun time ",
//       "votes": 0
//     },
//     {
//       "id": 5,
//       "content": "Adding manpower to the late software project makes it later?",
//       "votes": 0
//     },
//     {
//       "content": "adding my votes now",
//       "votes": 0,
//       "id": 6
//     }
//   ]
// }
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

export const increaseVoteCount = (voteAnecdote) => async (dispatch) => {
	const anecdote = {
		...voteAnecdote,
		votes: voteAnecdote.votes + 1,
	};
	const updatedAnecdote = await service.update(anecdote);
	const { id } = updatedAnecdote;
	dispatch({
		type: 'VOTE_INCREASE',
		data: {
			id,
		},
	});
};

export const createAnecdote = (data) => async (dispatch) => {
	const newAncedote = await service.create(data);
	dispatch({
		type: 'NEW_ANECDOTES',
		data: newAncedote,
	});
};

export const anecdotesInit = (data) => async (dispatch) => {
	const anecdotes = await service.getAll();
	dispatch({
		type: 'ANECDOTE_INIT',
		data: anecdotes,
	});
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
