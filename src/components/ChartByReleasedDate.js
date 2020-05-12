import React from 'react';
import { Bar } from 'react-chartjs-2';
import tracksByReleasedDate from '../utils/tracksByReleasedDate';

const ChartByReleasedDate = ({ tracks }) => {
	if (tracks == null) return null;

	let byYear = tracksByReleasedDate(tracks);

	let songMax = 0, yearMax = null;
	for (let year in byYear) {
		if (byYear[year].length > songMax) {
			songMax = byYear[year].length;
			yearMax = year;
		}
	}

	const regardMax = (
		<div className="outer">
			<h1>
				<span className="colored">{yearMax} </span>
				is your most favorite year in music.
			</h1>
		</div>
	)

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

	return (
		<div className="outer">
			{regardMax}
			<div>
				<Bar data={data} />
			</div>
		</div>
	);
};

export default ChartByReleasedDate;
