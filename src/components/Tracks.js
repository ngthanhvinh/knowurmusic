import React, { Component } from 'react';
import trackByReleasedDate from '../utils/tracksByReleasedDate';

class Tracks extends Component {
	displayTrack = (item) => {
		return (
			<div className='track'>
				<img
					className='album_cover'
					src={item.track.album.images[1].url}
					alt={item.track.name}
				></img>

				<div className='track_info'>
					<div className='half'>
						<a href={item.track.external_urls.spotify}>
							<p style={{ fontWeight: 800 }}>{item.track.name}</p>
						</a>
					</div>
					<div className='half'>
						<p>
							by{' '}
							{item.track.artists
								.map((artist, key) => (
									<a key={key} href={artist.external_urls.spotify}>
										{artist.name}
									</a>
								))
								.reduce((prev, curr) => [prev, ', ', curr])}
						</p>
					</div>
				</div>
			</div>
		);
	};

	render() {
		const tracks = this.props.tracks;
		if (tracks == null) return null;

		let by_year = trackByReleasedDate(tracks);

		let years = [];
		for (const year in by_year) {
			years.push(
				<div className='year_outer' key={year}>
					<h2 className='year_title'>
						<span style={{ color: 'royalblue' }}>{year}</span>
						<span> / {by_year[year].length} song(s)</span>
					</h2>
					<div className='year_inner'>
						{by_year[year].map((item, key) => {
							return <span key={key}>{this.displayTrack(item)}</span>;
						})}
					</div>
				</div>
			);
		}
		return years;
	}
}

export default Tracks;
