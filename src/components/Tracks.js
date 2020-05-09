import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSavedTracks } from '../actions';

class Tracks extends Component {
	componentDidMount() {
		this.props.fetchSavedTracks();
	}

	render() {
		return <div>{JSON.stringify(this.props.tracks)}</div>;
	}
}

function mapStateToProps({ tracks }) {
	return { tracks };
}

export default connect(mapStateToProps, { fetchSavedTracks })(Tracks);
