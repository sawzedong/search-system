var inputBarItem = document.getElementById("findtag");
      inputBarItem.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
          document.getElementById("myBtn").click();
        }
      });

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
        ["Kitty", 16.5, "Cat", "images/Kitty.jpg"],
        ["Cheegy", 7, "Unknown", "images/Cheegy.jpg"]
      ];
      /**INFORMATION END*/
      function myFunction() {
        var outputArray = [];
        var myDiv = document.getElementById("outputarea");
        myDiv.innerHTML = "";
        var myValTag = document.getElementById("findtag").value;
        for (var i = 0; i < info.length; i++) {
          if (info[i][2] === myValTag) {
            myDiv.innerHTML +=
              "<div>" +
              "<h3>Name: " +
              info[i][0] +
              "</h3><br><h3>Height: " +
              info[i][1] +
              "cm</h3><br><h3>Species: " +
              info[i][2] +
              "</h3><br><img src='" +
              info[i][3] +
              "' height = 100px width = 100px>" +
              "</div>";
          }
        }
        if(myDiv.innerHTML == ""){
        myDiv.innerHTML = "<h1>No such species found</h1>"
        }
      }
