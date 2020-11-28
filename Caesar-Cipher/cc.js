
const caesarCipher = ( str, shiftNum ) => {
    /*
    * for large number => but works fine for other numbers
   * this is a fix to avoid large number looping
    */
    shiftNum = shiftNum % 26
    const strArr = str.split( '' );
    const validCharacterArr = 'abcdefghijklmnopqrstuvwxyz'.split( '' )
    let caesarCipher = ''

    for ( let i = 0; i < strArr.length; i++ ) {
        // if its space
        if ( strArr[ i ] === ' ' ) {
            caesarCipher += strArr[ i ]
            // @ts-ignore
            continue
        }
        const strToLower = strArr[ i ].toLowerCase()
        // check string index
        const stIndex = validCharacterArr.indexOf( strToLower );

        let newStr
        let shiftingIndex = stIndex + shiftNum
        // our validCharacterArr is 26 in length with index 0 to 25
        if ( shiftingIndex > 25 ) {
            shiftingIndex = shiftingIndex - 26
        }
        // if the shift is backward i.e negative
        if ( shiftingIndex < 0 ) {
            shiftingIndex = 26  + shiftingIndex
        }
        
        

        // incase of capital letter
        if ( strArr[ i ] === strToLower.toUpperCase() ) {
            // get new string at shift
            newStr = validCharacterArr[ shiftingIndex ].toUpperCase()
        } else {
            // get new string at shift
            newStr = validCharacterArr[ shiftingIndex ]
        }
        
        
        caesarCipher += newStr
    }

    console.log(caesarCipher)
};

caesarCipher('Yby', -2)