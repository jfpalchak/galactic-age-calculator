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
    expect(ageCalculator.yearConversions).toEqual({
      mercury: .24,
      venus: .62,
      mars: 1.88,
      jupiter: 11.86
    });
  });

  test('should return the given Earth age converted to Mercury years', () => {
    let mercuryAge = ageCalculator.convertAgeTo("mercury");
    expect(mercuryAge).toBeCloseTo(104.17);
  })

  test('should return the given Earth age converted to Venus years', () => {
    let venusAge = ageCalculator.inVenusYears();
    expect(venusAge).toBeCloseTo(40.32);
  });


});