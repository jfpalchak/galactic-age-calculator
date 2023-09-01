

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

  // yearsSince(previousAge) {

  //   const yearList = {};
  //   const earthYears = this.earthYears - previousAge;
  //   yearList["Earth"] = `${earthYears} Earth years have passed.`;

  //   const planets = Object.keys(this.yearConversions);
  //   planets.forEach((planet) => {
  //     let planetYears = this.findAgeOn(planet, earthYears).toFixed(2);
  //     yearList[planet] = `${planetYears} ${planet} years have passed.`;
  //   });
  
  //   return yearList;
  // }

  // yearsUntil(futureAge) {
    
  //   const yearList = {};
  //   const earthYears = futureAge - this.earthYears;
  //   yearList["Earth"] = `${earthYears} Earth years have yet to pass.`;

  //   const planets = Object.keys(this.yearConversions);
  //   planets.forEach((planet) => {
  //     let planetYears = this.findAgeOn(planet, earthYears).toFixed(2);
  //     yearList[planet] = `${planetYears} ${planet} years have yet to pass.`;
  //   });
    
  //   return yearList;
  // }

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

}