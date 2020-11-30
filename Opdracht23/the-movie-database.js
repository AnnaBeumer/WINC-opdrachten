let favoMovie = {
  title: "Titanic",
  duration: 60,
  stars: ["Leonardo", "Mary", "Will Smith"],
};

const movieInfo = function (title) {
  console.log(
    favoMovie.title +
      " lasts for " +
      favoMovie.duration +
      " minutes. Stars: " +
      favoMovie.stars.join(", ")
  );
};

movieInfo("Titanic");
