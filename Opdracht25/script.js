let colors = ["yellow", "blue", "red", "orange"];
let colorCounter = 0;

while (colorCounter < colors.length) {
  console.log(colors[colorCounter]);
  colorCounter++;
}

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

colors.forEach((color) => console.log(color));

// Antwoorden op vragen
// 1 - Mijn for loop neemt 3 regels in beslag en mijn while loop 4.
// 2 - 1 regel
// 3 - Je typt letterlijk wat je wilt dat er gaat gebeuren. En hoeft het niet te itereren. Ik vind de for loop het makkelijkst leesbaar, omdat deze uitgebreider is.
//4 - Ja, bij de for loop.
const fruits = {
  apple: 28,
  orange: 17,
  pear: 54,
  banana: 21,
  peach: 36,
};

const entries = Object.entries(fruits);
console.log(entries);

for (const [fruit, count] of entries) {
  console.log("There are " + count + " " + fruit + "s");
}
