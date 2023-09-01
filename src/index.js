import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { GalacticAge } from './js/galactic.js';



document.querySelector("form").addEventListener("submit", () => {
  const userAge = document.querySelector("input#user-age").value;

  const galacticAge = new GalacticAge(userAge);
  
});