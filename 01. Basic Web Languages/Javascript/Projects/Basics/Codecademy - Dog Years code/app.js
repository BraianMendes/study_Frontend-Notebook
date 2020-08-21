// My actual age at this moment
const myAge = 25;

// Variable value
let earlyYears = 2;

earlyYears *= 10.5;

// Subtracting 2 years from mine that are already used in earlyYears
let laterYears = myAge - 2;

// Calculating the third and later years of the dog as real aging years for they
laterYears *= 4;

// The last step adding thoses years
const myAgeInDogYears = earlyYears + laterYears;

// My name as a string and calling a built-in method for strings to lowercase all letters.
const myName = "Braian Mendes".toLowerCase();

// Console.log all that we worked so far
console.log("My name is "+myName+". I am "+myAge+" years old in human years wich is "+myAgeInDogYears+" yeras old in dog years.");