// Function declatarion
function functionDeclaration(num1, num2) {
  const result1 = num1 * num1;
  const result2 = num2 * num2;
  const result3 = result1 + result2;
  return result3 * result3;
}

console.log(functionDeclaration(1, 2));

// Function expression
const functionExpression = function (num1, num2) {
  const result1 = num1 * num1;
  const result2 = num2 * num2;
  const result3 = result1 + result2;
  return result3 * result3;
};

console.log(functionExpression(1, 2));

// Arrow function
const arrowFunction = (num1, num2) => {
  const result1 = num1 * num1;
  const result2 = num2 * num2;
  const result3 = result1 + result2;
  return result3 * result3;
};

console.log(arrowFunction(1, 2));
