// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

// 2. RAW TEXT STRINGS

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'

let insertX = ['Willy the Goblin',
 'Big Daddy',
 'Father Christmas']

let insertY = ['the soup kitchen',
 'Disneyland',
 'the White House']

let insertZ = ['spontaneously combusted',
 'melted into a puddle on the sidewalk',
 'turned into a slug and crawled away']

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

// Completing result function, Step 1
let newStory = storyText;

// Step 2
let xItem = randomValueFromArray(insertX);
let yItem = randomValueFromArray(insertY);
let zItem = randomValueFromArray(insertZ);

// Step 3
newStory = newStory.replace(':insertx:', xItem)
newStory = newStory.replace(':insertx:', xItem) //for second insertX in storyText
newStory = newStory.replace(':inserty:', yItem)
newStory = newStory.replace(':insertz:', zItem)

// Step 4
  if(customName.value !== '') {
    var name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

// Step 5
  if(document.getElementById("uk").checked) {
    var weight = Math.round(300 / 14);
    var temperature =  Math.round((94 - 32) * 5/9);
    newStory = newStory.replace('300 pounds', weight + ' stones' )
    newStory = newStory.replace('94 fahrenheit', temperature + ' centigrade')
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}