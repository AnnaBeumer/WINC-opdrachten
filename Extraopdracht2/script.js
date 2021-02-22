// No arguments
// const paintedWall = () => {
//   console.log("The wall has been painted red");
// };

// paintedWall();

// Single argument
// const paintedWall = (color) => {
//   console.log("The wall has been painted " + color);
// };

// paintedWall("green");
// paintedWall("purple");

// Multiple arguments
const paintedWall = (wall, color) => {
  console.log("The " + wall + " wall has been painted " + color);
};

paintedWall("south-east", "grey");
paintedWall("northern", "orange");
