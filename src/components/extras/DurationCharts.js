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
				barPercentage: 1.285,
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
				barPercentage: 1.285,
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
				barPercentage: 1,
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
					stacked: true,
					display: false,
					id: "bar-x-axis1",
					ticks: {
						max: 6.5,
					},
				},
				{
					id: "bar-x-axis2",
					scaleLabel: {
						display: true,
						labelString: 'duration (in minutes)'
					},
					ticks: {
						max: 7,
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
			<Bar data={bothData} options={options} />
		</div>
	);
};

export default DurationCharts;