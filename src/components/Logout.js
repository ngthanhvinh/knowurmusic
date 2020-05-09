import React, { Component } from 'react';
import auth from '../services/auth';

import { connect } from 'react-redux';
import * as actions from '../actions';

import './App.css';

class Logout extends Component {
	onClick = () => {
		auth.logout();
		// refresh page
		window.location.reload(false);
	};
	render() {
		return <button onClick={this.onClick}>logout</button>;
	}
}

export default connect(null, actions)(Logout);
