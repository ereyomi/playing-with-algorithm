/**
 * @param {string} s
 * @return {string}
 * 
 * Given a string s, reverse the string according to the following rules:

    All the characters that are not English letters remain in the same position.
    All the English letters (lowercase or uppercase) should be reversed.
    Return s after reversing it.
 * Example 1:

   Input: s = "ab-cd"
    Output: "dc-ba"
    Example 2:

    Input: s = "a-bC-dEf-ghIj"
    Output: "j-Ih-gfE-dCba"
    Example 3:

    Input: s = "Test1ng-Leet=code-Q!"
    Output: "Qedo1ct-eeLg=ntse-T!"

    
    Constraints:

    1 <= s.length <= 100
    s consists of characters with ASCII values in the range [33, 122].
    s does not contain '\"' or '\\'.

    Runtime: 80 ms, faster than 38.18% of JavaScript online submissions for Reverse Only Letters.
Memory Usage: 40.1 MB, less than 52.73% of JavaScript online submissions for Reverse Only Letters.
 */
const isAlphabet = (alph) => {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  return letters.includes(alph.toLowerCase());
};
const reverseOnlyLetters = (s) => {
  let stringArr = s.split('');
  let startPoint = 0;
  let endPoint = stringArr.length - 1;

  while (startPoint < endPoint) {
    if (isAlphabet(stringArr[startPoint]) && isAlphabet(stringArr[endPoint])) {
      [stringArr[startPoint], stringArr[endPoint]] = [
        stringArr[endPoint],
        stringArr[startPoint],
      ];
      startPoint++;
      endPoint--;
    } else if (!isAlphabet(stringArr[startPoint])) {
      startPoint++;
    } else if (!isAlphabet(stringArr[endPoint])) {
      endPoint--;
    } else {
      startPoint++;
      endPoint--;
    }
  }

  return stringArr.join('');
};

const s = reverseOnlyLetters('Qedo1ct-eeLg=ntse-T!');
console.log(s);
