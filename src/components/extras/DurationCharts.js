import React from 'react';
import getDistribution from '../../utils/getDistribution';
import { Bar } from 'react-chartjs-2';

const DurationCharts = ({ myTracks, globalTracks }) => {
	// convert to minutes
	myTracks = myTracks.map((item) => item / 60000);
	globalTracks = globalTracks.map((item) => item / 60000);

	let myTracksDistribution = getDistribution(myTracks, 7, 0.5);
	let globalTracksDistribution = getDistribution(globalTracks, 7, 0.5);

	let dataLabels = new Array(15);
	for (let i = 0; i < dataLabels.length; ++i) {
		dataLabels[i] = 0.5 * i;
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
						max: 6.5,
					},
				},
				{
					display: true,
					ticks: {
						max: 7,
					},
				},
			],
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
						suggestedMax: 20,
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
};

export default DurationCharts;
