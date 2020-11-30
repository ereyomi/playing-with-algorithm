const sieveOfEratosthenes = (n) => {

    const primes = []

    for (let index = 0; index < n; index++) {
        primes[ index ] = true;        
    }
    // set 0 and 1 to false... they are not prime numbers...
    primes[ 0 ] = false;
    primes[ 1 ] = false;

    const sqrtOfN = Math.sqrt( n )
    
    for ( let i = 2; i <= sqrtOfN; i++ ) {
        for ( let j = 2; j * i <= n; j++ ) {
            primes[ j * i ] = false
        }
    }
    const result = []

    for ( let k = 0; k < primes.length; k++ ) {
        if ( primes[ k ] === true ) {
            result.push(k)
        }
    }

    return result

};



console.log(sieveOfEratosthenes(20))