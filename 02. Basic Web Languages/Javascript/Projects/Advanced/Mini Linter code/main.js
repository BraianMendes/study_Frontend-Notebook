let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

storyWords = story.split(' ');

const checkWords = (word) => {
  for(i = 0; i <= unnecessaryWords.length; i++){
    if(word != unnecessaryWords[i]){
      return word;
    }
  }
}

let betterWords = storyWords.filter(checkWords);

let reallyWord = 0;
let veryWord = 0;
let basicallyWord = 0;

for(i = 0; i <= betterWords.length; i++){
  if(betterWords[i] == 'really'){
    reallyWord ++;
  } else if(betterWords[i] == 'very'){
    veryWord ++;
  } else if(betterWords[i] == 'basically'){
    basicallyWord ++;
  }  
}
console.log('The text after linter have '+betterWords.length+' words.')
console.log('You used \'really\' '+reallyWord+' times, \'very\' '+veryWord+' times, \'basically\' '+basicallyWord+' times.');


let sentences = 0;
betterWords.forEach(word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!'){
    sentences ++;
  }
});

console.log('In the text there are '+sentences+' sentences.');
console.log('Finally the text lintered is: \n'+betterWords.join(' '));