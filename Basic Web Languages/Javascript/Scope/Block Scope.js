// Block Scope

// When a variable is defined inside a block, it is only accessible to the code within the curly braces {}.
// We say that variable has block scope because it is only accessible to the lines of code within that block.

// Variables that are declared with block scope are known as local variables because they are only available to the code that is part of the same block.

function logVisibleLightWaves () {
  const lightWaves = 'Moonlight';
  console.log(lightWaves);
}

logVisibleLightWaves();
console.log(lightWaves);