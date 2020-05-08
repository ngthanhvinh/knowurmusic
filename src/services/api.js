const api = {
	getUser: async (accessToken) => {
		const requestOptions = {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		};
		try {
			let response = await fetch(
				'https://api.spotify.com/v1/me',
				requestOptions
			);
			if (!response.ok) {
				throw Error(response.statusText);
			}
			response = await response.json();
			return response;
		} catch (error) {
			console.log(error);
		}
	},
};

export default api;
