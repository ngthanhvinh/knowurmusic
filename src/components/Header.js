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
				const { id, href } = this.props.auth;
				return (
					<div>
						<div className="header">
							know <a href={href}>{id}</a>'s favourite music by time
							<span className="logout"><Logout /></span>
						</div>

					</div>
				);
		}
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps, actions)(Header);
