function incrementString(string) {
  const strToArr = string.split('');
  const forNum = [];

  const lastLetter = string[string.length - 1];

  for (let i = 0; i < strToArr.length; i++) {
    if (parseInt(strToArr[i])) {
      forNum.push(strToArr[i]);
      delete strToArr[i];
    }
  }
  const endSum = Number(forNum.join('')) + 1;

  strToArr.push(endSum);

  return strToArr.join('');
}