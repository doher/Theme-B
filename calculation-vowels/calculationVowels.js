'use strict';

var someWords;

while (!someWords) {
    someWords = prompt('Введите любую строку:');
}

function getVowels(stringWords) {
    var count = 0;

    for (var i = 0; i < stringWords.length; i++) {
        switch (stringWords.toLowerCase()[i]) {
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

    if (count === 1) {
        console.log('В вашей фразе ' + count + ' гласная буква!');
    } else if (count > 1 && count <= 4) {
        console.log('В вашей фразе ' + count + ' гласные буквы!');
    } else if (count > 4) {
        console.log('В вашей фразе ' + count + ' гласных букв!');
    } else {
        console.log('В вашей фразе нет гласных!');
    }
}

getVowels(someWords);