const twoSum = (arr, sum) => {
    const pairs = []
    const hashTable = []
    for ( let i = 0; i < arr.length; i++ ) {
        const currentNum = arr[ i ]
        const counterPart = sum - currentNum

        if ( hashTable.includes( counterPart ) ) {
            pairs.push([currentNum, counterPart])
        }
        hashTable.push( currentNum )
    }
    return pairs
}

const arrayData = [ 40, 11, 19, 17, -12]
const theSum = 28
const getTwoSum = twoSum( arrayData, theSum );

console.log( getTwoSum );