'use strict';

var firstLongNumber,
    secondLongNumber,
    firstNumbersArray = [],
    secondNumbersArray = [],
    resultNumbersArray = [],
    lengthFirstArray,
    lengthSecondArray,
    lengthResultArray;

firstLongNumber = prompt('Введите первое длинное число:');
secondLongNumber = prompt('Введите втрое длинное число:');

lengthFirstArray = firstLongNumber.length;
lengthSecondArray = secondLongNumber.length;
lengthResultArray = (lengthFirstArray < lengthSecondArray) ? lengthSecondArray : lengthFirstArray;

firstNumbersArray = firstLongNumber.split('').reverse();
secondNumbersArray = secondLongNumber.split('').reverse();

for (let i = 0; i < lengthResultArray; i++) {

    firstNumbersArray[i] = firstNumbersArray[i] || 0;
    secondNumbersArray[i] = secondNumbersArray[i] || 0;

    const sum = +firstNumbersArray[i] + +secondNumbersArray[i];

    resultNumbersArray[i] = sum % 10;

    if (sum >= 10) {
        if (lengthFirstArray < lengthSecondArray) {
            secondNumbersArray[i + 1]++;
        } else {
            firstNumbersArray[i + 1]++;
        }
    }
}

console.log('Их сумма ' + firstLongNumber + ' и ' + secondLongNumber + ' равна: ' + resultNumbersArray.reverse().join(''));