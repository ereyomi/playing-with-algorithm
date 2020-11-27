

const isPalindrome = ( str ) => {
    // convert string to lowerCase then convert to array without seperator
    const strArr = str.toLowerCase().split( '' );
    const validCharacterArr = 'abcdefghijklmnopqrstuvwxyz'.split( '' )
    
    const letterArr = []
    strArr.forEach( ( letter ) => {
        if ( validCharacterArr.includes( letter )) { // includes() can be used instead of  indexOf()
            letterArr.push( letter )
        }
    } )
    // check if letter is equal to the reverse
    return letterArr.join( '' ) === letterArr.reverse().join( '' ) ? true : false;
};

// const text = "Madam I'm Adam"
const text = 'race car'

console.log(isPalindrome(text));