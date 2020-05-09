import React, { Component } from 'react';
import auth from '../services/auth';

import { connect } from 'react-redux';
import * as actions from '../actions';

import './App.css'

class Logout extends Component {
	onClick = () => {
		auth.logout();
		this.props.fetchUser();
	};
	render() {
		return <button href="" onClick={this.onClick}>logout</button>;
	}
}

export default connect(null, actions)(Logout);
