import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSavedTracks } from '../../actions';

class GenreDashboard extends Component {
	componentDidMount() {
		this.props.fetchSavedTracks();
	}

	getAlbumsFromTracks = (tracks) => {
		let albums = {};
		for (const key in tracks) {
			if (!(tracks[key].track.album.id in albums)) {
				albums[tracks[key].track.album.id] = 0;
			}
			albums[tracks[key].track.album.id] += 1;
		}
		return albums;
	};

	render() {
		let albums = this.getAlbumsFromTracks(this.props.tracks);
		if (albums == null) return null;
		return (
			<div>
				{Object.keys(albums).map((item, key) => (
					<p key={key}>{item}</p>
				))}
			</div>
		);
	}
}

function mapStateToProps({ tracks }) {
	return { tracks };
}

export default connect(mapStateToProps, { fetchSavedTracks })(GenreDashboard);
