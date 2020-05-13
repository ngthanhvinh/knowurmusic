import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import TimeDashboard from './time/TimeDashboard';
import GenreDashboard from './genre/GenreDashboard';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Header />
				<Route exact path='/' component={TimeDashboard} />
				<Route path='/genre' component={GenreDashboard} />
			</BrowserRouter>
		);
	}
}

export default App;
