import { FETCH_USER } from './types';
import authServices from '../services/auth';
import apiServices from '../services/api';

export const fetchUser = () => async (dispatch) => {
	const accessToken = authServices.getAccessToken();
	if (!accessToken) {
		dispatch({ type: FETCH_USER, payload: null });
		return;
	}
	const user = await apiServices.getUser(accessToken);
	dispatch({
		type: FETCH_USER,
		payload: { id: user.id, displayName: user.display_name, href: user.href },
	});
};
