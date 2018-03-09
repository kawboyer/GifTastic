$(document).ready(function () {

  // SETUP VARIABLES
  var animalArray = ["dog", "cat", "rabbit", "hamster", "skunk", "goldfish", "bird", "ferret", "turtle", "sugar glider",
  "chincilla", "hedgehog", "hermit crab", "gerbil", "pymgy goat", "chicken", "capybara", "teacup pig", "serval", "salamandar", "frog"];
  
  var main = $("body");
  var btns = main.find("#buttons");
    
  // FUNCTIONS

  for (var i = 0; i < animalArray.length; i++) {
    var animalButtons = $("<button>");
    animalButtons.addClass("btn btn-warning")
    $("#buttons").attr("data-text", animalArray[i]);
    $("#buttons").append(animalButtons);
    $("#buttons").append(animalArray[i]);
    console.log(animalArray[i]);
  };


  
});

// MAIN PROCESSES


var userInput = "";

var searchGiphy = function(gif) { 
  var queryURL = "https://api.giphy.com/v1/gifs/trending?" + userInput + "api_key=EAfLzbygjCiirXMpOsUpd3ghVfNREa3G";  

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    ("#buttons").append(JSON.stringify(response));
  });
};

searchGiphy("dog");

/*
 ------- 1. Create array of strings (each one related to a topic)
 ------- 2. Create buttons in HTML using the array. 
    Use a loop that appends a button for each string in the array.
3. When a button is clicked:
    - the page grabs 10 images from GIPHY (static)
4. When an image is clicked:
    - the GIF animates,
    - if clicked again it goes back to still
5. Under every gif the rating is displayed (provided by GIPHY).
6. Add a from that takes the value from the user input box and adds it to the "topics" array.
    - make a function call that takes each topic in the array and remakes buttons.
7. Deploy to GitHub.
*/
