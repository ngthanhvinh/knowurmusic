import React, { Component } from 'react';

import Header from './Header';
import Tracks from './Tracks';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Tracks />
			</div>
		);
	}
}

export default App;
