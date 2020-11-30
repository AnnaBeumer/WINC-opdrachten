const calculateDogAge = function (humanAge, conversion) {
  let dogAgeResult = humanAge * conversion;
  console.log("Your doggie is " + dogAgeResult + " years old in dog years!");
};

calculateDogAge(5, 7);
