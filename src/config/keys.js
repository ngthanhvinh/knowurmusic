const isLocalhost = window.location.hostname === 'localhost';
export const CLIENT_ID = isLocalhost ? 'bd28abedf06342948993a7bb52ca0cb7' : '';
export const CLIENT_SECRET = isLocalhost
	? '405ebe1ec68848e9b00410a9fca5d89f'
	: '';
export const SCOPES = isLocalhost ? 'user-read-email' : '';
export const REDIRECT_URI = isLocalhost
	? 'http://localhost:3000/auth/spotify/callback'
	: '';
