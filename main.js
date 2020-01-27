/**INFORMATION**/
var info = [
  ["Chirper", 8, "Bird", "Chirper.jpg"],
  ["Cheeper", 4.5, "Bird", "Cheeper.jpg"],
  ["Chirpy", 4.5, "Bird", "Chirpy.jpg"],
  ["Cheepy", 4.5, "Bird", "Cheepy.jpg"],
  ["Black Beak", 24.5, "Penguin", "Black-Beak.jpg"],
  ["Waddles", 15, "Penguin", "Waddles.jpg"],
  ["Elephatny", 9, "Elephant", "Elephantny.jpg"],
  ["Bear Bear", 13.5, "Bear", "Bear-Bear.jpg"],
  ["Turtle", 4, "Turtle", "Turtle.jpg"],
  ["Hippo", 30, "Hippo", "Hippo.jpg"],
  ["Kickly", 16.5, "Rabbit", "Kickly.jpg"],
  ["Liony", 5.5, "Lion", "Liony.jpg"],
  ["Scavenge Boy", 23, "Cat", "Scavenge-Boy.jpg"],
  ["Lamby", 8.5, "Sheep", "Lamby.jpg"],
  ["Sheepy", 21, "Sheep", "Sheephy.jpg"],
  ["Kitty", 16.5, "Cat", "Kitty.jpg"]
];
function myFunction() {
  var myValName = document.getElementById("fname").value;
  document.getElementById("formarea").classList.add("trans");
  localStorage.setItem("name", myValName);

  var isFound = false;
  for (var i = 0; i < 11; i++) {
    if (info[i][0].toUpperCase() === myValName.toUpperCase()) {
      localStorage.setItem("name", info[i][0]);
      localStorage.setItem("height", info[i][1]);
      localStorage.setItem("notes", info[i][2]);
      localStorage.setItem("reference", info[i][3]);
      var myValHeight = info[i][1];
      var myValNotes = info[i][2];
      var myValRef = info[i][3];
      myValName = info[i][0];
      isFound = true;
    }
  }
  if (isFound) {
    document.getElementById("tobename").innerHTML = "Name: " + myValName;
    document.getElementById("tobeheight").innerHTML =
      "Height: " + myValHeight + "cm";
    document.getElementById("tobenotes").innerHTML = "Species: " + myValNotes;
    document.getElementById("tobeimage").src = myValRef;
    document.getElementById("tobeimage").classList.remove("trans");
    document.getElementById("formarea").classList.add("trans");
  } else {
    document.getElementById("tobename").innerHTML = "No such person found.";
    document.getElementById("tobeheight").innerHTML = "";
    document.getElementById("tobenotes").innerHTML = "";
    document.getElementById("tobeimage").classList.add("trans");
  }
  document.getElementById("fname").value = "";
}

function showHome() {
  document.getElementById("tobename").innerHTML = "";
  document.getElementById("tobeheight").innerHTML = "";
  document.getElementById("tobenotes").innerHTML = "";
  document.getElementById("tobeimage").classList.add("trans");
  document.getElementById("formarea").classList.remove("trans");
}
