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
      Mercury: .24,
      Venus: .62,
      Mars: 1.88,
      Jupiter: 11.86
    });
  });

  test('should return the given Earth age converted to Mercury years', () => {
    let mercuryAge = ageCalculator.findAgeOn("Mercury");
    expect(mercuryAge).toBeCloseTo(104.17);
  });

  test('should return the given Earth age converted to Venus years', () => {
    let venusAge = ageCalculator.findAgeOn("Venus");
    expect(venusAge).toBeCloseTo(40.32);
  });

  test('should return the given Earth age converted to Mars years', () => {
    let marsAge = ageCalculator.findAgeOn("Mars");
    expect(marsAge).toBeCloseTo(13.30);
  });


  test('should return the given Earth age converted to Jupiter years', () => {
    let jupiterAge = ageCalculator.findAgeOn("Jupiter");
    expect(jupiterAge).toBeCloseTo(2.11);
  });

});

describe('yearsSince', () => {

  let ageCalculator;
  let yearsPassed;
  beforeEach(() => {
    ageCalculator = new GalacticAge(25);
    yearsPassed = ageCalculator.yearsSince(20);
  });

  test('should return an object containing the number of Earth years passed since a specified age', () => {
    expect(yearsPassed["Earth"]).toEqual("5 Earth years have passed.");
  });

  test('should return an object containing the number of Mercury years passed since a specified age', () => {
    expect(yearsPassed["Mercury"]).toEqual("20.83 Mercury years have passed.");
  });

  test('should return an object containing the number of Venus years passed since a specified age', () => {
    expect(yearsPassed["Venus"]).toEqual("8.06 Venus years have passed.");
  });

  test('should return an object containing the number of Mars years passed since a specified age', () => {
    expect(yearsPassed["Mars"]).toEqual("2.66 Mars years have passed.");
  });

  test('should return an object containing the number of Jupiter years passed since a specified age', () => {
    expect(yearsPassed["Jupiter"]).toEqual("0.42 Jupiter years have passed.");
  });

});