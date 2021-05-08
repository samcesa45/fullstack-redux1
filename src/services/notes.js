import axios from 'axios';

const baseUrl = 'http://localhost:3001/notes';

const getAll = async () => {
	const request = await axios.get(baseUrl);
	return request.data;
};

const createNew = async (content) => {
	const newNote = {
		content,
		important: false,
	};
	const response = await axios.post(baseUrl, newNote);
	return response.data;
};

export const service = {
	getAll,
	createNew,
};
