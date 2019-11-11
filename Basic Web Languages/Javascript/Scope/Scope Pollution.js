// Scope Pollution

// Scope pollution is when we have too many global variables that exist in the global namespace, or when we reuse variables across different scopes.
// Scope pollution makes it difficult to keep track of our different variables and sets us up for potential accidents.

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
  
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);