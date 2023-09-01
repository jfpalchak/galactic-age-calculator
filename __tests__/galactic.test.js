import { GalacticAge } from './../src/js/galactic.js';

describe('GalacticAge', () => {

  let ageCalculator;
  beforeEach(() => {
    ageCalculator = new GalacticAge(25);
  });

  test('should create a GalacticAge object with given age in Earth years', () => {
    expect(ageCalculator.earthYears).toEqual(25);
  });

  test('should create a GalacticAge object with planet year conversion rates', () => {
    expect(ageCalculator.conversions).toEqual({
      mercuryYear: .24,
      venusYear: .62,
      marsYear: 1.88,
      jupiterYear: 11.86
    });
  });

  test('should return the given age converted to Mercury years', () => {
    let mercuryAge = ageCalculator.inMercuryYears();
    expect(mercuryAge).toEqual(104.17);
  })


});