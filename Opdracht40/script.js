// Deel 1
const optellen = (...args) => {
  return args.reduce((prev, current) => {
    return prev + current;
  });
};

console.log(`Deel 1 :` + optellen(1, 2, 3));

// Deel 2
const optellen2 = (num1, num2, num3) => {
  return num1 + num2 + num3;
};

const cijfers = [1, 2, 3];

console.log(`Deel 2 :` + optellen2(...cijfers));
