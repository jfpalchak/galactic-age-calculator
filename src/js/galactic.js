
export class GalacticAge {

  constructor(userAge) {
    this.earthYears = userAge;
    this.yearConversions = {
      Mercury: .24,
      Venus: .62,
      Mars: 1.88,
      Jupiter: 11.86
    };
  }

  findPlanets() {
    return Object.keys(this.yearConversions);
  }

  // return conversion of given Earth years to specified planet years
  findAgeOn(planet, earthYears = this.earthYears) {
    const planetYear = this.yearConversions[planet];
    return earthYears / planetYear;
  }

  // return an object containing the difference in years for a specified age, for each planet:
  // if the new age is younger than the initial age, return how many years have passed on each planet,
  // if the new age is older than the initial age, return how many years have yet to pass on each planet
  yearsDifference(otherAge) {
    const yearList = {};
    let earthYears = this.earthYears;
    let string;

    if (otherAge < earthYears) {
      earthYears = earthYears - otherAge;
      string = "years have passed.";
    } else {
      earthYears = otherAge - earthYears;
      string = "years have yet to pass.";
    }
   
    yearList["Earth"] = `${earthYears} Earth ${string}`;

    const planets = Object.keys(this.yearConversions);
    planets.forEach((planet) => {
      let planetYears = this.findAgeOn(planet, earthYears).toFixed(2);
      yearList[planet] = `${planetYears} ${planet} ${string}`;
    });
    
    return yearList;
  }

  // returns the number of mayfly lifespans the given earth age has lived
  howManyMayflies() {
    const ageInMinutes = (this.earthYears * 525600);
    const numOfMayflyLives = (ageInMinutes / 5);
    return numOfMayflyLives;
  }

  // returns the dog years conversion of the given earth age
  howManyDogYears(age = this.earthYears) {
    let dogYears = 0;
 
    if (age >= 29) {
      const diff = age - 24;
      dogYears = (diff/5) + 2;
    } else if (age >= 24) {
      dogYears = 2;
    } else if (age >= 15) {
      dogYears = 1;
    }

    return dogYears;
  }

}