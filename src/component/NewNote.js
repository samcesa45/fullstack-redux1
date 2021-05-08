import React from 'react';
import { createNote } from '../reducers/noteReducer';
import { useDispatch } from 'react-redux';
import { service } from '../services/notes';

const NewNote = () => {
	const dispatch = useDispatch();

	const addNote = async (event) => {
		event.preventDefault();
		const content = event.target.note.value;
		event.target.note.value = '';

		const notes = await service.createNew(content);
		dispatch(createNote(notes));
	};
	return (
		<form onSubmit={addNote}>
			<input name="note" />
			<button type="submit">add</button>
		</form>
	);
};

export default NewNote;
