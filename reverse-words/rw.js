const reverseWords = ( words ) => {
    // split words into array with their space
    const wordsToArr = words.split( ' ' )
    const reversedWord = []

    for ( let i = 0; i < wordsToArr.length; i++ ){
        const word = wordsToArr[ i ].split( '' )
        let revW = ''
        for ( let j = word.length - 1; j >= 0; j-- ){
            revW += word[ j ]
        } 
        reversedWord.push(revW)
    }

    console.log(reversedWord.join(' '))
};

reverseWords("This is ereyomi's house")