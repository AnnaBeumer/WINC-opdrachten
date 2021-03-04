// // 3
const findNeedle = function (words) {
  // Schrijf hier de functie...
  const result = (element) => element === 'needle';
   return words.findIndex(result);
};

module.exports = findNeedle;