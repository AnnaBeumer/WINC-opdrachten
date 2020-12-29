const age = 21;
const isFemale = false;
const driverStatus = "Henk";
const name = "Eva";
const totalAmount = 101;

if (age >= 18) {
  console.log("Leeftijd is groter dan 18");
} else {
  console.log("Leeftijd is kleiner dan 18");
}

if (isFemale) {
  console.log("Bezoeker is een vrouw");
} else {
  console.log("Bezoeker is geen vrouw");
}

if (driverStatus == "Bob") {
  console.log("Driver status Bob, mag rijden");
} else {
  console.log("Driver status, mag niet rijden");
}

// Opdracht 20
if (age >= 18 && age <= 25) {
  console.log("Je krijgt 50% korting!");
} else {
  console.log("Je krijgt geen korting.");
}

if (name === "Sarah" || name === "Bram") {
  console.log("Je krijgt een gratis biertje");
} else {
  console.log("Geen gratis bier.");
}

if (totalAmount > 100) {
  console.log("Gratis fles champagne");
} else if (totalAmount > 50) {
  console.log("Je krijgt gratis portie nachos");
} else if (totalAmount > 25) {
  console.log("Je krijgt gratis (vega)bitterballen");
} else {
  console.log("Helaas geen korting.");
}
