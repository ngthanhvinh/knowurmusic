import { FETCH_USER } from './types';
import auth from '../services/auth';
import api from '../services/api';

export const fetchUser = () => async (dispatch) => {
	const accessToken = auth.getAccessToken();
	if (!accessToken) {
		dispatch({ type: FETCH_USER, payload: null });
		return;
	}
	try {
		const user = await api.getUser(accessToken);
		dispatch({
			type: FETCH_USER,
			payload: { id: user.id, url: user.external_urls.spotify },
		});
	} catch (error) {
		console.log(error);
	}
};
