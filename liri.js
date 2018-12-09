require('dotenv').config();

var BAND = require("./band.js");
var band = new BAND();

var SPOTIFY = require("./spotify.js");
var spotify = new SPOTIFY();

// Grab liri command line argument
var liriCommands = process.argv[2];
// Joining the remaining arguments since they may contain spaces
var searchKeywords = process.argv.slice(3).join(" ");


if (liriCommands === "concert-this") {
    console.log("Searching for Concerts...");
    band.findShow(searchKeywords);

  } else if (liriCommands === "spotify-this-song") {
      console.log("Searching for Songs...");
      spotify.findSong(searchKeywords);

  } else if (liriCommands === "movie-this") {
      console.log("Searching for Movies...")

  } else if (liriCommands === "do-what-it-says") {
      console.log("Doing whatever...")
  };