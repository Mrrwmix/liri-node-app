require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
const axios = require("axios");

var command = process.argv[2];

console.log(spotify);

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
    spotify
        .search({ type: 'track', query: title })
        .then(function (response) {
            console.log(JSON.stringify(response, null, 2));
        })
        .catch(function (err) {
            console.log(err);
        });
}

function movie(name) {
    console.log(name);
}