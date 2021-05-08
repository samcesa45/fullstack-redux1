import axios from 'axios';
const baseUrl = 'http://localhost:3001/anecdotes';

const getAll = async () => {
	const request = await axios.get(baseUrl);
	return request.data;
};

const create = async (newItem) => {
	const response = await axios.post(baseUrl, newItem);
	return response.data;
};

export const service = {
	getAll,
	create,
};
