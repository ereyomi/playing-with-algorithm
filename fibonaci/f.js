const fibonacci = (position) => {
    if ( position < 3 ) {
        return 1
    } else {
        return fibonacci( position - 1) + fibonacci(position - 2)
    }
};

// this runs on =>  0(2^n) i.e the run time becomes longer with respect to inputted position
// this is not efficient as it crashes 
//it has very bad runtime
console.log(fibonacci(5))