// 1
const addOne = function (numbers) {
  const newArr = numbers.map((number) => {
    return number + 1;
  });
  return newArr;
};

module.exports = addOne;
