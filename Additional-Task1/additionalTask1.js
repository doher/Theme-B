'use strict';

function isPrime(num) {
    for (let i = 2; i < (num / 2 + 1); i++) {
        if ((num % i) == 0) {
            return false;
        }
    }
    return true;
}

var serialNumber,
    count = 0,
    number = 2,
    primeNumber = number;

while (!isFinite(serialNumber) || !((serialNumber ^ 0) === serialNumber) || (serialNumber <= 0)) {
    serialNumber = +prompt('Введите номер простого числа:');
}

while (count != serialNumber) {
    if (isPrime(number)) {
        count++;
        primeNumber = number;
    }
    number++;
}

console.log(primeNumber);