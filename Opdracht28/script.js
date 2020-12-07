let myButton = document.getElementById("myButton");
// Opdracht 1
myButton.addEventListener("click", function (e) {
  alert("Button clicked.");
});

let btnColor = document.getElementById("btnColor");
// Opdracht 2
// btnColor.addEventListener("click", function (e) {
//   let changeColor = document.querySelector("body");
//   changeColor.classList.add("red-background");
// });

// Opdracht 3
btnColor.addEventListener("click", function (e) {
  let toggleColor = document.querySelector("body");
  toggleColor.classList.toggle("red-background");
});
