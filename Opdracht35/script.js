const opdracht35 = () => {
  // Deel 1
  const animalSpotted = document.querySelector("#spotted-animals-list");
  document.querySelectorAll(".big-five-button").forEach((button) => {
    button.addEventListener("click", () => {
      addAnimal(button.textContent);
    });
  });
  const addAnimal = (value) => {
    let newLi = document.createElement("li");
    newLi.innerHTML = value;
    animalSpotted.appendChild(newLi);
  };

  //  Deel 2
  const removeOneItem = document
    .querySelector("#remove-first-item-button")
    .addEventListener("click", () => {
      removeElements(1);
    });

  const removeElements = (arrLength) => {
    if (animalSpotted.children.length === 0) {
      return;
    }
    for (let i = arrLength - 1; i >= 0; i--) {
      let chilElement = animalSpotted.children[i];
      animalSpotted.removeChild(chilElement);
    }
  };

  //   Deel 3
  const removeAll = document
    .querySelector("#remove-all-button")
    .addEventListener("click", () => {
      removeElements(animalSpotted.children.length);
    });
};
opdracht35();
