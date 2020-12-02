let name = prompt("Welkom, wat is je naam?");
alert("Hey " + name);

const getRandomInt = function () {
  let rangeLow = parseInt(prompt("Voer een beginnummer in."), 10);
  let rangeMax = parseInt(prompt("Voer een eindnummer in."), 10);
  alert("Het juiste getal ligt tussen " + rangeLow + " en " + rangeMax + ".");
  return Math.floor(Math.random() * (rangeMax - rangeLow) + rangeLow);
};

const randomNumber = getRandomInt();
console.log(randomNumber);

const guessNumber = function () {
  let guess = prompt("Guess the number:");
  let lowHigh;
  if (guess > randomNumber) {
    lowHigh = "hoog";
  } else if (guess < randomNumber) {
    lowHigh = "laag";
  }
  if (guess == randomNumber) {
    alert("Gefeliciteerd! Je hebt gewonnen.");
  } else {
    if (maxAtempts == 0) {
      alert("Helaas je pogingen zijn op.");
      return;
    }
    maxAtempts--;
    alert(
      "Dat is niet correct.\nJe zit te " +
        lowHigh +
        "\nJe hebt nog " +
        maxAtempts +
        " pogingen over."
    );
    guessNumber();
  }
};
let maxAtempts = 5;
guessNumber();

alert("Dag " + name + " het spel is nu klaar.\nTot de volgende keer!");
