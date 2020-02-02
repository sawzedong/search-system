/**INFORMATION**/
          var info = [
        ["Chirper", 8, "Bird", "images/Chirper.jpg", 16, 2, 2017],
        ["Cheeper", 4.5, "Bird", "images/Cheeper.jpg"],
        ["Chirpy", 4.5, "Bird", "images/Chirpy.jpg", 20, 2, 2019],
        ["Cheepy", 4.5, "Bird", "images/Cheepy.jpg", 20, 2, 2019],
        ["Black Beak", 24.5, "Penguin", "images/Black-Beak.jpg", 5, 3, 2015],
        ["Waddles", 15, "Penguin", "images/Waddles.jpg", 11, 5, 2018],
        ["Elephantny", 9, "Elephant", "images/Elephantny.jpg", 17, 2, 2017],
        ["Bear Bear", 13.5, "Bear", "images/Bear-Bear.jpg", 18, 2, 2016],
        ["Turtle", 4, "Turtle", "images/Turtle.jpg", 10, 12, 2019],
        ["Hippo", 30, "Hippo", "images/Hippo.jpg", 7, 10, 2006],
        ["Kickly", 16.5, "Rabbit", "images/Kickly.jpg", 5, 3, 2019],
        ["Liony", 5.5, "Lion", "images/Liony.jpg", 4, 3, 2018],
        ["Scavenge Boy", 23, "Cat", "images/Scavenge-Boy.jpg", 15, 3, 2014],
        ["Lamby", 8.5, "Sheep", "images/Lamby.jpg", 15, 2, 2015],
        ["Sheepy", 21, "Sheep", "images/Sheepy.jpg", 16, 2, 2008],
        ["Angry Hello Kitty", 16.5, "Cat", "images/Kitty.jpg", 14, 2, 2015],
        ["Cheegy", 7, "Unknown", "images/Cheegy.jpg", 4, 3, 2017]
      ];

      var inputBarItem = document.getElementById("fname");
      inputBarItem.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
          document.getElementById("myBtn").click();
        }
      });
      //getAge function
      function age(bornday, bornmonth, bornyear){
    
    var today = new Date();
    var toDate = today.getDate();
    var toMonth = today.getMonth()+1;
    var toYear = today.getFullYear();
    
    var ageYear = toYear - bornyear;
    if (toMonth < bornmonth){
        ageYear -= 1;
    } else if (toMonth === bornmonth && toDate < bornday) {
        ageYear -= 1;
    }
    var ageMonth = toMonth - bornmonth;
    if (ageMonth < 0){
        ageMonth += 12;
    } 
    if (toDate < bornday){
        ageMonth -= 1;
    }
    if (ageYear === 1){
      if(ageMonth === 0){
        return ageYear + " year";
      } else if (ageMonth === 1) {
        return ageYear + " year and " + ageMonth + " month";
      } else {
        return ageYear + " year and " + ageMonth + " months"
      }
    } else if (ageYear != 1){
      if(ageMonth === 0){
        return ageYear + " years";
      } else if (ageMonth === 1) {
        return ageYear + " years and " + ageMonth + " month";
      } else {
        return ageYear + " years and " + ageMonth + " months"
      }
    }
    
}  
//birthday function
function birthday(bornday, bornmonth, bornyear){
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    bornmonth -= 1;
    var monthborn = months[bornmonth];
    
    return bornday + " " + monthborn + " " + bornyear;
}  
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
            var myValAge = age(info[i][4], info[i][5], info[i][6]);
            var myValBirthday = birthday(info[i][4],info[i][5],info[i][6]);
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
          document.getElementById("tobeage").innerHTML = "Age: "+ myValAge;
          document.getElementById("tobebirthday").innerHTML = "Birthday: "+ myValBirthday;
          document.getElementById("tobeimage").classList.remove("trans");
          document.getElementById("formarea").classList.add("trans");
        } else {
          document.getElementById("tobename").innerHTML = "No such person found.";
          document.getElementById("tobeheight").innerHTML = "";
          document.getElementById("tobenotes").innerHTML = "";
          document.getElementById("tobeage").innerHTML = "";
              document.getElementById("tobebirthday").innerHTML = "";
          document.getElementById("tobeimage").classList.add("trans");
        }
        document.getElementById("fname").value = "";
      }
      
      function showHome() {
        document.getElementById("tobename").innerHTML = "";
        document.getElementById("tobeheight").innerHTML = "";
        document.getElementById("tobenotes").innerHTML = "";
        document.getElementById("tobeage").innerHTML = "";
            document.getElementById("tobebirthday").innerHTML = "";
        document.getElementById("tobeimage").classList.add("trans");
        document.getElementById("tobeimage").src = "";
        document.getElementById("formarea").classList.remove("trans");
      }
