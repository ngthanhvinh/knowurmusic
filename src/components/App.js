import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import TimeDashboard from './time/TimeDashboard';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Header />
				<Route exact path='/' component={TimeDashboard} />
			</BrowserRouter>
		);
	}
}

export default App;
