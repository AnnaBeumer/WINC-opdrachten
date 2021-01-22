// JS: Fetch gebruiken als Promise: data ophalen vanuit REST API

// Stap 1 - fetch | Stap 2 .then | Stap 3 volgende .then
const fetch = require("node-fetch");
fetch("https://swapi.dev/api/people/1/") // doe request
  .then((response) => response.json())
  .then((data) => console.log(JSON.stringify(data, null, 2)))
  .catch((error) => {
    console.log(error);
  });
