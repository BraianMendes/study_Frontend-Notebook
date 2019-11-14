// Like .map(), .filter() returns a new array. 
// However, .filter() returns an array of elements after filtering out certain elements from the original array. 
// he callback function for the .filter() method should return true or false depending on the element that is passed to it.
// The elements that cause the callback function to return true are added to the new array. 

const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallNumbers = randomNumbers.filter( smallNumber => {
  return smallNumber < 250;
});

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const longFavoriteWords = favoriteWords.filter( favoriteWord => {
  return favoriteWord.length > 7;
});

console.log(smallNumbers);
console.log(longFavoriteWords)