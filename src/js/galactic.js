

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
    const mercuryYears = (earthYears / this.yearConversions["Mercury"]).toFixed(2);
    const venusYears = (earthYears / this.yearConversions["Venus"]).toFixed(2);
    const marsYears = (earthYears / this.yearConversions["Mars"]).toFixed(2);
    const jupiterYears = (earthYears / this.yearConversions["Jupiter"]).toFixed(2);
    return {
      Earth: `${earthYears} Earth years have passed.`,
      Mercury: `${mercuryYears} Mercury years have passed.`,
      Venus: `${venusYears} Venus years have passed.`,
      Mars: `${marsYears} Mars years have passed.`,
      Jupiter: `${jupiterYears} Jupiter years have passed.`
    }
  }

 

}