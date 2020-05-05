import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<div>
				<Header />
			</div>
		);
	}
}

export default connect(null, actions)(App);
