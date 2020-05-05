import { FETCH_USER } from './types';
import authServices from '../services/auth';

export const fetchUser = () => (dispatch) => {
	const accessToken = authServices.getAccessToken();
	console.log('accessToken', accessToken);
	dispatch({ type: FETCH_USER, payload: accessToken });
};
