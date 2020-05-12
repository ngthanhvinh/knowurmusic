import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import trackByReleasedDate from '../utils/tracksByReleasedDate';

const DisplayTrack = ({ item }) => {
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

const TrackByYear = ({ year, byYear }) => {
	const [isOpened, setIsOpened] = useState(false);

	return (
		<div className='outer' key={year}>
			<h2 className='year_title'>
				<button onClick={() => setIsOpened(!isOpened)}>
					{isOpened ? '-' : '+'}
				</button>
				<span style={{ color: 'royalblue' }}>{year}</span>
				<span> / {byYear[year].length} song(s)</span>
			</h2>
			<Collapse isOpened={isOpened}>
				<div className='year_inner'>
					{byYear[year].map((item, key) => {
						return (
							<span key={key}>
								<DisplayTrack item={item} />
							</span>
						);
					})}
				</div>
			</Collapse>
		</div>
	);
};

const Tracks = ({ tracks }) => {
	if (tracks == null) return null;

	let byYear = trackByReleasedDate(tracks);

	let years = [];
	for (const year in byYear) {
		years.push(<TrackByYear year={year} byYear={byYear} />);
	}

	return years;
};

export default Tracks;
