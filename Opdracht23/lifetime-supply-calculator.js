const calculateSupply = function (age, amountPerDay) {
  const maxAge = 99;
  let NN = (maxAge - age) * 365 * amountPerDay;
  console.log(
    "You will need " + NN + " to last you untill the ripe age of " + maxAge
  );
};

calculateSupply(28, 5);
