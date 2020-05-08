import React, { Component } from 'react';
import { connect } from 'react-redux';
import SpotifyLogin from './SpotifyLogin';
import Logout from './Logout';
import * as actions from '../actions';

class Header extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		switch (this.props.auth) {
			case null:
				return <SpotifyLogin />;
			default:
				const { displayName, href } = this.props.auth;
				return (
					<div>
						<div>
							know <a href={href}>{displayName}</a> favourite music by time
						</div>
						<Logout />
					</div>
				);
		}
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps, actions)(Header);
