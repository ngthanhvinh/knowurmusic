import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSavedTracks } from '../actions';

import Tracks from './Tracks';
import ChartByReleasedDate from './ChartByReleasedDate';
import ChartByDiscoveredDate from './ChartByDiscoveredDate';

class Dashboard extends Component {
	componentDidMount() {
		this.props.fetchSavedTracks();
	}

	render() {
		return (
			<div>
				<Tracks tracks={this.props.tracks} />
				<ChartByReleasedDate tracks={this.props.tracks} />
				<ChartByDiscoveredDate tracks={this.props.tracks} />
			</div>
		);
	}
}

function mapStateToProps({ tracks }) {
	return { tracks };
}

export default connect(mapStateToProps, { fetchSavedTracks })(Dashboard);
