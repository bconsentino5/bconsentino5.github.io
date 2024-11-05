function tellFortune(children, name, location, job) {

    let fortune = 'You will be a ' + job + ' in ' + location + ', and married to ' + name + ' with ' + children + ' kids.';
    return fortune;
}

let fortune1 = tellFortune(5, 'bob', 'nyc', 'coder');
document.getElementById('fortune1').innerHTML = fortune1;

let fortune2 = tellFortune(2, 'jason', 'cali', 'stay at home mom');
document.getElementById('fortune2').innerHTML = fortune2;

let fortune3 = tellFortune('no', 'nobody', 'the forest', 'cavewoman');
document.getElementById('fortune3').innerHTML = fortune3;



function calculateDogAge(age) {
    let dogYears = age * 7;
    return 'Your doggie is ' + dogYears + ' years old in dog years!';
}

let dog1 = calculateDogAge(1);
document.getElementById('dog1').innerHTML = dog1;

let dog2 = calculateDogAge(5);
document.getElementById('dog2').innerHTML = dog2;

let dog3 = calculateDogAge(9);
document.getElementById('dog3').innerHTML = dog3;



function reverseNum(num) {
    let newNum = num.toString().split('').reverse().join('');
    return newNum;
}

let num1 = reverseNum(1234);
document.getElementById('num1').innerHTML = num1;

let num2 = reverseNum(4321);
document.getElementById('num2').innerHTML = num2;



function reverseWord(word) {
    let newWord = word.split('').sort().join('');
    return newWord;
}

let word1 = reverseWord('webmaster');
document.getElementById('word1').innerHTML = word1;

let word2 = reverseWord('edcba');
document.getElementById('word2').innerHTML = word2;



function capitalize(phrase) {
    let newPhrase = phrase.split(' ');
    let final = '';
    for (let i = 0; i<newPhrase.length; i++) {
        final += newPhrase[i].charAt(0).toUpperCase() + newPhrase[i].slice(1) + ' ';
    }    
    return final;
}

let phrase1 = capitalize('the quick brown fox');
document.getElementById('phrase1').innerHTML = phrase1;

let phrase2 = capitalize('happy birthday to you girl!');
document.getElementById('phrase2').innerHTML = phrase2;
