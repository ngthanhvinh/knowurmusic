import { FETCH_USER, FETCH_SAVED_TRACKS } from './types';
import authServices from '../services/auth';
import apiServices from '../services/api';

export const fetchUser = () => async (dispatch) => {
	const accessToken = authServices.getAccessToken();
	if (!accessToken) {
		dispatch({ type: FETCH_USER, payload: null });
		return;
	}
	try {
		const user = await apiServices.getUser(accessToken);
		dispatch({
			type: FETCH_USER,
			payload: { id: user.id, url: user.external_urls.spotify },
		});
	} catch (error) {
		console.log(error);
	}
};

export const fetchSavedTracks = () => async (dispatch) => {
	const accessToken = authServices.getAccessToken();
	if (!accessToken) {
		dispatch({ type: FETCH_SAVED_TRACKS, payload: null });
		return;
	}
	try {
		const data = await apiServices.getSavedTracks(accessToken);
		dispatch({
			type: FETCH_SAVED_TRACKS,
			payload: data.items,
		});
	} catch (error) {
		console.log(error);
	}
};
