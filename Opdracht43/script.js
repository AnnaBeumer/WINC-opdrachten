const addGenreToDom = document.querySelector("#movie-genre");
const addFavoMovie = document.querySelector(".favo-movie");
const addTopTen = document.querySelector("#top-ten");
const addTopAction = document.querySelector("#top-action");
const addMovieFrom1975 = document.querySelector("#movie-1975");

getData().then((result) => {
  console.log(result);
  return result.genres.map((genre) => {
    let newLI = document.createElement("li");
    newLI.innerHTML = "Genre naam: " + genre.name + ", id: " + genre.id;
    addGenreToDom.appendChild(newLI);
  });
});

getMovieID().then((result) => {
  let movieResults = result.movie_results;
  addFavoMovie.innerHTML = movieResults[0].title;
  console.log(result.movie_results);
});

getTopMovies().then((result) => {
  console.log(result);
  return result.results.slice(0, 10).map((test) => {
    let newLi = document.createElement("li");
    newLi.innerHTML = "Title: " + test.title + ", Rate: " + test.vote_average;
    addTopTen.appendChild(newLi);
  });
});

getActionTopMovies().then((result) => {
  console.log(result);
  return result.results.slice(0, 10).map((output) => {
    let newLiActionMovie = document.createElement("li");
    newLiActionMovie.innerHTML = "Title: " + output.title;
    addTopAction.appendChild(newLiActionMovie);
  });
});

getMoviesFrom1975().then((result) => {
  console.log(result);
  return result.results.slice(0, 10).map((output) => {
    let newLi1975 = document.createElement("li");
    newLi1975.innerHTML =
      "Title: " + output.title + ", Releasedate: " + output.release_date;
    addMovieFrom1975.appendChild(newLi1975);
  });
});
