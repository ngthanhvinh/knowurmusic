import React from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';

const DisplayTrack = ({ item }) => {
	return (
		<div className='wrapper'>
			<img
				draggable={false}
				src={item.album.images[1].url}
				alt={item.name}
			></img>
			<div className='track'>
				<a href={item.external_urls.spotify}>
					<p style={{ fontWeight: 600 }}>{item.name}</p>
				</a>
			</div>
		</div>
	);
};

const Tracks = ({ myTracks, globalTracks }) => {
	return (
		<div>
			<div className='outer'>
				<h1>
					compare
					<span className='colored'> your top tracks </span>
				</h1>
			</div>

			<div className='tracks-bar'>
				<ScrollMenu
					wheel={false}
					inertiaScrolling={true}
					data={myTracks.map((item, key) => {
						return (
							<span key={key}>
								<DisplayTrack item={item} />
							</span>
						);
					})}
				/>
			</div>

			<div className='outer'>
				<h1 style={{ marginTop: '0' }}>
					versus the
					<span className='spotify-colored'> global top tracks</span>
				</h1>
			</div>

			<div className='tracks-bar'>
				<ScrollMenu
					wheel={false}
					inertiaScrolling={true}
					data={globalTracks.map((item, key) => {
						return (
							<span key={key}>
								<DisplayTrack item={item} />
							</span>
						);
					})}
				/>
			</div>
		</div>
	);
};

export default Tracks;
