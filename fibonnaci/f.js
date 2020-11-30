const fibonnacci = (position) => {
    if ( position < 3 ) {
        return 1
    } else {
        return fibonnacci( position - 1) + fibonnacci(position - 2)
    }
};

console.log(fibonnacci(20))