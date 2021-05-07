import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './exercise6.3-6.8/App';
import store from './exercise6.3-6.8/store/store';
// import noteReducer from './reducers/noteReducer';
// import filterReducer from './reducers/filterReducer';

// const reducer = combineReducers({
// 	notes: noteReducer,
// 	filter: filterReducer,
// });

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
