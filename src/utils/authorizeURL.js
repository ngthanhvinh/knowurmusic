import { CLIENT_ID, REDIRECT_URI, SCOPES } from '../config/keys';

export default () => {
	const url =
		`https://accounts.spotify.com/authorize` +
		`?client_id=${CLIENT_ID}` +
		`&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
		`&scope=${encodeURIComponent(SCOPES)}` +
		`&response_type=code`;
	return url;
};
