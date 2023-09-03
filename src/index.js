import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { GalacticAge } from './js/galactic.js';

// display all information relevant to Earth 
function displayEarthInfo(ageCalculator) {

  const ul = document.createElement('ul');
  const liFly = document.createElement('li');
  const liDog = document.createElement('li');
  const divEarth = document.querySelector('div#Earth');

  divEarth.innerText = null;

  liFly.append(
    `During your ${Math.floor(ageCalculator.findAgeOn("Earth"))} years on Earth, you have outlived more than ${ageCalculator.howManyMayflies()} mayflies.`
  );
  liDog.append(
    `In dog years, you are ${ageCalculator.howManyDogYears()} years old.`
  );

  ul.append(liFly, liDog);
  divEarth.append(ul);

}

// display all age results for each planet
function displayPlanetAges(ageCalculator) {

  const planets = ageCalculator.findPlanets();
  planets.forEach((planet) => {
    let planetAge = ageCalculator.findAgeOn(planet).toFixed(2);
    let pTag = document.createElement('p');
    let div = document.querySelector(`div#${planet}`);

    let string = `On ${planet}, you are: ${planetAge} years old.`;

    div.innerText = null;
    pTag.append(string);
    div.append(pTag);
    
  });

  displayEarthInfo(ageCalculator);

}

// event listener for form submission, which handles all UI logic
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const userBirthDate = document.querySelector("input#user-age").value;

  console.log(userBirthDate);

  const ageCalculator = new GalacticAge();
  ageCalculator.setAgeByDate(userBirthDate);

  displayPlanetAges(ageCalculator);

});