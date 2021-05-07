import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import anecdotesReducer from '../reducers/anecdotesReducer';
import notificationReducer from '../reducers/notificationReducers';
import filterReducer from '../reducers/filterReducer';
const reducer = combineReducers({
	anecdotes: anecdotesReducer,
	message: notificationReducer,
	filter: filterReducer,
});
const store = createStore(reducer, composeWithDevTools());

export default store;
