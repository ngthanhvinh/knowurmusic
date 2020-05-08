import { FETCH_USER } from './types';
import authServices from '../services/auth';

export const fetchUser = () => (dispatch) => {
	const accessToken = authServices.getAccessToken();
	dispatch({ type: FETCH_USER, payload: accessToken });
};
