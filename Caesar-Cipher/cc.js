
const caesarCipher = ( str, shiftNum ) => {
    const strArr = str.split( '' );
    const validCharacterArr = 'abcdefghijklmnopqrstuvwxyz'.split( '' )
    let caesarCipher = ''

    for ( let i = 0; i < strArr.length; i++ ) {
        // check string index
        const stIndex = validCharacterArr.indexOf( strArr[i] );

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
        // if its space
        if ( st === ' ' ) {
            caesarCipher += newStr
            // @ts-ignore
            continue
        }

        // incase of capital letter
        if(strArr[])
        
        newStr = validCharacterArr[ shiftingIndex ]
        console.log( newStr )
        caesarCipher += newStr
    }
};

caesarCipher('y', -2)