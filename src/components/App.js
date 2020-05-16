import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import TimeDashboard from './time/TimeDashboard';
import ExtrasDashboard from './extras/ExtrasDashboard';

import './App.css';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Header />
				<Route exact path='/' component={TimeDashboard} />
				<Route path='/extras' component={ExtrasDashboard} />
			</BrowserRouter>
		);
	}
}

export default App;
