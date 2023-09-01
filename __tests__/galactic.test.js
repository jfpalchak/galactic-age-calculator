import { GalacticAge } from './../src/js/galactic.js';

describe('GalacticAge', () => {

  test('should create a GalacticAge object with given age in Earth years', () => {
    let ageCalculator = new GalacticAge(25);
    expect(ageCalculator.earthYears).toEqual(25);
  });

  test('should create a GalacticAge object with planet year conversion rates', () => {
    let ageCalculator = new GalacticAge();
    expect(ageCalculator.conversions).toEqual({
      mercuryYear: .24,
      venusYear: .62,
      marsYear: 1.88,
      jupiterYear: 11.86
    });
  });


});