

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
    const earthYears = this.earthYears - previousAge;
    const mercuryYears = this.findAgeOn("Mercury", earthYears).toFixed(2);
    const venusYears = this.findAgeOn("Venus", earthYears).toFixed(2);
    const marsYears = this.findAgeOn("Mars", earthYears).toFixed(2);
    const jupiterYears = this.findAgeOn("Jupiter", earthYears).toFixed(2);
    return {
      Earth: `${earthYears} Earth years have passed.`,
      Mercury: `${mercuryYears} Mercury years have passed.`,
      Venus: `${venusYears} Venus years have passed.`,
      Mars: `${marsYears} Mars years have passed.`,
      Jupiter: `${jupiterYears} Jupiter years have passed.`
    }
  }

  yearsUntil(futureAge) {
    const earthYears = futureAge - this.earthYears;
    return {
      Earth: `${earthYears} Earth years have yet to pass.`
    }
  }

}