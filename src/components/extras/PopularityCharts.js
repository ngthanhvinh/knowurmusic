import React from 'react';
import { Bar } from 'react-chartjs-2';
import getDistribution from '../../utils/getDistribution';

const PopularityCharts = ({ myTracks, globalTracks }) => {
	let myTracksDistribution = getDistribution(myTracks, 100, 5);
	let globalTracksDistribution = getDistribution(globalTracks, 100, 5);

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

	let bothData = {
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
				barPercentage: 1.285,
			},
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
					id: "bar-x-axis1",
					stacked: true,
					display: false,
					ticks: {
						max: 95,
					},

				},
				{
					id: "bar-x-axis2",
					scaleLabel: {
						display: true,
						labelString: 'popularity'
					},
					ticks: {
						max: 100,
					},
				},
			],
			yAxes: [
				{
					scaleLabel: {
						display: true,
						labelString: 'number of tracks'
					},
					ticks: {
						beginAtZero: true,
						suggestedMax: 25,
					},
				},
			],
		},
	};

	return (
		<div>
			<Bar data={myData} options={options} />
			<Bar data={globalData} options={options} />
			<Bar data={bothData} options={options} />
		</div>
	);
};

export default PopularityCharts;
