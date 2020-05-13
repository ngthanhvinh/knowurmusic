import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import trackByReleasedDate from '../../utils/tracksByReleasedDate';

const DisplayTrack = ({ item }) => {
	return (
		<div className='tracks'>
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
		<div className='outer year-wrapper' key={year}>
			<div className='year_title'>
				<button className='button_year' onClick={() => setIsOpened(!isOpened)}>
					<span style={{ color: 'royalblue' }}> {year}</span>
					<span> / {byYear[year].length} song(s)</span>
					<span className='indicator'>{isOpened ? '–' : '+'}</span>
				</button>
			</div>
			<Collapse isOpened={isOpened}>
				<div className='year_inner'>
					{byYear[year].map((item, key) => {
						return (
							<span key={year + '-' + key}>
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

	const songCount = (
		<h1 className='outer' key='songCount' style={{ marginBottom: '10px' }}>
			you have saved a total of
			<span className='colored'> {tracks.length} </span>
			songs and here are all of them,
			<span className='colored'> oldest first</span>.
		</h1>
	);

	let years = [songCount];

	for (const year in byYear) {
		years.push(<TrackByYear year={year} byYear={byYear} key={year} />);
	}

	return years;
};

export default Tracks;
