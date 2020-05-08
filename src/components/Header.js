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
				return (
					<div>
						<p>{this.props.auth}</p>
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
