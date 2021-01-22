// const fetch = require("node-fetch");
const API_KEY = "813913a5418a306cd91341f17b9fa929";

async function getData() {
  try {
    const apiUrl = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
    );
    const jsonData = await apiUrl.json();
    return JSON.stringify(jsonData, null, 2);
  } catch (err) {
    console.log(err);
  }
}
