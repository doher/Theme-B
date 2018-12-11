'use strict';

function getCountVowels(phrase) {
    let phraseLength = phrase.length;
    phrase = phrase.toLowerCase();

    return function counter() {
        let vowels = {
                'a': 0,
                'е': 0,
                'ё': 0,
                'о': 0,
                'и': 0,
                'э': 0,
                'у': 0,
                'ы': 0,
                'я': 0,
                'ю': 0
            },
            count = 0;

        for (let i = 0; i < phraseLength; i++) {
            if (phrase[i] in vowels) {
                count++;
            }
        }

        return count;
    }
}

var counter = getCountVowels('яблоко');
var counter2 = getCountVowels('яблокооооооооооооооооооо');
var counter3 = getCountVowels('блк');

console.log(counter());
console.log(counter2());
console.log(counter3());