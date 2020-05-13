import React from 'react';
import { Bar } from 'react-chartjs-2';
import tracksByReleasedDate from '../utils/tracksByReleasedDate';

const ChartByReleasedDate = ({ tracks }) => {
	if (tracks == null) return null;

	let byYear = tracksByReleasedDate(tracks);

	let songMax = 0,
		yearMax = null;
	let songSec = 0,
		yearSec = null;
	for (let year in byYear) {
		if (byYear[year].length > songMax) {
			songMax = byYear[year].length;
			yearMax = year;
		}
	}
	for (let year in byYear) {
		if (byYear[year].length > songSec && year !== yearMax) {
			songSec = byYear[year].length;
			yearSec = year;
		}
	}
	const descriptionSec =
		yearSec != null ? (
			<span>
				, followed by
				<span className='colored'> {yearSec}</span>
			</span>
		) : null;

	const descriptionMax = (
		<div className='outer'>
			<h1>
				the year
				<span className='colored'> {yearMax} </span>
				produced your favorite music
				{descriptionSec}.
			</h1>
		</div>
	);

	let data = {
		labels: Object.keys(byYear),
		datasets: [
			{
				label: 'Your liked songs by released date',
				borderWidth: 1,
				backgroundColor: 'rgb(6, 155, 255, 0.2)',
				borderColor: 'rgb(6, 156, 255)',
				hoverBackgroundColor: 'rgb(6, 155, 255, 0.4)',
				hoverBorderColor: 'rgb(6, 156, 255)',
				barThickness: 'flex',
				maxBarThickness: 40,
				data: Object.values(byYear).map((item) => item.length),
			},
		],
	};

	let options = {
		scales: {
			maintainAspectRatio: false,
			yAxes: [
				{
					ticks: {
						min: 0,
						callback: (value) => {
							if (value % 1 === 0) return value;
						},
					},
				},
			],
		},
	};

	return (
		<div className='outer'>
			{descriptionMax}
			<div>
				<Bar data={data} options={options} />
			</div>
		</div>
	);
};

export default ChartByReleasedDate;
