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

	// Get user's top tracks
	getMyTopTracks: async (accessToken) => {
		spotifyApi.setAccessToken(accessToken);
		const limit = 50;
		const offset = 0;
		try {
			const res = await spotifyApi.getMyTopTracks({ limit, offset });
			return res.items;
		} catch (error) {
			console.log(error);
		}
	},

	// Get global top tracks (top 50)
	getGlobalTopTracks: async (accessToken) => {
		spotifyApi.setAccessToken(accessToken);
		const top50PlaylistId = '37i9dQZEVXbMDoHDwVN2tF';
		const limit = 50;
		const offset = 0;
		try {
			const res = await spotifyApi.getPlaylist(top50PlaylistId, {
				limit,
				offset,
			});
			return res.tracks.items;
		} catch (error) {
			console.log(error);
		}
	},
};

export default api;
