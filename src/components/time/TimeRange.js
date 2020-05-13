import React, { Component } from 'react';
import trackByReleasedDate from '../../utils/tracksByReleasedDate';

class TimeRange extends Component {
	render() {
		const tracks = this.props.tracks;
		if (tracks == null) return null;

		let byYear = trackByReleasedDate(tracks);
		let minYear = 5000,
			maxYear = -5000;

		for (const year in byYear) {
			minYear = Math.min(minYear, year);
			maxYear = Math.max(maxYear, year);
		}
		const decade =
			maxYear - minYear >= 10 ? (
				<span className='Outer' style={{ padding: 'None' }}>
					, for over
					<span className='colored'>
						{' '}
						{Math.floor((maxYear - minYear) / 10)}{' '}
					</span>
					decades
				</span>
			) : null;

		const century =
			maxYear - minYear >= 100 ? (
				<span className='Outer' style={{ padding: 'None' }}>
					,
					<span className='colored'>
						{' '}
						{Math.floor((maxYear - minYear) / 100)}{' '}
					</span>
					centuries
				</span>
			) : null;

		const oldTrack = byYear[minYear][0];

		const exampleOld = (
			<div className='example_wrapper' key='example_old'>
				<img
					className='album_cover_big'
					src={oldTrack.track.album.images[1].url}
					alt={oldTrack.track.name}
				></img>

				<div>
					<p>one of your oldest tracks is</p>
					<p>
						<a className='bold' href={oldTrack.track.external_urls.spotify}>
							{oldTrack.track.name}
						</a>
					</p>
					<p>
						by{' '}
						{oldTrack.track.artists
							.map((artist, key) => (
								<a
									className='bold'
									key={key}
									href={artist.external_urls.spotify}
								>
									{artist.name}
								</a>
							))
							.reduce((prev, curr) => [prev, ', ', curr])}
					</p>
					<p>
						released
						<span className='colored'>
							{' '}
							{oldTrack.track.album.release_date}
						</span>
						.
					</p>
				</div>
			</div>
		);

		const newTrack = byYear[maxYear][0];

		const exampleNew = (
			<div className='example_wrapper' key='example_new'>
				<img
					className='album_cover_big'
					src={newTrack.track.album.images[1].url}
					alt={newTrack.track.name}
				></img>

				<div>
					<p>your most recent tracks include</p>

					<p>
						<a className='bold' href={newTrack.track.external_urls.spotify}>
							{newTrack.track.name}
						</a>
					</p>
					<p>
						by{' '}
						{newTrack.track.artists
							.map((artist, key) => (
								<a
									className='bold'
									key={key}
									href={artist.external_urls.spotify}
								>
									{artist.name}
								</a>
							))
							.reduce((prev, curr) => [prev, ', ', curr])}
					</p>
					<p>
						released
						<span className='colored'>
							{' '}
							{newTrack.track.album.release_date}
						</span>
						.
					</p>
				</div>
			</div>
		);

		const range = (
			<div>
				<div className='outer'>
					<h1 key='range'>
						your music spans
						<span className='colored'> {maxYear - minYear} </span>
						year(s) from
						<span className='colored'> {minYear} </span>
						to
						<span className='colored'> {maxYear}</span>
						{decade}
						{century}.
					</h1>
					{exampleOld}
					{exampleNew}
				</div>
				<div className='separator'></div>
			</div>
		);
		return range;
	}
}

export default TimeRange;
