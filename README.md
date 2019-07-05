# liri-node-app

## What the App Does

This Node application allows users to search for a band's upcoming concerts, use the Spotify API to find songs, search for a movie by title, and read any of the previous commands from a file. 

## What the App Includes

The app uses 4 node packages: axios, dotenv, moment, and node-spotify-api. It also uses fs, but that's a part of Node's core library. 

## How to Run the App 

1. Make sure you have a Spotify API ID and secret. 
2. Place both the ID and Secret in a file called ".env" in this app's root folder, like so:

# Spotify API keys

SPOTIFY_ID=YOUR_ID_HERE
SPOTIFY_SECRET=YOUR_SECRET_HERE 

3. Navigate to the cloned directory with Git Bash and type "node install" to get all of the dependencies. 
4. All commands start with: node liri.js

### concert-this

- To search for a band's upcoming concert, type concert-this "BAND_NAME_HERE" (must be in quotes) after node liri.js

Example:
![Image of concert response](https://raw.githubusercontent.com/Mrrwmix/liri-node-app/master/images/concert.png)

### spotify-this-song

- To search for a song by title, type spotify-this-song "SONG_TITLE" (must be in quotes) after node liri.js

Example: 
![Image of spotify response](https://github.com/Mrrwmix/liri-node-app/blob/master/images/song.png)

### movie-this

- To search for a movie by title, type movie-this "MOVIE_TITLE" (must be in qutoes) after node liri.js

Example: 
![Image of movie response](https://raw.githubusercontent.com/Mrrwmix/liri-node-app/master/images/movie.PNG)

### do-what-it-says

- This option takes a command from the random.txt file and runs one of the previous commands based on what's in the txt file. If your text file is set up correctly, type node liri.js do-what-it-says

Example:
Here is the text file already populated with a command and search term, comma separated.
![Image of random.txt](https://raw.githubusercontent.com/Mrrwmix/liri-node-app/master/images/randomtxt.PNG)

Since it's a spotify-this-song command, it tells the node app to search for "I Want It That Way" on Spotify. 
![Image of do-what-it-says response](https://raw.githubusercontent.com/Mrrwmix/liri-node-app/master/images/dowhatitsays.PNG)