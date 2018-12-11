function bubbleSort(array) {
    let lengthArray = array.length;
    
    for (let j = 0; j < lengthArray; j++) {
        for (let i = 0; i < (lengthArray - j); i++) {
            if (array[i] > array[i + 1]) {
                let buf = array[i];
                array[i] = array[i + 1];
                array[i + 1] = buf;
            }
        }
    }

    return array;
}

var array = [54, 3, 2, 1, 5, 7, 151, 8, 2, 4, 1, 13, 6, 1, 0, 22, 34];

console.log(bubbleSort(array));