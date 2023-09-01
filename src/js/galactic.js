

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


  findAgeOn(chosenPlanet) {
    switch (chosenPlanet) {
      case ("mercury"):
        return this.earthYears / this.yearConversions[chosenPlanet];
    } 
  }

  inVenusYears() {
    return this.earthYears / this.yearConversions["venus"];
  }
}