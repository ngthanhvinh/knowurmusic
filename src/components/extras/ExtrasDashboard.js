import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import auth from '../../services/auth';
import api from '../../services/api';

const getDistribution = (tracks) => {
	let dataValues = new Array(20).fill(0);
	for (const key in tracks) {
		dataValues[Math.min(19, parseInt(tracks[key].popularity / 5))]++;
	}
	return dataValues;
};

class ExtrasDashboard extends Component {
	state = {
		myTracks: null,
		globalTracks: null,
	};

	async componentDidMount() {
		const accessToken = auth.getAccessToken();
		if (!accessToken) {
			this.setState({ tracks: null });
			return;
		}

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

		this.setState({ myTracks, globalTracks });
	}

	render() {
		const { myTracks, globalTracks } = this.state;

		let myTracksDistribution = getDistribution(myTracks);
		let globalTracksDistribution = getDistribution(globalTracks);

		let dataLabels = new Array(21);
		for (let i = 0; i < dataLabels.length; ++i) {
			dataLabels[i] = 5 * i;
		}

		let myData = {
			labels: dataLabels,
			datasets: [
				{
					label: 'Your top tracks',
					borderWidth: 1,
					backgroundColor: 'rgb(6, 155, 255, 0.2)',
					borderColor: 'rgb(6, 156, 255)',
					hoverBackgroundColor: 'rgb(6, 155, 255, 0.4)',
					hoverBorderColor: 'rgb(6, 156, 255)',
					data: myTracksDistribution,
					barPercentage: 1.3,
				},
			],
		};

		let globalData = {
			labels: dataLabels,
			datasets: [
				{
					label: 'Global top tracks',
					borderWidth: 1,
					backgroundColor: 'rgb(29, 185, 84, 0.2)',
					borderColor: 'rgb(29, 185, 84)',
					hoverBackgroundColor: 'rgb(29, 185, 84, 0.4)',
					hoverBorderColor: 'rgb(29, 185, 84)',
					data: globalTracksDistribution,
					barPercentage: 1.3,
				},
			],
		};

		let options = {
			tooltips: {
				enabled: false,
			},
			scales: {
				xAxes: [
					{
						display: false,
						ticks: {
							max: 95,
						},
					},
					{
						display: true,
						ticks: {
							max: 100,
						},
					},
				],
				yAxes: [
					{
						ticks: {
							beginAtZero: true,
							suggestedMax: 30,
						},
					},
				],
			},
		};

		return (
			<div>
				<Bar data={myData} options={options} />
				<Bar data={globalData} options={options} />
			</div>
		);
	}
}

export default ExtrasDashboard;
