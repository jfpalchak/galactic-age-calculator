import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { GalacticAge } from './js/galactic.js';


function displayPlanetAges(ageCalculator) {

  const planets = ageCalculator.findPlanets();
  planets.forEach((planet) => {
    let planetAge = ageCalculator.findAgeOn(planet).toFixed(2);
    let pTag = document.createElement('p');
    let div = document.querySelector(`div#${planet}`);

    let string = `On ${planet}, you are: ${planetAge} years old.`

    div.innerText = null;
    pTag.append(string);
    div.append(pTag);
  });

  const ul = document.createElement('ul');
  const liFly = document.createElement('li');
  const liDog = document.createElement('li');
  const divEarth = document.querySelector('div#Earth');
  divEarth.innerText = null;
  liFly.append(
    `During your ${ageCalculator.findAgeOn("Earth")} years on Earth, you have outlived more than ${ageCalculator.howManyMayflies()} mayflies.`
  );
  liDog.append(
    `In dog years, you are ${ageCalculator.howManyDogYears()} years old.`
  );

  divEarth.append(liFly, liDog);

  

}


document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const userAge = document.querySelector("input#user-age").value;

  const ageCalculator = new GalacticAge(userAge);

  displayPlanetAges(ageCalculator);

});