const initialState = '';

const notificationReducers = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_NOTIFICATION':
			clearTimeout(action.data.delay);
			return action.data.message;

		case 'REMOVE_NOTIFICATION':
			return initialState;

		default:
			return state;
	}
};

export const setNotification = (message, delay) => {
	return {
		type: 'SET_NOTIFICATION',
		data: {
			message,
			delay: setTimeout(() => {
				removeNotification('');
			}, delay * 1000),
		},
	};
};

export const removeNotification = () => {
	return {
		type: 'REMOVE_NOTIFICATION',
	};
};

export default notificationReducers;
