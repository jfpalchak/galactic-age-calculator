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

  test('should return an array of the planets contained within the GalacticAge object', () => {
    let planets = ageCalculator.findPlanets();
    expect(planets).toEqual(['Mercury','Venus','Mars','Jupiter']);
  });

  test('should accurately calculate age based on user birth date and current date', () => {
    ageCalculator.setAgeByDate("1993-1-29");
    expect(ageCalculator.earthYears).toBeCloseTo(30.6);
  })

});

describe('findAgeOn', () => {
  
  let ageCalculator;
  beforeEach(() => {
    ageCalculator = new GalacticAge(25);
  });

  test('should return the given Earth age if Earth is entered as an argument', () => {
    let age = ageCalculator.findAgeOn("Earth");
    expect(age).toBeCloseTo(25);
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

  test('should return an object containing the number of years passed on each planet SINCE a specified age', () => {
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

  test('should return the number of mayfly lifespans the given earth age has lived', () => {
    let ageCalculator = new GalacticAge(25);
    let lifespans = ageCalculator.howManyMayflies();
    expect(lifespans).toEqual(2628000);
  });

});

describe('howManyDogYears', () => {

  test('should return 0 in dog years if the Earth age is below 15', () => {
    let ageCalculator = new GalacticAge(14);
    let dogYears = ageCalculator.howManyDogYears();
    expect(dogYears).toEqual(0);
  });

  test('should return 1 in dog years if the Earth age is 15 or older', () => {
    let ageCalculator = new GalacticAge(15);
    let dogYears = ageCalculator.howManyDogYears();
    expect(dogYears).toEqual(1);
  });

  test('should return 2 in dog years if the Earth age is 24 or older', () => {
    let ageCalculator = new GalacticAge(24);
    let dogYears = ageCalculator.howManyDogYears();
    expect(dogYears).toEqual(2);
  });

  test('should calculate an additional year for every five years beyond the Earth age of 24', () => {
    let ageCalculator = new GalacticAge(34);
    let dogYears = ageCalculator.howManyDogYears();
    expect(dogYears).toEqual(4);
  });

  test('should calculate dog years for any Earth age given as an optional argument', () => {
    let ageCalculator = new GalacticAge(34);
    let dogYears = ageCalculator.howManyDogYears(40);
    expect(dogYears).toEqual(5.2);
  });



});