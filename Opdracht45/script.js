const jokeButton = document.getElementById("joke-button");
const randomJoke = document.getElementById("random-joke");

jokeButton.addEventListener("click", () => {
  getJokes().then((result) => {
    randomJoke.innerHTML = "";
    let jokeID = result.id;
    let newQuote = document.createElement("q");
    let newIMG = document.createElement("img");
    let jokeP = document.createElement("p");
    newQuote.innerHTML = result.joke;
    newIMG.src = `https://icanhazdadjoke.com/j/${jokeID}.png`;
    randomJoke.appendChild(newQuote);
    randomJoke.appendChild(jokeP);
    jokeP.appendChild(newIMG);
  });
});
