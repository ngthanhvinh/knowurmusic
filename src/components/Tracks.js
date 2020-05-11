import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSavedTracks } from '../actions';

class Tracks extends Component {
	componentDidMount() {
		this.props.fetchSavedTracks();
	}

	displayYear = (item) => { }

	displayTrack = (item) => {
		return (
			<div className="track">
				<img className="album_cover" src={item.track.album.images[1].url} alt={item.track.name}></img>

				<div className="track_info">
					<div className="half">
						<a href={item.track.external_urls.spotify}>
							<p style={{ fontWeight: 800 }}>{item.track.name}</p>
						</a></div>
					<div className="half">
						<p>
							by {item.track.artists
								.map((artist, key) => (
									<a key={key} href={artist.external_urls.spotify}>
										{artist.name}
									</a>
								))
								.reduce((prev, curr) => [prev, ', ', curr])}
						</p>
					</div>
				</div>
			</div >
		);
	};

	render() {
		const tracks = this.props.tracks;
		if (tracks == null)
			return null

		var by_year = {};
		console.log(tracks[0])
		for (const key in tracks) {
			const year = tracks[key].track.album.release_date.slice(0, 4)
			if (!(year in by_year))
				by_year[year] = []
			by_year[year].push(tracks[key])
		}

		var years = []
		for (const year in by_year) {
			years.push(
				<div className="year_outer" key={year}>
					<h2 className="year_title">
						<span style={{ color: "royalblue" }}>{year}</span>
						<span> / {by_year[year].length} songs</span>
					</h2>
					<div className="year_inner">
						{by_year[year].map((item, key) => {
							return <span key={key}>{this.displayTrack(item)}</span>;
						})}
					</div>
				</div>)
		}
		return years
	}
}

function mapStateToProps({ tracks }) {
	return { tracks };
}

export default connect(mapStateToProps, { fetchSavedTracks })(Tracks);
