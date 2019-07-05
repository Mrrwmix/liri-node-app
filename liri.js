require("dotenv").config();
var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);
const axios = require("axios");

var command = process.argv[2];

console.log(command);

switch(command){
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

function concert(band){
    console.log(band);
}

function song(title){
    console.log(title);
}

function movie(name){
    console.log(name);
}