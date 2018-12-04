var lengthArray,
    numericArray = [],
    count = {},
    num;

while (!isFinite(lengthArray) || !((lengthArray ^ 0) === lengthArray)) {
    lengthArray = +prompt('Введите количество элементов массива:');
}

for (var i = 0; i < lengthArray; i++) {
    while (!isFinite(numericArray[i])) {
        numericArray[i] = +prompt('Введите ' + (i + 1) + ' значение массива:');
    }

    if (!(numericArray[i] in count)) {
        count[numericArray[i]] = 0;
    }
    count[numericArray[i]]++;
}

while (!isFinite(num)) {
    num = +prompt('Введите любое число:');
}

if (num in count) {
    if ((count[num] >= 2) && (count[num] <= 4)) {
        console.log('Число ' + num + ' встретилось ' + count[num] +  ' раза!');
    } else {
        console.log('Число ' + num + ' встретилось ' + count[num] +  ' раз!');
    }    
} else {
    console.log('Число не найдено!');
}