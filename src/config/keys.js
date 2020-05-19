const dev = {
	CLIENT_ID: 'bd28abedf06342948993a7bb52ca0cb7',
	CLIENT_SECRET: '405ebe1ec68848e9b00410a9fca5d89f',
	SCOPES: ['user-top-read', 'user-library-read'],
	REDIRECT_URI: `${window.location.protocol}//localhost:3000/auth/spotify/callback`,
};

const prod = {
	CLIENT_ID: '240b77f6ee93409b9f7b848d6888e288',
	CLIENT_SECRET: '53c5454abf5e4bacbde3b14a5f29364e',
	SCOPES: ['user-top-read', 'user-library-read'],
	REDIRECT_URI: `${window.location.protocol}//knowurmusic.herokuapp.com/auth/spotify/callback`,
};

const keys = process.env.NODE_ENV === 'development' ? dev : prod;

export default keys;
