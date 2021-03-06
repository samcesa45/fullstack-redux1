import { service } from '../services/notes';
const noteReducer = (state = [], action) => {
	switch (action.type) {
		case 'NEW_NOTE':
			// return state.concat(action.data);
			return [...state, action.data];
		case 'INIT_NOTES':
			return action.data;
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

export const initializeNotes = () => async (dispatch) => {
	const notes = await service.getAll();
	dispatch({
		type: 'INIT_NOTES',
		data: notes,
	});
};

export const createNote = (content) => async (dispatch) => {
	const newNote = await service.createNew(content);
	dispatch({
		type: 'NEW_NOTE',
		data: newNote,
	});
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

// {
// 	"notes": [
// 		{
// 			"content": "the app state is in redux store",
// 			"important": true,
// 			"id": 1
// 		},
// 		{
// 			"content": "state changes are made with actions",
// 			"important": false,
// 			"id": 2
// 		},
// 		{
// 			"content": "I added a new note",
// 			"important": false,
// 			"id": 3
// 		}
// 	]
// }
