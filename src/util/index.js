import _ from 'lodash';

/**
 * Currently just supporting the FantasyPros csv dataset
 * @param {*} rawData 
 */
function breakFpLines(raw) {
  return raw.split('"').join('').split('\n');
}

function getFpHeaderCols(line) {
  return line.split(',').map((entry) => _.camelCase(entry));
}

function breakFpEntry(line, headers) {
  const data = {};

  line.split(',').map((entry, i) => data[headers[i]] = entry.split('"').join(''));

  return data;
}

const parseFpCsv = (raw) => {
  let headers = {};

  return breakFpLines(raw).map((line, i) => {
    if (i === 0) {
      headers = getFpHeaderCols(line);
      return;
    }

    return breakFpEntry(line, headers);
  }).filter((res) => typeof res !== 'undefined');
}

const parseRankings = (rawData) => {
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

const testMethods = { breakFpLines, getFpHeaderCols, breakFpEntry };
export { parseRankings, parseFpCsv, testMethods };