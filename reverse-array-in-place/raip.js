const reverseArrayInPlace = (arr) => {
    for (let index = 0; index < arr.length / 2; index++) {
        const temp = arr[ index ]
        arr[ index ] = arr[ arr.length - 1 - index ]
        arr[ arr.length - 1 - index ] = temp
    }
    return arr
};

const arry = [1, 2, 3, 4, 5, 6, 7, 8]
const reversedArr = reverseArrayInPlace( arry );
console.log(reversedArr)