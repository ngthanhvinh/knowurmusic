import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSavedTracks } from '../actions';

class Tracks extends Component {
	componentDidMount() {
		this.props.fetchSavedTracks();
	}

	displayTrack = (item) => {
		return (
			<div style={{ border: '1px solid black', margin: '5px', padding: '5px' }}>
				<a href={item.track.external_urls.spotify}>
					<img src={item.track.album.images[1].url} alt={item.track.name}></img>
				</a>
				<p>Added at: {item.added_at}</p>
				<p>Name: {item.track.name}</p>
				<p>
					{item.track.artists
						.map((artist, key) => (
							<a key={key} href={artist.external_urls.spotify}>
								{artist.name}
							</a>
						))
						.reduce((prev, curr) => [prev, ', ', curr])}
				</p>
			</div>
		);
	};

	render() {
		const tracks = this.props.tracks;
		console.log('tracks', tracks);
		return tracks != null ? (
			<div>
				<ul>
					{tracks.map((item, key) => {
						return <li key={key}>{this.displayTrack(item)}</li>;
					})}
				</ul>
			</div>
		) : (
			<div></div>
		);
	}
}

function mapStateToProps({ tracks }) {
	return { tracks };
}

export default connect(mapStateToProps, { fetchSavedTracks })(Tracks);
