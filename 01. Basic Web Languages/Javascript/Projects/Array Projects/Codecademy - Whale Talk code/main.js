let input = 'procurando nemo';

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

// Searching in input string for each vowel
for(i = 0; i < input.length; i++){
  for(j = 0; j < vowels.length; j++){
    if(input[i] == vowels[j]){
      resultArray.push(vowels[j]);
      
      if(input[i] == 'e'){
        resultArray.push('e');
      } else if(input[i] == 'u'){
        resultArray.push('u');
      }
    }
  }
}

console.log(resultArray.join('').toUpperCase());