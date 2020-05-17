import React, { Component } from 'react';
import auth from '../../services/auth';
import api from '../../services/api';

import Tracks from './Tracks';
import PopularityCharts from './PopularityCharts';
import DurationCharts from './DurationCharts';
import ValenceCharts from './ValenceCharts';
import DanceablityCharts from './DanceabilityCharts';

class ExtrasDashboard extends Component {
	state = {
		myTracks: null,
		globalTracks: null,
		myTracksFeatures: null,
		globalTracksFeatures: null,
	};

	async componentDidMount() {
		const accessToken = auth.getAccessToken();
		if (!accessToken) return;

		let myTracks = null;
		let globalTracks = null;

		try {
			myTracks = await api.getMyTopTracks(accessToken);
		} catch (error) {
			console.log(error);
			return;
		}
		try {
			globalTracks = await api.getGlobalTopTracks(accessToken);
		} catch (error) {
			console.log(error);
			return;
		}

		globalTracks = globalTracks.map((item) => item.track);

		let myTracksFeatures = null;
		let globalTracksFeatures = null;
		try {
			myTracksFeatures = await api.getTracksFeatures(
				accessToken,
				myTracks.map((item) => item.id)
			);
		} catch (error) {
			console.log(error);
			return;
		}
		try {
			globalTracksFeatures = await api.getTracksFeatures(
				accessToken,
				globalTracks.map((item) => item.id)
			);
		} catch (error) {
			console.log(error);
			return;
		}

		this.setState({
			myTracks,
			globalTracks,
			myTracksFeatures,
			globalTracksFeatures,
		});
	}

	render() {
		const {
			myTracks,
			globalTracks,
			myTracksFeatures,
			globalTracksFeatures,
		} = this.state;

		if (
			!myTracks ||
			!globalTracks ||
			!myTracksFeatures ||
			!globalTracksFeatures
		) {
			return null;
		}

		return (
			<div>
				<Tracks myTracks={myTracks} globalTracks={globalTracks} />
				<div className='separator'></div>
				<div className='outer'>
					<h1 className='colored'>popularity</h1>
					<h3>
						The popularity of a track is an algorithmically-calculated value
						between 0 and 100, with 100 being the most popular.
					</h3>
					<h4 className="colored">
						Tips: click/tap on the legends to hide or show the data.
					</h4>
					<PopularityCharts
						myTracks={myTracks.map((item) => item.popularity)}
						globalTracks={globalTracks.map((item) => item.popularity)}
					/>
				</div>
				<div className='separator'></div>
				<div className='outer'>
					<h1 className='colored'>duration range</h1>
					<DurationCharts
						myTracks={myTracksFeatures.map((item) => item.duration_ms)}
						globalTracks={globalTracksFeatures.map((item) => item.duration_ms)}
					/>
				</div>
				<div className='separator'></div>
				<div className='outer'>
					<h1 className='colored'>valence</h1>
					<h3>
						Tracks with high valence sound more positive (e.g. happy, cheerful,
						euphoric), while tracks with low valence sound more negative (e.g.
						sad, depressed, angry).
					</h3>
					<ValenceCharts
						myTracks={myTracksFeatures.map((item) => item.valence)}
						globalTracks={globalTracksFeatures.map((item) => item.valence)}
					/>
				</div>
				<div className='separator'></div>
				<div className='outer'>
					<h1 className='colored'>danceability</h1>
					<h3>
						Danceability describes how suitable a track is for dancing based on
						a combination of musical elements including tempo, rhythm stability,
						beat strength, and overall regularity.
					</h3>
					<DanceablityCharts
						myTracks={myTracksFeatures.map((item) => item.danceability)}
						globalTracks={globalTracksFeatures.map((item) => item.danceability)}
					/>
				</div>
				<div className='separator'></div>
			</div>
		);
	}
}

export default ExtrasDashboard;
