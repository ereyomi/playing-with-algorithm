const memoizedFibonnacci = (index, cache) => {
    cache = cache || [];

    if ( cache[ index ] ) {
        return cache[ index ];
    } else {
        if ( index < 3 ) {
            return 1
        } else {
            cache[index] = memoizedFibonnacci(index - 1, cache) + memoizedFibonnacci(index-2, cache);
        }
    }

    return cache[ index ];
};

// this runs on =>  0(2^n) i.e the run time becomes longer with respect to inputted position
// this is not efficient as it crashes 
//it has very bad runtime
console.log(memoizedFibonnacci(15))