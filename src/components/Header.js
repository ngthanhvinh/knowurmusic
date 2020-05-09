import React, { Component } from 'react';
import { connect } from 'react-redux';
import SpotifyLogin from './SpotifyLogin';
import Logout from './Logout';
import { fetchUser } from '../actions';

class Header extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		switch (this.props.auth) {
			case null:
				return <SpotifyLogin />;
			default:
				const { id, url } = this.props.auth;
				return (
					<div>
						<div className='header big'>
							know <a href={url}>{id}</a>'s favourite music by time
							<span className='logout'>
								<Logout />
							</span>
						</div>
					</div>
				);
		}
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps, { fetchUser })(Header);
