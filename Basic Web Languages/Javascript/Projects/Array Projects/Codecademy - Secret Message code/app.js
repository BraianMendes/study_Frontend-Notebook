let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage.length);

let removedString = secretMessage.pop();

// Checking
console.log(secretMessage.length);

// Adding words
secretMessage.push('to', 'Program');

// Changing words
secretMessage[7] = 'right';

let shiftedString = secretMessage.shift();
secretMessage.unshift('Programming');

console.log(secretMessage);
const stringOne = secretMessage.splice(5, 6, 'know,');
console.log(secretMessage.join(' '));