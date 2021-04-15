const binarySearch = (arr, search) => {
    let high = arr.length - 1;
    let low = 0;
    

    while ( low <= high ) {
    // set mid
        let mid = low + high
        let guess = arr[ mid ];
        if ( guess === search ) {
            return true;
        } else if (guess > search ) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return false;


};
const numDict = [1, 3, 5, 7, 9]; // note the array must be in order i.e sorted else you will have to sort the array
const searchKey = 7; // num to search
const search = binarySearch( numDict, searchKey );
console.log( search );