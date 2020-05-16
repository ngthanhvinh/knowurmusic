import React, { Component } from 'react';
import { connect } from 'react-redux';
import SpotifyLogin from './SpotifyLogin';
import Logout from './Logout';
import { fetchUser } from '../actions';
import { withRouter } from 'react-router-dom';

class Header extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		const path = this.props.location.pathname
		let option = (
			<div className="nav">
				<span className='colored'>by time</span>
				<a href="/extras" className='nav-item'> / vs the world</a>
			</div>
		)
		if (path === '/extras') {
			option = (
				<div className="nav">
					<a href="/" className='nav-item'>by time / </a>
					<span className='colored'>vs the world</span>
				</div>)
		}
		switch (this.props.auth) {
			case null:
				return <SpotifyLogin />;
			default:
				const { id, url } = this.props.auth;
				return (
					<div>
						<div className='header bold'>
							<span>know <a href={url}>{id}</a>'s music </span>
							{option}
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

export default withRouter(connect(mapStateToProps, { fetchUser })(Header));
