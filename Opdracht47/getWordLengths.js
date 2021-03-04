// 2
const getWordLengths = function (someWords) {
  const wordLength = someWords.map((word) => {
    return word.length;
  });
  return wordLength;
};

module.exports = getWordLengths;
