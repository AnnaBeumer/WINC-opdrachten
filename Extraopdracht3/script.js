const biggerThen100 = (arg) => {
  if (arg >= 100) {
    return true;
  } else {
    return false;
  }
};

// console.log(biggerThen100(101));
// console.log(biggerThen100(99));

const maxNumber = 100;

const BrendaTheBouncer = (currentNumber, age) => {
  if (currentNumber > maxNumber) {
    return "it's too busy now, come back later";
  }
  if (age < 18) {
    return "this is a club for adults";
  }
  return "Come in";
};

// console.log(BrendaTheBouncer(99, 18));
// console.log(BrendaTheBouncer(99, 17));
// console.log(BrendaTheBouncer(101, 18));
// console.log(BrendaTheBouncer(101, 17));

const averageNumber = (numbers) => {
  const totalSum = numbers.reduce((a, b) => a + b, 0);
  const length = numbers.length;
  return Math.round(totalSum / length);
};

console.log(averageNumber([2, 10, 9, 6, 12, 3]));
console.log(averageNumber([1, 2, 3, 4, 6]));
