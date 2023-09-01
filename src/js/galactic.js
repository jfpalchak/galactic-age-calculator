

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

  findAgeOn(planet, earthYears = this.earthYears) {
    const planetYear = this.yearConversions[planet];
    return earthYears / planetYear;
  }

  // come back and refactor later
  yearsSince(previousAge) {

    const yearList = {};
    const earthYears = this.earthYears - previousAge;
    yearList["Earth"] = `${earthYears} Earth years have passed.`;

    const planets = Object.keys(this.yearConversions);
    planets.forEach((planet) => {
      let planetYears = this.findAgeOn(planet, earthYears).toFixed(2);
      yearList[planet] = `${planetYears} ${planet} years have passed.`;
    });
  
    return yearList;
  }

  yearsUntil(futureAge) {
    const earthYears = futureAge - this.earthYears;
    return {
      Earth: `${earthYears} Earth years have yet to pass.`
    }
  }

}