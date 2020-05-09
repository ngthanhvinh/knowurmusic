import { combineReducers } from 'redux';
import authReducer from './authReducer';
import tracksReducer from './tracksReducer';

export default combineReducers({
	auth: authReducer,
	tracks: tracksReducer,
});
