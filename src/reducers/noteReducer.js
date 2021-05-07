const initialState = {
	notes: [
		{
			content: 'the app state is in redux store',
			important: true,
			id: 1,
		},

		{
			content: 'state changes are made with actions',
			important: false,
			id: 2,
		},
	],
	filter: 'IMPORTANT',
};
const noteReducer = (state = initialState.notes, action) => {
	switch (action.type) {
		case 'NEW_NOTE':
			// return state.concat(action.data);
			return [...state, action.data];
		case 'TOGGLE_IMPORTANCE': {
			const id = action.data.id;
			const noteToChange = state.find((n) => n.id === id);
			const changedNote = {
				...noteToChange,
				important: !noteToChange.important,
			};
			return state.map((note) => (note.id !== id ? note : changedNote));
		}

		default:
			return state;
	}
};

const generateId = () => {
	Math.floor(Math.random() * 10000000).toFixed(0);
};

export const createNote = (content) => {
	return {
		type: 'NEW_NOTE',
		data: {
			content,
			important: false,
			id: generateId(),
		},
	};
};

export const toggleImportanceOf = (id) => {
	return {
		type: 'TOGGLE_IMPORTANCE',
		data: {
			id,
		},
	};
};
export default noteReducer;
