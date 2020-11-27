const note = 'Lorem Ipsum is discovered  on classical literature';
const magazine = `Contrary to popular belief, Lorem Ipsum is not simply random text. 
It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more 
obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word
in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 
1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
This book is a treatise on the theory of ethics, very popular during the Renaissance. 
The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`

const harmlessRansomNote = (passInNote, passedInMagazine) => {
    const noteToArr = passInNote.split( ' ' )
    const magazineToArr = passedInMagazine.split( ' ' )
    const magazineObj = {}

    // move single words in array in object with the number they appear
    /**
     * @param {string | number | symbol} word
     */
    magazineToArr.forEach( word => {
        if (!magazineObj.hasOwnProperty( word )) {
             magazineObj[ word ] = 0 
        }
        magazineObj[ word ]++;
    } )
    
    // check note
    let noteIsOk = true
    noteToArr.forEach( word => {
        if ( magazineObj.hasOwnProperty( word ) ) {
            magazineObj[ word ]--;
            if ( magazineObj[ word ] < 0 ) {
                noteIsOk = false;
            }
        } else {
            noteIsOk = false;
        }
    } )
    return noteIsOk
};

console.log(harmlessRansomNote( note, magazine ))