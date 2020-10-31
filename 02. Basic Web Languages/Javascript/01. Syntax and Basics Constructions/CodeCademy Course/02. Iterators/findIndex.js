// We sometimes want to find the location of an element in an array. 
// That’s where the .findIndex() method comes in!
// Calling .findIndex() on an array will return the index of the first element that evaluates to true in the callback function.

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex( animal => {
  return animal === 'elephant';
});
console.log(foundAnimal);

const startsWithS = animals.findIndex( animal => {
  return animal[0] === 's';
});
console.log(startsWithS);

