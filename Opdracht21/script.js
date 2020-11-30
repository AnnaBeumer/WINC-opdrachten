let person = {
  name: "Anna",
  age: 28,
  evaluations: [7, 10, 9],
};
let colors = ["groen", "blauw", "rood"];
colors.push("geel");
colors.push(5);
colors.push({ 'greeting anna': "Hi ik ben een object" });

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person["name"]);
console.log(person["age"]);
console.log(person["evaluations"]);
console.log(colors);
console.log(colors.length);
console.log(colors[0]);
console.log(colors[colors.length - 1]);
console.log(colors[colors.length - 1]["greeting anna"]);
