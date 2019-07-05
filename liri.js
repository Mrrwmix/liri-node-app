require("dotenv").config();
const fs = require("fs");
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
    case 'do-what-it-says':
        readFile();
        break;
    default:
        break;
}

function concert(band) {
    band = band.split(' ').join('+');
    var url = 'https://rest.bandsintown.com/artists/' + band + '/events?app_id=codingbootcamp';
    axios.get(url).then(
        function(response){
            console.log(response.data.length);
            if (response.data.length == 0){
                return console.log('There are no upcoming concerts for ' + band.split('+').join(' ') + '.');
            }
            for (var i = 0; i < response.data.length; i++){
                console.log(response.data[i].venue.name + ' in ' + response.data[i].venue.city + ', ' + response.data[i].venue.region + ', ' + response.data[i].venue.country + ' on ' + moment(response.data[i].datetime).format('MM/DD/YYYY') + '.');
            }
        })
    .catch(function(err){
        console.log(err);
    })
}

function song(title) {
    if (title == '' || title == null){
        console.log('Ace of Base - The Sign');
        return console.log('https://open.spotify.com/track/0hrBpAOgrt8RXigk83LLNE');
    }
    spotify
        .search({ type: 'track', query: title })
        .then(function (response) {
            for (var i = 0; i < response.tracks.items.length; i++){
                console.log('-------------------------------------------------------------------------------------');
                console.log(response.tracks.items[i].artists[0].name + ' - ' + '\"' + response.tracks.items[i].name + '\"' + ' from the album ' +  '\"' + response.tracks.items[i].album.name + '\"' +'.');
                console.log(response.tracks.items[i].external_urls.spotify);
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}

function movie(name) {
    var url;
    if (name == '' || name == null || name == undefined){
        url = "http://www.omdbapi.com/?t=mr.%2Bnobody&y=&plot=short&apikey=trilogy";
    }
    else {
        url = "http://www.omdbapi.com/?t=" + name.split(' ').join('%2B') + "&y=&plot=short&apikey=trilogy"
    }
    axios.get(url).then(
        function(response){
            console.log('-------------------------------------------------------------------------------------');
            console.log('Title: ' + response.data.Title);
            console.log('Release Year: ' + response.data.Year);
            console.log('IMDB Rating: ' + response.data.imdbRating);
            if (Boolean(response.data.Ratings[1])){console.log('Rotten Tomatoes Rating: ' + response.data.Ratings[1].Value);}
            console.log('Produced in ' + response.data.Country);
            console.log('Language(s): ' + response.data.Language);
            console.log('Plot: ' + response.data.Plot);
            console.log('Actors: ' + response.data.Actors);
            console.log('-------------------------------------------------------------------------------------');
        }
    )
    .catch(function(err){
        console.log(err);
    })
}

function readFile() {

}