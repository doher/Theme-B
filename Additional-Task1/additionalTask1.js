'use strict';

var n,
    primes = [],
    numbers = [];

while (!isFinite(n) || !((n ^ 0) === n)) {
    n = +prompt('Введите номер простого числа:');
}

var size = n;

for (var i = 0; i < size; i++) {
    numbers[i] = i;
}

primes[0] = 2;
var i = 0;

while (i < n) {
    var prime = primes[i];
    i++;

    for (var j = prime * 2; j < size; j += prime) {
        numbers[j] = 0;
    }

    while (numbers[prime + 1] == 0) {
        prime++;
    }

    if ((prime + 1) >= size) {
        var tmp = [];

        for (var k = 0; k < size; k++) {
            tmp[k] = numbers[k];
        }

        numbers = [];

        size *= 2;
        numbers = tmp;

        for (var j = size / 2; j < size; j++) {
            numbers[j] = j;
        }

        i = 0;
    } else {
        primes[i] = prime + 1;
    }
}

console.log(primes[n - 1]);