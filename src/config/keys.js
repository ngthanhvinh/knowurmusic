const dev = {
	CLIENT_ID: 'bd28abedf06342948993a7bb52ca0cb7',
	CLIENT_SECRET: '405ebe1ec68848e9b00410a9fca5d89f',
	SCOPES: 'user-read-email',
	REDIRECT_URI: 'http://localhost:3000/auth/spotify/callback',
};

const prod = {};

const keys = process.env.NODE_ENV === 'development' ? dev : prod;

export default keys;
