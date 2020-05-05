const auth = {
	setAccessToken: (access_token, expire_time) => {
		localStorage.setItem('access_token', access_token);
		localStorage.setItem('expire_time', expire_time);
	},

	logout: () => {
		localStorage.clear();
	},

	getAccessToken: () => {
		const expireTime = localStorage.getItem('expire_time');
		if (new Date().getTime() > expireTime) {
			auth.logout();
			return null;
		}
		return localStorage.getItem('access_token');
	},
};

export default auth;
