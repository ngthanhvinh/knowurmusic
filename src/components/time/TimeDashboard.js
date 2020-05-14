import React, { Component } from 'react';
import auth from '../../services/auth';
import api from '../../services/api';

import Tracks from './Tracks';
import ChartByReleasedDate from './ChartByReleasedDate';
import ChartByDiscoveredDate from './ChartByDiscoveredDate';
import TimeRange from './TimeRange';

class TimeDashboard extends Component {
	state = {
		tracks: null,
	};

	async componentDidMount() {
		const accessToken = auth.getAccessToken();
		if (!accessToken) this.setState({ tracks: null });
		else {
			try {
				const tracks = await api.getSavedTracks(accessToken);
				this.setState({ tracks });
			} catch (error) {
				console.log(error);
			}
		}
	}

	render() {
		const { tracks } = this.state;
		return (
			<div>
				<TimeRange tracks={tracks} />
				<ChartByReleasedDate tracks={tracks} />
				<ChartByDiscoveredDate tracks={tracks} />
				<Tracks tracks={tracks} />
			</div>
		);
	}
}

export default TimeDashboard;
