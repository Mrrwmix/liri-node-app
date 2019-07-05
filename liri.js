require("dotenv").config();
const moment = require("moment");
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
const axios = require("axios");

var command = process.argv[2];

switch (command) {
    case 'concert-this':
        concert(process.argv[3]);
        break;
    case 'spotify-this-song':
        song(process.argv[3]);
        break;
    case 'movie-this':
        movie(process.argv[3]);
        break;
    default:
        break;
}

function concert(band) {
    console.log(band);
}

function song(title) {
    console.log(title);
    if (title == '' || title == null){
        console.log('Ace of Base - The Sign');
        return console.log('https://open.spotify.com/track/0hrBpAOgrt8RXigk83LLNE');
    }
    spotify
        .search({ type: 'track', query: title })
        .then(function (response) {
            for (var i = 0; i < response.tracks.items.length; i++){
                console.log(response.tracks.items[i].artists[0].name + ' - ' + response.tracks.items[i].name + ' from the album ' + response.tracks.items[i].album.name + '.');
                console.log(response.tracks.items[i].external_urls.spotify);
                console.log('-------------------------------------------------------------------------------------');
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}

function movie(name) {
    console.log(name);
}