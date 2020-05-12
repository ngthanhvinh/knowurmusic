import React from 'react';
import { Bar } from 'react-chartjs-2';
import tracksByDiscoveredDate from '../utils/tracksByDiscoveredDate';

export default function ChartByDiscoveredDate({ tracks }) {
	if (tracks == null) return null;

	let by_year = tracksByDiscoveredDate(tracks);

	let data = {
		labels: Object.keys(by_year),
		datasets: [
			{
				label: 'Your liked songs by your discovered date',
				borderWidth: 1,
				backgroundColor: 'rgb(29, 185, 84, 0.2)',
				borderColor: 'rgb(29, 185, 84)',
				hoverBackgroundColor: 'rgb(29, 185, 84, 0.4)',
				hoverBorderColor: 'rgb(29, 185, 84)',
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
