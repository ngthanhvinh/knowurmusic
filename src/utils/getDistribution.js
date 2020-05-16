const getDistribution = (values, maxValue, gap) => {
	let nelem = Math.ceil(maxValue / gap);
	let dataValues = new Array(nelem).fill(0);
	values.forEach((value) => {
		dataValues[Math.min(nelem - 1, parseInt(value / gap))]++;
	});
	return dataValues;
};

export default getDistribution;
