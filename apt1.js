/*
Given a sentence with multiple lowercase words separated by spaces, write a Javascript code that finds the longest word in the sentence. If there are multiple words of the same length, choose one that has the highest number of vowels. Ignore any character in the sentence that is not a letter or a space. Find the most efficient way to achieve this.


Sample input: “Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers” (Socrates)


Sample output: “experience”


Note: Longest words are “everything” and “experience”, but the second has the most vowels
*/

// let original_sentence = '    Smart people      learn from everything and     everyone,    average people from their experience, stupid people already, have all the answers';
let original_sentence = "Romeo and Juliet Summary. An age-old vendetta between two powerful families erupts into bloodshed. A group of masked Montagues risk further conflict by gatecrashing a Capulet party. A young lovesick Romeo Montague falls instantly in love with Juliet Capulet, who is due to marry her father's choice, the County Paris.";

// let sanitise_sentence = original_sentence.replace(/[^\w\s]/gi, ' ');
// let sanitise_sentence = original_sentence.replace(/\s+/g, ' ');

//_ replace special chars with spaces, then replace duplicate spaces
let sanitise_sentence = original_sentence.replace(/[^\w\s]/gi, ' ').replace(/\s+/g, ' ').trim();

console.log('>>> original_sentence: ' + original_sentence + '\n\n');
console.log('>>> sanitise_sentence: ' + sanitise_sentence + '\n\n');

let longest_len = 0;
let longest_word = '';

let arrWords = sanitise_sentence.split(' ');
arrWords.forEach((item) => {
    //_ validate if it return null, then we give it 0 value, otherwise it'll error when getting length
    //  for example word "BY", both are not vowel
    vowel_len = (!item.match(/[aeiou]/gi)) ? 0 : item.match(/[aeiou]/gi).length;

    curr_len = item.length - vowel_len;

    if (curr_len > longest_len) {
        longest_len = curr_len;
        longest_word = item;
    }
})

// console.log('>>> Final result, the longest word is ' + longest_word + ', with length (without vowel) is ' + longest_len);
console.log('>>> Final result, the longest word is "' + longest_word + '" with length (without vowel) is ' + longest_len);

