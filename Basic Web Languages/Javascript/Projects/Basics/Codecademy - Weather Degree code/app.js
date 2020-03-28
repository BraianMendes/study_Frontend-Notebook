// Const value of Kelvin temp
const kelvin = 293;

// Const value of Celsius temp
const celsius = kelvin - 293;

// Variable value of Fahrenheit temp
let fahrenheit = celsius * (9/5) + 32;

// This line we round down with Math.floor the value of Fahrenheit temp
fahrenheit = Math.floor(fahrenheit);

console.log("The temperature is "+fahrenheit+" degrees Fahrenheit.");

// Now adding Newton by Celsius
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log("The value of Newton is "+newton+" degrees Newton.");