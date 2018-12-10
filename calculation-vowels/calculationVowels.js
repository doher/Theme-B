'use strict';

function getCountVowels(phrase) {
    return function counter() {
        let count = 0;

        for (let i = 0; i < phrase.length; i++) {
            switch (phrase.toLowerCase()[i]) {
                case 'а':
                case 'е':
                case 'ё':
                case 'о':
                case 'и':
                case 'э':
                case 'у':
                case 'ы':
                case 'я':
                case 'ю':
                    count++;
                    break;
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