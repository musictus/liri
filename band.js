var axios = require("axios");
var fs = require("fs");
var moment = require("moment");

// Create the TV constructor
var BAND = function() {
    // divider will be used as a spacer between the tv data we print in log.txt
    var divider = "\n------------------------------------------------------------\n\n";
    var divider2 = "\n------------------------------------------------------------\n";
  
    // findShow takes in the name of a tv show and searches the tvmaze API
    this.findShow = function(artist) {
        var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

        axios.get(URL).then(function(response) {
        // Place the response.data into a variable, jsonData.
        var jsonData = response.data;
        
            if (jsonData.length === 0) {
                console.log(divider + "This band or artist is not touring at the moment! Please come back later!" + divider);
            } else {
                for (i = 0; i < jsonData.length; i++) {

                    jsonDate = jsonData[i].datetime;
                    var parsedDate = moment(parsedDate).format('YYYY-MM-DD');
                    
                        // showData ends up being the string containing the show data we will print to the console
                        var showData = [
                            "Show: " + jsonData[i].venue.name,
                            "Location: " + jsonData[i].venue.city + ", " + jsonData[i].venue.region,
                            "Date: " + parsedDate
                            ].join("\n");
                        console.log(divider + showData);

                            // Append showData and the divider to log.txt, print showData to the console
                            fs.appendFile("log.txt", showData + divider2, function(err) {
                            if (err) throw err;
                            })
                }
            }
    
        });
      };
    };

module.exports = BAND;