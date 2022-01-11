
const getMean = ( arrData ) => {
    let sum = 0
    for ( let i = 0; i < arrData.length; i++ ) {
        sum += arrData[ i ]
    }
    return sum / arrData.length;
}

const getMedian = ( arrData ) => {
    let median = 0
    // sort array
    const sortArr = arrData.sort( ( a, b ) => a - b )

    if ( sortArr.length % 2 !== 0 ) {
        // our median will be a mid odd... so
        median = sortArr[ Math.floor(sortArr.length / 2) ];
    } else {
        // [1, 2, 3, 4, 5, 6]
        let medianA = sortArr[ sortArr.length / 2 ]
        let medianB = sortArr[ ( sortArr.length / 2 ) - 1 ]
        median = (medianA + medianB) / 2
    }
    return median;
}

const getMode = ( arrData ) => {
    const modeObj = {}
    for ( let i = 0; i < arrData.length; i++ ) {
        if ( !modeObj.hasOwnProperty( arrData[ i ] ) ) {
            modeObj[ arrData[i]] = 0
        }
         modeObj[ arrData[i]] +=1 
    }
    let mode = []
    let maxFrequency = 0
    for ( let num in modeObj ) {

        if ( modeObj[ num ] === maxFrequency ) {
            mode.push(num)
        }

        if ( modeObj[ num ] > maxFrequency ) {
            mode = [ num ]; // array is reduce to the highest
            maxFrequency = modeObj[ num ]
        }
    }
    // check if the modeArr lenght is equal to the modeObj length
    if ( mode.length === Object.keys( modeObj ).length ) {
        mode = []
    }
    return mode
}

const performOperation = ( arr ) => {
    return {
        mean: getMean( arr ),
        median: getMedian( arr ),
        mode: getMode(arr),
    }
};


const arrayForOperation = [1, 1, 2, 2, 3, 3, 3, 3]

const operation = performOperation(  arrayForOperation );
console.log( operation );
