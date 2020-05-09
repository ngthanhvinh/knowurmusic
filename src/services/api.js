import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();
console.log('nani');

const api = {
	getUser: async (accessToken) => {
		spotifyApi.setAccessToken(accessToken);
		try {
			const res = await spotifyApi.getMe();
			return res;
		} catch (error) {
			console.log(error);
		}
	},

	getSavedTracks: async (accessToken) => {
		spotifyApi.setAccessToken(accessToken);
		try {
			const res = await spotifyApi.getMySavedTracks();
			return res;
		} catch (error) {
			console.log(error);
		}
	},
};

export default api;
