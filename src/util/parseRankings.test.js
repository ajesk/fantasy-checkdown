import csv from '../demodata/short_rankings.csv.js';
import { testMethods, parseFpCsv } from './';

describe('fpCsv', () => {
  it('should have the demo data', () => {
    expect(csv).not.toBe(null);
  });

  describe('breakFpLines', () => {
    it('should break down all of the lines', () => {
      const results = testMethods.breakFpLines(csv);

      expect(results.length).toBe(21);
    });
    it('should have headers as the first line', () => {
      const results = testMethods.breakFpLines(csv);

      expect(results[0].startsWith('Rank')).toBe(true);
    });
  });

  describe('getFpHeaderCols', () => {
    it('should have 13 rows', () => {
      const results = testMethods.getFpHeaderCols(testMethods.breakFpLines(csv)[0]);

      expect(results.length).toBe(13);
    });

    it('should have stripped out all spaces', () => {
      const results = testMethods.getFpHeaderCols(testMethods.breakFpLines(csv)[0]);

      results.map((elem) => {
        expect(elem.indexOf(' ')).toBe(-1);
      });
    });

    it('should have stripped out all capital letters', () => {
      const results = testMethods.getFpHeaderCols(testMethods.breakFpLines(csv)[0]);

      results.map((elem) => {
        expect(elem.indexOf(' ')).toBe(-1);
      });
    });
  });
  describe('breakFpEntry', () => {
    const lines = testMethods.breakFpLines(csv);
    const headers = testMethods.getFpHeaderCols(lines[0]);
    const firstEntry = lines[1];

    const results = testMethods.breakFpEntry(firstEntry, headers);
    
    expect(results.rank).toBe('1');
    expect(results.tier).toBe('1');
    expect(results.wsid).toBe('');
    expect(results.overall).toBe('Saquon Barkley');
    expect(results.team).toBe('NYG');
    expect(results.pos).toBe('RB1');
    expect(results.bye).toBe('11');
    expect(results.best).toBe('1');
    expect(results.worst).toBe('5');
    expect(results.avg).toBe('1.7');
    expect(results.stdDev).toBe('0.8');
    expect(results.adp).toBe('1.0');
    expect(results.vsAdp).toBe('0.0');
  });
  describe('breakFpEntry', () => {
    it('should break down 20 players worth of data', () => {
      const results = parseFpCsv(csv);

      expect(results.length).toBe(20);
    });
  });
});
