import React from 'react';
import { Bar } from 'react-chartjs-2';
import tracksByDiscoveredDate from '../utils/tracksByDiscoveredDate';

const ChartByDiscoveredDate = ({ tracks }) => {
	if (tracks == null) return null;

	let byYear = tracksByDiscoveredDate(tracks);

	let data = {
		labels: Object.keys(byYear),
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
				data: Object.values(byYear).map((item) => item.length),
			},
		],
	};

	return (
		<div>
			<div style={{ margin: 'auto', maxWidth: '700px' }}>
				<Bar data={data} />
			</div>
			<div className="separator"></div>
		</div>
	);
};

export default ChartByDiscoveredDate;
