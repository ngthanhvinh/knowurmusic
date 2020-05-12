const tracksByDiscoveredDate = (tracks) => {
	let byYear = {};
	for (const key in tracks) {
		const year = tracks[key].added_at.slice(0, 4);
		if (!(year in byYear)) byYear[year] = [];
		byYear[year].push(tracks[key]);
	}
	return byYear;
};

export default tracksByDiscoveredDate;
