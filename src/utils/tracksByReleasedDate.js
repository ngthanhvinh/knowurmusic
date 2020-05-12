const tracksByReleasedDate = (tracks) => {
	let by_year = {};
	for (const key in tracks) {
		const year = tracks[key].track.album.release_date.slice(0, 4);
		if (!(year in by_year)) by_year[year] = [];
		by_year[year].push(tracks[key]);
	}
	return by_year;
};

export default tracksByReleasedDate;
