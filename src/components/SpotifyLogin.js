import React, { Component } from 'react';
import OauthPopup from 'react-oauth-popup';
import authorizeURL from '../utils/authorizeURL';
import auth from '../services/auth';
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from '../config/keys';

import { connect } from 'react-redux';
import * as actions from '../actions';

class SpotifyLogin extends Component {
	constructor(props) {
		super(props);
		this.onCode = this.onCode.bind(this);
	}

	async onCode(code, params) {
		const requestOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
			},
			body:
				`grant_type=authorization_code` +
				`&code=${code}` +
				`&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
				`&client_id=${CLIENT_ID}` +
				`&client_secret=${CLIENT_SECRET}`,
		};
		// get access token from Spotify API
		try {
			const response = await fetch(
				'https://accounts.spotify.com/api/token',
				requestOptions
			);
			if (!response.ok) {
				throw Error(response.statusText);
			}
			const data = await response.json();
			auth.setAccessToken(
				data.access_token,
				new Date().getTime() + data.expires_in * 1000
			);
		} catch (error) {
			console.log(error);
		}

		this.props.fetchUser();
	}

	render() {
		return (
			<OauthPopup url={authorizeURL()} onCode={this.onCode}>
				<button>Click me to open a Popup</button>
			</OauthPopup>
		);
	}
}

export default connect(null, actions)(SpotifyLogin);
