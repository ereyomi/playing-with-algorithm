const binarySearch = ( arr, key ) => {
    // sort arr
    // arr.sort( ( a, b ) => a - b );
    /*  */
    const middleIndex = Math.floor( arr.length / 2 );
    const middleVal = arr[ middleIndex ];
    if ( middleVal === key ) {
        return true
    } else if ( middleVal < key && arr.length > 1 ) {
        // splice the array 
        const spliceArr = arr.splice( middleIndex, arr.length );
        return binarySearch(spliceArr, key );
    } else if ( middleVal > key && arr.length > 1 ) {
         // splice the array again
        const spliceArr = arr.splice( 0, middleIndex);
        return binarySearch(spliceArr, key );
    } else {
        return false;
    }
};

const numDict = [ 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]; // note the array must be in order else you will have to sort the array
const searchKey = 8 // num to search


console.log(binarySearch( numDict, searchKey ))