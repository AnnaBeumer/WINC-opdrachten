const API_KEY = "813913a5418a306cd91341f17b9fa929";
let movieID = "tt0978764";

async function getData() {
  try {
    const apiUrl = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
    );
    const jsonData = await apiUrl.json();
    return jsonData;
  } catch (err) {
    console.log(err);
  }
}

async function getMovieID() {
  try {
    const getMovieUrl = await fetch(
      `https://api.themoviedb.org/3/find/${movieID}?language=en-US&external_source=imdb_id&api_key=${API_KEY}`
    );
    const jsonData = await getMovieUrl.json();
    jsonData.movieId = movieID;
    return jsonData;
  } catch (err) {
    console.log(err);
  }
}

async function getTopMovies() {
  try {
    const getTopMovie = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`
    );
    const jsonData = await getTopMovie.json();
    return jsonData;
  } catch (err) {
    console.log(err);
  }
}

async function getActionTopMovies() {
  try {
    const getActionTopMovie = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28&sort_by=vote_average.desc`
    );
    const jsonData = await getActionTopMovie.json();
    return jsonData;
  } catch (err) {
    console.log(err);
  }
}

async function getMoviesFrom1975() {
  try {
    const getMovieFrom1975 = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&primary_release_year=1975&sort_by=vote_average.desc`
    );
    const jsonData = await getMovieFrom1975.json();
    return jsonData;
  } catch (err) {
    console.log(err);
  }
}
