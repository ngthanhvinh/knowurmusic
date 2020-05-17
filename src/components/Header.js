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
				<span className='selected nav-item'>through the years</span>
				<span className="slash"> / </span>
				<a href="/extras" className='nav-thin nav-item'>versus the world</a>
			</div>
		)
		if (path === '/extras') {
			option = (
				<div className="nav">
					<a href="/" className='nav-thin nav-item'>through the years</a>
					<span className="slash"> / </span>
					<span className='selected nav-item'> versus the world</span>
				</div>)
		}
		switch (this.props.auth) {
			case null:
				return <SpotifyLogin />;
			default:
				let { url } = this.props.auth;
				return (
					<div>
						<div className='header bold'>
							<span>know <a style={{ color: 'darkblue' }} href={url}>your</a> music </span>
							<span><Logout /></span>
							{option}
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
