const addSteenbok = document.querySelector("#steenbok");

const vrouw = randomPersonData
  .filter((female) => {
    return female.gender === "female";
  })
  .filter((result) => {
    return result.age >= "30";
  })
  .filter((output) => {
    let decDate = new Date("12/22");
    let janDate = new Date("1/19");
    let day = output.birthday.dmy.split("/")[0] - 0;
    let month = output.birthday.dmy.split("/")[1] - 0;
    let toCheckDate = new Date(`${month}/${day}`);
    return toCheckDate > decDate || toCheckDate < janDate;
  });

const getSteenbok = vrouw.sort(sortByPropName("name")).map((test) => {
  let newLi = document.createElement("li");
  let newIMG = document.createElement("img");
  newIMG.src = test.photo;
  newLi.innerHTML =
    "Name: " + test.name + ", Surname: " + test.surname + test.birthday.dmy;
  addSteenbok.appendChild(newLi);
  newLi.appendChild(newIMG);
});
