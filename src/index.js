import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { GalacticAge } from './js/galactic.js';

// display age conversions relevant to Earth 
function displayEarthInfo(ageCalculator) {

  const ul = document.createElement('ul');
  const liFly = document.createElement('li');
  const liDog = document.createElement('li');
  const divEarth = document.querySelector('div#Earth');
  const divDiff = document.querySelector(`div#EarthDiff`);

  divEarth.innerText = null;
  divDiff.innerText = null;

  const userAge = Math.floor(ageCalculator.findAgeOn("Earth", ageCalculator.earthYears));
  const userMayFlies = ageCalculator.howManyMayflies();
  const userDogYears = ageCalculator.howManyDogYears();

  const flyString = `During your ${userAge} years on Earth, you have outlived more than ${userMayFlies} mayflies.`;
  const dogString = `In dog years, you are ${userDogYears} years old.`;
  liFly.append(flyString);
  liDog.append(dogString);

  ul.append(liFly, liDog);
  divEarth.append(ul);

}

// display all age results for each planet, reveal 'Find Difference' form
function displayPlanetAges(ageCalculator) {

  const planets = ageCalculator.findPlanets();
  planets.forEach((planet) => {
    let planetAge = ageCalculator.findAgeOn(planet, ageCalculator.earthYears);
    let pTag = document.createElement('p');
    let div = document.querySelector(`div#${planet}`);
    let div2 = document.querySelector(`div#${planet}Diff`);

    let string = `${planetAge} years old.`;

    div.innerText = null;
    div2.innerText = null;
    pTag.append(string);
    div.append(pTag);
    
  });

  displayEarthInfo(ageCalculator);
  document.querySelector("form.form2").removeAttribute('id', 'hidden');

}

// display the difference in years between current age and second age
function displayDifferences(yearsDifference, ageCalc, otherAge) {

  Object.keys(yearsDifference).forEach((planet) => {
    let otherPlanetAge = ageCalc.findAgeOn(planet, otherAge);
    let string = `Comparing your current age to a planetary age of ${otherPlanetAge}, ${yearsDifference[planet]}`;
    let pTag = document.createElement('p');
    let div = document.querySelector(`div#${planet}Diff`);
    div.innerText = null;
  
    pTag.append(string);
    div.append(pTag);
  });
}

// handle all UI logic
function handleEverything() {

  let ageCalculator = new GalacticAge();

  // event listener for birth date form submission
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const userBirthDate = document.querySelector("input#user-age").value;

    if (!userBirthDate) {
      return null;
    }

    ageCalculator.setAgeByDate(userBirthDate);

    displayPlanetAges(ageCalculator);

  });

  // event listener for age difference form submission
  document.querySelector(".form2").addEventListener("submit", (e) => {
    e.preventDefault();

    const otherAge = document.querySelector("input#other-age").value;

    if (!otherAge) {
      return null;
    }

    const yearsDifference = ageCalculator.yearsDifference(otherAge);

    displayDifferences(yearsDifference, ageCalculator, otherAge);

  });
}

handleEverything();