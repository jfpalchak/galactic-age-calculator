

export class GalacticAge {

  constructor(userAge) {
    this.earthYears = userAge;
    this.yearConversions = {
      mercury: .24,
      venus: .62,
      mars: 1.88,
      jupiter: 11.86
    };
  }

  findAgeOn(planet) {
    const planetConversion = this.yearConversions[planet];
    return this.earthYears / planetConversion;
  }

  yearsSince(previousAge) {
    return this.earthYears - previousAge;
  }

}