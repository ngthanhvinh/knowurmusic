import { FETCH_SAVED_TRACKS } from '../actions/types';

export default function (state = null, action) {
	switch (action.type) {
		case FETCH_SAVED_TRACKS:
			return action.payload;
		default:
			return state;
	}
}
