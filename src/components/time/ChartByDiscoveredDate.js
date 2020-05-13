import React from 'react';
import { Bar } from 'react-chartjs-2';
import tracksByDiscoveredDate from '../../utils/tracksByDiscoveredDate';

const ChartByDiscoveredDate = ({ tracks }) => {
	if (tracks == null) return null;

	let byYear = tracksByDiscoveredDate(tracks);

	let songMax = 0,
		yearMax = null;
	for (let year in byYear) {
		if (byYear[year].length > songMax) {
			songMax = byYear[year].length;
			yearMax = year;
		}
	}

	const descriptionMax = (
		<div>
			<h1>
				in
				<span className='colored'> {yearMax}</span>, you liked
				<span className='colored'> {byYear[yearMax].length} </span> song(s), the
				largest number yet.
			</h1>
		</div>
	);

	let data = {
		labels: Object.keys(byYear),
		datasets: [
			{
				label: 'Your liked songs by discovered date',
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

	let options = {
		scales: {
			maintainAspectRatio: false,
			yAxes: [
				{
					ticks: {
						min: 0,
						callback: function (value) {
							if (value % 1 === 0) {
								return value;
							}
						},
					},
				},
			],
		},
	};

	return (
		<div>
			<div className='outer'>
				{descriptionMax}
				<div>
					<Bar data={data} options={options} />
				</div>
			</div>
			<div className='separator'></div>
		</div>
	);
};

export default ChartByDiscoveredDate;
