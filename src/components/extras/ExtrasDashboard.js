import React, { Component } from 'react';
import auth from '../../services/auth';
import api from '../../services/api';
import PopularityCharts from './PopularityCharts';
import DurationCharts from './DurationCharts';
import ValenceCharts from './ValenceCharts';

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
			<div className='outer'>
				<p>Compare your top tracks vs global top tracks</p>
				<p>Popularity</p>
				<PopularityCharts
					myTracks={myTracks.map((item) => item.popularity)}
					globalTracks={globalTracks.map((item) => item.popularity)}
				/>
				<p>Duration (in minutes)</p>
				<DurationCharts
					myTracks={myTracksFeatures.map((item) => item.duration_ms)}
					globalTracks={globalTracksFeatures.map((item) => item.duration_ms)}
				/>
				<p>Valence</p>
				<p>
					Fact: Tracks with high valence sound more positive (e.g. happy,
					cheerful, euphoric), while tracks with low valence sound more negative
					(e.g. sad, depressed, angry)
				</p>
				<ValenceCharts
					myTracks={myTracksFeatures.map((item) => item.valence)}
					globalTracks={globalTracksFeatures.map((item) => item.valence)}
				/>
			</div>
		);
	}
}

export default ExtrasDashboard;
