const addLandenLijst = document.querySelector("#landenlijst");

const nieuwLandenLijst = [
  ...new Set(randomPersonData.sort(sortByPropName('region')).map((item) => item.region)),
];

const getLandenLijst = nieuwLandenLijst.map((test) => {
  let newLi = document.createElement("li");
  newLi.innerHTML = test;
  addLandenLijst.appendChild(newLi);
});
