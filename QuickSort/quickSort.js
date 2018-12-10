function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let pivot = array.pop(),
        newArray = [],
        leftArray = [],
        rightArray = [];

    for (let i = 0; i < array.length; i++) {
        if (pivot >= array[i]) {
            leftArray.push(array[i])
        } else {
            rightArray.push(array[i])
        }
    }

    return newArray.concat(quickSort(leftArray), pivot, quickSort(rightArray));
}

var array = [54, 3, 2, 1, 5, 7, 151, 8, 2, 4, 1, 13, 6, 1, 0, 22, 34];

console.log(quickSort(array));