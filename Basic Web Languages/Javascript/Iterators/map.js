// When .map() is called on an array, it takes an argument of a callback function and returns a new array! 
// .map() works in a similar manner to .forEach()— the major difference is that .map() returns a new array.

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
const secretMessage = animals.map(animal => {
  return animal[0];
});

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(bigNumber => {
  return bigNumber / 100;
});

console.log(smallNumbers);