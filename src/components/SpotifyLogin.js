import React, { Component } from 'react';
import OauthPopup from 'react-oauth-popup';
import authorizeURL from '../utils/authorizeURL';
import auth from '../services/auth';
import keys from '../config/keys';

import { connect } from 'react-redux';
import * as actions from '../actions';

import './App.css';

class SpotifyLogin extends Component {
	onCode = async (code, params) => {
		const requestOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
			},
			body:
				`grant_type=authorization_code` +
				`&code=${code}` +
				`&redirect_uri=${encodeURIComponent(keys.REDIRECT_URI)}` +
				`&client_id=${keys.CLIENT_ID}` +
				`&client_secret=${keys.CLIENT_SECRET}`,
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

		// refresh page
		window.location.reload(false);
	};

	render() {
		return (
			<div className="welcome big">
				<OauthPopup url={authorizeURL()} onCode={this.onCode}>
					<span>know </span>
					<button className="button_bold">your</button>
					<span> music with </span>
					<button style={{ color: "#1DB954" }} className="button_bold">spotify</button>
				</OauthPopup>
			</div>
		);
	}
}

export default connect(null, actions)(SpotifyLogin);
