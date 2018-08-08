export const parseRankings = (rawData) => {
	let results = {};
	const lines = rawData.split('\n');
	let currentTier = '';

	lines.forEach((line) => {
		const breakdown = line.split('\t');
		console.log(breakdown);

		if (breakdown.length === 2) {
			currentTier = breakdown[0];
			results[currentTier] = {};
		} else {
			results[currentTier][breakdown[0]] = {
				name: breakdown[2],
				pos: breakdown[3].replace(/[0-9]/g, '').toLowerCase(),
				posRank: Number(breakdown[3].match(/\d+/g)[0]),
				adp: Number(breakdown[9])
			}
		}
	})
	console.log(results);
	return results;
};