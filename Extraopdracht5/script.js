// Hey Kiddo exercise
const checkAge = (age) => {
  return age >= 18;
};

const greeting = (age) => {
  const checkedAge = checkAge(age);
  if (checkedAge === true) {
    return "Hello there";
  } else {
    return "Hey kiddo";
  }
};

console.log(greeting(17));

// VAT calculations exercise
// 1

const vatExercise1 = (basePrice, VATpercentage) => {
  const vat = vatCalculation(basePrice, VATpercentage);
  return basePrice + vat;
};

const vatCalculation = (basePrice, VATpercentage) => {
  return basePrice * (VATpercentage / 100);
};

console.log(vatExercise1(100, 21));

// 2

const basePriceCalc = (amountIncludingVAT, VATpercentage) => {
  return amountIncludingVAT / (VATpercentage / 100 + 1);
};
const vatExercise2 = (amountIncludingVAT, VATpercentage) => {
  const basePrice = basePriceCalc(amountIncludingVAT, VATpercentage);
  const vatAmount = amountIncludingVAT - basePrice;
  return [basePrice, vatAmount];
};

console.log(vatExercise2(121, 21));
