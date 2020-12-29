let hamburger = document.querySelector(".fas.fa-bars");
let menu = document.querySelector(".menu");
let nav = document.querySelector(".nav");

// menu verschijnt als muis over menu gaat
hamburger.addEventListener("pointerenter", function (event) {
  menu.classList.add("visible");
});

// menu verdwijnt als muis van menu item afgaat
nav.addEventListener("pointerleave", function (event) {
  menu.classList.remove("visible");
});

// Wanneer je item hebt geklikt opacity lager zodat je ziet wat je hebt geklikt

// variabelen voor content
let btnHome = document.querySelector(".btnHome");
let btnGroen = document.querySelector(".btnGroen");
let btnRood = document.querySelector(".btnRood");
let btnGeel = document.querySelector(".btnGeel");
let btnPaars = document.querySelector(".btnPaars");
let btnBlauw = document.querySelector(".btnBlauw");
let bodyElement = document.querySelector("body");
let name = document.querySelector(".name");

function home() {
  bodyElement.classList.replace(bodyElement.classList.value, "btnHome");
  menu.classList.toggle("visible");
  name.innerHTML = btnHome.innerText.split("\n")[0];
  menu.querySelector(".focus").classList.remove("focus");
  btnHome.classList.add("focus");
}
function groen() {
  bodyElement.classList.replace(bodyElement.classList.value, "btnGroen");
  menu.classList.toggle("visible");
  name.innerHTML = btnGroen.innerText.split("\n")[0];
  menu.querySelector(".focus").classList.remove("focus");
  btnGroen.classList.add("focus");
}
function rood() {
  bodyElement.classList.replace(bodyElement.classList.value, "btnRood");
  menu.classList.toggle("visible");
  name.innerHTML = btnRood.innerText.split("\n")[0];
  menu.querySelector(".focus").classList.remove("focus");
  btnRood.classList.add("focus");
}
function geel() {
  bodyElement.classList.replace(bodyElement.classList.value, "btnGeel");
  menu.classList.toggle("visible");
  name.innerHTML = btnGeel.innerText.split("\n")[0];
  menu.querySelector(".focus").classList.remove("focus");
  btnGeel.classList.add("focus");
}
function paars() {
  bodyElement.classList.replace(bodyElement.classList.value, "btnPaars");
  menu.classList.toggle("visible");
  name.innerHTML = btnPaars.innerText.split("\n")[0];
  menu.querySelector(".focus").classList.remove("focus");
  btnPaars.classList.add("focus");
}
function blauw() {
  bodyElement.classList.replace(bodyElement.classList.value, "btnBlauw");
  menu.classList.toggle("visible");
  name.innerHTML = btnBlauw.innerText.split("\n")[0];
  menu.querySelector(".focus").classList.remove("focus");
  btnBlauw.classList.add("focus");
}
btnHome.addEventListener("click", home);

btnGroen.addEventListener("click", groen);

btnRood.addEventListener("click", rood);

btnGeel.addEventListener("click", geel);

btnPaars.addEventListener("click", paars);

btnBlauw.addEventListener("click", blauw);

document.addEventListener("keydown", logKey);

function logKey(e) {
  if (e.key == "1") {
    home();
    menu.classList.toggle("visible");
  } else if (e.key == "2") {
    groen();
    menu.classList.toggle("visible");
  } else if (e.key == "3") {
    rood();
    menu.classList.toggle("visible");
  } else if (e.key == "4") {
    geel();
    menu.classList.toggle("visible");
  } else if (e.key == "5") {
    paars();
    menu.classList.toggle("visible");
  } else if (e.key == "6") {
    blauw();
    menu.classList.toggle("visible");
  }
}
