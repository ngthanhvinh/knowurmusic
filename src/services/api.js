import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

const api = {
	// Get information of the current user
	getUser: async (accessToken) => {
		spotifyApi.setAccessToken(accessToken);
		try {
			const res = await spotifyApi.getMe();
			return res;
		} catch (error) {
			console.log(error);
		}
	},

	// Get all saved tracks of the current user
	getSavedTracks: async (accessToken) => {
		spotifyApi.setAccessToken(accessToken);
		const limit = 50;
		let offset = 0;
		let tracks = [];
		while (true) {
			try {
				const res = await spotifyApi.getMySavedTracks({ limit, offset });
				tracks = tracks.concat(res.items);
				if (res.next == null) {
					return tracks;
				} else {
					offset += limit;
				}
			} catch (error) {
				console.log(error);
				return;
			}
		}
	},
};

export default api;
