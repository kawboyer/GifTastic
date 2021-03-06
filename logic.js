$(document).ready(function () {

  // SETUP VARIABLES
  var animalArray = ["dog", "cat", "rabbit"];
  /* "hamster", "skunk", "goldfish", "bird", "ferret", "turtle", "sugar glider",
    "chincilla", "hedgehog", "hermit crab", "gerbil", "pymgy goat", "chicken", "capybara", "teacup pig", "serval", "salamandar", "frog"];
  */

  // FUNCTIONS

  for (var i = 0; i < animalArray.length; i++) {
    var animalButtons = $("<button>");
    animalButtons.addClass("btn btn-warning");
    animalButtons.attr("data-text", animalArray[i]);
    animalButtons.text(animalArray[i]);
    $("#btns").append(animalButtons);
    console.log(animalArray[i]);
  };


  // MAIN PROCESSES
  $(".btn").on("click", function () {
    console.log(this);
    var animal = $(this).attr("data-text");
    console.log(animal);

    var queryURL = "https://api.giphy.com/v1/gifs/search?limit=10&q=" + animal + "&api_key=EAfLzbygjCiirXMpOsUpd3ghVfNREa3G";
    console.log(queryURL);

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      for (var i = 0; i < response.data.length; i++) {
        //console.log(response.data);
        var results = response.data[i].images.fixed_height_still.url;
        console.log(results);
        // var stillDiv = $("<div class='item'>");
        //var rating = results[i].rating;
        //var p = $("<p>").text("Rating: " + rating);
        var animalImage = $("<img>");
        animalImage.attr("src", results);
        //stillDiv.append(p);
        //stillDiv.append(animalImage);
        $("#show-gifs").prepend(animalImage);
      }

      /*
      for (var i = 0; i < results.length; i++) {
        if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
          var stillDiv = $("<div class='item'>");
          var rating = results[i].rating;
          var p = $("<p>").text("Rating: " + rating);
          var animalImage = $("<img>");
          animalImage.attr("src", result);
          stillDiv.append(p);
          stillDiv.append(animalImage);
          $("#show-gifs").prepend(stillDiv);
      
        };
      };*/
    });
  });
  /*
  function displayGifs() {

    var gifs = $(this).attr("data-name");
 
  }
  */

});


//searchGiphy("dog");

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
