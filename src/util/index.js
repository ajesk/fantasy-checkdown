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
  return breakFpCsvEntry(line.split(','), headers);
}

function breakFpCsvEntry(lineArray, headers) {
  const data = {};

  lineArray.map((entry, i) => data[headers[i]] = entry.split('"').join(''));

  return data
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

const importCsvData = (data) => {
  const headers = data[0].map(x => _.camelCase(x));

  return data.map((entry, i) => {
    if (i === 0) return;
    if (entry[0] === "" || typeof entry[0] === 'undefined') return;

    return breakFpCsvEntry(entry, headers);
  }).filter((res) => typeof res !== 'undefined');
};

const testMethods = { breakFpLines, getFpHeaderCols, breakFpEntry };
export { importCsvData, parseFpCsv, testMethods };