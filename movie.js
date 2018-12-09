var axios = require("axios");
var fs = require("fs");

var MOVIE = function() {
    // divider will be used as a spacer between the tv data we print in log.txt
    var divider = "\n------------------------------------------------------------\n\n";
    var divider2 = "\n------------------------------------------------------------\n";

    this.findMovie = function(movieTitle) {

        var URL = "http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&r=json&tomatoes=true&apikey=trilogy";

        axios.get(URL).then(function (response) {
            var movieJSON = response.data;

            var movieResult = divider + "Title: " + movieJSON.Title+"\r\n"+
            "Year: " + movieJSON.Year+"\r\n"+
            "Imdb Rating: " + movieJSON.imdbRating+"\r\n"+
            "Rotten Tomatoes Rating: " + movieJSON.tomatoRating+"\r\n"+
            "Country: " + movieJSON.Country+"\r\n"+
            "Language: " + movieJSON.Language+"\r\n"+
            "Plot: " + movieJSON.Plot+"\r\n"+
            "Actors: " + movieJSON.Actors+"\r\n"+ divider;
            console.log(movieResult);

        }).catch(function (error) {
            console.log("I'm sorry, it looks like there was an error" + error);
        });
    }

};

module.exports = MOVIE;