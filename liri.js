require('dotenv').config();
var fs = require("fs");

var BAND = require("./band.js");
var band = new BAND();

var SPOTIFY = require("./spotify.js");
var spotify = new SPOTIFY();

var MOVIE = require("./movie.js");
var movie = new MOVIE();

// Grab liri command line argument
var liriCommands = process.argv[2];
// Joining the remaining arguments since they may contain spaces
var searchKeywords = process.argv.slice(3).join(" ");

var randomData;

function getRandom(){
    //Reads text in random.txt file
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
            return console.log(error);
        }
        else {
        console.log(data);

        //creates a variable for data in random.txt
        randomData = data.split(",");
        // console.log(randomData);
        var searchKeywords = randomData[1];
        spotify.findSong(searchKeywords);
        }
    });
};


if (liriCommands === "concert-this") {
    console.log("Searching for Concerts...");
    band.findShow(searchKeywords);

  } else if (liriCommands === "spotify-this-song") {
      console.log("Searching for Songs...");
      spotify.findSong(searchKeywords);

  } else if (liriCommands === "movie-this") {
      console.log("Searching for Movies...");
      movie.findMovie(searchKeywords);

  } else if (liriCommands === "do-what-it-says") {
      console.log("Doing whatever...")
      getRandom();
  };