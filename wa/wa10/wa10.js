const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "It was the dead middle of winter, so :insertx: was confused why it was 94 fahrenheit outside. Nonetheless, they decided to go to :inserty: for the afternoon. Bob arrived shortly after :insertx:, and was scared half to death when they saw that :insertx: had :insertz:! Bob tried to run as fast as they could but they weighed 300 pounds, so it was a little difficult.";
let insertX = ["Rick Sanchez", "Spongebob Squarepants", "Britney Spears"];
let insertY = ["the beach", "Chicken on the Hill", "space"];
let insertZ = ["dissapeared into thin air", "turned into an eagle and flew away", "stopped, dropped, and rolled"];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;

    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(':insertx:', xItem);
    newStory = newStory.replaceAll(':inserty:', yItem);
    newStory = newStory.replaceAll(':insertz:', zItem);


    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replaceAll('Bob', name);
    }

    if(document.getElementById("uk").checked) {
        const weight = Math.round(300/14) + " stone";
        const temperature =  Math.round((94 - 32) * 5 / 9) + " centigrade";
        newStory = newStory.replaceAll('300 pounds', weight);
        newStory = newStory.replaceAll('94 fahrenheit', temperature);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}