import React from 'react';
import { Bar } from 'react-chartjs-2';
import tracksByReleasedDate from '../utils/tracksByReleasedDate';

export default function ChartByReleasedDate({ tracks }) {
	if (tracks == null) return null;

	let by_year = tracksByReleasedDate(tracks);

	let data = {
		labels: Object.keys(by_year),
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
				data: Object.values(by_year).map((item) => item.length),
			},
		],
	};

	return (
		<div style={{ margin: 'auto', maxWidth: '700px' }}>
			<Bar data={data} />
		</div>
	);
}
