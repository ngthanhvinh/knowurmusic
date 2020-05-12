import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSavedTracks } from '../actions';

class Tracks extends Component {
	componentDidMount() {
		this.props.fetchSavedTracks();
	}

	displayYear = (item) => {
		var by_year = {};
		console.log(item[0])
		for (const key in item) {
			const year = item[key].track.album.release_date.slice(0, 4)
			if (!(year in by_year))
				by_year[year] = []
			by_year[year].push(item[key])
		}

		var years = []
		const tracks_count = (
			<h1 className="year_outer" key="track_count">
				you saved a total of
				<span style={{ color: "royalblue" }}> {item.length} </span>
				songs. here are all of them,
				<span style={{ color: "royalblue" }}> oldest first: </span>
			</h1>)

		var min_year = 5000, max_year = -5000;

		for (const year in by_year) {
			min_year = Math.min(min_year, year)
			max_year = Math.max(max_year, year)
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
		const time_range = (
			<h1 key="time_range" className="year_outer">
				your music spans
				<span style={{ color: "royalblue" }}> {max_year - min_year} </span>
				years.
			</h1>
		)
		return [time_range, tracks_count, years]
	}

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
						<p style={{ fontWeight: 800 }}>
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
		return this.displayYear(tracks)

	}
}

function mapStateToProps({ tracks }) {
	return { tracks };
}

export default connect(mapStateToProps, { fetchSavedTracks })(Tracks);
