# _Galactic Age Calculator_

#### By _**Joey Palchak**_

#### _An age calculator web app, showcasing an understanding of unit testing, webpack, and managing dependencies with npm._

## Technologies Used

* HTML
* CSS
* JavaScript
* Node v16.13.1
* npm v8.1.2
* webpack v4.46.0

## Description

The Super Galactic Age Calculator is a JavaScript class designed to help users determine their age on different planets in our solar system and perform various age-related calculations. This project provides a versatile and user-friendly tool for space enthusiasts and those curious about how their age translates across the cosmos.

A user will find the `GalacticAge` class contains the following features:
1. **Age Conversion:** Calculate your age on Mercury, Venus, Mars, and Jupiter based on your Earth age.
2. **Planetary Information:** Retrieve a list of planets available for age conversion.
3. **Passage of Time:** Compare a past or future birthday to your current Earth age to determine how much time _will_ pass on each planet, or how much time has _yet_ to pass on each planet.
4. **Mayfly Lifespan:** Discover how many mayfly lifespans your Earth age has lived through.
5. **Dog Years:** Convert your Earth age into dog years, considering various age ranges for dogs.
6. **Age Calculation by Date:** Set your age providing your birth date, allowing for much more precise age calculations based on the current date.

Users can experience a number of these features by accessing the webpage and submitting their date of birth. Upon submission, each planetary card on the webpage will populate with the appropriate age conversion. Additional age-related conversions will populate the Earth card.

To use the `GalacticAge` class, curious users can take the following steps to initialize each method:

1. **Initialization:** Create an instance of the `GalacticAge` class by passing your Earth age as an argument.
```javascript
  const myAgeCalculator = new GalacticAge(30); // Initialize with your Earth age (e.g., 30 years)
```
2. **Age Conversion:** Calculate your age on other planets by passing a specific planet through as an argument.
```javascript
  const ageOnMars = myAgeCalculator.findAgeOn('Mars');
```
3. **Planetary Information:** Retrieve an array of planets available for age conversion.
```javascript
  const planets = myAgeCalculator.findPlanets();
```
4. **Passage of Time:** Retrieve an object listing the time difference, on each planet, between your initial Earth age and a second age, passed through as an argument.
```javascript
const ageDifferences = myAgeCalculator.yearsDifference(25);
```
5. **Mayfly Lifespan:** Retrieve the total number of mayfly lifespans your Earth age has experienced.
```javascript
const mayflyLifespans = myAgeCalculator.howManyMayflies();
```
6. **Dog Years:** Retrieve your age in dog years.
```javascript
const dogAge = myAgeCalculator.howManyDogYears();
```
7. **Age Calculation by Date:** Set your age by providing your birth date, incorporating the Date object.
```javascript
myAgeCalculator.setAgeByDate('1993-01-29'); // Format: YYYY-MM-DD
```

## Setup/Installation Requirements

1. Copy the **[URL](https://github.com/jfpalchak/galactic-age-calculator.git)** provided for this repository.
2. Open Terminal.
3. Change your working directory to where you'd like to create the cloned directory.
4. In your terminal, type `git clone` and use the copied URL from Step 1. Or, copy the following git command:
```bash
$ git clone https://github.com/jfpalchak/galactic-age-calculator.git
```
5. Navigate to the root of the newly cloned directory.
6. In your terminal, assuming Node and npm are installed, type the following command to install the project's dependencies found in `package.json`:
```bash
$ npm install
```
7. With the dependencies installed, type the following line in your terminal to build the application using webpack:
```bash
$ npm run build
```
  * Additionally, if you wish to:
    1. Lint the JavaScript source code, you can do so by running the following command in the application's root directory: 
    > `$ npm run lint`
    2. Run all tests covering the backend JavaScript with Jest, you can do so by running the following command in the application's root directory: 
    > `$ npm run test`
    
8. And finally, to run a live server of the project and use the application, type the following line in your terminal:
```bash
$ npm run start
```

### _Alternatively:_

1. Go to the website directly via **[GitHub Pages](https://jfpalchak.github.io/galactic-age-calculator/)**.

## Known Bugs

* Submitting an empty date, after a valid date has been submitted, does not clear the information currently displayed on the planetary cards.

## License

MIT License

Copyright (c) 9/01/2023 Joey Palchak

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:  

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.  

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.