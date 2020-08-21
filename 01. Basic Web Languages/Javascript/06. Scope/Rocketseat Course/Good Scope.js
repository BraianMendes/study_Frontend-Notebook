// Practice Good Scoping

// Given the challenges with global variables and scope pollution, we should follow best practices for scoping our variables as tightly as possible using block scope.

const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';

  if (region === 'The Arctic') {
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  };
  
  console.log(lightWaves);
};

logVisibleLightWaves();

// Block scope is a powerful tool in JavaScript, since it allows us to define variables with precision, and not pollute the global namespace. If a variable does not need to exist outside a block— it shouldn’t!