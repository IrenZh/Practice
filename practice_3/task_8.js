function toUpperCase(sentence){
    let words = sentence.split(' ');
    let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(' ');
}

let sentence = 'i love java script';
let outputString = toUpperCase(sentence);
console.log(outputString);
