var firstNumber,
    secondNumber;

while (!isFinite(firstNumber) || !((firstNumber ^ 0) === firstNumber)) {
    firstNumber = +prompt('Enter the first number:');
}

while (!isFinite(secondNumber) || !((secondNumber ^ 0) === secondNumber)) {
    secondNumber = +prompt('Enter the second number:');
}

function sumOfNumbers(num1, num2) {
    var sum = 0;

    if (num1 <= num2) {
        for (var i = num1; i <= num2; i++) {
            sum += i;
        }

        return 'Sum of numbers = ' + sum;
    } else {
        return 'The second number less than the first!';
    }
}

console.log(sumOfNumbers(firstNumber, secondNumber));