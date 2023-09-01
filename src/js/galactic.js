

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

  findAgeOn(planet) {
    const planetYear = this.yearConversions[planet];
    return this.earthYears / planetYear;
  }

  yearsSince(previousAge) {
    const earthYears = this.earthYears - previousAge;
    return {Earth: `${earthYears} Earth years have passed.`}
  }

}