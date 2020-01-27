/**INFORMATION**/
var info = [
  ["Chirper", 8, "Bird", "images/Chirper.jpg"],
  ["Cheeper", 4.5, "Bird", "images/Cheeper.jpg"],
  ["Chirpy", 4.5, "Bird", "images/Chirpy.jpg"],
  ["Cheepy", 4.5, "Bird", "images/Cheepy.jpg"],
  ["Black Beak", 24.5, "Penguin", "images/Black-Beak.jpg"],
  ["Waddles", 15, "Penguin", "images/Waddles.jpg"],
  ["Elephantny", 9, "Elephant", "images/Elephantny.jpg"],
  ["Bear Bear", 13.5, "Bear", "images/Bear-Bear.jpg"],
  ["Turtle", 4, "Turtle", "images/Turtle.jpg"],
  ["Hippo", 30, "Hippo", "images/Hippo.jpg"],
  ["Kickly", 16.5, "Rabbit", "images/Kickly.jpg"],
  ["Liony", 5.5, "Lion", "images/Liony.jpg"],
  ["Scavenge Boy", 23, "Cat", "images/Scavenge-Boy.jpg"],
  ["Lamby", 8.5, "Sheep", "images/Lamby.jpg"],
  ["Sheepy", 21, "Sheep", "images/Sheepy.jpg"],
  ["Kitty", 16.5, "Cat", "images/Kitty.jpg"]
];
function myNamePageLoad() {
for(var l = 0; l < info.length; l ++){
    document.getElementById("tobeimage").src = info[l][3];
  }
document.getElementById("tobeimage").src = "";
}
function myFunction() {
  var myValName = document.getElementById("fname").value;
  document.getElementById("formarea").classList.add("trans");
  localStorage.setItem("name", myValName);

  var isFound = false;
  for (var i = 0; i < info.length; i++) {
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
  document.getElementById("tobeimage").src = "";
  document.getElementById("formarea").classList.remove("trans");
}
