/**
 * Currently just supporting the FantasyPros copied dataset
 * @param {*} rawData 
 */
export const parseRankings = (rawData) => {
	let results = {};
	const lines = rawData.split('\n');
	let currentTier = '';
	const offset = lines[1].split('\t')[1] ? 0 : 1;

	lines.forEach((line) => {
		const breakdown = line.split('\t');

		if (breakdown.length === 2) {
			currentTier = breakdown[0];
			results[currentTier] = {};
		} else if (breakdown.length > 2) {
			results[currentTier][breakdown[0]] = {
				name: breakdown[1 + offset],
				pos: breakdown[2 + offset].replace(/[0-9]/g, '').toLowerCase(),
				posRank: Number(breakdown[2 + offset].match(/\d+/g)[0]),
				adp: Number(breakdown[8 + offset])
			};
		}
	});
	return results;
};