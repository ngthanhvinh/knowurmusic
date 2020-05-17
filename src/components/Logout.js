import React, { Component } from 'react';
import auth from '../services/auth';

import { connect } from 'react-redux';
import * as actions from '../actions';

class Logout extends Component {
	onClick = () => {
		auth.logout();
		// refresh page
		window.location.reload(false);
	};
	render() {
		return <button className="logout" onClick={this.onClick}>✕</button>;
	}
}

export default connect(null, actions)(Logout);
