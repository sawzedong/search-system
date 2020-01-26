/**INFORMATION**/
var info = [
  //["pic1", 123, "crazy", "picone.png"],
  //["pic2", 234, "mad", "pictwin.png"],
  //["pic3", 345, "stupid", "picthree.png"]
  ["Cheegy", 9, "Unknown Species", "picone.png"],
  ["Turtle", 6, "Turtle", "picone.png"],
  ["Chirper", 9.5, "Bird", "picone.png"],
  ["Little Fluff", 7, "Bear", "picone.png"],
  ["Waddles", 15.5, "Penguin", "picone.png"],
  ["Kickly", 19, "Rabbit", "picone.png"],
  ["Elephantny", 5, "Elephant", "picone.png"],
  ["Liony", 5, "Lion", "picone.png"],
  ["Black Beak", 25, "Penguin", "picone.png"],
  ["Bear Bear", 13, "Bear", "picone.png"],
  ["Hippo", 29, "Hippo", "picone.png"]
];
function myFunction() {
  var myValName = document.getElementById("fname").value;
  document.getElementById("formarea").classList.add("trans");
  localStorage.setItem("name", myValName);

  var isFound = false;
  for (var i = 0; i < 3; i++) {
    if (info[i][0] === myValName) {
      localStorage.setItem("height", info[i][1]);
      localStorage.setItem("notes", info[i][2]);
      localStorage.setItem("reference", info[i][3]);
      var myValHeight = info[i][1];
      var myValNotes = info[i][2];
      var myValRef = info[i][3];
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
