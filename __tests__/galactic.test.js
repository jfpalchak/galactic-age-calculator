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

});

describe('findAgeOn', () => {
  
  let ageCalculator;
  beforeEach(() => {
    ageCalculator = new GalacticAge(25);
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

  test('should override initial this.earthYears property if a new Earth age is entered as second argument', () => {
    let newJupiterAge = ageCalculator.findAgeOn("Jupiter", 5);
    expect(newJupiterAge).toBeCloseTo(0.42);
  })

});

describe('yearsDifference', () => {
  
  let ageCalculator;
  let yearsPassed;
  let yearsToGo;
  beforeEach(() => {
    ageCalculator = new GalacticAge(25);
    yearsToGo = ageCalculator.yearsDifference(35);
    yearsPassed = ageCalculator.yearsDifference(20);
  });

  test('should return an object containing the number of years passed on each planet since a specified age', () => {
    expect(yearsPassed).toEqual({
      Earth: "5 Earth years have passed.",
      Mercury: "20.83 Mercury years have passed.",
      Venus: "8.06 Venus years have passed.",
      Mars: "2.66 Mars years have passed.",
      Jupiter: "0.42 Jupiter years have passed."
    });
  });

  test('should return an object containing the number of years YET to pass on each planet until a specified age', () => {
    expect(yearsToGo).toEqual({
      Earth: "10 Earth years have yet to pass.",
      Mercury: "41.67 Mercury years have yet to pass.",
      Venus: "16.13 Venus years have yet to pass.",
      Mars: "5.32 Mars years have yet to pass.",
      Jupiter: "0.84 Jupiter years have yet to pass."
    });
  });

});

describe('howManyMayflies', () => {

  let ageCalculator;
  beforeEach(() => {
    ageCalculator = new GalacticAge(25);
  });

  test('should return the number of mayfly lifespans the initial earth age has lived, if no new number is given', () => {
    let lifespans = ageCalculator.howManyMayflies();
    expect(lifespans).toEqual(2628000);
  });

});