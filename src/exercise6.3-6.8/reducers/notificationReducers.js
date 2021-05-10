const initialState = '';

const notificationReducers = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_NOTIFICATION':
			clearTimeout(state.delay);
			return [action.data.message, action.data.delay];

		case 'REMOVE_NOTIFICATION':
			return initialState;

		default:
			return state;
	}
};

export const setNotification = (message, delay) => async (dispatch) => {
	dispatch({
		type: 'SET_NOTIFICATION',
		data: {
			message,
			delay: setTimeout(() => {
				dispatch(removeNotification(''));
			}, delay * 1000),
		},
	});
};

export const removeNotification = () => async (dispatch) => {
	dispatch({
		type: 'REMOVE_NOTIFICATION',
	});
};

export default notificationReducers;
