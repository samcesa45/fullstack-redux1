import React from 'react';
import { createNote } from '../reducers/noteReducer';
import { connect } from 'react-redux';

const NewNote = (props) => {
	const addNote = async (event) => {
		console.log(createNote);
		console.log(props.createNote);
		event.preventDefault();
		const content = event.target.note.value;
		event.target.note.value = '';

		props.createNote(content);
	};
	return (
		<form onSubmit={addNote}>
			<input name="note" />
			<button type="submit">add</button>
		</form>
	);
};

const mapDispatchToProps = {
	createNote,
};

export default connect(null, mapDispatchToProps)(NewNote);
