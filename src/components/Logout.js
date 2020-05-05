import React, { Component } from 'react';
import auth from '../services/auth';

import { connect } from 'react-redux';
import * as actions from '../actions';

class Logout extends Component {
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}
	onClick() {
		auth.logout();
		this.props.fetchUser();
	}
	render() {
		return <button onClick={this.onClick}>Logout!</button>;
	}
}

export default connect(null, actions)(Logout);
