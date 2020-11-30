// Een broodje kaas
// Ingredienten zijn:
// Wit brood
// Kaas
// Boter

function broodjeKaas() {
  console.log("Broodje kaas");
}
broodjeKaas();

// Hier declareer ik mijn functie makeSandwich
const makeSandwich = function (topping) {
  console.log("There you go, a sandwich with " + topping);
};

// Hier call ik mijn funcie makeSandwich
makeSandwich("belegen kaas");
makeSandwich("oude kaas");

function calculateDiscountedPrice(totalAmount, discount) {
  return Math.round(totalAmount - discount);
}
let result = calculateDiscountedPrice(40, 9.6);
console.log(result);

function discount(totalAmount, discount) {
  if (totalAmount >= 25) {
    return Math.round(totalAmount - discount);
  } else {
    return totalAmount;
  }
}
console.log(discount(22, 3));
