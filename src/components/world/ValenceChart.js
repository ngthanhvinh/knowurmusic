import React from 'react';
import getDistribution from '../../utils/getDistribution';
import { Bar } from 'react-chartjs-2';

const ValenceChart = ({ myTracks, globalTracks }) => {
	let myTracksDistribution = getDistribution(myTracks, 1, 0.1);
	let globalTracksDistribution = getDistribution(globalTracks, 1, 0.1);

	let dataLabels = new Array(11);
	for (let i = 0; i < dataLabels.length; ++i) {
		dataLabels[i] = (0.1 * i).toFixed(1);
	}

	let bothData = {
		labels: dataLabels,
		datasets: [
			{
				label: 'Your top tracks',
				borderWidth: 1,
				backgroundColor: 'rgb(6, 155, 255, 0.2)',
				borderColor: 'rgb(6, 155, 255)',
				hoverBackgroundColor: 'rgb(6, 155, 255, 0.4)',
				hoverBorderColor: 'rgb(6, 155, 255)',
				data: myTracksDistribution,
				barPercentage: 1.275,
			},
			{
				label: 'Global top tracks',
				borderWidth: 1,
				backgroundColor: 'rgb(29, 185, 84, 0.5)',
				borderColor: 'rgb(29, 185, 84)',
				hoverBackgroundColor: 'rgb(29, 185, 84, 0.7)',
				hoverBorderColor: 'rgb(29, 185, 84)',
				data: globalTracksDistribution,
				barPercentage: 1.275,
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
					id: 'bar-x-axis1',
					stacked: true,
					display: false,
					ticks: {
						max: (0.9).toFixed(1),
					},
				},
				{
					id: 'bar-x-axis2',
					scaleLabel: {
						display: true,
						labelString: 'valence',
					},
					ticks: {
						max: 1.0,
					},
				},
			],
			yAxes: [
				{
					scaleLabel: {
						display: true,
						labelString: 'number of tracks',
					},
					ticks: {
						beginAtZero: true,
						suggestedMax: 20,
					},
				},
			],
		},
	};

	return <Bar data={bothData} options={options} />;
};

export default ValenceChart;
