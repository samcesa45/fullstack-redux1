import axios from 'axios';
const baseUrl = 'http://localhost:3001/anecdotes';

const getAll = async () => {
	const request = await axios.get(baseUrl);
	return request.data;
};

const create = async (content) => {
	const newAnecdotes = {
		content,
		votes: 0,
	};
	const response = await axios.post(baseUrl, newAnecdotes);
	return response.data;
};

const update = async (anecdote) => {
	const response = await axios.put(`${baseUrl}/${anecdote.id}`, anecdote);
	return response.data;
};

export const service = {
	getAll,
	create,
	update,
};
