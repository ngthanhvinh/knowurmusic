import keys from '../config/keys';

export default () => {
	const url =
		`https://accounts.spotify.com/authorize` +
		`?client_id=${keys.CLIENT_ID}` +
		`&redirect_uri=${encodeURIComponent(keys.REDIRECT_URI)}` +
		`&scope=${encodeURIComponent(keys.SCOPES)}` +
		`&response_type=code`;
	return url;
};
