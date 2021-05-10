import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import anecdotesReducer from '../reducers/anecdotesReducer';
import notificationReducer from '../reducers/notificationReducers';
import filterReducer from '../reducers/filterReducer';
const reducer = combineReducers({
	anecdotes: anecdotesReducer,
	message: notificationReducer,
	filter: filterReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
