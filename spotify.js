require("dotenv").config();

var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var axios = require("axios");
var fs = require("fs");


var SPOTIFY = function() {
        // divider will be used as a spacer between the tv data we print in log.txt
        var divider = "\n------------------------------------------------------------\n\n";
        var divider2 = "\n------------------------------------------------------------\n";
    
    this.findSong = function(songTitle) {

        console.log(songTitle);
        var spotify = new Spotify(keys.spotify);

        spotify.search({ type: 'track', query: songTitle }, function(err, data) {
            if (err) {
            return console.log('Error occurred: ' + err);
            }
        
        var spotifyResult = divider2 + "Artist: " + data.tracks.items[0].artists[0].name + "\nSong name: " + data.tracks.items[0].name +
        "\nAlbum Name: " + data.tracks.items[0].album.name + "\nPreview Link: " + data.tracks.items[0].preview_url + divider;

        console.log(spotifyResult); 
        
            // Append showData and the divider to log.txt, print showData to the console
            fs.appendFile("log.txt", spotifyResult, function(err) {
                if (err) throw err;
                })
        });
    }
};

module.exports = SPOTIFY;