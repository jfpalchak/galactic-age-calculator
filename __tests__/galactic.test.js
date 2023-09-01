import { GalacticAge } from './../src/js/galactic.js';

describe('GalacticAge', () => {

  test('should create a GalacticAge object with given age in Earth years', () => {
    let ageCalculator = new GalacticAge(25);
    expect(ageCalculator.earthYears).toEqual(25);
  });
});