var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append(
  "Cookie",
  "__cfduid=d29fc1ea1f525c10481f3d4d169029d1c1612261263"
);

var raw = "";

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

async function getJokes() {
  try {
    const getJoke = await fetch(
      "https://icanhazdadjoke.com/?User-Agent=www.wincacademy.nl",
      requestOptions
    );
    // .then((response) => response.text());
    const jsonData = await getJoke.json();
    return jsonData;
  } catch (error) {
    console.log("error", error);
  }
}
