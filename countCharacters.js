/**
 The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
 */

function count(str) {
  const letterCount = {};

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];

    if (letter.match(/[a-zA-Z]/)) {
      if (letterCount[letter]) {
        letterCount[letter]++;
      } else {
        letterCount[letter] = 1;
      }
    }
  }

  return letterCount;
}
